// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
import *  as binSearches from "./binarySearch/binarySearch"
import *  as segTree from "./segmentTree/segmentTree"
import SkipList from "./skipList/skipList"

/**@TODO use spread operator to flatten the following object */
export default {
  binarySearch: binSearches,
  segmentTree: segTree,
  skipList: SkipList
};

//used on some strings remove spaces and special chars like ' " ? ...
//when lloking for somtheing like multiples ex p/e special chars are needed

let skipListNum: SkipList<number>;

skipListNum = new SkipList<number>(10, 0);
skipListNum.insert(8)
skipListNum.insert(4)
skipListNum.insert(6)
skipListNum.insert(18)
skipListNum.insert(3)
skipListNum.insert(5)
skipListNum.insert(28)
skipListNum.insert(24)
skipListNum.insert(16)
skipListNum.insert(38)
skipListNum.insert(44)
skipListNum.insert(7)
for (let i = 23; i < 340; i += 3) {
  skipListNum.insert(i);
}
console.log(skipListNum);
