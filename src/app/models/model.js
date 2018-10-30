import { rethinkdb, dbConfig } from "../../config/consts";

export default class Model {

    static connect() {
        return this.connection = rethinkdb.connect(dbConfig)
            .then(connection => {
                return connection;
            })
    }

    static async create(tableName, object) {
        return rethinkdb.table(tableName).insert(object).run(await this.connect())
            .then(result => {
                return result;
            })
            .catch(error => {
                return error;
            })
    }

    static async findOne(tableName, id) {
        return rethinkdb.table(tableName).get(id).run(await this.connect())
            .then(result => {
                return result;
            })
            .catch(error => {
                return error;
            })
    }

    static async findAll(tableName) {
        const result = await this.connect();
        return rethinkdb.table(tableName).run(result)
            .then(cursor => {
                return cursor.toArray();
            })
            .catch(error => {
                return error;
            })
    }

    static async findBy(tableName, fieldName, value) {
        return rethinkdb.table(tableName).filter(rethinkdb.row(fieldName).eq(value)).run( await this.connect())
            .then(cursor => {
                return cursor.toArray();
            })
            .catch(error => {
                return error;
            })
    }

    static async findIndexed(tableName, query, index) {
        return rethinkdb.table(tableName).getAll(query, { index: index }).run( await this.connect())
            .then(cursor => {
                return cursor.toArray();
            })
            .catch(error => {
                return error;
            })
    }

    static async update(tableName, id, object) {
        return rethinkdb.table(tableName).get(id).update(object).run( await this.connect())
            .then(result => {
                return result
            })
            .catch(error => {
                return error;
            })
    }

    static async delete(tableName, id){
        return rethinkdb.table(tableName).get(id).delete().run( await this.connect())
            .then(result=>{
                return result;
            })
            .catch(error=>{
                return error;
            })
    }
}