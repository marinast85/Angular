const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const product_controller = require('./product_controller');

const app = express();

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());


mongoose.connect("mongodb+srv://marina_toledo:marina_toledo@cluster0.ae6hs.mongodb.net/newBank?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/product', product_controller)

app.listen(port)