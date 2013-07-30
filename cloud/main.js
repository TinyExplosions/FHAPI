exports.heartbeat = function(params, callback) {
    return callback(null,{heartbeat:"success"});
};

exports.testAct = function(params, callback) {
    console.log(params.foo);
    return callback(null,{success:"Teh Awesum!"});
};