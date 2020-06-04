var express = require('express');//imports express js
var bodyParser = require('body-parser');//enable the express app to read the incoming body
var logger = require('morgan');//for logging all http request 
var methodOverride = require('method-override')//allows to use put and delete request
var cors = require('cors');//cross origin resource sharing enables ionic to communicate with server
var app = express();
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var fs = require('file-system');
const fileUpload = require('express-fileupload');
var base64ToImage = require('base64-to-image');
var config = require('./config');
app.use(logger('dev'));
app.use(methodOverride());
app.use(cors());
app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: true, limit: '500mb' }));
app.use(bodyParser.json({ limit: '500mb' }));
app.use(express.json({ limit: '500mb' }));
const secret = 'RandomLettersAndNumbers'
var mysql = require('mysql');
var con = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database,

});
con.connect((err) => {
    if (err) throw err;
    console.log('connected');

})
var reg_router = require('./routes/forum');
app.use(reg_router);


app.post("/signup", (req, res) => {
    const name = req.body.name
    const email = req.body.em
    const password = req.body.pas
    const phone = req.body.mob
    const reg = req.body.reg
    const batch = req.body.batch
    const dept = req.body.dept
    const course = req.body.course
    const year = req.body.year
    const userid = Date.now();
    const im = req.files.profpic
    var sql = 'select * from users where (name) = ("' + name + '")';
    // console.log(username,password,age);
    con.query(sql, (err, result) => {
        if (result[0] == null) {
             
            var path= 'C:/Users/HP/Desktop/SRM-Connect-BackEnd/SRM-Connect-BackEnd/uploads/'+im.name;
   
    im.mv(path, function (err) {
        if (err){
            return res.status(600).send(err);
            console.log(err)}
            console.log('File uploaded!');
        });
        const dd1 = im.name;
    console.log(dd1);
         
            let hash = bcrypt.hashSync(password, 10);
            var sql = 'insert into users (name,email,password,phone,regno,course,dept,year,batch,userid,image) values ("' + name + '","' + email + '","' + hash + '","' + phone + '","' + reg + '","' + course + '","' + dept + '","' + year + '","' + batch + '","' + userid + '","'+dd1+'")';
            con.query(sql, (err, result) => {
                if (err) {
                    console.log(err);
                    res.json({
                        success: false,
                        status: 400
                    })
                }
                else {
                    res.json({
                        success: true,
                        status: 200
                    })
                    console.log("uploaded");
                }
            })
        }
        else {

            console.log(err);
            res.json({
                success: false,
                status: 500
            })
        }
    })
})
app.post("/passcheck", (req, res) => {
    const name = req.body.name1
    const password = req.body.pas1
    var sql = 'select * from users where (name) = ("' + name + '")';
    con.query(sql, (err, result) => {
        if (result[0] == null) {

            console.log(err);
            res.json({
                success: false,
                status: 400
            })
        }
        else {
            hash = result[0].password;

            if (bcrypt.compareSync(password, hash)) {
                // Passwords match
                const token = jwt.sign({ iss: 'localhost:3000', role: 'user' }, secret);
                console.log(token);
                res.json({
                    success: true,
                    status: 200,
                    token: token,
                    result: result[0].userid
                })
                console.log(result);
            } else {
                // Passwords don't match

                console.log(err);
                res.json({
                    success: false,
                    status: 400
                })
            }

        }
    })
})
app.post("/uploadevent", (req, res) => {
    const title = req.body.title
    const date = req.body.date
    const venue = req.body.venue
    const des = req.body.des
    const link = req.body.link
    const eventid = Date.now();
    var sql = 'insert into events (eventid,title,date,venue,description,link) values ("' + eventid + '","' + title + '","' + date + '","' + venue + '","' + des + '","' + link + '")';
    con.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            res.json({
                success: false,
                status: 400
            })
        }
        else {
            res.json({
                success: true,
                status: 200
            })
        }
    })

})
app.post("/disevents", (req, response) => {
    const x1 = req.body.as
    var sql = 'select * from events';

    console.log(x1);

    con.query(sql, (err, result) => {
        jwt.verify(x1, secret, function (err, decoded) {
            console.log(decoded)
            if (err) {
                console.log(err);
                response.json({
                    success: false,
                    status: 500
                })

            }

            else {
                if (err) {
                    console.log(err);

                    response.json({
                        success: false,
                        status: 400
                    })
                }
                else {
                    response.json(result)

                    console.log(result);
                }
            }
        })
    })
});
app.post("/uploadpic", (req, res) => {
console.log(req.files.profpic)
    const im = req.files.profpic
    
            var path= 'C:/Users/HP/Desktop/SRM-Connect-BackEnd/SRM-Connect-BackEnd/uploads/'+im.name;
   
    im.mv(path, function (err) {
        if (err){
            return res.status(500).send(err);
            console.log(err)}
else{const dd1 = im.name;
    console.log(dd1);
    var sql = 'insert into images (images) values ("'+dd1+'")';
    con.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            res.json({
                success: false,
                status: 400
            })
        }
        else {
            res.json({
                success: true,
                status: 200
            })
        }
    })}
        console.log('File uploaded!');
    });
    

})
app.post("/dispics", (req, res) => {

    fs.readdir('C:/Users/HP/connect-server/uploads', function (err, files) {
        //handling error
        if (err) {
            console.log('Unable to scan directory: ' + err);
        }
        //listing all files using forEach
        files.forEach(function (file) {
            // Do whatever you want to do with the file
            console.log(file);
        });
    });
});
app.post("/addfavourites", (req, res) => {
    var userid = req.body.userid
   // var eventid = Date.now()
    var eventid = req.body.eventid
    console.log("here ", userid, eventid)
    var sql = 'select * from favourites where (userid) = ("' + userid + '") and (eventid) = ("' + eventid + '")';
    con.query(sql, (err, result) => {
        if (result.length != 0) {
            res.json({
                success: false,
                status: 500
            })
        }
        else {
            var sql = 'insert into favourites (userid,eventid) values ("' + userid + '","' + eventid + '")';
            con.query(sql, (err, result) => {
                if (err) {
                    console.log(err);
                    res.json({
                        success: false,
                        status: 400
                    })
                }
                else {
                    console.log(result);
                    res.json({
                        success: true,
                        status: 200
                    })
                }
            })
        }
    })
})
app.post("/delfavourites", (req, res) => {
    var userid = req.body.userid
   // var eventid = Date.now()
    var eventid = req.body.eventid
    console.log("here ", userid, eventid)
      
        
            var sql = 'delete from favourites where (userid) = ("' + userid + '") and (eventid) = ("' +eventid+'")';
            con.query(sql, (err, result) => {
                if (err) {
                    console.log(err);
                    res.json({
                        success: false,
                        status: 400
                    })
                }
                else {
                    console.log(result);
                    res.json({
                        success: true,
                        status: 200
                    })
                }
            })
})
app.post("/fetchfavourites",(req,res)=>{
    const userid = req.body.userid;
    var sql = 'select * from events where eventid in  (select eventid from favourites where userid = ("'+userid+'"))';
    con.query(sql,(err,result)=>{
        if(err){
            console.log(err);
            res.json({
                success:false,
                status:400
            })
        }
        else{
            console.log(result);
            res.json(result)
        }
    })

})

app.post("/showdescription",(req,res)=>{
    const eventid = req.body.eventid;
    console.log('CHECK',eventid)
    var sql = 'select * from events where eventid = ("'+eventid+'")';
    con.query(sql,(err,result)=>{
        if(err){
            console.log(err);
            res.json({
                success:false,
                status:400
            })
        }
        else{
            console.log(result);
            res.json(result)
        }
    })

})
app.post("/feedback", (req, res) => {
    const userid = req.body.userid
    const title = req.body.title
    const feedback = req.body.feed
    var sql = 'insert into feedback (userid,title,feedback) values ("' + userid + '","' + title + '","' + feedback + '")';
    // console.log(username,password,age);
          con.query(sql, (err, result) => {
                if (err) {
                    console.log(err);
                    res.json({
                        success: false,
                        status: 400
                    })
                }
                else {
                    res.json({
                        success: true,
                        status: 200
                    })
                    console.log("uploaded");
                }
            })
    })
    app.post("/forgotpass", (req, res) => {
        const name = req.body.name
        const email = req.body.email
        const regno = req.body.regno
        var sql = 'select * from users where name = ("'+name+'") and email = ("'+email+'") and regno = ("'+regno+'") ';
        // console.log(username,password,age);
              con.query(sql, (err, result) => {
                    if (err) {
                        console.log(err);
                        res.json({
                            success: false,
                            status: 400
                        })
                    }
                    else {
                        res.json(result)
                        console.log("uploaded");
                    }
                })
        })
      
        app.post("/forgotpass2", (req, res) => {
            const password = req.body.newpass
            let hash = bcrypt.hashSync(password, 10);
            var sql = 'UPDATE users SET password = ("'+hash+'") WHERE name = ("'+name+'")';
            // console.log(username,password,age);
                  con.query(sql, (err, result) => {
                        if (err) {
                            console.log(err);
                            res.json({
                                success: false,
                                status: 400
                            })
                        }
                        else {
                            res.json({
                                success: true,
                                status: 200
                            })
                            console.log("uploaded");
                        }
                    })
            })
          
app.listen(process.env.PORT||3000);
