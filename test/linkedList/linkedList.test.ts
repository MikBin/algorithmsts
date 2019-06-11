import { Node } from '../../src/linkedList/interfaces'

import { LinkedList } from '../../src/linkedList/linkedList'

describe('single linked list test', () => {
  const mySLL = new LinkedList<number>()

  it('test is empty', () => {
    expect(mySLL.isEmpty()).toEqual(true)
    expect(mySLL.size()).toEqual(0)
  })

  it('test pops shift first and last on empty list', () => {
    expect(mySLL.first()).toBeNull()
    expect(mySLL.last()).toBeNull()
    expect(mySLL.pop()).toBeNull()
    expect(mySLL.shift()).toBeNull()
  })

  it('test add', () => {
    mySLL.add(1)
    expect(mySLL.isEmpty()).toEqual(false)
    expect(mySLL.size()).toEqual(1)
    mySLL.add(2)
    expect(mySLL.size()).toEqual(2)
    mySLL.add(3)
    expect(mySLL.size()).toEqual(3)
    mySLL.add(4)
    expect(mySLL.size()).toEqual(4)
  })

  it('test toArray', () => {
    expect(mySLL.toArray()).toEqual([1, 2, 3, 4])
  })

  it('test first', () => {
    expect(mySLL.first()).toEqual(1)
  })

  it('test last', () => {
    expect(mySLL.last()).toEqual(4)
  })

  it('test values iterator', () => {
    let it = mySLL.values()
    let v = it.next()
    let arr = [v.value]
    while (!v.done) {
      v = it.next()
      !v.done ? arr.push(v.value) : null
    }
    expect(arr).toEqual(mySLL.toArray())
  })

  it('tests pop', () => {
    expect(mySLL.pop()).toEqual(4)
    expect(mySLL.size()).toEqual(3)
    expect(mySLL.last()).toEqual(3)
  })

  it('tests shift', () => {
    expect(mySLL.shift()).toEqual(1)
    expect(mySLL.size()).toEqual(2)
    expect(mySLL.first()).toEqual(2)
  })
})
