import express, { request, response } from 'express';
import { categoriesRoutes } from './routes/categories.routes';
const app = express();

app.use(express.json())

app.use(categoriesRoutes)


app.post('/courses',(request,response)=>{
    const { name } = request.body;
    console.log(request.body);
    return response.json({name : name })
})

app.listen(3333,() => console.log("Server is running!"));