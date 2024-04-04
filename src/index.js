require('dotenv').config();
const { connectToDatabase } = require('./config/database.config');
const { setupExpressApp } = require('./app');

const startApp = async () => {
  await connectToDatabase();
  const app = setupExpressApp();

  const port = process.env.PORT || 3001;

  const server = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });

  // Graceful shutdown
  process.on('SIGINT', () => {
    console.log('Received SIGINT. Shutting down gracefully...');
    server.close(() => {
      console.log('Server closed');
      process.exit(0);
    });
  });

  process.on('SIGTERM', () => {
    console.log('Received SIGTERM. Shutting down gracefully...');
    server.close(() => {
      console.log('Server closed');
      process.exit(0);
    });
  });
};

startApp().catch((err) => {
  console.error('Failed to start the application:', err);
  process.exit(1);
});
