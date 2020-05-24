# union-tuple
[![NPM Version](http://img.shields.io/npm/v/union-tuple.svg?style=flat-square)](https://www.npmjs.com/package/union-tuple)
[![Download Month](http://img.shields.io/npm/dm/union-tuple.svg?style=flat-square)](https://www.npmjs.com/package/union-tuple)
![typescript](https://img.shields.io/badge/typescript-supported-blue.svg "typescript")

[中文文档](./README-CN.md)

Generics to work with union/tuple in typescript

## repository
https://github.com/livelybone/union-tuple.git

## Demo
https://github.com/livelybone/union-tuple#readme

## Run Example
you can see the usage by run the example of the module, here is the step:

1. Clone the library `git clone https://github.com/livelybone/union-tuple.git`
2. Go to the directory `cd your-module-directory`
3. Install npm dependencies `npm i`(use taobao registry: `npm i --registry=http://registry.npm.taobao.org`)
4. Open service `npm run dev`
5. See the example(usually is `http://127.0.0.1:3000/examples/test.html`) in your browser

## Installation
```bash
npm i -S union-tuple
```

## Global name - The variable the module exported in `umd` bundle
`UnionTuple`

## Interface
See what method or params you can use in [index.d.ts](./index.d.ts)

## Usage

### TupleToUnion
```typescript
import { TupleToUnion } from 'union-tuple'

type Foo = TupleToUnion<[1, 2]>
const foo: Foo = 1
```

### UnionPop
```typescript
import { UnionPop } from 'union-tuple'

type Foo = UnionPop<1 | 2>
const foo: Foo = 2
```

### TuplePrepend
```typescript
import { TuplePrepend } from 'union-tuple'

type Foo = TuplePrepend<[1, 2], 3>
const foo: Foo = [3, 1, 2]
```

### UnionToTuple
```typescript
import { UnionToTuple } from 'union-tuple'

type Foo = UnionToTuple<1 | 2 | 3>
const foo: Foo = [1, 2, 3]
```

### UnionToTuple
```typescript
import { UnionToTuple } from 'union-tuple'

type Foo = UnionToTuple<1 | 2 | 3>
const foo: Foo = [1, 2, 3]
```

### UnionToTupleWithMap
```typescript
import { UnionToTupleWithMap } from 'union-tuple'

type Foo = UnionToTupleWithMap<1 | 2 | 3, { 1: 'a', 2: 'c', 3: [1, 2] }>
const foo: Foo = ['a', 'c', [1, 2]]
```

### TupleMap
```typescript
import { TupleMap } from 'union-tuple'

type Foo = TupleMap<[2, 1, 3], { 1: 'a', 2: 'c', 3: [1, 2] }>
const foo: Foo = ['c', 'a', [1, 2]]
```
