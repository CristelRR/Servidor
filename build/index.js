"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const index_routes_1 = __importDefault(require("./routes/index-routes"));
const empleados_routes_1 = __importDefault(require("./routes/empleados-routes"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 5000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json()); //ACEPTA OBJETOS JSON
        this.app.use(express_1.default.urlencoded({ extended: false })); //ACEPTA FORMULARIOS HTML
    }
    routes() {
        this.app.use('/', index_routes_1.default);
        this.app.use('/empleados', empleados_routes_1.default);
    }
    star() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Serever on port ', this.app.get('port'));
        });
    }
}
const server = new Server();
server.star();
