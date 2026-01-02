import app from './app.js';
import mongoose from 'mongoose';
import config from './app/config/index.js';

async function main() {
  try {
    await mongoose.connect(config.databaseUrl as string);
    console.log('Connected to MongoDB');

    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log('Failed to connect to MongoDB', error);
  }
}
main();
