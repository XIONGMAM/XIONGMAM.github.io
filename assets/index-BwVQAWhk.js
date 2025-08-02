import{_ as c,E as g}from"./el-card-BC1LQGcn.js";import"./base-BOVE5efH.js";import{E as m}from"./el-link-b02lqcaU.js";import{d as o,r as p,m as f,w as r,f as u,b as n,Q as l,o as d}from"./index-rcW_pH8g.js";import"./index-BRdTUeC1.js";import"./event-BB_Ol6Sd.js";import"./icon-D8zniuSg.js";import"./style-CQyj6J43.js";import"./use-global-config-ZfVEybhJ.js";import"./index-DL17Y2WH.js";import"./index-DNrEt1wy.js";const b=o({name:"JavascriptPage"}),J=o({...b,setup(v){const s=p([{id:1,h2:"前言"},{id:2,h2:"变量"},{id:3,h2:"数据类型"},{id:4,h2:"标识符 关键字 保留字"},{id:5,h2:"运算符"},{id:6,h2:"代码块"},{id:7,h2:"流程控制 -分支"},{id:8,h2:"循环"},{id:9,h2:"小结"},{id:10,h2:"数组"},{id:11,h2:"函数"},{id:12,h2:"对象"},{id:13,h2:"正则表达式"},{id:14,h2:"其他"}]);return(j,e)=>{const a=g,i=m,t=c;return d(),f(t,{data:s.value},{svg:r(()=>e[0]||(e[0]=[n("svg",{width:"48",height:"48",t:"1699148574627",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"8149"},[n("path",{d:"M64 64h896v896H64z",fill:"#F5DE19","p-id":"8150"}),n("path",{d:"M665.888 764a91.712 91.712 0 0 0 83.2 51.2c34.88 0 57.184-17.44 57.184-41.6 0-28.8-22.912-39.104-61.312-55.904l-21.056-9.024c-60.8-25.888-101.12-58.304-101.12-126.848 0-63.136 48-111.232 123.296-111.232a124.448 124.448 0 0 1 119.744 67.424L800 580.096A57.248 57.248 0 0 0 745.952 544a36.64 36.64 0 0 0-40.288 36.096c0 25.248 15.648 35.488 51.776 51.2l21.056 9.024c71.552 30.688 112 61.952 112 132.256 0 75.808-59.552 117.344-139.52 117.344a161.76 161.76 0 0 1-153.44-86.112z m-297.44 7.296c13.216 23.456 25.248 43.296 54.176 43.296 27.648 0 45.12-10.816 45.12-52.896v-286.304h84.192v287.424c0 87.168-51.2 126.848-125.728 126.848a130.72 130.72 0 0 1-126.304-76.8z",fill:"","p-id":"8151"})],-1),n("h1",null,"Javascript I",-1)])),describe:r(()=>e[1]||(e[1]=[n("p",null," JavaScript最初是由Netscape的工程师布兰登·艾奇（Brendan Eich）在1995年设计的，最初命名为LiveScript，但为了利用当时流行的Java语言的市场效应，它被改名为JavaScript。 ",-1)])),content:r(()=>[u(a,{id:"part1",shadow:"hover"},{default:r(()=>e[2]||(e[2]=[n("h2",null,"前言",-1),n("p",null,"注意事项",-1),n("ul",null,[n("li",null,"js尽量用 '单引号' ，和 css 区分开。"),n("li",null,"JS-CSS-HTML Formatter： vscode 自动格式化代码插件"),n("li",null," js写代码，全部写在末尾，因为文档页面从上往下加载，如果需要在上面，需要加个load事件，等页面加载完了再加载js "),n("li",null," 写代码的时候，注意 大小写 否则程序不执行，有些不报错，有些会报错 "),n("li",null,"数据采用 数组对象形式存储会比较好管理"),n("li",null,"菜鸟网址查询 ：https://www.runoob.com/ 也可以使用菜鸟工具"),n("li",null,"检查元素")],-1),n("pre",null,[n("code",{class:"language-js line-numbers"},`  const element = document.querySelector('#my-element');

  if (element) {
    element.style.color = 'red';
  } else {
    console.error('Element not found');
  }`)],-1),n("p",null,"JavaScript 历史",-1),n("ul",null,[n("li",null,"发明人：布兰登-艾奇（brendan Eich ，1961年~）"),n("li",null,"神奇的大哥在1995年利用10天完成JavaScript设计。"),n("li",null," 网景公司最初命名为LiveScript，后来在与Sun合作之后将其改名为JavaScript。 ")],-1),n("p",null,"JavaScript是什么",-1),n("ul",null,[n("li",null," JavaScript是世界上最流行的语言之一，是一种运行在客户端的脚本语言（Script是脚本的意思） "),n("li",null," 脚本语言：不需要编译，运行过程中由js解释器（js引擎）逐行来进行解释并执行 "),n("li",null,"现在也可以基于Nodejs 技术进行服务器端编程"),n("li",null,"js是一种解释型语言，面向对象语言"),n("li",null,"小知识点： 最早有 56k猫: 28k上传 28k下载")],-1),n("p",null,"Js的用处",-1),n("ul",null,[n("li",null,"表单动校验（密码强度检测）（JS产生最初的目的）"),n("li",null,"网页特效"),n("li",null,"服务端开发（Nodejs）"),n("li",null,"桌面程序（Electron）"),n("li",null,"App（Cordova）"),n("li",null,"控制硬件-物联网（Ruf）"),n("li",null,"游戏开发（cocos2d-js）")],-1),n("p",null,"浏览器分成两部分 (渲染引擎 和 js引擎)",-1),n("ul",null,[n("li",null," 渲染引擎：用来解析HTML与CSS，俗称内核，比如chrome浏览器的blink，老版本的webkit "),n("li",null," JS引擎：也称为JS解释器。用来读取网页中的JavaScript代码，对其处理后运行，比如chrome浏览器的V8 "),n("li",null," 浏览器本身并不会执行JS代码，而是通过内置JavaScript引擎（解释器）来执行JS代码。 "),n("li",null," JS引擎执行代码时逐行解释。每一句源码（转换为机器语言），然后由计算机去执行，所以JavaScript 语言归为脚本语言，会逐行解释执行。 "),n("li",null," ECMAScript是一个标准，而这个标准需要由各个厂商去实现。不同的浏览器厂商对该标准会有不同的实现。 ")],-1),n("table",null,[n("tbody",null,[n("tr",null,[n("th",null,"浏览器"),n("th",null,"实现方式")]),n("tr",null,[n("td",null,"FireFox"),n("td",null,"SpiderMonkey")]),n("tr",null,[n("td",null,"IE"),n("td",null,"JScript / Chakra")]),n("tr",null,[n("td",null,"Safari"),n("td",null,"JavaScriptCore")]),n("tr",null,[n("td",null,"Chrome"),n("td",null,"V8 速度最快")]),n("tr",null,[n("td",null,"Carakan"),n("td",null,"Carakan")])])],-1),n("p",null,"js组成",-1),n("pre",{class:"pre"},`                  ---javaScript---
  ECMAScript            DOM                   BOM
  js语法           页面文档对象模型      浏览器对象模型
          `,-1),n("ul",null,[n("li",null," ECMAScript是由ECMA国际（ECMA（Europe Computer Manufacure Association ）原欧洲计算机制造商联盟）进行标准化的一门编程语言，这种语言在万维网上应用广泛，它往往被称为JavaScript或JScript，但实际上后两者是ECMAScript语言的实现和扩展。，使用最多的是ECMAScript5（ES5），最新版本：ES6采用类似强类型。（因为javascript的网景公司捐献出来，由ECMA来统一标准，所以现在遵循的是ECMAS的语法规则，也简称 ES）ECMAScript: ECMAScript规定了JS的编程语法和基础核心知识，是所有浏览器厂商共同遵守的一套JS语法工业标准。 "),n("li",null," DOM 文档对象模型（DocumentObject Model），是W3C组织推荐的处理可扩展标记语言的标准编程接口。通过DOM提供的接口可以对页面上的各种元素进行操作（大小、位置、颜色等）。 "),n("li",null," BOM 浏览器对象模型（Browser Object Model，）是指浏览器对象模型，它提供了独立于内容的、可以与浏览器窗口进行互动的对象结构。通过BOM可以操作浏览器窗口，比如弹出框、控制浏览器跳转、获取分辨率等 ")],-1),n("p",null,"js书写方式(双标签)",-1),n("pre",null,[n("code",{class:"language-javascript line-numbers"},`  // 行内：
    <input type="button" value="按钮" onclick="alert('弹窗')"><\/script>          // 不推荐使用，要做到结构 样式 行为 分离
    <a href=" javascript:;">/* 可以写在href里面来阻止跳转 */ </a>                  // javascript:void(null)

  // 内嵌：
    <script type='text/javascript'>/* 写入想要的代码 */  <\/script>                // type 可以省略

  // 外部：
     <script src="url">/* 里面不能再写js代码， 否则不执行这里面的js代码 */<\/script>  // 推荐使用

  // 引入时加上 defer 属性，表示延迟执行，等到整个页面全部加载完成，再执行js代码，这样页面加载速度会更快。相当于调了onload监听
     <script defer src="url"><\/script>`)],-1),n("ul",null,[n("li",null," 必须嵌套在html文件中运行，可以嵌套在head标签里面，也可以嵌套在body "),n("li",null," JavaScript的代码必须嵌套在<script>标签里面，由于现在的主流浏览器默认的脚本语言就是JavaScript，所以不写type类型也是可以的 ")],-1),n("p",null,"注释",-1),n("pre",null,[n("code",{class:"language-js line-numbers"},`  1.单行   //注释内容                      快捷键 ctrl + ？
  2.多行   /*注释内容*/                    快捷键  shift + alt + a    vscode 可以修改快捷键
  3.解释型文档注释，先写好代码               输入：  /** 然后回车就会生成对应的说明

  /**
  * 说明：对两个操作数进行加法运算
  * @param {number} a 第一个操作数 {}里 写的是类型
  * @param {number} b 第二个操作数 {}里 写的是类型
  * @returns 返回两个操作数的和
  */
      function add(a, b) {
          return a + b;
      }`)],-1),n("p",null,"js输入输出语句",-1),n("ul",null,[n("li",null," 为了方便信息的输入输出，JS中提供了一些输入输出语句，其常用的语句如下： ")],-1),n("pre",null,[n("code",{class:"language-js line-numbers"},`  alert("msg");              /* 浏览器警告弹窗 */
  confirm('提示信息');        /* 确认框 确认为true 取消为 false */
  prompt("请输入内容");       /* 弹出输入框，用户可以输入内容，取出来的值是字符型 */
  document.title = "";       /* 向html文档的title部分写入内容 */
  document.write()           /* 向body里面写入内容 */
  console.table(window);     /* 输出表格信息 */
  console.log("11");         /* 控制台打印 */
  console.time('a');         /* 计时器，（）里传入一个自定义的字符串，作为标识符， */
  console.timeEnd('a');      /* 结束计数器 （）里传入自定义的标识符名，作用在于起始行到结束行代码运行的时间 */
  console.warn('');          /* 输出警告信息 */
  console.error('a');        /* 输出错误信息 */`)],-1),n("p",null,"规范",-1),n("ul",null,[n("li",null,[l(' 开启严格模式： "use strict" '),n("ul",null,[n("li",null,"全局使用：直接在script标签的第一行写上即可"),n("li",null,"局部使用：在块级作用域的第一行写上即可")])]),n("li",null,"js严格区分大小写"),n("li",null," 每条语句以分号结尾，不添加的话，浏览器会自动添加，但是会消耗浏览器的资源，有时会加错。 "),n("li",null,"js会忽略多个空格和换行")],-1),n("p",null,"控制台错误解释",-1),n("ul",null,[n("li",null," Uncaught ReferenceError: Alert is not defined // 引用错误，Alert 未定义 "),n("li",null,"$ is not defined")],-1)])),_:1,__:[2]}),u(a,{id:"part2",shadow:"hover"},{default:r(()=>e[3]||(e[3]=[n("h2",null,"变量",-1),n("p",null,"字面量和变量",-1),n("ul",null,[n("li",null,[l(" 字面量，都是一些不可改变的值，常亮，比如1 2 3 4 5 6，1不可能变为2，是不可变的 "),n("ul",null,[n("li",null,"本质：可以直接使用，但是一般不会直接使用字面量")])]),n("li",null,[l(" 变量，就是装数据的容器，变量可以装字面量，而且值是可以任意改变的 "),n("ul",null,[n("li",null,"本质：变量是程序在内存中申请的一块用来存放数据的空间。"),n("li",null,"变量存储的是内存地址。")])])],-1),n("p",null,"变量的使用",-1),n("ul",null,[n("li",null,[l(" 声明变量： var age; "),n("ul",null,[n("li",null," var: 是一个JS关键字，用来声明变量（variable 是变量的意思）。 使用该关键字声明变量后，计算机会自动为变量分配内存空间，不需要程序员管理 "),n("li",null," age: 是程序员定义的变量名，我们要通过变量名来访问内存中分配的空间 ")])]),n("li",null,[l(" 赋值 : age = 10 ; "),n("ul",null,[n("li",null,"=: 用来把右边的值赋给左边的变量空间中，此处代表赋值的意思"),n("li",null,"10: 变量值是程序员保存到变量空间里的值")])]),n("li",null,"变量的初始化： var age = 10; // 直接简写")],-1),n("p",null,"更新变量",-1),n("ul",null,[n("li",null," 一个变量被重新复赋值后，它原有的值就会被覆盖，变量值将以最后一次赋的值为准。 ")],-1),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var age = 18;     // var一个变量赋值18
  age = 28;         // 变量 赋值 28，会覆盖前面的18`)],-1),n("p",null,"赋值多个变量 (用逗号隔开)",-1),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var age = 18, name = ' 小强', address= 上海;
  /* 注意：
      var age;  console.log(age);       只声明不赋值            undefined
      console.log(age)                  不声明不赋值直接使用     报错
      age =10; console.log(age);        不声明只赋值            10   变量函数会提升，不声明，为全局变量，log 后还是能拿到
  */
  <script>
      age = 10;
      function getAge() {console.log(age);}
      getAge();                         // 10
  <\/script>`)],-1),n("p",null,"ES6增加声明方式",-1),n("pre",null,[n("code",{class:"language-js line-numbers"},`  let a;
  let a,b,c;
  let e = 100;
  /* 好处：
       1、变量不能重复声明，和 var 不一样，不用担心被污染
       2、块级作用域 全局 函数 eval ，不止{} ,还有if else while for 里的作用域有效 */
      {
        let a = '块级作用域 ';
      }
        console.log('这里是访问不到块级作用域中 let 声明的变量');  // 如果使用var声明则可以访问
    // 3、不存在变量提升
        console.log(a);                                         // error : a is not defined
        var a = 1;
        let a = 1;                                              // 会直接报错，不存在变量声明之前去使用，会直接报错
    // 4、不影响作用域链接
      {
        let c = '123'
        function fn() {
            console.log(c);                                     // 不会影响作用域链 ，此层作用域没有，还是会往上一级查找
        }
        fn();                                                   // 输出 123
      }`)],-1),n("p",null,"值不能修改的量 称之为常量，const",-1),n("pre",null,[n("code",{class:"language-js line-numbers"},`  const Arr = ['1', '2', '3'];
  Arr.push('4');
  console.log(Arr);                     // 常量修改数组 不会报错

  // 1、一定要赋初始值 ，不能const a;会报错 // index.html:27 Uncaught SyntaxError: Missing initializer in const declaration
  // 2、常量使用大写（潜规则） const A = '常量名称大写';
  // 3、常量不能修改
      const B = '值为A';
      const B = '修改A值' ;             // 会报错 Uncaught SyntaxError: Identifier 'A' has already been declared
  // 4、块级作用域
  // 5、对于数组和对象的元素修改，不算做对常量的修改，不会报错`)],-1),n("p",null,"总结1",-1),n("ul",null,[n("li",null,"var： 会变量提升，可以重复声明"),n("li",null," let： 不会变量提升，不能重复声明，且块级作用域下可以重复声明，不影响外部let 声明的变量 "),n("li",null," const： 不会提升，不可重复声明，不可赋值，常量在定义的时候必须要赋值，之后不可修改 ")],-1),n("p",null,"命名的规范",-1),n("ul",null,[n("li",null," 由字母（A-Z a-z）、数字（0-9）、下划线（_）、美元符号（$）组成，如：usrAge，num01，name_1 "),n("li",null,"严格区分大小写。var app；和 var App；是两个变量"),n("li",null,"不能以数字开头。18age是错误的"),n("li",null," 不能是关键字、保留字。例如：var、for、while，this、name、string、number， 注意name是系统关键字，要避免使用 "),n("li",null,"变量名必须有意义。MMD BBD nl → age"),n("li",null," 遵守驼峰命名法。首字母小写，后面单词的首字母需要大写。myFirstName "),n("li",null,"推荐翻译网站：有道 爱词霸"),n("li",null,"允许使用特殊符号开头的 ： $变量名（ $name ） _变量名( _name )")],-1),n("p",null,"数据交换",-1),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var temp;                 // 先声明一个临时空变量
  var apple1 = '青苹果',     // 右边值赋予给左边的变量
      apple2 = '红苹果';
  temp = apple1;            // 把apple1的值赋予给 temp
  apple1 = apple2;          // 此时再把apple2的值赋予给apple
  apple2 = temp;            // 最后把temp的值赋予给apple 2`)],-1),n("p",null,"总结2",-1),n("ul",null,[n("li",null,[l(" 为什么需要变量？ "),n("ul",null,[n("li",null,"因为我们一些数据需要保存，所以需要变量")])]),n("li",null,[l(" 变量是什么？ "),n("ul",null,[n("li",null," 变量就是一个容器，用来存放数据的。方便我们以后使用里面的数据 ")])]),n("li",null,[l(" 变量的本质是什么？ "),n("ul",null,[n("li",null,"变量是内存里的一块空间，用来存储数据。")])]),n("li",null,[l(" 变量怎么使用的？ "),n("ul",null,[n("li",null," 我们使用变量的时候，一定要声明变量，然后赋值，声明变量本质是去内存申请空间。 ")])]),n("li",null,[l(" 什么是变量的初始化？ "),n("ul",null,[n("li",null,"声明变量并赋值我们称之为变量的初始化")])]),n("li",null,[l(" 变量命名规范有哪些？ "),n("ul",null,[n("li",null,"看命名规范文档")])]),n("li",null,[l(" 交换2个变量值的思路？ "),n("ul",null,[n("li",null,"看变量文档")])])],-1)])),_:1,__:[3]}),u(a,{id:"part3",shadow:"hover"},{default:r(()=>e[4]||(e[4]=[n("h2",null,"数据类型",-1),n("p",null,"js的变量数据类型是只有程序在运行过程中，根据等号右边的值来确定的",-1),n("ul",null,[n("li",null,[l(" js是动态语言变量的数据类型是可以变化的 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var x = 10;
  x = '字符串';

  /*
    检查数据类型可以使用  typeof   变量   console.log ( typeof a )       //  typeof (a )
    JS把数据类型分为两类（基本数据类型[前五中都是] 和 引用数据类型[object]）：
      Number      数字型，       包含整型值和浮点型值，如21、0.21
      Boolean     布尔值类型      如true、false，等价于1和0
      String      字符串类型      如张三”注意咱们js里面，字符串都带引号
      Undefined   Undefined     var a;声明了变量a但是没有给值，此时a=undefined
      Null        Null          var a = null;  声明了变量a为空值null
      object      对象
      *Symbol()   Symbol()      ES6增加的新对象数据类型，作用是用于确定一个唯一的数据，通常给对象添加唯一的属性或方法
   */`)])]),n("li",null,[l(" 数字型 Number： JavaScript数字类型既可以用来保存整数值，也可以保存小数（浮点数）。 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var age = 21;        // 整数
  var Age = 21.3777;   // 小数，也称为浮点数

  // 数字型范围 （注意大小写）
  alert(Number.MAX_VALUE);    // 最大值 1.7976931348623157e+308 科学计数法10的308次方
  alert(Number.MIN_VALUE);    // 最小值 大于0，最小的正值 5e-3
  alert(Infinity);            // 无穷大 Infinity alert(Number.MIN_VALUE * 2);
  alert(-Infinity);           // 负无穷大 -Infinity alert(-Number.MIN_VALUE * 2);
  alert(NaN);                 // 非数字 Not a Number  ，表示非法的数字，不是一个数字
  alert(01 + 0.3);            // 对于金钱类的计算，精度要求比较大的时候不要用js计算，要在服务器上计算， 结果等于0.300...4
  let a = ...9n               // BigInt类型，表示任意精度的整数 ,尾巴加个n就能显示大整数，表示数字范围是无限大，取决于内存 `)])]),n("li",null,[l(" 字符串 String （在底层字符串是以字符数组的形式保存的，有索引号，也有长度属性length） "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  str = 'hello';
  var result = str[2];

  // 字符串型可以是引号中的任意文本，其语法为"双引号' '和 '单引号'，不加引号会报错
  // 注意: JS可以用单引号嵌套双引号，或者用双引号嵌套单引号（外双内单，外单内双）`)]),n("ul",null,[n("li",null,"*ES6 模版字符串: 使用 ` $(变量名)`"),n("li",null,[l(" 字符串转义符： "),n("ul",null,[n("li",null," 要写到引号里面类似HTML里面的特殊字符，字符串中也有特殊字符，我们称之为转义符。 "),n("li",null,"转义符都是\\开头的，常用的转义符及其说明如下：")]),n("pre",null,[n("code",{class:"language-js line-numbers"},`  \\n       换行符，n是newline的意思
  \\\\       斜杠\\,多个斜杠就写多对  \\\\\\\\
  \\'       单引号
  \\"       双引号
  \\t       tab缩进
  \\b       空格，b是blank的意思`)])]),n("li",null,[l(" 字符串长度：字符串是由若干字符组成的，这些字符的数呈就是字符串的长度。通过字符串的length属性可以获取整个字符串的长度。 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var strMSg = '123 456 758 595';
  alert(strMsg.length);             // 显示15， 因为空格也算一个字符`)])]),n("li",null,[l(" 字符串的拼接 ： 数值相加，字符相连 "),n("ul",null,[n("li",null," 多个字符串之间可以使用 + 进行拼接，其拼接方式为字符+任何类型=拼接之后的新字符串 "),n("li",null," 拼接前会把与字符串相加的任何类型转成字符串，再拼接成一个新的字符串 ")]),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var string = '我是文字' + 15;
  alert(string);                    // 输出结果 我是文字15`)])]),n("li",null,[l(" 字符串相连： 引引加加 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var myAge = prompt('请输入年龄: ');
  alert('您今年' + myAge + '岁')`)])])])]),n("li",null,[l(" 布尔型 Boolean true = 1 false = 0 "),n("ul",null,[n("li",null,[l(" 布尔类型有两个值：true和false，其中true表示真（对），而false表示假（错）。 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var flag1 = true;
  var flag2 = false;
  console.log(flay1 + 1);           // 输出结果 2，布尔型可以做 加减运算
  console.log(flay2 + 1);           // 输出结果 1，布尔型可以做 加减运算`)])]),n("li",null,[l(" 布尔类型用来保存一些状态，或者对立的一对数据，例如： "),n("ul",null,[n("li",null,"开、关"),n("li",null,"是、否"),n("li",null,"对、错")])]),n("li",null,[l(" 而且布尔类型通常是用来作为条件判断的 "),n("ul",null,[n("li",null,"在PHP中 ’0’ 、[ ] 被转换成false"),n("li",null,"在JavaScript中，’0’、[ ] 会被转换成true")])]),n("li",null,[l(" 如何将数据类型进行强制转换呢？ Boolean()函数 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var str = "0";
  var arr = [];

  var res1 = Boolean(str);   /* true */
  var res2 = Boolean(arr);   /* true */`)])])])]),n("li",null,[l(" Undefined 和 Null "),n("ul",null,[n("li",null," 一个声明后没有被赋值的变量会有一个默认值undefined（如果进行相连 或者 相加时，注意结果） "),n("li",null,"null和undefined进行相等比较时会返回true"),n("li",null,[l(" NaN不和任何值相等，包括它自身 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var variable;
  console.log(variable);           /* undefined */
  console.log("你好" + variable);  /* 你好undefined */
  console.log(11 + variable);      /* NaN */
  console.log(true + variable);    /* NaN */`)])]),n("li",null,[l(" 一个声明变量给null值，里面存的值为空（学习对象时，我们继续研究null） "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var nu = null;
  console.log("你好" + nu);         /* 你好null */
  console.log(11 + nu);            /* 11 */
  console.log(true + variable);    /* 1 */`)])])])]),n("li",null,[l(" isNaN() 这个方法用来判断非数字并且返回一个值如果是数字返回的是false，如果不是数字返回的是true "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var a = 10;
  var b = '我';
  console.log(isNaN(a));           // false     isNaN(): is not a number
  console.log(isNaN(b));           // true`)])])],-1),n("p",null,"进制",-1),n("pre",null,[n("code",{class:"language-js line-numbers"},`  // 1.八进制 0~7 我们程序里面数字前面加0 表示八进制   数字的前面加 0x 就代表十六进制
      var num = 010;

  // 2.十六进制 0 ～ 9 剩下的六位是 a ~ f
      var num = 0x9;    // log 输出为9
      num = 0xa;        // log 输出为10

  // 3.二进制以0b开头，只是了解，兼容性差，不建议使用
      var num = 0b10;`)],-1),n("p",null,"获取检测变量的数据类型",-1),n("ul",null,[n("li",null," typeof 可用来获取检测变量的数据类型，返回的结果是一个字符串。最后一个 null 是对象 "),n("li",null,[l(" prompt( ); 中取出来的值是字符型 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var num = 0x9;                  // log 输出为9
  console.log(typeof num);        // number
  var str = '你好';
  console.log(typeof str);        // string`)])]),n("li",null,[l(" 控制台输出的结果： "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  console.log(18);                // 18          绿色代表数字型
  console.log('18');              // 18          黑色代表字符型
  console.log(true);              // true        绿色代表数字类型
  console.log(undefined);         // undefined
  console.log(null);              // null`)])]),n("li",null,[l(" 字面量是在源代码中一个固定值的表示法，通俗来说，就是字面量表示如何表达这个值。 "),n("ul",null,[n("li",null,"数字字面量： 8，9，10"),n("li",null,"字符串字面量： 黑马程序员，”大前端”"),n("li",null,"布尔字面量： true，false")])])],-1),n("p",null,"数据类型转换",-1),n("ul",null,[n("li",null," 使用表单、prompt获取过来的数据默认是字符串类型的，此时就不能直接简单的进行加法运算， 而需要转换变量的数据类型。通俗来说，就是把一种数据类型的变量转换成另外一种数据类型。 "),n("li",null,[l(" 转换为字符串类型： 注意大小写，重点记住拼接方法，num1 和 num2注意方式 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var num1 = 1;
  console.log(num1.toString());         /* 调用谁谁的方法：转成字符串调方法 */
  num1 = num1.toString()                /* 转换后不会改变原变量，会在内存地址新增一个为1的字符串。重新赋值才会得到字符串1 */

  var num2 = 1;
  console.log(String(num2));            /* 字符串函数：强制转换字符串 */

  var num3 = 1;
  console.log(num3 + "我是字符串");      /* 拼接方法转换 */

  // 注意：NaN 和 undefined  是没有  toString 方法的`)])]),n("li",null,[l(" 转换为布尔型 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  // 代表空、否定的值会被转换为false， 如"、0、NaN、null、undefined  其余值都会被转换为true
  console.log(Boolean(""));                  // false
  console.log(Boolean(" "));                 // true 加了空格表示有字符
  console.log(Boolean(0));                   // false
  console.log(Boolean(NaN));                 // false
  console.log(Boolean(null));                // false
  console.log(Boolean(undefined));           // false
  console.log(Boolean("小白"));               // true
  console.log(Boolean(12));                  // true
  console.log(Boolean(Infinity));            // true
  console.log(Boolean(Object));              // true `)])]),n("li",null,[l(" 强制类型转换：通过JavaScript函数，强制将某种类型转换，类型转换的函数有如下：（注意大小写） "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  /* 强制类型转换：通过JavaScript函数，强制将某种类型转换，类型转换的函数有如下：（注意大小写） */

  Number();                /* 强制将其他类型的数据转换成数值 */
  parseInt();              /* 强制将其他类型的数据转换成整数 */
  parseFloat();            /* 强制将其他类型的数据转换成小数 */
  String();                /* 将其他类型的数据转换成字符串 */
  Boolean();               /* 将其他类型的数据转换成布尔类型 */`)])]),n("li",null,[l(" 案例：输入年份，求出年龄 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var age = prompt('请输入您的出生年份');
  var year = 2021 - parseInt(age);           // prompt取值是字符串，但是 -号 是js的隐式转换，不用parseInt也可以计算
  alert(year);`)])]),n("li",null,[l(" 两数相加 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var num1 = prompt('请输入您的第一个数值');
  var num2 = prompt('请输入您的第二个数值');
  var sum = parseInt(num1) + parseInt(num2);
  alert('总数为：'+sum+'')`)])])],-1)])),_:1,__:[4]}),u(a,{id:"part4",shadow:"hover"},{default:r(()=>e[5]||(e[5]=[n("h2",null,"标识符 关键字 保留字",-1),n("p",null,"前言",-1),n("ul",null,[n("li",null,[l(" 标识符 "),n("ul",null,[n("li",null," 标识（zhi）符：就是指开发人员为变量、属性、函数、参数取的名字。标识符不能是关键字或保留字。 ")])]),n("li",null,[l(" 关键字 "),n("ul",null,[n("li",null," 关键字： 是指JS本身已经使用了的字，不能再用它们充当变量名、方法名。 "),n("li",null," 包括： break、case、catch、continue、default、delete、do、else、finally、for、function、if、in、instanceof、new、return、switch、this、throw、try、typeof、var、void、while、with等。 ")])]),n("li",null,[l(" 保留字 "),n("ul",null,[n("li",null," 实际上就是预留的“关键字”，意思是现在虽然还不是关键字，但是未来可能会成为关键字， 同样不能使用它们当变量名或方法名。 "),n("li",null," 包括： boolean、byte、char、class、const、debugger、double、enum、export、extends、fimal、float、 goto、implements、import、int、interface、long、mative、package、private、protected、public、 short、static、super、synchronized、throws、transient、volatile等。 ")])])],-1)])),_:1,__:[5]}),u(a,{id:"part5",shadow:"hover"},{default:r(()=>e[6]||(e[6]=[n("h2",null,"运算符",-1),n("p",null,"前言",-1),n("ul",null,[n("li",null,[l(" 运算符（operator）也被称为操作符，是用于实现赋值、比较和执行算数运算等功能的符号。 "),n("ul",null,[n("li",null,[l(" 注意： "),n("ul",null,[n("li",null," 运算符 + ： 任何值和NaN 相加，都为NaN 。不是number值的数字会转换为数字，和字符串+则会拼接 "),n("li",null," 运算符 - ： 数字和任何相减，都会被转为数字，与 运算符 + 不同 ")])])])]),n("li",null,[l(" JavaScript中常用的运算符有： "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  10 + 10 = 20;       // 加
  10 - 20 = -10;      // 减
  10 * 20 = 200;      // 乘
  10 / 20 = 0.5;      // 除
  9 %  2  = 1;        // 取余 取模就是 除数 / 被除数 = 商 余 几 ， 如果 除数 小于 被除数 ，取模的值为除数本身
  5 ** 5 = 3125       // ** 幂运算，5的5次方
  var a = 8;
  var b = 5;
  console.log(a % b); //3 如果 a > b ,值等于b`)]),n("ul",null,[n("li",null," 浮点数值的最高精度是17位小数，但在进行算术计算时其精确度远远不如整数。不要直接判断两个浮点数是否相等！ "),n("li",null," 1 + 2 *3 结果是7，注意算术运算符优先级，先乘除，后加减，有小括号先算小括号里面的 "),n("li",null,"闰年：能被400整除的 就可以用取模运算符"),n("li",null," 浮点数进行加减运算的时候要注意，避免用浮点数进行运算，后面会用取整 ")])]),n("li",null,"以上这些都属于二元运算符 例如： 1+2"),n("li",null,"一元运算符只需要一个操作数 + - 例如： -1 + 123"),n("li",null,"三元运算符需要三个操作数 例如： 1>2 ？1 ：2"),n("li",null,[l(" 递增和递减运算符： ++在前等于原值，++在后等于新值，说的是表达式的值 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var a = 10;
  console.log(a++);  // a++ = 10   a = a+1
  console.log(a);    // a = 11
  console.log(++a);  // a= a+1   a=a++  a++ = 11
  console.log(a);    // a=11

  a 和 a++   两个是不同的，一个是变量，一个是表达式，所以值是两个

  如果需要反复给数字变量添加或减去1，可以使用递增（++）和递减（--）运算符来完成。
  在JavaScript中，递增（++）和递减（--）既可以放在变量前面，也可以放在变量后面。
  放在变量前面时，我们可以称为前置递增（递减）运算符!
  放在变量后面时，我们可以称为后置递增（递减）运算符。
  (注意：递增和递减运算符必须和变量配合使用。)

  a       是变量，当后++或前++，马上增加1
  a++     是表达式，a++等于原变量的值
  ++a     是表达式，++a等于原变量自增后的新值
  a - -   是表达式，a- - 是等于自减前的值
  - -a    是表达式，- -a 是自减后的新值

  var a = 10;
  a++;
  console.log(a++);  //这里是调用了两次a++,所以   a++会等于 自增前的值  11`)])]),n("li",null,[l(" 前置递增运算符： 先加1，后返回原值 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var  num = 10;
  // ++num前置递增，类似于num=num+1   num++=num`)])]),n("li",null,[l(" 后置递增运算符： 先返回原值，后加1 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var  num = 10;
  // num++后置递增，类似于num=num++ , num=num+1`)])]),n("li",null,[l(" 练习--47集 错误的思路： "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var a = 10;                //++在前，先加1 后赋值
  ++a;                       //a= 10+1=11  ，返回值等于 11+10 = 21
  var b = ++a + 2;           //b = 11+1=12  12 + 21 =23  23 + 2
  console.log(a);            // a=12
  console.log(b);            // b=25

  var c = 10;                //++在后，先赋值 后+1
  c++;                       //c= 10   ,c++返回值为 11
  var d = c++ + 2;           //d= 11+2
  console.log(d);            //d= 13
  console.log(c);            //c=10

  var e = 10;
  var f = e++ + ++e;         // 11 + 21
  console.log(f);            // f =32
  console.log(e);            // 10`)])]),n("li",null,[l(" 正确思路： "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var a = 10;                // a=10
  ++a;                       // ++在前，先加1(a= (a+1)=11 ) 后赋值 ++a = a ,所以a++值是11 ;
  var b = ++a + 2;           // b= (a先加1,之前a是11，所以现在+1了，a =12 ), 再赋值 ++a =12(a),那么  12 + 2
  console.log(a);            // a=12
  console.log(b);            // b=12+2  b=14

  var c = 10;                // c = 10
  c++;                       // 独的话，值是一样的  c++ =11   c=11
  var d = c++ + 2;           // 表达式的话就不一样，先赋值， c++ =11(c), 然后自加1， c+1= 12
  console.log(d);            // 13
  console.log(c);            // 12

  var e = 10;                // e = 10
  var f = e++ + ++e;         // 先赋值 e++ =10  （e = e+1= 11）   +    先加1(e = e+1= 12)   ++e =12
  console.log(f);            // f = e++ + ++e =   10 +12
  console.log(e);            // 12`)])]),n("li",null,[l(" 案例 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var n1 = 10,
      n2 = 20;
  var n = n1++;                         // n1++ = 10   n1 = 11
  console.log('1、n=' + n);             // 10
  console.log('2、n1=' + n1);           // 11
  n = ++n1;
  console.log('3、n=' + n);             // 12
  console.log('4、n=' + n1);            // 12
  n = n2--;                             // n2-- =20   n2= 19
  console.log('5、n=' + n);             // 20
  console.log('6、n2=' + n2);           // 19
  n = --n2;
  console.log('7、n=' + n);             // 18
  console.log('8、n2=' + n2);           // 18`)])]),n("li",null,[l(" 总结 "),n("ul",null,[n("li",null," 前置递增和后置递增运算符可以简化代码的编写，让变量的值+1比以前写法更简单 "),n("li",null,"单独使用时，运行结果相同"),n("li",null,"与其他代码联用时，执行结果会不同"),n("li",null,"后置：先原值运算，后自加（先人后己）"),n("li",null,"前置：先自加，后运算（先已后人）"),n("li",null," 开发时，大多使用后置递增/减，并且代码独占一行，例如：num++; 或者num--; ")])])],-1),n("p",null,"表达式和返回值",-1),n("ul",null,[n("li",null," 表达式：是由数字、运算符、变量等以能求得数值的有意义排列方法所得的组合卡 "),n("li",null,"简单理解：是由数字、运算符、变量等组成的式子"),n("li",null,"表达式最终都会有一个结果，返回给我们，我们称为返回值"),n("li",null,"正常算式： 1 + 2 = 3 // 3就是返回的结果，也称为返回值"),n("li",null," 程序表达式： 3 = 1 + 2 // 右边的表达式算出来的值，赋给左边 ，3就是返回值 ")],-1),n("p",null,"比较运算符",-1),n("ul",null,[n("li",null,"比较运算符（关系运算符）是两个数据进行比较时所使用的运算符，"),n("li",null," 比较运算后，会返回一个布尔值（true/false）作为比较运算的结果。 "),n("li",null," >= 和 <= 例如： 10 >= 5 只要10大于了5 ，那么也会返回true ，大于或者等于，就会true "),n("li",null,"任何值和 NaN 做比较，都是false"),n("li",null," 如果两侧都是字符串，则会比较 字符串的 Unicode 编码大小，如果字符串数量不一样，则会一位一位比 "),n("li",null," 例如: “abc” < “b” 此时会第一位相比较，因为没有第二位，如果两侧都有三位，则一位一位比第一位都一样，则比较下一位 "),n("li",null,[l(" 小知识 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  // 如果想输出Unicode编码，需要转义符     \\u +编码            16进制
  // 如果在网页中使用，                   & # + 编码；        10进制

  < 小于号                           1<2           true
  > 大于号                           1>2           false
  >=大于等于号（大于或者等于）         2>=2          true
  <=小于等于号（小于或者等于）         3<=2          false
  ==判等号（会转型）                  37==37        true
  !=不等号                           37!=37        false
  === !==全等要求值和数据类型都一致    37===37       false

  注意：== 会默认转换数据类型          // 数字型（10）和字符型（' 10 '）数字比较，会把字符型数字转化成数字型

  console.log(18 == '18');           // true       字符串型数据会被转换
  console.log(18 != 18);             // false
  console.log(18 != '18');           // false      等于,值相等就可以
  console.log(18 === '18');          // false      全等：两侧的值，还有数据类型要完全相等才会true

  =                                  // 赋值把右边给左边
  ==                                 // 判断判断两边信是否相等（注意此时有隐式转换）
  ===                                // 全等判断两边的值和数据类型是否完全相同`)])])],-1),n("p",null,"逻辑运算符概述",-1),n("ul",null,[n("li",null,[l(" *补充 "),n("ul",null,[n("li",null,"如果写两个&， && ，左边遇到false就不会执行右边！"),n("li",null,"如果 &写一个，&左边false后，右边还会执行，但依然返回false")])]),n("li",null,[l(" 概念：逻辑运算符是用来进行布尔值运算的运算符，其返回值也是布尔值。后面开发中经常用于多个条件的判断 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  &&  "逻辑与"      简称  "与"     and true && false
  11  "逻辑或"      简称  "或"     or true || false
  !   "逻辑非"      简称  "非"     not ！ true`)])]),n("li",null,[l(" && ：二个结果，也称为逻辑中断符，短路 "),n("ul",null,[n("li",null,"两侧条件都为true，则结果为true，返回值为第二个true"),n("li",null,"第一个为false。第二个直接不看，返回第一个false"),n("li",null," 第一个为true，此时会看第二个结果，如果为true，返回第二个true，如果为false，则返回false ")]),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var res = 2 > 1 && 3 > 1;          var res = 2 > 1 && 3 > 1;
  //        true     true                      true     false
  result:true                        result:false`)])]),n("li",null,[l(" || ： "),n("ul",null,[n("li",null," 两侧条件判断，只要有一个判断为true，则结果为true，两侧为false，则返回false "),n("li",null,"第一个为true，就不会看第二个值，直接返回第一个结果"),n("li",null,"第一个为false，则返回第二个结果，不管true还是false")]),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var res = 2 > 3 || 1 < 2;          var res = 2 > 1 || 3 > 1;
  //        false    true                      false    false
  result:true                        result:false`)])]),n("li",null,[l(" ！： "),n("ul",null,[n("li",null,"如果不是true，则结果为false，如果不是false，则结果为true"),n("li",null," 逻辑非（！）也叫作取反符，用来取一个布尔值相反的值，如true的相反值是false "),n("li",null,"！！ 可以取反两次")])]),n("li",null,[l(" 练习 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var num = 7;
  var str = '我是文字七个字';
  console.log(num > 5 && str.length >= num);     // true &&   7 >= 7(true)    结果 true
  console.log(num < 5 && str.length >= num);     // false &&  false    结果 false
  console.log(!(num < 10));                      // false （true）  取反
  console.log(!(num > 10 || str.length == num)); // ?(false || true)，!（true）  结果 false`)])])],-1),n("p",null,"短路运算 （逻辑中断）",-1),n("ul",null,[n("li",null,[l(" 短路运算的原理：当有多个表达式（值）时左边的表达式值可以确定结果时，就不再继续运算右边的表达式的； "),n("ul",null,[n("li",null,[l(" 逻辑与 语法： "),n("ul",null,[n("li",null,"表达式1 && 表达式2"),n("li",null," 如果第一个表达式的值为真，第二个表达式也为真，则返回表达式2 "),n("li",null," 如果第一个表达式的值为假，第二个表达式就不看了，直接返回表达式1 "),n("li",null,"例子")]),n("pre",null,[n("code",{class:"language-js line-numbers"},`  console.log(123 && 456);    // 左边的表达式，除了0，其余的数字都是true，所以这里返回右边的结果 456
  console.log(0 && 456);      // 左边的表达式，0是false，如果表达式1为false，则逻辑中断，返回第一个结果 0`)])]),n("li",null,[l(" 逻辑或 语法： "),n("ul",null,[n("li",null,"表达式1 || 表达式2"),n("li",null," 如果第一个表达式的值为真，第二个表达式就不看了，则返回表达式1 "),n("li",null," 如果第一个表达式的值为假，第二个表达式为真，则返回表达式2 "),n("li",null,"例子")]),n("pre",null,[n("code",{class:"language-js line-numbers"},`  console.log(123 || 456);                // 左边的表达式，除了0，其余的数字都是true，所以这里返回左边的结果 123
  console.log(0 || 456);                  // 左边的表达式，0是false，则返回表达式2，返回第二个结果   456
  console.log(0 || 456 || 123+456);       // 左边的表达式，0是false，则返回表达式2，表达式2和表达式3比较，表达式2为true，则中断，结果直接返回表达式2   456
  console.log(0 || null || undefined);    // 三个表达式，全部为false，则返回第三个表达式`)])])])]),n("li",null,[l(" 重要：逻辑中断会影响后面的输出结果 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var num = 0;
  console.log(123 || num++);    // 返回结果 123，因为逻辑中断，不执行第二句 num++
  console.log(num);             // 返回结果 0

  var num = 0;
  console.log(123 && num++);    // 返回结果 0，123为true,但是 num++ num=0，false，所以返回表达式2 , num++,  num = 1
  console.log(num);             // 返回结果 1`)])])],-1),n("p",null,"赋值运算符",-1),n("pre",null,[n("code",{class:"language-js line-numbers"},`  /* 概念：用来把数据赋值给变量的运算符。 */

  var usrName = "我是值";
  var age = 10;            // 直接赋值
  age += 5;                // 15   +=  -=   相当于  age = age + 5;
  var age = 2;
  age *= 5;                // 10   *= /= %= 相当于  age = age * 5;
  age ??= 5;               // ??=  空值合并运算符，当左侧为null或者undefined时，返回右侧的值，否则返回左侧的值`)],-1),n("p",null,"优先级",-1),n("pre",null,[n("code",{class:"language-js line-numbers"},`  1    小括号        （）
  2    一元运算符     ++ -- ！
  3    算术运算符     顺序 *  / %   +  -
  4    关系运算符     >   >=    <    <=
  5    相等运算符     ==    !=    ===    !==
  6    逻辑运算符     顺序  &&   ||
  7    赋值运算符     =
  8    逗号运算符     ，`)],-1),n("ul",null,[n("li",null," 注意： 一元运算符里面的逻辑非的优先级比或和非高，逻辑与比逻辑或优先级高，如果实在不知道优先级，直接拿括号（） 括起来要先算的值 "),n("li",null,[l(" 练习1 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  // 3、结果为  true
  // 2、                true            &&          true    &&  true
  // 1、        false    或    true      与    取反 !(false) 与 true     与要比或大，先算与，再对比或
  console.log(4 >= 6 || '人' != '阿凡达' && !(12 * 2 == 144) && true);  // true
  var num = 10;
  // 3、          true     与     true       结果肯定返回true
  // 2、          true     与     '22'                 === '22'
  // 1、         5 ==  5   与     '22'                 === '22'
  console.log(5 == num / 2 && (2 + 2 * num).toString() === '22');        // true`)])]),n("li",null,[l(" 练习2 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  //       F    &&   T   &&   F
  var a = 3 > 5 && 2 < 7 && 3 == 4;           // 大于号(开口向左)  >  小于号（开口向右） <
  console.log(a);                             // a= false
  //      F      ||   T   ||   T
  var b = 3 <= 4 || 3 > 1 || 3 != 2;
  console.log(b);                             // b = true
  var c = 2 === "2";
  console.log(c);                             // c = false
  var d = !c || b && a;                       // d = !(F) ||  T && F
  console.log(d);                             // d = true ||  F    d= T    `)])])],-1)])),_:1,__:[6]}),u(a,{id:"part6",shadow:"hover"},{default:r(()=>e[7]||(e[7]=[n("h2",null,"代码块",-1),n("p",null,"前言",-1),n("ul",null,[n("li",null,"在JS中可以使用{}来为语句进行分组"),n("li",null,"同一个{}中的语句我们称为是一组语句"),n("li",null,"它们要么都执行，要么都不执行"),n("li",null,"一个{}中的语句我们也称为叫一个代码块"),n("li",null,"在代码块的后边就不用再写 分号 ;"),n("li",null,"代码块只有分组作用，没有其他用途，不会隔离里面的代码")],-1),n("pre",null,[n("code",{class:"language-js line-numbers"},`  {
      alert('第一条语句');
      console.log('第二条语句');
      console.log('第三条语句');
  }`)],-1)])),_:1,__:[7]}),u(a,{id:"part7",shadow:"hover"},{default:r(()=>e[8]||(e[8]=[n("h2",null,"流程控制 -分支",-1),n("p",null,"前言",-1),n("ul",null,[n("li",null," 在一个程序执行的过程中，各条代码的执行顺序对程序的结果是有直接影响的。 "),n("li",null,"很多时候我们要通过控制代码的执行顺序来实现我们要完成的功能。"),n("li",null,[l(" 简单理解： "),n("ul",null,[n("li",null," 流程控制就是来控制我们的代码按照什么结构顺序来执行。流程控制主要有三种结构，分别是 "),n("li",null," 顺序结构、分支结构和循环结构，这三种结构代表三种代码执行的顺序。 ")]),n("pre",null,[n("code",{class:"language-js line-numbers"},`  顺序结构       分支结构         循环结构
  顺序执行       条件执行         循环执行
    A           --判断--          A <-------
    |           |     |           |        |
    B           A     B          判断------|    条件成立 yes，继续循环
                                  |   no
                                  |
                                跳出循环`)])]),n("li",null," 顺序结构：是程序中最简单、最基本的流程控制，它没有特定的语法结构 程序会按照代码的先后顺序，依次执行，程序中大多数的代码都是这样执行的。 "),n("li",null,[l(" 分支结构：由上到下执行代码的过程中，根据不同的条件，执行不同的路径代码（执行代码多选一的过程），从而得到不同的结果。 JS语言提供了两种分支结构语句，if switch "),n("ul",null,[n("li",null,[l(" if 双分支语句： 如果条件表达式结果为true，则执行代码1，如果为false，则跳过执行代码1，执行else后面的执行代码2。 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  if(条件表达式){           // 如果成立执行下面代码1
      执行代码1
  }else{                  // 否则进入执行代码2
      执行代码2
  }`)])]),n("li",null,[l(" if 多分支语句: else if 可以写多个 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  if(条件表达式1){          // 如果成立执行下面代码1
      执行代码1
  }else if(条件表达式2){    // 否则进入执行代码2
      执行代码2
  }else{
      以上条件都不成立时 执行最后这条代码
  }`)])])])]),n("li",null,[l(" switch 语句: "),n("ul",null,[n("li",null,[l(" switch 语句也是多分支语句也可以实现多选1，语法结构switch 转换、开关 case 小例子或者选项的意思 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  switch (表达式) {
    case value1:
        执行语句1;
        break;     // 退出语句
    case value2:
        执行语句2;
        break;     // 退出语句
        ...        // 可以写很多个case
    default:
        执行最后一条语句;
  }

  // 省略写法
  switch (表达式) {
      case value1:
      case value2:
          console.log(1);
          break;
      case value3:
      case value4:
          console.log(2);
          break;
      default:
          console.log(3);
  }
  // 当代码相同时候，可以省略重复代码，因为碰到break才会跳出循环，所以会执行下一个case`)])])])]),n("li",null,[l(" 执行思路： "),n("ul",null,[n("li",null," 让表达式的值和case 的 value 相匹配，全等了，执行语句，如果都不全等，则执行default： "),n("li",null," switch语句也是多分支语句，它用于基于不同的条件来执行不同的代码。 "),n("li",null," 当要针对变量设置一系列的特定值的选项时，就可以使用switch。 ")])]),n("li",null,[l(" 注意 "),n("ul",null,[n("li",null,"我们开发里面 表达式 我们经常写成 变量"),n("li",null," 我们num的值 和 case里面的值相匹配的时候是 全等 必须是值和数据类型一致才可以， num === 1 "),n("li",null," 如果不写 break; 来退出循环语句，则会执行下面的代码。执行完所有没带 break 的 case 和最后的 default： ")])]),n("li",null,[l(" 总结：switch 语句和if else if 语句的区别 "),n("ul",null,[n("li",null,"一般情况下，它们两个语句可以相互替换"),n("li",null," switch..case 语句通常处理case为比较确定值的情况，而if..else..语句更加灵活，常用于范围判断（大于、等于某个范围） "),n("li",null," switch 语句进行条件判断后直接执行到程序的条件语句，效率更高。而if..else语句有几种条件，就得判断多 "),n("li",null,"当分支比较少时，if..else语句的执行效率比switch语句高。"),n("li",null," 当分支比较多时，switch语句的执行效率比较高，而且结构更清晰。 ")])]),n("li",null,[l(" 案例 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  // 练习1
  var age = prompt('请输入您的年龄');
  var age2 = 18;
  if (age >= age2) {
      // 推荐写法， age >= age2  因为这里不需要parseIbt转型，因为等号会转换数据类型
      // 复杂写法： parseInt(age) > age2  这里需要parseInt转型，因为输出的是字符串
      alert('您已经满18岁，可以进入网吧了');
  } else {
      alert('您当前年龄为' + age + '岁，未满18岁，不允许进入网吧');
  }

  // 练习2: 检测输入的年份是否是闰年
  var year = prompt('请输入需要检测的年份');
  if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
      alert('' + year + ' 是闰年');
  } else {
      alert('' + year + ' 是平年');
  }

  // 练习3
  var num1 = prompt('请输入您的分数');
  if (num1 >= 90) {
      alert('A');
  } else if (num1 >= 80) {
      alert('B');
  } else if (num1 >= 70) {
      alert('C');
  } else if (num1 >= 60) {
      alert('D');
  } else {
      alert('E');
  }

  // 练习4
  var fruit = prompt('请输入您查询的水果');
  switch (fruit) {
      case '榴莲':
          console.log('35元/斤');
          break;
      case '苹果':
          console.log('10元/斤');
          break;
      case '臭豆腐':
          console.log('没有此水果');
          break;
      default:
          console.log('停售');
  }

  // 练习5
  var num1 = prompt('请输入第一个数值');
  var num2 = prompt('请输入第二个数值');
  if (num1 > num2) {
      alert(num1 + '大于' + num2);
  } else if (num1 == num2) {
      alert(num1 + '等于' + num2);
  } else {
      alert(num1 + '小于' + num2);
  }

  // 练习6
  var num1 = prompt('请输入一个数值');
  if (num1 % 2 == 0) {
      alert(num1 + '是偶数');
  } else {
      alert(num1 + '是奇数');
  }

  // 练习7: 排序
  var num1 = parseInt(prompt('num1 ='));          // 3
  var num2 = parseInt(prompt('num2 ='));          // 5
  var num3 = parseInt(prompt('num3 ='));          // 1

  if (num1 < num2 & num1 < num3) {                // num1 最小
      if (num2 < num3) {                          // num2 最小
          alert(num3 + ',' + num2 + ',' + num1);
      } else
          alert(num2 + ',' + num3 + ',' + num1);
  } else if (num2 < num1 && num2 < num3) {        // num2 最小
      if (num1 < num3) {                          // num1 最小
          alert(num3 + ',' + num1 + ',' + num2);
      } else {
          alert(num1 + ',' + num3 + ',' + num2);
      }
  } else {
      if (num1 < num2) {
          alert(num2 + ',' + num1 + ',' + num3);
      } else {
          alert(num1 + ',' + num2 + ',' + num3);
      }
  }

  /* 练习8：判断月份有多少天
      输入年月输出该月份有多少天
      闰年公式：年份能4整除，但不能被100整除；或者年份能被400整除。闰年的2月份是29天，平年前2月份是28天。*/
  var year = parseInt(prompt('请输入年份：'));
  var month = parseInt(prompt('请输入月份：'));
  var days = 0;          // 表示天数
  // 算出days是多少
  // 判断哪些月份是31天
  if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
      days = 31;
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
      // 判断哪些月份是30天
      days = 30;
  } else {
      // 进入else，就表示是2月份
      // 要别断当前年份是否是闰年
      if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
          days = 29;     // 闰余，2月是29天
      } else {
          days = 28;     // 平年，2月是28天
      }
  }
  console.log(year + '年' + month + '月有' + days + '天');

  /* 练习9: 判断输入年份得出当天是全年的第几天
      输入年月日，第出该日期是金年的着多少天 */
  let year = parseInt(prompt('请输入年份：'));
  let month = parseInt(prompt('请输入月份：'));
  let day = parseInt(prompt('请输入日期：'));
  let sum = 0;                // 用于表示总天数
  // 第出sum的具体值
  // 比如输入的日期是：2021-8-8。
  // 01.累加整月的天数   整月指的是1月到7月
  let i = 1;                  // 表示从1月开始循环
  while (i < month) {         // 如装month是8，i可以取值为7
      //判i是几，从而确定都个月份有多少天
      switch (i) {
          case 1:
          case 3:
          case 5:
          case 7:
          case 8:
          case 10:
              sum += 31;
              break;
          case 4:
          case 6:
          case 9:
          case 11:
              sum += 30;
              break;
          default:
              if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
                  sum += 29;   // 闰余，2月是29天
              } else {
                  sum += 28;   // 平年，2月是28天
              }
      }
      i++;                     // 每循环一次，i加1
  }
  // 02.再加上当前月份的天数   当前月份的天数是8
  sum += day;
  console.log(\`\${year}-\${month}-\${day}是全年的第\${sum}天\`);`)])])],-1),n("p",null,"三元表达式",-1),n("ul",null,[n("li",null," 三元表达式也能做一些简单的条件选择。有三元运算符组成的式子称为三元表达式 "),n("li",null,[l(" 如果条件表达式结果为真，则返回 表达式1 的值，如果条件表达式为假，则返回 表达式2 的值， 语法结构 条件表达式 ？ 表达式1：表达式2 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var num = 10 ;
  var result = num > 5 ? ' true ' : ' false'        // 表达式是有返回值的，所以初始化一个变量接收`)])]),n("li",null,[l(" 练习 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var num1 = prompt('请输入您的数字');
  var result = num1 < 10 ? '0' + num1 : num1;    // 需要接收值，给个变量
  alert(result);`)])])],-1)])),_:1,__:[8]}),u(a,{id:"part8",shadow:"hover"},{default:r(()=>e[9]||(e[9]=[n("h2",null,"循环",-1),n("p",null,"可以重复执行某些代码",-1),n("ul",null,[n("li",null," 在程序中，一组被重复执行的语句被称之为循环体，能否继续重复执行，取决于循环的终止条件。 "),n("li",null,[l(" 由循环体及循环的终止条件组成的语句，被称之为循环语句 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  for （初始化变量；条件表达式；操作表达式）{
      // 放入循环体
  }
  for (var num1 = 1; num1 <= 1000; num1++) {console.log('1开始');}`)])]),n("li",null,[l(" for循环: "),n("ul",null,[n("li",null,"for 循环主要用于把某些代码循环若干次，通常跟计数有关系。"),n("li",null," 初始化变量就是用var声明的一个普通变量，通常用于作为计数器使用 "),n("li",null," 条件表达式就是用来决定每一次循环是否继续执行就是终止的条件 "),n("li",null," 操作表达式是每次循环最后执行的代码经常用于我们计数器变量进行更新（递增或者递减） "),n("li",null,"代码体验我们重复打印100句你好"),n("li",null,[l(" 注意：循环执行代码顺序 "),n("ul",null,[n("li",null," 先执行计数器变量 var num1 =1； 只执行一次，然后条件判断，num1 <=100； "),n("li",null,"条件判断为true，执行console.log"),n("li",null,"执行log"),n("li",null,"最后执行 num1++，此时的 num1++ 之后，num1 为 2"),n("li",null," 那么num1 会不会小于等于 100，如果为真，则继续 ++，如果为假，则循环结束 "),n("li",null,"++ 是最后执行的"),n("li",null,"如果for( ; ; ) 里只写两个分号，则会成为死循环")])]),n("li",null,[l(" 练习1 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  // 100-1000之间的水仙花数 例如 1^3 +5^3 +3^3 =153,个十百分别乘以3次幂，的和为本数，则是水仙数

for (var i = 100; i < 1000; i++) {
    // 求百位数， /100
    var bai = parseInt(i / 100);
    // 求十位数   每个数 减去百位数 乘以100的和 除以 10
    var shi = parseInt((i - bai * 100) / 10);
    // 求个位数   每个数 % 10 余的就是个位数
    var ge = i % 10;
    // 判断是否是水仙花数
    if ((bai * bai * bai) + (shi * shi * shi) + (ge * ge * ge) === i) {
        console.log(i);
    }
}

// 简化 ，利用字符串的索引值
for (let i = 100; i <1000; i++) {
  let str = String(i);
  if (str[0] ** 3 + str[1] ** 3 + str[2] ** 3 == i) {
      console.log(i);
  }
}`)])]),n("li",null,[l(" 练习2 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  // 100-1000之间的水仙数 例如 1^3 +5^3 +3^3 =153,个十百分别乘以3次幂，的和为本数，则是水仙数
  let i = 100;
  while (i < 1000) {
      let bai = parseInt(i / 100);
      let shi = parseInt(i % 100 / 10);
      let ge = parseInt(i % 10);
      //判断是否是水仙数
      if ((bai * bai * bai) + (shi * shi * shi) + (ge * ge * ge) === i) {
          console.log(i);
      }
      i++;
  }`)])])])]),n("li",null,[l(" 双重for循环 "),n("ul",null,[n("li",null,"重点：外层循环控制高度，内层循环控制宽度"),n("li",null," 很多情况下，单层for循环并不能满足我们的需求，比如我们要打印一个5行5列的图形、打印一个倒直角三角形等， 此时就可以通过循环嵌套来实现。 "),n("li",null,[l(" 循环嵌套是指在一个循环语句中再定义一个循环语句的语法结构，例如在for循环语句中，可以再嵌套一个for 循环， 这样的for循环语句我们称之为双重for循环。 "),n("ul",null,[n("li",null,[l(" 语法结构如下: "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  for （外层初始化变量；外层条件表达式；外层操作表达式）{
      for （里层初始化变量；里层条件表达式；里层操作表达式）{
          // 执行语句
      }
  }
  var str = '';
  for (var i = 1; i <= 5; i++) {  //外层控制高度，也就是行数
      str = str + '⭐';
      for (var j = 1; j <= 5; j++) { //内层控制个数
          str = str + '⭐';
      }
     str = str + '\\n'; // 如果一行打印完5个星星，就另起一行
  }
  console.log(str);`)])])])]),n("li",null,[l(" 小结 "),n("ul",null,[n("li",null,"for 循环可以重复执行某些相同代码"),n("li",null,"for 循环可以重复执行些许不同的代码，因为我们有计数器"),n("li",null,"for 循环可以重复执行某些操作，比如算术运算符加法操作"),n("li",null,"随着需求增加，双重for循环可以做更多、更好看的效果"),n("li",null,"双重for循环，外层循环一次，内层for循环全部执行"),n("li",null,"for 循环是循环条件和数字直接相关的循环"),n("li",null,"分析要比写代码更重要"),n("li",null,"一些核心算法想不到，但是要学会，分析它执行过程")])])])]),n("li",null,[l(" while 循环: 当条件表达式结果为true 则执行循环体否则退出循环 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  while （条件表达式）{
      // 循环体
  }
  var num = 1;
  while (num <= 100){
      console.log('循环');
      num++;
  }`)])]),n("li",null,[l(" do..while循环:执行思路跟while不同的地方在于do while先执行一次循环体在判断条件， 如果条件表达式结果为真，则继续执行循环体，否则退出循环 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  do{
     // 执行代码
  } while （条件表达式）{
     // 循环体
  }
  var age = 1;
  do {
      console.log('今年已经 ' + age + ' 岁了');
      age++;
  } while (age <= 100)`)]),n("ul",null,[n("li",null,[l(" 循环小结 "),n("ul",null,[n("li",null,"JS中循环有for、while、do while"),n("li",null,"三个循环很多情况下都可以相互替代使用"),n("li",null," 如果是用来计次数，跟数字相关的，三者使用基本相同，但是我们更喜欢用for "),n("li",null," while和do..while可以做更复杂的判断条件，比for 循环灵活一些 "),n("li",null," while和do..while执行顺序不一样，while先判断后执行，do..while先执行一次，再判断执行 "),n("li",null," 实际工作中，我们更常用for循环语句，它写法更简洁直观，所以这个要重点学习 ")])]),n("li",null,[l(" 循环 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  for(){}：             // 计数循环，循环数组（索引数组）
  for...in()           // 循环，既可以遍历数组，又可以遍历对象的成员
  while()
  do...while()`)])]),n("li",null,[l(" 循环案例 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  /* 案例1：求1-100之间所有整数的累加和 案例分析
    需要循环100次，我们需要一个计数器i
    我们需要一个存储结果的变量sum，但是初始值一定是0
    核心算法：1+2+3+4...，sum = sum + i； */
    1+2+3+4+5
        3+3
            6+4
                10+5
                sum + i
                sum = sum + i

  var sum = 0;
  for (var i = 1; i <= 100; i++) {
      sum += i;                                    // sum = sum + i;
  }
  console.log(sum);

  // 案例2：求1-100之间的奇数之和
  for (var i = 0, num1 = 0; i < 100; i++) {        // var num1 = 0  也可以写在for里面
    if (i % 2 != 0) { num1 += i; }
  }
  console.log(num1);

  //案例3：求1-100之间所有平均值
  var sum = 0;
  for (var i = 1; i <= 100; i++) {
      sum = sum + i;
  }
  num1 = sum / 100;
  console.log(num1);

  // 案例4：求3的倍数,在自增时可以直接写倍数
  for (let i = 3; i <= 100; i += 3) {
      console.log(i);
  }

  // 案例5：求1-100之间所有奇数 和 偶数的 和
  var even = 0;
  var odd = 0;
  for (var i = 1; i <= 100; i++) {
      if (i % 2 == 0) {even += i;} else {odd += i;}
  }
  console.log(even);
  console.log(odd);

  // 案例6：输入人数，几个人出几个分数，然后求平均值
  var num = prompt('请输入班级人数');
  var sum = 0;            // 求和的变量
  var average = 0;        // 求平均值的变量
  for (var i = 1; i <= num; i++) {
      var score = prompt('请输入' + i + '名的分数')
      sum = sum + parseInt(score);
  }
  average = sum / num;
  console.log(sum);       // 总成绩
  console.log(average);   // 平均分

  // 案例7：一行输出五个小星星
  var str = '';
  for (var i = 1; i <= 5; i++) {
      str = str + '⭐';
  }
  console.log(str);

  // 案例8：用户输入几行和几列，就打印出来几行和几列的星星
  var hang = prompt('请输入几行');
  var lie = prompt('请输入几列');
  var str = '';
  for (var i = 1; i <= hang; i++) {
      for (var j = 2; j <= lie; j++) {
          str += '⭐'
      }
      str += '\\n';
  }
  console.log(str);

  // 案例9：每行减少一颗星星，倒着打印
  var str = '';
  for (var i = 1; i <= 10; i++) {
      for (var j = i; j <= 10; j++) {
          str += '⭐'
      }
      str += '\\n';
  }
  console.log(str);

  // 案例10：每行加一颗星星，正着打印
  var str = '';
  for (var i = 1; i <= 10; i++) {
      for (var j = 1; j <= i; j++) {
          str += '⭐'
      }
      str += '\\n';
  }
  console.log(str);
  /* 思路：
        先执行代码 i=1 i<=10
        进入for里层代码
        j=1 j<=i 1<=1 true 执行一句 str 打印出来了一个星星
        j++，此时的j=2 j<=i false 跳出循环，执行换行，
        执行 i++
        i=2 i<=10 开始进入循环 */

  // 案例11：99乘法表
  var str = '';
  for (var i = 1; i <= 9; i++) {
      for (var j = 1; j <= i; j++) {
          str += i + 'x' + j + '=' + i * j;     // str += j + 'x' + i + '=' + i * j;  列先开始
          // 空格方法1：   str += ' ';
          // 空格方法2：   str += i + 'x' + j + '=' + i * j + '\\t';
      }
      str += '\\n';
  }
  console.log(str);

  // 用模版字符串简写
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= i; j++) {
        num += \`\${i} x \${j} = \${i * j} \\t\`;
    }
    num += "\\n";
  }
  console.log(num);

  // 案例12：while 循环体，打印出来 1-100的所以整数和
  var j = 1;
  var num = 1;
  while (j <= 100) {
      num += j
      j++;
  }
  // 案例13： while 循环体，当输入我爱你的时候程序为true,跳出循环，如果为false,则一直提示你爱我吗？
  var text1 = prompt('你爱我吗？');
  while (text1 !== '我爱你') {
      text1 = prompt('你爱我吗?');
  }
  // 案例14：判断用户输入密码和用户名。如果为admin ,密码为123456，则显示登录成功，否则，请重新输入
  var userName = prompt('请输入用户名');
  var password = prompt('请输入密码');
  while (userName != 'admin' || password != '123456') {
      userName = prompt('请重新输入用户名');
      password = prompt('请重新输入密码');
  }
  alert('登录成功');

  // 案例15：简易ATM，
  var money = 100;              // 初始钱数
  var option;                   // 操作选项
  do {
      option = prompt('请输入您要的操作：' + '\\n' + '1.存钱' + '\\n' + '2.取钱' + '\\n' + '3.显示余额' + '\\n' + '4.退出');
      switch (option) {
          case '1':             // 存钱
              var save = prompt('请您输入存入的钱数：');
              money += parseFloat(save);
              alert('您的余额为' + money + '元');
              break;
          case '2':             // 取钱
              var draw = prompt('请您输入要取的钱数：');
              money -= parseFloat(draw);
              alert('您的余额为 ' + money + '元');
              break;
          case '3':             // 显示余额
              alert('您的余额为' + money + '元');
              break;
          case '4':             // 退出
              alert('正在退出...');
              break;
          default:              // 其它情况
              alert('您的输入有误，请重新输入');
      }
  } while (option != 4)
  /* 思路：
        里面现存有100块钱
        如果存钱，就用输入钱数加现存的钱数，之后弹出余额提示
        如果取钱，就减去取钱的数，显示余额
        如果显示余额，就输出余额
        如果退出，弹出退出信息提醒 */

  // 案例16：输出1到100之间的数字,如果是3的倍数输出'3的倍数',如果是5的倍数输出'5的倍数',如果既是3的倍数又是5的倍数输出'3和5的倍数'
  for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        document.write(i + ":是3和5的倍数<br>");
    } else if (i % 3 == 0) {
        document.write(i + ":是3的倍数<br>");
    } else if (i % 5 == 0) {
        document.write(i + ":是5的倍数<br>");
    } else {
        document.write(i + "<br>")
    }
  }

  // 案例17：有红白黑3种球若干个,其中红白球25个，白黑球共31个，红黑球共28个,求这三种球各有多少个？
  // 红白黑球
  // red+ bai = 25
  // bai +hei = 31
  // red +hei = 28
  for (var red = 0; red <= 25; red++) {
      //拿到红球
      var bai = 25 - red;
      var hei = 31 - bai;
      if (red + hei == 28) {
          document.write("红球：" + red + "<br>");
          document.write("白球：" + bai + "<br>");
          document.write("黑球：" + hei + "<br>");
      }
  }

  // 案例18：鸡翁一值钱五，鸡母一值钱三，鸡雏三值钱一。百钱买百鸡，问鸡翁、鸡母、鸡雏各几何?
  /* 百钱白鸡
        1公鸡 = 5元
        1母鸡 = 3元
        3小鸡 = 1元
      问：100元买了100只鸡，请问公鸡、母鸡、小鸡买多少只
        公鸡 1 2 3： 85
        母鸡 1 2 3“： 87
        小鸡 ： 240  */
  for (var gong = 0; gong < 20; gong++) {    // 获取公鸡的数量
      for (var mu = 0; mu <= 33; mu++) {     // 获取母鸡的数量
           let xiao = 100 - gong - mu;          // 获取小鸡的数量
           if (gong * 3 + mu * 3 + xiao / 3 == 100) {
                document.write("公鸡：" + gong + "<br>");
                document.write("母鸡：" + mu + "<br>");
                document.write("小鸡：" + xiao + "<br>");
           }
      }
  }

  /* 百钱买百鸡：公鸡5文钱一只，母鸡3文钱一只，小鸡1文钱3只，请问公鸡母鸡小鸡各多少只
     假设会是公鸡：一共有20只
     假设全是母鸡：一共有33只
     假设会是小鸡：一共是100只 */
  for (let i = 0; i <= 20; i++) {              // 公鸡
      for (let j = 0; j <= 33; j++) {          // 母鸡
          for (let k = 0; k <= 100; k += 3) {  // 小鸡
              if (i * 5 + j * 3 + k / 3 === 100 && i + j + k === 100) {
                  console.log(i, j, k);
              }
          }
      }
  }

  // 案例19：判断是否是质数
  var num = +prompt('输入数值');
  if (num <= 1) {
      alert('请重新输入一个合法的新值');
  } else {
      var flag = true; // 默认当前num是质数，然后下面进行判断
      for (var i = 2; i < num; i++) {
          if (num % i == 0) {
              // 判断，如果num能被i整除，说明这个数不是质数
              flag = false;
          }
      }
  }
  if (flag) {
      alert(num + '这个数是质数');
  } else {
      alert('这个数不是质数');
  }

  // 案例20：输入班级成绩，输出平均分
  /* 有三个班级，每个班级有四名学生，
     输入所有学生的成绩，并计算出每个班级的平均分
     外层循环表示班级 */
  for (let i = 1; i <= 3; i++) {
      console.log(\`*************第\${i}个班级 *************\`);
      let sum = 0; // 表示每个班级的总分
      // 内层新环表示每个班级的学生
      for (let j = 1; j <= 4; j++) {
          // 接收每个学生的成绩
          let score = parseInt(prompt(\`请输入第\${i}个班级第\${j}位学生成绩：\`));
          // 将营个学生的成绩，员加到他对应的班级总分中
          sum += score; // sum = sum + score
          // 在内层for循环结束后，计算该班级的平均分
          let avg = sum / j;
          console.log(\`第\${i}个班级的平均分是：\${avg}\`);
      }
  }
  // 在二重循环中， 外层循环变量变化一次， 内层循环变量变化整个循环。

  // 案例21：鸡兔同笼 ，上数有35头，下数有94只脚，求笼中几只鸡，几只兔子
  /*
    解：假设兔子有X只，鸡有（35-X）只
        4x+2(35-x) = 94
          4x+70-2x = 94
             4x-2x = 94-70
                2x = 24
                 x = 12
        鸡的数量：（35-x）= 35 - 12 = 23
    答：兔子有12只，鸡有23只

    1、（兔的脚数×总只数－总脚数）÷（兔的脚数－鸡的脚数）=鸡的只数： ( 4 * 35 - 94)  / ( 4- 2 ) = 23
          总只数－鸡的只数=兔的只数： 35 - 23 = 12
    2、（总脚数－鸡的脚数×总只数）÷（兔的脚数－鸡的脚数）=兔的只数： （ 94 - 2 * 35） / ( 4- 2 ) = 12
          总只数－兔的只数=鸡的只数： 35-12 = 23
    3、总脚数÷2—总头数=兔的只数    ： 94 / 2 - 35 = 12
          总只数—兔的只数=鸡的只数 ： 35 - 12 = 23

    此题目中存在的相等关系有：鸡头数+兔头数=总头数；鸡脚数+兔脚数=总脚数。*/

  /* 代码计算方式
     35头  94只脚
     假设全部是鸡 一共有35只
     假设全部是兔子 一共有23只，因为不可能有35只，兔子4条腿，94 / 4 会等于23.5，不符合
     23只的话 23*4 = 92 比较合理，还剩两只脚
     1、第一层表示鸡的数量   */
  for (let i = 1; i <= 35; i++) {
      for (let t = 1; t <= 23; t++) {
          if (i + t == 35 && i * 2 + t * 4 === 94) {
              console.log(\`鸡有\${i}只，兔子有\${t}只\`);
          }
      }
  }

  // 案例22：打印等腰三角形
  //        *
  //       ***
  //      *****
  //     *******
  //    *********
  // 外层控制行
  for (let i = 1; i <= 5; i++) {     // 倒三角  i=5 i>=1 i--   正和倒加起来就是菱形
    let str = ""; // 定义每行内容
    // 控制每行的空格数量
    for (let k = 5 - i; k > 0; k--) {
        str += " ";
    }
    //内层控制列
    for (let j = 1; j <= i * 2 - 1; j++) { // 母鸡
        str += "*"
    }
    console.log(str);
  }

  // 案例23：镜像
  //    1
  //   121
  //  12321
  // 1234321
  // 123454321
  for (let i = 1; i <= 5; i++) {       /* 定义每行打印的内容 */
    let str = "";
    for (let j = 5 - i; j > 0; j--) {  /* 拼接空格 */
        str += " ";
    };
    for (let j = 1 ; j <= i; j++) {    /* 拼接每行数字的左侧 */
        str += j;
    };
    for (let j = i - 1; j > 0; j--) {  /* 拼接每行数字的右侧 */
        str += j;
    };
    console.log(str);
  } `)])])])])],-1)])),_:1,__:[9]}),u(a,{id:"part9",shadow:"hover"},{default:r(()=>e[10]||(e[10]=[n("h2",null,"小结",-1),n("p",null,"断点调试",-1),n("ul",null,[n("li",null," 浏览器 F12 >> 在Sources >> 代码页面，想看哪里执行过程 就在行号点下，下断点，然后在控制里面执行下一步或者上一步 "),n("li",null,"可以在右侧添加变量进行观察"),n("li",null," 还可以使用debugger关键字进行代码断点，直接在需要断点的代码行后添加debugger关键字即可; ")],-1),n("p",null,"continue 、break (跟循环搭配使用)",-1),n("ul",null,[n("li",null," continue 关键字用于立即跳出本次循环，继续下一次循环（本次循环体中，遇到continue后立马退出不执行，直接 i++ "),n("li",null,[l(" 例1，吃5个包子，第3个有虫子，就扔掉第3个，继续吃第4个第5个包子，其代码实现如下： "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  // continue关键字退出本次（当前次的循环）继续执行剩余次数循环
  for (var i = 1; i <= 5; i++) {
      if (i == 3) {
          continue; // 只要遇见continue就退出本次循环直接跳到i++
      }
      console.log('我正在吃第' + i + '个包子');        // 这里除了3不显示
  }`)])]),n("li",null,[l(" 例2 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var sum = 0;
  for (var i = 1; i <= 100; i++) {
      if (i % 7 == 0) {
          continue;           // 只要遇见continue就退出本次循环直接跳到i++
      }
      sum = sum + i;
  }
  console.log(sum);`)])]),n("li",null,"break 关键字 ,break 关键字用于立即跳出整个循环（循环结束）。"),n("li",null,[l(" 例如，吃5个包子，吃到第3个发现里面有半个虫子，其余的不吃了，其代码实现如下： "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var sum = 0;
  for (var i = 1; i <= 100; i++) {
      if (i % 7 == 0) {
          break;      // 只要遇见break 就退出循环
      }
      sum = sum + i;
  }
  console.log('我正在吃第' + i + '个包子');        // 这里只能显示吃到第7个包子，7后面的包子不执行`)])]),n("li",null,[l(" 使用break语句时，可以在break后面跟着一个label,这样break将会结束指定的循环，而不是最近的 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  // 循环名称可以自定义
  label:
  for (var i = 1; i < 100; i++) {
      for(var j = 1; j<=i;j++){
          break label;               // 结束哪个循环就写哪个循环名称，这样就不会结束离最近的循环了
      }
  }`)])]),n("li",null,"小知识：Math.sqrt ( ) 可以对一个数进行开方")],-1),n("p",null,"JavaScript命名规范",-1),n("ul",null,[n("li",null,[l(" 标识符命名规范 "),n("ul",null,[n("li",null," 变量、函数的命名必须要有意义， 变量的名称一般用名词，函数的名称一般用动词 ")])]),n("li",null,[l(" 操作符命名规范： "),n("ul",null,[n("li",null,"操作符的左右两侧各保留一个空格")])]),n("li",null,[l(" 单行注释规范： "),n("ul",null,[n("li",null,"// 单行注释，前面注意有个空格")])]),n("li",null,[l(" 其他规范： "),n("ul",null,[n("li",null,"注意标签之间有空格， 结束花括号与开头标签对齐")])])],-1)])),_:1,__:[10]}),u(a,{id:"part10",shadow:"hover"},{default:r(()=>e[11]||(e[11]=[n("h2",null,"数组",-1),n("p",null,"前言",-1),n("ul",null,[n("li",null,[l(" 问：之前学习的变量，只能存储一个值。如果我们想存储班级中所有学生的姓名，那么该如何存储呢？ "),n("ul",null,[n("li",null," 答：可以使用数组（Array）。数组可以把一组相关的数据一起存放，并提供方便的访问（获取）方式。 ")])]),n("li",null,[l(" 问：什么是数组呢？ "),n("ul",null,[n("li",null," 答：数组是指一组数据的集合，其中的每个数据被称作元素，在数组中可以存放任意类型的元素。数组是一种，将一组数据存储在单个变量名下的优雅方式。 ")])])],-1),n("p",null,"创建数组的方法",-1),n("ul",null,[n("li",null,[l(" 利用 new创建数组 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var 数组名 = new Array();
  var arr = new Array(10,20,30,40); // 创建一个新的数组，并传入参数

  // 这种方式暂且了解，等学完对象再看。  注意Array(), A要大写
  // 我们数组里面的数据一定用逗号分隔
  // 数组里面的数据比如1，2，我们称为数组元素
  // 数组中还能放数组，用的比较少，称为二维数组
  // 数组中可以放任意类型`)])]),n("li",null,[l(" 利用数组字面量创建数组, 常用 "),n("pre",null,[n("code",{class:"language-js line-numbers"},"  var 数组名= []; ")])]),n("li",null,[l(" 使用数组字面量方式创建带初始值的数组 "),n("pre",null,[n("code",{class:"language-js line-numbers"},"  var 数组名=['小白' , 1, '大黄' ,true];")])])],-1),n("p",null,"获取数组中的元素",-1),n("ul",null,[n("li",null," 数组的索引（下标）：用来访问数组元素的序号（数组下标从0开始）。 "),n("li",null,[l(" 例如： var arr = ['小白' , 1, '大黄' ,true]； "),n("ul",null,[n("li",null,"下标号为： 0 , 1, 2 , 3")])]),n("li",null,"数组可以通过索引来访问（获取）、设置、修改对应的数组元素，"),n("li",null,[l(" 我们可以通过“数组名[索引]”的形式来获取数组中的元素 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var arr = ['第一位', '2', '4', 12345]
  console.log(arr[0]);                  // 获取数组中的第1数据   也就是 '第一位'
  console.log(arr[2]);                  // 获取数组中的第2数据   也就是 '4'
  console.log(arr[3]);                  // 获取数组中的第3数据   也就是 '12345'
  console.log(arr[4]);                  // undefined,因为数组里面没有第四个元素`)])])],-1),n("p",null,"遍历数组",-1),n("pre",null,[n("code",{class:"language-js line-numbers"},`  // 使用for循环遍历数组，for里面的 i 是计数器，当索引号来使用，arr[i]是数组元素的第 i 个数组元素
  // 遍历：就是把数组中的每个元素从头到尾都访问一次（类似我们每天早上学生的点名）。

  var arr = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
  for (var i = 0; i < 7; i++) {
      console.log(arr[i]);
  }`)],-1),n("p",null,"数组长度",-1),n("pre",null,[n("code",{class:"language-js line-numbers"},`  // 使用 “数组名.length” 可以访问数组元素的数量（数组长度）。
  var arr = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
  console.log(arr.length);

  // 案例：求数组中的和，以及平均值
  var arr = [2, 6, 1, 7, 4]
  var num = 0;
  var average = 0;
  for (var i = 0; i < arr.length; i++) {
      num += arr[i]           // 我们加的是数组中的元素，而不是计数器 ‘i’
  }
  average = num / arr.length;
  console.log(num,average);   // 想要输出多个变量，用逗号隔开  20 5

`)],-1),n("p",null,"遍历数组，筛选数据",-1),n("ul",null,[n("li",null,[l(" 步骤： "),n("ul",null,[n("li",null,"先声明一个保存最大值的变量 max"),n("li",null,"默认最大值可以取数组中的第一个元素。"),n("li",null,"遍历这个数组，把里面每个数组元素和max相比较。"),n("li",null," 如果这个数组元素大于max就把这个数组元素存到max里面，否则继续下一轮比较。 "),n("li",null,[l(" 最后输出最大值 max "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var arr = [2, 6, 1, 7, 4]
  var max = arr[0];
  for (var i = 1; i < arr.length; i++) {
      if (arr[i] > max) {     // 相反，取最小值就是  arr[i] < max;
          max = arr[i]
      }
  }
  console.log(max);`)])])])]),n("li",null,[l(" 案例：数组转换为分割字符串 "),n("ul",null,[n("li",null," 要求：将数组[red，'green，'blue，'pink']转换为字符串，并且用|或其他符号分割，输出为：red|green|... ")]),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var arr = ['red', 'green', 'blue', 'pink']
  var arr1 = '';
  var sep = '|';
  for (var i = 0; i < arr.length; i++) {
      arr1 += arr[i] + sep;
  }
  console.log(arr1);`)])])],-1),n("p",null,"数组中的新增元素",-1),n("ul",null,[n("li",null,[l(" 可以通过修改length长度 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var arr = ['red', 'green', 'blue', 'pink']
  arr.length = 5;               // 把数组的长度修改为 5，但是后面增加的如果没定义，会是 undefined`)])]),n("li",null,[l(" 可以通过修改数组索引的方式追加数组元素， 索引号增加数组元素 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var arr = ['red', 'green', 'blue', 'pink'];
  arr[4] = 'yellow';
  arr[0] = 'skyblue';           // 如果数组有了元素，通过索引号，相当于替换，此时red就被替换成了skyblue
                                // 可以增加索引号和数组元素来追加，也可以相应的索引号进行替换元素 `)])]),n("li",null,[l(" 可以通过数组长度， 向数组最后一位增加数组元素 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var arr = ['red', 'green', 'blue', 'pink']
  arr[arr.length] = 'yellow';
  arr[arr.length]= 'skyblue';   // arr [数组长度] ,来在最后一位添加一个数组元素`)])]),n("li",null,[l(" 重点：不要给数组赋值，否则数组等于所赋的值，之前的数组元素都会消失 例如： "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var arr = [1,2,3,4,5,1,2,5,];
  arr = '123456';               // 此时 arr 输出时会直接输出 123456`)])])],-1),n("p",null,"使用循环增加数组的案例",-1),n("pre",null,[n("code",{class:"language-js line-numbers"},`  // 声明一个空数组arr。
  // 循环中的计数器i可以作为数组元素存入。
  var arr = [];
  for (var i = 0; i < 10; i++) {
      arr[i] = i + 1;      // 因为是1- 10，所以从1开始，要加1
      //  arr = i + 1；    // 不能写arr =i,这样每次循环都会覆盖数组
  }
  console.log(arr);

  // 将数组[2，0，6，1，77，0，52，0，25，7]中大于等于10的元素选出来，放入新数组。
  // 1、声明一个新的数组用于存放新数据newArr。
  // 2、遍历原来的旧数组，找出大于等于10的元素。
  // 3、依次追加给新数组 newArr
      var newArr = [];
      var arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
      var max = arr[0];
      var j = 0;           // 用来存储数组索引号，当判断的时候，第一个索引是0，判断完j++，索引就是1，以此类推
      for (var i = 0; i < arr.length; i++) {
          if (arr[i] > 10) {
              newArr[j] = arr[i];
              j++;
          }
      }
      console.log(newArr);

  // 方法2
      var newArr = [];
      var arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
      // 刚开始的newArr.length 的长度是为0
      for (var i = 0; i < arr.length; i++) {
          if (arr[i] > 10) {
              // 新数组的索引号是从0开始，依次递增，length会自动检测长度
              newArr[newArr.length] = arr[i];
          }
      }
      console.log(newArr);`)],-1),n("p",null,"删除指定数组元素 (去重)",-1),n("ul",null,[n("li",null,"需要一个新数组用于存放筛选之后的数据。"),n("li",null," 遍历原来的数组，把不是0的数据添加到新数组里面（此时要注意采用数组名+索引的格式接收数据）。 "),n("li",null,[l(" 新数组里面的个数，用length不断累加。 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var newArr = [];
  var arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
  for (var i = 0; i < arr.length; i++) {
      if (arr[i] != 0) {
          newArr[newArr.length] = arr[i];
      }
  }
  console.log(newArr);`)])])],-1),n("p",null,"翻转数组",-1),n("ul",null,[n("li",null,[l(" 将数组['red'，'green'，'blue'，'pink'，'purple']的内容反过来存放 "),n("ul",null,[n("li",null,"声明一个新数组 newArr"),n("li",null," 把旧数组索引号最后一个取过来（arr.length - 1），给新数组索引号第一个元素（newArr.length） "),n("li",null,"我们采取递减的方式 i --")]),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var newArr = [];
  var arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
  for (var i = arr.length - 1; i > 0; i--) {
      newArr[newArr.length] = arr[i];
  }
  console.log(newArr);`)])])],-1),n("p",null,"数组排序 （冒泡排序133集）",-1),n("ul",null,[n("li",null,[l(" 冒泡排序: "),n("ul",null,[n("li",null," 是一种算法，把一系列的数据按照一定的顺序进行排列显示（从小到大或从大到小）。冒泡排序是一种简单的排序算法，它重复地走访过要排序的数列，一次比较两个元素，如果他们的顺序错误就把他们交换过来。走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。.这个算法的名字由来是因为越小的元素会经由交换慢偿“浮“到数列的顶端。 ")])]),n("li",null,"数组长度 - 索引号 - 1 = 交换次数"),n("li",null,"数组是从0开始 第一趟交换四次， 5 - 0 - 1=4"),n("li",null,"第二趟交换三次， 5 - 1 - 1=3"),n("li",null,"第三趟交换二次， 5 - 2 - 1=2"),n("li",null,[l(" 第四趟交换一次， 5 - 3 - 1=1 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var arr = [5, 4, 3, 2, 1];
  for (var i = 1; i <= arr.length - 1; i++) {          // 外层循环管躺数
      for (var j = 0; j <= arr.length - i - 1; j++) {  // 里层循环次数
          if (arr[j] > arr[j + 1]) {                      // 取反的话 就看大于 还是小于
              var temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
          }
      }
  }
  console.log(arr);`)])]),n("li",null,[l(" 选择排序 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  let arr = [8, 9, 12, 18, 19, 60, 1, 3, 2];
  // 外层for 循环，表示选择的那个数组元素
  for (let i = 0; i < arr.length - 1; i++) {      // 数组长度要减1，有一位被取出来做比较
      // 内层循环，表示参与比较的数组元素
      for (let j = i + 1; j < arr.length; j++) {  // j=j+1 : 当前数需要和下一个数进行比较  所以i+1
                                                  // 当j=8 时，那么i+1 就是8的下一位 9来进行比较，依次（i++)+1
          // 参与比较的数，挨个跟选择的数进行比较
          if (arr[i] > arr[j]) {                  // 如果选择的那个数 大于了当前数，就进行位置调换 假设9大于8， 那么8排在前面，9就在后面
              let temp = arr[i];
              arr[i] = arr[j];
              arr[j] = temp;
          }
      }
  }
  console.log(arr);`)])])],-1),n("p",null,"数组去重",-1),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var arr = [1, 2, 3, 2, 2, 1, 3, 4, 2, 5]; // 去除数组中重复的数字
  // 获取数组中的每一个元素
  function deleArr() {
      for (var i = 0; i < arr.length; i++) {
          console.log(arr[i]);
          // 获取当前元素后的所有元素。 j=i的话 ,因为i就是第一位，没必要第一位和第一位相比,所以+1
          for (var j = i + 1; j < arr.length; j++) {
              // console.log('.........' + arr[j]);
              if (arr[i] == arr[j]) {   // 判断两个元素是否相等
                  arr.splice(j, 1);     //（从第几个开始删，删除几个）
                  j--;                  // 当有重复的时候，删除完，后面的元素会自动前进，此时需要再次检查当前删除位置的数值是否重复
                                        // 如果重复了，还需要删除，j--会和 j++抵消，j++是前进检查，而j--后，就会留在当前位置再检查一次
              }
          }
      }
      arr.sort();                       // 排序,默认会按照Unicode编码进行排序,会个位与个位相比排序，十位与十位相比排序
  };
  deleArr();`)],-1),n("p",null," for-of 可迭代对象进行遍历。循环体执行语句,每次执行时都会将一个数组里的元素，赋值给变量 ",-1),n("pre",null,[n("code",{class:"language-js line-numbers"},`  const arr = [18, 16, 15, 14];
  for (let i of arr) {
      console.log(i);
  }`)],-1),n("p",null,"forEach 是数组的一种方法(有兼容性问题，很少用，IE8以上才能用)",-1),n("pre",null,[n("code",{class:"language-js line-numbers"},`  // forEach() 方法需要一个函数作为参数，像这种函数，由我们创建，但是不由我们调用，我们称为回调函数
  var a = [1, 2, 3, 4, 5, 6, 7, 8];
  a.forEach(function(a, b, c) {     // 浏览器会以实参的方式传递三个实参，我们来定义形参
                                    // a : 元素 b : 索引号 c : 索引号和元素
  });`)],-1),n("p",null,"数组方法",-1),n("pre",null,[n("code",{class:"language-js line-numbers"},`  arr.concat();                      // 连接两个或更多的数组，并这回结果。不破坏原素组，会返回一个新数组
  arr.join();                        // 把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔 .join(".")
  arr.pop();                         // 删除并返回裁组的最后一个元素,并返回删的是谁就返回是谁
  arr.shift();                       // 删除数组第一个元素，并返回数组的第一个元素
  arr.unshift();                     // 向数组的开头添加一个或多个元素，并返回新的长度
  arr.push();                        // 向数组的末尾添加一个或更多元素，并返回新的长度
  arr.reverse();                     // 颠倒数组中元素的顺序
  arr.slice();                       // 切片，不传参数等于浅拷贝。截取（0，2） （包括该参数，截取不包括该参数）从某个已有的数组返回选定的元素，不会破坏原数组，
  arr.sort();                        // 对数组的元素进行排序
  arr.splice();                      // 返回值为被删除的元素。删除、添加、插入、替换 功能。splice(1,2，"3"，"3") 传参:删除的起始位置，删除的数量，3是要插入的值
                                     // splice(1,0,"3") 从数组索引为1的位置，不删除，插入一个3
  arr.toSource();                    // 返回改对象的源代码
  arr.toString();                    // 把数组转换为字符串，并返回结果
  arr.toLocaleString();              // 把数组转换为本地数组，并返回结果
  arr.unshift();                     // 向数组的开头添加一个或更多元素，并返回新的长度
  arr.values();                      // 返回数组对象的原始值
  arr.at();                          // 返回指定索引处的元素，可以接收负索引作为参数 === arr[arr.length -1] 。不破坏原素组，会返回一个新数组
  arr.indexOf("元素"，起始位置);      // 从前往后查 获取元素在数组中第一次出现的位置 ，未找到返回 -1
  arr.lastIndexOf("元素"，起始位置);  // 从后往前查 获取元素在数组中第一次出现的位置 ，未找到返回 -1
  structuredClone(数组)              // 深拷贝，会返回一个新数组，原数组变化后，深拷贝的数组不变`)],-1),n("p",null,"案例",-1),n("pre",null,[n("code",{class:"language-js line-numbers"},`  // 案例1：
  var arr = [1, 2, 3, , , 27, 20];
  /* arr.sort();
      排序，默认会按照Unicode编码进行排序，会个位相比，十位相比
          所以对数字进行排序时，可能会得到错误的结果
      那么我们自己来指定排序的规则
          我们可以在sort()添加一个回调函数，来指定 排序规则
          回调函数中需要定义两个形参，
          浏览器将会分别使用数组中的元素作为实参去调用回调函数使用哪个元素调用不确定， 但是肯定的是在数组中a一定在b前边
      浏览器会根据回调函数的返回值来决定元素的顺序
          如果返回一个大于0的值， 则元素会交换位置
          如果返一个小于0的值， 则元素位置不变
          如果返回一个0， 则认为两个元素相等， 也不交换位置 */

  arr.sort(function(a, b) {    // 方法二选一
        // 方法1
        if (a > b) {
            return 1;          // 从大到小就是 a> b  return -1
        } else if (a < b) {
            return -1;
        } else {
            return 0;
        }
        // 方法2
        return a-b;            // a-b 如果a=11 b=10，那么a-b 就会大于1，从小到大排序
        return b-a;            // 从大到小排序
    });

  // 案例2：数组练习 --- 七星彩
  let arr = [];
  for (let i = 0; i <= 6; i++) {  // 随机生成一组七星彩号码，存放到数组中，七星彩号码的规则是：七组0-9之间的可重复的随机数。
      arr[i] = parseInt(Math.random() * 10);
  }
  console.log(arr);

  // 案例3：数组练习 --- 双色球   随机生成一组双色球号码，存放到数组中
  // 双色球号码的规则是：前六组号码是1-32之间不重复的随机数，第七组号码是1-16之间的随机数
  let arr = [];
  // 循环并生成前六组号码
  for (let i = 0; i < 6; i++) {
      // 随机生成1-32之间的数
      let num = parseInt(Math.random() * 32 + 1)
      // 判断这个数，在数组中是否已经存在
      if (arr.includes(num)) {
          // 如果有相同的数存在，i--，就表示需要再次循环
          i--;
      } else {
          // 如果不存在， 添加到数组中
          arr.push(num);
      }
  }
  // 生成第七位号码
  arr[6] = parseInt(Math.random() * 16 + 1);
  console.log(arr);`)],-1)])),_:1,__:[11]}),u(a,{id:"part11",shadow:"hover"},{default:r(()=>e[12]||(e[12]=[n("h2",null,"函数",-1),n("p",null,"函数概念",-1),n("ul",null,[n("li",null," 在JS里面，可能会定义非常多的相同代码或者功能相似的代码，这些代码可能需要大量重复使用。 虽然for循环语句 也能实现一些简单的重复操作，但是比较具有局限性，此时我们就可以使用JS中的函数。 "),n("li",null," 函数：就是封装了一段可被重复调用执行的代码块。通过此代码块可以实现大量代码的重复使用。 比如document.write(); console.log(); prompt(); alert(); "),n("li",null," 函数的封装： 是把一个或者多个功能通过函数的方式封装起来，对外只提供一个简单的函数接口 "),n("li",null," 简单理解：封装类似于将电脑配件整合组装到机箱中（类似快递打包），函数对象拥有所有对象的属性功能 "),n("li",null,[l(" 函数的使用： "),n("ul",null,[n("li",null,[l(" 声明函数 自定义函数（命名函数） "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  // function 函数名（[形参可省略]） {
      // 函数体
  // }
  function sayHi() {
      console.log('内容');
  }`)]),n("ul",null,[n("li",null,"function 声明函数的关键字全部小写"),n("li",null,"函数是做某件事情，函数名一般是动词sayHi"),n("li",null,"函数不调用自己，是不会执行")])]),n("li",null,[l(" 匿名函数 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  const a = function () {     // 不写函数名的函数称为匿名函数,但是可以创建一个变量来接收匿名函数
    alert(' 我是一个匿名函数');
  };
  a();                        // 调用的时候就可以直接用变量名来调用`)])]),n("li",null,[l(" new Function() 记得要大写 与 new 关键字 不常用。所有函数都是Function 的实例（对象），函数也属于对象 instanceof "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var a = new Function('参数1', '参数2', 'alert(参数1+参数2)');
  a(1, 2);`)])]),n("li",null,[l(" 调用函数 "),n("ul",null,[n("li",null,"普通函数： 函数名() 函数名.call() a(); a.call();"),n("li",null," 对象方法： 函数名()() || 函数名.方法名() a()(); a.eat(); "),n("li",null,"构造函数： new 构造函数名() new a()"),n("li",null,"绑定事件函数： 点击或者其他操作事件就可以直接调用"),n("li",null,"定时器函数： 定时器自动调用"),n("li",null,"立即执行函数： ( function() {} ()) (function(){})();")])]),n("li",null,[l(" 案例 ：用函数计算1 - 100之间的的累加和 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  function getSum(num1, num2) {
    var sum = 0;
    for (var i = num1; i <= num2; i++) {
        sum += i;
    }
    console.log(sum);
  }
  getSum(1, 1000);`)])])])])],-1),n("p",null,"形参，实参",-1),n("ul",null,[n("li",null,"形参： 形式上的参数函数定义的时候传递的参数当前并不知道是什么"),n("li",null,"实参： 实际上的参数函数调用的时候传递的参数实参是传递给形参的"),n("li",null," 参数的作用：在函数内部某些值不能固定，我们可以通过参数在调用函数时传递不同的值进去。 "),n("li",null,[l(" 实参：可以是任何一个数据类型 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  // 形参：function 函数名 ( 形参1， 形参2 ...){} 在声明函数的小括号里面是形参（形式上的参数）
  function 函数名 ( name,name, ...){
  }

  // 调用： 函数名 ( 实参1,实参2 ...); 在函数调用的小括号里面是实参（实际的参数）
  coke(123,465,789);

  // 在声明函数时，可以在函数名称后面的小括号中添加一些参数，这些参数被称为形参，而在调用该函数时，同样也需要传递相应的参数，这些参数被称为实参。`)])]),n("li",null,[l(" 形参和实参不匹配问题 "),n("ul",null,[n("li",null,"函数可以带参数也可以不带参数"),n("li",null," 声明函数的时候，函数名括号里面的是形参，形参的默认值为undefined "),n("li",null,"调用函数的时候，函数名括号里面的是实参"),n("li",null," 形参的个数可以和实参个数不匹配，但是结果不可预计，我们尽量要配对 ")]),n("pre",null,[n("code",{class:"language-js line-numbers"},`  function getSum(num1, num2) {
    console.log(num1 + num2);
  }
  getSum(1, 2);                 // 如果实参的个数与形参一致，则正常输出结果
  getSum(1, 2, 3);              // 如果实参的个数多余形参，那么只会取到形参的个数
  getSum(2);                    // 如果实参的个数少于形参，则会出现NaN`)])])],-1),n("p",null,"函数的返回值",-1),n("ul",null,[n("li",null,[l(" return 语句： "),n("ul",null,[n("li",null," 有的时候，我们会希望函数将值返回给调用者，此时通过使用return语句就可以实现。 "),n("li",null,"只要函数遇到return就把后面的结果返回给函数的调用者")]),n("pre",null,[n("code",{class:"language-js line-numbers"},`  /* function 函数名（）{
        return 需要返回的结果；
        alert( ' 我在return后面，就不会执行' );    // 后面的代码，只要return完，后面代码就不会执行了，相当于break
    }
    函数名（）;
  */

  function getSum() {                            // 函数名
     return 666;                                 // 需要返回的结果
  }
  console.log(getSum());                         // 打印出来`)])]),n("li",null,[l(" 练习： "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  // 练习1：求出两个数中的最大值
  function getMax(num1, num2) {
      if (num1 > num2) {
          return num1;
      } else {
          return num2;
      }
  }
  console.log(getMax(1, 3));

  // 练习2：利用三元运算符 求出两个数的最大值
  function getMax(num1, num2) {
      return num1 > num2 ? num1 : num2;
  }
  console.log(getMax(88, 20));

  // 练习3：利用函数求数组[5,2,99,101,55,177]中最大的值
  function getArrMax(arr) {
      var max = arr[0];
      for (var i = 1; i <= arr.length; i++) {   // 因为第一个值已经拿出来是做比较，所以i = 1;
          if (arr[i] > max) {
              max = arr[i];
          }
      }
      return max;
  }
  var res = getArrMax([5, 2, 99, 101, 55, 177]);
  console.log(res);`)])])],-1),n("p",null,"return 终止函数",-1),n("pre",null,[n("code",{class:"language-js line-numbers"},`  // 遇到return ，后面的代码不会被执行，return会立即退出当前方法，后面语句永远不会执行
      function getMax(num1, num2) {
          return num1 > num2 ? num1 : num2;                // return 语句立即退出当前方法
          alert('遇到return，后面的代码不会被执行。');
      }
      console.log(getMax(88, 20));

  // return 只能返回一个值
      function getMax(num1, num2) {
          return num1, num2;                               // return 当出现两个值时，只会返回最后一个值
      }
      console.log(getMax(88, 20));

  // 如果需要多个值，可以用数组
      function getMax(num1, num2) {
          return [num1 + num2, num1 * num2, num1 / num2];  // return 当出现两个值时，只会返回最后一个值,但是可以用数组取多个值
      }
      console.log(getMax(88, 20));`)],-1),n("p",null,"函数的返回值 (函数没有return 返回 undefined)",-1),n("ul",null,[n("li",null,[l(" 函数都是有返回值的 "),n("ul",null,[n("li",null,"如果有return则返回return后面的值"),n("li",null,"如果没有return则返回undefined"),n("li",null,"return 可以返回任何数据类型，可以是对象也可以返回函数")])]),n("li",null,[l(" break，continue，return的区别 "),n("ul",null,[n("li",null,"break：结束当前的循环体（如for、while）"),n("li",null,"continue：跳出本次循环，继续执行下次循环（如for、while）"),n("li",null," return：不仅可以退出循环，还能够返回return语句中的值，同时还可以结束当前的函数体内的代码 ")])]),n("li",null,[l(" 函数练习 "),n("pre",null,[n("code",{class:"language-js line-numbers"},` // 案例1：写一个函数，用户输入任意两个数字的任意算术运算（简单的计算器小功能），并能弹出运算后的结果。
  var num1 = prompt('请输入第一个数');
  var num2 = prompt('请输入第二个数值')

  function getCompute(num1, num2) {
      return [num1 + num2, num1 - num2, num1 * num2, num1 / num2]
  }
  console.log(getCompute(parseInt(num1), parseInt(num2)));

  // 别人写的
  function getRes(num1, symbol, num2) {
    switch (symbol) {
        case '+':
            return parseFloat(num1) + parseFloat(num2);
            break;
        case '-':
            return num1 - num2;
            break;
        case '*':
            return num1 * num2;
            break;
        case '/':
            return num1 / num2;
            break;
        default:
            return ('运算符错误');
            break;
    }
  }
  getRes(num1 = +prompt('输入第一个数字'), symbol = prompt('输入运算符'), num2 = +prompt('输入第二个数字'));
  alert('运算结果为:' + getRes(num1, symbol, num2));

  // 案例2：写一个函数，用户输入任意两个数字的最大值，并能出弹运算后的结果。
  var num1 = prompt('请输入第一个数');
  var num2 = prompt('请输入第二个数值')

  function getResult(num1, num2) {
      return num1 > num2 ? num1 : num2;
  }
  console.log(getResult(parseInt(num1), parseInt(num2)));

  // 案例3：写一个函数，用户输入任意三个不同数字的最大值，并能算出运算后的结果。
  var num1 = prompt('请输入第一个数');
  var num2 = prompt('请输入第二个数')
  var num3 = prompt('请输入第三个数');

  function getResult(arr) {
      var max = arr;
      for (var i = 1; i <= arr.length; i++) {
          if (arr[i] > max) {
              max = arr[i];
          }
      }
      return max;
  }
  var re = getResult([num1, num2, num3]);
  console.log(re);

  // 案例4：写一个函数，用户输入一个数判断是否是素数，并返弹出回值（又叫质数，只能被1和自身整数的数）
  var num = parseInt(prompt("输入一个数"));
  var sum = 0;
  for (var i = 1; i <= num; i++) {
      if (num % i == 0) {
          sum += i;
      }
  }
  if (num + 1 == sum) {
      alert(num + "是素数");
  } else {
      alert(num + "不是素数");
  }

  // 案例5：案例判断是否是偶数，输入半径求圆面积
  function odd(a) {            // 判断是否是偶数
      return (a % 2 == 0);     // return 会直接返回结果
  }
  odd(2);
  function area(r) {
      return 3.14 * r * r;
  }
  area(14);                    // 输入半径求一个圆的面积

  // 案例6：面试题
  var a = 9; // 0 1 0 1 2
  function fn() {
      a = 0;
      return function (b) {
          return b + a++
      }
  }
  var f = fn();
  console.log(f(5));           // 5
  console.log(fn()(5));        // 5 这里调用是重新调fn方法，会重新开辟一个空间
  console.log(f(5));           // 6
  console.log(a);              // 因为函数内部有个全局变量 赋值，所以 会覆盖掉var a = 9;
              `)])])],-1),n("p",null,"arguments 的使用",-1),n("ul",null,[n("li",null," 当我们不确定有多少个参数传递的时候，可以用arguments来获取。在JavaScript中，arguments实际上它是当前函数的一个内置对象。 "),n("li",null," 所有函数都内置了一个arguments对象，arguments对象中存储了传递的所有实参 "),n("li",null,[l(" arguments展示形式是一个伪数组，因此可以进行遍历。伪数组具有以下特点： "),n("ul",null,[n("li",null,"具有length属性"),n("li",null,"按索引方式储存数据"),n("li",null,"不具有数组的 push ， pop 等方法")])]),n("li",null,[l(" 注意： "),n("ul",null,[n("li",null," 只有函数才有arguments对象，而且是每个函数都内置好的了这个arguments "),n("li",null,"即使不写形参，也可以通过arguments 来获取到实参"),n("li",null," arguments还有一个属性 是 callee, 这个属性对应一个函数对象，就是当前正在执行函数对象 ")])]),n("li",null,[l(" 案例 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  // 案例1
  function sum() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
  }
  var result = sum(1, 2, 3, 4, 5, 6);
  document.write(result);

  // 案例2：利用函数求任意个数的最大值
  var max = arguments[0];
  for (var i = 1; i <= arguments.length; i++) {
      if (arguments[i] > max) {
          max = arguments[i];
      }
  }
  return max;

  // 案例3：案例函数翻转任意数组
  function reverse(arr) {
      var newArr = [];
      for (var i = arr.length - 1; i >= 0; i--) {
          newArr[newArr.length] = arr[i];
      }
      return newArr;
  }
  var arr1 = reverse([1, 3, 6, 8, 4]);
  console.log(arr1);

  // 案例4：冒泡排序 sort()
  function sort(arr) {
      for (let i = 0; i < arr.length - 1; i++) {
          for (var j = 0; j < arr.length - i - 1; j++) {
              if (arr[j] > arr[j + 1]) {
                  var temp = arr[j];
                  arr[j] = arr[j + 1];
                  arr[j + 1] = temp;
              }
          }
      }
      return arr;
  }
  var arr1 = sort([1, 4, 2, 9]);
  console.log(arr1);

  // 案例5：判断闰年
  function isRunYear(year) {
      //如果是闰年我们返回true，否则返回false
      var flag = false;
      if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
          flag = true;
      }
      return flag;
  }
  console.log(isRunYear(2000));`)])])],-1),n("p",null,"函数可以调用另一个函数",-1),n("ul",null,[n("li",null,[l(" 案例 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  // 案例1
  function fn1() {
    console.log(111);
    fn2();
    console.log('fn1');
  }

  function fn2() {
      console.log(222);
      console.log('fn2');
  }
  fn1();    // 结果  111  222  fn2   fn1

  // 案例2
  function bakDay() {
    var year = prompt('请输入年份：');
    if (isRunYear(year)) {                    // 调用函数需要加小括号
        alert('' + year + '年是闰年2月份有29天');
    } else {
        alert('' + year + '年是平年2月份有28天');
    }
  }
  bakDay();
  // 利用函数判断闰年
  function isRunYear(year) {
      // 如果是闰年我们返回true，否则返回false
      var flag = false;
      if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
          flag = true;
      }
      return flag;
  }
  console.log(isRunYear(2000));`)])])],-1),n("p",null,"匿名函数 (函数中另一种声明方式)",-1),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var fun = function () {
    //执行语句
  };

  fun();`)],-1),n("p",null,"作用域",-1),n("ul",null,[n("li",null," 通常来说，一段程序代码中所用到的名字并不总是有效和可用的，而限定这个名字的可用性的代码范围就是这个名字的作用域。 作用域的使用提高了程序逻辑的局部性，增强了程序的可靠性，减少了命名名字的冲突。 "),n("li",null,[l(" js的作用域（es6）之前：分为 全局作用域 局部作用域 "),n("ul",null,[n("li",null,"全局作用域：整个script标签，或者单独的一个js文件"),n("li",null," 局部作用域：在函数内部就是局部作用域（函数作用域），这个代码的名字只在函数内部起效果 ")])]),n("li",null,[l(" 如果在函数内部要访问全局变量，可以加个 window . "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var a = '全局变量';
  function get() {
      var a = '局部变量';
      console.log('我要访问全局变量，但是就近原则，会访问到局部，所以我要用Window对象' + window.a);
  }`)])])],-1),n("p",null,"变量作用域",-1),n("ul",null,[n("li",null,"在JavaScript中，根据作用域的不同，变量可以分为两种:全局和局部"),n("li",null,[l(" 注意：在函数中没有声明的变量也是全局变量！！！ "),n("ul",null,[n("li",null,[l(" 全局变量：在全局作用域下的变量（注意：在函数中没有声明的变量也是全局变量！！！） "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var num1 = 10;        // 全局变量

  function fn() {
      var num1 = 10;    // num1就是局部变量 只能在函数内部使用
      num2 = 20;
  }
  fn();
  console.log(num1);`)])]),n("li",null,[l(" 局部变量：在局部作用域下的变量，或者在函数内部的变量（注意： 函数中的形参是一个局部变量！！！） "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  function fn() {
    var num1 = 10;      // num1就是局部变量 只能在函数内部使用
    num2 = 20;
  }
  fn();
  console.log(num1);    // 报错，num is not defined
  console.log(num2);    // 注意，num2是未声明的变量，但是在函数中可以被调用`)])])])]),n("li",null,[l(" 特性： "),n("ul",null,[n("li",null,"全局变量只有浏览器关闭的时候才会销毁，比较占内存资源"),n("li",null,"局部变量，当我们程序执行完毕就会销毁。比较节约内存资源")])])],-1),n("p",null,"块级作用域",-1),n("ul",null,[n("li",null,[l(" JS 现阶段没有块级作用域，es6的时候新增块级作用域 "),n("ul",null,[n("li",null,"块级作用域 { } if { } for { }")])])],-1),n("p",null,"作用域链",-1),n("ul",null,[n("li",null,"只要是代码，就至少有一个作用域"),n("li",null,"写在函数内部的局部作用域"),n("li",null,"如果函数中还有函数，那么在这个作用域中就又可以诞生一个作用域"),n("li",null," 根据在内部函数可以访问外部函数变量的这种机制，用链式查找决定哪些数据能被内部函数访问， "),n("li",null,"就称作 作用域链，一层一层往上访问，就近原则。"),n("li",null,[l(" 案例 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  // 案例1
  function f1() {
    var num = 123;
    function f2() {
        console.log(num);
    }
    f2();
  }
  var num = 456;
  f1();

  // 案例2
  var a = 1;
  function fn1() {
      var a = 2;
      var b = '22';
      fn2();
      function fn2() {
          var a = 3;
          fn3();
          function fn3() {
              var a = 4;
              console.log(a);   // 调用谁就看谁，这里就近原则，a = 4
              console.log(b);   // fn3里没有b，往上，fn2也没有b,看fn1，‘22’
          }
      }
  }
  fn1();`)])])],-1),n("p",null,"预解析",-1),n("ul",null,[n("li",null," JavaScript代码是由浏览器中的JavaScript解析器来执行的。JavaScript解析器在运行JavaScript代码的时候分为两步：预解析，然后再代码执行。 "),n("li",null," 预解析：js引擎会把js 里面所以的 var 还有 function 提升到当前作用域的最前面，然后开执行代码。代码书写的顺序从上往下执行 "),n("li",null,[l(" 预解析可以分为变量预解析（变量提升） 和 函数预解析 （函数提升） "),n("ul",null,[n("li",null," 变量提升：把所有的变量声明提升到当前的作用域最前面。但是不提升赋值操作 "),n("li",null,[l(" 函数提升： "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  // 案例变量坑1：
  console.log(num1);
  var nmu1 = 10;
  /* 因为预解析 ，变量提升，但是不提升赋值操作
     所以 var num1；会被提前，这时log时，num1 就是 num1 not is defined */

  // 案例变量坑2：
  fun(); //此时调用会报错   fun is not a function
  var fun = function () {
      console.log(22);
      /* 预解析,先会把变量提升   var fun;
         然后依次执行           fun();
                               fun= function(){
                                   console.log(22);
                               }  */
  }

  // 案例3：
  var num = 10;
  fun();

  function fun() {
      console.log(num);
      var num = 20;
  }
  //执行步骤
  var num;            //  1、先提升变量
  function fun() {    //  2、函数提升
      var num;        //  3、函数局部作用域下 变量提升
      console.log(num);
      num = 20;
  }
  num = 10;
  fun();              //  4、最后调用函数，就近原则，num  = undefined

  // 案例4：
  var num = 10;

  function fn() {
      console.log(num);
      var num = 20;
      console.log(num);
  }
  fn();

  //  执行步骤，
  var num;
  function fn() {
      var num;
      console.log(num);
      nmu = 20;
      console.log(num);
  }
  num = 10;
  fn(); // log1 undefined   log2  20

  // 案例5：
  var a = 18;
  f1();

  function f1() {
      var b = 9;
      console.log(a);
      console.log(b);
      var a = '123';
  }

  //  执行步骤，
  var a;
  function f1() {
      var b;
      var a;
      b = 9;
      console.log(a);    // undefined
      console.log(b);    // 9
      a = '123';
  }
  f1();

  // 案例6：
  f1();
  console.log(c);
  console.log(b);
  console.log(a)

  function f1() {
      var a = b = c = 9;
      console.log(a);
      console.log(b);
      console.log(c);
  };

  // 执行如下
  function f1() {
      // 这样只是声明var a; b和c 没有声明，此时是全局变量
      var a = 9;
      b = 9;
      c = 9;
      // 想要集体声明写法：  var a=9, b=9, c =9;
      var a;
      a = b = c = 9;
      console.log(a);        // 9
      console.log(b);        // 9
      console.log(c);        // 9
  };
  f1();
  console.log(c);            // 9
  console.log(b);            // 9
  console.log(a)             // undefined`)])])])])],-1),n("p",null,"重点",-1),n("ul",null,[n("li",null,[l(" 函数的方法 call () 和apply () 和 bind() : // 在调用方法时，通过call（对象，实参），来改变调用的方法里面的this 指向 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  let obj1 = {
    name: "吴亦凡",
    age: 30,
    movie: function (time, address) {
        console.log(\`\${this.name}今天\${this.age}岁,在\${address}看了\${time}小时电影）\`);
    },
  }
  obj1.movie('2', '福建');

  let obj2 = {
      name: "张三",
      age: 30
  };
  obj1.movie.call(obj2, '3', '北京'); // call 可以改变this的指向，第一个参数需要传一个对象，后面的参数依次传入方法的实参`)])]),n("li",null,"使用apply() apply(对象，数组实参)"),n("li",null,"使用数学中 Math.max 最大值 和 apply 配合使用寻找数组中最大值"),n("li",null,[l(" 使用bind() bind(对象,实参)() "),n("ul",null,[n("li",null,"bind 可以为新函数绑定this 且不被改变"),n("li",null," bind 也可以为新函数绑定实数，且会固定，不可改变，且不影响原函数 ")])]),n("li",null,[l(" *补充 递归算法（所谓递归就是在方法内部的某一个地方，再次调用了方法本身） "),n("ul",null,[n("li",null,"使用递归算法，计算1-20之间所数之和，这是一道经典面试题"),n("li",null,"什么是递归：就是一个方法，自己调用自己"),n("li",null,"注意：递归方法，一定要控制好合适跳出，否则就是死循环。")]),n("pre",null,[n("code",{class:"language-js line-numbers"},`  function calc(num) {
    if (num === 1) {
        return num;
    }
    let sum = num + calc(num - 1);
    // 为了防止函数名更换，导致调用失败，一般会用arguments  ,arguments.callee就是指方法本身
    // let sum = num + arguments.callee(num - 1);

    return sum;
  }
  console.log(calc(4));     // 4+ 3+ 2 + 1`)])]),n("li",null,[l(" 案例 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  // 案例1：
  function menu() {
    let number = parseInt(prompt('1.添加学生，2.修改学生，3.删除学生，0.退出系统'));
    switch (number) {
        case 1:
            alert('执行添加学生');
            menu();
            break;
        case 2:
            alert('执行修改学生');
            menu();
            break;
        case 3:
            alert('执行删除学生');
            menu();
            break;
        default:
            return;
    }
  }
  menu();

  // 案例2
  let obj1 = {                                    // 创建一个对象
    "name": "张三",
    "age": 20,
    "gender": "男",
    "obj2": {                                     // 对象中的对象
        "a": "a",
        "b": "b",
        "c": {                                    // 对象中的对象的对象
            "c1": "c1",
            "c2": "c2",
        }
    }
  };

  function copyObject(obj) {                      // 创建一个深拷贝方法
      let newObj = {};                            // 创建一个新的对象，用来存储值
      Object.keys(obj).forEach(r => {             // 循环obj对象身上的所有属性名称
          if (typeof obj[r] === 'object') {       // 判断obj身上的每个属性
              newObj[r] = copyObject(obj[r]);     // 如果还有object类型再次调用方法
          } else {
              newObj[r] = obj[r];                 // 没有的话，将obj对象中的属性值拷贝给newObj的属性名
          }
      })
      return newObj;                              // 返回新对象
  }
  let obj2 = copyObject(obj1);
  console.log(obj2);
  console.log(obj2.name = '李四');                 // 修改obj2  的名字
  console.log(obj1.name);                         // 修改obj2 的名字，但是没有影响到obj1   这就是深拷贝

  /* 如果想用深拷贝，最好的办法就是用递归算法如果不会写函数，用JSON方法也可以达到递归效果，也是一种深拷贝 */
  let obj1 = {              // 创建一个对象
    "name": "张三",
    "age": 20,
    "gender": "男",
    "obj2": {               // 对象中的对象
        "a": "a",
        "b": "b",
        "c": {              // 对象中的对象的对象
            "c1": "c1",
            "c2": "c2",
        }
      }
  };
  // 先将obj1转换为JSON格式的字符串，再用parse方法将JSON转换为对象  就是深拷贝
  let obj2 = JSON.parse(JSON.stringify(obj1));
  console.log(obj2);

  // 案例3
  // 利用递归函数求 1 - n 的阶乘  1 * 2 * 3 * 4 *...m
  function fn(n) {
      if (n === 1) {
          return 1;
      }
      return n * fn(n - 1);
  }
  console.log(fn(3));  /* 执行过程 fn(3)
                          3 != 1
                          return 3 * (fn(3-1))
                          2 != 1
                          return 2 * (fn(2-1))
                          1 == 1
                          return 1

                          return 3 * 2 * 1
                          result 6     */

  // 案例4
  // 利用递归函数求斐波那契数列（兔子序列）1、1、2、3、5、8、13、21....
  function fn(n) {
      if (n === 1 || n === 2) {
          return 1;
      }
      return fn(n - 1) + fn(n - 2);
  }
  console.log(fn(3));

  // 案例5： 根据ID 返回数据对象
  let data = [{
    id: 1,
    name: "领导1",
    item: [{
        id: 3,
        name: "员工1"
    }, {
        id: 4,
        name: "员工2"
      }]
  }, {
      id: 2,
      name: "领导2"
  }]
  // 根据输入ID号，返回数据对象
  function getID(json, id) {
      var o = {};
      json.forEach(j => {
          if (j.id == id) {
              o = j;
              return j;
          } else if (j.item && j.item.length > 0) {
              o = getID(j.item, id);
          };
      });
      return o;
  };
  console.log(getID(data, 6));`)])]),n("li",null,[l(" *深拷贝 和浅拷贝 "),n("ul",null,[n("li",null,[l(" 浅拷贝只是拷贝一层，更深层次对象级别的只拷贝引用地址，别的数据修改了，那么拷贝的数据也会修改 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  let obj = {
    name: "张三",
    age: 20,
    sex: "男",
    adr: {
        address: "福建"
    }
  };
  let o = {};
  for (let k in obj) {       // 浅拷贝
      // k 代表属性名   obj[k]代表属性值
      o[k] = obj[k];
  }
  console.log(o);
  //------------------------------------------------------------------------------
  // 使用ES6方法进行浅拷贝，更简单，如果对象有自己的属性与浅拷贝的属性重复，则浅拷贝时会进行覆盖
  Object.assign(o, obj);     // 第一个参数是需要拷贝给谁，第二个参数是被拷贝的对象
  console.log(o);

  // 展开运算符 进行浅拷贝
  let c = {age:"18" ...obj }; // 浅拷贝时，后边的会覆盖前边的，如果obj里有age:20,则拷贝时会把18给覆盖成20
  console.log(c); `)])]),n("li",null,[l(" 深拷贝拷贝多层，每一级别的数据都会拷贝. 对于复杂引用数据类型且不是拷贝地址，而是新开辟空间 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  let obj = {
    name: "张三",
    age: 20,
    sex: "男",
    adr: {
        address: "福建"
    }
  };
  let o = {};
  function deepCopy(newObj, oldObj) {          // 封装函数
      for (var k in oldObj) {
          // 判断我们的属性值属于哪种数据类型
          // 1、获取属性值  oldObj[k]
          var item = oldObj[k];
          if (item instanceof Array) {         // 2、判断是否是数组
              newObj[k] = [];
              deepCopy(newObj[k], item);       // 递归
          } else if (item instanceof Object) { // 3、判断啊是否是对象
              newObj[k] = {};
              deepCopy(newObj[k], item);       // 递归
          } else {                             // 4、其他都是简单数据类型
              newObj[k] = item;
          }
      }
  };
  deepCopy(o, obj);
  console.log(o);`)])])])]),n("li",null,[l(" *高阶函数 "),n("ul",null,[n("li",null," 什么是高阶函数：就是一个函数的参数是函数，或者返回值是函数，满足其中一个就是高阶函数 "),n("li",null,"开闭原则：对于扩展是开放的，但是对于修改是封闭的")]),n("pre",null,[n("code",{class:"language-js line-numbers"},`  // 定义两个方法
  function add(num1, num2) {
      console.log(num1 + num2);
  }

  function sub(num1, num2) {
      console.log(num1 - num2);
  }
  // callback 是一个回调函数，这样可以扩展，但是不会修改原来的函数
  function calc(num1, num2, callback) {
      callback(num1, num2);
  }
  // 可以新增一个方法 add, subtract, multiply   divide  加减乘除
  function mul(num1, num2) {
      console.log(num1 * num2);
  }

  function divide(num1, num2) {
      console
          .log(num1 / num2);
  }
  let num1 = 1000;
  let num2 = 200;
  calc(num1, num2, add);     // 1200
  calc(num1, num2, divide);  // 5`)])]),n("li",null,[l(" *高阶函数：回调函数 （执行过程中 回过头来调用） "),n("ul",null,[n("li",null,[l(" 正常求数组中的数 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  let arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];
  for (let i = 0; i < arr.length; i++) { // 输出数组中的偶数
      if (arr[i] % 2 === 0) {
          console.log(arr[i]);
      }
  }
  for (let i = 0; i < arr.length; i++) { // 输出数组中的奇数
      if (arr[i] % 2 !== 0) {
          console.log(arr[i]);
      }
  }`)])]),n("li",null,[l(" 回调函数的作用 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  //------------------------------------------------------------------
  function sum(arr, callback) {
      for (let i = 0; i < arr.length; i++) {
          if (callback(arr[i])) {
              console.log(arr[i]);
          }
      }
  }
  //----------------------------------------------------------------------
  function fun1(val) {
      return true;
  }
  sum(arr, fun1)
  // sum(arr,fun1) 的执行步骤
  /*
      function sum(arr,callback ) {                 // arr 和 fun1 是形参  [11, 22, 33, 44, 55, 66, 77, 88, 99], fun1
          for (let i = 0; i < arr.length; i++) {    // 循环数组，i< [11, 22, 33, 44, 55, 66, 77, 88, 99]数组的长度
              if (callback(arr[i])) {               // if(fun1(arr[i]))  ,这里调用fun1 方法   val = arr[i]  ,返回结果为true
                  console.log(arr[i]);              // 结果为true 的话 就直接打印 arr[i]
              }
          }
      }
  */
  function fun2(val) {
      return val % 2 === 0;
  }
  sum(arr, fun2);
  // sum(arr,fun2) 的执行步骤
  /*
    function sum(arr,callback ) {                    // arr 和 fun1 是形参 [11, 22, 33, 44, 55, 66, 77, 88, 99], fun2
          for (let i = 0; i < arr.length; i++) {     // 循环数组，i< [11, 22, 33, 44, 55, 66, 77, 88, 99]数组的长度
              if(callback(arr[i])) {                 // if(fun2(arr[i])) ,这里调用fun2 方法 val = arr[i]  返回结果  return  arr[i]的值 % 2 等于0 ;
                  console.log(arr[i]);               // 结果为true 的话 就直接打印 arr[i]
              }
          }
    }
  */

  // ES6简写形式
  function sum(arr, callback) {
      for (let i = 0; i < arr.length; i++) {
          if (callback(arr[i])) {
              console.log(arr[i]);
          }
      }
  } //----------------------------------------------------------------------
  sum(arr, val=> true)
  console.log('-------------------------------------------');
  sum(arr, val => val % 2 === 0);`)])])])]),n("li",null,[l(" 案例 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  let arr = [10, 20, 30, 22, 50, 60];
  function every(arr, fn) {
      let isOk = true;
      for (let i = 0; i < arr.length; i++) {
          if (!fn(arr[i])) {
              isOk = false;
              break;
          }
      }
      return isOk;
  }
  console.log(every(arr, function (item) {
      return item % 2 === 0;
  }));`)])]),n("li",null,[l(" *数组的高阶函数 forEach() 循环遍历数组 "),n("ul",null,[n("li",null,[l(" 例子 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  let arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];
  // forEach（）方法，用于循环遍历整个数组
  // 该方法的参数是一个回调函数，回调函数可以传两个参数，第一个多数是数组中的每一项元素，
  // 第二个参数是每一项元素对应的下标。注意：第二个参数可以省路。还有第三个参数，就是数组本身，也可以省略
  arr.forEach(function (item, index，Array) {
      console.log(item, index, Array);
  })`)])]),n("li",null,[l(" ES6简写 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  let arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];
  arr.forEach((item, index) => console.log(item, index));`)])]),n("li",null,[l(" 三个参数的写法 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  let arr = [1, 2, 3, 4, 5, 6];
  arr.forEach((item, index, Arr) => {
      console.log("每个元素" + item);     // 第一次打印的时候：每个元素1
      console.log("每个索引" + index);    // 第一次打印的时候：每个索引0
      console.log("数组" + Arr);         // 第一次打印的时候：数组1,2,3,4,5,6
      // 根据数组的长度 ，打印出次数
  })`)])]),n("li",null,[l(" 原理 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  let arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];
  function forEach(arr, calLback) {
      for (let i = 0; i < arr.length; i++) {
          calLback(arr[i], i)
      }
  }
  forEach(arr, (item, index) => {
      console.log(item + ' ' + index);      // 这里就是调用 callback(item=arr[i] ,index=i)
  });`)])])])]),n("li",null,[l(" *数组的高阶函数 filter() "),n("ul",null,[n("li",null,[l(" 过滤数组中的元素，返回过滤后的结果，调用这个方法会返回全新的数组 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  // 第二个参数是每一项元素对应的下标。注意：第二个参数可以省略
  let arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];

  let result = arr.filter(function (item) {
      return item % 2 === 0;
  })
  console.log(result);`)])]),n("li",null,[l(" ES6简写 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  let arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];
  let result = arr.filter(item => item % 2 === 0);
  console.log(result);                             // 会返回全新的数组
  console.log(arr);                                // 原数组不变`)])]),n("li",null,[l(" 原理 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  let arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];
  function filter(arr, calLback) {
      let arr2 = [];            // 在循环外面定义一个空数组
      for (let i = 0; i < arr.length; i++) {
          if (calLback(arr[i])) {
              arr2.push(arr[i]);
          }
      }
      return arr2; //返回结果arr2
  }
  /*
      let arr2 = filter(arr,function(item){
          return item %2===0;   // 回调函数中，如果值为真，则会push 到arr2里面，并返回结果
      })
  */
  /* 简写 */
  let arr2 = filter(arr, item => item % 2 === 0);
  console.log(arr2);`)])])])]),n("li",null,[l(" *数组的高阶函数 find() 获取数组中满足规则的第一个元素 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  let arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];
  let result = arr.find(item => item % 2 === 0);
  console.log(result);`)])]),n("li",null,[l(" *数组的高阶函数 findindex() 获取数组中满足规则的第一个元素的下标 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  let arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];
  let result = arr.findIndex(item => item % 2 === 0);  // 输出结果为1，因为满足条件22的下标为 1
  console.log(result);`)])]),n("li",null,[l(" *数组的高阶函数 some() "),n("ul",null,[n("li",null,[l(" 用于表示数组中是否有满足指定规则的元素，返回结果，有： true || 一个都没有：false "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  let arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];
  let result = arr.some(item => item % 2 === 0); //true
  console.log(result);`)])]),n("li",null,[l(" 用return true 会终止迭代，但forEach 即使添加了也不会终止循环 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  let arr = [1, 2, 3, 4, 5, 6];
  arr.some((item, index) => {
      if (item >= 3) {
          console.log("找到了");
          console.log(index);
          return true;         // 当找到了满足条件的第一个元素，会结束循环，提高性能  ,return true 代表找到了，就会终止
      }
      console.log(1);          // 如果没有遇到return true  会一直循环数组
  })`)])])])]),n("li",null,[l(" *数组的高阶函数 every() 用于表示数组中是否所有元素都满足指定的规则 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  let arr = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100, 110];
  // 1、 let result = arr.every(item => item > 10);           // 所有元素都满足大于10,返回true
  // 2、 let result = arr.every(item => item > 100);          // 所有元素中有不大于100的，返回false
  console.log(result);`)])]),n("li",null,[l(" *数组的高阶函数 map() 用于表示数组里面的数据,根据指定规则的返回数据 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  let arr = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100, 110];
  1、let result = arr.map(item => item * 2);        // 所有元素都 *2 返回新数组结果
  2、let result = arr.map(item => item % 4);        // 所有元素都取余运算，返回新数组结果
  console.log(result);

  // map 原理
  let arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];

  function map(arr, calLback) {
      let arr2 = []; // 在循环外面定义一个空数组
      for (let i = 0; i < arr.length; i++) {
          arr2.push(calLback(arr[i]))
      }
      return arr2;
  }
  let arr2 = map(arr, function (item) {
      return item * 2;
  })
  // let arr2 = filter(arr, item => item % 2 === 0);
  console.log(arr2);`)])]),n("li",null,[l(" *数组的高阶函数：闭包函数 当一个嵌套函数中，子函数调用了父函数的变量，就产生了闭包 "),n("ul",null,[n("li",null,[l(" 代码 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  function a() {            // 父函数
    let i = 100;
    console.log(i);

    return function b() {   // 子函数
        i += 100;           // 引用了外层函数的变量 i
        let j = 200;
        console.log(\`\${j},\${i}\`);
    }
   // 如果没有返回函数B ，那么a() 只会返回i=100的结果，
  }
  a();                      // 如果没有返回函数B ，那么a() 只会返回i=100的结果
  let c = a();              // 函数返回了一个b ,拿c来接这个结果，这里就是用到了高阶函数，返回值是函数
  c();                      // 此时c() 就等于调用了 函数a ,里面进行了赋值操作，i就会等会200，切i是全局变量，在内存空间不会消失
  c();                      // 再调用一次 i = 200+100 ,此时i就等于300`)])]),n("li",null,[l(" 案例 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  // 案例1
  function calc(n1, n2, type) {
    let num1 = n1;
    let num2 = n2;
    switch (type) {
        case '+':
            return function () {
                console.log(\` \${num1}+\${num2}=\${num1+num2}\`);
            }
        case '-':
            return function () {
                console.log(\` \${num1}-\${num2}=\${num1-num2}\`);
            }
    }
  }
  let add = calc(100, 200, '+');     // 定义个变量来接收函数返回值
  add();
  let sub = calc(300, 400, '-');
  sub();

  // 案例2 采用立即函数也能形成闭包
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
  <script>
      let lis = document.querySelector("ul").querySelectorAll("li");
      for (let i = 0; i < lis.length; i++) {    // 传统方式给li 添加索引号
          lis.index = i + 1;
          lis[i].onclick = function () {
              console.log(i);
          }
      };
      for (let i = 0; i < lis.length; i++) {   // 采用闭包方式给li 添加索引号
          (function (i) {
              lis[i].onclick = function () {
                  console.log(i);
              }
          })(i); // 把i传进函数中，这样就为
      }
  <\/script>

  // 案例3
  var car = (function () {                     // 用一个变量接收返回值
    var start = 7;                             // 起步价
    var total = 0;                             // 总价
    return {                                   // 返回一个对象，对象里面有两个计算方法
        price(n) {
            if (n <= 3) {                      // 如果没有超过3公里
                total = start;                 // 那么总价就会等于起步价 7 元
            } else {
                total = start + (n - 3) * 5;   // 超过3公里，每公里加5元
            }
            return total;                      // 返回总价格
        },
        yongDu(flag) {
            return flag ? total + 10 : total;
        }
    }
  })();
  console.log(car.price(10));                  // (5*7) + 7
  console.log(car.yongDu(true));               // (5*7) + 7+10=52

  // 案例4 分页
  let arr = [];                               // 定义一个数组，里面初始化100条数据
  for(let i = 0;i<100;i++){
      arr.push('数据' +(i+1))
  }
  function pageData(arr,pageIndex,pageSize){  // 定义一个分页方法，方法三个参数，原始数组，页码，每页数量
      // 思路：就是对原始数组中的数据，做截取
      //      定义截取数据的起始位置
      let start = (pageIndex - 1) * pageSize;
      let ent = start + pageSize;
      return arr.slice(start,end)
  }
  let arr2 = pageData(arr,3,10)
  let arr3 = pageData(arr,5,15)

  // 分页方法
  getPageData: function (arr, pageIndex, pageSize) {
    // 起始位置
    let start = (pageIndex - 1) * pageSize;
    // 结束位置
    let end = pageSize + start;
    // 获取分页数据
    let data = arr.slice(start, end);
    // 计算出总页数  向上取整
    let totalPage = Math.ceil(arr.length / pageSize);
    // 返回一个对象
    return {
        // 一份数据
        data: data,
        // 总页数
        totalPage: totalPage
    }
  },

  // 面试题
  var num = 10;                     // 3、此时this.num的值是60，num值也就变成60   // 7.2、 65
  var obj = {
      num: 20                       // 8.1后 this.num = 10 * 3
  };
  obj.fn = (function (num) {        // 2、num形参=20,因为obj.num作为实参传进来的   21
      // 1、立即执行函数，第一次调用，this是指向window，因为是自己调用自己
      this.num = num * 3;           // 60
      num++;                        // num++ = 20  num = 21   7.2、后 +1 =22
      return function (n) {         // 4、返回函数给  obj.fn
          this.num += n;
          num++;                    // 7.2、 num++ = 65 num++ = 21 num = 22    8.2后+1、 num++ = 22 num = 23
          console.log(num);         // 7.2、22
      }
  })(obj.num);
  var fn = obj.fn;                  // 5、将方法赋值给fn
  console.log(fn);                  // 6、这里打印的话就是打印方法
  fn(5);                            // 7、调fn方法，传值5  此时方法的this 指向的是window   window.fn（5）
                                    // 7.1、所以方法中，this.num+=n  就会是 60 + 5

  obj.fn(10);                       // 8、此时是obj在调用，那么this指向obj   23
  console.log(num, obj.num);        // 65   30
                  `)])])])]),n("li",null,[l(" *数组的高阶函数 reduce() ES6新增数组统计用 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  // 之前的方法是
      let arr = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100];
      let sum = 0;
      arr.forEach(a => {
          sum += a;
      })
      console.log(sum);

  // 使用 reduce() 方法
      let arr = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100];
      let sum = arr.reduce(function (a, b) {   // 回调函数，值要传两个 a 代表要返回计算结束的值
          return a + b                         // b 代表当前元素,如果循环第一次，那么就代表11，依次循环
      }, 0);                                   // 0 代表a的初始值，如果是5，会在总数的基础上加5 ，也可以不给初始值
                                               // 通常循环数组对象的时候 还是加上初始值 0  否则报错
      console.log(sum);`)])]),n("li",null,[l(" *数组的高阶函数 includes() 表示某个数组是否包含给定的值，返回布尔值 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  let arr = [11, 22, 33, 44, 5];
  let a = arr.includes(5);          // true
  let b = arr.includes(510);        // false 因为数组中没有
  let c = arr.includes(33,3);       // false 因为数组中没有,第二个参数表示查询的起始位置
  console.log(a);`)])]),n("li",null,[l(" *this 指向问题 "),n("ul",null,[n("li",null,[l(" 函数中，谁调用，this就指向谁，fun1是window的方法，所以this 指向 window "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  // 采用var 关键字声明的变量，都会成为Window对象的属性或者方法
    var a = 'abcdefg';
    var b = 20;
    var fun1 = function () {
        console.log(a, b);
        console.log(this.a, this.b);       // 谁调用 this就指向谁，此时是window 调用
        // 作用是一样的，因为var 关键字声明的函数会成为window的方法  而a和b都是window的属性
    }
    fun1();                                // 这里其实省略了 window.fun1()
    console.log(this);
  //------------------------------------------------------------------------------------
   // 此时创建一个对象
    let zs = {
        a: "张三",
        b: 30,
        // zs.fun1 = fun1   就是在zs里面添加了一个fun1方法
        /*  fun1:function(){
              console.log(this.a, this.b);
            }
        */
    }
    zs.fun1 = fun1;                         // 将fun1的方法赋值给zs对象，
    zs.fun1();                              // 此时调用者是 zs  this 指向的就是 zs 这个对象
  //-------------------------------------------------------------------------------------
    // 此时创建一个对象，对象中的方法返回的是两个方法
    let ls = {
        a: "李四",
        b: 40,
        fun2() {
            // console.log(this);  这里的this 指向的是 ls,因为ls 在调用
            return {
                fun3() {
                    // console.log(this);  这里的this 指向的是返回的对象fun3  fun4
                    console.log(this.a, this.b);
                },
                fun4() {
                    console.log(this.a, this.b);
                }
            }
        }
    };
    ls.fun2().fun3(); // this 没有备份 ls.fun2().fun3();则会undefined ，此时的this指向的是return
    ls.fun2().fun4(); // this 没有备份 ls.fun2().fun4()则会undefined
  //-------------------------------------------------------------------------------------------------
    let ls = {
        a: "李四",
        b: 40,
        fun2() {
            let _this = this;                       // 方法一，解决this指向问题，创建一个变量，将this指向备份到 _this
            return {
                fun3() {
                    console.log(_this.a, _this.b);  // 这里使用 _this.a 就可以访问到外层 a属性的值
                },
                fun4: () => {
                  // 方法二， 利用箭头函数，因为箭头函数中是没有this和arguments的，而this指向是找外层的
                  // 并且arguments 跟 this 一样是指向外层的arguments,如果没有也报错
                  console.log(this.a, this.b); // this指向的是返回值函数 fun3 fun4
                }
            }
        }
    };
    ls.fun2().fun3();                               // 李四 40
    ls.fun2().fun4();                               // 李四 40`)])])])]),n("li",null,[l(" *rest参数 使用 ...+自定义名称 组成 "),n("ul",null,[n("li",null,[l(" 代码 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  //  ...args 就是 rest参数
  function say(a, b, ...args) {
      console.log(a);
      console.log(b);
      console.log(args);        // ...args 管理的就是实参传入的3 4 5 6 .会以数组对象形式管理,也可以使用数组的方法
  }
  say(1, 2, 3, 4, 5, 6); `)])]),n("li",null,[l(" 数组拼接 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  let a = [1, 2, 3];
  let b = [4, 5, 6];
  let c = [...a, ...b]
  console.log(c); // [1, 2, 3, 4, 5, 6]`)])]),n("li",null,[l(" 展开数组 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  console.log(...c);      // 1,3,4,5,6
  console.log(c[0]);      // 1 相当于这样的写法，但是...c不需要写很多次，只要写一次就可以展开所有`)])]),n("li",null,[l(" 展开对象 扩展运算符复杂数据类型是浅拷贝，还可以将非数组转换为数组 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  let a = {
    name: "a",
    age: 20,
    sxe: "男"
    job: "工作人员"
  }
  let b = { ...a};          // 展开运算符，可以将一个对象成员，可以浅克隆（只拷一级，如果对象里还有一对象，则不会拷贝成功）给另一个对象
  console.log(b);           // {name: "a", age: 20, sxe: "男", job: "工作人员"}

  // ---------------------------------------------------------------------
  let c = {
      name: "c",
      age: 25,
      sxe: "女"
  }
  let ac = { ...a, ...c };  //  使用...拼接，没有的属性会合并，有的属性会后者覆盖前者
  console.log(ac);          // {name: "c", age: 25, sxe: "女", job: "工作人员"}`)])]),n("li",null,[l(" 解构赋值 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  let arr = [1, 2, 3];
  let a = arr[0];
  let b = arr[1];
  let c = arr[2];
  console.log(a, b, c);           // 之前的做法太繁琐 需要声明变量并赋值

  // ES6 方法   [变量名1，变量名2，...] = 数组
  let [a, b, c] = arr;
  console.log(a, b, c);`)])]),n("li",null,[l(" 对象 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  let a = {
    name: "a",
    age: 20,
    sex: "男"
  }
  let {name,age,sex} = a;          // 相当于  let name = a.name let age = a.age ....
  console.log(name, age, sex);
  //-----------------------------------------------------------------------------------
  let age = 30;
  let { name, age,sex } = a;       // 再赋值会报错  因为let 只能声明一次，相当于age let 两次了
  console.log(name, age, sex);     // 'age' has already been declared
  // 解决方法-------------------------------------------------------------------------------
  let age = 30;
  let { name, age:age1,sex } = a;  // 对象的属性名称叫什么，就定义什么名称的变量去接，如果出现了同名，可以修改名称
  console.log(name, age1, sex); `)])]),n("li",null,[l(" 对象中，左右表达式一样，可以省略右侧表达式 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  let name = "zs";
  let age = 18;
  let sex = "男";
  let fun1 = function () {
      console.log("function");
  }
  let a = {
      name: name,
      age: age,
      sex: sex,
      fun1: fun1
  }
  console.log(a.name);
  a.fun1();

  // ES6规定，对象中属性左右两边的表达式相同，可以省略右边的表达式
  // 该对象在定义的时候，会自动往父级作用域寻找同名属性对应的值
  let a = {
      name,
      age,
      sex,
      fun1
  }
  console.log(a.name);
  a.fun1();`)])])])])],-1)])),_:1,__:[12]}),u(a,{id:"part12",shadow:"hover"},{default:r(()=>[e[17]||(e[17]=n("h2",null,"对象",-1)),e[18]||(e[18]=n("p",null,"对象是由属性和方法组成的。",-1)),e[19]||(e[19]=n("ul",null,[n("li",null," 现实生活中：万物皆对象，对象一个具体的事物，看得见摸得着的实物。 "),n("li",null,' 例如，一本书、一辆汽车、一个人可以是“对象”，一个数据库、网页、一个与远程服务器的连接也可以是“对象"。 '),n("li",null,[l(" 在JavaScript中，对象是一组无序的相关属性和方法的集合，所有的事物都是对象，例如字符串、数值、数组 "),n("ul",null,[n("li",null,"属性：事物的特征，在对象中用属性来表示（常用名词）"),n("li",null,"方法：事物的行为，在对象中用方法来表示（常用动词）")])]),n("li",null,[l(" 为什么需要对象？ "),n("ul",null,[n("li",null," 保存一个值时，可以使用变量，保存多个值（一组值）时，可以使用数组。如果要保存一个人的完整信息呢？ "),n("li",null,[l(" 例如，将“张三疯”的个人的信息保存在数组中的方式为： "),n("ul",null,[n("li",null,"var arr=[‘张三疯’，‘男’，128，154]；")])]),n("li",null,[l(" JS中的对象表达结构更清晰，更强大。张三疯的个人信息在对象中的表达结构如下： "),n("ul",null,[n("li",null,"张三疯.姓名 = '张三疯'； == person.name = ' 张三疯'；"),n("li",null,"张三疯.性别 = '男'； == person.sex = ' 男' ；"),n("li",null,"张三疯.年龄 = 128； == person.age = 128;"),n("li",null,"张三疯.身高 = 154； == person.height = 154;")])])])])],-1)),e[20]||(e[20]=n("p",null,"创建对象的三种方式",-1)),e[21]||(e[21]=n("ul",null,[n("li",null,[l(" 利用字面量创建对象 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var obj = { };                 // 这样是创建了一个空对象
  var obj = {
      name: '张三丰',             // 对象里面属性，有多个属性或者方法用逗号隔开 ，属性名建议不加引号，特殊才加，
      age: 18,
      sayHi: function () {       // 方法后面跟的是一个匿名函数
          console.log('say hi');
      }                          // 如果是最后一个，不要写逗号
  };

  /* obj [ ' 123 ' ] = 789; 如果要采用特殊的属性名，用 [ ],调用 则用 obj[ ' ' ]
  调用对象的属性，我们可以采取 对象名.属性名
      console.log(obj.name);
  调用对象的属性，我们也可以采取 对象名['']; 注意 ，要加上' '
      console.log(obj['name']);
  调用对象的方法，我们采取 对象名.方法名();
      obj.sayHi();

  *、对象的增删改查
    1、增 语法： obj.属性名 = 属性值；
      obj.name = "张三";
    2、改 语法： obj.原属性名 = 新属性值；
      obj.name = "李四";
    3、删 语法： delete 对象.属性名；
      delete obj.name; */`)])]),n("li",null,[l(" 利用new Object创建对象 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var obj = new Object();     // 创建了一个空对象， O 要大写
  obj.name = '张三丰';         // 因为已经创建了一个空对象，所以这里可以添加一个属性
  obj.saHi = function () {}   // 创建一个方法

  /* 注意： 1、用等号 赋值 的方法，添加对象的属性和方法
           2、每个属性和方法之间用 分号结束； */
            var obj = new Object;
            obj.name = '鸣人';
            obj.sex = '男';
            obj.age = '19岁';
            obj.skill = function() {
                console.log('影分身');
            }
            obj.skill();
            console.log(obj.name);
            console.log(obj['sex']);`)])]),n("li",null,[l(" 利用构造函数创建对象 "),n("ul",null,[n("li",null,[l(" 构造函数 （推荐使用class 或者 把构造函数放到立即执行函数代码块里） "),n("ul",null,[n("li",null," 是一种特殊的函数，主要用来初始化对象，即为对象成员变量赋初始值， "),n("li",null," 它总与new运算符一起使用。我们可以把对象中一些公共的属性和方法抽取出来然后封装到这个函数里面。 "),n("li",null," 因为我们一次创建一个对象，里面很多的属性和方法是大量相同的我们只能复制，因此我们可以利用函数的方法 "),n("li",null," 重复这些相同的代码，我们就把这个函数称为构造函数。又因为这个函数不一样，里面封装的不是普通代码，而是对象。 "),n("li",null," 构造函数就是把我们对象里面一些相同的属性和方法抽象出来封装到函数里面 ")]),n("pre",null,[n("code",{class:"language-js line-numbers"},`  /* 构造函数的语法格式：
    function 构造函数名() {        // 构造函数名 开头大写
        this . 属性 = 值；
        this . 方法 = function(){}
    }
     new 构造函数名 () ;           // 调用构造函数
  */
  function Person(name, age, sex) {
      this.name = name;
      this.age = age;
      this.sex = sex;
      this.fun = function (year) {
          console.log(this.name, this.age, this.sex);
      }
  }
  let a1 = new Person('张三', 18, "男");
  console.log(a1);
  a1.fun();

  // 添加静态属性 和添加静态方法
  a1.staticProperty = " 添加静态属性 "
  a1.staticMethod = function(){ }   // 添加静态方法

  // 继承 （熟悉 不一定要掌握，要知道构造函数有这种继承的方法）
    let A = (function () {
      function A() {}
      return A;
  })();
  let B = (function () {
      function B() {}

      // 继承 Person
      B.prototype = new A();
      return B;
  })();
  let c = new B();
  console.log(c);`)])]),n("li",null,[l(" 构造函数的执行步骤： "),n("ul",null,[n("li",null,"立即创建一个新的对象"),n("li",null,"将新建的对象设置为函数中的this"),n("li",null,"逐行执行函数中的代码"),n("li",null,"将新建的对象作为返回值返回")])]),n("li",null,[l(" 使用instanceof 可以检查一个对象是否是一个类的实例 "),n("ul",null,[n("li",null," instanceof检查的是对象的原型链上是否有该类实例,只要原型链上有该类实例，就会返回true "),n("li",null,"语法: 对象 instanceof 构造函数")])]),n("li",null,[l(" 使用原型 prototype，创建每一个函数时，解析器都会向函数内添加一个 prototype 属性 "),n("ul",null,[n("li",null,"语法: 函数名.prototype"),n("li",null,"如果函数作为普通函数调用prototype，是没有任何作用"),n("li",null," 当函数以构造函数的形式调用时，它所创建的对象中都有一个隐含的属性 "),n("li",null," 指向构造函数的原型对象，我们可以通过 __proto__(前后都是两个下划线)来访问该属性 "),n("li",null," 原型对象就相当于一个公共的区域，所有同一个类的实例都可以访问到这个原型对象 "),n("li",null," 我们就可以将对象汇总的共有的内容，统一设置到原型对象中 "),n("li",null," 当我们访问对象的一个属性和方法时，它会先在对象中寻找，如果有则直接调用 "),n("li",null,"如果没有则会去原型对象中寻找，如果找到了就直接使用")])]),n("li",null,[l(" 作用 "),n("ul",null,[n("li",null," 以后在创建构造函数时，可以将这些对象共有的属性和方法，统一添加到构造函数的原型对象中 "),n("li",null,"这样不用分别为每一个对象添加，也不会影响到全局作用域"),n("li",null,"语法： 函数名 . prototype . 属性名 = ‘属性值’；"),n("li",null," prototype（A.prototype是访问构造函数实例的原型） __proto__（不推荐使用，因为可以重新赋值造成问题） Object.getPrototypeOf(obj)（建议使用，=后不可赋值） Object.create(obj) Object.getOwnPropertyName(obj) toString Object.setPrototypeOf( ) ")]),n("pre",null,[n("code",{class:"language-js line-numbers"},`  function MyClass() {

  }
  //向MyClass原型对象中添加一个name 属性
  a.prototype.name = '123';
  var a = new MyClass;
  console.log(a.name);      // 123

  //使用 in 检查对象中是否含有某个属性时，有就返回true，否则false,但是注意，这个方法也会检查原型对象中有没有
  console.log('name' in a);

  // 想要判断非原型中没有属性，需要使用 hasOwnProperty() 方法来检查  (官方不推荐使用)
  console.log(a.hasOwnProperty('name'));   false
  console.dir(MyClass);     // 可以查看对象信息

  // Object.hasOwn(对象，属性名)  新方法：同样用来检查一个对象自身是否有某个属性 静态方法，通过类调用 （官方推荐使用）
  Object.hasOwn(a,"name")   // 等同于 `)])]),n("li",null," 原型对象中还有原型对象, 原型的原型就是直接找到 Object 对象的原型 "),n("li",null," Object 对象的原型没有原型，如果Object中依然没有找到，则会返回 undefined "),n("li",null," 使用同一个构造函数创建的对象，我们成为一类对象，也将一个构造函数称为一类 "),n("li",null,"我们将通过一个构造函数创建的对象，称为是该类的实例"),n("li",null,[l(" this 的情况 "),n("ul",null,[n("li",null,"当以函数的形式调用时，this 是window对象"),n("li",null,"当以方法的形式调用时，谁调用方法this ，就是谁"),n("li",null,"当以构造函数的形式调用时，this就是新创建的那个对象")]),n("pre",null,[n("code",{class:"language-js line-numbers"},`  function Star(uname, sex, age) {           // 构造函数名首字母大写
    this.name = uname;
    this.sex = sex;
    this.age = age;                          // 在构造函数里面，不需要return 返回值
  }
  var person = new Star('张三', '男', 18);    // 创建变量接收值
  // console.log(person);
  console.log(typeof(person));               // Object
  console.log(person.name);                  // 张三
  var person2 = new Star('李四', '男', 30);

  创建一个方法，传入实参的方式
  function Star(uname, sex, age) {
    this.sing = function(sang){              // 创建一个方法
        console.log(sang);
    }
  }
  person.sing('冰雨');`)])]),n("li",null,[l(" 使用构造函数可以更简化代码，只需要传入实参，形参接收就可以了 "),n("ul",null,[n("li",null,"构造函数名字首字母要大写"),n("li",null,"我们构造函数不需要return就可以返回结果"),n("li",null,"我们调用构造函数必须使用new"),n("li",null,"我们只要new Star() 调用函数就创建一个对象")])]),n("li",null," 构造函数，如Stars()，抽象了对象的公其部分，封装到了函数里面，它泛指某一大类（class） "),n("li",null," 创建对象，如new Stars0，特指某一个，通过new关键字创建对象的过程我们也称为对象实例化 "),n("li",null,"检查 obj中是否含有某个 属性名 语法： ‘属性名’ in 对象")])])],-1)),e[22]||(e[22]=n("p",null,"基本数据类型和引用数据类型的区别",-1)),e[23]||(e[23]=n("ul",null,[n("li",null,"当比较两个基本数据类型的值时，就是比较值"),n("li",null,[l(" 当比较两个引用数据类型时，它比较的对象的内存地址，如果地址一样，则相等，地址不一样，则不相等 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var a = 123;
  var b = a;
  a++;
  console.log(a); //124
  console.log(b); //123
  // a和b是完全独立的，一个值的变化，不会影响其他值 ，js变量都是存在栈内存的
  // 基本数据类型都是直接在栈内存中存储

  var obj = new Object();
  obj.name = '我是数据1';
  var obj2 = obj;
  obj.name = '我是修改的数据'

  // console.log(obj.name);   // '我是数据1'
  console.log(obj.name);      // '我是修改的数据'
  console.log(obj2.name);     // '我是修改的数据'`)])])],-1)),e[24]||(e[24]=n("p",null,"*ES6 中定义类的新语法",-1)),e[25]||(e[25]=n("ul",null,[n("li",null,[l(" 代码 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.fun = function (year) {
        console.log(this.name, this.age, this.sex);
    }
  }
  let a1 = new Person('张三', 18, "男");
  console.log(a1);
  a1.fun();

  //  ES6 新语法
  // 定义一个person 类型
  class Person {
      // 创建一个构造函数
      constructor(name, age, sex) {
          this.name = name;
          this.age = age;
          this.sex = sex;
      };
      // 方法1 给类添加一个方法,下面写法是在原型对象中添加， prototype中添加
      fun() {
          console.log(this.name, this.age, this.sex);
      };
      // 方法2，给类添加一个方法,下面写法是在对象中添加
      fun = function () {
          console.log(this.name, this.age, this.sex);
      }
  }
  let a1 = new Person('张三', 18, "男");
  console.log(a1);

  // 私有属性
  class Person {             // 创建一个构造函数
    #name;                   // 必须封闭类中声明私有字段“#name”
    #age;                    // 必须封闭类中声明私有字段“#gae”
    #sex;                    // 必须封闭类中声明私有字段“#sex”
    constructor(name, age, sex,money) {
        this.#name = name;   // 私有属性，只能通过方法get获取和方法set设置
        this.#age = age;     // 私有属性
        this.#sex = sex;     // 私有属性
        this.money = money;  // Person 公共属性
    }
    fun() {
        console.log(this.#name, this.#age, this.#sex);
    }
    setName(name) {          // 私有属性，只能通过方法get获取
        this.#name = name;
    }
    getName() {              // 私有属性，只能通过方法set设置
        return this.#name;
    }
  }
  let p = new Person("张三", 18, "男",500);
  console.log(p.getName());    // 私有属性，只能通过方法get获取
  console.log(p.money);        // 公共属性可以直接获取`)])]),n("li",null,[l(" class 静态成员只能通过构造函数来访问 ，实例成员只能通过实例化对象访问 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  class Person{               // 使用大驼峰命名法,注意创建实例时 构造名也要大写
    name = 1;                 // person 实例属性name，调用方法 p.name
    age = 2;                  // 实例属性只能通过实例访问 p.age
    static fun = "静态属性";   // 静态属性只能通过构造函数 类去访问  Person.fun
  }
  let p = new Person(); `)])]),n("li",null,[l(" 静态成员只能通过构造函数来访问 ，实例成员只能通过实例化对象访问 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  function Students(name, age) {
    this.name = name;                              // 实例成员
    this.age = age;                                // 实例成员
    console.log(this.name + "今年" + age + "岁");   // 张三今年18岁
  };
  // 实例化对象
  let std1 = new Students("张三", 18);
  console.log(std1);                               // Students {name: "张三", age: 18}
  Students.gender = "男";                          // 通过构造函数新增的成员 gender  属于静态成员
  console.log(std1.gender);                        // undefined  静态成员只能通过构造函数来访问 : Students.gender`)])]),n("li",null,[l(" constructor 构造函数 主要用于记录该对象引用于哪个构造函数，它可以让原型对象重新指向原来的构造函数 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  function Students(name, age) {
    this.name = name;
    this.age = age;
  };
  /* Students.prototype.eat = function () { // 在构造函数原型中添加一个吃的方法
      console.log("我会吃");
  } */
  Students.prototype = {                    // 采用对象形式往Students原型对象里添加方法,这样的方法必须手动constructor指回原来的构造函数
      constructor:Students,                 // 因为采用对象形式，等于修改掉原来的原型对象，所以要constructor指回原来的构造函数
      eat: function () {},                  // 这样才知道对象是通过哪个构造函数创建出来的
      play: function () {}
  }
  let std1 = new Students("张三", 18);
  console.log(Students.prototype);`)])])],-1)),e[26]||(e[26]=n("p",null,"构造函数、实例、原型对象三角的关系",-1)),e[27]||(e[27]=n("ul",null,[n("li",null,[l(" JS的成员查找机制(规则) "),n("ul",null,[n("li",null," 当访问一个对象的属性包括方法时，首先查找这个对象自身有没有该属性或者方法 "),n("li",null," 如果没有就查找它的原型，也就是__proto__指向的prototype原型对象 "),n("li",null," 如果还没有就查找原型对象的原型，Object的原型对象，记住 O要大写 "),n("li",null," 以此类推一直找到Object为止（null）,因为Object 后面已经没有原型对象了 "),n("li",null," __proto__对象原型的意义就在于对象成员查找机制提供一个方向，或者说是一路线 "),n("li",null," 就近原则，自身有则先采用自身上的属性和方法，没有才往原型链路上查找 ")])]),n("li",null,[l(" 原型对象this的指向 "),n("ul",null,[n("li",null,"构造函数中，this的指向是对象实例，就是创建出来实例化对象"),n("li",null," 构造函数原型对象中的this 指向的是创建出来的实例对象，谁调用this就指向谁 "),n("li",null,"普通函数的this指向的是window")]),n("pre",null,[n("code",{class:"language-js line-numbers"},`  function a() {
    var name = "b";
    console.log(this);      // window
    console.log(this.name); // 空，因为this指向的是window,window里面有一个保留关键字 name 为空
    console.log(name);      // b
  };
  a();`)])]),n("li",null,[l(" 原型对象扩展内置对象方法 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  console.log(Array.prototype);                     // 没有求和的方法，那么可以自己扩展内置对象方法，里面没有求和方法
  // [constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]
  Array.prototype.sum = function () {               // 往数组对象原型中添加一个 求和方法
      let sum = 0;
      for (let i = 0; i < this.length; i++) {    // this谁调用就指向谁的长度
          sum += this[i];                           // 讲数组中的每个元素 与sum想加
      }
      return sum;                                   // 返回sum的结果
  };
  let a = [11, 22, 33];
  console.log(a.sum());                             // 调用数组的扩展内置方法  sum()
  console.log(Array.prototype);                     // 这样就可以看到新增 sum方法
                                                    // [sum: ƒ, constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …]

  //-----------------------------------------------------------------------------------
  Array.prototype={sum:function() {} }              // 不能使用 = ，这样等于覆盖掉数组中的对象和方法，调用其他方法时会报错`)])])],-1)),e[28]||(e[28]=n("pre",null,[n("code",{class:"language-js line-numbers"},`                      Student.prototype  >
  Student 构造函数      <================>          Student 原型对象prototype
                  < Student.prototype.constructor

          指向 >                   std1.__proto__ >
  Student  ====>  new实例对象 std1     =========>   Student 原型对象
            < std1.__proto__.constructor是通过Student原型对象指回Student构造函数的`)],-1)),e[29]||(e[29]=n("p",null,"*ES6 中的继承",-1)),e[30]||(e[30]=n("pre",null,[n("code",{class:"language-js line-numbers"},`  class Person {
    constructor(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    };
    fun() {
        console.log(this.name, this.age, this.sex);
    };
  }
  let a1 = new Person('张三', 18, "男");
  console.log(a1);

  // 使用 extends 关键字 进行继承
  class School extends Person {
      constructor(name, age, sex, gender) {
          super(name, age, sex);             // super()表示调用父类的构造函数
          this.gender = gender;              // 表示School 新增的属性,是 school 独有的属性
      }
      // 写一个自己的方法
      myFun() {
          console.log(this.name, this.age, this.sex, this.gender);
      }
  }

  // 继承构造函数属性
  function Father(name, age) {
      this.name = name;
      this.age = age;
  };
  function Son(name, age) {
      Father.call(this, name, age);          // this指向父类的对象实例成员 .继承父级的this
  };
  var son = new Son('张三', 10);
  console.log(son);

  // 继承父亲的方法
  Son.prototype = Father.prototype;          //  X  这样做虽然可以在Son中访问到父级的方法，但是子级创建的方法会一起给父级添加
  Son.prototype  = new Father();             // 这样的好处是，能访问父级的方法，不会让Son新增方法存到父级原型对象中
  Son.prototype.constructor = Son;           // 注意要添加这一步
                                             // 因为采用对象的形式修改了原型对象，需要让constructor指回原来的原型对象`)],-1)),e[31]||(e[31]=n("p",null,"for in 循环对象",-1)),e[32]||(e[32]=n("ul",null,[n("li",null,"枚举对象中的属性： 对象中有几个属性，循环体就会执行几次"),n("li",null,"需要使用 for... in 语句"),n("li",null,"语法： for (var 变量 in 对象){}"),n("li",null," 变量： 每次执行都会把对象的属性名 赋值给变量 对象[变量]，这样可以找到属性值 "),n("li",null,[l(" 方法2： Object.keys(obj) 循环出对象中所有的属性名，并返回一个新数组 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  let obj1 = {
    name: "张三",
    "age": 20,
    "gender": "男"
  }
  for (let k in obj1) {
      console.log(k + ':' + obj1[k]);
  }

  let b = Object.keys(obj1);
  console.log(b);                       // ["name", "age", "gender"]
  let obj2 = {}
  b.forEach(c => {
      obj2[c] = obj1[c]
  })
  console.log(obj2);`)])]),n("li",null,"Object.新增的方法，可以定义对象中新属性或修改原有属性"),n("li",null,[l(" 语法： "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  Object.defineProperty(obj , "prop" , {value:descriptor})

  /* descriptor 的参数说明
      value： 设置属性的值默认为undefined
      writable： 值是否可以重写。true l false ，默认为false
      enumerable： 目标属性是否可以被枚举，也就是可不可以被遍历出来，此属性不包含修改形式。true l false ，默认为false
      configurable： 目标属性是否可以被删除或是否可以再次修改特性true | false ，默认为false  */
              `)])]),n("li",null,[l(" 可以使用map() 高阶函数来获取属性值 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  let data = {
    "name": "张三",
    "age": 10,
    "gender": "男"
  };
  Object.keys(data).map((key) => {
      console.log(data[key]);          // 张三     10    男
  })`)])])],-1)),e[33]||(e[33]=n("p",null,"ES6语法，将对象转换为字符串",-1)),e[34]||(e[34]=n("pre",null,[n("code",{class:"language-js line-numbers"},`  let a = {
    name: '张三',
    age: 18,
    gender: '男'
  }
  // Object.keys(指定的对象)，该方法可以获取指定对象的所有Key 返回值是一个数组
  let arr = [];
  Object.keys(a).forEach(key => {                 // 先获取，然后再遍历
      arr.push([key, a[key]].join("="));          // 空数组里添加 [获取的键，键值].用 =号拼接
  })
  console.log(arr);                               // 获取值
  let b = arr.join("&");                          // 用& 特定的格式转换字符串
  console.log(b);
  //-------------------------------------------------------------------
  // 简化：
  let b = Object.keys(a).map((key,split='&')=> {  // 方法可以传两个参数，一个是键名，一个是分割符号，默认写了&
      return [key, a[key]].join("=");
  }).join(split);
  console.log(b);
  //---------------------------------------------------------------------
  // ES6简化
  let b = Object.keys(a).map((key,split='&') => [key, a[key]].join("=")).join(split);
  console.log(b);`)],-1)),e[35]||(e[35]=n("p",null,"ES6语法，将字符串转换为对象",-1)),e[36]||(e[36]=n("pre",null,[n("code",{class:"language-js line-numbers"},`  let str = "name=张三&age=18&gender=男";
  let obj = {};                           // 1、定义一个空对象
  let arr = str.split("&");               // 2、使用&符号分割字符串成数组
  // console.log(arr); ["name=张三", "age=18", "gender=男"]
  // 3、遍历数组，用 = 分割
  arr.forEach(item => {
      let strFg = item.split("=");        // 4、用=号分割字符串  strFg = ["name", "张三"]   ["age", "18"]   ["gender", "男"]
      obj[strFg[0]] = strFg[1];           // {name: "张三", age: "18", gender: "男"} obj[strFg[0]] 就是属性名，strFg[1]就是属性值
      // 上面代码就相当于对象创建属性     obj.name = "张三"    等同于    obj[name] = "张三"
  })
  console.log(obj);/*   let obj = {
                            name: '张三',
                            age: 18,
                            gender: '男' }
                   */

  // 简化代码-----------------------------------------------------
  // 将字符串转换为对象 name=张三&age=18&gender=男
  let str = "name=张三&age=18&gender=男";
  let obj = {}; // 1、定义一个空对象
  str.split("&").forEach(item => {
      let strFg = item.split("=");
      obj[strFg[0]] = strFg[1];
  })
  console.log(obj);`)],-1)),e[37]||(e[37]=n("p",null,"统计字符串中的数量",-1)),e[38]||(e[38]=n("pre",null,[n("code",{class:"language-js line-numbers"},`  // 1.定义一个学校对象
  let school = {
      // 2里面有一个学生数组，数组里面有三个学生对象的信息
      student: [{
          name: "zs",
          age: 20,
          sex: "男"
      }, {
          name: "ls",
          age: 26,
          sex: "女"
      }, {
          name: "ww",
          age: 19,
          sex: "男"
      }],
      // 3添加学生的方法
      add() {
          let obj = {};                                         // 4.创建一个空对象用来存储用户输入进来的数据
          obj.name = Number.parseInt(prompt('请输入姓名'));
          obj.age = Number.parseInt(prompt('请输入年龄'));
          obj.sex = Number.parseInt(prompt('请输入性别'));
          this.student.push(obj);                               // 5.然后再添加到student数组里
      },
      // 6展示学生的方法
      show() {
          console.log('------显示学生信息------');
          console.log('姓名 \\t年龄 \\t性别');
          this.student.forEach(f => {                           // 7、循环遍历数组中的对象
              console.log(\`\${f.name}  \\t\${f.age}  \\t\${f.sex}\`); // 打印出student 数组中第一个对象的的属性值
          })
      },
      // 8. 添加一个菜单方法
      menu() {
          let menus = Number.parseInt(prompt('1.添加学生 2.查询学生 0.退出系统'));
          switch (menus) {
              case 1:
                  this.add();                                   // 调用添加的方法
                  break;
              case 2:
                  this.show();
                  break;
              case 0:
                  return                                        // 因为使用递归，需要return  退出方法
              default:
                  alert('请输入正确的编号');
          }
          // this.menu();  使用此方法也可以，但是当函数名变更时，其他调用函数忘记改名就会报错，不严谨
          // arguments.callee();  这里不能直接使用callee,因为第一次this指向没有问题，this指向的是调用者school，里面有方法
          // 当递归重复调用menu方法时，this 指向的会是调用者arguments .callee，callee没有menu方法
          arguments.callee.call(this);                          // 使用递归，重新调用此方法，call 可以改变this的指向，使用方法后还是指向 school
      }
  };
  school.menu();`)],-1)),e[39]||(e[39]=n("p",null,"垃圾回收 （GC :Garbage collection）",-1)),e[40]||(e[40]=n("ul",null,[n("li",null," 程序运行一段时间后也会产生垃圾,和生活一样，生活时间长了以后会产生生活垃圾 "),n("li",null,[l(" 理解：如果一个对象没有任何的变量对其进行引用，那么这个对象就是一个垃圾 "),n("ul",null,[n("li",null," 创建一个对象，给对象赋值null,断开引用地址后，这个对象就是垃圾，除非有其他变量引用这个对象 "),n("li",null,"垃圾对象的存在，会严重的影响程序的性能"),n("li",null," 在JS中有自动的垃圾回收机制，这些垃圾对象会被解释器自动回收，我们无需手动处理 ")])])],-1)),e[41]||(e[41]=n("p",null,"New 关键字",-1)),e[42]||(e[42]=n("ul",null,[n("li",null,[l(" new关键字执行过程 "),n("ul",null,[n("li",null," new构造函数可以在内存中创建了一个空的对象 (等同于：他们两个生了个宝宝) "),n("li",null," this就会指向刚才创建的空对象 (等同于： 这个宝宝必须是亲生的this指向) "),n("li",null," 执行构造函数里面的代码给这个空对象添加属性和方法 (等同于：教孩子读书，一肚子墨水) "),n("li",null," 返回这个对象 (所以构造函数中不需要 return) (等同于长大挣钱回报父母) ")])])],-1)),e[43]||(e[43]=n("p",null,"遍历对象",-1)),e[44]||(e[44]=n("pre",null,[n("code",{class:"language-js line-numbers"},`  // 语法：
  for (var 变量 in 对象 ){        // 变量 写 k 或者 key
     console.log( 变量 ) ;       // 此时会遍历打印出来属性名
     console.log( 对象[变量] ) ;  // 此时会遍历打印出来 属性值
  }

  var obj = {
      name: '廉颇',
      type: '力量型',
  }
  for (var k in obj) {
      console.log(k);
      console.log(obj[k]);
  }`)],-1)),e[45]||(e[45]=n("p",null,"方法总结 (变量、属性、函数)",-1)),e[46]||(e[46]=n("ul",null,[n("li",null,"变量：单独声明赋值，单独存在"),n("li",null," 属性：对象里面的变量称为属性，不需要声明，用来描述该对象的特征 "),n("li",null,"函数：单独存在的，通过“函数名（）”的方式就可以调用"),n("li",null,' 方法：对象里面的函数称为方法，方法不需要声明，使用“对象.方法名（）"的方式就可以调用， 方法用来描述该对象的行为和功能。 ')],-1)),e[47]||(e[47]=n("p",null,"小结",-1)),e[48]||(e[48]=n("ul",null,[n("li",null,"对象可以让代码结构更清晰"),n("li",null,"对象复杂数据类型object。"),n("li",null,"本质：对象就是一组无序的相关属性和方法的集合。"),n("li",null," 构造函数泛指某一大类，比如苹果，不管是红色苹果还是绿色苹果，都统称为苹果。 "),n("li",null,"对象实例特指一个事物，比如这个苹果、正在给你们讲课的老师等。"),n("li",null,"for..in 语句用于对对象的属性进行循环操作。")],-1)),e[49]||(e[49]=n("p",null,"内置对象",-1)),e[50]||(e[50]=n("ul",null,[n("li",null,"JavaScript中的对象分为3种：自定义对象、内置对象、浏览器对象"),n("li",null," 前面两种对象是JS基础内容，属于ECMAScript；第三个浏览器对象属于我们JS独有的，我们JS API讲解 "),n("li",null," 内置对象就是指JS语言自带的一些对象，这些对象供开发者使用，并提供了一些常用的或是最基本而必要的功能（属性和方法） "),n("li",null,"内置对象最大的优点就是帮助我们快速开发"),n("li",null,"JavaScript提供了多个内置对象：Math、Date、Array、string等")],-1)),e[51]||(e[51]=n("p",null,"查文档",-1)),n("ul",null,[n("li",null,[e[14]||(e[14]=l(" MDN网址： ")),u(i,{type:"primary",icon:"Link",target:"_blank",href:"https://developer.mozilla.org/zh-CN/"},{default:r(()=>e[13]||(e[13]=[l(" https://developer.mozilla.org/zh-CN/ ")])),_:1,__:[13]})]),e[15]||(e[15]=n("li",null," 学习一个内置对象的使用，只要学会其常用成员的使用即可，我们可以通过查文档学习，可以通过MDN/W3C来查询。 ",-1)),e[16]||(e[16]=n("li",null," Mozilla开发者网络（MDN）提供了有关开放网络技术（Open Web）的信息，包括HTML、CSS和万维网及HTML5应用的API。 ",-1))]),e[52]||(e[52]=n("p",null,"如何学习对象中的方法",-1)),e[53]||(e[53]=n("ul",null,[n("li",null," 查阅该方法的功能 比如输入 math.max() , 功能就会显示出来：函数返回一组数中的最大值 "),n("li",null,"查看里面参数的意义和类型"),n("li",null,"查看返回值的意义和类型"),n("li",null,"通过demo 进行测试"),n("li",null,[l(" 案例 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  //利用对象封装自己的数学对象，里面有PI的最大值和最小值
  var myMath = {
      PI: 3.141596253,
      max: function() {
          var max = arguments[0];
          for (var i = 1; i < arguments.length; i++) {
              if (arguments[i] > max) {
                  max = arguments[i];
              }
          }
          return max;
      },
      min: function() {
          var min = arguments[0];
          for (var i = 1; i < arguments.length; i++) {
              if (arguments[i] < min) {
                  min = arguments[i];
              }
          }
          return min;
      }
  }
  console.log(myMath.PI);
  console.log(myMath.max(1, 12, 8));
  console.log(myMath.min(1, 12, 8));`)])])],-1)),e[54]||(e[54]=n("p",null,"数学对象",-1)),e[55]||(e[55]=n("ul",null,[n("li",null,[l(" 绝对值 max.abs () ; "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  console.log(Math.abs(1));          // 1
  console.log(Math.abs(-1));         // 1
  console.log(Math.abs('-1'));       // 1   因为会隐式转换
  console.log(Math.abs('中文'));      // NaN   `)])]),n("li",null,[l(" 取整数的三个方法 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  Math.floor ();                     // 向下取整，往最小了取整，不考虑四舍五入，注意负数
    console.log(Math.floor(1.2));    // 1
    console.log(Math.floor(1.6));    // 1 不会四舍五入
    console.log(Math.floor(-4.1));   // -5 负值有带小数点的直接进 1( -5 < -4.1)，所以向下取整
    console.log(Math.floor('中文'));  // NaN

  Math.ceil ();                      // 向上取整，往最大了取整，不考虑四舍五入，有小数点直接进1
    console.log(Math.ceil(1.2));     // 2
    console.log(Math.ceil(1.6));     // 2
    console.log(Math.ceil(-4.6));    //-4 只会取到整数，并不考虑四舍五入（ -4 > -4.6 ）
    console.log(Math.ceil('中文'));   // NaN

  Math.round ();                     // 四舍五入，取整，负值 .5 比较特殊， 因为谁大取值谁， - 5 -4.5 -4 ，-4比-5大
    console.log(Math.round(1.2));    // 1
    console.log(Math.round(1.6));    // 2
    console.log(Math.round(-4.5));   // -4   只会取到整数，不会四舍五入
    console.log(Math.round('中文'));  // NaN`)])]),n("li",null,[l(" 随机数方法 random () ; "),n("ul",null,[n("li",null,"返回一个随机的小数"),n("li",null,[l(" 这个方法不跟参数 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  console.log(Math.random()); // 获取随机的小数，0 <= x < 1

  //  案例：得到一个两数之间的随机整数，包括两个数在内
  function getRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
       // 向下取整（随机数0-1之间的小数  * 最大 - 最小 + 1 ） + 最小
       // 向下取整（0.2222  * （10-1+1））+1
       // 向下取整（2.222）+ 1
       // 取整后   2 + 1   随机数为 3
  }    // 如果不要包含 最大和最小数，则 不需要(max - min + 1)的+1 即可
  console.log(getRandom(1, 10));
                  `)])]),n("li",null,[l(" 方法2： 生成 x- y 之间的数 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  // 生成一个 1- 10 之间的随机数           ( y-x) +x
     var result = Math.round((Math.random() * 9) + 1);    // 包含1 和 10
  // 生成一个 0 - 10 之间的随机数
     var result = Math.round(Math.random() * 10);         // 包含0 和 10
  // 生成一个 2 - 10 之间的随机数
     var result = Math.round((Math.random() * 8) + 2);    // 不包含0 和 1`)])]),n("li",null,[l(" 案例 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  // 案例1：得到1-10的随机整数，只能猜5次，猜对退出，猜错继续
  function getRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  var num2 = getRandom(1, 10); //调用函数
  var j = 5;
  for (var i = 5; i > 0; i--) { //循环 次数
      j--;
      var num = parseInt(prompt('请输入一个数值'));
      if (num > num2) {
          alert('数字大了，您还剩下' + j + '  次');
      } else if (num < num2) {
          alert('数字小了，您还剩下' + j + '次');
      } else if (num == num2) {
          alert('猜对了');
          break;
      } else {
          alert('请输入正确的数值，您还剩下' + j + '次');
      }
  }
  alert('游戏结束');

  // 案例2：得到一个两数之间的随机整数，包括两个数在内，如果输入数值正确，则退出循环，输入错误一直猜
  function getRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  var num2 = getRandom(1, 10); //调用函数

  while (true) { //这是一个死循环，注意
      var num = parseInt(prompt('请输入一个数值'));
      if (num > num2) {
          alert('数字大了');
      } else if (num < num2) {
          alert('数字小了');
      } else if (num == num2) {
          alert('猜对了');
          break;
      } else {
          alert('请输入正确的数值');
      }
  }`)])])])])],-1)),e[56]||(e[56]=n("p",null,"日期对象 (是一个构造函数，必须使用New 来调用创建)",-1)),e[57]||(e[57]=n("pre",null,[n("code",{class:"language-js line-numbers"},`  // 1、如果没有参数，则返回系统当前时间
    var a = new Date();
    console.log(a);

  // 2、如果带参数： 参数常用写法数字型  2019，10，01  （逗号隔开）或者是 字符串 ' 2019-10-1  8:8:8'
    var a = new Date('2019-10-1 8:8:8');    // 字符串形式 . 年月日和日月年都可以，二选一
    var a = new Date('2019/10/1 8:8:8');    // 必须加 ' ' 和 ：    二选一
    console.log(a);

  // 3、将时间转换字符串
    let d = new Date();
    let result = d.toLocaleDateString()     // 将日期转换成刚本地时间格式字符串  xxxx/xx/xx
    let result2 = d.toLocaleTimeString()    // 将时间转换成本地时间格式字符串    xx:xx:xx
    let result3 = d.toLocaleString()        // 日期和时间都转换                xxxx/xx/xx xx:xx:xx
    let r4 = d.toLocaleString("zh-CN",{})   // 日期格式可以传参 （"语言代码-国家地区"） 参数可以百度搜索。第二个参数可以传配置对象，查文档

    Date对象和Math对象不一样，他是一个构造函数，所以我们需要实例化后才能使用
    Date实例用来处理日期和时间

  var dateObj = new Date();
      dateObj.getFullYear();        /* 获取当年 */
      dateObj.getMonth();           /* 获取当月 0 - 11 */
      dateObj.getDate();            /* 获取当天 */
      dateObj.getDay();             /* 获取星期 周日0 到 周六6 */
      dateObj.getHours();           /* 获取当前小时 */
      dateObj.getMinutes();         /* 获取当前分钟 */
      dateObj.getSeconds();         /* 获取当前秒 */

  注意：在getMonth(); 需要加1,因为获取的当前月 是0 到11 来表示的
        在getDay();   获取的当前日是索引号 0 到6 来表示的，周日是0，写在最前面，周一是1，周六是6

  // 案例
      var a = new Date();
      var Year = a.getFullYear();
      var Month = a.getMonth() + 1;  //要 +1
      var mDate = a.getDate();
      var day = a.getDay();
      var arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
      // 这里注意，数组中第一个必须写星期日，因为获取是从 0  1 2 3 4 5 6来获取的，0是星期日
      var Hours = a.getHours();
      var Minutes = a.getMinutes();
      var Seconds = a.getSeconds();
      console.log('今天是：' + Year + '年' + Month + '月' + mDate + '日，' + arr[day] + '');
      console.log(Hours + ':' + Minutes + ':' + Seconds);

  // 用函数封装一个时分秒
      function getTimer() {
          var a = new Date();
          var Hours = a.getHours();
          var Minutes = a.getMinutes();
          var Seconds = a.getSeconds();
          return Hours + ':' + Minutes + ':' + Seconds;
      }
      console.log(getTimer());

  // 完善代码：当时间小于10的话，前面补一个 0
      function getTimer() {
          var a = new Date();
          var Hours = a.getHours();
          Hours = Hours < 10 ? '0' + Hours : Hours;               // 小于10自动补0，更美观
          var Minutes = a.getMinutes();
          Minutes = Minutes < 10 ? '0' + Minutes : Minutes;       // 小于10自动补0，更美观
          var Seconds = a.getSeconds();
          Seconds = Seconds < 10 ? '0' + Seconds : Seconds;       // 小于10自动补0，更美观
          return Hours + ':' + Minutes + ':' + Seconds;
      }
      console.log(getTimer());`)],-1)),e[58]||(e[58]=n("p",null,"时间戳 (获取日期的总的毫秒形式)",-1)),e[59]||(e[59]=n("ul",null,[n("li",null," Date对象是基于格林威治标准时间 1970年1月1日 00：00：00（世界标准时间）起的毫秒数，调用时，中国时间和外国时间差8小时， -28800000 "),n("li",null,[l(" 为什么计算机起始时间从1970年开始？ 我们经常利用总的毫秒数来计算时间，因为它更精确 两种方法，一种通过 valueOf () 一种通过 getTime () "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var date = new Date();
  console.log(date.valueOf());     // 方法1  O 要大写
  console.log(date.getTime());     // 方法2  T 要大写

  简写方式， + new 返回的就是总的 毫秒数
  var date = +new Date();          // 如果值为空，返回的是当前的总毫秒数
  console.log(date);

  H5简写方式， Date.当前的（）;
  console.log(Date.now());`)])]),n("li",null,[l(" 倒计时案例核心算法： "),n("ul",null,[n("li",null," 输入的时间减去现在的时间就是剩余的时间，即倒计时，但是不能拿着时分秒相减， 比如05分减去25分，结果会是负数的。 "),n("li",null," 用时间戳来做。用户输入时间总的毫秒数 减去 现在时间的总毫秒数，得到的就是 剩余时间的毫秒数 "),n("li",null," 把剩余时间总的毫秒数转换为天、时、分、秒（时间戳转换为时分秒）转换公式如下： ")]),n("pre",null,[n("code",{class:"language-js line-numbers"},`  /* d = parseInt（总秒数/60/60/24）;                    计算天数
  h = parseInt（总秒数/60/60%24）;                       计算小时
  m= parseInt（总秒数/60%60）;                           计算分数
  s = parseInt（总秒数%60）;                             计算当前秒数 */

  function countDown(time) {
    var dayTime = +new Date();                           // 如果值为空，那么会获取当前的总毫秒数
    var inputTime = +new Date(time);                     // 如果有值，就是获取值到1970的总毫秒数
    var total = (inputTime - dayTime) / 1000;            // 现在dayTime就是秒数了
    var d = parseInt(total / 60 / 60 / 24);              // 计算天数
    d = d < 10 ? '0' + d : d                             // 小于10自动补0
    var h = parseInt(total / 60 / 60 % 24);              // 计算小时
    h = h < 10 ? '0' + h : h                             // 小于10自动补0
    var m = parseInt(total / 60 % 60);                   // 计算分数
    m = m < 10 ? '0' + m : m                             // 小于10自动补0
    var s = parseInt(total % 60);                        // 计算当前秒数
    s = s < 10 ? '0' + s : s                             // 小于10自动补0
    return d + '天 ' + h + '时 ' + m + '分 ' + s + '秒 ';
  }
  console.log(countDown('2021-6-24 0:0:0'));
              `)])])],-1)),e[60]||(e[60]=n("p",null,"数组对象",-1)),e[61]||(e[61]=n("ul",null,[n("li",null,[l(" 创建数组对象的两种方式 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  // 1、字面量方式
    var a = [] ;

  // 2、new Array（）;           // 创建空数组
    var a = new Array () ;
    var a = new Array (5) ;     // 这样写，代表创建了一个数组，里面存放了5个空元素
    var a = new Array (5,4) ;   // 这样写 ，代表数组里有两个元素， 5 和 4`)])]),n("li",null,[l(" 检测是否是数组的两种方法： "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  // instanceof 和 （ Array. isArray(参数); 优先级更高，H5新增 ie9以上才支持 ）
  var arr = [];
  console.log(arr instanceof Array);      // 返回 true  和  false
  console.log(Array.isArray(arr));        // 返回 true  和  false

  // 翻转数组案例
  function reverse(arr) {
      if (arr instanceof Array) {         // 检测传进来的是否是数组，如果不是则弹出请输入正确数组
          var newArr = [];
          for (var i = arr.length - 1; i >= 0; i--) {
              newArr[newArr.length] = arr[i];
          }
          return newArr;
      } else {
          alert('请输入正确的数组');
      }
  }
  console.log(reverse([1, 2, 3, 4, 5]));`)])]),n("li",null,[l(" 添加删除数组元素的方法 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  // push(参数1....)                末尾添加一个或多个元素，注意修改原数组                并返回新的长度
  // pop()                          除数组最后一个元素，把数组长度减1无参数、修改原数      返回它删除的元素的值
  // unshift(参数1..)               向数组的开头添加一个或更多元素，注意修改原数组          并返回新的长度
  // shift()                        删除数组的第一个元素，数组长度减1 无参数、修改原数组    并返回第一个元素的值

  var arr = [1, 2, 3];            // 在尾部增加元素
  arr.push(4, '也可以多个元素');    // 会在末尾增加一个 4 元素： 可单 可多
  console.log(arr);               // 1, 2, 3，4,'也可以多个元素'
  console.log(arr.push());        // 会有返回值，返回新数组的长度 5
  arr.unshift(7, 8);              // 在开头增加元素
  console.log(arr);               // 7，8，1，2，3
  console.log(arr.pop());         // 打印出 返回值 最后一个要删除的元素
  console.log(arr.shift());       // 打印出 返回值 开头一个要删除的元素
  console.log(arr);               // 打印出 结果

  // 案例：之前遍历数值，然后把小于10的放到新数组
      var arr = [20, 8, 7, 12, 1];
      var newArr = [];
      for (var i = 0; i < arr.length; i++) {
          if (arr[i] < 10) {
              newArr[newArr.length] = arr[i];
          }
      }
      console.log(newArr);

  // 现在用push方法，代码更不容易出错
      var arr = [20, 8, 7, 12, 1];
      var newArr = [];
      for (var i = 0; i < arr.length; i++) {
          if (arr[i] > 10) {
              newArr.push(arr[i]);
          }
      }
      console.log(newArr);`)])]),n("li",null,[l(" 数组排序、冒泡排序 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  // reverse()                      颠倒数组中元素的顺序，无参数   该方法会改变原来的数组 返回新数组
  // sort()                         对数组的元素进行排序          该方法会改变原来的数组返回新数组

  var arr = [20, 8, 7, 12, 1];
  arr.reverse(); //翻转数组
  console.log(arr);

  // 冒泡排序，如果顺序不一样，则会按照个位先排序，所以需要用函数解决 a- b b-a
  // var arr = [20, 8, 7, 9, 11]; // 这样排序会出现  11 20   7 8 9  排序
  var arr = [20, 18, 15, 11, 9];  // 比大小 是先 第一位进行排序，然后再第二位比较
                                  // 返回结果  11 15 18 20 9

  arr.sort(function(a, b) {       // 冒泡排序，完整写法，在sort()；里写一个函数
      return a - b;               // 按照升序的排列
      return b - a;               // 按照降序的排列
  });
  console.log(arr);`)])]),n("li",null,[l(" 数组索引方法，记住O大写 lastIndexOf 简单了解下即可，常用 indexOf "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  indexOf()     数组中查找给定元素的第一个索引     如果存在返回素引号 如果不存在，则返回-1。
  lastIndexOf   在数组中的最后一个的素引          如果存在返回索引号 如果不存在，则返回-1。

  返回数组元素索引号方法 indexOf（数组元素）作用就是返回该数组元素的索引号
  如果数组中有两个相同的 数组元素，则返回满足条件的第一个数组元素，后面的将不再获取
  lastIndexOf , I 和 O 要大写

  var arr = [20, 18, 15, '猜我是第几', 9, 15]; // 比大小是在 10个之间 以内进行排序
  console.log(arr.indexOf('猜我是第几'));      // 返回值 3
  console.log(arr.indexOf(15, 15));          // 返回值 -1，只允许返回一个值 ，从头开始查找
  console.log(arr.lastIndexOf(15));          // 返回值 5，因为是从末尾往前查找，只返回满足条件的第一个值，注意 I O 要大写`)])]),n("li",null,[l(" 数组去重 "),n("ul",null,[n("li",null," 目标：把旧数组里面不重复的元素选取出来放到新数组中，重复的元素只保留一个，放到新数组中去重。 "),n("li",null," 核心算法：我们遍历旧数组，然后拿着旧数组元素去查询新数组，如果该元素在新数组里面没有出现过，我们就添加，否则不添加。 "),n("li",null," 我们怎么知道该元素没有存在？利用新数组.indexOf（数组元素）如果返回时-1就说明新数组里面没有改元素 ")]),n("pre",null,[n("code",{class:"language-js line-numbers"},`  function unique(arr) {                        // 函数封装
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) == -1) {     // 核心数算法，如果索引号不存在
            newArr.push(arr[i]);                // 那么就把这个数值元素赋到新数组上
        }
    }
    return newArr;                              // 返回值
  }
  var demo = unique([1, 2, 3, 5, 6, 7, 8, 9, 4, 1, 2, 5, 6, 3, 4]);
  console.log(demo);`)])]),n("li",null,[l(" 数组转换为字符串 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  toString()       把数组转换成字符串，逗号分隔每一项          返回一个字符串
  join("分隔符")    方法用于把数组中的所有元素转换为一个字符串。  返回一个字符串

  var demo = [1, 2, 3, 5];
  console.log(demo.toString());        // 输出字符串的 1，2，3，5
  console.log(demo.join('&'));         // 输出带分隔符的  1 & 2 & 3 & 5   分隔符可以是任意，不写则是默认 逗号 ，`)])]),n("li",null,[l(" 数组其他方法 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  concat()      连接两个或多个数组  不影响原数组          返回一个新的数组
  slice()       数组截取slice（begin，end）            返回被截取项目的新数组数组
  splice        数组删除splice（第几个开始，要删除个数）   返回被删除项目的新数组注意，这个会影响原数组

  var demo = [1, 2, 3, 4];
  var demo2 = [5, 6, 7, 8];
  console.log(demo.concat(demo2));       // 合并两个数组

  // slice();
  var num1 = [[1]];
  var num2 = [2, [3]];
  var num3 = [5, [6]];
  var num4 = num1.concat(num2);
  console.log(num4);                   // results is [[1], 2, [3]]
  var num5 = num1.concat(4, num3);
  console.log(num5)                   // results is [[1], 4, 5,[6]]
  num1[0].push(4);
  console.log(num4);                   // results is [[1, 4], 2, [3]]

  // splice();
  const months = ['Jan', 'March', 'April', 'June'];
  months.splice(1, 0, 'Feb');          // inserts at index 1
  console.log(months);                 // expected output: Array ["Jan", "Feb", "March", "April", "June"]
  months.splice(4, 1, 'May');          // replaces 1 element at index 4
  console.log(months);                 // expected output: Array ["Jan", "Feb", "March", "April", "May"]

  // concat()原理：
  let arr = [11, 22, 33, 44, 55];
  function concat(arr2) {
      for (let i = 0; i < arr2.length; i++) {
          arr.push(arr[i])
      }
  }

  // includes()原理：
  function includes(val) {
    let isCz = false;                  // 定义一个变量表示是否存在
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]===val){
            isCz=true;                 // 表示已经存在
            break;
        }
    }
    return isCz;
  };
  console.log(includes(100));`)])])],-1)),e[62]||(e[62]=n("p",null,"字符串对象",-1)),e[63]||(e[63]=n("ul",null,[n("li",null,[l(" 基本包装类型：就是把简单数据类型包装成为了复杂数据类型，这样这个基本数据类型就有了属性和方法 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  // 基本包装类型
  var str ='andy';
  console.log(str.length);
  // 对象 才有 属性和方法   复杂数据类型才有 属性和方法
  // 简单数据类型为什么会有length属性呢？
  // 基本包装类型：就是把简单数据类型包装成为了复杂数据类型
  // （1）把简单数据类型包装为复杂数据类型
  var temp=new String("andy");
  // （2）把临时变量的值给str
  str = temp;
  // （3）销毁这个临时变量
  temp= nul1;`)])]),n("li",null,[l(" 字符串的不可变 "),n("ul",null,[n("li",null," 指的是里面的值不可变，虽然看上去可以改变内容，但其实是地址变了，内存中新开辟了一个内存空间。 ")]),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var num1 = 10;
  console.log (num1) ;   // 此时肯定会输出 10
  num1 = 20;             // 给num1 赋值一个 20，替换原来的数据
  console.log (num1) ;   // 此时输出的肯定是 20 ， 但是 10 的地址值在内存不会销毁，而是 num1的指向 到 20 地址

  // 所以，我们字符串的不可变，所以不要大量的拼接字符串`)])]),n("li",null,[l(" 根据字符返回位置 . indexOf('要查找的字符' , 起始位置) "),n("ul",null,[n("li",null," 字符串所有的方法，都不会修改字符串本身（字符串是不可变的），操作完成会返回一个新的字符串。 ")]),n("pre",null,[n("code",{class:"language-js line-numbers"},`  indexOf("要查找的字符",开始位置)    返回指定内容在元字符串中的位置，如果找不到就返回-1，开始的位置是index索引号
  lastIndexOf()                   从后往前找，只找第一个匹配的

  var str = '猜猜字是第几位，猜猜字是第几位';
  console.log(str.indexOf('字'));        // 2
  console.log(str.indexOf('是', 4));     // 11   查找的字符，从第四位开始查找`)])]),n("li",null,[l(" 案例：查找字符串”abcdefg”中所有0出现的位置以及次数 "),n("ul",null,[n("li",null,"核心算法：先查找第一个o出现的位置"),n("li",null,"然后只要indexOf返回的结果不是-1就继续往后查找"),n("li",null," 因为indexOf只能查找到第一个，所以后面的查找，利用第二个参数，当前索引加1，从而继续查找 ")]),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var str = 'abcdefg';
  var index = str.indexOf('o');
  var res = 0;
  while (index != -1) {
      console.log(index);
      res++;
      index = str.indexOf('o', index + 1);
  }
  console.log(res);`)])]),n("li",null,[l(" 数组也是一样的 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var str = [1, 2, 3, 3];
  var index = str.indexOf(3);
  var res = 0;
  while (index != -1) {
      console.log(index);
      res++;
      index = str.indexOf(3, index + 1);
  }
  console.log(res);`)])]),n("li",null,[l(" 根据位置返回字符（重点） 注意大小写 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  charAt(index)        返回指定位置的字符（index字符串的索引号）     str.charAt（0）
  charCodeAt（index）   获取指定位置处字符的ASClI码（index索引号）   str.charCodeAt（0）
  str[index]           获取指定位置处字符                         HTML5，IE8+支持和charAt0等效`)])]),n("li",null,[l(" 判断对象里面是否有该属性： 对象[ '属性名' ] "),n("ul",null,[n("li",null," 判断一个字符串abcdefg'中出现次数最多的字符，并统计其次数。 ")]),n("pre",null,[n("code",{class:"language-js line-numbers"},`  /* 核心算法：
      利用charAt（）遍历这个字符串
      把每个字符都存储给对象，如果对象没有该属性，就为1，如果存在了就+1
      遍历对象，得到最大值和该字符 */
  var str = 'abcdefg';
  var o = {};
  for (var i = 0; i < str.length; i++) {
      var chars = str.charAt(i);      // 是字符串的每一个字符
      if (o[chars]) {                 // 得到的是属性值
          o[chars]++;
      } else {
          o[chars] = 1
      }
  }
  //第二步 开始遍历对象
  var max = 0;                         // 存的是最大值
  var ch = '';                         // 先用一个空的变量来接收 属性名
  for (var k in o) {                   // k 是得到属性名     o[k]得到的是属性值
      if (o[k] > max) {
          max = o[k];
          ch = k;
      }
  }
  console.log(o);
  console.log('字符出现最多次数是：' + max);
  console.log('最多的字符是：' + ch);
              `)])]),n("li",null,[l(" 字符串操作方法 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  // concat（str1，str2，str3...）  concat（）方法用于连接两个或多个字符串。拼接字符串，等效于+，+更常用
  // substr（start，length）       从start位置开始（索引号），length取的个数重点记住这个
  // slice（start，end）           从start位置开始，截取到end位置，end取不到（他们俩都是索引号）
  // subSting(start,end)          从start位置开始，截取到end位置，en取不到基本和slice 相同但是不接受负值

  console.log(str1.substr(2,2));            // 第一个2是索引号的2，从第几个开始，第二个2，是取几个字符`)])]),n("li",null,[l(" 替换字符串 replace（‘被替换的字符’，‘替换为的字符’） "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var str = 'abcdefg';
  console.log(str.replace('c', 'x'));       // 只会替换第一个满足条件的
  while (str.indexOf('c') != -1) {          // 使用循环，遍历字符串，如果找到不等于 -1
      str = str.replace('c', 'x');          // 则替换
  }
  console.log(str);`)])]),n("li",null,[l(" 把字符串转换成数组 split（'分隔符‘） "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var str = 'abcd,abcdefg,abcdefg,aa';
  console.log(str.split(','));              // 用对应的分隔符来划分数组
  var str = 'abcd&abcdefg&abcdefg&aa';
  console.log(str.split('&'));              // 用对应的分隔符来划分数组`)])]),n("li",null,[l(" 转换成大写 toUpperCase () ; 和 小写 toLowerCase () ; "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var str = 'abcd,abcdefg,abcdefg,aa';
  console.log(str.toUpperCase());            // 转换成 大写
  console.log(str.toLowerCase());            // 转换成 小写`)])]),n("li",null,[l(" 案例 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var str = 'abcdefg3444343';

// 1、字符串的长度
console.log(str.length); //32

// 2、取出指定位置的字符，如：0，3，5，9等
console.log(str.substr(0, 1) + str.substr(3, 1) + str.substr(5, 1) + str.substr(9, 1));

// 3、查找指定字符是否在以上字符串中存在，如：i，c，b等
    if (str.indexOf('s') == -1) {
        console.log('没有');
    } else {
        console.log('有');
    }

// 4、替换指定的字符，如：g替换为22，ss替换为b等操作方法
console.log(str.replace('g', '22'));
  while (str.indexOf('g') != -1) {
      str = str.replace('g', '22');
  }
console.log(str);

// 5、截取指定开始位置到结束位置的字符串，如：取得1-5的字符串
console.log(str.slice(0, 5));

// 6、找出以上字符串中出现次数最多的字符和出现的次数
  var str = 'abcdefg3444343';
  var o = {};
  for (var i = 0; i < str.length; i++) {
      var chars = str.charAt(i);
      if (o[chars]) {
          o[chars]++;
      } else {
          o[chars] = 1;
      }
  }
  //第二步，遍历对象
  var max = 0;
  var ch = '';
  for (var k in o) {
      if (o[k] > max) {
          max = o[k];
          ch = k;
      }
  }
  console.log(o);
  console.log('出现最多次数是：' + max);
  console.log('出现最多次数的字符是：' + ch);`)])]),n("li",null,[l(" 数学对象 "),n("ul",null,[n("li",null," Math 和其他对象不同，它不是一个构造函数，它属于一个工具类，不用创建对象，它里面封装了数学数学的相关属性和方法 ")]),n("pre",null,[n("code",{class:"language-js line-numbers"},`  abs(x)                      // 返回数的绝对值
  Math.acos(x)                // 返回数的反余弦值
  Math.asin(x)                // 返回数的反正弦值
  Math.atan(x)                // 以介于 -pI/2 与PI/2 弧度之间的数值来 返回×的反正切值
  Math.atan2(y.x)             // 返回从x轴到点(x，y)的角度 (介于-PI/2与PI/2弧度之间)
  Math.ceil(x)                // 对数进行上舍入
  Math.trunc(x)               // 对数取整，返回整数部分
  Math.cos(x)                 // 返回教的余弦
  Math.exp(x1)                // 返回e的指数
  Math.floor(x)               // 对数进行下舍入， 负数的话取最小，-2.9 取值为 -3
  Math.loa(x)                 // 返回教的自然对数(底为e)
  Math.max(x,y)               // 返回x和y中的最高值
  Math.min(x.y)               // 返回x和y中的最低值
  Math.pow(x.y)               // 返回x的y次幂
  Math.random()               // 返回0~1之间的伪随机数，包括0，不包括1，浮点数时不包括0，整数时包括0
  Math.round(x)               // 把数四舍五入为最接近的整数
  Math.sin(x)                 // 返回教的正弦
  Math.sqrt(x)                // 返回数的平方根
  Math.tan(x)                 // 返回角的正切
  Math.toSource()             // 返回该对象的源代码
  Math.valueOf()              // 返回Math对象的原始值  `)])])],-1))]),_:1,__:[17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63]}),u(a,{id:"part13",shadow:"hover"},{default:r(()=>e[64]||(e[64]=[n("h2",null,"正则表达式",-1),n("p",null,"前言",-1),n("ul",null,[n("li",null," 做验证用的，比如邮箱，定义规则，不仅人能看懂，机器也能看的懂，所以定一个规则，就叫正则表达式 "),n("li",null,"正则表达式用于定义一些字符串的规则"),n("li",null," 计算机可以根据正则表达式，检查一个字符串是否符合规则，获取讲字符串中符合规则的内容提取出来 "),n("li",null,[l(" 语法1 更灵活: "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  let regExp = new RegExp(/123/);
  console.log(typeof regExp);       // Object`)])]),n("li",null,[l(" 语法2 简单： "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  var 变量 = /正则表达式/ 匹配模式 i g ;     // 不用加引号

  // 创建正则表达式，检查一个字符串中是否有a 或 b 。
  var reg = / a | b /;        // 使用 | 表示或者的意思
  var reg = / [ab] /;         // 使用 [ ] 也表示或的关系，出现任意一个都行
  var reg = / [a - z] /;      // 使用 [ a - z ] 表示任意的小写字母 ，大写 [ A - Z] 表示任意的大写字母
  var reg = / [A - z] /;      // 使用 [ A - z] 表示任意字母
  var reg = / a [bde ] c /;   // 使用 a [ bde ] c 表示前后固定，中间或
  var reg = / ^ac /;          // 使用 / ^a c / 表示除了的意思
  var reg = / [0 - 9 ]/;      // 使用 / [ 0 - 9 ] / 表示数字
  var reg = / [0 - 9 ]/ig;    // 匹配模式中，两个都写，表示既忽略大小写也全局匹配
  var reg = / a {3}/;         // 使用{ }可以表示量词，数字代表出现连续几次 ，量词只对前边的一个内容起作用
                              // 例如 / ab{3} / 不会表示 ababab ,而是表示 abbb
  var reg = / (ab) {3}/;      // 用（）括起来表示一组的，这样才表示 abababa
  var reg = / b{1，3}/;       // {第一个参数和第二个参数表示从一到二出现的范围值}必须出现 1 - 3 次
                              // 出现1个为 true，2个为 true，3个为true ，4个为false,因为 1 - 3 次
  var reg = / ab+c/;          // 使用 + 号 表示至少出现一次才可以，相当于 {1, }
  var reg = / ab*c/;          // 使用 * 号 表示0或多个，表示有没有都行，相当于 {0, }
  var reg = / ab？c/;         // 使用？ 号 表示0或1个，表示没有或者只能出现一次，相当于 {0, 1}
  var reg = / ^a /;           // 使用^ 号 表示以a开头，与 [ ^a]不同，表示找除了a其他的字符
  var reg = / a$ /;           // 使用&号 表示以a结尾
  var reg = / ^a$/;           // 使用^开头 $结尾的 表示只能用 ^ 中间的字符 $ 出现，需要完全符合正则表达式
  var reg = / \\. /;           // 特殊符号需要用 \\作为转义字符

  [abc]                       // 查找方括号之间的任何字符。
  [^abc]                      // 查找任何不在方括号之间的字符。
  [0-9]                       // 查找任何从0至9的数字。
  [a-z]                       // 查找任何从小写a到小写z的字符。
  [A-Z]                       // 查找任何从大写A至到大写z的字符。
  [A-z]                       // 查找任何从大写A到小写z的字符。
  [abcd]                      // 查找给定集合内的任何字符。
  [^abcd]                     // 查找给定集合外的任何字符。
  (red|blue|green)            // 查找任何指定的选项。

  \\w                          // 匹配字母或数字或下划线或汉字 等价于 '[^A-Za-z0-9_]'。 \\W大写就是反过来
  \\s                          // 匹配任意的空白符, \\S大写就是反过来
  \\d                          // 匹配数字, \\D大写就是反过来
  \\b                          // 匹配单词的开始或结束, \\B大写就是反过来
  ^                           // 匹配字符串的开始
  $                           // 匹配字符串的结束
  []                          // 满足中括号中的任意一个规则就返回true，限定符，多选一
  -                           // 表示一个范围
  [^]                         // ^出现在括号中，表示取反，！
  *                           // 重复0次或n次
  +                           // 重复1次或n次
  ？                          // 重复0次或1次,多了为false
  {n}                         // 重复n次
  {n,}                        // 重复n次或者更多次
  {n,m}                       // 重复n 到 m次`)])]),n("li",null,[l(" split (); "),n("ul",null,[n("li",null,"可以将一个字符串拆分为一个数组"),n("li",null," 方法中可以传递一个正则表达式作为参数，这样方法将会根据正则表达式去拆分字符串 "),n("li",null,[l(" 例如 "),n("pre",null,[n("code",{class:"language-js line-numbers"},"  var phoneReg = / ^1[3|4|5|7|8]\\d{9}$/;")])])])]),n("li",null,[l(" 手机规则（11位） "),n("ul",null,[n("li",null,"以1开头"),n("li",null,"3 - 9任意数字"),n("li",null,"以后任意数字，长度只能9位"),n("li",null,"正则表达式写法： ^1 [3 - 9] [0-9]{9}&")]),n("pre",null,[n("code",{class:"language-js line-numbers"},"  var phoneReg = / ^1[3|4|5|7|8]\\d{9}$/;")])]),n("li",null,[l(" replace (); 可以替换字符串的内容，并返回一个新的字符串 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  str = str.replace ( /^\\s* | \\s*$ /g , '') ;   // 替换开头和结尾的空格为 空字符串
  str = str.replace ( /^\\s+ | \\s+$ /g , '') ;   // 替换开头和结尾的空格为 空字符串

  let str = "body and head";
  let newStr = str.replace('body', 'html');
  let newStr = str.replace(/body/, 'html');     // （）可以跟正则表达式
  console.log(newStr);                          // html and head`)])]),n("li",null,[l(" exec(); 获取字符串中符合正则表达式的内容 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  let str = "abcaecadcafcacc";
  let reg = /a([a-z])c/g;                 // 加了括号可以分组，且不改变原意思
  let result = reg.exec(str);             // 返回一个数组，第一个元素是匹配到的字符串，第二个元素是正则表达式的分组匹配到的内容

  while (result) {
      console.log(result[0], result[1]);  // 输出结果为  abc b     aec c  ....
      result = reg.exec(str);
  }`)])])],-1)])),_:1,__:[64]}),u(a,{id:"part14",shadow:"hover"},{default:r(()=>e[65]||(e[65]=[n("h2",null,"其他",-1),n("p",null,"简单类型和复杂类型",-1),n("ul",null,[n("li",null," 简单类型又叫做基本数据类型或者值类型，复杂类型又叫做引用类型。 "),n("li",null,[l(" 值类型： "),n("ul",null,[n("li",null,"简单数据类型/基本数据类型，在存储时变量中存储的是值本身，"),n("li",null,"因此叫做值类型string，number，boolean，undefined，"),n("li",null,"null ( typeof(返回的是一个空的对象))"),n("li",null," 如果有个变量我们以后打算存储为对象，暂时没想好放啥，这个时候就给null ")])]),n("li",null,[l(" 引用类型： "),n("ul",null,[n("li",null," 复杂数据类型，在存储时变量中存储的仅仅是地址（引用），因此叫做引用数据类型 "),n("li",null," 通过new关键字创建的对象（系统对象、自定义对象），如Object、Array、Date等 ")])])],-1),n("p",null,"堆和栈",-1),n("ul",null,[n("li",null,"堆栈空间分配区别："),n("li",null,[l(" 栈（操作系统）： "),n("ul",null,[n("li",null," 由操作系统自动分配释放存放函数的参数值、局部变量的值等。其操作方式类似于数据结构中的栈； "),n("li",null,"简单数据类型存放到栈面")])]),n("li",null,[l(" 堆（操作系统）： "),n("ul",null,[n("li",null," 存储复杂类型（对象），一般由程序员分配释放，若程序员不释放，由垃圾回收机制回收。 "),n("li",null,"复杂数据类型存放到堆里面")])]),n("li",null," 注意：JavaScript中没有堆栈的概念，通过堆栈的方式，可以让大家更容易理解代码的一些执行方式，便于将来学习其它语言 ")],-1),n("p",null,"简单类型的内存分配",-1),n("ul",null,[n("li",null," 值类型（简单数据类型）：string，number，boolean，undefined，null "),n("li",null,[l(" 值类型变量的数据直接存放在变量（栈空间）中 "),n("ul",null,[n("li",null,"简单数据类型是存放在栈里面里面直接开辟一个空间存放的是值"),n("li",null," 复杂数据类型首先在栈里面存放 地址 十六进制表示 然后这个地址指向堆里面的数据 ")])]),n("li",null,[l(" 简单类型传参 "),n("ul",null,[n("li",null," 函数的形参也可以看做是一个变量，当我们把一个值类型变量作为参数传给函数的形参时，其实是把变量在栈空间里的值 "),n("li",null," 复制了一份给形参，那么在方法内部对形参做任何修改，都不会影响到的外部变量。 ")])])],-1),n("p",null,"总结",-1),n("ul",null,[n("li",null,[l(" JS基础阶段 "),n("ul",null,[n("li",null,"我们学习的是ECMAScript标准规定的基本语法"),n("li",null,"要求同学们掌握Js基础语法"),n("li",null,"只学习基本语法，做不了常用的网页交互效果"),n("li",null,"目的是为了Js后面的课程打基础、做铺垫")])]),n("li",null,[l(" Web APIs阶段 "),n("ul",null,[n("li",null,"Web APIs是W3C组织的标准"),n("li",null,"Web APIs我们主要学习DOM和BoM"),n("li",null,"Web APIs是我们Js所独有的部分"),n("li",null,"我们主要学习页面交互功能"),n("li",null,"需要使用Js基础的课程内容做基础")])]),n("li",null," Js基础学习EcMAScript基础语法为后面作铺垫，Web APIs是Js的应用，大量使用Js基础语法做交互效果 ")],-1),n("p",null,"API 和 Web API",-1),n("ul",null,[n("li",null,[l(" API（Application Programming Interface，应用程序编程接口）是一些预先定义的函数，目的是提供应用程序与开发人员 基于某软件或硬件得以访问一组例程的能力，又无需访问源码，或理解内部工作机制的细节。 "),n("ul",null,[n("li",null," 简单理解：API是给程序员提供的一种工具，以便能更轻松的实现想要完成的功能。 ")])]),n("li",null,[l(" Web API是浏览器提供的一套操作浏览器功能和页面元素的API（BOM和DOM） "),n("ul",null,[n("li",null," 现阶段我们主要针对于浏览器讲解常用的API，主要针对浏览器做交互效果。 "),n("li",null,"比如我们想要浏览器弹出一个警示框，直接使用alert（‘弹出’）")])]),n("li",null,[l(" MDN详细 API: https://developer.mozilla.org/zh-CN/docs/Web/API "),n("ul",null,[n("li",null,"因为WebAPI很多，所以我们将这个阶段称为Web APIs")])]),n("li",null,[l(" 总结： "),n("ul",null,[n("li",null," APl是为我们程序员提供的一个接口，帮助我们实现某种功能，我们会使用就可以了，不必纠结内部如何实现 "),n("li",null," WebAPI主要是针对于浏览器提供的接口，主要针对于浏览器做交互效果。 "),n("li",null," WebAPI一般都有输入和输出（函数的传参和返回值），WebAPl很多都是方法（函数） "),n("li",null,"学习Web APl可以结合前面学习内置对象方法的思路学习")])])],-1)])),_:1,__:[65]})]),_:1},8,["data"])}}});export{J as default};
