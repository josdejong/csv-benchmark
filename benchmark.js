import {readFileSync} from 'fs'
import Benchmark from 'benchmark'
import {useCsv42, usePapaParse, useUdsvFlat} from './libraries.js'

const filename = process.argv[2]
console.log('filename', filename)
if (!filename) {
  console.log('please provide a filename as argument')
  process.exit(1)
}

const data = String(readFileSync(filename))
console.log('data:\n' + data.slice(0, 1000) + '...')

// print the output of the CSV libraries to make sure they output what we expect
console.log('udsv output:', useUdsvFlat(data).slice(0, 1))
console.log('csv42 output:', useCsv42(data).slice(0, 1))
console.log('papaparse output:', usePapaParse(data).slice(0, 1))

new Benchmark.Suite('parse CSV file')
  .add('udsv', () => useUdsvFlat(data))
  .add('csv42', () => useCsv42(data))
  .add('papaparse', () => usePapaParse(data))
  .on('cycle', (event) => console.log(String(event.target)))
  .run()
