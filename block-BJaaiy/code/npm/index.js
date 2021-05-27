const lodash = require('lodash');
const moment = require("moment");

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(moment().format('dddd'));
console.log(moment().format("dddd Do YY"));
console.log(moment().add(7, 'days').calendar())
console.log(moment().add(7, 'months').calendar())
console.log(moment().add(7, 'year').calendar())

console.log(moment().subtract(7, 'days').calendar())
console.log(moment().subtract(7, 'months').calendar())
console.log(moment().subtract(7, 'year').calendar())

let leapYear = moment([2019]).isLeapYear()
let leapYear2 = moment([2020]).isLeapYear()
console.log(leapYear2)
console.log(leapYear)


console.log(moment('2020-01-01').isAfter('2018-01-01', 'year'))
console.log(moment('2010-01-01').isAfter('2018-01-01', 'year'))