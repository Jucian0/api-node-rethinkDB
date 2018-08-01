import { rethinkdb, dbConfig } from "../../config/consts";
import ConnectionDB from "./connection.db";

export default class Model extends ConnectionDB{


    static find(tableName, id) {
        return rethinkdb.table(tableName).get(id).run(this.connetion)
            .then(result => {
                return result;
            })
            .catch(error => {
                return error;
            })
    }

    static findAll(tableName) {
        return rethinkdb.table(tableName).run(this.connetion)
            .then(cursor => {
                return cursor.toArray();
            })
            .catch(error => {
                return error;
            })
    }

    static findBy(tableName, fieldName, value) {
        return rethinkdb.table(tableName).filter(rethinkdb.row(fieldName).eq(value)).run(this.connetion)
            .then(cursor => {
                return cursor.toArray();
            })
            .catch(error => {
                return error;
            })
    }

    static findIndexed(tableName, query, index) {
        return rethinkdb.table(tableName).getAll(query, { index: index }).run(this.connetion)
            .then(cursor => {
                return cursor.toArray();
            })
            .catch(error => {
                return error;
            })
    }

    static  save(tableName, object) {
        console.log(this.connetion);

        return rethinkdb.table(tableName).insert(object).run( this.connetion )
            .then(result => {
                return result;
            })
            .catch(error => {
                return error;
            })
    }

    static edit(tableName, id, object) {
        return rethinkdb.table(tableName).get(id).update(object).run(this.connetion)
            .then(result => {
                return result
            })
            .catch(error => {
                return error;
            })
    }
}