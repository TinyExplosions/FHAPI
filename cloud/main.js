exports.heartbeat = function(params, callback) {
    return callback(null,{heartbeat:"success"});
};

exports.testAct = function(params, callback) {
    console.log(params.foo);
    return callback(null,{success:"Response From The Server"});
};

exports.readUserList = function(params, callback) {
    console.log("Reading User List");
    return callback(null,_userList);
};

exports.readUser = function(params, callback) {
    var attribs = params.attributes;
    var user = _getUser(attribs.userID);
    if(user) {
        console.log(user);
        return callback(null,user);
    } else {
        return callback(null,{error:"User Not Found"});
    }
};

exports.createUser = function(params, callback) {
    var user = params.attributes;
    console.log("Create User",user);
    user.userID = Math.floor(Math.random()*99999);
    _userList.push(user);
    return callback(null,user);
};

exports.updateUser = function(params, callback) {
    var attribs = params.attributes;
    console.log("Update User",attribs);
    var user = _updateUser(attribs);
    if(user) {
        console.log(user);
        return callback(null,user);
    } else {
        return callback(null,{error:"User Not Found"});
    }
};

var _updateUser = function(user) {
    for (var i = 0; i < _userList.length; i++) {
        var item = _userList[i];
        if(item.userID == user.userID) {
            _userList[i] = user;
            console.log("updated?",_userList);
            return user;
        }
    }
    return null;
};

var _getUser = function(userID) {
    for (var i = 0; i < _userList.length; i++) {
        var user = _userList[i];
        if(user.userID == userID) {
            return user;
        }
    }
    return null;
};


var _userList = [{
    "userID": 4715,
    "fullName": "Jacki Flynn",
    "surname": "Flynn",
    "preferredName": "Jacki"
},
{
    "userID": 7121,
    "fullName": "Ernie Black",
    "surname": "Black",
    "preferredName": "Ernie"
},
{
    "userID": 3544,
    "fullName": "Annette Holiday",
    "surname": "Holiday",
    "preferredName": "Annette"
},
{
    "userID": 2529,
    "fullName": "Mabel Flynn",
    "surname": "Flynn",
    "preferredName": "Mabel"
},
{
    "userID": 2739,
    "fullName": "Kathleen Blum",
    "surname": "Blum",
    "preferredName": "Kathleen"
}];