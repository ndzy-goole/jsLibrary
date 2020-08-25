/*
 * @Descripttion:
 * @version:
 * @Author: 张一
 * @Date: 2020-08-25 11:03:56
 * @LastEditors: 张一
 * @LastEditTime: 2020-08-25 11:11:16
 */
import * as _ from 'underscore';
console.log(_.isEmpty(undefined)); //true
console.log(_.isEmpty(null)); //true

console.log(_.isEmpty(NaN)); //true
console.log(_.isEmpty(Infinity)); //true
console.log(_.isEmpty(0)); //true

console.log(_.isEmpty(false)); //true

console.log(_.isEmpty({})); //true

console.log(_.isEmpty([])); //true

console.log(_.isEmpty(Symbol)); //true

console.log(_.isEmpty(BigInt)); //true

console.log(_.isEmpty('0')); //false
