import {Router} from 'express';
import {empleadosController} from '../controllers/empleados-controller'

class EmpleadosRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', empleadosController.getEmpleados);
        this.router.get('/:id', empleadosController.getByIdEmpleados);
        this.router.post('/', empleadosController.createEmpleados);
        this.router.delete('/:id', empleadosController.deleteEmpleados);
        this.router.put('/:id', empleadosController.updateEmpleados);
    }
}

const empleadosRoutes =  new EmpleadosRoutes();     //<-------
export default empleadosRoutes.router;              //<-------