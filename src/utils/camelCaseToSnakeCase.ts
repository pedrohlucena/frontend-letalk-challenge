import mapKeys from 'lodash/mapKeys'
import snakeCase from 'lodash/snakeCase'

export function camelCaseToSnakeCase(object: object) {
  return mapKeys(object, (_, key) => snakeCase(key))
}
