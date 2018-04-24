# Edetek node api
### Tech
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework
* [MySql] - DB
* [Knex] -ORM for MySQL

### Installation

Edetek node api  requires [Node.js](https://nodejs.org/) v4+ to run.

```sh
$ git clone https://github.com/lapachuka/edetek_node.git
$ cd edetek_node
```

Install the dependencies and devDependencies.

```sh
$ npm install -d
```

If you don't have MySQL first of all you suppose to install . Please check https://dev.mysql.com/doc/mysql-getting-started/en/

Then we need to create DB
```sh
$ mysql -u username
$ create database edetek_node;
```

Then change knex config file for local parameters
```sh
module.exports = {
    client: 'mysql',
    connection: {
        user: 'root',
        password: 'password',
        database: 'edetek_node'
    }
}
```

and start server

```sh
$ node app.js
```

### Happy using!
