# Small CSV benchmark

To run (see scripts in `package.json`):

```
npm install
npm run benchmark1
npm run benchmark2
npm run benchmark3
npm run benchmark4
npm run benchmark5
npm run benchmark-nested-objects
```

Output of `benchmark1` (HPI_master.csv):

```
udsv x 9.42 ops/sec ±3.74% (28 runs sampled)
csv42 x 4.38 ops/sec ±3.70% (16 runs sampled)
papaparse x 2.33 ops/sec ±2.47% (10 runs sampled)
```

Output of `benchmark2` (large-dataset.csv):

```
udsv x 65.61 ops/sec ±0.79% (69 runs sampled)
csv42 x 44.95 ops/sec ±0.43% (59 runs sampled)
papaparse x 25.84 ops/sec ±2.39% (47 runs sampled)
```

Output of `benchmark3` (litmus_ints.csv):

```
udsv x 73.26 ops/sec ±0.91% (75 runs sampled)
csv42 x 17.21 ops/sec ±4.07% (47 runs sampled)
papaparse x 13.69 ops/sec ±0.92% (37 runs sampled)
```

Output of `benchmark4` (litmus_quoted.csv):

```
udsv x 66.30 ops/sec ±3.91% (69 runs sampled)
csv42 x 11.46 ops/sec ±1.97% (33 runs sampled)
papaparse x 8.69 ops/sec ±3.52% (26 runs sampled)
```

Output of `benchmark5` (litmus_strings.csv):

```
udsv x 107 ops/sec ±2.79% (79 runs sampled)
csv42 x 13.18 ops/sec ±1.91% (37 runs sampled)
papaparse x 12.53 ops/sec ±2.65% (36 runs sampled)
```

Output of `benchmark-nested-objects` (10k):

```
udsv x 69.21 ops/sec ±2.48% (72 runs sampled)
csv42 x 25.04 ops/sec ±0.56% (45 runs sampled)
papaparse+flat x 7.41 ops/sec ±3.44% (23 runs sampled)
```

Output of `benchmark-nested-objects` (100k):

```
udsv x 5.34 ops/sec ±4.84% (18 runs sampled)
csv42 x 2.10 ops/sec ±3.39% (10 runs sampled)
papaparse+flat x 0.78 ops/sec ±2.03% (6 runs sampled)
```
