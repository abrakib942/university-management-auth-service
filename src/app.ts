import cors from 'cors';
import express, { Application } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { UserRoutes } from './app/modules/user/user.routes';
import { AcademicSemesterRoutes } from './app/modules/academicSemester/academicSemester.routes';

const app: Application = express();

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/users', UserRoutes);
app.use('/api/v1/academic-semester', AcademicSemesterRoutes);

//Testing
// app.get('/', async (req, res, next) => {
//   Promise.reject(new Error('Unhandled Promise Rejection'))
// })

//global error handler
app.use(globalErrorHandler);

export default app;
