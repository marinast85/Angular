const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const professor_controller = require('./professor_controller');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use('/professores', professor_controller);


mongoose.connect("mongodb+srv://ricardo_nunes:ricardo_nunes@cluster0.jlykd.mongodb.net/escola_angular?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })

app.listen(3000);