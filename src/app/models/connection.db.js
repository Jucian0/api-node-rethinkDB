import { rethinkdb, dbConfig } from "../../config/consts";

export default class ConnectionDB{
    
    constructor(){
        rethinkdb.connect(dbConfig)
            .then(connection=>{
                return connection;
            });
    }
}