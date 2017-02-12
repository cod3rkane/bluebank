var MongoFactory = function() {
    this.mongo;
}

MongoFactory.prototype.getMongo = function() {
    if (this.mongo) {
        return this.mongo;
    } else {
        this.mongo = require('./mongo');
        return this.mongo;
    }
}

module.exports = new MongoFactory();