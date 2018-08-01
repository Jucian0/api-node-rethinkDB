import express from 'express';
import rethinkdb from 'rethinkdb';
import dbConfig from './database';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

const app = express();

export {app, express, rethinkdb, dbConfig, logger, bodyParser, cors, helmet, dotenv};
