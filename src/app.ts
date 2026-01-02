import express, {
  type Application,
  type Request,
  type Response,
} from 'express';
import cors from 'cors';
import { studentRoutes } from './app/modules/students/student.route.js';
const app: Application = express();
// const port = 3000

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());

//application routes
app.use('/api/v1/stuents', studentRoutes);
app.get('/', (req: Request, res: Response) => {
  res.send('server is running!');
});
export default app;
