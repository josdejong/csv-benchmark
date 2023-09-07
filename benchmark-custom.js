import {generateNestedCsv} from './utils/generateData.js'
import {useCsv42, usePapaParseDeep, useUdsvDeep} from './libraries.js'

const data = generateNestedCsv(10_000)

// print the output of the CSV libraries to make sure they output what we expect
console.log('udsv output:', useUdsvDeep(data).slice(0, 1))
console.log('csv42 output:', useCsv42(data).slice(0, 1))
console.log('papaparse+flat output:', usePapaParseDeep(data).slice(0, 1))

function geoMean(arr) {
  let logSum = arr.reduce((acc, val) => acc + Math.log(val), 0);
  return Math.exp(logSum / arr.length);
}

const sleep = () => new Promise(resolve => setImmediate(resolve));

async function customBench(task) {

  let cycles = 200;
  let durs = [];
  let rss = [];

  let i = 0;

  while (i++ < cycles) {
    let st = performance.now();
    task()
    await sleep();
    durs.push(performance.now() - st);
    rss.push(process.memoryUsage.rss());
  }
  console.log((1e3 / geoMean(durs)).toFixed(1) + ' ops/s', (Math.max(...rss) / 1024 / 1024).toFixed(1) + ' peak RSS (MiB)');
}

await customBench(() => useUdsvDeep(data))
await customBench(() => useCsv42(data))
await customBench(() => usePapaParseDeep(data))
