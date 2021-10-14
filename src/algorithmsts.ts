// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
import * as binSearches from './binarySearch/binarySearch'
import * as segTree from './segmentTree/segmentTree'
import SkipList from './skipList/skipList'
import { Trie } from './trie/trie'

export default {
  binarySearch: binSearches,
  segmentTree: segTree,
  skipList: SkipList,
  trie: Trie
}

//used on some strings remove spaces and special chars like ' " ? ...
//when loking for somtheing like multiples ex p/e special chars are needed
