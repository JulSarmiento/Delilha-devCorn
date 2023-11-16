import 'dotenv/config';
import app from './src/app.js';
import Sequelize from './src/utils/postgresql.config.js';

const {PORT} = process.env;

const start = async () => {
  try {
    await Sequelize.sync();
    console.log('Database connected successfully to MongoAtlas.')
    
    app.listen(PORT || 3001);
    console.log(`Server listening on port ${PORT}`);
  } catch (error) {
    console.log('Error: ', error);
    process.exit(1);
  }
}

start();