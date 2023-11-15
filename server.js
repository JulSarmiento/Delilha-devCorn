import 'dotenv/config';
import app from './src/app.js';

const PORT = process.env.PORT || 3001;

const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

server.on ('error', (error) => {
  console.log('Error: ', error);
});