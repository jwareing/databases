var db = require('../db');



module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (data, res) {
      // console.log("Data message: " + data.message);
      db.insertMessages(data, res);

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (data, res) {
      db.insertUsers(data, res);
    }
  }
};

