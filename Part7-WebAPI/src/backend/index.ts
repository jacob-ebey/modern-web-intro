import 'es6-promise/auto'
import * as express from 'express'
import * as path from 'path'
import * as cors from 'cors'

import { api } from './controllers/api'

const app = express()

app.use(cors())

app.use('/api', api)

app.use(express.static(path.join(__dirname, '../public')))

// tslint:disable-next-line no-console
app.listen(3001, () => console.log('Example app listening on port 3001!'))
