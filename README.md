# Async Task Worker

A robust, high-performance asynchronous task processing queue for Node.js environments.

## Features
- Scalable worker pool
- Redis-backed job storage
- Automatic retries with exponential backoff
- Graceful shutdown mechanisms

## Installation
\`\`\`bash
npm install async-task-worker
\`\`\`

## Quick Start
```javascript
const TaskWorker = require('async-task-worker');

const worker = new TaskWorker({ redisUrl: 'redis://127.0.0.1:6379' });

// Enqueue a job
worker.enqueue({ email: 'test@example.com', type: 'welcome_email' });

// Process jobs
worker.startProcessing(async (data) => {
  console.log('Sending email to', data.email);
  // simulate work
  await new Promise(resolve => setTimeout(resolve, 500));
});
```
