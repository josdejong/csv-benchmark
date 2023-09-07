import {generateNestedCsv} from './utils/generateData.js'
import {useCsv42, usePapaParseDeep, useUdsvDeep} from './libraries.js'
import Benchmark from 'benchmark'
import { Bench } from 'tinybench'

const data = generateNestedCsv(10_000)

// print the output of the CSV libraries to make sure they output what we expect
console.log('udsv output:', useUdsvDeep(data).slice(0, 1))
console.log('csv42 output:', useCsv42(data).slice(0, 1))
console.log('papaparse+flat output:', useCsv42(data).slice(0, 1))

// test with benchmark.js
console.log('test with benchmark.js')
await new Benchmark.Suite('parse CSV into nested objects')
  .add('udsv', () => useUdsvDeep(data))
  .add('csv42', () => useCsv42(data))
  .add('papaparse+flat', () => usePapaParseDeep(data))
  .on('cycle', (event) => console.log(String(event.target)))
  .run()

console.log()
console.log('Ballpark test with console.time:')

// get a rough feel, see if that compares
console.time('udsv')
useUdsvDeep(data)
console.timeEnd('udsv')

console.time('csv42')
useCsv42(data)
console.timeEnd('csv42')

console.time('papaparse+flat')
usePapaParseDeep(data)
console.timeEnd('papaparse+flat')

// test with tinybench
console.log()
console.log('test with tinybench')
const bench = new Bench({ time: 2000 })
await bench
  .add('udsv', () => useUdsvDeep(data))
  .add('csv42', () => useCsv42(data))
  .add('papaparse+flat', () => usePapaParseDeep(data))
  .run()

console.table(bench.table())
