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
          const retries = (task.retries || 0) + 1;
          if (retries <= 3) {
            const backoff = Math.pow(2, retries) * 1000;
            console.warn(`[Worker] Task ${task.id} failed, retrying in ${backoff}ms...`);
            setTimeout(() => {
              task.retries = retries;
              this.redis.rpush(this.queueName, JSON.stringify(task));
            }, backoff);
          } else {
            console.error(`[Worker] Task ${task.id} failed permanently:`, error);
          }
        }
      }
    }
  }

  stop() {
    console.log(`[Worker] Shutting down gracefully...`);
    this.isProcessing = false;
    this.redis.quit();
  }
}

// Support graceful shutdown by default
process.on('SIGTERM', () => {
  console.log('Received SIGTERM, initiating graceful shutdown');
});

module.exports = TaskWorker;
