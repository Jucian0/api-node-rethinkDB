import { rethinkdb, dbConfig } from "../../config/consts";

export default class Model {


    static connect() {
        this.connection = rethinkdb.connect(dbConfig)
            .then(connection => {
                return connection;
            })
    }

    static find(tableName, id) {
        return rethinkdb.table(tableName).get(id).run(this.connection)
            .then(result => {
                return result;
            })
            .catch(error => {
                return error;
            })
    }

    static findAll(tableName) {
        return rethinkdb.table(tableName).run(this.connection)
            .then(cursor => {
                return cursor.toArray();
            })
            .catch(error => {
                return error;
            })
    }

    static findBy(tableName, fieldName, value) {
        return rethinkdb.table(tableName).filter(rethinkdb.row(fieldName).eq(value)).run(this.connection)
            .then(cursor => {
                return cursor.toArray();
            })
            .catch(error => {
                return error;
            })
    }

    static findIndexed(tableName, query, index) {
        return rethinkdb.table(tableName).getAll(query, { index: index }).run(this.connection)
            .then(cursor => {
                return cursor.toArray();
            })
            .catch(error => {
                return error;
            })
    }

    static async save(tableName, object) {
        console.log('1');

        const result = await this.connect();
        console.log(this.connection)

        return rethinkdb.table(tableName).insert(object).run(this.connection)
            .then(result => {
                return result;
            })
            .catch(error => {
                return error;
            })
    }

    static edit(tableName, id, object) {
        return rethinkdb.table(tableName).get(id).update(object).run(this.connection)
            .then(result => {
                return result
            })
            .catch(error => {
                return error;
            })
    }
}