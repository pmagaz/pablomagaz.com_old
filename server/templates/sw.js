import { env } from 'base'

let template

if (env === 'development') {
  template = '<script src="/registerSwV1.js"></script>'
} else {
  template = ''
}


export default template