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

## Installation
```bash
npm i -S union-tuple
```

## Interface
See what method or params you can use in [index.d.ts](./index.d.ts)

## Usage

### IsTuple
```typescript
import { IsTuple } from 'union-tuple'

type Foo = IsTuple<[1, 2]>
const foo: Foo = true
```

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
