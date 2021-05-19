const DBModule = require('../db/db');
const bcrypt = require('bcrypt');

const saltRounds = 10;
let  query = DBModule.query;

exports.user_get_list = function(req, res) {
  let sql = "SELECT * FROM users";

  query(sql).then(function(data) {
    res.send(data);
  });
};

exports.register_user = function(req, res) {
  if (!req.body.email){
    res.send("No email");
  }

  if (!req.body.password){
    res.send("No Password");
  }

  if (!req.body.account_type){
    res.send("No Account type");
  }

  let email = req.body.email.toString();
  let password = req.body.password.toString();
  let account_type = req.body.account_type.toString();
  let sql_1 = `SELECT * FROM users WHERE email = '${email}'`;



  //Check if email is already in use
  query(sql_1).then(function(data) {
    if(data.length > 0) {
      res.send("Email is already in use");
    } else {
      insertUser();
    }
  });

  function insertUser(){
      //Auto-gen a salt and hash on same function call
    bcrypt.hash(password, saltRounds, (err, hash) => {
      let sql_2 = `INSERT INTO users (email, password, account_type) VALUES ('${email}', '${hash}', '${account_type}')`;
        query(sql_2).then(function() {
        res.send("Insert succesfull");
      });
    });
  }

};

exports.login_user = function (req,res) {

  if (!req.body.email){
    res.send("No email");
  }

  if (!req.body.password){
    res.send("No Password");
  }

  let email = req.body.email.toString();
  let password = req.body.password.toString();

  let sql_1 = `SELECT * FROM users WHERE email = '${email}'`;
    //Check if email is already in use
    query(sql_1).then(function(data) {
      if(data.length > 0) {
        checkPassword(data);
      } else {
        res.send("Email address not found");
      }
  });

  function checkPassword(data){
    let hashed_Password = data[0]['password'];
    let user = data[0]['email'];
  // Load hash from the db, which was preivously stored 
      bcrypt.compare(password, hashed_Password, function(err, password_check_res) {
      if (password_check_res) {
        login(user);
      } else {
        res.send("Password is not correct");
      }
    });
  }

  function login(user){
    req.session.loggedin = true;
    req.session.username = user;
    res.send(`Successfull logged in ${user}`);
  }

}