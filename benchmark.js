import { readFileSync } from 'fs'
import Benchmark from 'benchmark'
import { inferSchema, initParser } from 'udsv'
import Papa from 'papaparse'
import { csv2json } from 'csv42'
import { transform } from './utils/transform.js'

const data = String(readFileSync('./data/HPI_master.csv'))

console.log('data:\n' + data.slice(0, 1000) + '...')

// print the output of the CSV libraries to make sure they output what we expect
console.log('udsv output:', useUdsv(data).slice(0, 1))
console.log('csv42 output:', useCsv42(data).slice(0, 1))
console.log('papaparse output:', usePapaParse(data).slice(0, 1))

new Benchmark.Suite('parse and stringify benchmark')
  .add('udsv', () => useUdsv(data))
  .add('csv42', () => useCsv42(data))
  .add('papaparse', () => usePapaParse(data))
  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .run()

function useUdsv(data) {
  let schema = inferSchema(data)
  let parser = initParser(schema)
  return parser.typedDeep(data)
}

function useCsv42(data) {
  return csv2json(data)
}

function usePapaParse(data) {
  return Papa.parse(data, { header: true, transform }).data
}
