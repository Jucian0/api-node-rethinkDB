import express from 'express';
import rethinkdb from 'rethinkdb';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import bycrypt from 'bcryptjs';
import bluebird from 'bluebird';
import jwt from 'jsonwebtoken';
import moment from 'moment';
const app = express();

dotenv.config();

const dbConfig = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    db: process.env.DB_NAME
};

const secret = {
    key: 'super-secret'
};

export {app, express, rethinkdb, dbConfig, logger, bodyParser, cors, helmet, bycrypt, bluebird, jwt, moment, secret};
