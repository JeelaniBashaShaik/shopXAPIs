import express, { Request, Response } from 'express';
import ServerlessHttp from 'serverless-http';
import cartRoutes from './routes/cart';

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/user/:userId/cart', cartRoutes);

/* app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
}); */

module.exports.handler = ServerlessHttp(app);
