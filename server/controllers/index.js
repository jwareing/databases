var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(res);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      //
      var data = req.body;
      console.log(data);
      models.messages.post(data, res);
      
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(res);
    },
    post: function (req, res) {
      console.log("User Test calls this function.");
      //call models[users].post with req.body
      var data = req.body;
      console.log(data);
      models.users.post(data, res);
    }
  }
};

