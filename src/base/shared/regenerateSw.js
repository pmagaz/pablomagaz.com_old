require('babel-core/register')
const path = require('path')
const fs = require('./FileSystem')
const ReactBaseError = require('./Errors')
const Env = require('./Env').default
const isProd = (Env !== 'development') ? true : false
const swPath = path.resolve(__dirname, '../../../server/serviceWorker/serviceWorker.js')
const assetsPath = path.resolve(__dirname, '../../../dist/webpack-assets.json')
if (fs.fileExists(swPath) && fs.fileExists(assetsPath)) {
  const content = fs.readLines(swPath, { encoding: 'utf-8' })
  const assetsContent = JSON.parse(fs.readFile(assetsPath, { encoding: 'utf-8' }))

  content[19] = `  'https://pablomagaz.com/offline.html',`
  content[20] = `  'https://pablomagaz.com/assets${ assetsContent.app.js }',`
  content[21] = isProd ? `  'https://pablomagaz.com/assets${ assetsContent.vendor.js }',` : ''
  content[22] = isProd ? `  'https://pablomagaz.com/assets${ assetsContent.app.css }'` : ''
  const fileContent = content.map(line =>  line + '\n')
  fs.writeFile(swPath, fileContent.join(''))
}
else  throw new ReactBaseError('Missing Files')