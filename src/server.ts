import express, { Application, Request, Response } from 'express';
import cors from 'cors'
import { initialKanbanBoardColumn } from './data';

const app: Application = express();
const port: number = 3001;
const apiRoot = '/api';

const kanbanBoardColumns = [...initialKanbanBoardColumn];

const allowedOrigins = ['http://localhost:4200'];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  })
);

app.get(`${apiRoot}/table`, (req: Request, res: Response) => {
  const tables = kanbanBoardColumns.map(({ id, name }) => ({ id, name }));
  res.send(tables);
});

app.get(`${apiRoot}/table/:id/task`, (req: Request, res: Response) => {
  const tableId = req.params.id;
  const tasks = kanbanBoardColumns
    .filter(({ id }) => id === tableId)
    .flatMap(({ tasks }) => tasks);

  res.send(tasks);
});

app.listen(port, function () {
  console.log(`App is listening on port ${port} !`);
});

