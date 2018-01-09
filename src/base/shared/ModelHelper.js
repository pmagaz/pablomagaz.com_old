import { Map, List } from 'immutable'
import { SiteConf } from '../conf/site.conf'

export const generateMap = (data, model) => (
  data.reduce((acc, item) => (
    acc.set(item.id, new model(item))
  ), new Map())
)

export const ListToArray = (list) => {
  const arr = []
  list.map(item => (
    arr.push(item)
  ))
  return arr
}

export const RecordList = (data, model) => (
  new List(data.map((item) => new model(item)))
)

export const formatPostContent = (data) => {
  data.html = data.html.replace(SiteConf.postOpeningSplitChar,'') 
  return data
}

export const generateImmutable = (data, model) => (
  Object.keys(data).reduce((acc, key) => {
    let item = data[key]
    return acc.set(item.id, new model(item))
  }, new Map()
  )
)
