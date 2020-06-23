// const greeting: string = 'Hello World';
// const numbers: number[] = [1, 2, 3];
import express, { Application, Request, Response, NextFunction} from 'express';

const app: Application = express();

const add = (a:number, b:number):number => a + b;

app.get('/', (req: Request, res: Response, next: NextFunction) =>{
    console.log(add(4, 5));
    res.send('Hello World!');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
