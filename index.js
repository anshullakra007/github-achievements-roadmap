const Redis = require('ioredis');

class TaskWorker {
  constructor(options = {}) {
    this.redis = new Redis(options.redisUrl || 'redis://localhost:6379');
    this.queueName = options.queueName || 'default_tasks';
    this.isProcessing = false;
  }

  async enqueue(taskData) {
    const payload = JSON.stringify({
      id: Date.now(),
      data: taskData,
      status: 'pending'
    });
    await this.redis.lpush(this.queueName, payload);
    return true;
  }

  async startProcessing(handler) {
    this.isProcessing = true;
    console.log(`[Worker] Started processing queue: ${this.queueName}`);
    
    while (this.isProcessing) {
      const item = await this.redis.brpop(this.queueName, 2);
      if (item) {
        const [queue, payload] = item;
        const task = JSON.parse(payload);
        try {
          await handler(task.data);
          console.log(`[Worker] Successfully processed task ${task.id}`);
        } catch (error) {
          console.error(`[Worker] Failed task ${task.id}:`, error);
          // TODO: implement retry mechanism
        }
      }
    }
  }

  stop() {
    this.isProcessing = false;
    this.redis.quit();
  }
}

module.exports = TaskWorker;
