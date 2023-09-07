import {inferSchema, initParser} from 'udsv'
import {csv2json} from 'csv42'
import Papa from 'papaparse'
import {transform} from './utils/transform.js'
import flat from 'flat'

export function useUdsvFlat(data) {
  let schema = inferSchema(data)
  let parser = initParser(schema)
  return parser.typedObjs(data)
}

export function useUdsvDeep(data) {
  let schema = inferSchema(data)
  let parser = initParser(schema)
  return parser.typedDeep(data)
}

export function useCsv42(data) {
  return csv2json(data)
}

export function usePapaParse(data) {
  return Papa.parse(data, { header: true, transform }).data
}

export function usePapaParseDeep(data) {
  return Papa.parse(data, { header: true, transform }).data.map(flat.unflatten)
}
