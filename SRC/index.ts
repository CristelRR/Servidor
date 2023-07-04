import express, { Application } from 'express';
import morgan from 'morgan';
import indexRoutes from './routes/index-routes';
import empleadosRoutes from './routes/empleados-routes';
import cors from 'cors';


class Server{
    public app: Application;

    constructor(){
        this.app =  express();
        this.config();
        this.routes();

    }

    config():void{
        this.app.set('port', process.env.PORT || 5000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json()); //ACEPTA OBJETOS JSON
        this.app.use(express.urlencoded({extended:false})) //ACEPTA FORMULARIOS HTML
    }

    routes():void{  //grupo de rutas
        this.app.use('/', indexRoutes);
        this.app.use('/empleados', empleadosRoutes)
    }

    star() :void{
        this.app.listen(this.app.get('port'), ()=>{
            console.log('Serever on port ', this.app.get('port'));
        });
    }
}

const server = new Server();
server.star();