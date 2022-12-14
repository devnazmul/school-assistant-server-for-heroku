// IMPORT ASSENTIAL PACKAGES 
const express = require('express');
const app = express();
const colog = require('colog');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require("cors");
require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors());
app.use(express.json());
// IMPORT ROUTES 
const routes = require('./routes');


// SETTING ROUTER
app.get('/',(req,res)=>{
    res.send('Walaaa Its working')
});

app.use('/api/v1/users', routes.user);
app.use('/api/v1/branches', routes.branch);
app.use('/api/v1/classes', routes.classes);
app.use('/api/v1/schools', routes.school);
app.use('/api/v1/students', routes.student);
app.use('/api/v1/users', routes.user);
app.use('/api/v1/teachers', routes.teacher);

const PORT = process.env.PORT || 8080;

// LISTENING ON PORT 
app.listen(PORT, () => {
    colog.info('=======================================================')
    colog.info(`🚀 Server is running on http://localhost:${PORT}`);
    colog.info('=======================================================')
    
});

mongoose.connect(process.env.MONGODB_CONNECTION_STRING,{ useNewUrlParser: true , useUnifiedTopology: true}).then(()=>{
    colog.info('=======================================================')
    colog.info('🤖 Database is connected.')
    colog.info('=======================================================')
}).catch(err=>{
    colog.error('=======================================================')
    colog.error(err)
    colog.error('=======================================================')
}); 
