import { binarySearch, binaryClosestSearch } from "../../src/binarySearch/binarySearch";
import { binaryComparisonRoutine } from "../../src/binarySearch/interfaces";

const compareNumbers: binaryComparisonRoutine<number> = (a: number, b: number) => {
  return a - b;
}

const compareLT: binaryComparisonRoutine<number> = (a: number, b: number) => {
  return a > b ? 1 : -2;
}

const compareGT: binaryComparisonRoutine<number> = (a: number, b: number) => {
  return a > b ? 2 : -1;
}

interface timeSeriesObject {
  time: number,
  value: number
};

const compareTimeSeries: binaryComparisonRoutine<timeSeriesObject> = (A: timeSeriesObject, B: timeSeriesObject) => {
  return A.time - B.time;
};

const twoElementArrayWithGap = [3, 5];
const twoElementNoGap = [1, 2];
const threeElement = [1, 3, 7];
const sortedArray = [1, 3, 4, 6, 7, 12, 23, 33, 34, 35, 36, 56, 55, 66, 67, 78, 88, 123, 222, 234];

describe("testing binarySearch on number array ", () => {

  it("exact match returns -1 when element is not found ", () => {

    expect(binarySearch(twoElementArrayWithGap, 4, compareNumbers)).toEqual(-1);
    expect(binarySearch(twoElementNoGap, 4, compareNumbers)).toEqual(-1);
    expect(binarySearch(sortedArray, 5, compareNumbers)).toEqual(-1);
    expect(binarySearch(threeElement, -5, compareNumbers)).toEqual(-1);
  });

  it("exact match returns position when element is found ", () => {
    expect(binarySearch(twoElementArrayWithGap, 5, compareNumbers)).toEqual(1);
    expect(binarySearch(twoElementArrayWithGap, 3, compareNumbers)).toEqual(0);
    expect(binarySearch(twoElementNoGap, 1, compareNumbers)).toEqual(0);
    expect(binarySearch(twoElementNoGap, 2, compareNumbers)).toEqual(1);
    expect(binarySearch(threeElement, 1, compareNumbers)).toEqual(0);
    expect(binarySearch(threeElement, 3, compareNumbers)).toEqual(1);
    expect(binarySearch(sortedArray, 1, compareNumbers)).toEqual(0);
    expect(binarySearch(sortedArray, 222, compareNumbers)).toEqual(18);
    expect(binarySearch(sortedArray, 35, compareNumbers)).toEqual(9);
  });
})

describe("testing binary closest search on numbers: ", () => {

  it("returns the lower bound", () => {
    expect(binaryClosestSearch(twoElementArrayWithGap, 4, compareLT)).toEqual(0);
  })

  it("returns the upper bound", () => {
    expect(binaryClosestSearch(twoElementArrayWithGap, 4, compareGT)).toEqual(1);
  })

  it("upper equals lower when element searched is outofbound", () => {
    expect(binaryClosestSearch(twoElementArrayWithGap, 1, compareLT)).toEqual(binaryClosestSearch(twoElementArrayWithGap, 1, compareGT))
    expect(binaryClosestSearch(sortedArray, 331, compareLT)).toEqual(binaryClosestSearch(sortedArray, 451, compareGT))
  })

  it("returns closest element", () => {
    expect(binaryClosestSearch(sortedArray, 34.9, compareNumbers)).toEqual(9);
    expect(binaryClosestSearch(sortedArray, 34.1, compareNumbers)).toEqual(8);
  });

  it("testing performance", () => {
    let longArray = [];
    console.time("fill");
    for (let i = 0; i < 1000000; i++) longArray.push(2 * i + 1);
    console.timeEnd("fill");
    console.time("search");
    let res = binaryClosestSearch(longArray, 4, compareLT);

    console.timeEnd("search");

    expect(res).toEqual(1);

    console.time("search exact");
    let res2 = binarySearch(longArray, 999, compareNumbers);

    console.timeEnd("search exact");

    expect(res2).toEqual(499);

  });

})

describe("testing binary closest search on financial time series", () => {

  const series = [{ "time": 1548670090468, "value": 23 }, { "time": 1548670091072, "value": 43.20795367741699 }, { "time": 1548670091597, "value": 83.32574653129046 }, { "time": 1548670092403, "value": 33.79868630977998 }, { "time": 1548670092628, "value": 92.73009955559158 }, { "time": 1548670092729, "value": 53.86657112210127 }, { "time": 1548670092885, "value": 91.98664773973626 }, { "time": 1548670093434, "value": 6.34242854593563 }, { "time": 1548670093953, "value": 89.72675136426633 }, { "time": 1548670094124, "value": 96.49530916381026 }, { "time": 1548670094812, "value": 92.99619986555601 }, { "time": 1548670095087, "value": 59.26485358724789 }, { "time": 1548670095858, "value": 23.877160993113367 }, { "time": 1548670096565, "value": 44.254600697362534 }, { "time": 1548670097053, "value": 38.49398413702288 }, { "time": 1548670097126, "value": 53.813993630689836 }, { "time": 1548670097815, "value": 68.71591314548088 }, { "time": 1548670097843, "value": 99.16732708776546 }, { "time": 1548670098447, "value": 44.16087968629079 }, { "time": 1548670099122, "value": 22.260831533784888 }, { "time": 1548670099677, "value": 36.81266200276765 }, { "time": 1548670100052, "value": 56.47948601660098 }, { "time": 1548670100700, "value": 87.07849884156411 }, { "time": 1548670101275, "value": 37.02733607405324 }, { "time": 1548670101593, "value": 7.8591001853884235 }, { "time": 1548670101936, "value": 15.055065112640298 }, { "time": 1548670102153, "value": 27.85677120108152 }, { "time": 1548670102827, "value": 39.50241276615281 }, { "time": 1548670103605, "value": 89.07620040781745 }, { "time": 1548670103828, "value": 53.36209935014629 }, { "time": 1548670104002, "value": 53.53474826755171 }, { "time": 1548670104933, "value": 9.367638112695232 }, { "time": 1548670105264, "value": 47.234931397176425 }, { "time": 1548670106028, "value": 42.60614916281153 }, { "time": 1548670107027, "value": 37.28383545198124 }, { "time": 1548670107380, "value": 10.1846232980497 }, { "time": 1548670107865, "value": 40.430572019936136 }, { "time": 1548670108118, "value": 63.348001489858376 }, { "time": 1548670108212, "value": 57.76696400277761 }, { "time": 1548670109160, "value": 25.910641413669765 }, { "time": 1548670110101, "value": 23.08142826639761 }, { "time": 1548670110896, "value": 39.773065847751575 }, { "time": 1548670111209, "value": 32.11546427493697 }, { "time": 1548670112207, "value": 92.4786717278389 }, { "time": 1548670112960, "value": 65.5657356378556 }, { "time": 1548670113085, "value": 66.11618020463092 }, { "time": 1548670113707, "value": 96.3279813852628 }, { "time": 1548670114419, "value": 28.73865409518741 }, { "time": 1548670115233, "value": 7.996529969552735 }, { "time": 1548670115330, "value": 46.63030478236925 }, { "time": 1548670116208, "value": 86.04970331765895 }, { "time": 1548670116776, "value": 24.167852890616047 }, { "time": 1548670117644, "value": 62.021452066101546 }, { "time": 1548670118100, "value": 87.22336539965727 }, { "time": 1548670118245, "value": 51.3068851690651 }, { "time": 1548670119071, "value": 54.20803847180618 }, { "time": 1548670119344, "value": 98.49255322840831 }, { "time": 1548670119408, "value": 98.04495676708544 }, { "time": 1548670119507, "value": 25.30837819445344 }, { "time": 1548670120162, "value": 69.44995330985341 }, { "time": 1548670120433, "value": 74.23830378427753 }, { "time": 1548670120509, "value": 4.3346840198287495 }, { "time": 1548670120608, "value": 1.4781840774291233 }, { "time": 1548670120713, "value": 2.6898755793399953 }, { "time": 1548670121451, "value": 50.660267206223494 }, { "time": 1548670121760, "value": 5.62265815991656 }, { "time": 1548670121998, "value": 64.19728506116931 }, { "time": 1548670122860, "value": 34.55724868042269 }, { "time": 1548670123233, "value": 79.6049369972299 }, { "time": 1548670123506, "value": 93.08212267317062 }, { "time": 1548670123922, "value": 80.17683371590583 }, { "time": 1548670124862, "value": 35.347418839188684 }, { "time": 1548670125485, "value": 77.34535950439778 }, { "time": 1548670126218, "value": 62.92551591809479 }, { "time": 1548670126457, "value": 76.3391419847177 }, { "time": 1548670127446, "value": 77.34428608042407 }, { "time": 1548670128081, "value": 39.09940722898904 }, { "time": 1548670128259, "value": 27.17350778366314 }, { "time": 1548670128804, "value": 85.77742677541578 }, { "time": 1548670129632, "value": 7.006324525779273 }, { "time": 1548670130380, "value": 72.57156482026508 }, { "time": 1548670130410, "value": 92.62804180225824 }, { "time": 1548670131148, "value": 1.040009529328212 }, { "time": 1548670132113, "value": 71.33038356234937 }, { "time": 1548670132976, "value": 50.730692393524194 }, { "time": 1548670133251, "value": 50.78554478044781 }, { "time": 1548670134176, "value": 44.69438924420332 }, { "time": 1548670134985, "value": 88.68483743529545 }, { "time": 1548670135851, "value": 26.76376674291767 }, { "time": 1548670136562, "value": 0.6568902703379287 }, { "time": 1548670137532, "value": 1.8761872275008473 }, { "time": 1548670138361, "value": 51.24124677542412 }, { "time": 1548670138475, "value": 61.169052260016365 }, { "time": 1548670138892, "value": 49.45650737956979 }, { "time": 1548670139550, "value": 42.642256392601176 }, { "time": 1548670140124, "value": 1.1752842567823718 }, { "time": 1548670140954, "value": 98.42083660914427 }, { "time": 1548670141927, "value": 61.33931427268888 }, { "time": 1548670142796, "value": 3.1685387490633765 }, { "time": 1548670143105, "value": 16.067009330365735 }, { "time": 1548670143168, "value": 63.90553116002782 }];
  it("returns first element on outof bound", () => {
    expect(binaryClosestSearch(series, <timeSeriesObject>{ time: 1548670090468 - 10 }, compareTimeSeries)).toEqual(0);
  });

  it("returns closest index in time", () => {
    expect(binaryClosestSearch(series, <timeSeriesObject>{ time: 1548670091596 }, compareTimeSeries)).toEqual(2);
  });
})
