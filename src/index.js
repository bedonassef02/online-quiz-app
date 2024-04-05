const { connectToDatabase } = require("./config/database.config");
const { setupExpressApp } = require("./app");
const { handleGracefulShutdown } = require("./utils/handleGracefulShutdown");
process.loadEnvFile('./.env')


const startApp = async () => {
  
  await connectToDatabase();

  const app = setupExpressApp();

  const port = process.env.PORT || 3000;

  const server = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });

  // Attach event listeners for SIGINT and SIGTERM signals
  process.on("SIGINT", () => handleGracefulShutdown(server, "SIGINT"));
  process.on("SIGTERM", () => handleGracefulShutdown(server, "SIGTERM"));
};

startApp().catch((err) => {
  console.error("Failed to start the application:", err);
  process.exit(1);
});
