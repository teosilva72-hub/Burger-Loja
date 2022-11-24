import express from 'express';
import 'dotenv/config';
import app from '../app';
import './sql/mongodb';

const PORT: number = Number(process.env.PORT) || 7272;
app.listen(PORT, ()=> {console.log('Server run on PORT:', PORT);});
