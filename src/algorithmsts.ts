// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
import * as binSearches from './binarySearch/binarySearch'
import * as segTree from './segmentTree/segmentTree'
import SkipList from './skipList/skipList'

/**@TODO use spread operator to flatten the following object */
export default {
  binarySearch: binSearches,
  segmentTree: segTree,
  skipList: SkipList
}

//used on some strings remove spaces and special chars like ' " ? ...
//when loking for somtheing like multiples ex p/e special chars are needed
