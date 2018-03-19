import { Application } from 'express'
import expressJWT from 'express-jwt'

interface ICache {
  // tslint:disable-next-line no-any
  [key: string]: any
}

export class AuthHandler {
  private static cache: Map<string, ICache> = new Map<string, ICache>()

  public static addPath (path: string, target: ICache, propertyKey?: string) {
    const className = target.name || target.constructor.name
    const cache: ICache = AuthHandler.cache.get(className) || {}

    if (!propertyKey) {
      const props = Object.getOwnPropertyNames(target.prototype)

      props.forEach((p: string) => {
        if (p !== 'constructor' && p in cache) {
          cache[p] = `${path}${cache[p]}`
        }
      })

      return
    }

    cache[propertyKey] = path
    AuthHandler.cache.set(className, cache)
  }

  public static configure (app: Application, secret: string) {
    for (const cache of AuthHandler.cache) {
      for (const route in cache[1]) {
        if (cache[1].hasOwnProperty(route)) {
          app.use(cache[1][route], expressJWT({
            secret,
            credentialsRequired: true,
            getToken: (req) => {
              if (req.headers.authorization && (req.headers.authorization as string).split(' ')[0] === 'Bearer') {
                return (req.headers.authorization as string).split(' ')[1]
              } else if (req.query && req.query.token) {
                return req.query.token
              }

              return null
            }
          }))
        }
      }
    }
  }
}
