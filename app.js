const express = require('express');

const loader = require('./loaders');

const config = require('./config');

async function startServer() {
  const app = express();

  await loader({ expressApp: app });

  // app.use('/users', require('./api/routes/users'));

  app.listen(config.port, err => {
    if (err) {
      console.log(err);
      process.exit(1);
      return;
    }
    console.log(`
      ################################################
      🛡️  Server listening on port: ${config.port} 🛡️ 
      ################################################
    `);
  });
}

startServer();