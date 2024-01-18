// test case
const kleur = require("kleur");
const success = (tip) => kleur.green(tip);

const muskClone = require("../dist/muskClone.cjs");

const cases = [
  ["foo", 1, true],
  { foo: "str", bar: 1, val: true },
  [
    { foo: "str", bar: 1, val: true },
    { foo: "str1", bar: 2, val: false },
  ],
  [{ foo: "str", bar: 1, val: true, nest: { baz: 2 } }],
  [{ foo: "str", bar: 1, val: true, nest: [{ baz: 2 }] }],
  [{ foo: "str", bar: 93, val: true, nest: [{ baz: 23 }] }],
  [2, 3, 1, 4, 5, 9],
  9,
  10,
  4,
];

// const res = muskClone(cases);
// const formatRes = success(JSON.stringify(res, null, 2));

// console.log(formatRes);

const resRepeat = muskClone(cases, 2);
const formatResRepeat = success(JSON.stringify(resRepeat, null, 2));

console.log("repeat:::", formatResRepeat);

const src = [
  { foo: "str", bar: 1, val: true },
  { foo: "str1", bar: 2, val: false },
];
const srcRepeat = muskClone(src, 2);
const formatSrc = success(JSON.stringify(srcRepeat, null, 2));
console.log("formatSrc:::", formatSrc);

// [
//   [
//     "foo-Qm9YTAJQMZcjMZP5BbAhj",
//     30,
//     true
//   ],
//   {
//     "foo": "str-LHjs6b5zFbGd0qsda1XLB",
//     "bar": 58,
//     "val": true
//   },
//   [
//     {
//       "foo": "str-79Kgb8qVMBum-cT-UMrYS",
//       "bar": 37,
//       "val": false
//     },
//     {
//       "foo": "str1-vXlbtP0MmjBx9iu0qT7WT",
//       "bar": 86,
//       "val": false
//     }
//   ],
//   [
//     {
//       "foo": "str-IV9t6Ejs1X4BYWDd86qGa",
//       "bar": 42,
//       "val": false,
//       "nest": {
//         "baz": 41
//       }
//     }
//   ],
//   [
//     {
//       "foo": "str-AAhboycvK6qRNPLoIgogQ",
//       "bar": 74,
//       "val": true,
//       "nest": [
//         {
//           "baz": 29
//         }
//       ]
//     }
//   ]
// ]
const src1 = [
  { foo: "str", bar: 1, val: true },
  { foo: "str1", bar: 2, val: false },
  { foo: "str1", bar: 2, val: false, fxx: { foo: "str1", bar: 2, val: false } },
];
const srcRepeat1 = muskClone(src1, 2, ["foo"], {
  bar: (item) => item + Math.random(),
});
const formatSrc1 = success(JSON.stringify(srcRepeat1, null, 2));
console.log("formatSrc:::1", formatSrc1);



const src2 = [
  { foo: "str", bar: 1, val: true },
  { foo: "str1", bar: 2, val: false },
];
const srcRepeat2 = muskClone(src2, 2, ["foo"], {
  bar: (item) => item + Math.random(),
});
const formatSrc2 = success(JSON.stringify(srcRepeat2, null, 2));
console.log("formatSrc:::2", formatSrc2);