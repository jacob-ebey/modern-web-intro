import * as express from 'express'

import { ITodoItem } from 'interfaces/Todo'

const api = express()

const items: ITodoItem[] = [
  {
    id: 1,
    label: 'Item 1',
    done: false
  },
  {
    id: 2,
    label: 'Item 2',
    done: true
  },
  {
    id: 3,
    label: 'Item 3',
    done: false
  }
]

api.get('/todoItems', (req, res) => {
  res.json(items)
})

export { api }
