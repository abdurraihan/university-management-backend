import cors from 'cors';
import express, { Application } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { UserRoutes } from './app/modules/user/users.route';

const app: Application = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// application route
app.use('/api/v1/users/', UserRoutes);

// Testing
/* app.get('/',  (req: Request, res: Response , next:NextFunction) => {
     //throw new ApiError(400, 'orebapre ');
     next('orebapre')
}) */

app.use(globalErrorHandler);

export default app;
