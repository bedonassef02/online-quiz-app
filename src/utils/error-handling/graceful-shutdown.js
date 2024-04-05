function closeServerAndExit() {
  console.log('Server closed');
  process.exit(0);
}

// Graceful shutdown
function gracefulShutdown(server, signal) {
  console.log(`Received ${signal}. Shutting down gracefully...`);
  server.close(closeServerAndExit);
}

module.exports = { handleGracefulShutdown: gracefulShutdown };
