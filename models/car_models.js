const db = require('../database');

const car = {
  get: function(callback) {
    return db.query('select * from car order by idcar desc', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from car where idcar=?', [id], callback);
  },
  add: function(car, callback) {
    return db.query(
      'insert into car (brand,model,yearmodel) values(?,?,?)',
      [car.brand, car.model, car.yearmodel],
      callback
    );
  },
  delete: function(idcar, callback) {
    return db.query('delete from car where idcar=?', [id], callback);
  },
  update: function(idcar, car, callback) {
    return db.query(
      'update car set name=?,author=?, isbn=? where id_car=?',
      [car.brand, car.model, car.yearmodel, idcar],
      callback
    );
  }
};
module.exports = car;