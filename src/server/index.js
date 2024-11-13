
import next from 'next';
import express from 'express';
import mongoose from 'mongoose';
import foodItemroutes from '../server/routes/foodItemroutes.js'; // Adjust the import path as needed

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Middleware to parse JSON
  server.use(express.json());

  // API routes
  server.use('/api', foodItemroutes);

  // Handle Next.js pages
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  // Server start function
  async function serverStart() {
    try {
      await mongoose.connect(process.env.CONNECTION_STR);
      console.log('Connected to MongoDB');

      server.listen(process.env.PORT || 4000, () => {
        console.log(`Server started on port ${process.env.PORT || 4000}`); 
      });
    } catch (error) {
      console.error('Database connection failed:', error);
    }
  }

  serverStart();
});
