# SQL Introduction
* Accessing file is slow compared to databases

Why we use a database? To store fata and make it easily accesible. They have quicker access than a file.

## Scaling
* Horizontal scaling: add mor servers (and merge data into one database)
* Verical scaling: Improve server capacity/hardware

## SQL
What is SQL database?
* It stores data in tables.
* It allow us to relate tables
* There is a strong data schema (all data (in a table) has to fit)
* Data relations: one-to-one, one-to-many, many-to-many

## NoSQL
 NoSQL database?
* It doesn't follow the SQL schema
* We have databases, but instead of tables we have collections.
* We don't have records, we have documents (they are like JSON)
* Document hasn't a strong schema. We can store documents with different sructures in the same collection
* We don't have relations, we duplicate the data. This mean that if we need to update one of this duplicate data we need to update all its copies (id they need the latest values). This has the advantage that the copy can be given inmediately, instead of doing join operation through multiple tables like in SQL
* We can relate documents but we don't have to (and we shouldn't do it too much or our queries will become slow)

# SQL vs NoSQL
|                                     SQL                                    |                          NoSQL                         |
|:--------------------------------------------------------------------------:|:------------------------------------------------------:|
|                              Data uses Schemas                             |                       Schema-less                      |
|                                 Relations!                                 |               No (or very few) relations               |
|                 Data is distributed across multiple tables                 | Data is typically merged / nested in a few collections |
| Horizontal scaling is difficult / impossible. Vertical scaling is possible |    Both horizontal and vertical scaling is possible    |
|     Limitations for lots of (thousands) read & write queries per second    |     Great performace for mass read & write requests    |

# MySQL
* [Official Website](https://www.mysql.com/)
* Install the lates MySQL server and MySQL workbench usind the custom installation

# Interact with SQL from node
* Install mysql2 package: ``npm install --save mysql2````
* We can create a connection each time we need to do a query (which we must close after it is done) or we can use a [connection pool](https://www.npmjs.com/package/mysql2#using-connection-pools) to imporve time.
```javascript
const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'hostname',
    user: 'database-username',
    database: 'schema-name',
    password: 'user-password'
})
```
* For a better manage of the pool we can use pool promises to begin and end a connection in a single line. For instance:
```javascript
const promisePool = pool.promise()
const data = await promisePool.query("SELECT *")
```