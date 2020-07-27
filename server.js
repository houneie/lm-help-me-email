const nodemailer = require("nodemailer");
const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send("<h>Welcome to LM Help Emailer</h>")
  })
  
app.get('/helpMe', (req, res) => {
    var toMail = req.query.toMail
    var from = req.query.from
    var location = req.query.loc

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'lm.help.me20@gmail.com',
          pass: 'Z535HrHejh9oJe'
        }
      });
      
      var mailOptions = {
        from: 'lm.help.me20@gmail.com',
        to: toMail,
        subject: from +' needs your help',
        text: from + ' Location is ' + location
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    res.send("Sent")
  })

// set port, listen for requests
const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

