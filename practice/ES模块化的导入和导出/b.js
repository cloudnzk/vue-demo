//全部导入
//import * as a from './a.js'
//console.log(a.name)
import { name } from "./a.js";

console.log(name);

//导入函数和类
import {Person} from "./a.js"
new Person().hello()

import add from "./a.js"
console.log(add(10,20))