# Async Task Worker

A robust, high-performance asynchronous task processing queue for Node.js environments. Designed to seamlessly manage background jobs, delayed tasks, and high-throughput job processing with a Redis backend.

## 🚀 Features
- **Scalable Worker Pool**: Spin up multiple workers to process tasks concurrently.
- **Redis-Backed**: Guarantees persistence and atomic operations for distributed queues.
- **Automatic Retries**: Configurable exponential backoff for transient failures.
- **Graceful Shutdown**: Safely drains the queue and finishes active jobs on `SIGTERM`.

## 📦 Installation
\`\`\`bash
npm install async-task-worker
\`\`\`

## 🛠️ Quick Start
\`\`\`javascript
const TaskWorker = require('async-task-worker');

// Initialize the worker with your Redis URL
const worker = new TaskWorker({ redisUrl: 'redis://127.0.0.1:6379' });

// Enqueue a job payload
worker.enqueue({ email: 'user@example.com', type: 'welcome_email' });

// Start processing jobs from the queue
worker.startProcessing(async (data) => {
  console.log(`Sending ${data.type} to ${data.email}...`);
  // Simulate an asynchronous API call
  await new Promise(resolve => setTimeout(resolve, 500));
  console.log('Email sent successfully!');
});
\`\`\`

## 🤝 Contributing
Contributions are always welcome! Feel free to open an issue or submit a pull request if you have ideas for new features or find a bug.

## 📄 License
This project is licensed under the MIT License.
