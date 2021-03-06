var orm = require("../config/orm.js");

var burger = {
  all: function(cb){
    orm.all("burgers", function(res){
      cb(res);
    });
  },
  // create: function(name, cb){
  //   orm.create("burgers",["burger_name", "devoured"], [name, false], function(res){
  //     cb(res);
  //   });
  // },  

// make create function here

create: function(cols, vals, cb) {
  orm.create("burgers", cols, vals, function(res) {
    cb(res);
  });
},


  update: function(id, cb){
    var condition = "id=" + id;
    orm.update("burgers", {
      devoured:true}, condition, function(res){
        cb(res)
      })
  }
}
    
module.exports = burger;
