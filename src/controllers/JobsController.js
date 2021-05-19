const DBModule = require('../db/db');
let  query = DBModule.query;

exports.get_jobs = function(req, res) {
    let sql = "SELECT * FROM jobs";

    query(sql).then(function(data) {
        res.send(data);
    });
};

function getDate(){
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;
    return today.slice(0,10).replace(/-/g,'/');
}



exports.post_jobs = function(req, res) {
    //check if python app send 1 job per request or multiple jobs
console.log("test")
    //Should have validations like this one
    if (!req.body.title){
        res.send("No title");
    }
    const data = req.body;
    //Prepare all params if needed, example:
    let {city, title, salary, country, short_description, url, language, sector, description} = data;

    let timestamps = getDate();
    insertJob();

    function insertJob(){
        //here build the insert query
        let sql_2 = `INSERT INTO jobs (city, title, salary, timestamps, country, short_description, url, language, sector, description) 
        VALUES ('${city}', '${title}', '${salary}', '${timestamps}', '${country}', '${short_description}', '${url}', '${language}', '${sector}', ?), '[${description}]'`;
        query(sql_2).then(function() {
            res.send("Insert succesfull");
        });

    }

};