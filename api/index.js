const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { loadRecipesInTheDb } = require('./src/helpers/loadRecipesInTheDb.js');
const PORT = process.env.PORT;

// Syncing all the models at once.
conn.sync({ force: false }).then(async () => {
  //await loadRecipesInTheDb();
  server.listen(PORT, () => {
    console.log('%s listening at ' + PORT); // eslint-disable-line no-console
  });
});
