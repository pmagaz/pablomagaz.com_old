import fs from 'fs';
import path from 'path';

const err404Template = fs.readFileSync(path.resolve(__dirname, '../templates/404.html'), 'utf-8');
const err500Template = fs.readFileSync(path.resolve(__dirname, '../templates/500.html'), 'utf-8');

const errorPage = errorCode => (errorCode === 404 ? err404Template : err500Template);

export default errorPage;
