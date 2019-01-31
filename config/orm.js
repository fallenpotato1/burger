var connection = require("./connection")

var orm = {
    selectAll: function(tableName, cb) {
        var queryString = "SELECT * FROM ??"
        connection.query(queryString, [tableName], function(error, result) {
            if (error) {
                throw error
            }
            cb(result)
            
        })
    },
    insertOne: function(burgerName, cb) {
        var queryString = "INSERT INTO burger (burger_name) VALUES (?)"
        connection.query(queryString, [burgerName], function(error, result) {
            if(error) {
                throw error
            }
            cb(result)
        })
    },
    updateOne: function() {
        var queryString = "UPDATE "
    }
}

module.exports = orm