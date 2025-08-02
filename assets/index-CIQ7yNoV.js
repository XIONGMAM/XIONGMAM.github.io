import{_ as c,E as d}from"./el-card-BC1LQGcn.js";import"./base-BOVE5efH.js";import{E as m}from"./el-link-b02lqcaU.js";import{d as r,r as p,m as g,w as t,f as i,b as l,Q as e,o as v}from"./index-rcW_pH8g.js";import"./index-BRdTUeC1.js";import"./event-BB_Ol6Sd.js";import"./icon-D8zniuSg.js";import"./style-CQyj6J43.js";import"./use-global-config-ZfVEybhJ.js";import"./index-DL17Y2WH.js";import"./index-DNrEt1wy.js";const f=r({name:"JavascriptPage"}),C=r({...f,setup(b){const u=p([{id:1,h2:"DOM"},{id:2,h2:"BOM"},{id:3,h2:"网页效果"},{id:4,h2:"其他拓展"},{id:5,h2:"本地存储"},{id:6,h2:"高级js"},{id:7,h2:"ES6"},{id:8,h2:"SVG"}]);return(y,n)=>{const o=m,s=d,a=c;return v(),g(a,{data:u.value},{svg:t(()=>n[0]||(n[0]=[l("svg",{width:"48",height:"48",t:"1699148574627",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"8149"},[l("path",{d:"M64 64h896v896H64z",fill:"#F5DE19","p-id":"8150"}),l("path",{d:"M665.888 764a91.712 91.712 0 0 0 83.2 51.2c34.88 0 57.184-17.44 57.184-41.6 0-28.8-22.912-39.104-61.312-55.904l-21.056-9.024c-60.8-25.888-101.12-58.304-101.12-126.848 0-63.136 48-111.232 123.296-111.232a124.448 124.448 0 0 1 119.744 67.424L800 580.096A57.248 57.248 0 0 0 745.952 544a36.64 36.64 0 0 0-40.288 36.096c0 25.248 15.648 35.488 51.776 51.2l21.056 9.024c71.552 30.688 112 61.952 112 132.256 0 75.808-59.552 117.344-139.52 117.344a161.76 161.76 0 0 1-153.44-86.112z m-297.44 7.296c13.216 23.456 25.248 43.296 54.176 43.296 27.648 0 45.12-10.816 45.12-52.896v-286.304h84.192v287.424c0 87.168-51.2 126.848-125.728 126.848a130.72 130.72 0 0 1-126.304-76.8z",fill:"","p-id":"8151"})],-1),l("h1",null,"Javascript II",-1)])),describe:t(()=>n[1]||(n[1]=[l("p",null," JavaScript最初是由Netscape的工程师布兰登·艾奇（Brendan Eich）在1995年设计的，最初命名为LiveScript，但为了利用当时流行的Java语言的市场效应，它被改名为JavaScript。 ",-1)])),content:t(()=>[i(s,{id:"part1",shadow:"hover"},{default:t(()=>[n[11]||(n[11]=l("h2",null,"DOM",-1)),n[12]||(n[12]=l("p",null,"简介",-1)),l("ul",null,[n[8]||(n[8]=l("li",null," 文档对象模型（Document Object Model，简称DOM），是W3C组织推荐的处理可扩展标记语言（HTML或者XML） 的标准编程接口，W3C已经定义了一系列的DOM接口，通过这些DOM接口可以改变网页的内容、结构和样式。 ",-1)),n[9]||(n[9]=l("li",null,[e(" DOM树-层级关系图： "),l("pre",null,[l("code",{class:"language-js line-numbers"},`                                  文档
                            根元素<html>
          |-------------------------|---------------------------|
    元素<head>                                              元素<body>
          |                                                     |
          |                         |---------------------------|-------------------|
    元素<title>                属性：href                     元素<a>              元素<h1>
          |                                                     |                   |
    文本：文档标题             文本：我的链接                文本：我的标题`)]),l("ul",null,[l("li",null,"文档：一个页面就是一个文档，DOM中使用 document表示"),l("li",null,"元素：页面中的所有标签都是元素，DOM中使用element表示"),l("li",null," 节点：网页中的所有内容都是节点（标签、属性、文本、注释等），DOM中使用node表示 "),l("li",null,"DOM 把以上内容都看做是对象")])],-1)),n[10]||(n[10]=l("li",null,[e(" 节点 "),l("ul",null,[l("li",null,"Node —— 构成HTML文档最基本的单元。"),l("li",null,[e(" 常用节点分为四类 "),l("ul",null,[l("li",null,"文档节点：整个HTML文档"),l("li",null,"元素节点：HTML文档中的HTML标签"),l("li",null,"属性节点：元素的属性"),l("li",null,"文本节点：HTL标签中的文本内容")])]),l("li",null,[e(" 例子： "),l("pre",null,[l("code",{class:"language-html line-numbers"},`  <a> href="www.baidu.com"> 我是一个跳转到百度的链接 </a>
  // 属性节点：www.baidu.com
  // 文本节点: 我是一个跳转到百度的链接
  // 元素节点：<a>   </a>`)])])])],-1)),l("li",null,[n[7]||(n[7]=e(" document 对象 ")),l("ul",null,[n[6]||(n[6]=l("li",null,"document对象表示的是整个网页",-1)),l("li",null,[n[5]||(n[5]=e(" document对象的原型链，父类的所有方法document对象都能使用（__proto__） ")),l("ul",null,[n[4]||(n[4]=l("li",null," HTMLDocument ==> Document ==> Node ==> EventTarget ==> Object.prototype ==> null ",-1)),l("li",null,[n[3]||(n[3]=e(" 查询文档： ")),i(o,{type:"primary",icon:"Link",target:"_blank",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Document"},{default:t(()=>n[2]||(n[2]=[e(" https://developer.mozilla.org/zh-CN/docs/Web/API/Document ")])),_:1,__:[2]})])])])])])]),n[13]||(n[13]=l("p",null,"获取元素",-1)),n[14]||(n[14]=l("ul",null,[l("li",null,[e(" （查）获取元素 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  document.getElementById();               // 获取ID
  document.getElementsByTagName()[索引号];  // 获取标签名,返回一个类数组对象，索引号
  document.getElementsByName();            // 表单 name属性获取一组元素节点对象
  document.body;                           // document中有一个属性body,它保存的就是body的引用
  document.documentElement;                // 它保存的就是html的引用,根标签
  document.all;                            // 它保存的是页面中所有元素 == document.getElementsByTagName(' * ');
  document.getElementsByClassName();       // 获取class 一组元素节点对象,IE9以上才支持
  document.querySelector();                // 需要一个选择器的字符串作为参数，只会返回第一个查到的 IE8以上才支持
  document.querySelectorAll();             // 返回所有查找到的，会返回一个集合对象，可以用展开运算符转换为数组 [...对象]
  element.tagName                          // 获取当前元素的标签名`)]),l("ul",null,[l("li",null,[e(" 子节点 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  element.childNodes;                      // 获取的是元素下的所有子节点，包括文本和换行，IE8以下结果有差异
  element.children;                        // 获取元素下的所有子元素，不包括文本和换行
  element.firstChild;                      // 包括文本和换行
  element.firstElementsChild;              // 不会包括文本和换行，不建议使用
  element.lastElementChild;                // 获取当前元素的最后一个子元素
  element.nextElementSibling               // 获取当前元素的下一个兄弟元素
  element.previousElementSibling           // 获取当前元素的前一个兄弟元素`)])]),l("li",null,[e(" 父节点和兄弟节点 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  element.parentNode;                      // 获取的是当前节点的父节点
  element.parentNode.parentNode;           // 获取的是当前节点的父节点的父节点，也就是爷爷
  element.previousSibling;                 // 获取的是当前节点的前一个兄弟节点
  element.nextSibling;                     // 获取的是当前节点的后一个兄弟节点`)])])])]),l("li",null,[e(" 注册添加事件 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  window.onload = function(){};            // 回调函数等页面加载完毕后才执行，里面放执行代码
  btn.onclick = function(){};              // 回调函数，响应函数，当点击才会执行，on要加.
                                           // 在函数内部最尾部添加一个 return false，会阻止被绑定事件的其他行`)])]),l("li",null,[e(" 增删改 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 创建元素节点，文本节点
  document.createElement( '标签名' ) ;       // 元素
  document.createTextNode( ' 内容 ' );       // 文本
  // 把新的子节点添加到指定的节点
  element.appendChild ();                   // 向父节点中添加一个子节点
  element.insertAdjacentElement();          // 向父节点中添加一个子节点，功能更强大。("参数1：插入的位置"，参数2：要插入的元素)
  element.insertAdjacentHTML();             // 向父节点中添加一个子节点，功能更强大。("参数1：插入的位置"，"参数2：插入的元素可以直接写标签 跟innerHTML一样")
  element.insertBefore (li, bj);            // 向前插入一个子节点，两个参数，第一个为新节点，第二个旧节点
  element.replaceChild (li, bj);            // 可以指定的子节点替换已有的子节点，第一个新节点，第二旧节点
  // 删除节点
  element.removeChild ();                   // 向父节点中删除一个子节点 必须找到父节点
  子节点.parentNode.removeChild ();          // 子节点.parentNode 就相当于找到了父节点，然后删除，常用
  // 替换节点
  element.replaceWith();                    // 可以替换某个节点，参数:（li）
  // 综合增加顺序
  var li = document.createElement (' li '); // 创建：
  li.innerHTML('文本内容');                  // 添加内容
  父节点.appendChild(li);                    // 父节点添加子节点`)])]),l("li",null,[e(" 操作元素 "),l("ul",null,[l("li",null,[e(" 根据ID获取 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  var div = document.getElementById('ID');   // 使用方法可以获取带有ID的元素对象。

  /* 1. 因为我们文档页面从上往下加载，所以先得有标签所以我们script写到标签的下面
     2. get获得，element元素，by通过驼峰命名法
     3. 参数id是大小写敏感的字符串
     4. 返回的是一个元素对象
     注意： getElementById ('必须是字符串，记得加引号'); */
                  `)])]),l("li",null,[e(" 根据标签名获取 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  var div = document.getElementsByTagName("p");  // 返回的是获取过来元素对象的集合以伪数组的形式存储
  console.log(div[0]);                           // 因为是数组存储，所以用数组方式查看元素
  for (var i = 0; i < div.length; i++) {         // 一次查看一个 如果需要查看多个，可以用数组遍历
      console.log(div[i]);
  }

  /* 得到元素对象动态的，不管你删除还是增加都是可以的
     如果页面中只有一个元素，返回的还是伪数组的形式
     如果页面中没有元素，则返回空的 伪数组
     使用 element.getElementsByTagName (' 标签名'); 获取某个元素（父元素）内部所有指定标签名的子元素。
     注意：父元素必须是单个对象（必须指明是哪一个元素对象）.获取的时候不包括父元素自
     例如：                                                                */

      var ol= document.getElementByTagName ("ol");
      console.log (ol[0].getElementByTagName('li') ) ;   // 获取ol下的 li`)])]),l("li",null,[e(" 通过HTML5新增的方法获取，pc端需要考虑兼容性 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  document.getElementsByClassName(' 类名 ');    // 根据类名返回元素对象集合
  document.querySelector(' 选择器 ');           // 根据指定选择器返回第一个元素对象， 选择器要加符号，.box #box
  document.querySelectorAll(' 选择器 ');        // 根据指定选择器返回所有的元素对象集合`)])]),l("li",null,[e(" 特殊元素获取 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  var bodyEle = document.body;                 // 获取body 元素: 返回body 元素对象
  var bodyEle = document.documentElement;      // 获取html 元素： 返回html 元素对象`)])])])])],-1)),n[15]||(n[15]=l("p",null,"事件基础 (是由三部分组成)",-1)),n[16]||(n[16]=l("ul",null,[l("li",null," JavaScript使我们有能力创建动态页面，而事件是可以被JavaScript侦测到的行为。 简单理解：触发---响应机制。 网页中的每个元素 都可以产生某些可以触发JavaScript的事件，例如，我们可以在用户点击某按钮时产生一个事件 "),l("li",null,[e(" 事件是由三部分组成 事件源 事件类型 事件处理程序 我们也称为事件三要素 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 事件源：事件被触发的对象，谁？ 比如按钮
    var btn = document . getElementById ( ' btn ' ) ;

  // 事件类型： 如何触发 什么事件 比如鼠标点击onclick ，还是鼠标经过hover ，还是键盘按下
    var btn = document.getElementById(' btn ');
    btn.onclick = function () {}

  // 事件处理程序： 通过一个函数赋值的方式 完成
    btn.onclick = function () {
        alert(' 你好 ');
    }`)])]),l("li",null,[e(" 事件执行步骤 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 1. 获取事件源
    var div = document.querySelector(' div ');
  // 2. 注册事件（绑定事件）
    div.onclick
  // 3. 添加事件处理程序（采取函数赋值形式）
    div.onclick = function () {
        alert(' 我被选中了');
    }`)])]),l("li",null,[e(" 常用事件 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  div.onclick = function(){};                 // 鼠标点击左键触发
  div.onmouseover = function(){};             // 鼠标经过触发
  div.onmouseout = function(){};              // 鼠标离开触发
  div.onfocus = function(){};                 // 获得鼠标焦点触发
  div.onblur = function(){};                  // 失去鼠标焦点触发
  div.onmousemove = function(){};             // 鼠标移动触发
  div.onmouseup = function(){};               // 鼠标弹起触发
  div.onmousedown = function(){};             // 鼠标按下触发
  div.onmouseenter = function(){};            // 鼠标经过触发
  div.onmouseleave= function(){};             // 鼠标离开触发

  /*
    mouseenter 和 mouseover 的区别
        1. 当鼠标移动到元素上时就会触发mouseenter事件
        2. 类似mouseover，它们两者之间的差别是：
           mouseover 鼠标经过自身盒子会触发，经过子盒子还会触发。
           mouseenter 只会经过自身盒子触发。
        3. 之所以这样，就是因为 mouseenter 不会冒泡
        4. 跟mouseenter搭配鼠标离开mouseleave同样不会冒泡，常用
  */`)])]),l("li",null,[e(" 移动端包含 "),l("ul",null,[l("li",null," click事件：单击事件，类似于PC端的click，但在移动端中，连续click的触发有200ms ~ 300ms的延迟 "),l("li",null,[e(" touch类触摸事件 "),l("ul",null,[l("li",null,"touchstart： 手指触摸到屏幕会触发"),l("li",null,"touchmove： 当手指在屏幕上移动时，会触发"),l("li",null,"touchend： 当手指离开屏幕时，会触发"),l("li",null," touchcancel： 可由系统进行的触发，比如手指触摸屏幕的时候，突然alert一下，或者系统中其他打断了touch的行为，可以触发 ")])]),l("li",null,[e(" tap类事件: 触碰事件，我目前还不知道它和touch的区别，一般用于代替click事件， "),l("ul",null,[l("li",null,"tap: 手指碰一下屏幕会触发"),l("li",null,"longTap: 手指长按屏幕会触发"),l("li",null,"singleTap: 手指碰一下屏幕会触发"),l("li",null,"doubleTap: 手指双击屏幕会触发")])]),l("li",null,[e(" swipe类事件: "),l("ul",null,[l("li",null,"swipe： 手指在屏幕上滑动时会触发"),l("li",null,"swipeLeft： 手指在屏幕上向左滑动时会触发"),l("li",null,"swipeRight： 手指在屏幕上向右滑动时会触发"),l("li",null,"swipeUp： 手指在屏幕上向上滑动时会触发"),l("li",null,"swipeDown： 手指在屏幕上向下滑动时会触发")])])])])],-1)),n[17]||(n[17]=l("p",null,"操作元素",-1)),n[18]||(n[18]=l("ul",null,[l("li",null,[e(" JavaScript的DOM操作可以改变网页内容、结构和样式，我们可以利用DOM操作元素来改变元素里面的内容、属性等。注意以下都是属性 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  var div = document.querySelector("div");
  // 改变元素内容：
     div.innerText = "";   // 不识别html标签 非标准 从起始位置到终止位置的内容，但它去除html标签，同时空格和换行也会去掉
     div.innerHTML = "";   // 识别 html标签  标准  起始位置到终止位置的全部内容，包括html标签，同时保留空格和换行
     div.textContent ="";  // 等同于innerText，但是会考虑标签的css样式，而innerText会考虑，不考虑css会提供性能。它能识别html标签，但是不添加代码，只显示代码字符串。包括html标签，同时保留空格和换行

  // 案例：
      <!-- 当我们点击了按钮，文字会发生变化 -->
      <button>显示当前系统时间</button>
      <div>某个时间</div>

      <script>
          // 获取元素
          var btn = document.querySelector('button');
          var div = document.querySelector('div');
          // 添加注册事件（绑定事件）
          btn.onclick = function() {
              // div.innerHTML = ('123');                    // 点击直接传入 一个参数
              div.innerText = getTime();                     // 调用封装好的时间函数
          }
          function getTime() {
              var a = new Date();
              var Year = a.getFullYear();
              var Month = a.getMonth() + 1;                  // 要 +1
              var mDate = a.getDate();
              var day = a.getDay();
              var arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
              // 这里注意，数组中第一个必须写星期日，因为获取是从 0  1 2 3 4 5 6来获取的，0是星期日
              var Hours = a.getHours();
              var Minutes = a.getMinutes();
              var Seconds = a.getSeconds();
              return '今天是：' + Year + '年' + Month + '月' + mDate + '日，' + arr[day] + '' + Hours + ':' + Minutes + ':' + Seconds;;
              return
          }
      <script>

   // 我们元素可以不用添加事件，直接给函数调用
      // 1、首选还是要先获取当前元素
         var p = document.querySelector('p');                // 注意大小写
      // 2、直接赋值
         p.innerText = getTime();                            // 这样程序直接执行

  // innerText  和  innerHTML  区别：
      // 1、innerText 是不识别html 标签的 但是 innerHTML是会识别html标签的

      <div>某个时间</div>
      <p>123</p>
      <script>
          // 获取元素
          var div = document.querySelector('div');
          var p = document.querySelector('p');
          div.innerText = '<strong> 我想加粗 </strong>';  // 输出   <strong> 我想加粗 </strong>
          p.innerHTML = '<strong> 我想加粗 </strong>';    // 输出   我想加粗
      <\/script>

  // 2、 这两个属性是可读写的可以获取元素里面的内容，但是 innerText 会去掉空格和换行, innerHTML 会保留
      <div>
          某个时间
          <span>123</span>
      </div>
      <p>123</p>
      <script>
          // 获取元素
          var div = document.querySelector('div');
          var p = document.querySelector('p');
          console.log(div.innerText);                         // 输出    某个时间 123
          console.log(div.innerHTML);                         // 输出    某个时间
      <\/script>
                                                              // <span>123</span> 会保留换行，标签和空格`)])]),l("li",null,[e(" 常用元素的属性操作 "),l("ul",null,[l("li",null,"innerText、innerHTML改变元素内容"),l("li",null,"src、href"),l("li",null,"id、alt、title")])]),l("li",null,[e(" 操作 img 的src 和 title 属性： "),l("pre",null,[l("code",{class:"language-html line-numbers"},`  <button> class="ldh">刘德华</button>
  <button> class="zxy">张学友</button>
  <br>
  <img src="./images/img.gif" alt="" title="刘德华">
  <script>>
      // 获取元素
      var ldhBtn = document.querySelector('.ldh');
      var zxyBtn = document.querySelector('.zxy');
      var img = document.querySelector('img');
      // 注册事件  并处理程序
      zxyBtn.onclick = function() {
          img.src = 'images/icons.png';       // 点击后谁的什么做出反应，是img的src变化
          img.title = '张学友';
      }
      ldhBtn.onclick = function() {
          img.src = 'images/img.gif';         // 解读为  元素自带的什么属性  进行操作
          img.title = '刘德华';
      }
  <\/script>

  /*
  案例：
      根据不同时间，页面显示不同图片，同时显示不同的问候语。如果上午时间打开页面，显示上午好，显示上午的图片。
      如果下午时间打开页面，显示下午好，显示下午的图片。如果晚上时间打开页面，显示晚上好，显示晚上的图片。

  分析：
      1、根据系统不同时间来判断，所以需要用到日期内置对象
      2、利用多分支语句来设置不同的图片
      3、需要一个图片，并且根据时间修改图片，就需要用到操作元素src属性
  */
  <img src="./images/img.gif" alt="" title="上午好">
  <div>上午好</div>
  <script>>
      var img = document.querySelector('img');
      var div = document.querySelector('div');
      // 得到当前的小时数
      var date = new Date();
      var h = date.getHours();                // 得到当前系统时间
      // 判断小时数来改变图片和文字信息
      if (h < 12) {
          img.src = './images/img.gif';
          img.title = '上午好';
          div.innerHTML = '上午好';
      } else if (h < 18) {
          img.src = './images/icons.png';
          img.title = '下午好';
          div.innerHTML = '下午好';
      } else {
          img.src = './images/img.gif';
          img.title = '晚上好';
          div.innerHTML = '晚上好';
      }
  <\/script>`)])]),l("li",null,[e(" 表单元素的属性操作 "),l("ul",null,[l("li",null,[e(" 利用DOM可以操作如下表单元素的属性： type、value、checked、selected、disabled "),l("pre",null,[l("code",{class:"language-html line-numbers"},`  <button>按钮</button>
  <input type="text" value="1">
  <script>
      var btn = document.querySelector('button');
      var input = document.querySelector('input');
      // 绑定时间 处理程序
      btn.onclick = function() {
         *input.innerHTML = '这样写是不起作用的';          // 因为HTML是操作普通盒子，div标签里的内容
          input.value = '表单里面的value';               // 点击后修改value值
      }
  <\/script>

  // 如果想要某个表单被禁用，不能被点击 disabled ，我们想要按钮 button禁用
    btn.onclick = function() {
       * input.innerHTML = '这样写是不起作用的';           // 因为HTML是操作普通盒子，div标签里的内容
         input.value = '表单里面的value';                // 点击后修改value值
         btn.disabled = true;                           // 关 ，此时按钮就是灰色不能点击的状态了
       * this.disabled = true;                          // 这个方法也可以达到同样效果 ，this 是指向事件函数的调用者
    }

  /* 案例：点击按钮将密码框切换为文本框，并可以查看密码明文
      1、核心思路：点击眼睛按钮，把密码框类型改为文本框就可以看见里面的密码
      2、一个按钮两个状态，点击一次，切换为文本框，继续点击一次切换为密码框
      3、算法：利用一个flag变量，来判断flag的值，如果是1就切换为文本框，flag设置为0，如果是0就切换为密码框，flag设置为1
  */
  <style>
      .box {position: relative; width: 400px;border-bottom: 1px solid red;margin: 100px auto;}
      .box input {width: 370px;height: 30px;border: 0;outline: none;}
      .box img {width: 24px;position: absolute;top: 0; right: 10px;}
  </style>
  <title>Document</title>

  <body>
    <div class="box">
        <label for="">
            <img src="images/close.png" alt="" id='eye'>
        </label>
        <input type="password" name="" id="pwd">
    </div>
    <!-- js -->
    <script>
        1、 先获取元素
        var eye = document.getElementById('eye');
        var pwd = document.getElementById('pwd');
        2、绑定事件  处理程序
        var flag = 0;             // 定义一个变量
        eye.onclick = function() {
            if (flag == 0) {
                eye.src = 'images/open.png';
                pwd.type = 'text';
                flag = 1;         // 赋值操作
            } else {
                eye.src = 'images/close.png';
                pwd.type = 'password';
                flag = 0;         // 如果flag 不等于0，则进入次程序
            }
        }
    <\/script>
  </body>`)])])])]),l("li",null,[e(" 样式属性操作，我们可以通过 JS 修改元素的大小、颜色、位置等样式 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 例子：
    var div = document.querySelector("div");
    div.currentStyle."style"
    var a = div.currentStyle.width;  // 只有IE浏览器有用，其他的浏览器都没用 ,只读，不能修改

  // 其他浏览器获取方式
  // 一般情况下传两个参数，第一个是要获取样式的元素，第二个传递伪元素 ，一般都传null，只读，不能修改
    var b = getComputedStyle ( element , null);
    var b = getComputedStyle ( div , null);
    console.log(b.width)             // 拿到的样式宽度都是当前显示的宽度，带单位的，不考虑内联样式

  // 兼容性写法
    // 封装一个兼容性函数，来解决不兼容问题，判断条件中也可以使用三元表达式来写
    function getStyle(obj, name) {
        if (window.getComputedStyle) {
            // 正常浏览器的方式，具有get....方法
            return getComputedStyle(boj, null)[name];
        } else {
            // IE8的方式，没有get...方法
            return currentStyle[name];
        }
    };
    getStyle(box, 'width');                             // 调用函数`)]),l("ul",null,[l("li",null,"element.style 行内样式操作"),l("li",null,"element.className 类名样式操作"),l("li",null," 注意里面的属性采取驼峰命名法，如 background-color = backgroundColor "),l("li",null," 权重问题：js 修改了样式是相当于行内样式，比css 样式内嵌样式都要权重高 ")]),l("pre",null,[l("code",{class:"language-html line-numbers"},`  <style>
      .box {width: 400px;height: 400px;background-color: skyblue;margin: 100px auto;}
  </style>

  //--------------------------------------------------------html + js
  <div> class="box"> </div>
  <!-- js -->
  <script>>
  // 获取元素
  var div = document.querySelector('div');
  // 绑定事件  处理程序
  var flag = 0
  div.onclick = function() {
      if (flag == 0) {
          div.style.backgroundColor = 'red';      // 这个的样式，背景颜色改为 red
          div.style.width = '200px';              // 可以改变任何属性
          flag = 1;                               // 赋值操作 ,如果再点击一次，flag等于1 判断，则到 else
      } else {
          div.style.backgroundColor = 'skyblue';  // 这个的样式，背景图片改为 red
          flag = 0;                               // 点击后，重新赋值为 0，这样就可以实现切换效果
      }
  }
  <\/script>`)])]),l("li",null,[e(" 案例 "),l("pre",null,[l("code",{class:"language-html line-numbers"},`  <!-- 案例1：淘宝点击关闭二维码

      思路：
           当鼠标点击二维码关闭按钮的时候，则关闭整个二维码。（自己做了关闭打开两个按钮）
      核心思路：
        1. 利用样式的显示和隐藏完成，display: none隐藏元素, display: block 显示元素,
            visibility:hidden; 隐藏, visibility:initial; 显示。
        2. 先有一个大盒子装文字和图片，然后关闭按钮用定位，定到左上角
  -->
  <style>
      .box { width: 400px;height: 400px;background-color: skyblue;margin: 100px auto;visibility: initial;          }
  </style>
  //------------------------------------------------
  <button id='close'>关闭</button>
  <button id='open'>打开</button>
  <div class="box"> </div>
  <!-- js -->
  <script>
      // 获取元素
      var div = document.querySelector('div');
      var btn1 = document.getElementById('close');
      var btn2 = document.getElementById('open');

      // 绑定事件  处理程序
      btn1.onclick = function() {
          div.style.visibility = 'hidden';
      }
      btn2.onclick = function() {
          div.style.visibility = 'initial';
      }
  <\/script>

  <!-- 案例2：循环精灵图背景- 可以利用for 循环设置一组元素的精灵图背景
      分析：
          首先精灵图图片排列有规律的
          核心思路： 利用for循环修改精灵图片的背景位置background-position
          精灵图记得做图的时候要一列竖图，每个图片与每个图片的的间距是一样的，好计算
  -->
  <div>
    <ul>
      <li> </li><li> </li><li> </li><li> </li><li> </li><li> </li>
      <li> </li><li> </li><li> </li><li> </li><li> </li><li> </li><li> </li>
    </ul>
  </div>
  <script>
     // 获取元素 所有的li
     var lis = document.querySelectorAll('li');                    // 所有的li
     // 绑定事件  处理程序
     for (var i = 0; i < lis.length; i++) {                     // 让索引号乘以44,(精灵图Y坐标,一列竖图)就是每个li的背景Y坐标
         var index = i * 44;                                       // index就是我们的Y坐标
         lis[i].style.backgroundPosition = '0 -' + index + 'px';   // 因为精灵图坐标是负值，所以字符串加上  - 不能漏，还有单位
     }
  <\/script>`)])])],-1)),n[19]||(n[19]=l("p",null,"显示隐藏文本框内容 (获得焦点onfocus 失去焦点onblur)",-1)),n[20]||(n[20]=l("pre",null,[l("code",{class:"language-js line-numbers"},`  /* 当鼠标点击文本框时，里面的默认文字隐藏，当鼠标离开文本框时，里面的文字显示。
      1、首先表单需要2个新事件，获得焦点onfocus 失去焦点onblur
      2、如果获得焦点，判断表单里面内容是否为默认文字，如果是默认文字，就清空表单内容
      3、如果失去焦点，判断表单内容是否为空，如果为空，则表单内容改为默认文字
  */
  <input type="text" value="手机" name="" id="">

  // 获取元素
  var text = document.querySelector('input');
  // 注册事件，获取焦点事件，onfocus
  text.onfocus = function() {
          if (this.value === '手机') {         // 如果这个value =手机，
              this.value = '';                // 那么value为空
          }
          this.style.color = 'rgb(7, 7, 7)';  // 获得焦点，需要把文本框的文字变黑
      }
      // 注册事件，获取失去焦点事件，onblur
  text.onblur = function() {
      if (this.value === '') {                // 如果这个value = 空，
          this.value = '手机';                 // 那么value为‘手机’
      }
      this.style.color = '#ccc';              // 失去焦点，需要把文本框的文字变回原来颜色
  }`)],-1)),n[21]||(n[21]=l("p",null,"类名样式操作 (element.className)",-1)),n[22]||(n[22]=l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 样式写成CSS，想变化就JS更改类名，使用方法：
  // 1、先建立一个要变化的类名和样式
      .classStyle {
          background-color: red;
          font-size: 16px;
          margin-top: 10px;
      }
  // 2、用js 来调用，先不需要使用，当点击后才开始使用，相当于让当前元素改了新样式的类名，把原来的类名更换成新的
      div.onclick = function () {
          this.className = ' classStyle';
      }
      // 这样就比element.style 方便多了，样式较多且复杂就可以使用 className，简单则用style

  // 注意：添加JS 修改的类名后，会覆盖原类名，如果想要增加且不覆盖，使用以下方法：
      this. className = ' 原先类名 新增类名';         // 就是把原先的保留，然后空格写修改的新类名`)],-1)),n[23]||(n[23]=l("ul",null,[l("li",null,[e(" 案例： "),l("pre",null,[l("code",{class:"language-html line-numbers"},`  // 案例1：密码验证案例
  /* 1、首先判断的事件是表单失去焦点onblur
     2、如果输入正确则提示正确的信息颜色为绿色小图标变化
     3、如果输入不是6到16位，则提示错误信息颜色为红色小图标变化
     4、因为里面变化样式较多，我们采取className修改样式  */
      .message {
          display: inline-block;font-size: 12px; color: #999; background: url(images/mess.png) no-repeat left center;padding-left: 20px;
      }

      .wrong {
          color: red;background: url(images/wrong.png) no-repeat left center;
      }

      .right {
          color: green; background: url(images/mess.png) no-repeat left center;
      }
  //--------------------------------------------------------------------
    <div>
        <input type="password" value="" name="" class='ipt'>
        <p class='message'>请输入6~16位密码</p>
    </div>
    <script>
        var ipt = document.querySelector('.ipt');
        var message = document.querySelector('.message');
        //绑定事件  添加处理程序 失去焦点
        ipt.onblur = function() {
            // 如果ipt的长度小于6 或者 ipt的长度大于了16
            if (this.value.length < 6 || this.value.length > 16) {
                message.className = 'message wrong';     // 添加一个错误后的样式
                message.innerHTML = '输入的位置不对，要求6~16位'
            } else {
                message.className = 'message right';    // 添加一个正确后的样式
                message.innerHTML = '输入正确'
            }
        }
    <\/script>

  /* 案例2：世纪佳缘用户名显示隐藏内容 ： https://www.jiayuan.com/  */
  <style>
    input {
        outline: none;border: 1px solid #ccc;
    }
    .input_box {
        font-size: 12px;
    }
    .ipt_text,
    .pwd {
        color: #999;
    }
  </style>
  //-------------------------------------------------------------------
  <div> class="input_box">
      <input type="text" class='ipt_text' value="邮箱/ID/手机">
      <input type="text" name="" id="" class="pwd" value="密码">
  </div>
  <script>>
      //获取元素
      var ipt = document.querySelector('.ipt_text');
      var pwd = document.querySelector('.pwd');
      //绑定事件，添加处理程序
      ipt.onfocus = function() {
          if (this.value === '邮箱/ID/手机') {
              this.value = '';
          }
          this.style.color = 'black';           // 输入时文字变黑
          this.style.borderColor = 'pink';      // 当点击后，边框变为粉色
      }
      ipt.onblur = function() {
          if (this.value === '') {
              this.value = '邮箱/ID/手机';
              this.style.color = '#999';
          }
          this.style.borderColor = '#ccc'
      }
      pwd.onfocus = function() {
          if (this.value === '密码') {
              this.value = '';
          }
          this.style.color = 'black';
          this.type = 'password';               // 当获得焦点，类型转换成密码框
          this.style.borderColor = 'pink';      // 当点击后，边框变为粉色
      }
      pwd.onblur = function() {
          if (this.value === '') {
              this.value = '密码';
              this.type = 'text';               // 当失去焦点时，且内容为空，类型转换成文本框
              this.style.color = '#999';
          }
          this.style.borderColor = '#ccc'
      }
  <\/script>

  /* 案例3：京东关闭广告（直接隐藏即可） */
  <style>
    * {margin: 0;padding: 0;}
    .adv {
        position: relative;
        width: 100%;
        height: 120px;
        background-color: skyblue;
    }
    button {
        width: 20px;
        height: 20px;
        color: lightcoral;
        border: 0;
        border-radius: 5px;
        position: absolute;
        top: 5px;
        right: 10px;
    }
  </style>
  //-------------------------------------------------
  <div class="adv">
      <button>X</button>
  </div>
  <script>
      // 获取元素
      var adv = document.querySelector('.adv');
      var btn = document.querySelector('button');
      // 绑定事件，添加处理程序
      btn.onclick = function() {
          adv.style.display = 'none';
      }
  <\/script>

  /* 案例4：新浪下拉菜单（微博即可） */
  <style>
    * {padding: 0;margin: 0;
    }
    .nav li {margin-right: 30px;float: left;width: 100px;height: 20px;border: 1px solid red;list-style: none;
    }
    .nav li ul {display: none;list-style: none;
    }
    .nav li ul li {border: 1px solid rgb(143, 58, 241);
    }
  </style>
  <ul class="nav">
      <li>导航1
          <ul>
              <li>子菜单1</li>
              <li>子菜单2</li>
              <li>子菜单3</li>
              <li>子菜单4</li>
              <li>子菜单5</li>
              <li>子菜单6</li>
          </ul>
      </li>
      <li>导航2 ...
      </li>
      <li>导航3 ...
      </li>
  </ul>
  <script>>
      //获取元素
      var nav = document.querySelector('.nav');
      var lis = nav.children; //得到四个li
      //循环绑定事件
      for (var i = 0; i < lis.length; i++) {
          lis[i].onmouseover = function() {
              this.children[0].style.display = 'block'; // li下的第几个孩子就写几
          }
          lis[i].onmouseout = function() {
              this.children[0].style.display = 'none';  // li下的第几个孩子就写几
          }
      }
  <\/script>

  /* 案例5：开关灯案例（见素材）
  <style>
    body {background-color: black;}       // 这一步是可以省略的，多余了
  </style>
  </head>

  <body>
  <button>开关灯</button>
  <script>
      // 获取元素
      var btn = document.querySelector('button');
      var body = document.querySelector('body');
      // 绑定事件  添加处理程序
      flag = 0;                          // 定义一个变量接收值
      btn.onclick = function() {
          if (flag == 0) {
              body.style.backgroundColor = '#fff';
              flag = 1;
          } else {
              body.style.backgroundColor = 'black';
              flag = 0;
          }
      }
  <\/script>

  // 另一种写法，老师写的
  <button id="btn">开关灯</button>
  <script>
      var btn = document.getElementById('btn');
      var flag = 0;
      btn.onclick = function() {
          if (flag == 0) {
              document.body.style.backgroundColor = 'black';  // 意思为文档下的body的样式，背景颜色 改为黑色
              flag = 1;
          } else {
              document.body.style.backgroundColor = '#fff';
              flag = 0;
          }
      }
  <\/script>

  /* 案例6：百度换肤 */
  // 1、这个案例练习的是给一组元素注册事件
  // 2、给4个小图片利用循环注册点击事件
  // 3、当我们点击了这个图片，让我们页面背景改为当前的图片
  // 4、核心算法：把当前图片的src路径取过来，给body做为背景即可
    body {
        background: url(images/img.gif)no-repeat center top;
    }
    ul li {
        display: block;float: left;width: 120px;height: 30px;
        border: 1px solid #999;text-align: center;line-height:
        30px;font-size: 12px;border-radius: 15px;margin: 0 10px;
    }
    ul li:hover {
        border-color: lightskyblue;
    }
//-------------------------------------------------------------------
    <ul>
        <li><img src="images/close.png" alt=""></li>
        <li><img src="images/open.png" alt=""></li>
        <li><img src="images/mess.png" alt=""></li>
    </ul>
    <script>
        // 获取元素 ul 下的 img
        var imgs = document.querySelector('ul').querySelectorAll('img');
        console.log(imgs);
        // 绑定事件，添加处理程序
        for (var i = 0; i < imgs.length; i++) {
            imgs[i].onclick = function() {
                // this.src 就是我们点击图片的路径   images/2.jpg
                // this 获取当前src  的路径
                // 把这个路径this.src给body就可以了
                document.body.style.backgroundImage = 'url(' + this.src + ')';
                // 如果背景图片没有铺满，需要加个css 样式
            }
        }
    <\/script>

  // 案例7：隔行变色
  /*
    用到新的鼠标事件 鼠标经过onmouseover  鼠标离开onmouseout
    核心思路：  鼠标经过tr行，当前的行变背景颜色，鼠标离开去掉当前的背景颜色
    注意：     第一行（thead里面的行）不需要变换颜色，因此我们获取的是tbody里面的行
  */
  <style>
      table {width: 800px;margin: 100px auto; text-align: center;border-collapse: collapse;font-size: 14px;}
      thead tr {height: 30px; background-color: skyblue;}
      tbody tr {height: 30px;}
      tbody td { border-bottom: 1px solid #d7d7d7; font-size: 12px; color: blue;}
      .bg { background-color: pink;}
  </style>

  <body>
    <table>
        <thead>        // 表 头
            <tr>
                <th>代码</th>
                <th>名称</th>
                <th>最新公布净值</th>
                <th>累计净值</th>
                <th>前单位净值</th>
                <th>净值增长率</th>
            </tr>
        </thead>
        <tbody>        // 表 身体
            <tr>
                <td>003526</td>
                <td>农银金穗3个月定期开放债券</td>
                <td>1.075</td>
                <td>1.079</td>
                <td>1.074</td>
                <td>+0.047%</td>
            </tr>
            <tr>...
            </tr>
            <tr>...
            </tr>
            <tr>...
            </tr>
            <tr>...
            </tr>
            <tr>...
            </tr>
        </tbody>
    </table>
  </body>
  //------------------------------------------------------------------------------
  <script>
      // 获取元素  获取的是tbody 里面的所有行
      var trs = document.querySelector('tbody').querySelectorAll('tr');
      // 绑定事件，添加处理程序
      for (i = 0; i < trs.length; i++) {      //循环
          trs[i].onmouseover = function() {
              this.style.backgroundColor = 'red';
              // 另一种写法：添加一个样式的css 类名，然后调用
              // this.className = 'bg';      //当鼠标经过，添加 bg类名的css样式
          }
          trs[i].onmouseout = function() {
              this.style.backgroundColor = '';
              // 当鼠标离开的时候为空
              // this.className = '';
          }
      }
  <\/script>

  /* 案例8：表单全选，取消全选 */
  // 1、全选和取消全选做法：让下面所有复选框的checked属性（选中状态）跟随全选按钮即可
  // 2、下面复选框需要全部选中，上面全选才能选中做法：给下面所有复选框绑定点击事件
  // 3、每次点击，都要循环查看下面所有的复选框是否有没选中的，如果有一个授选中的，上面全选就不选中。
  <div class="wrap">
      <table>
          <thead>
              <tr>
                  <th>
                      <input type="checkbox" id="j_cbAll" />
                  </th>
                  <th>商品</th>
                  <th>价钱</th>
              </tr>
          </thead>
          <tbody id="j_tb">
              <tr>
                  <td>
                      <input type="checkbox" />
                  </td>
                  <td>iPhone8</td>
                  <td>8000</td>
              </tr>
              <tr>
                  <td>
                      <input type="checkbox" />
                  </td>
                  <td>iPad Pro</td>
                  <td>5000</td>
              </tr>
              <tr>
                  <td>
                      <input type="checkbox" />
                  </td>
                  <td>iPad Air</td>
                  <td>2000</td>
              </tr>
              <tr>
                  <td>
                      <input type="checkbox" />
                  </td>
                  <td>Apple Watch</td>
                  <td>2000</td>
              </tr>
          </tbody>
      </table>
  </div>
  <script>
      // 1、全选和取消全选做法：让下面所有复选框的checked属性（选中状态）跟随全选按钮即可
      // 获取元素
      var j_cbAll = document.getElementById('j_cbAll');
      // j_tb 下的所以按钮
      var j_tbs = document.getElementById('j_tb').getElementsByTagName('input');
      // 注册事件
      j_cbAll.onclick = function() {
              // this.checked 可以得到当前的复选框状态，当选中为true,没选中为false
              // 循环，遍历每个body下的复选框
              for (var i = 0; i < j_tbs.length; i++) {
                  j_tbs[i].checked = this.checked;
              }
          }
          //2、下面复选框需要全部选中，上面全选才能选中
      for (var i = 0; i < j_tbs.length; i++) {
          j_tbs[i].onclick = function() {
              var flag = true; //新建一个存储变量
              // 每次点击下面的复选框都要循环检查4个小按钮是否全被选中
              for (var i = 0; i < j_tbs.length; i++) {
                  // 判断，取反，如果j_tbs里的复选框没有被选中，那么变量为false
                  if (!j_tbs[i].checked) {
                      flag = false;
                      break; // 如果有一个没有选中，则退出此循环，提高执行效率
                  }
              }
              j_cbAll.checked = flag;
          }
      }
  <\/script>
  `)])]),l("li",null,[e(" 总结：操作元素就是DOM核心内容 "),l("ul",null,[l("li",null,"操作元素内容 ： innerText innerHTML"),l("li",null,"操作常见元素属性 ： src href title alt"),l("li",null,"操作表单元素属性 ： type value disabled"),l("li",null,"操作元素样式属性 ： element.style className")])])],-1)),n[24]||(n[24]=l("p",null,"自定义属性的操作",-1)),n[25]||(n[25]=l("pre",null,[l("code",{class:"language-html line-numbers"},`  // 1、获取属性值   element.属性
  <div style="font-size: 20px;" id="demo">123</div>
  <script>
      var div = document.querySelector('div');
      console.log(div.style);
      console.log(div.id);
  <\/script>

  // element.getAttribute (' 属性'); 解释：得到 某个的属性
  console.log(div.getAttribute('id'));
  console.log(div.getAttribute('style'));

  // 区别：
      element.属性 获取内置属性值（元素本身自带的属性）
      element.getAttribute（属性）; 主要获得自定义的属性（标准）我们程序员自定义的属性

  // 2、获取H5自定义属性
      *、兼容性获取 element.getAttribute（‘data-index'）； // 推荐使用
      *、H5新增 element.dataset.index 或者 element.dataset[index] ie 11才开始支持，还必须是获取 data - 开头的
  <div getTime='20' data-index = '2' data-list-name="andy">123</div>

  console.log(div.getAttribute('getTime'));
  console.log(div.dataset);                            // dataset是一个集合里面存放了所有以 data 开头的自定义属性
  console.log(div.dataset['index']);
  console.log(div.dataset.index);                      // 不用加data
  console.log(div.dataset('getTime'));

  // 注意，命名规范，如果有 - 分开的，使用dataset时，使用驼峰命名`)],-1)),n[26]||(n[26]=l("ul",null,[l("li",null,[e(" 设置属性 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  element.属性= ' 值 ';                // 设置内置属性值。
  element.setAttribute('属性','值');

  div.id = 'demo2';
  div.setAttribute('index', 2)
  div.setAttribute('class', 'nav')
  div.className = 'nav1';`)])]),l("li",null,[e(" 演示 "),l("pre",null,[l("code",{class:"language-html line-numbers"},`  <a> href="#" class="link" data-param1="value1" data-param2="value2">Link 1</a>
  <a> href="#" class="link" data-param1="value3" data-param2="value4">Link 2</a>
  <a> href="#" class="link" data-param1="value5" data-param2="value6">Link 3</a>

  <script>
    const links = document.querySelectorAll('.link');

    links.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const param1 = link.getAttribute('data-param1');
        const param2 = link.getAttribute('data-param2');
        console.log(param1, param2);
      });
    });
  <\/script>`)])])],-1)),n[27]||(n[27]=l("p",null,"节点操作",-1)),n[28]||(n[28]=l("ul",null,[l("li",null,[e(" 获取元素通常使用两种方式 "),l("ul",null,[l("li",null,[e(" 1. 利用DOM提供的方法获取元素 缺点：逻辑性不强、繁琐 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  document.getElementById();
  document.getElementsByTagName();
  document.querySelector();`)])]),l("li",null,[e(" 2. 利用节点层级关系获取元素 "),l("ul",null,[l("li",null,"利用父子兄节点关系获取元素"),l("li",null,"逻辑性强，但是兼容性稍差")])]),l("li",null," 这两种方式都可以获取元素节点，我们后面都会使用，但是节点操作更简单 ")])]),l("li",null," 网页中的所有内容都是节点（标签、属性、文本、注释等），在DOM中，节点使用node来表示。 "),l("li",null,[e(" HTML DOM树中的所有节点均可通过JavaScript进行访问，所有HTML元素（节点）均可被修改，也可以创建或删除。 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`                          文档
                      根元素<html>
  |-------------------------|---------------------------|
  元素<head>                                         元素<body>
  |                                                     |
  |                         |---------------------------|-------------------|
  元素<title>            属性：href                   元素<a>             元素<h1>
  |                                                     |                   |
  文本：文档标题                                   文本：我的链接        文本：我的标题

  /*
    一般地，节点至少拥有nodeType（节点类型）、nodeName（节点名称）和  nodeValue（节点值）这三个基本属性。
        元素节点   nodeType为1       nodeName: "div"
        属性节点   nodeType为2       nodeType: "1"
        文本节点   nodeType为3       nodeValue: null      （文本节点包含文字、空格、换行等）
    我们在实际开发中，节点操作主要操作的是元素节点
  */

  // 节点层级：     利用DOM树可以把节点划分为不同的层级关系，常见的是父子兄层级关系。

                          文档
                    根元素<html>
  |-------------------------|---------------------------|
  元素<head>                                         元素<body>
  |                                                     |
  |                         |---------------------------|-------------------|
  元素<title>            属性：href                   元素<a>             元素<h1>
  |                                                     |                   |
  文本：文档标题                                   文本：我的链接        文本：我的标题`)])]),l("li",null,[e(" 父节点 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  node.parentNode      // 注意：得到的是离元素最近的父亲，爷爷得不到

  // 以前做法，两个都获取
  var QRCode = document.querySelector('.QRCode');
  var box = document.querySelector('.bxo');

  // 现在做法，获取到   QRCode 的父亲  box
  QRCode.parentNode;

  // 注意： parentNode属性可返回某节点的父节点，注意是最近的一个父节点。如果指定的节点没有父节点则返回null`)])]),l("li",null,[e(" 子节点1 不常用 "),l("pre",null,[l("code",{class:"language-html line-numbers"},`  /* parentNode.Nodes  标准   注意：childNodes 是得到所有的子节点，包含元素节点，文本节点等，*/

<ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>
<script>
    // 1、子节点
    // 以前做法，两个都获取
    var ul = document.querySelector('ul');
    var lis = ul.querySelector('li');
    // 现在做法，获取到   QRCode 的父亲  box    var lis  可以用不用写
    ul.childNodes;
<\/script>

// 注意：返回值里面包含了所有的子节点，包括元素节点，文本节点等。
        如果只想要获得里面的元素节点，则需要专门处理。所以我们一般不提倡使用childNodes
<script>
    var ul = document.querySelector('ul');
    for (var i = 0; i < ul.childNodes.length; i++) {
        if (ul.childNodes[i].nodeType == 1) {
            //ul.childNodes[i] 是元素节点
            console.log(ul.childNodes[i]);
        }
    }
<\/script> `)])]),l("li",null,[e(" 子节点2 常用 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  parentNode.children   (非标准)     // 获取所有的子元素节点，也是实际开发常用的

// 以前做法，两个都获取
var ul = document.querySelector('ul');
var lis = ul.querySelector('li');

// 现在做法，获取到   QRCode 的父亲  box    var lis  可以用 不用写
  console.log(ul.children);`)])]),l("li",null,[e(" 子节点3 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  parentNode.firstChild  // 返回第一个子节点，找不到则返回null。同样，也是包含所有的节点。跟parentNode.childNodes一样
  parentNode.lastChild   // 返回最后一个子节点，找不到则返回null。同样，也是包含所有的节点。跟parentNode.childNodes一样
                         // 所以又提供了 parentNode.firstElementChild   和   parentNode.lastElementChild
                         // 注意：这两个法有兼容性问题，IE9以上才支持。`)])]),l("li",null,[e(" 解决方案： "),l("ul",null,[l("li",null,[e(" 实际开发中，firstChild 和 lastChild 包含其他节点，操作不方便，而 firstElementChild 和 lastElementChi1d 又有兼容性问题，那么我们如何获取第一个子元素节点或最后一个子元素节点呢？ "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 解决方案: 实际开发的写法既没有兼容性问题又返回第一个子元素
  console.log(ul.children[0]);                       // 因为是伪数组，所以想拿第几个 []里写索引号
  console.log(ul.children[ul.children.length - 1]);  // 取最后一个`)])]),l("li",null,[e(" 兄弟节点需要自己封装一个兼容性的函数 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  function getNextElementSibling(element) {
    var el = element;
    while (el = el.nextSibling) {
        if (el.nodeType === 1) {
            return el;
        }
    }
    return null;
  }`)])])])])],-1)),n[29]||(n[29]=l("p",null,"创建、添加、删除节点",-1)),n[30]||(n[30]=l("ul",null,[l("li",null,[e(" 创建节点 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  document.createElement( 'tagName' )
  // 该方法创建由tagName指定的HTML元素。因为这些元素原先不存在，是根据我们的需求动态生成的，所以我们也称为动态创建元素节点。
  // 例如：
      var div = document.createElement('div');`)])]),l("li",null,[e(" 添加节点 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  node.appendChild(child)              // 在后面追加元素，相当于数组中的push
  // 该方法将一个节点添加到指定父节点的子节点列表未尾。类似于css里面的after伪元素。

  node.insertBefore(child,指定元素)     // 在前面追加元素
  // 该方法将一个节点添加到父节点的指定子节点前面。类似于css里面的 before伪元素。

  // 例子1
  <ul><li></li></ul>
  <script>
      // 1、创建节点   元素节点
      var li = document.createElement('li');
      // 2、添加节点   node.appendChild(child)  node 是父级   child 是子级
      var ul = document.querySelector('ul');
      ul.appendChild(li);
      // var lis = document.createElement('li');  // 创建节点
      ul.insertBefore(li, ul.children[0])         // 括号解释，添加哪个孩子，添加到哪个的前面
  <\/script>

  // 例子2
  /* 创建留言：
      1、核心思路：点击按钮之后，就动态创建一个li，添加到ul里面。
      2、创建i的同时，把文本域里面的值通过i.innerHTML赋值给li
      3、如果想要新的留言后面显示就用appendChild 如果想要前面显示就用 insertBefore */
  <textarea> name="" id="" cols="30" rows="10"></textarea>
  <button>发布</button>
  <ul>

  </ul>
  <script>>
    // 获取元素
    var text = document.querySelector('textarea');
    var btn = document.querySelector('button');
    var ul = document.querySelector('ul');
    // 绑定事件  添加处理事件
    btn.onclick = function() {
        // 需要添加判断，如果发布为空，则不创建
        if (text.value != '') {
            //创建节点
            var li = document.createElement('li');
            // 要先有元素，才能赋值，所以书写顺序不能写错了
            li.innerHTML = text.value;
            //添加节点
        1、  ul.appendChild(li); // 注意 添加里面不要单引号     在后面添加

        2、  ul.insertBefore(li, ul.children[0]);        // 在前面添加
        } else {
            alert('请输入内容');
            return false;
        }
    }
  <\/script>

  /* 删除留言：
      1、当我们把文本域里面的值赋值给li的时候，多添加一个删除的链接
      2、需要把所有的链接获取过来，当我们点击当前的链接的时候，删除当前链接所在的li
      3、阻止链接跳转需要添加javascript：void（0）;或者 javascript：; 用后面一个更简单 */
  <textarea> name="" id="" cols="30" rows="10"></textarea>
  <button>发布</button>
  <ul>

  </ul>
  <script>>
    // 获取元素
    var text = document.querySelector('textarea');
    var btn = document.querySelector('button');
    var ul = document.querySelector('ul');
    // 绑定事件  添加处理事件
    btn.onclick = function() {
        // 需要添加判断，如果发布为空，则不创建
        if (text.value != '') {
            //创建节点
            var li = document.createElement('li');
            // 要先有元素，才能赋值，所以书写顺序不能写错了
            li.innerHTML = text.value + "<a> href='javascript:;'>删除</a>";
            // 添加节点
            ul.appendChild(li);                     // 注意 添加里面不要单引号     在后面添加
            // 删除节点    删除的是当前链接的1i它的父亲
            var as = document.querySelectorAll('a');
            for (var i = 0; i < as.length; i++) {
                as[i].onclick = function() {
                    //node.removeChild（child）；删除的是 li 当前 a所在的li    this.parentNode；
                    ul.removeChild(this.parentNode);
                }
            }
        } else {
            alert('请输入内容');
            return false;
        }
    }
  <\/script>`)])]),l("li",null,[e(" 删除节点 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  node.removeChild (child)                    // 该方法从DOM 中删除一个子节点，返回删除的节点。

<button>删除</button>
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>
<script>
    // 获取元素
    var btn = document.querySelector('button');
    var ul = document.querySelector('ul');
    btn.onclick = function() {
        ul.removeChild(ul.children[0]);     // 第几个孩子就写索引号几
    }
<\/script>

// 修改条件：  当ul 里面的li 没有的时候，添加判断条件，禁用button
<button>删除</button>
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>
<script>
    // 获取元素
    var btn = document.querySelector('button');
    var ul = document.querySelector('ul');
    btn.onclick = function() {
        if (ul.children.length != 0) {
            ul.removeChild(ul.children[0]);  // 第几个孩子就写索引号几
        } else {
            this.disabled = true;
        }
    }
<\/script>`)])])],-1)),n[31]||(n[31]=l("p",null,"克隆节点",-1)),n[32]||(n[32]=l("ul",null,[l("li",null,[e(" 代码 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  node.cloneNode ()

  // 该方法返回调用该方法的节点的一个副本。也称为克隆节点/拷贝节点
  <ul>
      <li>1</li>
      <li>2</li>
  </ul>
  <script>>
      var ul = document.querySelector('ul');
      var clones = ul.children[0].cloneNode(false);     // 空 或者 false 浅拷贝
      var clones = ul.children[0].cloneNode(true);      // true 深拷贝
      ul.appendChild(clones);
  <\/script> `)])]),l("li",null,[e(" 注意： "),l("ul",null,[l("li",null," 如果cloneNode ( ) 中括号参数为空或者为false，则是浅拷贝，即只克隆复制节点本身，不克隆里面的子节点。 "),l("li",null," 如果cloneNode (true) 中括号参数为true，则是深拷贝，复制标签，复制里面的内容 "),l("li",null,"如果是数值类型的拷贝都是深拷贝"),l("li",null,"引用数据类型才有深拷贝和浅拷贝")])]),l("li",null,[e(" 动态生成表格 239集 "),l("ul",null,[l("li",null," 因为里面的学生数据都是动态的，我们需要js动态生成。这里我们模拟数据，自己定义好数据。数据我们采取对象形式存储。 "),l("li",null,"所有的数据都是放到tbody里面的行里面。"),l("li",null,"因为行很多，我们需要循环创建多个行（对应多少人）"),l("li",null," 每个行里面又有很多单元格（对应里面的数据），我们还继续使用循环创建多个单元格，并且把数据存入里面（双重for循环） "),l("li",null,"最后一列单元格是删除，需要单独创建单元格。")]),l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 1.先去准备好学生的数据
  var dataS = [{name: '魏璎珞',subject: 'JavaScript',score: 100
  }, {name: '弘历',subject: 'JavaScript',score: 98
  }, {name: '傅恒',subject: 'JavaScript',score: 99
  }, {name: '明玉',subject: 'JavaScript', score: 88
  }, {name: '大猪蹄子',subject: 'JavaScript',score: 0
  }];
  // 2. 往tbody 里面创建行： 有几个人（通过数组的长度）我们就创建几行
  var tbody = document.querySelector('tbody');
  for (var i = 0; i < dataS.length; i++) { // 外面的for循环管行 tr
      // 1. 创建 tr行
      var tr = document.createElement('tr');
      tbody.appendChild(tr);
      // 2. 行里面创建单元格(跟数据有关系的3个单元格) td 单元格的数量取决于每个对象里面的属性个数  for循环遍历对象 datas[i]
      for (var k in dataS[i]) { // 里面的for循环管列 td
          // 创建单元格
          var td = document.createElement('td');
          // 把对象里面的属性值 dataS[i][k] 给 td
          // console.log(dataS[i][k]);
          td.innerHTML = dataS[i][k];
          tr.appendChild(td);
      }
      // 3. 创建有删除2个字的单元格
      var td = document.createElement('td');
      td.innerHTML = '<a href="javascript:;">删除 </a>';
      tr.appendChild(td);
  }
  // 4. 删除操作 开始
  var as = document.querySelectorAll('a');
  for (var i = 0; i < as.length; i++) {
      as[i].onclick = function() {
          // 点击a 删除 当前a 所在的行(链接的爸爸的爸爸)  node.removeChild(child)
          tbody.removeChild(this.parentNode.parentNode)
      }
  }
  // for(var k in obj) {
  //     k 得到的是属性名
  //     obj[k] 得到是属性值
  // }`)])]),l("li",null,[e(" for 循环 数组对象，for in对象，动态添加到元素里 "),l("pre",null,[l("code",{class:"language-html line-numbers"},`  <table>
    <tbody> id="demo"></tbody>
  </table>
  <script>
      // 假设发起了ajax请求，获得了一串数据
      let data = [{id: 1,name: '张三',age: 23,sex: "男"
      }, {id: 1,name: '李四',age: 20,sex: "女"
      }, {id: 1,name: '王五',age: 21,sex: "男"
      }];
      var tbody = document.getElementById("demo");
      for (var i = 0; i < data.length; i++) {
          var tr = document.createElement('tr');
          tbody.appendChild(tr);
          for (var k in data[i]) {
              var td = document.createElement("td");
              td.innerHTML = data[i][k]
              tr.appendChild(td);
          }
      }
  <\/script>`)])]),l("li",null,[e(" 使用forEach 循环数组对象，遍历数据动态添加 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  let study_content = $q(".study_content");
  let arr = [];
  data.forEach(d => {
      let link = \`
                  <div class="study_content">
                      <div class="link">
                          <div class="circular"></div>
                          <div class="text">
                              <h4><a href="">\${d.name}</a>   </h4>
                              <p>\${d.title}</p>
                          </div>
                          <div class="date">
                              <i>2021年01月04日</i>
                              <i class="bi bi-heart"> 268</i>
                          </div>
                      </div>
                  </div>
      \`;
      arr.push(link);
  });
  arr.forEach(a => {
      study_content.innerHTML += a;
  })

  // 推荐使用此方法，但方法也有很多，比如filter 但是注意forEach是不返回任何东西的，只会做遍历操作
    let study_content = $q(".study_content");
    let newData = data.map(e => {
        return \` <div class="study_content">
                <div class="link">
                            <div class="circular"></div>
                            <div class="text">
                                <h4><a href="">\${e.name}</a>   </h4>
                                <p>\${e.title}</p>
                            </div>
                            <div class="date">
                                <i>2021年01月04日</i>
                                <i class="bi bi-heart"> 268</i>
                            </div>
                        </div>
                    </div>
        \`;
    }).join(""); // 用空字符串拼接
    study_content.innerHTML = newData;`)])]),l("li",null,[e(" 三种动态创建元素的区别 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  document.write()
  element.innerHTML
  document.createElement()

  // 区别：
  //   1、document.write 是直接将内容写入页面的内容流，但是文档流执行完毕，则它会导致页面全部重绘
  //   2、innerHTML是将内容写入某个DOM节点，不会导致页面全部重绘
  //   3、innerHTML创建多个元素效率更高（不要拼接字符串，采取数组形式拼接），结构稍微复杂
  //   4、createElement() 创建多个元素效率稍低一点点，但是结构更清晰`)])])],-1)),n[33]||(n[33]=l("p",null,"DOM 重点核心",-1)),n[34]||(n[34]=l("ul",null,[l("li",null," 文档对象模型（DocumentObject Model，简称 DOM），是W3C组织推荐的处理可扩展标记语言（HTML或者XML）的标准编程接口。 "),l("li",null,[e(" W3C已经定义了一系列的DOM接口，通过这些DOM接口可以改变网页的内容、结构和样式。 "),l("ul",null,[l("li",null," 对于JavaScript，为了能够使JavaScript操作HTML，JavaScript就有了一套自己的dom编程接口。 "),l("li",null,"对于HTML，dom使得html形成一棵dom树.包含文档、元素、节点")]),l("pre",null,[l("code",{class:"language-js line-numbers"},`                           文档
                        根元素<html>
  |-------------------------|---------------------------|
  元素<head>                                       元素<body>
  |                                                     |
  |                         |---------------------------|-------------------|
  元素<title>            属性：href                  元素<a>              元素<h1>
  |                                                     |                   |
  文本：文档标题                                     文本：我的链接        文本：我的标题`)])]),l("li",null," 我们获取过来的DOM元素是一个对象（object），所以称为文档象模型，关于dom操作，我们主要针对于元素的操作。 "),l("li",null,[e(" 主要有创建、增、删、改、查、属性操作、事件操作。 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 创建
  document.write()
  element.innerHTML
  document.createElement()

  // 增
  element.appendChild
  element.insertBefore

  // 删
  element.removeChild

  /* 改 (主要修改dom的元素属性，dom元素的内容、属性，表单的值等)
      修改元素属性：src、href、title等
      修改普通元素内容：innerHTML、innerText
      修改表单元素：value、type、disabled等
      修改元素样式：style、className  */

  /* 查 （主要获取查询dom的元素）
      DOM提供的APl方法：getElementById、getElementsByTagName 古老用法不太推荐
      H5提供的新方法：querySelector、querySelectorAll 提倡
      利用节点操作获取元素：父（parentNode）、子（children）、兄（previousElementSibling、nextElementSibling）提倡 */

  // 属性操作 主要针对于自定义属性。
  el.setAttribute：设置dom的属性值
  el.getAttribute：得到dom的属性值
  el.removeAttribute 移除属性
              `)])])],-1)),n[35]||(n[35]=l("p",null,"事件操作 (给元素注册事件，采取事件源事件类型 = 事件处理程序)",-1)),n[36]||(n[36]=l("ul",null,[l("li",null,[e(" 事件高级 - 注册事件概述 "),l("ul",null,[l("li",null,"给元素添加事件，称为注册事件或者绑定事件。"),l("li",null,"注册事件有两种方式：传统方式和方法监听注册方式"),l("li",null," 特点：注册事件的唯一性，同一个元素同一个事件只能设置一个处理函数，最后注册的处理函数将会覆盖前面注册的处理函数 ")])]),l("li",null,[e(" 传统注册方式 "),l("pre",null,[l("code",{class:"language-html line-numbers"},`  <button>传统注册事件</button>
  <button>方法监听注册事件</button>
  <script>
      var btns = document.querySelectorAll('button');
      btns[0].onclick = function(){}
      btns[0].onclick = function(){}      // 如果同一个元素添加两个处理函数，只会执行最后一个
  <\/script>`)])]),l("li",null,[e(" 方法监听注册方式 "),l("ul",null,[l("li",null," w3c标准 推荐方式 addEventListener（）它是一个方法 IE9之前的IE不支持此方法，可使用 attachEvent（）代替 "),l("li",null," 特点：同一个元素同一个事件可以注册多个监听器 按注册顺序依次执行 "),l("li",null,[e(" 监听 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 方式1
  eventTarget.addEventListener('type',listener[ ,useCapture])  // 逗号前一定是字符串，所以要加引号
  // 该方法将指定的监听器注册到eventTarget（目标对象）上，当该对象触发指定的事件时，
  // 就会执行事件处理函数。方法有兼容性问题，IE9 以上才能使用

  /*
  该方法接收三个参数：
      type：       事件类型字符串，比如click、mouseover，注意这里不要带on，只有传统处理函数方式注册时才需要带on
      listener：   事件处理函数，事件发生时，会调用该监听函数
      useCapture： 可选参数，是一个布尔值，默认是false。捕获阶段是否触发
  */

  <button>方法监听注册事件</button>
  <script>
      var btns = document.querySelectorAll('button');
      btns[1].addEventListener('click', function() {    // 解释： 谁.监听（'事件类型'，处理程序），字符串里不带 on
          alert('事件侦听111');                          // addEventListener里事件类型是字符串。并且不要带 on
      })
      //同一个事件可以添加多个侦听器（事件处理程序）
      btns[1].addEventListener('click', function() {
          alert('事件侦听222');
      })
  <\/script>

  // 方式2 (该特性是非标准的，请尽量不要在生产环境中使用它！)
  eventTarget.attachEvent(eventNameWithOn,callback)
  // 该方法将指定的监听器注册到eventTarget（目标对象）上，当该对象触发指定的事件时，指定的回调函数就会被执行。

  // 该方法接收两个参数：
     eventNameWithOn:      // 事件类型字符串，比如onclick、onmouseover，这里要带on
     callback:             // 事件处理函数，当目标触发事件时回调函数被调用
                           // 支持IE 9之前的版本，但是事件类型中 必须带 on

  btns[0].attachEvent('onclick', function() {
      alert('事件侦听333');
  })`)])]),l("li",null,[e(" 注册事件兼容性解决方案和处理的原则：首先照顾大多数浏览器，再处理特殊浏览器， 作为了解就可以了 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  function.addEventListener(element, eventName, fn) {
      //判断当前浏览器是否支持addEventListener方法
      if (element.addEventListener) {
          element.addEventListener(eventName, fn) // 第三个参数 默认是false，可选参数，，默认是false。捕获阶段是否触发
      } else if (element, attachEvent) {
          element.attachEvent('on' + eventName, fn)
      } else {
          //相当于 element.onclick = fn
          element['on' + eventName] = fn
      }
  }
  addEventListener（element, eventName, fn）;     // 调用

  // 够用：            eventTarget.attachEvent(eventNameWithOn,callback)
  // 不兼容直接用传统：   btns[0].onclick = function(){}`)])])])]),l("li",null,[e(" 删除事件 "),l("ul",null,[l("li",null,[e(" 传统注册方式的删除方法 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  eventTarget.onclick= null;

  // 例子
  <div>1</div>
  <div>2</div>
  <div>3</div>

  var divs = document.querySelectorAll('div');
  divs[0].onclick = function() {
      alert('只需要弹窗一次');
      // 使用eventTarget.onclick =null;
      divs[0].onclick = null;
  }`)])]),l("li",null,[e(" 方法监听注册方式 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  eventTarget.removeEventListener(type,listener[, useCapture]);     // 删除监听事件，取消监听事件

  // 例子
  <div> id="content"></div>
  <script> type="text/javascript">
      var content = document.getElementById("content");
      //在添加处理函数的时候，直接用函数名，把函数写在里面，这样就可以很方便的删除监听事件
      content.addEventListener("mouseenter", add, false);//可选参数，是一个布尔值，默认是false。捕获阶段是否触发
      function add() {
          console.log("333");
      }
      content.removeEventListener("mouseenter", add, false);    // 删除监听事件
  <\/script>`)])]),l("li",null,[e(" detachEvent() 方法 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  eventTarget.detachEvent(eventNameWithon, callback);

  // 例子
      <script>
          var divs = document.querySelectorAll('div');
          divs[1].addEventListener('click', fn) //里面的函数调用 fn ，不用加小括号
          function fn() {
              alert(22);
              divs[1].removeEventListener('click', fn);
          }
      <\/script>

  // 注意：因为addEventListener（）方法的第二个参数类型是函数，如果写成fn（）那么就会传入函数调用结果，
      也就是 return 的内容函数，fn中没写return，默认会传入undefined导致错误

  // eventTarget.detachEvent(eventNameWidthOn, callback);
  // 兼容性问题，只有在IE9以下才能使用
      divs[1].attachEvent('onclick', fn);

      function fn() {
          alert('1');
          divs[2].detachEvent('onclick',fn)
      }`)])]),l("li",null,[e(" 删除事件兼容性解决方案和处理的原则：首先照顾大多数浏览器，再处理特殊浏览器， 作为了解就可以了 "),l("pre",null,[l("code",{class:"language-html line-numbers"},`  <script>
      function.removeEventListener(element, eventName, fn) {
          // 判断当前浏览器是否支持removeEventListener方法
          if (element.removeEventListener) {
              element.removeEventListener(eventName, fn) // 三个参数  默认是false
          } else if (element, detachEvent) {
              element.detachEvent('on' + eventName, fn)
          } else {
              element['on' + eventName] = fn
          }
      }
  <\/script>

  // 够用： div[0].onclick = null ;
  // 不兼容直接用传统： div[0].removeEventListener( 'click' , fn )`)])])])])],-1)),n[37]||(n[37]=l("p",null,"DOM事件流",-1)),n[38]||(n[38]=l("ul",null,[l("li",null,"事件流描述的是从页面中接收事件的顺序。"),l("li",null," 事件发生时会在元素节点之间按照特定的顺序传播，这个传播过程即DOM事件流。 "),l("li",null,[e(" 比如我们给一个div注册了点击事件： "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  按顺序执行：
      捕获阶段                               冒泡阶段

        1            Document                 7

        2            Element  html            6

        3            Element  body            5

                     Element  div             4

        ---------------------------------------->

        1到2      2到3       3到4       属于捕获阶段
        4到5      5到6       6到7       属于冒泡阶段`)])]),l("li",null,[e(" DOM事件流分为3个阶段 "),l("ul",null,[l("li",null,[e(" 捕获阶段 "),l("ul",null,[l("li",null," 当document 没有绑定事件，那么会顺着下一个element html ，如果没有接着下一个查询 ")])]),l("li",null,[e(" 当前目标阶段 "),l("ul",null,[l("li",null,"当找到element div 时发现有绑定事件，此时称为目标阶段")])]),l("li",null,[e(" 冒泡阶段 "),l("ul",null,[l("li",null," 事件冒泡： IE最早提出，事件开始时由最具体的元素接收，然后逐级向上传播到到DOM最顶层节点的过程。 "),l("li",null," 事件捕获： 网景最早提出，由DOM最顶层节点开始，然后逐级向下传播到到最具体的元素接收的过程 ")])])])]),l("li",null," 理解： 我们向水里面扔一块石头，首先它会有一个下降的过程，这个过程就可以理解为从最顶层向事件发生的最具体元素 （目标点）的捕获过程；之后会产生泡泡，会在最低点（最具体元素）之后漂到水面上，这个过程相当于事件冒泡。 "),l("li",null,[e(" DOM事件流2 "),l("ul",null,[l("li",null,[e(" 事件发生时会在元素节点之间按照特定的顺序传播，这个传播过程即DOM事件流。 "),l("ul",null,[l("li",null,"JS代码中只能 执行捕获 或者 冒泡 其中的一个阶段。"),l("li",null,"onclick 和 attachEvent 只能得到冒泡阶段。"),l("li",null," addEventListener（type，listener[，useCapture]）第三个参数如果是true，表示在事件捕获阶段调用事件处理程序；如果是false（不写默认就是false），表示在事件冒泡阶段调用事件处理程序。 "),l("li",null,"实际开发中我们很少使用事件捕获，我们更关注事件冒泡。"),l("li",null," 有些事件是没有冒泡的，比如onblur、onfocus、onmouseenter、onmouseleave "),l("li",null," 事件冒泡有时候会带来麻烦，有时候又会帮助很巧妙的做某些事件，我们后面讲解。 ")]),l("pre",null,[l("code",{class:"language-js line-numbers"},`  var divs = document.querySelectorAll('div');
  // 如果是true,表示事件获取阶段     如果为false,表示事件冒泡阶段
  divs[1].addEventListener('onclick', function() {}, true);  // true   或者  false(默认)`)])]),l("li",null," false 执行顺序 ： son -> father -> body -> html -> document "),l("li",null," true 执行顺序 ： document -> html -> body -> father -> son ")])])],-1)),n[39]||(n[39]=l("p",null,"事件对象 event",-1)),n[40]||(n[40]=l("ul",null,[l("li",null,[e(" 代码 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  var div = document.querySelector('div');
  // 1. event就是一个事件对象 写到侦听函数的小括号里面，当形参来看

  // 2.事件对象只有有了事件才会存在，它是系统给我们自动创建的，不需要传入参数
  // 3.事件对象是我们事件的一系列相关数据的集合跟事件相关的，比如鼠标点击里面就包含了鼠标的相关信息，鼠标坐标，键盘事件
        的信息，比如，鼠标 判断用户按下了哪个键
  // 4、这个事件对象我们可以自己命名，比如 event\\ evt e
  // 5、事件对象也有兼容性问题，ie678  通过 window.event
  div.onclick = function (event){
      e = e || window.event   兼容性写法   如果浏览器认识，则执行e,如果不认识，则执行 window.event
  }`)])]),l("li",null,[e(" 什么是事件对象 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  eventTarget.onclick = function(event){}
  eventTarget.addEventListener('click',function(event){})

  /*
    这个event 就是事件对象，我们还喜欢的写成e或者 evt
    官方解释：event对象代表事件的状态，比如键盘按键的状态、鼠标的位置、鼠标按钮的状态。
    简单理解：事件发生后，跟事件相关的一系列信息数据的集合都放到这个对象里面，这个对象就是事件对象event，它有很多属性和方法。

    比如：
      1.谁绑定了这个事件。
      2.鼠标触发事件的话，会得到鼠标的相关信息，如鼠标位置。
      3.键盘触发事件的话，会得到健盘的相关信息，如按了哪个键。

    这个event是个形参，系统帮我们设定为事件对象，不需要传递实参过去。
    当我们注册事件时，event对象就会被系统自动创建，并依次传递给事件监听器（事件处理函数）。
  */`)])]),l("li",null,[e(" 事件对象的兼容性方案，事件对象本身的获取存在兼容问题： "),l("ul",null,[l("li",null," 标准浏览器中是浏览器给方法传递的参数，只需要定义形参e就可以获取到。 "),l("li",null," 在IE6～8中，浏览器不会给方法传递参数，如果需要的话，需要到window.event中获取查找。 ")])]),l("li",null,"解决代码示例： e = e || window.event"),l("li",null,[e(" 事件对象的常用属性和方法 "),l("pre",null,[l("code",{class:"language-html line-numbers"},`  e.target            // 返回触发事件的对象标准
  e.srcElement        // 返回触发事件的对象非标准ie6-8使用
  e.type              // 返回事件类型比如click mouseover不带on
  e.cancelBubble      // 该属性阻止冒泡非标准ie6-8使用
  e.returnValue       // 该属性阻止默认事件（默认行为）非标准ie6-8使用比如不让链接跳转
  e.preventDefault()  // 该方法阻止默认事件（默认行为）标准比如不让链接跳转
  e.stopPropagation() // 阻止冒泡标准

  <script>
      var div = document.querySelector('div');
      div.addEventListener('click', function(e) {
          // e.target 返回的是触发事件对象（元素）   点击谁返回谁
          console.log(e.target);
          // this 返回的是绑定事件的对象，注册对象   点击返回绑定的谁
          console.log(this);
      })

  e.srcElement  兼容性问题解决( 了解兼容性 )
  div.onclick = function (e) {
      e = e || window.event ;
      var target = e.target || e.srcElement ;
  }

  <a> href="www.baidu.com">百度</a>
  <script>
      var a = document.querySelector('a');
      a.addEventListener('click', function(e) {
         e.preventDefault(); // DOM  标准写法
      })
      // 传统写法
      a.onclick = function (e){
          // 1、普通浏览器
          e.preventDefault();
          // 2、低版本浏览器 returnValue
          e.returnValue;
          // 3、简单写法 我们可以利用return false 也能阻止默认行为，没有兼容性问题
          return false;
          // 缺点，如果后面有代码，则不执行，只限于传统方式，如果用 addEventListener 是不起作用的
          alert('后面不会被执行了');
      }
  <\/script>`)])]),l("li",null,[e(" 长按press事件会导致浏览器弹出菜单，苹果的可以用-webkit-touch-callout: none;来禁止，但是安卓的不行。禁止弹出只能用js来控制: "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 1. 移动端禁止长按触发菜单
  window.addEventListener('contextmenu', function (e) {
      e.preventDefault();
  });

  // 2. 测试无效 / 或者还可以 放个透明absolute定位div遮盖住图片
  document.oncontextmenu=function(e){
    // 或者return false;
    e.preventDefault();
  };

  // 3. 关于长按的弹窗菜单怎么屏蔽，网上查了很多资料，都是设置e.preventDefault()，来实现，但是一直用的是
  obj.addEventListener("touchstart", function (e) {
      e.preventDefault();
  }, false);

  // 4. 这个设置的应该是屏蔽触屏的反应，设置屏蔽弹出菜单的应该是这样：
  document.oncontextmenu = function (e) {
      e.preventDefault();
  };

  // 5. 最后解决办法：用css，但是也会让链接失效，所以要用js来触发点击事件
  img {
      pointer-events:none;          // 禁止长按图片保存
  }

  // 6. 以下代码需要试验
  (function agent() {
    let unlock = false
    document.addEventListener('allow_copy', (event) => {
        unlock = event.detail.unlock
    })

    const copyEvents = [
        'copy',
        'cut',
        'contextmenu',
        'selectstart',
        'mousedown',
        'mouseup',
        'mousemove',
        'keydown',
        'keypress',
        'keyup',
    ]
    const rejectOtherHandlers = (e) => {
        if (unlock) {
            e.stopPropagation()
            if (e.stopImmediatePropagation) e.stopImmediatePropagation()
        }
    }
    copyEvents.forEach((evt) => {
        document.documentElement.addEventListener(evt, rejectOtherHandlers, {
            capture: true,
        })
    })
  })();

  // 7. 测试后，可以实现的：
  // 移动端长按事件
  body {
    user-select: none;
    -webkit-touch-callout: none;/* iOS Safari */
    -webkit-user-select: none;
  }

  // 右键菜单事件
  document.addEventListener('contextmenu', function (e) {
      e.preventDefault();
  });

  // pc端事件，移动端还是会出
  document.ontouchend = function () {
      throw new Error("NO ERROR:禁止长按弹出的菜单");
  }

  // 复制事件
  document.addEventListener("copy", (e) => {
      e.preventDefault();
  })`)])])],-1)),n[41]||(n[41]=l("p",null,"阻止事件冒泡的两种方式",-1)),n[42]||(n[42]=l("ul",null,[l("li",null,[e(" 事件冒泡 "),l("ul",null,[l("li",null," 开始时由最具体的元素接收，然后逐级向上传播到，到DOM最顶层节点。 "),l("li",null," 事件冒泡本身的特性，会带来的坏处，也会带来的好处，需要我们灵活掌握。 ")])]),l("li",null,[e(" 阻止事件冒泡 "),l("ul",null,[l("li",null,"标准写法：利用事件对象里面的 el.stopPropagation（）方法"),l("li",null," 非标准写法： IE6 - 8 利用事件对象 cancelBubble 属性 cancel 取消 Bubble 泡泡 ，取消冒泡 ")])])],-1)),n[43]||(n[43]=l("p",null,"事件委托",-1)),n[44]||(n[44]=l("ul",null,[l("li",null,[e(" 事件冒泡本身的特性，会带来的坏处，也会带来的好处，需要我们灵活掌握。生活中有如下场景： "),l("ul",null,[l("li",null,[e(" 咱们班有100个学生，快递员有100个快递，如果一个个的送花费时间较长。同时每个学生领取的时候， 也需要排队领取，也花费时间较长，例如？ "),l("ul",null,[l("li",null," 解决方案： 快递员把100个快递，委托给班主任，班主任把这些快递放到办公室，同学们下课自行领取即可。 "),l("li",null," 优势： 快递员省事，委托给班主任就可以走了。同学们领取也方便，因为相信班主任。 ")])])])]),l("li",null,[e(" 事件委托 "),l("ul",null,[l("li",null,"事件委托也称为事件代理，在jQuery里面称为事件委派。"),l("li",null," 不是每个子节点单独设置事件监听器，而是事件监听器设置在其父节点上，然后利用冒泡原理影响设置每个子节点。 "),l("li",null,[e(" 案例 "),l("ul",null,[l("li",null," 给ul注册点击事件，然后利用事件对象的target来找到当前点击的 li ，因为点击 li，事件会冒泡到ul上， ul 上有注册事件，就会触发事件监听器。 ")])])])]),l("li",null,[e(" 事件委托的作用 "),l("ul",null,[l("li",null,[e(" 我们只操作了一次DOM，提高了程序的性能。 "),l("pre",null,[l("code",{class:"language-html line-numbers"},`  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
  </ul>
  <script>
      // 时间委托的核心原理，给父亲节点添加侦听器。利用冒泡影响每个子节点
      var ul = document.querySelector('ul');
      ul.addEventListener('click', function(e) {
          // e.target 这个可以得到我们点击的对象
          e.target.style.backgroundColor = 'pink';
      })
  <\/script>`)])])])])],-1)),n[45]||(n[45]=l("p",null,"鼠标事件和鼠标移动",-1)),n[46]||(n[46]=l("ul",null,[l("li",null,[e(" 禁止鼠标右键菜单 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  // contextmenu 主要控制应该何时显示上下文菜单，主要用于程序员取消默认的上下文菜单

  document.addEventListener('contextmenu', function(e) {
      e.preventDefault();
  })`)])]),l("li",null,[e(" 禁止鼠标选中 （selectstart 开始选中） "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  document.addEventListener('selectstart', function(e) {
    e.preventDefault();
  })`)])]),l("li",null,[e(" 鼠标事件对象 "),l("ul",null,[l("li",null," event对象代表事件的状态，跟事件相关的一系列信息的集合。现阶段我们主要是用鼠标事件对象 "),l("li",null,[e(" MouseEvent 和键盘事件对象 Keyboardevent "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  div.addEventListener("mouseleave",function(e){
    e.clientX                   // 返回鼠标相对于浏览器窗口可视区的X坐标
    e.clientY                   // 返回鼠标相对于浏览器窗口可视区的Y坐标
    e.pageX                     // 返回鼠标相对于文档页面的X坐标IE9+支持
    e.pageY                     // 返回鼠标相对于文档页面的Y坐标IE9+支持
    e.screenX                   // 返回鼠标相对于电脑屏幕的X坐标
    e.screenY                   // 返回鼠标相对于电脑屏幕的Y坐标
  })

  // e.clientX 和 e.clientY 不管网页高多少，只会在当前可视区窗口返回坐标XY值，不会返回取决于高度的XY值
  // e.pageX 和 e.pageY 才是获取整个页面文档高度的X Y值，与e.client 的区别 ，实际开发常用

  document.addEventListener('click', function(e) {
    console.log(e.screenX);     // 兼容大部分
    console.log(e.screenY);     // 兼容大部分
  })

  // IE8 不支持事件对象event ,所以要在前面加上一个 window，因为IE8以下是将事件对象作为window对象的属性保存的
  // 兼容性解决方法：
  document.addEventListener('click', function(e) {
      // 第一个写法
      if (!event) { //兼容IE 8 以下
          event = window.event;
      }
      // 第二个写法
      event = event || window.event;

      console.log(e.screenX);
      console.log(e.screenY);
  })`)])])])]),l("li",null,[e(" 鼠标移动 "),l("ul",null,[l("li",null,"鼠标不断的移动，使用鼠标移动事件：mousemove"),l("li",null,"在页面中移动，给document注册事件"),l("li",null,"图片要移动距离，而且不占位置，我们使用绝对定位即可"),l("li",null," 核心原理：每次鼠标移动，我们都会获得最新的鼠标坐标，把这个x和y坐标做为图片的top和left值就可以移动图片 ")]),l("pre",null,[l("code",{class:"language-html line-numbers"},`
  img {position: absolute; }

  <img src="images/open.png" alt="">
  <script>
      var img = document.querySelector('img');
      document.addEventListener('mousemove', function(e) {
          var x = e.pageX;
          var y = e.pageY;
          img.style.left = x - 20 + 'px'; //因为坐标带像素，不要忘记拼接字符串
          img.style.top = y - 20 + 'px';//减宽高的一半是为了定位到鼠标中心
      })
  <\/script>`)])])],-1)),n[47]||(n[47]=l("p",null,"键盘事件",-1)),n[48]||(n[48]=l("ul",null,[l("li",null,[e(" 代码 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  div.onkeyup = function(){};          /* 某个按键被松开时触发 */
  div.onkeydown = function(){};        /* 某个按键被按下时触发 */
  div.onkeypress = function(){};       /* 被按下触发，但是不识别快捷键的  ctrl  shift 等 */

  // 执行顺序 ：   onkeydown      >     onkeypress     >     onkeyup
  document.addEventListener('keyup', function() { //在标准监听事件中，记住不用加 on，非标需要加on
      console.log('1');
  })`)])]),l("li",null,[e(" 键盘事件对象 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 键盘事件对象中的keyCode 属性可以得到相应键的ASCII码值
  document.addEventListener('keyup', function(e) { //记住不用加 on
      // 注意：keyup 和keydown 是不区分大小写
      console.log(e.keyCode);
      // 如果要区分大小写，使用 keypress
  })

  /*
  注意： onkeydown  和onkeyup  不区分字母大小写，onkeypress区分字母大小写。
        在我们实际开发中，我们更多的使用keydown 和 keyup，它能识别所有的键（包括功能键）
        Keypress不识别功能键，但是keyCode属性能区分大小写，返回不同的ASCII值 */`)])]),l("li",null,[e(" 案例 "),l("pre",null,[l("code",{class:"language-html line-numbers"},`  <!-- 案例1 -->
  <style>
    .box { width: 100px;height: 100px;background: crimson;position: absolute;top: 0;left: 0;}
  </style>
  </head>
  <body>
  <div> class="box"></div>
  <script>
      var box = document.querySelector('.box');
      var speed = 10;
      document.addEventListener('keydown', function(e) {
           // 当用户按下了ctrl 以后，数度加快
          if(e.ctrlKey){
              speed = 50;
          }
          switch (e.keyCode) {
              case 37:
                  box.style.left = box.offsetLeft - speed + 'px';
                  break;
              case 38:
                  box.style.top = box.offsetTop - speed + 'px';
                  break;
              case 39:
                  box.style.left = box.offsetLeft + speed + 'px';
                  break;
              case 40:
                  box.style.top = box.offsetTop + speed + 'px';
                  break;
          };
      });
  <\/script>

  <!-- 案例仿京东按键 -->
  /* 核心思路
      检测用户是否按下了s键，如果按下s键，就把光标定位到搜索框里面
      使用键盘事件对象里面的keyCode判断用户按下的是否是s键
      搜索框获得焦点：使用js里面的focus（）方法 */

  <input type="text">
  <script>
      var input = document.querySelector('input');
      document.addEventListener('keyup', function(e) { // 不能用keydown，因为按下会一直触发，把s输入到文本框里
          if (e.keyCode === 83) {
              input.focus();                           // focus() 是获得焦点，重新获得焦点
          }
      })
  <\/script>

  <!-- 仿京东快递单号查询 -->
  /* 核心思路
      快递单号输入内容时，上面的大号字体盒子（con）显示（这里面的字号更大）
      表单检测用户输入：给表单添加键盘事件
      同时把快递单号里面的值（value）获取过来赋值给con盒子（innerText）做为内容
      如果快递单号里面内容为空，则隐藏大号字体盒子（con）盒子
      注意：keydown和keypress在文本框里面的特点：他们两个事件触发的时候，文字还没有落入文本框中。
      keyup 事件触发的时候，文字已经落入文本框里面了
      当我们失去焦点，就隐藏这个con盒子
      当我们获得焦点，并且文本框内容不为空，就显示这个con盒子 */

  <div class="search">
    <div> class="con">123</div>
    <input type="text" placeholder="请输入您的快递单号" class="jd">
  </div>
  <script>
      // 快递单号输入内容时， 上面的大号字体盒子（con）显示（这里面的字号更大）
      // 表单检测用户输入： 给表单添加键盘事件
      // 同时把快递单号里面的值（value）获取过来赋值给 con盒子（innerText）做为内容
      // 如果快递单号里面内容为空，则隐藏大号字体盒子(con)盒子
      var con = document.querySelector('.con');
      var jd_input = document.querySelector('.jd');
      jd_input.addEventListener('keyup', function() {
              // console.log('输入内容啦');
              if (this.value == '') {
                  con.style.display = 'none';
              } else {
                  con.style.display = 'block';
                  con.innerText = this.value;
              }
          })
          // 当我们失去焦点，就隐藏这个con盒子
      jd_input.addEventListener('blur', function() {
              con.style.display = 'none';
          })
          // 当我们获得焦点，就显示这个con盒子
      jd_input.addEventListener('focus', function() {
          if (this.value !== '') {               //判断条件，如果值不为空，才显示
              con.style.display = 'block';
          }
      })
  <\/script>`)])])],-1))]),_:1,__:[11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48]}),i(s,{id:"part2",shadow:"hover"},{default:t(()=>n[49]||(n[49]=[l("h2",null,"BOM",-1),l("p",null,"概述",-1),l("ul",null,[l("li",null,[e(" BOM（Browser Object Model）即浏览器对象模型，它提供了独立于内容而与浏览器窗口进行交互的对象，其核心对象是window。BOM由一系列相关的对象构成，并且每个对象都提供了很多方法与属性。 BOM缺乏标准，JavaScript语法的标准化组织是ECMA，DOM的标准化组织是W3C，BOM最初是Netscape浏览器标准的一部分。 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  DOM                                        BOM
    ·文档对象模型                                ·浏览器对象模型
    ·DOM就是把[文档]当做一个[对象]来看待           ·把[浏览器]当做一个[对象」来看待
    ·DOM的顶级对象是document                     ·BOM的顶级对象是window
    ·DOM主要学习的是操作页面元素                  ·BOM学习的是浏览器窗口交互的一些对象
    ·DOM是W3C标准规范                            ·BOM是浏览器厂商在各自浏览器上定义的，兼容性较差

  BOM 比 DOM 更大，它包含DOM。

                                  window
      -------------------------------|----------------------------
      |            |                 |            |              |
  document       location        navigation     screen       history`)])]),l("li",null,[e(" window对象是浏览器的顶级对象，它具有双重角色。 "),l("ul",null,[l("li",null,"它是JS访问浏览器窗口的一个接口。"),l("li",null," 是一个全局对象。定义在全局作用域中的变量、函数都会变成window对象的属性和方法。 在调用的时候可以省略window，前面学习的对话框都属于window对象方法，如alert（）、prompt（）等。 ")])]),l("li",null,"注意：window下的一个特殊属性window.name")],-1),l("p",null,"window对象常见事件",-1),l("ul",null,[l("li",null,[e(" 窗口加载事件1 "),l("ul",null,[l("li",null," 注意1: 有了window.onload就可以把JS代码写到页面元素的上方，因为onload是等页面内容全部加载完毕，再去执行处理函数。 "),l("li",null," 注意2: window.onload传统注册事件方式只能写一次，如果有多个，会以最后一个window.onload为准。 如果使用addEventListener则没有限制。 ")]),l("pre",null,[l("code",{class:"language-js line-numbers"},`  window.onload=function（）{}   或者   window.addEventListener（"load"，function（）{}）；

  // window.onload是窗口（页面）加载事件，当文档内容完全加载完成才会触发该事件（包括图像、脚本文件、CSS文件等，就调用的处理函数。`)])]),l("li",null,[e(" 窗口加载事件2 "),l("pre",null,[l("code",{class:"language-js line-numbers"},"  document.addEventListener('DOMContentLoaded'，function(){})")])]),l("li",null," DOMContentLoaded 事件触发时，仅当DOM加载完成，不包括样式表，图片，flash等等。 "),l("li",null,"ie 9 以上才支持"),l("li",null," 如果页面的图片很多的话，从用户访问到onload触发可能需要较长的时间，交互效果就不能实现， 必然影响用户的体验，此时用DOMContentLoaded事件比较合适。 "),l("li",null,"总结"),l("li",null,"load等页面内容全部加载完毕，包含页面dom元素图片flash css等等"),l("li",null," DOMContentLoaded 是DOM加载完毕，不包含图片flash css等就可以执行,加载速度比 load 更快一些 "),l("li",null,[e(" 调整窗口大小事件 "),l("ul",null,[l("li",null,"注意1：只要窗口大小发生像素变化，就会触发这个事件。"),l("li",null," 注意2：我们经常利用这个事件完成响应式布局。window.innerWidth当前屏幕的宽度 ")]),l("pre",null,[l("code",{class:"language-js line-numbers"},`  window.onresize=function(){};
  window.addEventListener("resize",function(){});

  // window.onresize是调整窗口大小加载事件，当触发时就调用的处理函数。 `)])]),l("li",null,[e(" 定时器(window对象给我们提供了2个非常好用的方法-定时器。) "),l("ul",null,[l("li",null,[e(" setTimeout () "),l("ul",null,[l("li",null," window.setTimeout（调用函数（或者函数名），[延迟的毫秒数]）； "),l("li",null," setTimeout() 方法用于设置一个定时器，该定时器在定时器到期后执行调用函数。 "),l("li",null,"setTimeout() 这个调用函数我们也称为 回调函数callback"),l("li",null," 因为：普通函数是按照代码顺序直接调用。而这个函数，需要等待时间， 时间到了才去调用这个函数，因此称为回调函数。 "),l("li",null,' 简单理解：回调，就是回头调用的意思。上一件事干完，再回头再调用这个函数。以前我们讲的element.onclick=function）{} 或者element.addEventListener（"click"，fn）；里面的函数也是回调函数。 ')]),l("pre",null,[l("code",{class:"language-js line-numbers"},`  // window 在调用的时候可以省略     1秒 = 1000毫秒
  // 单位必须是毫秒，如果省略，默认是0   立马执行
  // 调用函数可以直接写函数，还可以写函数名

  function callback() {console.log('定时器');}
  // 如果多个需要多个定时效果，给定时器赋值一个标识符
  var time1 = setTimeout(callback, 3000);
  var time2 = setTimeout(callback, 5000);

  // 案例：五秒自动关闭广告
  // 1、核心思路：5秒之后，就把这个广告隐藏起来
  // 2、用定时器setTimeout
  <div>广告</div>
  <script>
      var div = document.querySelector('div');
      setTimeout(function() {
          div.style.display = 'none';
      }, 5000);
  <\/script>`)])]),l("li",null,[e(" setInterval() "),l("ul",null,[l("li",null,"window.setInterval（回调函数，[间隔的毫秒数]）；"),l("li",null," setInterval()方法重复调用一个函数，每隔这个时间，就去调用一次回调函数。 "),l("li",null," 区别1：setTimeout () 和 setInterval () 参数类型、写法、作用都是一样的 "),l("li",null," 区别2：setTimeout延时时间到了，就去调用这个回调函数，只调用一次就结束了这个定时器 "),l("li",null," 区别3：setInterval每隔这个延时间，就去调用这个回调函数，会调用很多次，重复调用这个函数 ")])])])]),l("li",null,[e(" 停止定时器 "),l("ul",null,[l("li",null," 在做轮播图的时候，同一个元素时，开启定时器之前先关闭上一个定时器，跟节流阀的作用相同，不同元素就需要使用节流阀 "),l("li",null,"window.clearTimeout(timeoutID)"),l("li",null," clearTimeout（）方法取消了先前通过调用 setTimeout（）建立的定时器。 "),l("li",null,[e(" timeoutID） 里面参数跟的就是定时器的标识符 "),l("pre",null,[l("code",{class:"language-html line-numbers"},`  <div>广告</div>
  <button>停止定时器</button>
  <script>
      var div = document.querySelector('div');
      var btn = document.querySelector('button');
      var time1 = setTimeout(function() {
          div.style.display = 'none';
      }, 5000);
      btn.addEventListener('click', function() {
          clearTimeout(time1);
      });
  <\/script>`)])]),l("li",null,[e(" 倒计时案例 "),l("ul",null,[l("li",null," 这个倒计时是不断变化的，因此需要定时器来自动变化（setInterval） "),l("li",null,"三个黑色盒子里面分别存放时分秒"),l("li",null,"三个黑色盒子利用innerHTML放入计算的小时分钟秒数"),l("li",null,"第一次执行也是间隔毫秒数，因此刚刷新页面会有空白"),l("li",null," 最好采取封装函数的方式，这样可以先调用一次这个函数，防止刚开始刷新页面有空白问题 ")]),l("pre",null,[l("code",{class:"language-html line-numbers"},`  <div>
    <span class="hour">1</span>
    <span class="minute"> 2</span>
    <span class="second">3</span>
  </div>
  <script>
    var hour = document.querySelector('.hour');        // 小时的盒子
    var minute = document.querySelector('.minute');    // 分钟的盒子
    var second = document.querySelector('.second');    // 秒数的盒子
    var inputTime = +new Date('2021-7-3 11:30:00');    // 如果有值，就是获取填入数值到1970年的总毫秒数
    countDown();                                       // 先调用一次这个函数，防止第一次刷新页面有空白
    // 开启定时器
    setInterval(countDown, 1000);
    function countDown() {
        var dayTime = +new Date();                     // 如果值为空，那么会获取当前系统时间到1970年的总毫秒数
        var total = (inputTime - dayTime) / 1000;      // 现在total就是填入值 - 当前值 / 1000，1秒 = 1000毫秒。取到剩余时间
        // var d = parseInt(total / 60 / 60 / 24);     // 计算天数
        // d = d < 10 ? '0' + d : d; //小于10自动补0
        var h = parseInt(total / 60 / 60 % 24);        // 计算小时
        h = h < 10 ? '0' + h : h;
        hour.innerHTML = h;                            // 把剩余的小时数  赋值给 hour盒子
        var m = parseInt(total / 60 % 60);             // 计算分数
        m = m < 10 ? '0' + m : m;
        minute.innerHTML = m;
        var s = parseInt(total % 60);                  // 计算当前秒数
        s = s < 10 ? '0' + s : s;
        second.innerHTML = s;
    }
  <\/script>`)])])])]),l("li",null,[e(" 开启、停止定时器 "),l("pre",null,[l("code",{class:"language-html line-numbers"},`  <button> class="open">开启</button>
  <button> class="close">停止</button>
  <script>
      var open = document.querySelector('.open');
      var close = document.querySelector('.close');
      var timer = null;                             // 设置一个全局变量，null是一个空对象,全局变量可被调用
                                                    // 不要赋值，因为一赋值很容易出错， undefined
      var time = open.addEventListener('click', function() {
          timer = setInterval(function() {          // 将函数赋值给timer,然后传给全局变量
              console.log('开始');
          }, 1000);
      })
      close.addEventListener('click', function() {
          clearInterval(timer);
      })
  <\/script>`)])]),l("li",null,[e(" 案例：短信定时器，60秒后才能发送 "),l("ul",null,[l("li",null,"按钮点击之后，会禁用disabled为true"),l("li",null," 同时按钮里面的内容会变化，注意button里面的内容通过innerHTML修改 "),l("li",null,"里面秒数是有变化的，因此需要用到定时器"),l("li",null,"定义一个变量，在定时器里面，不断递减"),l("li",null," 如果变量为0说明到了时间，我们需要停止定时器，并且复原按钮初始状态。 ")]),l("pre",null,[l("code",{class:"language-html line-numbers"},`  手机号码：<input type="number">
  <button>发送</button>
  <script>
      var btn = document.querySelector('button');
      var time = 3;                               // 定义一个全局变量，剩余多少秒的变量，递减
      btn.addEventListener('click', function() {
          btn.disabled = true;                    // 点击后禁用按钮，进入倒计时
          var dingShi = setInterval(function() {  // 起一个定时器名
              if (time == 0) {                    // 判断，如果time等于0，那么清除定时器，解开按钮
                  clearInterval(dingShi);
                  btn.disabled = false;
                  btn.innerHTML = '发送';          // 记得修改解开后按钮的名称
                  time = 3;                       // 不能让时间一直 -- ，要让时间重新开始计算
              } else {                            // 如果不等于0，则倒计时
                  btn.innerHTML = '剩余' + time + '秒'; //改发送是通过innerHTML。不是value值
                  time--;                         // 递减
              }
          }, 1000);
      })
  <\/script>

  // 根据取模的规律，当除数小于被除数，取模就是除数自己
  // index = index % img .length;   ===     if(index >= img.length){ index = 0 }`)])])],-1),l("p",null,"this 指向问题",-1),l("ul",null,[l("li",null," this的指向在函数定义的时候是确定不了的，只有函数执行的时候才能确定this到底指向谁， 一般情况下this的最终指向的是那个调用它的对象. "),l("li",null,[e(" 全局作用域或者普通函数中this指向全局对象window（注意定时器里面的this指向window） "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  console.log(this);             // 指向 window,顶级对象
  function fn(){
      console.log(this);
  }
  fn();                          // 这里也是指向window顶级对象，只是省略了  window .fn();`)])]),l("li",null,[e(" 方法调用中，谁调用this指向谁 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  var o = {
    sayHi: function() {
        console.log(this);       // this 指向的是o调用者 这个对象
    }
  }
  o.sayHi();`)])]),l("li",null,[e(" 构造函数中this指向构造函数的实例 "),l("ul",null,[l("li",null,"当以函数的形式调用时，this 是window对象"),l("li",null,"当以方法的形式调用时，谁调用方法this ，就是谁"),l("li",null,"当以构造函数的形式调用时，this就是新创建的那个对象")])])],-1),l("p",null,"JS 的执行队列",-1),l("ul",null,[l("li",null,[e(" JavaScript语言的一大特点就是单线程，也就是说，同一个时间只能做一件事。这是因为Javascript这门脚本语言诞生的使命所致 "),l("ul",null,[l("li",null," JavaScript是为处理页面中用户的交互，以及操作DOM而诞生的。比如我们对某个DOM元素进行添加和删除操作，不能同时进行。 "),l("li",null,"应该先进行添加，之后再删除。")])]),l("li",null," 单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务。这样所导致的问题是：如果JS执行的时间过长，这样 就会造成页面的渲染不连贯，导致页面渲染加载阻塞的感觉。 "),l("li",null,[e(" 为了解决这个问题，利用多核CPU的计算能力，HTML5提出Web Worker标准，允许JavaScript脚本创建多个线程。于是JS中出现了同步和异步。 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  /*
  同步：
      前一个任务结束后再执行后一个任务，程序的执行顺序与任务的排列顺序是一致的、同步的。比如做饭的同步做法：
        我们要烧水煮饭，等水开了（10分钟之后），再去切菜，炒菜。

  异步：
      你在做一件事情时，因为这件事情会花费很长时间，在做这件事的同时，你还可以去处理其他事情。比如做饭的异步做法：
        我们在烧水的同时，利用这10分钟，去切菜，炒菜。

  同步任务：
      同步任务都在主线程上执行，形成一个执行栈。

  异步任务：
      JS的异步是通过回调函数实现的。
      一般而言，异步任务有以下三种类型
          1. 普通事件，如click、resize等
          2. 资源加载，如load、error等
          3. 定时器，包括setInterval、setTimeout等
      异步任务相关回调函数添加到任务队列中（任务队列也称为消息队列）。
      他们的本质区别：这条流水线上各个流程的执行顺序不同。  */
              `)])]),l("li",null,[e(" 执行机制： "),l("ul",null,[l("li",null,"先执行 执行栈中的同步任务。"),l("li",null,"异步任务（回调函数）放入任务队列中。"),l("li",null," 一旦执行栈中的所有同步任务执行完毕，系统就会按次序读取任务队列中的异步任务，于是被读取的异步任务结束等待状态，进入执行钱，开始执行。 ")])]),l("li",null,[e(" 理解：把执行栈看做为主车道，任务队列看做为应急车道，当有坏车时（回调函数），开往应急车道，修好时再回到主车道最后一台 车的后面，这样执行不影响主车道的畅通 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  console.log(1);
  setInterval(function(){
      console.log(3);
  },1000)
  console.log(2);  // 以上执行结果根据最新的H5 web  worker标准执行结果  1 2 3，实现异步效果
  // 无需等待

  console.log(1);
  setInterval(function(){
      console.log(3);
  },0)
  console.log(2);           // 1 2 3
  // 疑问：为什么不会是1 3 2
  // 因为 3 里面有回调函数，不属于同步任务，所以会后执行`)])])],-1),l("p",null,"location 对象",-1),l("ul",null,[l("li",null," window对象给我们提供了一个location属性用于获取或设置窗体的URL，并且可以用于解析URL。因为这个属性返回的是一个对象， 所以我们将这个属性也称为location对象。 "),l("li",null,[e(" 统一资源定位符（Uniform Resource Locator，URL）是互联网上标准资源的地址。互联网上的每个文件都有一个唯一的URL，它 包含的信息指出文件的位置以及浏器应该怎么处理它。 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  URL的一般语法格式为：
  protocol：//host[：port]/path/[？query]#fragment http://www.itcast.cn/index.html？name=andysage=18#1ink

  /*
    组成
      protocol                    通信协议常用的http、ftp、WebSocket、TCP等
      host                        主机（域名）www.baidu.com
      port                        端口号可选，省略时使用方案的默认端口如http的默认端口为80
      path                        路径由零或多个”符号隔开的字符串，一般用来表示主机上的一个目录或文件地址
      query                       参数以键值对的形式，通过&符号分隔开来
      fragment                    片段#后面内容常见于链接锚点

    location对象的属性
      location.href               获取或者设置整个URL
      location.host               返回主机（域名）www.baidu.com
      location.port               返回端口号如果未写返回空字符串
      location.pathname           返回路径
      location.search             返回参数
      location.hash               返回片段#后面内容常见于链接锚点
  */`)])]),l("li",null,[e(" 重点记住location.href 和 location.hash "),l("ul",null,[l("li",null,[e(" 代码 "),l("pre",null,[l("code",{class:"language-html line-numbers"},`  <button>点击</button>
  <script>
      var btn = document.querySelector('button');
      btn.addEventListener('click', function() {
          console.log(window.location.href);             // 点击按钮得到当前的url
          location.href = 'https://www.baidu.com';       // 点击后跳转新的链接
      })
  <\/script>

  //  在主网页中分发到对应的页面中 test方法来检测
  window.location.href = /Android|webOS|iPhone|iPad|BlackBeery/i.test(navigator.userAgent) ? "phone.html" : "pc.html"`)])]),l("li",null,[e(" 案例：五秒钟跳转页面 "),l("pre",null,[l("code",{class:"language-html line-numbers"},`  // 利用定时器做倒计时效果
  // 时间到了，就跳转页面。使用 location.href
  <div></div>
  <script>
      var timer = 5;
      var div = document.querySelector('div');
      time1();                             // 点调用一次，防止刷新后页面空白
      setInterval(time1, 1000)             // 创建一个定时器，调用函数
      function time1() {                   // 封装一个跳转函数
          if (timer == 0) {
              location.href = 'https://www.baidu.com';
          } else {
              div.innerHTML = '还有' + timer + '秒跳转';
              timer--;
          }
      }
  <\/script>`)])])])]),l("li",null,[e(" location 对象的方法 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  location.assign()                          /* 跟href一样，可以跳转页面（也称为重定向页面） */
  location.replace()                         /* 替换当前页面，因为不记录历史，所以不能后退页面 */
  location.reload()                          /* 重新加载页面，相当于刷新按钮或者f5如果参数为true 强制刷新ctrl+f5 */
  location.assign('https://www.baidu.com')   /* 有记录浏览历史，所以可以实现后退功能 */`)])]),l("li",null,[e(" navigator 对象（了解就行，一般是服务端来做的） "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  /* navigator对象包含有关浏览器的信息，它有很多属性
  我们最常用的是userAgent, 该属性可以返回由客户机发送服务器的 user-agent 头部的值。
  下面前端代码可以判断用户那个终端打开页面，实现跳转 */

  if ((navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile
      |MOOBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    ))) {
    window.location.href = "phone.html";        // 手机
  } else {
    window.location.href = "index.html";        // 电脑
  }`)])])],-1),l("p",null,"history 对象",-1),l("ul",null,[l("li",null,[e(" window对象给我们提供了一个history对象，与浏览器历史记录进行交互。该对象包含用户（在浏览器窗口中） "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  history.forward ();     // 前进功能
  history.back();         // 可以后退功能
  history.go(1);          // 前进后退功能参数如果是1前进1个页面如果是-1后退1个页面
                          // history对象一般在实际开发中比较少用，但是会在一些OA办公系统中见到。 `)])])],-1)])),_:1,__:[49]}),i(s,{id:"part3",shadow:"hover"},{default:t(()=>n[50]||(n[50]=[l("h2",null,"网页效果",-1),l("p",null,"网页特效 （PC端网页特效 元素偏移量offset系列）",-1),l("ul",null,[l("li",null,[e(" offset概述： offset翻译过来就是偏移量，我们使用offset系列相关属性可以动态的得到该元素的位置（偏移）、大小等。 "),l("ul",null,[l("li",null,"获得元素距离带有定位父元素的位置"),l("li",null,"获得元素自身的大小（宽度高度）"),l("li",null,"注意：返回的数值都不带单位，注意单词大小写")]),l("pre",null,[l("code",{class:"language-js line-numbers"},`  var div = document.querySelector("div");
  div.offsetParent                         /* 返回作为该元素带有定位的父级元素，如果父级都没有定位则返回body */
  div.offsetTop                            /* 返回元素相对带有定位父元素上方的偏移*/
  div.offsetLeft                           /* 返回元素相对带有定位父元素左边框的偏移 */
  div.offsetWidth                          /* 返回自身包括padding、边框、内容区的宽度，返回数值不带单位 */
  div.offsetHeight                         /* 返回自身包括padding、边框、内容区的高度，返回数值不带单位 */

  // 注意： offsetWidth和 可以得到元素的大小宽度和高度是包padding+border+width 但是没有margin值`)])]),l("li",null,[e(" offset 和 style 的区别 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  offset  可以得到任意样式表中的样式值             |        style         只能得到行内样式表中的样式值
  offset  系列获得的数值是没有单位的               |        style.width   获得的是带有单位的字符串
  offsetWidth 包含padding+border+width           |        style.width   获得不包含padding和border的值
  offsetWidth 等属性是只读属性，只能获取不能赋值    |        style.width   是可读写属性，可以获取也可以赋值

  所以,我们想要获取元素大小位置，用offset更合适     |         所以，我们想要给元素更改值，则需要用style改变`)])]),l("li",null,[e(" 案例 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  //  案例1：点击后获取鼠标的坐标
  /* 思路：
      我们在盒子内点击，想要得到鼠标距离盒子左右的距离。
      首先得到鼠标在页面中的坐标（e.pageXe.pageY）
      其次得到盒子在页面中的距离（box.offsetLeft，box.offsetTop）
      用鼠标距离页面的坐标减去盒子在页面中的距离，得到鼠标在盒子内的坐标
      如果想要移动一下鼠标，就要获取最新的坐标，使用鼠标移动事件mousemove  */
  <div> class='box'></div>        // 记得带定位

  var box = document.querySelector('.box');
  box.addEventListener('mousemove', function(e) {
      var x = e.pageX - this.offsetLeft;
      var y = e.pageY - this.offsetTop;
      this.innerHTML = x + ' ' + y;
  });

  // 案例2：模态框拖拽 弹出框，我们也称为模态框
  /* 思路：
      点击弹出层，会弹出模态框，并且显示灰色半透明的遮挡层。
      点击关闭按钮，可以关闭模态框，并且同时关闭灰色半透明遮挡层。
      鼠标放到模态框最上面一行，可以按住鼠标拖拽模态框在页面中移动。
      鼠标松开，可以停止拖动模态框移动。
      详细操作：
          点击弹出层，模态框和遮挡层就会显示出来display:block；
          点击关闭按钮，模态框和遮挡层就会隐藏起来display:none；
          在页面中拖拽的原理：鼠标按下并且移动，之后松开鼠标
          触发事件是鼠标按下mousedown，鼠标移动mousemove鼠标松开mouseup
          拖拽过程：鼠标移动过程中，获得最新的值赋值给模态框的left和top值，这样模态框可以跟着鼠标走了
          鼠标的坐标减去鼠标在盒子内的坐标，才是模态框真正的位置。
          鼠标按下，我们要得到鼠标在盒子的坐标。
          鼠标移动，就让模态框的坐标设置为：鼠标坐标减去盒子坐标即可，注意移动事件写到按下事件里面。
          鼠标松开，就停止拖拽，就是可以让鼠标移动事件解除  */
  <div class="link"><a id="links" href="javascript:;">点击，弹出登录框</a></div>
  <div id="login" class="box">
      <div id="title" class="title">鼠标拖动区域</div>
      <span><a id="closeBtn" href="javascript:;">关闭</a></span>
  </div>

  <!-- 遮罩层 -->
  <div class="bg"></div>
  <script>
      var link = document.querySelector('#links');
      var box = document.querySelector('.box');
      var bg = document.querySelector('.bg')
      var closeBtn = document.querySelector('#closeBtn');
      var title = document.querySelector('#title');
      // 点击后打开
      link.addEventListener('click', function() {
              box.style.display = 'block';            // 注意单词  display
              bg.style.display = 'block';
          })
          // 点击后关闭
      closeBtn.addEventListener('click', function() {
              box.style.display = 'none';             // 注意单词  display
              bg.style.display = 'none';
          })
          //拖动效果JS 1、 先获取要拖拽的区域， 当鼠标按下， 就获得的鼠标在盒子内的坐标
      title.addEventListener('mousedown', function(e) {
          var x = e.pageX - box.offsetLeft;
          var y = e.pageY - box.offsetTop;
          // 2、鼠标移动的时候，把鼠标在页面中的坐标减去鼠标在盒子的坐标就是模态框的left和top值
          document.addEventListener('mousemove', move)

          function move(e) {
              box.style.left = e.pageX - x + 'px';    // offset 只能获取不能赋值，所以这里用style
              box.style.top = e.pageY - y + 'px';     // 注意 要加单位
          }
          // 3、鼠标弹起，就让鼠标移动事件 移除
          document.addEventListener('mouseup', function() {
              this.removeEventListener('mousemove', move);
          })
      })
  <\/script>

  // 案例3：仿京东放大镜效果
  /* 需求：
      整个案例可以分为三个功能模块
      鼠标经过小图片盒子，黄色的遮挡层和大图片盒子显示，离开隐藏2个盒子功能
      黄色的遮挡层跟随鼠标功能。
      * 移动黄色遮挡层，大图片跟随移动功能。
      公式：
            1        x                            1 * 4
            一   =   一          求x         x  =  一一一
            2        4                              2

      * 求大图片的移动距离
      公式：
            遮挡层移动距离                     大图片移动距离
            ----------------     =         ---------------       求大图片移动距离？
            遮挡层最大移动距离                 大图片最大移动距离

                                           遮挡层移动距离 * 大图片最大移动距离
            大图片移动距离          =        ------------------------------
                                                  遮挡层最大移动距离

      分析：
        黄色的遮挡层跟随鼠标功能。
        把鼠标坐标给遮挡层不合适。因为遮挡层坐标以父盒子为准。
        首先是获得鼠标在盒子的坐标。
        之后把数值给遮挡层做为left和top值。
        此时用到鼠标移动事件，但是还是在小图片盒子内移动。
        发现，遮挡层位置不对，需要再减去盒子自身高度和宽度的一半。
        遮挡层不能超出小图片盒子范围。
        如果小于零，就把坐标设置为0
        遮挡层的最大移动距离：小图片盒子宽度减去遮挡层盒子宽度  */

  <style>
      .preview_img {position: relative; width: 400px;height: 398px;border: 1px solid #ccc;}
      .mask {display: none;position: absolute;top: 0; left: 0;width: 300px;height: 300px;
          background: #FEDE4F;opacity: .5;border: 1px solid #ccc;cursor: move;z-index: 999;}
      .big {display: none;position: absolute;box-sizing: border-box;top: 0;left: 405px;width: 500px;
          height: 500px;border: 1px solid #ccc;z-index: 999;overflow: hidden;}
      .big .bigImg { position: absolute;top: 0;left: 0;}
  </style>

  <body>
    <!-- 预览区域 -->
    <div class="preview_img">
        <img src="images/s3.png" alt="">
        <div> class="mask"></div>
        <div> class="big">
            <img src="images/big.jpg" alt="" class="bigImg">
        </div>
    </div>
  </body>

  <script">
    window.addEventListener('load', function() {
      var preview_img = document.querySelector('.preview_img');
      var mask = document.querySelector('.mask');
      var big = document.querySelector('.big');
      preview_img.addEventListener('mouseover', function() {
          mask.style.display = 'block';
          big.style.display = 'block';
      })
      preview_img.addEventListener('mouseout', function() {
          mask.style.display = 'none';
          big.style.display = 'none';
      })
      preview_img.addEventListener('mousemove', function(e) {
          // 先计算鼠标在盒子里面的坐标
          var x = e.pageX - this.offsetLeft;
          var y = e.pageY - this.offsetTop;
          //把得出来的鼠标坐标赋值给黄色盒子
          //赋值一个变量
          var maskX = x - mask.offsetWidth / 2;
          var maskY = y - mask.offsetHeight / 2;
          var maskMax = preview_img.offsetWidth - mask.offsetWidth; //把小盒子的宽度 - 黄色盒子的宽度
          //如果x坐标小于了0 就让他停在0的位置
          if (maskX <= 0) {                // 如果黄色盒子的坐标小于了0，那么盒子X坐标就直接为0不能是负数了
              maskX = 0;
          } else if (maskX >= maskMax) {   // 如果盒子的坐标大于了100，那么固定盒子坐标为100，不能超过这个值
              maskX = maskMax;
          }
          if (maskY <= 0) {                // 如果黄色盒子的坐标小于了0，那么盒子Y坐标就直接为0不能是负数了
              maskY = 0;
          } else if (maskY >= maskMax) {   // 如果盒子的坐标大于了100，那么固定盒子坐标为100，不能超过这个值
              maskY = maskMax;
          }
          mask.style.left = maskX + 'px';     // 盒子宽度/ 2 = 盒子的一半
          mask.style.top = maskY + 'px';
          // 大图片的移动距离 = 遮挡层移动距离*大图片最大移动距离 / 遮挡层的最大移动距离
          // 大图
          var bigIMg = document.querySelector('.bigImg');
          // 大图片最大移动距离
          var bigMax = bigIMg.offsetWidth - big.offsetWidth;
          // 大图片移动距离 X Y
          var bigX = maskX * bigMax / maskMax;
          var bigY = maskY * bigMax / maskMax;
          bigIMg.style.left = -bigX + 'px';
          bigIMg.style.top = -bigY + 'px';
      })
    })
  <\/script>

  /* 拖拽问题： 当我们拖拽一个网页中的内容时，浏览器会默认去搜索引擎中搜索内容，比如ctrl +a 会全部拖拽 此时会导致拖拽功能的异常，这个是浏览器默认的行为。
     解决方案： 如果不希望发生这个行为，则通过 return false ; 取消这个行为，但是这个方法对IE 8不起作用  */
  steCapture &&  setCapture ();
  releaseCapture && releaseCapture() ;`)])])],-1),l("p",null,"元素可视区 client",-1),l("ul",null,[l("li",null,[e(" client翻译过来就是客户端，我们使用client系列的相关属性来获取元素可视区的相关信息。通过client系列的相关属性 可以动态的得到该元素的边框大小、元素小等。 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  var div = document.querySelector(div);

  div.clientTop     /* 返回元素上边框的大小 */
  div.clientLeft    /* 返回元素左边框的大小 */
  div.clientWidth   /* 返回自身包括padding、内容区的宽度，不含边框，返回数值不带单位公 */
  div.clientHeight  /* 返回自身包括padding、内容区的高度，不含边框，返回数值不带单位 */

  // client 和 offset 最大的区别就是： offset 不包含边框`)])])],-1),l("p",null,"淘宝flexible.js (源码分析)",-1),l("ul",null,[l("li",null," 立即执行函数 ( function () {} )() 或者 ( function() {} () ) //第二个小括号可以看做调用函数，可以传值 "),l("li",null,[e(" 主要作用：创建一个独立的作用域 , 不需要调用，立马能够自己执行 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  (function(a, b) {
      console.log(a + b);
  }(3, 2));
  // 多个立即执行函数，需要用 ；来隔开
  (function sum(a, b) {           // 写函数名也是不会报错的
      console.log(a - b);
  })(3, 2);

  // 两种立即执行函数写法，包含ES6语法
    ((a, b) => {
        console.log(a + b)
    })(1, 3);

    (function say() {
        console.log(111);
    })();

    (function say2() {
        console.log(333);
    }());

  // 立即执行函数最大的作用就是独立创建了一个作用域，里面所有的变量都是局部变量不个命名冲突的`)])]),l("li",null,[e(" 下面三种情况都会刷新页面都会触发load事件 "),l("ul",null,[l("li",null,"a标签的超链接"),l("li",null,"F5或者刷新按钮（强制新）"),l("li",null,"前进后退按钮")])]),l("li",null," 但是火狐中，有个特点，有个往返缓存”，这个缓存中不仅保存着页面数据，还保存了DOM和JavaScript的状态； 实际上是将整个页面都保存在了内存里。 所以此时后退按钮不能刷新页面。 "),l("li",null,[e(" 此时可以使用pageshow事件来触发。，这个事件在页面显示时间触发，无论页面是否来自缓存。在重新加载页面中， pageshow会在load事件触发后触发；根据事件对象中的persisted来判断是否是缓存中的页面触发的pageshow事件， 注意这个事件给window添加 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  (function flexible(window, document) {
    var docEl = document.documentElement
        // dpr 物理像素比，pc端是1 ，移动端是2
        // 意思是先看下当前浏览器的像素比，如果能拿到，就显示当前像素比，如果拿不到，就当1来看
    var dpr = window.devicePixelRatio || 1

    //   设置body 的字体大小
    function setBodyFontSize() {
        if (document.body) { //先看页面有没有body元素，有执行下面，没有执行否则代码
            document.body.style.fontSize = (12 * dpr) + 'px'
        } else { //否则添加一个事件，等页面主要元素加载完毕，再执行setBodyFontSize
            document.addEventListener('DOMContentLoaded', setBodyFontSize)
        }
    }
    setBodyFontSize();

    // set 1rem = viewWidth / 10  //开始设置HTML 的文字大小
    function setRemUnit() {
        // html的宽度 /10
        var rem = docEl.clientWidth / 10
        docEl.style.fontSize = rem + 'px'
    }
    setRemUnit();

    // reset rem unit on page resize  当我们页面尺寸大小发生变化时，要重新设置下rem的大小
    window.addEventListener('resize', setRemUnit)
        //pageshow 是我们重新加载页面触发的事件
    window.addEventListener('pageshow', function(e) {
        //e.persisted 返回的是true就是说如果这个页面是从缓存取过来的页面，也需要从新计算一下rem大小
        if (e.persisted) {
            setRemUnit();
        }
    })

    // detect 0.5px supports  //有些移动端的浏览器不支持0.5像素的写法
    if (dpr >= 2) {
        var fakeBody = document.createElement('body')
        var testElement = document.createElement('div')
        testElement.style.border = '.5px solid transparent'
        fakeBody.appendChild(testElement)
        docEl.appendChild(fakeBody)
        if (testElement.offsetHeight === 1) {
            docEl.classList.add('hairlines')
        }
        docEl.removeChild(fakeBody)
    }
  }(window, document))`)])])],-1),l("p",null,"元素scroll",-1),l("ul",null,[l("li",null,[e(" scroll 翻译过来就是滚动的，我们使用scroll系列的相关属性可以动态的得到该元素的大小、滚动距离等。 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  div.scrollTop            /* 返回被卷去的上侧距离，返回数值不带单位 */
  div.scrollLeft           /* 返回被卷去的左侧距离，返回数值不带单位 */
  div.scrollWidth          /* 返回自身实际的宽度，不含边框，返回数值不带单位 */
  div.scrollHeight         /* 返回自身实际的高度，不含边框，返回数值不带单位 */`)])]),l("li",null,[e(" 案例：仿淘宝固定右侧侧边栏 330集 "),l("ul",null,[l("li",null,"原先侧边栏是绝对定位"),l("li",null,"当页面滚动到一定位置，侧边栏改为固定定位"),l("li",null,"页面继续滚动，会让返回顶部显示出来"),l("li",null," 需要用到页面滚动事件scroll 因为是页面滚动，所以事件源是document "),l("li",null,"滚动到某个位置，就是判断页面被卷去的上部值。"),l("li",null," 页面被卷去的头部：可以通过window.pageYOffset获得如果是被卷去的左侧 window.pageXOffset "),l("li",null," 注意，元素被卷去的头部是element.scrollTop，如果是页面被卷去的头部则是window.pageYoffset ")]),l("pre",null,[l("code",{class:"language-html line-numbers"},`  <div class="slider-bar">
    <span class="goBack">返回顶部</span>
  </div>
  <div class="header w">头部区域</div>
  <div class="banner w">banner区域</div>
  <div class="main w">主体部分</div>
  <script>
      // 1 获取元素
      var sliderBar = document.querySelector('.slider-bar');
      var banner = document.querySelector('.banner');
      // banner.offEstTop 就是被卷曲头部的大小 一定要写到滚动的外面
      var bannerTop = banner.offsetTop;
      // 当我们侧边栏固定定位置后应该变化的数值
      var sliderBarTop = sliderBar.offsetTop - bannerTop;
      // 获取main 元素
      var main = document.querySelector('.main');
      var mainTop = main.offsetTop;
      var goBack = document.querySelector('.goBack');
      // 2、页面滚动事件scroll
      document.addEventListener('scroll', function() {
          // window.pageYOffset 是页面被卷进去的头部
          // 3、当我们页面被卷去的头部大于等于了172 ，此时右侧栏变成了固定定位
          if (window.pageYOffset >= bannerTop) {
              sliderBar.style.position = 'fixed';
              sliderBar.style.top = sliderBarTop + 'px';
          } else {
              sliderBar.style.position = 'absolute';
              sliderBar.style.top = '300px'; // 如果小于 则改回原来的绝对定位
          }
          // 当我们页面滚动到主题部分或，显示
          if (window.pageYOffset >= mainTop) {
              goBack.style.display = 'block';
          } else {
              goBack.style.display = 'none';
          }
      })
      goBack.addEventListener('click', function() {
           window.scroll(0, 0);    // 返回顶部，Y值可以根据需要填写值，不要带单位
      })
  <\/script>`)])]),l("li",null,[e(" 页面被卷去的头部兼容性解决方案 "),l("ul",null,[l("li",null,[e(" 需要注意的是，页面被卷去的头部，有兼容性问题，因此被卷去的头部通常有如下几种写法： "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  /* 声明了DTD，使用document.documentElement.scrollTop
     未声明DTD，使用 document.body.scrollTop
     新方法window.pageOffset 和window.pageXOffset，IE9开始支持 */

  function getScroll() {
    return {
      left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
      top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    };
  }
              `)])]),l("li",null," scrollHeight - scrollTop == clientHeight // 满足这个条件，说明垂直滚动条已经拉到底了 "),l("li",null,"滚动事件 onscroll // 会在滚动条滚动的时候触发"),l("li",null," Chrome认为浏览器的滚动条属于body的，可以通过 document.body.scrollTop来获取 "),l("li",null," 而火狐等浏览器认为浏览器的滚动条属于html的，可以通过document.documentElement.scrollTop 来获取 "),l("li",null,[e(" 处理兼容性 ： "),l("pre",null,[l("code",{class:"language-js line-numbers"},"  var a = document.body.scrollTop || document.documentElement.scrollTop ")])]),l("li",null,[e(" 判断鼠标滚轮滚动的方向： "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  box.onmouseWheel = function (event) {
    event = event || window.event;
    // event.wheelDelta 可以获取鼠标滚轮滚动的方向，向上滚120，向下滚-120，不看值只看正负，火狐不支持
    // event.detail 在火狐中支持使用，向上-3 向下3，一样只看正负，不看值，来判断滚轮向上还是向下
    if (event.wheelDelta > 0 || event.detail < 0) {
      alert(' 向上');
    } else {
      alert(' 向下');
    }
    return false // 取消浏览器默认行为
                 // 但是addEventLister里，此方法不管用，需要用 event .preventDefault (); 方法取消
                 // 兼容性写法 ：event .preventDefault && event.preventDefault();
                 // 如果第一个为false， 就直接不用
  }`)])])])])],-1),l("p",null,"总结",-1),l("ul",null,[l("li",null,[e(" 代码： "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  element.offsetWidth      /* 返回自身包括padding、边框、内容区的宽度，返回数值不带单位 */
  element.clientWidth      /* 返回自身包括padding、内容区的宽度，不含边框，返回数值不带单位 */
  element.scrollWidth      /* 返回自身实际的宽度，不含边框，返回数值不带单位 */`)])]),l("li",null,[e(" 他们主要用法： "),l("ul",null,[l("li",null,"offset 系列经常用于获得元素位置 offsetLeft offsetTop"),l("li",null,"client 经常用于获取元素大小 clientWidth clientHeight"),l("li",null,"scroll 经常用于获取滚动距离 scrollTop scrollLeft")])])],-1),l("p",null,"动画函数封装1",-1),l("ul",null,[l("li",null,"动画实现核心原理：通过定时器setInterval（）不断移动盒子位置"),l("li",null,[e(" 实现步骤： "),l("ul",null,[l("li",null,"获得盒子当前位置"),l("li",null,"让盒子在当前位置加上1个移动距离"),l("li",null,"利用定时器不断重复这个操作"),l("li",null,"加一个结束定时器的条件"),l("li",null,"注意：此元素需要添加定位，才能使用 element.style.left"),l("li",null,"注意：停止动画，本质就是停止定时器，用clearInterval")]),l("pre",null,[l("code",{class:"language-js line-numbers"},`  var div = document.querySelector('div');
  var stop = setInterval(function() {
      if (div.offsetLeft >= 400) {
          // 停止动画，本质就是停止定时器，用clearInterval
          clearInterval(stop);
      } else {
          div.style.left = div.offsetLeft + 20 + 'px';   //赋值用 style
      }
  }, 80);`)])])],-1),l("p",null,"动画函数封装2",-1),l("ul",null,[l("li",null,"注意函数需要传递2个参数，动画对象和移动到的距离。"),l("li",null,"简单动画函数封装 obj 目标对象 target 目标位置"),l("li",null,[e(" function animate（obj，target）{} "),l("pre",null,[l("code",{class:"language-html line-numbers"},`  div {
    position: absolute;left: 0;width: 100px;height: 100px;background-color: pink;
    color: snow;background: url(images/1.webp) no-repeat;background-size: 100%;
  }
  span {
      position: absolute;top: 0; width: 100px;height: 100px;background-color: skyblue;
  }

  <script>
      function animate1(obj, target, num) {
          var stop = setInterval(function() {
              if (obj.offsetLeft >= target) {
                  // 停止动画，本质就是停止定时器，用clearInterval
                  clearInterval(stop);
              }
              obj.style.left = obj.offsetLeft + num + 'px';

          }, 1000);
      }
      function animate2(obj, target, num) {
          var stop = setInterval(function() {
              if (obj.offsetTop >= target) {
                  // 停止动画，本质就是停止定时器，用clearInterval
                  clearInterval(stop);
              }
              obj.style.top = obj.offsetTop + num + 'px';

          }, 1000);
      }
      var div = document.querySelector('div');
      var span = document.querySelector('span');
      // 调用函数
      animate1(div, 100, 10); //传递对象，目标距离，一次走多少像素
      animate2(span, 100, 10);
  <\/script>`)])]),l("li",null,[e(" 动画函数给不同元素记录不同定时器 "),l("ul",null,[l("li",null," 如果多个元素都使用这个动画函数，每次都要var声明定时器。我们可以给不同的元素使用不同的定时器 （自己专门用自己的定时器）。 "),l("li",null,[e(" 核心原理：利用JS是一门动态语言，可以很方便的给当前对象添加属性。 "),l("pre",null,[l("code",{class:"language-html line-numbers"},`  <div></div>
  <span></span>
  <script>>
      // var obj={ }；
      // obj.name='andy'；
      // 这里利用对象，
      function animate(obj, target, num) {
          obj.stop = setInterval(function() {
              if (obj.offsetLeft >= target) {
                  // 停止动画，本质就是停止定时器，用clearInterval
                  clearInterval(obj.stop);
              }
              obj.style.left = obj.offsetLeft + num + 'px';
          }, 30);
      }
      var div = document.querySelector('div');
      var span = document.querySelector('span');
      //调用函数
      animate(div, 200, 10);          // 传递对象，目标距离，一次走多少像素
      animate(span, 100, 10);
  <\/script>

  // 有一个bug:  当有一个按钮来控制这个动画时，一直按按钮，动画速度就越快，因为开启了太多的定时器
  // 解决方案：   让我们元素只有一个定时器执行, 就得当点击的时候先清除原先有的定时器，然后再执行新的定时器
  <button>开始</button>
  <div></div>
  <script>>
      // var obj={ }；
      // obj.name='andy'；
      // 这里利用对象，
      function animate(obj, target) {
          clearInterval(obj.stop);    // 当点击按钮调用动画的函数，就先清除一次原先的定时器，再去执行定时器
          obj.stop = setInterval(function() {
              if (obj.offsetLeft >= target) {
                  // 停止动画，本质就是停止定时器，用clearInterval
                  clearInterval(obj.stop);
              }
              obj.style.left = obj.offsetLeft + 1 + 'px';
          }, 30);
      }
      var div = document.querySelector('div');
      var span = document.querySelector('span');
      // 调用函数
      var btn = document.querySelector('button');
      btn.addEventListener('click', function() {
          animate(div, 200);          // 传递对象，目标距离，一次走多少像素
      })
  <\/script>`)])])])]),l("li",null,[e(" 缓动动画： 缓动动画就是让元素运动速度有所变化，最常见的是让速度慢慢停下来 "),l("pre",null,[l("code",{class:"language-html line-numbers"},` /* 匀速动画：
      匀速动画就是 盒子当前的位置 + 固定的值 10
    缓动动画：
      缓动动画就是 盒子当前的位置 + 变化的值 （（目标值 - 现在的位置）/ 10 ）
    思路：
      让盒子每次移动的距离慢慢变小，速度就会慢慢落下来。
      核心算法： （目标值 - 现在的位置）/ 10 做为每次移动的距离步长 ，步长可以改变
      停止的条件是：让当前盒子位置等于目标位置就停止定时器  */

  <button>开始</button>
  <div></div>
  <script>
      // var obj={ }；
      // obj.name='andy'；
      // 这里利用对象，
      function animate(obj, target) {
          clearInterval(obj.stop); //当点击调用动画的函数，就先清除一次原先的定时器，再去执行定时器
          obj.stop = setInterval(function() {

           删  var step = (target - obj.offsetLeft) / 10;              // 1、 加一个变量 ，这里不取整会出现像素偏差问题
           删  var step = Math.ceil((target - obj.offsetLeft) / 10);   // 3、注意要取整  但是负值时 是会出错
               //所以以上代码  要改成  下面的代码
           *  var step = (target - obj.offsetLeft) / 10;
              //判断，step 大于0吗？如果大于执行ceil，否则执行floor
                step = step > 0 ?  Math.ceil(step):Math.floor(step);

              if (obj.offsetLeft == target) {                         // 这里可以大于，但是一般写等于，没有必要大于
                  // 停止动画，本质就是停止定时器，用clearInterval
                  clearInterval(obj.stop);
              }
                  // 修改，把每次加 1 这个步长 改为缓动慢慢变小的值
                  // 也就是步长公式：（目标值 - 现在的位置）/ 10   步长值要写道定时器的里面
               删  obj.style.left = obj.offsetLeft + (target - obj.offsetLeft) / 10 + 'px';  //自己写的
               *   obj.style.left = obj.offsetLeft + step + 'px';     // 2、老师写的

          }, 30);                                                     // 推荐改成 15  然后步长大一些看到效果更好
      }
      var div = document.querySelector('div');
      var span = document.querySelector('span');
      // 调用函数
      var btn = document.querySelector('button');
      btn.addEventListener('click', function() {
          animate(div, 200);                                          // 传递对象，目标距离，一次走多少像素
      })
  <\/script>`)])]),l("li",null,[e(" 动画函数添加 回调函数 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  /* 回调函数原理
      函数可以作为一个参数。将这个函数作为参数传到另一个函数里面，当那个函数执行完之后， 再执行传进去的这个函数，这个过程就叫做回调。
    回调函数写的位置
      定时器结束的位置。

  // var obj={ }；
  // obj.name='andy'；
  // 这里利用对象，
  function animate(obj, target, callback) {
      //这里callback是形参，等于  callback =  传入实参的function(){}
      clearInterval(obj.stop);                                  // 当点击调用动画的函数，就先清除一次原先的定时器，再去执行定时器
      obj.stop = setInterval(function() {
          var step = (target - obj.offsetLeft) / 10;
          step = step > 0 ? Math.ceil(step) : Math.floor(step); // 判断，step 大于0吗？如果大于执行ceil，否则执行floor
          if (obj.offsetLeft == target) {
              // 停止动画，本质就是停止定时器，用clearInterval
              clearInterval(obj.stop);
              //回调函数写到定时器结束里面
              if (callback) {                                   // 有callback这个回调函数参数吗
                  callback();                                   // 没有就不调用，有就调用
              }
          }
          // 修改，把每次加 1 这个步长改为缓动慢慢变小的值，
          // 也就是步长公式：（目标值 - 现在的位置）/ 10
          obj.style.left = obj.offsetLeft + step + 'px';
      }, 15);                                                   // 推荐改成 15
  }
  var div = document.querySelector('div');
  //调用函数
  var btn500 = document.querySelector('.btn500');
  var btn800 = document.querySelector('.btn800');
  btn500.addEventListener('click', function() {
      animate(div, 500, function() {                            // 传递对象，目标距离，一次走多少像素,回调函数
          div.style.backgroundColor = 'red';
      });
  })
  btn800.addEventListener('click', function() {
      animate(div, 800);                                        // 传递对象，目标距离，一次走多少像素，第三个实参可以为空
  })

    `)])]),l("li",null,[e(" 动画函数封装到单独JS 文件里面 "),l("ul",null,[l("li",null," 因为以后经常使用这个动画函数，可以单独封装到一个 js 文件里面，使用的时候引用这个 js 文件即可。 "),l("li",null,"新建一个 animate.js")]),l("pre",null,[l("code",{class:"language-js line-numbers"},`  function animate(obj, target, callback) {
    // console.log(callback);  callback = function() {}  调用的时候 callback()

    // 先清除以前的定时器，只保留当前的一个定时器执行
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        // 步长值写到定时器的里面
        // 把我们步长值改为整数 不要出现小数的问题
        // var step = Math.ceil((target - obj.offsetLeft) / 10);
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            // 停止动画 本质是停止定时器
            clearInterval(obj.timer);
            // 回调函数写到定时器结束里面
            // if (callback) {       // 如果有callback 传进来，那么我们就调用callback
            //     // 调用函数
            //     callback();
            // }
            callback && callback();  // 简单写法，callback 且 callback();  如果第一个表达式的值为真，则返回表达式2，&&也称为逻辑中断符
        }
        // 把每次加1 这个步长值改为一个慢慢变小的值  步长公式：(目标值 - 现在的位置) / 10
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15);
}`)])]),l("li",null,[e(" 案例：仿京东 "),l("pre",null,[l("code",{class:"language-html line-numbers"},`  <style>
    .sliderBar {position: fixed;right: 0;bottom: 100px;width: 40px;height: 40px;text-align: center;
      line-height: 40px;cursor: pointer;color: #fff;
    }
    .con {position: absolute;left: 0;top: 0;width: 200px;height: 40px;background-color: rgb(207, 47, 207);
        z-index: -199;
    }
  </style>
  <script src="js/animate.js"><\/script>    // 注意要引入动画的js 文件
  </head>
  <body>
  <div class="sliderBar">
      <span>←</span>
      <div class="con">问题反馈</div>
  </div>
  <script>
      // 当鼠标离开sliderBar盒子就会让 con 这个盒子滑动到右侧
      var sliderBar = document.querySelector('.sliderBar');
      var con = document.querySelector('.con');
      // 当鼠标经过sliderBar盒子就会让 con 这个盒子滑动到左侧
      sliderBar.addEventListener('mouseenter', function() {
          animate(con, -160, function() {
              // 当动画执行完毕，把左箭头改为右键头
              sliderBar.children[0].innerHTML = '→';   // 当结束移动时，改变箭头
          });
      });
      sliderBar.addEventListener('mouseleave', function() {
          animate(con, 0);
          sliderBar.children[0].innerHTML = '←';       // 当鼠标离开，改会左箭头
      });
  <\/script>`)])])],-1),l("p",null,"网页轮播图",-1),l("ul",null,[l("li",null," 轮播图也称为焦点图，是网页中比较常见的网页特效。盒子已经固定大小了，如果此时加浮动， 会没有效果，需要手动修改ul 的宽度 % "),l("li",null,[e(" 框架 "),l("ul",null,[l("li",null," 大盒子装着轮播图，里面有左箭头和右箭头，底下定位三个小圆点 "),l("li",null," 放个ul ，ul 下装了三个li ，ul宽度需要超过能装下li 的宽度，才能浮动起来 ")])]),l("li",null,[e(" 需求 "),l("ul",null,[l("li",null,"鼠标放上 才会显示左右箭头，鼠标离开，影藏左右箭头"),l("li",null," 鼠标点击，切换（移动）图片 ，小圆点也要进行切换，并且点击小圆点可以实现切换效果 "),l("li",null,"鼠标离开，轮播图会自动播放，鼠标经过，停止轮播，切换手动")])]),l("li",null,[e(" 分析 "),l("ul",null,[l("li",null,"因为js较多，我们单独新建文件夹，再新建文件，引入页面中。"),l("li",null,[e(" 此时需要添加 load 事件。 "),l("pre",null,[l("code",{class:"language-js line-numbers"},"  window.addEventListener('load', function() {})")])]),l("li",null,"左右箭头 display显示影藏"),l("li",null,"动态生成小圆圈"),l("li",null,"核心思路：小圆圈的个数要跟图片张数一致"),l("li",null," 所以首先先得到ul 里面图片的张数（图片放入li 里面，所以就是 li 的个数） "),l("li",null,"利用循环动态生成小圆圈（这个小圆圈要放入ol里面）"),l("li",null,"创建节点 createElement（' li '）"),l("li",null,"插入节点ol.appendChild（ li ）"),l("li",null,"第一个小圆圈需要添加current类"),l("li",null,"小圆圈的排他思想"),l("li",null,"点击当前小圆圈，就添加current类"),l("li",null,"其余的小圆圈就移除这个current类"),l("li",null,"点击小圆圈滚动图片"),l("li",null," 此时用到animate动画函数，将s文件引入（注意，因为index.js依赖animate.js所以，animatejs要写到index.js上面） "),l("li",null,"使用动画函数的前提，该元素必须有定位"),l("li",null,"注意是u山移动而不是小li"),l("li",null," 滚动图片的核心算法：点击某个小圆圈，就让图片滚动 小圆圈的索引号 x 图片的宽度 = ul 移动负值距离 "),l("li",null," 此时需要知道小圆圈的索引号，我们可以在生成小圆圈的时候，给它设置一个自定义属性，点击的时候获取这个自定义属 "),l("li",null,"点击右侧按钮一次，就让图片滚动一张。"),l("li",null," 声明一个变量num，点击一次，自增1，让这个变量乘以图片宽度，就是ul的滚动距离。 "),l("li",null," 因为li 加了定位，所以脱离文档流，左右箭头层级需要提高（z-index） "),l("li",null,"图片无缝滚动原理"),l("li",null,"把ul第一个li复制一份，放到ul的最后面"),l("li",null," 当图片滚动到克隆的最后一张图片时，让u山快速的、不做动画的跳到最左侧：left为0 "),l("li",null,"同时num赋值为0，可以从新开始滚动图片了"),l("li",null,"代码进行 克隆第一张图片"),l("li",null," 克隆ul第一个li cloneNode（）加true深克隆复制里面的子节点false浅克隆 "),l("li",null,"添加到u山最后面appendChild"),l("li",null,"点击右侧按钮，小圆圈跟随变化"),l("li",null," 最简单的做法是再声明一个变量circle，每次点击自增1，注意，左侧按钮也需要这个变量，因此要声明全局变量。 "),l("li",null,"自动播放功能"),l("li",null,"添加一个定时器"),l("li",null,"自动播放轮播图，实际就类似于点击了右侧按钮"),l("li",null,"此时我们使用手动调用右侧按钮点击事件arrow_r.click（）")]),l("pre",null,[l("code",{class:"language-js line-numbers"},`  // js animate动画代码
  function animate(obj, target, callback) {
    clearInterval(obj.stop);
    obj.stop = setInterval(function() {
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.stop);
            callback && callback();
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15);
  }

  // js 动画代码
  <!-- 因为index.js 依赖animate.js，所以要卸载index.js的上面 -->
    <script> src="js/animate.js"><\/script>
    <script> src="js/index.js"><\/script>
    <style>
        * {margin: 0;padding: 0;box-sizing: border-box;}
        .focus {position: relative;width: 350px;height: 197px;border: 1px solid blue;margin: 0 auto;overflow: hidden;}
        .focus ul {position: absolute;top: 0;left: 0; width: 500%;
            /* 手动修改ul宽度，让里面的li能浮动起来，因为图片超出会换行 */
        }
        .focus ul li {float: left;/* 浮动图片*/}
        .btnL,
        .btnR {display: none;position: absolute;width: 30px;height: 30px;text-align: center;line-height: 30px;
            background-color: rgba(238, 255, 4, 0.801);text-decoration: none;color: black;
            /* ul加了定位,所以按钮因为层级不够,填2就可以了 */z-index: 2;}
        .btnL {top: 83.5px;left: 0;}
        .btnR {top: 83.5px;right: 0;}
        li {list-style: none;}
        .circle {position: absolute;bottom: 10px;left: 10px;}
        .circle li {display: inline-block;width: 7px;height: 7px;border: 1px solid rgb(248, 168, 168);border-radius: 7px;
            margin-right: 2px;}
        .current {background-color: rgb(255, 126, 126);}
    </style>
  </head>

  <body>
    <div class="focus">
        <!-- 按钮 -->
        <a> href="javascript:;" class="btnL"><</a>
        <a> href="javascript:;" class="btnR">></a>
        <!-- 核心滚动区域 -->
        <ul><li><a> href=""><img src="images/img1.png" alt=""></a></li>
            <li><a href=""><img src="images/img2.png" alt=""></a></li>
            <li><a> href=""><img src="images/img3.png" alt=""></a></li>
        </ul>
        <!-- 小圆点 -->
        <ol> class="circle">
        </ol>
    </div>
  //------------------------------------------------------------------------

  // js 代码
  window.addEventListener('load', function() {
    var focus = document.querySelector('.focus');
    var btnL = document.querySelector('.btnL');
    var btnR = document.querySelector('.btnR');
    var focusWidth = focus.offsetWidth;
    // 3、鼠标经过 离开 显示和影藏箭头
    focus.addEventListener('mouseenter', function() {
        btnL.style.display = 'block';
        btnR.style.display = 'block';
        clearInterval(timer);                         // 21、鼠标经过 停止定时器
        timer = null;                                 // 22、清空定时器变量
    });
    focus.addEventListener('mouseleave', function() {
        btnL.style.display = 'none';
        btnR.style.display = 'none';
        // 23 自动播放轮播图, 实际类似于点击了右侧按钮，此时我们使用手动调用右侧按钮点击事件
        timer = setInterval(function() {
            btnR.click();                             // 鼠标离开，触发手动点击事件
        }, 2000)
    });
    // 4、删掉小圆点，js动态添加 （ol里面的li  取决于 ul里li的个数）
    // 4.1因为页面太多的ul ，所以限制只能是focus里面的ul
    var ul = focus.querySelector('ul'); //获取ul
    var ol = focus.querySelector('.circle'); //获取ol
    // 4.2for 循环，i < ul下li的个数
    for (var i = 0; i < ul.children.length; i++) {
        // 4.3创建li
        var li = document.createElement('li');
        // 7.3 因为小圆点没有索引号，所以需要自定义属性来做,设置index属性，值是i,i根据循环来获取值 =ul>li的个数
        li.setAttribute('index', i);
        // 4.4把li 插入ol
        ol.appendChild(li);
        // 6、ol 里面li 点击谁，谁就加上样式current类名，排他思想，生成的时候同时绑定点击事件
        li.addEventListener('click', function() {
            // 6.1干掉所有人把所有的li清除current类名
            // 6.1.1 for循环选出 ol下孩子的长度
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            // 6.2留下我自己  当前li 设置类名(谁调用了，就给谁绑定)
            this.className = 'current';
            // 7、做动画必须要有定位，谁做给谁加定位,这里注意是ul装着li>有img。这里给ul做动画
            // 7.1 animate(obj, target, callback)
            // 7.2 ul的移动距离公式： 小圆点索引号 * 图片宽度(注意宽度是负值)
            // 7.4 当点击某个ol下的li，就拿到当前li的自定义 index属性值 ，也就是索引号
            var index = this.getAttribute('index');
            // 12 当点击了某个ol下的li，就要把这个li的索引号给 num
            num = index;
            // 13 当点击了某个ol下的li，就要把这个li的索引号给 circle
            circle = index;
            // 12+13 可以合并写法： num = circle = index;
            // 7.5 var focusWidth = focus.offsetWidth; 方便后续按钮需要这个变量，所以拿到函数外，全局变量
            animate(ul, -index * focusWidth);
        })
    }
    // 5、让ol里面第一个小圆圈添加样式current类，这句话如果不写，那么刷新页面会没有样式，执行步骤6后才有
    ol.children[0].className = 'current';
    // 10 克隆第一张图片放到ul最后面
    // 10.2 因为是在创建小圆点后面 添加克隆的li，所以小圆点不会增加
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first); //10.1ul 添加一个 first（深克隆，克隆ul下的第一个li标签）
    // 8、 css层级先打开，然后点击右侧按钮，让图片滚动一张
    // 8.1 声明一个变量，每点击一个，进行++
    var num = 0;
    // 11 点击右侧按钮，小圆点跟随变化,控制小圆点的播放
    var circle = 0;
    var flag = true;                                   // 25、 flag  节流阀  旅馆房间门已经打开了
    btnR.addEventListener('click', function() {
        if (flag) {                                    // 25.1 判断，打开，那么我就住进去
            flag = false;                              // 25.2  关闭节流阀，仅能住一个人，所以关门
            // 9、图片无缝滚动
            // 9.1 如果走到了最后一张克隆出来的图片。此时ul要快速复原，left 值改为 0
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            // 8.2因为 步骤7.5操作了，让focusWidth拿到函数外面，作为全局变量，这里就可以直接拿来用
            // 8.3 注意点击后，图片是往左边移动，所以这里是负值
            animate(ul, -num * focusWidth, function() { // 利用回调函数
                flag = true;                           // 25.3打开节流阀。动画结束了，相当于已经睡醒了，打开门
            });
            //11.1 每次点击，circle就 ++
            circle++;
            // 11.4 添加判断条件，防止点击超过图片数量，如果circle==3 说明走道最后克隆的这张图片了
            // if (circle == ol.children.length) {
            //     circle = 0;                         // 11.5 我们就复原
            // }
            // 11.4 用三元表达式来写 优化代码
            // circle等于ol孩子的长度吗，如过等于，就把circle=0赋值给circle,如果不等于,就等于自身
            circle = circle == ol.children.length ? circle = 0 : circle;
            // // 11.2 先清除其余小圆点的current类名
            // for (var i = 0; i < ol.children.length; i++) {
            //     ol.children[i].className = '';
            // }
            // // 11.3 留下当前小圆圈的current类名
            // ol.children[circle].className = 'current';
            // 12.2+12.3 已经被封装函数了，所以直接调用
            circleChange();
        }
    })
    // 14、左侧按钮，复制右侧按钮后，修改左侧功能
    btnL.addEventListener('click', function() {
            if (flag) { //同理步骤25 节流阀
                flag = false;
                // 16、判断，如果num ==0，点击后肯定是走到最后一张
                if (num == 0) {
                    // ul.style.left = (ul.children.length - 1) * focusWidth + 'px';
                    // num = ul.children.length - 1;
                    num = ul.children.length - 1;
                    ul.style.left = -num * focusWidth + 'px'; // 16.1 索引号 * 盒子的宽度 （不要忘记加单位）
                }
                num--;                                        // 15、因为反向，所以这里--
                animate(ul, -num * focusWidth);
                // 17、小圆点要--
                circle--;
                // 18 添加判断条件，如果circle < 0 说明第一张图（2）
                // if (circle < 0) {
                //     circle = ol.children.length - 1;
                // }
                // 18 优化代码：circle小于0吗，如过小于，就把ol.children赋值给circle,如果不大于,就等于自身
                circle = circle < 0 ? ol.children.length - 1 : circle;
                circleChange();
            }
        })
        // 19 把重复代码封装函数，然后调用
    function circleChange() {
        // 11.2 先清除其余小圆点的current类名
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        // 11.3 留下当前小圆圈的current类名
        ol.children[circle].className = 'current';
    }
    // 20 自动播放轮播图, 实际类似于点击了右侧按钮，此时我们使用手动调用右侧按钮点击事件
    var timer = this.setInterval(function() {
        btnR.click(); //触发手动点击事件
    }, 2000)
  })

  // 细节优化：装ul的宽度是js自动获取

  window.onload = function () {
    var imgList = document.getElementById("imgList");   // 获取imgList
    var imgArr = document.getElementsByTagName("img");  // 获取页面中所有的img标签
    imgList.style.width = 520 * imgArr.length + "px";   // 设置imgList的宽度
  }

  // 点击分页器js动态水平居中
  // 设置导航按钮居中
  var navDiv = document.getElementById("navDiv");       // 获取naVDiv
  var outer = document.getElementById("outer");         // 获取outer
  navDiv.style.left = (outer.offsetWidth - navDiv.offsetWidth) / 2 + "px"; // 设置navDiv的left值`)])])],-1),l("p",null,"节流阀",-1),l("ul",null,[l("li",null,"防止轮播图按钮连续点击造成播放过快"),l("li",null," 节流阀目的：当上一个函数动画内容执行完毕，再去执行下一个函数动画，让事件无法连续触发。 "),l("li",null," 核心实现思路：利用回调函数，添加一个变量来控制，锁住函数和解锁函数。 "),l("li",null,[e(" 开始设置一个变量var flag=true； "),l("ul",null,[l("li",null,"if（flag）{flag=false；do something } 关闭水龙头"),l("li",null,"利用回调函数动画执行完毕，flag=true 打开水龙头")])]),l("li",null,[e(" 返回顶部 "),l("ul",null,[l("li",null,"Window. scroll (x , y) 要到达网页的坐标， X Y的值不跟单位"),l("li",null,"带有动画的返回顶部"),l("li",null,"此时可以继续使用我们封装的动画函数"),l("li",null," 只需要把所有的left相关的值改为跟页面垂直滚动距离相关就可以了 "),l("li",null," 页面滚动了多少，可以通过window.pagerOffset得到 ，而不是 offsetTop "),l("li",null,"最后是页面滚动，使用window.scroll（x .y）")])]),l("li",null,[e(" 筋斗云案例 "),l("ul",null,[l("li",null,"* 鼠标经过某个li，筋斗云跟这到当前 li 位置"),l("li",null,"* 鼠标离开这个li，筋斗云复原为原来的位置"),l("li",null,"* 鼠标点击了某个li，筋斗云就会留在点击这个 li 的位置"),l("li",null,"利用动画函数做动画效果"),l("li",null,"原先筋斗云的起始位置是0"),l("li",null,"鼠标经过某个i，把当前i的offsetLeft位置做为目标值即可"),l("li",null,"鼠标离开某个i，就把目标值设为0")]),l("pre",null,[l("code",{class:"language-html line-numbers"},`  <style>
    * {padding: 0;margin: 0;}
    ul {list-style: none;}
    .nav {position: relative;width: 600px;height: 50px; margin: 0 auto;}
    .nav ul {position: absolute;}
    .nav li a {color: #333;text-decoration: none;display: inline-block;height: 42px;}
    .nav ul li {float: left;width: 99px;height: 48px;text-align: center;line-height: 50px;}
    .style1 { position: absolute;top: 0;left: 0;width: 99px;height: 48px;
              background-color: rgba(228, 172, 172, 0.596);}
  </style>
  <script src="js/animate.js"><\/script>   //动画函数自己引入就可以了
  <script>
      window.addEventListener('load', function() {
          var style1 = document.querySelector('.style1');
          var nav = document.querySelector('.nav');
          var lis = nav.querySelectorAll('li');
          var current = 0;
          //绑定事件
          for (var i = 0; i < lis.length; i++) {
              // (1) 鼠标经过把当前小li 的位置做为目标值
              lis[i].addEventListener('mouseenter', function() {
                  animate(style1, this.offsetLeft);
              });
              // (2) 鼠标离开就回到起始的位置
              lis[i].addEventListener('mouseleave', function() {
                  animate(style1, current);
              });
              // (3) 当我们鼠标点击，就把当前位置做为目标值
              lis[i].addEventListener('click', function() {
                  current = this.offsetLeft;
              });
          }
      })
  <\/script>
  </head>
  <body>
  <div class="nav">
      <span class="style1"></span>
      <ul>
          <li><a href="#">效果1</a></li>
          <li><a href="#">效果2</a></li>
          <li><a href="#">效果3</a></li>
          <li><a href="#">效果4</a></li>
          <li><a href="#">效果5</a></li>
          <li><a href="#">效果6</a></li>
      </ul>
  </div>
  </body>`)])])],-1),l("p",null,"移动端网页特效",-1),l("ul",null,[l("li",null," 移动端浏览器兼容性较好，我们不需要考虑以前JS的兼容性问题，可以放心的使用原生JS书写效果， 但是移动端也有自己独特的地方。比如触屏事件touch（也称触摸事件），Android和IOS都有。 "),l("li",null,[e(" touch对象代表一个触摸点。触摸点可能是一根手指，也可能是一根触摸笔。角触屏事件可响应用户手指 （或角触控笔）对屏幕或者触控板操作。 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  // touchstart           手指触摸到一个DOM元素时触发
  // touchmove            手指在一个DOM元素上滑动时触发
  // touchend             手指从一个DOM元素上移开时触发

  div.addEventLister(' touchstart / touchmove / touchend', function () {
    // 添加处理程序
  })`)])]),l("li",null,[e(" 触摸事件对象 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  /*
    TouchEvent 是一类描述手指在触莫平面（角触摸屏、触摸板等）的状态变化的事件。
    这类事件用于描述一个或多个触点，使开发者可以检测触点的移动，触点的增加和减少，等等
    touchstart、touchmove、touchend三个事件都会各自有事件对象。

    触摸事件对象重点我们看三个常见对象列表：
    touches          正在触摸屏幕的所有手指的一个列表协
    targetTouches    正在触摸当前DOM元素上的手指的一个列表
    changedTouches   手指状态发生了改变的列表，从无到有，从有到无变化
  */

  div.addEventLister(' touchstart / touchmove / touchend', function (e) {
    console.log(e);
  })

  // 当我们手指离开屏幕的时候，就没有了 touches 和 targetTouches 列表，但是changedTouches 还有
  // 因为经常触摸元素，所以 targetTouches 最常用`)])]),l("li",null,[e(" 移动端拖动元素 "),l("ul",null,[l("li",null,"touchstart、touchmove、touchend可以实现拖动元素"),l("li",null," 但是拖动元素需要当前手指的坐标值我们可以使用 targetTouches[0]里面的pageX和pageY "),l("li",null," 移动端拖动的原理：手指移动中，计算出手指移动的距离。然后用盒子原来的位置+手指移动的距离 "),l("li",null,"手指移动的距离：手指滑动中的位置减去手指刚开始触摸的位置")]),l("pre",null,[l("code",{class:"language-html line-numbers"},` /* 拖动元素三步曲：
      触摸元素touchstart：获取手指初始坐标，同时获得盒子原来的位置
      移动手指touchmove：计算手指的滑动距离，并且移动盒子
      离开手指touchend：注意：手指移动也会触发滚动屏幕所以这里要阻止默认的屏幕滚动e.preventDefault(); */

      <div></div>
  <script>>
      var div = document.querySelector('div');
      // 因为等会会用来计算，所以声明一个全局变量
      var startX = 0;                       // 获取手指初始坐标
      var startY = 0;
      var X = 0;                            // 获取盒子原来的位置
      var Y = 0;
      div.addEventListener('touchstart', function(e) {
          // 怎么获得，就是添加事件对象的第一个手指的 pageX和Y 手指点击的坐标
          startX = e.targetTouches[0].pageX;
          startY = e.targetTouches[0].pageY;
          X = this.offsetLeft;              // 获取盒子距离左右的距离
          Y = this.offsetTop;
      })
      div.addEventListener('touchmove', function(e) {
          // 计算手指的移动距离  = 手指滑动中的位置 -  手指刚开始触摸的位置
          // 声明内部计算变量
          var moveX = e.targetTouches[0].pageX - startX;
          var moveY = e.targetTouches[0].pageY - startY;
          // 移动盒子，盒子原来的位置 + 手指移动的距离
          this.style.left = X + moveX + 'px';
          this.style.top = Y + moveY + 'px';
          e.preventDefault();
      })
  <\/script>`)])])],-1)])),_:1,__:[50]}),i(s,{id:"part4",shadow:"hover"},{default:t(()=>[n[89]||(n[89]=l("h2",null,"其他拓展",-1)),n[90]||(n[90]=l("p",null,"classList 属性",-1)),n[91]||(n[91]=l("ul",null,[l("li",null," classList属性是HTML5新增的一个属性，返回元素的类名。但是ie10以上版本支持。 "),l("li",null,[e(" 该属性用于在元素中添加，移除及切换CSS类。有以下方法添加类： 注意，类名不用加点 . "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 添加类：
  element.classlist.add('类名');

  // 删除类：
  element.classlist.remove('类名');

  // 切换类： 如果你有这个类名我就删除，没有这个类，我就给你添加上，相当于取反
  element.classlist.toggle('类名');

  // 检查类：
  element.classList.contains("检查元素是否包含此class类名")

  // 替换类：
  element.classList.replace("原有类名","需要替换的类名") `)])])],-1)),n[92]||(n[92]=l("p",null,"移动端轮播图",-1)),n[93]||(n[93]=l("ul",null,[l("li",null,[e(" 移动端轮播图功能和基本PC端一致。 "),l("ul",null,[l("li",null,"可以自动播放图片"),l("li",null,"手指可以拖动播放轮播图"),l("li",null," 结构： 和pc 端不一样，因为左拉会显示最后一张也就是第三张图片所以需要克隆两张， 1 和 3，3放在最前面，1放在最后面 ")])]),l("li",null," 注意轮播图中，最左边图片3如果不走自身宽度的负值，那么会直接显示第三张的图片，所以要先走自身的宽度， 注意是负值，这样一打开才是正确的图1 "),l("li",null,[e(" 因为图片的宽度是铺满的，所以让ul走屏幕的宽度就可以了。-100% "),l("pre",null,[l("code",{class:"language-css line-numbers"},`  .focus ul {
    /* overflow: hidden; */
    width: 500%;
    margin-left: -100%;  /* 不添加的话，会显示复制出来的第三张 */
  }`)])]),l("li",null,[e(" 分析： "),l("ul",null,[l("li",null,"自动播放功能"),l("li",null,"开启定时器"),l("li",null,"移动端移动，可以使用translate移动"),l("li",null,"想要图片优雅的移动，请添加过渡效果"),l("li",null,"自动播放功能-无缝滚动"),l("li",null," 注意，我们判断条件是要等到图片滚动完毕再去判断，就是过渡完成后判断 "),l("li",null,"此时需要添加检测过渡完成事件 transitionend"),l("li",null," 判断条件：如果索引号等于3说明走到最后一张图片，此时索引号要复原为0 "),l("li",null,"此时图片，去掉过渡效果，然后移动"),l("li",null,"如果索引号小于0，说明是倒着走，索引号等于2"),l("li",null,"小圆点跟随变化效果"),l("li",null,"把ol里面li带有current类名的选出来去掉类名 remove"),l("li",null,"让当前索引号的 li 加上current add"),l("li",null," 但是，是等着过渡结束之后变化，所以这个写到transitionend事件里面 "),l("li",null,"手指滑动轮播图"),l("li",null,"本质就是u山跟随手指移动，简单说就是移动端拖动元素"),l("li",null,"触摸元素touchstart：获取手指初始坐标"),l("li",null,"移动手指touchmove：计算手指的滑动距离，并且移动盒子"),l("li",null,"如果移动距离小于某个像素就回弹原来位置"),l("li",null,"如果移动距离大于某个像素就上一张下一张滑动。")]),l("pre",null,[l("code",{class:"language-html line-numbers"},`  <style>
    * {padding: 0;margin: 0;}
    .clearfix::before,
    .clearfix::after {content: "";display: table;}
    .clearfix::after {clear: both;
    }
    li {list-style: none;}
    .focus {position: relative;overflow: hidden;}
    .focus img {width: 100%;}
    .focus ul { /* overflow: hidden; */width: 500%;margin-left: -100%; /*不添加的话，会显示复制出来的第三张*/}
    .focus ul li { float: left;width: 20%; }
    .focus .circle { position: absolute;bottom: 8px;right: 15px;}
    .focus .circle li {display: inline-block;width: 8px;height: 8px;background-color: rgb(255, 239, 16);
        list-style: none; border-radius: 8px;transition: all .3s; /* 加过渡效果需要两个颜色都一样才好看 */}
    .focus .circle li.current {width: 15px;background-color: rgb(255, 239, 16);}
  </style>
  <script src="js/index.js"><\/script>

  <div class="focus">
      <ul class="clearfix">
          <li><img src="images/advertisement3.png" alt=""></li>
          <li><img src="images/advertisement1.png" alt=""></li>
          <li><img src="images/advertisement2.png" alt=""></li>
          <li><img src="images/advertisement3.png" alt=""></li>
          <li><img src="images/advertisement1.png" alt=""></li>
      </ul>
      <ol class="circle">
          <li class="current"></li>
          <li></li>
          <li></li>
      </ol>
  </div>

  //----------------------------------------------------------------------
  <script>
  window.addEventListener('load', function() {
      // 1、获取元素
      var focus = document.querySelector('.focus');
      var ul = focus.children[0];                                     // 1.1、focus的第一个孩子 ul
      var w = focus.offsetWidth;                                      // 1.2 获取focus 的宽度
      var ol = focus.children[1];                                     // 7.1 获取focus下的第二个孩子 ol
      var index = 0;                                                  // 2、添加一个索引号变量
      var timer = setInterval(function() {
          index++;                                                    // 2.1 定时器开启，每隔两面，索引号+1
          var translateX = -index * w;                                // 3、让索引号 * 图片的宽度 ，会等于移动的距离，注意往左走是负值
          ul.style.transition = 'all .3s';                            // 4、添加css3 的过度效果
          ul.style.transform = 'translateX(' + translateX + 'px)';    // 3.1、加上CSS3移动效果
      }, 2000);
      // 5、等过渡完成之后，再去判断 ，监听过度完成的时间 transitionend，谁做判断，ul
      ul.addEventListener('transitionend', function() {
          // 6 无缝滚动，添加判断条件
          if (index >= 3) {                                         // 6.1  如果滚动到了第三张
              index = 0;                                               // 6.2 索引号清零，回到第一张
              ul.style.transition = 'none';                            // 6.3 去掉过渡效果
              var translateX = -index * w;                             // 6.4 但是还是要移动图片，所以利用最新的索引号* 宽度
              ul.style.transform = 'translateX(' + translateX + 'px)'; // 6.5、加上CSS3移动效果
          } else if (index < 0) {                                   // 6.5  如果索引号小于0，滚动到了最后一张，也就是克隆出来的第三张
              index = 2;                                               // 6.6 索引号就等于第三长，第三张的索引号是2
              ul.style.transition = 'none';                            // 6.7 去掉过渡效果
              var translateX = -index * w;                             // 6.8 但是还是要移动图片，所以利用最新的索引号* 宽度
              ul.style.transform = 'translateX(' + translateX + 'px)'; // 6.9、加上CSS3移动效果
          }
          // 7.2、小圆点跟随变化效果,把ol下li带有current类名给选出来,. 然后删除
          ol.querySelector('li.current').classList.remove('current');
          // 7.3 选出当前li，让当前li 添加上 current 类
          ol.children[index].classList.add('current');
      });
      // 8、手指滑动轮播图
      var startX = 0;                                                  // 8.2 声明一个变量接收 手指的坐标值
      var moveX = 0;                                                   // 8.5 声明一个全局变量，存储移动的距离
      // 15  添加节流阀
      var flag = false;
      // 8.1 触摸 touchstart获取手指初始坐标
      ul.addEventListener('touchstart', function(e) {
          startX = e.targetTouches[0].pageX;                           // 8.3 获取到事件对象的第一个手指的坐标
          clearInterval(timer);                                        // 9 手指触摸的时候就停止定时器
      });
      // 8.3 移动手指 touchmove 计算手指滑动的距离，并且移动盒子
      ul.addEventListener('touchmove', function(e) {
          // 8.4 计算移动的距离 用移动后的坐标 减去 初始的坐标
          moveX = e.targetTouches[0].pageX - startX;
          // 8.6 移动盒子 =  盒子原来的位置 加上 手指移动的距离，声明变量translateX
          var translateX = -index * w + moveX;
          // 8.7手指是一点一点的拖，所以不需要做过度效果
          ul.style.transition = 'none';                                // 去掉过渡效果
          ul.style.transform = 'translateX(' + translateX + 'px)'; //加上CSS3移动效果
          // 15.1
          flag = true;                                                 // 22、如果 用户手指移动过，我们再去判断
          e.preventDefault();                                          // 阻止滚动屏幕的行为
      });
      ul.addEventListener('touchend', function(e) {
          // 21
          if (flag) {
              //10 如果移动距离大于50像素，就播放下一张或者上一张
              if (Math.abs(moveX) > 50) {                          // 10.1不管是正的还是负数，只要大于就播放下一张或者上一张，所以要取绝对值
                  // 10.2 如果是右滑， 是手指滑动结束后的坐标 - 手指点下的初始坐标，大值减小值，正数，播放上一张
                  // 10.3 如果是左滑，是手指滑动结束后的坐标 - 手指点下的初始坐标，小值减大值，负数，播放下一章
                  if (moveX > 0) {
                      index--;
                  } else {
                      index++;
                  }
                  // 11、 移动图片 用最新的index 值 * 图片的宽度
                  var translateX = -index * w;
                  ul.style.transition = 'all .3s';                     // 11.2 加上过渡效果
                  ul.style.transform = 'translateX(' + translateX + 'px)'; // 11.1、加上CSS3移动效果
              } else {
                  // 12、 如果小于了50像素，则回弹
                  var translateX = -index * w;
                  ul.style.transition = 'all .3s';                     // 12.2 加上过渡效果
                  ul.style.transform = 'translateX(' + translateX + 'px)'; // 12.1、加上CSS3移动效果
              }
              //13、手指离开的时候就重新开启定时器
          }
          clearInterval(timer);
          //14、开启定时器
          timer = setInterval(function() {
              index++;                                                 // 14.1 定时器开启，每隔两面，索引号+1
              var translateX = -index * w;                             // 14.2、让索引号 * 图片的宽度 ，会等于移动的距离，注意往左走是负值
              ul.style.transition = 'all .3s';                         // 14.3、添加css3 的过度效果
              ul.style.transform = 'translateX(' + translateX + 'px)'; // 14.4、加上CSS3移动效果
          }, 2000);
      })
  })
  <\/script>`)])])],-1)),n[94]||(n[94]=l("p",null,"返回顶部",-1)),n[95]||(n[95]=l("ul",null,[l("li",null,[e(" 这里 Window.scroll（X， Y） Y值可以自定义，做锚点用很方便 X Y 是不跟单位的 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  goBack.addEventListener('click',function(){
    window.scroll(0,0);
  });`)])]),l("li",null,[e(" 也可以增加缓动效果： "),l("ul",null,[l("li",null,"带有动画的返回顶部"),l("li",null,"此时可以继续使用我们封装的动画函数"),l("li",null," 只需要把所有的left相关的值改为跟页面垂直滚动距离相关就可以了 "),l("li",null,"页面滚动了多少，可以通过 window.pageYOffset 得到")]),l("pre",null,[l("code",{class:"language-js line-numbers"},`  goBack.addEventListener('click',function(){
      // 因为是窗口做动画，所以obj 改成 window ,目标值因为是最顶端，所以这里是0，回调函数就不需要了
      animate(window, 0);
  });

  function animate(obj, target, callback) {
    clearInterval(obj.stop);
    obj.stop = setInterval(function() {
        var step = (target - window.pageYOffset) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (window.pageYOffset == target) {
            clearInterval(obj.stop);
            callback && callback();
        }
        window.scroll(0, window.pageYOffset + step);
    }, 15);
  }`)])])],-1)),n[96]||(n[96]=l("p",null,"click 延时300mm 解决方案",-1)),l("ul",null,[n[67]||(n[67]=l("li",null," 动端click事件会有300ms的延时，原因是移动端屏幕双击会缩放（double tap to zoom）页面。 ",-1)),l("li",null,[n[61]||(n[61]=e(" 解决方案1： ")),l("ul",null,[n[55]||(n[55]=l("li",null,[e(" 禁用缩放。浏览器禁用默认的双击缩放行为并且去掉300ms的点击延迟。 "),l("pre",null,[l("code",{class:"language-html line-numbers"},'  <meta name="viewport" content=" user-scalable=no">')])],-1)),n[56]||(n[56]=l("li",null,[e(" 利用touch事件自己封装这个事件解决300ms延迟。 原理就是： "),l("ul",null,[l("li",null,"当我们手指触摸屏幕，记录当前角触摸时间"),l("li",null,"当我们手指离开屏幕，用离开的时间减去触摸的时间"),l("li",null," 如果时间小于150ms，并且没有滑动过屏幕，那么我们就定义为点击 ")]),l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 封装tap,解决click 300ms延时
  function tap(obj, callback) {
    var isMove = false;
    var startTime = 0;                                    // 记录触摸时候的时间变量
    obj.addEventListener('touchstart', function (e) {
      startTime = Date.now();                             // 记录触摸时间
    });
    obj.addEventListener('touchmove', function (e) {
      isMove = true;                                      // 看看是否有滑动,有滑动算拖拽,不算点击
    });
    obj.addEventListener('touchend', function (e) {
      if (!isMove && (Date.now() - startTime) < 150) { // 如果手指触摸和离开时间小于150ms算点击
        callbacks && callback();                          // 执行回调函数
      }
      isMove = false;                                     // 取反重置
      startTime = 0;
    });
  }
  // 调用
  tap(div, function () {/* 执行代码 */});`)])],-1)),n[57]||(n[57]=l("li",null,"使用插件。fastClick插件解决300ms延迟。",-1)),n[58]||(n[58]=l("li",null," JS插件是js文件，它遵循一定规范编程，方便程序展示效果，拥有特定功能且方便调用。如轮播图和瀑布流插件。 ",-1)),n[59]||(n[59]=l("li",null," 特点：它一般是为了解决某个问题而专门存在，其功能单一，并且比较小。我们以前写的 animate.js 也算一个最简单的插件 ",-1)),n[60]||(n[60]=l("li",null,"fastClick插件解决300ms延迟。使用延时",-1)),l("li",null,[n[52]||(n[52]=e(" GitHub官网地址： ")),i(o,{type:"primary",icon:"Link",target:"_blank",href:"https://github.com/ftlabs/fastclick/lib/fastclick.js"},{default:t(()=>n[51]||(n[51]=[e(" https://github.com/ftlabs/fastclick/lib/fastclick.js ")])),_:1,__:[51]}),n[53]||(n[53]=l("ul",null,[l("li",null,"打开网址，进入项目，找到文件，复制里面的封装函数代码"),l("li",null,"新建fastClick.js文件.粘贴代码"),l("li",null,"引入js 文件，调用"),l("li",null," 因为多个立即函数，所以函数前面加个分号，确保其他函数没有加分号 ")],-1)),n[54]||(n[54]=l("pre",null,[l("code",{class:"language-html line-numbers"},`  ;(function() { // 添加处理程序  });     // 结尾记得也加上

  <!-- 使用代码如下：-->
      <div></div>
      <!-- 1 、先引入 js -->
      <script src="js/fastClick.js"><\/script>
      <script>
          // 2 调用
          // 3.0  意思是 addEventListener 属不属于 document 这个对象 ，in 属于操作符
          // 3.1 简单理解，document有没有addEventListener这个事件，如果有，执行里面的代码
          if ('addEventListener' in document) {
              // document 添加侦听事件（等页面里面DOM元素加载完毕再执行）
              document.addEventListener('DOMContentLoaded', function() {
                  FastClick.attach(document.body);
              }, false);
          }   // 然后正常写代码就可以了
          var div = document.addEventListener('click', function() {
              alert(11);
          })
      <\/script>`)],-1))])])]),l("li",null,[n[66]||(n[66]=e(" 解决方案2：Swiper插件 ")),l("ul",null,[l("li",null,[n[63]||(n[63]=e(" Swiper插件的使用 中文官网地址： ")),i(o,{type:"primary",icon:"Link",target:"_blank",href:"https://www.swiper.com.cn/"},{default:t(()=>n[62]||(n[62]=[e(" https://www.swiper.com.cn/ ")])),_:1,__:[62]}),n[64]||(n[64]=l("ul",null,[l("li",null," 进入官网，导航栏上点击 获取Swiper里的下载，然后下载最新的文档就可以了 "),l("li",null," 下载完Swiper，解压出来，打开 demos文件夹，找到你想要的轮播图名称，打开 "),l("li",null,"右键查看源码，复制:")],-1)),n[65]||(n[65]=l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 引入css文件
  <!-- Link Swiper's CSS -->
  <link rel="stylesheet" href="../package/swiper-bundle.min.css">

  // 引入js 文件
  <!-- Swiper JS -->
  <script> src="../package/swiper-bundle.min.js"><\/script>

  /*
    打开解压出来的文件夹
      路径下： swiper-master / package / swiper-bundle.min.js + swiper-bundle.min.css 复制两个文件
    粘贴到自己的项目js 和 css文件下
    复制 swiper 相关的 css样式到自己的css 文件下
    复制 js 到自己的index.html 代码末尾，或则index.js 下，注意要等页面加载完执行， load 事件
  */`)],-1))])])])]),n[97]||(n[97]=l("p",null,"swiper插件使用，轮播图",-1)),l("ul",null,[l("li",null,[n[69]||(n[69]=e(" 官网地址： ")),i(o,{type:"primary",icon:"Link",target:"_blank",href:"https://www.swiper.com.cn/"},{default:t(()=>n[68]||(n[68]=[e(" https://www.swiper.com.cn/ ")])),_:1,__:[68]}),n[70]||(n[70]=l("ul",null,[l("li",null,"下载需要的swiper.min.css和swiper.min.js文件件"),l("li",null,"官网找到类似案例，复制html结构，css样式js语法"),l("li",null,"根据需求定制修改模块")],-1))]),n[71]||(n[71]=l("li",null,[e(" 图标字体上传下载 上传步骤： "),l("ul",null,[l("li",null,"让美工准备好图标字体（必须是svg格式）"),l("li",null,"点上传按钮（保留颜色并提交）")])],-1)),n[72]||(n[72]=l("li",null,[e(" 不懂可以点击 API文档进行swiper查询代码 "),l("ul",null,[l("li",null," > 点击获取Swiper > 下载Swiper > 点击版本自动会下载 > 得到swiper-6.6.2 "),l("li",null," > 解压压缩包 > package > 复制 swiper-bundle.min.js + swiper-bundle.min.css 到项目下 "),l("li",null," > 然后点击 > 在线演示 > 选择想要的样式 > 点击在新窗口打开 > F12拷贝代码 "),l("li",null," 注意：在项目里面先引入css文件，然后在尾部引入js文件，最后拷贝代码 和 css样式代码 ")])],-1))]),n[98]||(n[98]=l("p",null,"其他移动端插件",-1)),l("ul",null,[l("li",null,[n[74]||(n[74]=e(" superSlide： ")),i(o,{type:"primary",icon:"Link",target:"_blank",href:"http://www.superslide2.com/"},{default:t(()=>n[73]||(n[73]=[e(" http://www.superslide2.com/ ")])),_:1,__:[73]}),n[75]||(n[75]=e(" // 移动端点击touchSlide "))]),l("li",null,[n[77]||(n[77]=e(" iScroll： ")),i(o,{type:"primary",icon:"Link",target:"_blank",href:"https://github.com/cubiq/iscroll"},{default:t(()=>n[76]||(n[76]=[e(" https://github.com/cubiq/iscroll ")])),_:1,__:[76]}),n[78]||(n[78]=l("ul",null,[l("li",null,[e(" 插件使用步骤： "),l("ul",null,[l("li",null,"确认插件实现的功能"),l("li",null,"去官网查看使用说明"),l("li",null,"下载插件"),l("li",null,"打开demo实例文件，查看需要引入的相关文件，并且引入"),l("li",null,"复制demo实例文件中的结构html，样式css以及s代码")])])],-1))]),n[79]||(n[79]=l("li",null,[e(" 移动端视频插件zy.media.js "),l("ul",null,[l("li",null," H5给我们提供了video标签，但是浏览器的支持情况不同，不同的视频格式文件，我们可以通过source解决。 "),l("li",null," 但是外观样式，还有暂停，播放，全屏等功能我们只能自己写代码解决。这个时候我们可以使用插件方式来制作。 ")]),l("pre",null,[l("code",{class:"language-html line-numbers"},`  // 1、先引入 zy.media.css  和 zy.media.js
  <link rel="stylesheet" href="zy.media.min.css">
  <script src="zy.media.min.js"><\/script>

  // 2、写入H5 视频标签  引入js
  <div class="playVideo">
      <div class="zy_media">
          <video data-config='{"mediaTitle": "小蝴蝶"}'>
                  <source src="mov.mp4" type="video/mp4">
                  您的浏览器不支持HTML5视频
              </video>
      </div>
      <div id="modelView"> </div>
  </div>

  // 3、引入js 文件
  <script>
      zyMedia('video', {
          autoplay: false               //  对象里 不需要加 ； 而是 ，
      });
  <\/script>`)])],-1))]),n[99]||(n[99]=l("p",null,"框架概述",-1)),l("ul",null,[n[85]||(n[85]=l("li",null," 框架，顾名思义就是一套架构，它会基于自身的特点向用户提供一套较为完整的解决方案。框架的控制权在框架本身，使用者要按照框架所规定的某种规范进行开发。插件一般是为了解决某个问题而专门存在，其功能单一，并且比较小。 ",-1)),n[86]||(n[86]=l("li",null," 前端常用的框架有 Bootstrap、Vue、Angular、React等。既能开发PC端，也能开发移动端 ",-1)),n[87]||(n[87]=l("li",null,"前端常用的移动端插件有swiper、superSlide、iScroll等。",-1)),n[88]||(n[88]=l("li",null,"框架：大而全，一整套解决方案",-1)),l("li",null,[n[84]||(n[84]=e(" 插件：小而专一，某个功能的解决方案 ")),l("ul",null,[n[83]||(n[83]=l("li",null,"Bootstrap",-1)),l("li",null,[n[81]||(n[81]=e(" BootCss3: ")),i(o,{type:"primary",icon:"Link",target:"_blank",href:"https://v3.bootcss.com/"},{default:t(()=>n[80]||(n[80]=[e(" https://v3.bootcss.com/ ")])),_:1,__:[80]}),n[82]||(n[82]=e(" javascript 插件 依赖于jQuery，所以需要引入 jQuery.min.js，再引入min.js文件 "))])])])])]),_:1,__:[89,90,91,92,93,94,95,96,97,98,99]}),i(s,{id:"part5",shadow:"hover"},{default:t(()=>n[100]||(n[100]=[l("h2",null,"本地存储",-1),l("p",null,"重点",-1),l("ul",null,[l("li",null," 随着互联网的快速发展，基于网页的应用越来越普遍，同时也变的越来越复杂，为了满足各种各样的需求，会经常性在本地存储大量的数据，HTML5规范提出了相关解决方案。 "),l("li",null,[e(" 特性: "),l("ul",null,[l("li",null,"数据存储在用户浏览器中"),l("li",null,"设置、读取方便、甚至页面刷新不丢失数据"),l("li",null,"容量较大，sessionStorage约5M、localStorage 约20M"),l("li",null,"只能存储字符串，可以将对象JSON.stringify（）编码后存储")])]),l("li",null,[e(" window.sessionStorage "),l("ul",null,[l("li",null,"生命周期为关闭浏览器窗口(数据什么时候没有了)"),l("li",null,"在同一个窗口（页面面下数据可以共享"),l("li",null,"以键值对的形式存储使用")]),l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 存储数据：
  sessionStorage.setItem(key, value);

  // 获取数据：
  sessionStorage.getItem(key);

  // 删除数据：
  sessionStorage.removeItem(key);

  // 删除所有数据：(慎用)
  sessionStorage.clear();

  // 案例:
  var input = document.querySelector('input');
  var set = document.querySelector('.set');
  var get = document.querySelector('.get');
  set.addEventListener('click', function() {       // 当点击后就可以把表单里面的值存储起来
      var val = input.value;
      sessionStorage.setItem('uName', val);
  })
  get.addEventListener('click', function() {       // 获取表单数据
      sessionStorage.getItem('uName');
  })
  // 怎么查看数据，按F12，在Application 里面，左侧有个 Session Storage
  // key ：   键，相当于属性
  // Value：  值，相当于属性值`)])]),l("li",null,[e(" window.localStorage "),l("ul",null,[l("li",null,"生命周期永久生效，除非手动删除，否则关闭页面也会存在"),l("li",null,"可以多窗口（页面）共享（同一浏览器可以共享）"),l("li",null,"以键值对的形式存储使用")]),l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 存储数据：
  localStorage.setItem(key, value);

  // 获取数据：
  localStorage.getItem(key);

  // 删除数据：
  localStorage.removeItem(key);

  // 删除所有数据：(慎用)
  localStorage.clear();

  /* 案例
      思路：
        类似于QQ的记住用户名，当勾选上，下次关闭的时候还会出现输入的用户名，当不勾选的时候，下次就不会出现这个用户名
        把数据存起来，用到本地存储
        关闭页面，也可以显示用户名，所以用到localStorage
        打开页面，先判断是否有这个用户名，如果有，就在表单里面显示用户名，并且勾选复选框
        当复选框发生改变的时候 change 事件
        如果勾选，就存储，否则就移除
  */

  <input type="text" id="uname">
  <input type="checkbox" id="remember">记住用户名
  <script>
      // 1、获取元素
      var uname = document.querySelector('#uname');
      var remember = document.querySelector('#remember');
      // 2、判断，获取数据，浏览器有没有uname这个数据，如果有就把这个数据拿过来，赋值给input的value值
      if (localStorage.getItem('uname')) {
          // 3、input的value值等于，获取到的uname的值
          uname.value = localStorage.getItem('uname');
          remember.checked = true;     // 4、然后复选框勾选起来
      }
      // 5、再进行一步判断，如果复选框发生了变化
      remember.addEventListener('change', function() {
          if (this.checked) {          // 6、判断复选框是不是被选中的，如果true,是选中状态，则执行存储数据，属性为uname,值为表单的value
              localStorage.setItem('uname', uname.value)
          } else {                     // 7、否则变化了则清除数据，记住是remove，而不是 clear
              localStorage.removeItem('uname');
          }
      })
  <\/script>
              `)])])],-1),l("p",null,"JSON",-1),l("ul",null,[l("li",null,"JavaScript Object Notation JS对象表示法"),l("li",null," JSON和JS对象的格式一样，只不过JSON字符串中的属性名必须加双引号其他的和JS语法一致 "),l("li",null,[e(" JSON分类： "),l("ul",null,[l("li",null,"对象{}"),l("li",null,"数组[]")])]),l("li",null,[e(" JSON中允许的值： "),l("ul",null,[l("li",null,"字符串"),l("li",null,"数值"),l("li",null,"布尔值"),l("li",null,"null"),l("li",null,"对象"),l("li",null,"数组")])]),l("li",null,[e(" 方法： "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  JSON.parse(json);  // 可以将JSON字符串转换为js对象
  JSON.stringify();  // 可以将一个js对象转换为JSON字符串，需要一个js对象作为参数
  eval(str2);        // 可以将一个字符串形式的js代码执行，并返回结果。str2 = ‘alert('1');';

  var str = ' { "name":"孙悟空"，"age": 18 , "add" : "地址"}';
  var obj = eval ( "(" + str + ")" ); //这样就不会被认为是代码块，并执行起来不会报错。

  // 注意： eval（）这个函数的功能很强大，但是不要在开发中使用，执行性能差，然后具有安全隐患。 `)])])],-1)])),_:1,__:[100]}),i(s,{id:"part6",shadow:"hover"},{default:t(()=>n[101]||(n[101]=[l("h2",null,"高级js",-1),l("p",null,"前言",-1),l("ul",null,[l("li",null,[e(" 基本（值）类型 "),l("ul",null,[l("li",null,"string: 任意的字符串"),l("li",null,"Number: 任意的数字"),l("li",null,"boolean: false || true"),l("li",null,"undefined: undefined"),l("li",null,"null: null")])]),l("li",null,[e(" 对象（引用）类型 "),l("ul",null,[l("li",null,"Object: 任意对象"),l("li",null,"function: 一个特别的对象（可以执行）"),l("li",null,"array: 一个特别的对象（数值下标，内部数据是有序的）")])]),l("li",null,[e(" 判断 "),l("ul",null,[l("li",null," typeof ： 返回数据类型的字符串表达, 不能区别 null 与Object 和 Object与Array "),l("li",null,"instanceof： 判断对象的具体类型"),l("li",null," ===: 可以判断undefined ，null （全等的时候尽量用三个等号） ")])]),l("li",null,[e(" undefined 与 null 的区别？ "),l("ul",null,[l("li",null,"undefined 代表定义了未赋值。"),l("li",null,"null 定义并赋值，但为空。")])]),l("li",null,[e(" 什么时候给变量赋值为null呢？ "),l("ul",null,[l("li",null,"初始赋值，表明将要赋值为对象"),l("li",null,"结束前，让对象称为垃圾对象（被垃圾回收器[浏览器]回收）")])]),l("li",null,[e(" 严格区别变量类型与数据类型？ "),l("ul",null,[l("li",null,[e(" 数据类型 "),l("ul",null,[l("li",null,"基本类型"),l("li",null,"对象类型")])]),l("li",null,[e(" 变量类型（变量内存值的类型，属于弱类型） "),l("ul",null,[l("li",null,"基本类型：保存就是基本类型的数据"),l("li",null,"引用类型： 保存的是地址值")])])])]),l("li",null,[e(" 什么是数据？ "),l("ul",null,[l("li",null,"存储在内存中代表特定信息的‘东东’，本质上是0101..."),l("li",null,"数据的特点：可传递，可运算"),l("li",null,"一切皆数据"),l("li",null,[e(" 内存中所有操作的目标：数据 "),l("ul",null,[l("li",null,"算术运算"),l("li",null,"逻辑运算"),l("li",null,"赋值"),l("li",null,"运行函数")])])])]),l("li",null,[e(" 什么是内存？ "),l("ul",null,[l("li",null,"用来可存储数据的空间（临时的）"),l("li",null," 内存产生和死亡 ： 内存条（电路板）==>通电==>产生内存空间==>存储数据==>处理数据==>断电==>数据消失 "),l("li",null,[e(" 一个小内存的2个数据 "),l("ul",null,[l("li",null,"内部存储数据"),l("li",null,"地址值")])]),l("li",null,[e(" 内存分类 "),l("ul",null,[l("li",null,"栈：全局变量/局部变量 函数名属于标识，应该在栈空间"),l("li",null,"堆：对象")])])])]),l("li",null,[e(" 什么是变量？ "),l("ul",null,[l("li",null," 可变化的量（常亮是不可变化的），由变量名和变量值组成，作为标识，变量值就是内存中保存的数据 "),l("li",null,"每个变量都对应的一块小内存，变量名用来查找对应的内存")])]),l("li",null,[e(" 内存，数据，变量三者之间的关系？ "),l("ul",null,[l("li",null,"用来可存储数据的空间，"),l("li",null,"变量是内存的标识")])]),l("li",null,[e(" 关于引用变量赋值问题？ "),l("ul",null,[l("li",null," 2个引用变量指向同一个对象，通过一个变量修改对象内部数据，另一个变量看到的是修改之后的数据 "),l("li",null," 2个引用变量指向同一个对象，让其中一个引用变量指向另一个对象，另一个引用变量依然指向前一个对象 ")])]),l("li",null,[e(" js调用函数时传递变量参数时，是值传递还是引用传递？ "),l("ul",null,[l("li",null,"理解1：都是值（基本/地址指）"),l("li",null,"理解2：可能是值传递，也可能是引用传递 （地址值）")])]),l("li",null,[e(" js引擎如何管理内存？ "),l("ul",null,[l("li",null,[e(" 内存声明周期 "),l("ul",null,[l("li",null,"分配小内存空间，的刀它的使用权"),l("li",null,"存储数据，可以反复进行操作"),l("li",null,"释放小内存空间，")])]),l("li",null,[e(" 释放内存 "),l("ul",null,[l("li",null,"局部变量： 函数执行完自动释放"),l("li",null,"对象：成为垃圾对象 ==> 垃圾回收器回收")])])])]),l("li",null,[e(" 什么是对象？ "),l("ul",null,[l("li",null,"一个变量只能存一个数据，对象是 多个数据的封装体"),l("li",null,"用来保存多个数据的容器"),l("li",null,"一个对象代表现实中的一个事物")])]),l("li",null,[e(" 为什么要对象？ "),l("ul",null,[l("li",null,"便于对多个数据进行统一管理")])]),l("li",null,[e(" 对象组成？ "),l("ul",null,[l("li",null,[e(" 属性 "),l("ul",null,[l("li",null,"代表现实事物中的状态数据"),l("li",null,"由属性名和属性值组成"),l("li",null,"属性名都是字符串类型，属性值是任意类型")])]),l("li",null,[e(" 方法 "),l("ul",null,[l("li",null,"代表现实事物中的行为数据"),l("li",null,"是特别的属性 ==> 属性值是函数")])])])]),l("li",null,[e(" 如何访问对象内部数据？ "),l("ul",null,[l("li",null,"属性名： 编码简单，但有时不可用"),l("li",null,"[ ' 属性名' ] : 编码麻烦，但通用")])]),l("li",null,[e(" 什么时候必须使用 [ ' 属性名' ]的方式？ "),l("ul",null,[l("li",null,"属性名不是合法的标识名"),l("li",null,"属性名不确定")])]),l("li",null,[e(" 什么是函数？ "),l("ul",null,[l("li",null,"实现特定功能的n条语句的封装体"),l("li",null,"只有函数是可以执行的，其它类型的数据是不可执行的")])]),l("li",null,[e(" 为什么要用函数？ "),l("ul",null,[l("li",null,"提高代码通用"),l("li",null,"便于阅读交流")])]),l("li",null,[e(" 如何定义函数？ "),l("ul",null,[l("li",null,"函数声明 function fn1 (){}'"),l("li",null,"表达式 var fn2 = function (){};")])]),l("li",null,[e(" 如何调用（执行）函数？ "),l("ul",null,[l("li",null,"test() ; 直接调用"),l("li",null,"obj.test() ; 通过对象调用"),l("li",null,"new test(); new调用"),l("li",null,"test.call / apply ( obj ) ;")])]),l("li",null,[e(" 什么函数才是回调函数？ "),l("ul",null,[l("li",null,"你定义的"),l("li",null,"你没有调"),l("li",null,"但最终它执行了(在某个时刻或某个条件下)")])]),l("li",null,[e(" 常见的回调函数？ "),l("ul",null,[l("li",null,"dom事件回调函数"),l("li",null,"定时器回调函数"),l("li",null,"ajax请求回调函数 ，与后台交互"),l("li",null,"生命周期回调函数")])]),l("li",null,[e(" IIFE - immediately- Invoked Function Expression "),l("ul",null,[l("li",null,"理解：立即执行函数表达式"),l("li",null," 作用：匿名函数自调用 。 影藏实现不会污染外部（全局）命名空间 ")])]),l("li",null,[e(" 什么是this？ "),l("ul",null,[l("li",null," 任何函数本质上都是通过某个对象来调用的，如果没有指定就是window "),l("li",null,"所有函数内部都有一个变量this"),l("li",null,"它的值是调用函数的当前对象")])]),l("li",null,[e(" 如何确定this的值？ "),l("ul",null,[l("li",null,"test() : window"),l("li",null,"p.test(): p"),l("li",null,"new test () : 新创建的对象"),l("li",null,"p.call(obj): obj")])]),l("li",null,[e(" 原型prototype "),l("ul",null,[l("li",null,[e(" 函数的prototype 属性 "),l("ul",null,[l("li",null," 每个函数都有一个prototype属性，它默认指向一个Object空对象（即称为：原型对象） "),l("li",null,"原型对象中有一个constructor，它指向函数对象")])]),l("li",null,[e(" 给原型对象添加属性（一般都是方法） "),l("ul",null,[l("li",null,"作用：函数的所有实例对象自动拥有原型中的属性（方法）")]),l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 1 、每个函数function都有一个prototype，即显示原型属性，默认只想一个空的Object对象
  console.log ( Fn. prototype)
  // 2、 每个实例对象都有一个 __proto__, 成为隐式原型
  console。log （fn.__proto__ 即为隐式原型
  // 3、 对象的隐式原型的值为对应构造函数的显式原型的值`)])])])]),l("li",null,[e(" 因为循环会执行多次，所以优化代码要在外面声明: "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  for (var i = 0 ; length = a.length; i< length; i++){
    var a = a[ i ];
    a.index = i ;
    a.onclick = function() { alert( '第' + （this.index +1 ）+"个)}
  }`)])]),l("li",null,[e(" 利用闭包来实现(立即执行自调用) "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  for (var i = 0 ; length = a.length; i< length; i++){
    ( function( i ){
    var a = a[ i ];
    a.onclick = function() { alert( '第' + （this.index +1 ）+"个)}
    })( i )
  }`)])]),l("li",null,[e(" 如何产生闭包？ "),l("ul",null,[l("li",null," 当一个嵌套的内部（子）函数引用了嵌套的外部（父）函数的变量（函数）是，就产生了闭包 ")])]),l("li",null,[e(" 闭包到底是什么？ "),l("ul",null,[l("li",null,"理解1、闭包是嵌套的内部函数 如例子中的 fn2"),l("li",null,"理解2、包含被引用变量（函数）的对象 如 fn2中log（a）;"),l("li",null,"注意：闭包存在于嵌套的内部函数中")])]),l("li",null,[e(" 产生闭包的条件？ "),l("ul",null,[l("li",null,"函数嵌套"),l("li",null,"内部函数引用了外部函数的数据（变量/函数）"),l("li",null,[e(" 例子： "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  function fn1 (){
    var a = 2;
    var b = 'abc';
    function fn2 (){
        console.log( a );
    }
  }`)])])])]),l("li",null,[e(" 常见的闭包 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 1、将函数作为另一个函数的返回值
  function fn1 (){
      var a = 2;
      function fn2 (){
        a++
        console.log ( a )
      }
        return fn2
  }
  fn1 ()  //3
  fn1 ()  //4

  // 2、将函数作为实参传递给另一个函数调用
  function a ( code , time ){
      setTimeout ( function(){
          alert(code)
      },time)
  }
  a( '代码' , 2000) ;`)])])],-1),l("p",null,"补充知识点：不同设备打开不同页面",-1),l("ul",null,[l("li",null,[e(" 会根据用户设备来进行页面跳转的参数 "),l("ul",null,[l("li",null,"1、navigator.userAgent 包含浏览器信息"),l("li",null,"2、navigator.appName 浏览版名称"),l("li",null,"3、navigator.appVersion 浏览版本号"),l("li",null,"4、navigator.language 浏览语言"),l("li",null,"5、navigator.platform 浏览平台")]),l("pre",null,[l("code",{class:"language-js line-numbers"},`  //  在主网页中分发到对应的页面中 test方法来检测，使用三元运算符来判断用户是pc还是手机
  window.location.href = /Android|webOS|iPhone|iPad|BlackBeery/i.test(navigator.userAgent) ? "phone.html" : "pc.html"

  // 函数
  (function browserRedirect() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        window.location.href = "app.html";
    } else {
        window.location.href = "index.html";
    }
  })();

  // 嵌入
  var redirect = () => {
    let userAgent = navigator.userAgent.toLowerCase(); // 获取设备信息
    let device = /ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/;   // 判断设备
    if (device.test(userAgent)) {
        window.location.href = "move.html";
    } else {
        window.location.href = "pc.html";
    }
  };
  redirect();
`)])])],-1),l("p",null,"双击禁止选中文字",-1),l("pre",null,[l("code",{class:"language-js line-numbers"},"  window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();")],-1),l("p",null,"页面禁止文字选中",-1),l("pre",null,[l("code",{class:"language-js line-numbers"},`  document.onselectstart = function () {
    return false;
  };`)],-1),l("p",null,"原生js tab切换栏写法，伪类的操作方法",-1),l("ul",null,[l("li",null,[e(" 方法1，只能读取，不能修改 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  // CSS代码
  #myId:before {
      content: "hello world!";display: block; width: 100px;height: 100px;background: red;
  }

  // HTML代码
  <div> id="myId"></div>

  // JS代码
  var myIdElement = document.getElementById("myId");
  var beforeStyle = window.getComputedStyle(myIdElement, ":before");
  console.log(beforeStyle);                                // [CSSStyleDeclaration Object]
  console.log(beforeStyle.width);                          // 100px
  console.log(beforeStyle.getPropertyValue("width"));      // 100px
  console.log(beforeStyle.content);                        // "hello world!"`)])]),l("li",null,[e(" 方法2 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  function css(style_text) {
    var s = document.createElement('style');
    s.innerText = style_text;
    document.head.appendChild(s);
  }
  document.onclick = function() {
    // 添加新的style元素, 覆盖原来的属性, 从而达到修改的目的
    css("button:hover {color: red;}");
  };`)])])],-1),l("p",null,"解决防盗链OOS",-1),l("ul",null,[l("li",null," 先说说防盗链的原理，http 协议中，如果从一个网页跳到另一个网页，http 头字段里面会带个 Referer。这里的Referer是由于历史原因导致了拼写错误 后来也就一直沿用。图片服务器通过检测 Referer 是否来自规定域名，来进行防盗链。如果盗用网站是 https 的 protocol，而图片链接是 http 的话，则从 https 向 http 发起的请求会因为安全性的规定，而不带 referer，从而实现防盗链的绕过。官方输出图片的时候，判断了来源(Referer)，就是从哪个网站访问这个图片，如果是你的网站去加载这个图片，那么Referer就是：你的网站地址；你网站地址，肯定没在官方的白名单内，所以就看不到图片了。因此，若不发送Referer，也就是没有来源。那么官方那边，就认为是从浏览器直接访问的，所以就能加载正常的图片了。 "),l("li",null,[e(" 解决方案： "),l("pre",null,[l("code",{class:"language-js line-numbers"},'  <meta name="referrer" content="never">')])])],-1)])),_:1,__:[101]}),i(s,{id:"part7",shadow:"hover"},{default:t(()=>[n[109]||(n[109]=l("h2",null,"ES6",-1)),n[110]||(n[110]=l("p",null,"ECMA",-1)),l("ul",null,[n[104]||(n[104]=l("li",null," ECMA （European Computer Manufacturers Association）中文名称为欧洲计算机制造商协会，这个组织的目标是评估、开发和认可电信和计算机标准。1994年后该组织改名为Ecma国际。 ",-1)),n[105]||(n[105]=l("li",null,"ECMAScript 是由Ecma国际通过ECMA-262标准化的脚本程序设计语言。",-1)),l("li",null,[n[103]||(n[103]=e(" ECMA-262历史版本 ")),i(o,{type:"primary",icon:"Link",target:"_blank",href:"http://www.ecma-international.org/publications/standards/Ecma-262-arch.htm"},{default:t(()=>n[102]||(n[102]=[e(" http://www.ecma-international.org/publications/standards/Ecma-262-arch.htm ")])),_:1,__:[102]})]),n[106]||(n[106]=l("li",null,"注：从ES6开始，每年发布一个版本，版本号比年份最后一位大1",-1))]),n[111]||(n[111]=l("p",null,"谁在维护ECMA-262",-1)),n[112]||(n[112]=l("ul",null,[l("li",null," TC39（Technical Committee39）是推进ECMAScript发展的员会。其会员都是公司（其中主要是浏览器厂商，有苹果、谷歌、微软、因特尔等）。TC39定期召开会议，会议由会员公司的代表与特邀专家出席 ")],-1)),n[113]||(n[113]=l("p",null,"ES6兼容性",-1)),l("ul",null,[l("li",null,[i(o,{type:"primary",icon:"Link",target:"_blank",href:"http:/kangax.github.io/compat-table/es6/"},{default:t(()=>n[107]||(n[107]=[e(" http:/kangax.github.io/compat-table/es6/ ")])),_:1,__:[107]}),n[108]||(n[108]=e(" 可查看兼容性 "))])]),n[114]||(n[114]=l("p",null,"关键字 声明变量",-1)),n[115]||(n[115]=l("ul",null,[l("li",null,[e(" 代码 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  let a ;
  let a b c ;
  let e = 100;`)])]),l("li",null,[e(" 好处 "),l("ul",null,[l("li",null,"变量不能重复声明，和var 不一样，不用担心被污染"),l("li",null,[e(" 块级作用域 全局 函数 eval ，不止{} ,还有if else while for 里的作用域有效 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  {
    let a = '块级作用域 '
  }`)])]),l("li",null,[e(" 不存在变量提升 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  console.log(a);  // error :  a is not defined
  var a = 1;
  let a = 1;       // 会直接报错，不存在变量声明之前去使用，会直接报错`)])]),l("li",null,[e(" 不影响作用域链接 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  {
  let c = '123'
  function fn(){
       console.log(c);   // 不会影响作用域链  ，此层作用域没有，还是会往上一级查找
  }
  fn();                  // 输出 123
  }`)])])])]),l("li",null,[e(" 值不能修改的量 称之为常量，const "),l("ul",null,[l("li",null," 一定要赋初始值 ，不能 const a; 会报错 // index.html:27 Uncaught SyntaxError: Missing initializer in const declaration "),l("li",null,"常量使用大写（潜规则） const A = '大写';"),l("li",null,[e(" 常量不能修改 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  const B = '值为A'；
  const B = '修改A值' ；  // 会报错 Uncaught SyntaxError: Identifier 'A' has already been declared`)])]),l("li",null,"块级作用域"),l("li",null,[e(" 对于数组和对象的元素修改，不算做对常量的修改，不会报错 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  const Arr = ['1', '2', '3'];
  Arr.push('4');
  console.log(Arr);            // 常量修改数组 不会报错`)])])])])],-1)),n[116]||(n[116]=l("p",null," 结构赋值 (ES6允许按照一定模式从数组和对象中提取值，对变量进行赋值，这杯称为结构赋值) ",-1)),n[117]||(n[117]=l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 数组结构
  const A = ['小白', '小黑', '小黄'];
  let [bai, hei, huang] = A;   // 这样操作，相当于把数组对应的值传给变量 ，声明并赋值 bai hei huang

  // 对象结构
  const B = {
    name: '大白',
    sex: '男'
  }
  let {name,sex} = B;          // 这样就可以把对象中的值赋值给 变量，声明并赋值 name sex`)],-1)),n[118]||(n[118]=l("p",null,"模版字符串",-1)),n[119]||(n[119]=l("ul",null,[l("li",null,[e(" ES6 引入新的声明字符串的方法 [ `` ] , ' ' , \" \" `(反引号，左上角数字1左边的符号) "),l("ul",null,[l("li",null,"例子 let a = `我是字符串，被反引号包裹着`;")])]),l("li",null,[e(" 特性 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 1. 可以换行符
  var a = '<li>
            <a></a>
           </li>';       // 普通字符串格式，换行会直接报错，语法错误

  var a = \`<li>
              <a></a>
           </li>\`;       // 但是使用 \` \` 进行包裹的标签不会报错，类型还是字符串

  // 2. 变量拼接
  let a = '10+';
  let b = a + '10';
  console.log(b);      //  之前的拼接方式

  let a = '10+';
  let b = \`\${a}10\`;    //  固定格式  \${ 里面放变量 }
  console.log(b);

  // 3. \${} 里面可以调用函数
  let arr = () => {
    return '我是我是我是.....';
  }
  let str = \`我会说话: \${arr()}\`;
  console.log(str);`)])])],-1)),n[120]||(n[120]=l("p",null,"String 的扩展方法",-1)),n[121]||(n[121]=l("ul",null,[l("li",null,[e(" startsWith() endsWith() "),l("ul",null,[l("li",null," startsWith()：表示参数字符串是否在原字符串的头部，返回布尔值 "),l("li",null," endsWith()：表示参数字符串是否在原字符串的尾部，返回布尔值 ")]),l("pre",null,[l("code",{class:"language-js line-numbers"},`  let str = "start end!"
  let a = str.startsWith('s');     // 判断字符串中是否以s 开头
  let b = str.endsWith('!');       // 判断字符串中是否以！结尾
  console.log(a, b);               // true true`)])]),l("li",null,[e(" repeat() "),l("ul",null,[l("li",null,"表示将原字符串重复N次，返回一个新字符串")]),l("pre",null,[l("code",{class:"language-js line-numbers"},`  let str = "y".repeat(5);  // repeat()方法会返回新的字符串，所以需要用变量来接收
  console.log(str);`)])])],-1)),n[122]||(n[122]=l("p",null,"简化对象写法",-1)),n[123]||(n[123]=l("ul",null,[l("li",null," ES6 允许在大括号里面，直接写入变量和函数，作为对象的属性和方法 "),l("li",null,[e(" 例子： "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  let a = '1';
  let b = function () {
      console.log('b');
  }
  const AB = {
      a,
      b,
      // myFn: function(){
      //      之前写法
      // }
      myFn() {
          console.log('这也是对象的方法，省略每次都要写function 和 ：');
      }
  }`)])])],-1)),n[124]||(n[124]=l("p",null,"箭头函数",-1)),n[125]||(n[125]=l("ul",null,[l("li",null,[e(" ES6 允许使用“箭头”（=>）定义函数 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  let fn = function () {
    console.log('之前写法');
  }
  let fn = (a，b) => {         // 小括号里写形参
    console.log('现在写法');
  }`)])]),l("li",null,[e(" 特性： "),l("ul",null,[l("li",null,[e(" this 是静态的，不像之前一样是动态。this 始终是指向函数声明时所在作用域下的this 的值 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  function getName() {
    console.log(this.name);
  }
  let getName2 = () => {
    console.log(this.name);
  }
  window.name = 'windows';
  const Name = {
    name: '对象的name'
  }
  // 直接调用
  getName();                   // windows
  getName2();                  // windows

  // call 方法调用
  getName.call(Name);          // 对象的name
  getName2.call(Name);         //  windows`)])]),l("li",null,[e(" 不能作为构造函数实例化对象 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  let Person = (name, age) => {
    this.name = name,
    this.age = age
  }
  let me = new Person('a', 18);
  console.log(me);                // 报错 Uncaught TypeError: Person is not a constructor`)])]),l("li",null,"不能使用arguments 变量"),l("li",null,[e(" 简写： "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 1. 省略小括号 ，当形参只有一个的时候
  let son = age => {
    return age + age;
  }
  console.log(son(10));

  // 2. 省略花括号，当代码体只有一条语句的时候，此时return 必须省略而且语句的执行结果就是函数的返回值
  let son = age => age + age;    // 省略了{ } 和 return
  console.log(son(15));
  let son = (a, b) => a + b;     // 多个形参时，需要加上（） ，要不然会报错
  console.log(son(15, 15));
                  `)])]),l("li",null,[e(" 案例 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 案例1：
  let box = document.querySelector('.box');
  box.addEventListener('click', function () {
      let _this = this; // 声明一个_this指向变量
      setTimeout(function () {
          this.style.backgroundColor = 'pink'; // 如果没有在外面声明一个this 赋值操作 会this指向错误
          _this.style.background = 'pink';     // 此时赋值过的 _this 变量指向的是调用者
      }, 500);
  });
  // 箭头函数
  box.addEventListener('click', function () {
      setTimeout(() => {
          this.style.background = 'pink';      // 箭头函数就可以使用this
                                               // 因为箭头函数始终是指向函数声明时所在作用域下的this值
                                               // 也就是 box 的点击事件函数，事件源box
      }, 500);
  })

  // 案例2：
  // const result = arr.filter(function (item) {
  //     if (item % 2 === 0) {
  //         //....
  //     } else {
  //         //....
  //     }
  // });
  const result = arr.filter(item => {
      if (item % 2 === 0) {
          return true;
      } else {
          return false;
      }
  })
  // 简写
  const result = arr.filter(item => item % 2 === 0);  // 如果为真 直接 return 保留结果

  console.log(result);`)])])])]),l("li",null,[e(" 总结： "),l("ul",null,[l("li",null,"箭头函数适合与this无关的回调函数，定时器，数组的方法回调"),l("li",null,"箭头函数不适合与 this 有关的回调，事件回调，对象的方法")])])],-1)),n[126]||(n[126]=l("p",null,"函数参数默认值",-1)),n[127]||(n[127]=l("ul",null,[l("li",null,[e(" ES6 允许给函数参数赋值初始值 "),l("ul",null,[l("li",null,[e(" 形参初始值，具有默认值的参数，一般位置要靠后（潜规则） "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  function result(a, b, c = 10) {    // ES6 允许形参赋初始值，赋值的形参必须放在最后
    return a + b + c;
  }
  console.log(result(10, 20));       // 实参只穿进去两个值，形参有值，但实参传入，则实参首选`)])]),l("li",null,[e(" 与结构赋值结合 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 传统方式
  function object(canShu) {
      let a = canShu.a;
      let b = canShu.b;
      console.log(a, b);  // v d
  }
  object({
      a: 'v',
      b: 'd'
  })
  // 使用结构赋值
  function object({ a,b }) {   // 使用 { } 包裹形参
      console.log(a);
      console.log(b);
  }
  object({
      a: 'v',
      b: 'd'
  })
  // 也可以赋值，如果传参，可以直接赋值，传了就直接用
  function object({ a="123", b }) {
      console.log(a);  // 123
      console.log(b);  // d
  }
  object({
      b: 'd'
  })`)])])])]),l("li",null,[e(" ES6 引入 rest 参数，用于获取函数的实参，用来代替 arguments，rest参数 一定要放最后，否则报错 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  function get() {
    console.log(arguments);         // 是以对象方式管理  1，2，3，4，5
  }
  get(1, 2, 3, 4, 5);

  function get2(a, b, ...args) {    // 以数组方式进行管理  rest 方法，在形参前加 ...
    console.log(a);                 // 1
    console.log(b);                 // 2
    console.log(...args); // 3 4 5
  }
  get2(1, 2, 3, 4, 5);`)])])],-1)),n[128]||(n[128]=l("p",null,"扩展运算符",-1)),n[129]||(n[129]=l("ul",null,[l("li",null,[e(" ES6 ：[...] 扩展运算符能将[ 数组 ]转换为都好分隔的参数序列 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  const boy = ['x', 'b', 'c'];
  function get() {
      console.log(arguments);
  }
  get(boy);                     // 以数组参数传入，就一个参数  0['x', 'b', 'c']
  // 扩展运算符
  const boy = ['x', 'b', 'c'];
  function get() {
      console.log(arguments);   // 会输出三个参数  0['x']    1['b']    2['c']
  }
  get(...boy);                  // 与rest 参数不同，rest 参数写在形参上，扩展运算符写在实参上
                                // 等同于  get( 'x', 'b', 'c' ); 把数组当成实参传入`)])]),l("li",null,[e(" 运用场景： "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 1. 数组合并
  const boy = ['x', 'b', 'c'];
  const sun = ['1', '2', '3'];
  const result = boy.concat(sun);    // 之前的合并数组方法  concat();
  console.log(result);               // result['x', 'b', 'c','1', '2', '3']
  // ES6 使用扩展运算符数组合并
  const boy = ['x', 'b', 'c'];
  const sun = ['1', '2', '3'];
  const result = [...boy, ...sun];   // 数组之间用 ， 隔开， 数组名前面加 ...
  console.log(result);               // result['x', 'b', 'c','1', '2', '3']

  // 2. 数组的克隆
  const boy = ['x', 'b', 'c'];
  const result = [...boy];      // ...数组名 单个为克隆，如果数组里面有引用数据类型，是浅拷贝
  console.log(result);          // result['x', 'b', 'c','1', '2', '3']
  console.log(boy);             // boy['x', 'b', 'c']
  // 等同于
  const boy = ['x', 'b', 'c'];
  const result = boy;

  // 3. 将伪数组转换为真正的数组
  const boxS = document.querySelectorAll('.box');
  console.log(boxS);                                // 原型上 是一个对象
  // 转换
  const boxS = document.querySelectorAll('.box');
  const result = [...boxS];                         // 伪数组被转换成 数组Arr
  console.log(result);

  // 4. 使用Array.from() 也可以将伪数组转换成数组
  var obj = {
    "0": "zs",
    "1": 18,
    "2": "男",
    "length": 3                                // 必须写上长度和索引下标
  };
  var a = Array.from(obj);
  console.log(a);                              // ["zs", 18, "男"]
  // --------------------------------------------------------
  var obj = {
    "0": 15,
    "1": 18,
    "2": 30,
    "length": 3                                // 必须写上长度和索引下标
  };
  var a = Array.from(obj, item => item * 2);   // 第二个参数是一个回调函数，数组中元素有几个就会调用几次
  console.log(a);                              // [30, 36, 60]`)])])],-1)),n[130]||(n[130]=l("p",null,"Symbol 基本使用",-1)),n[131]||(n[131]=l("ul",null,[l("li",null," ES6 引入了一种新的原始数据类型Symbol，表示独一无二的值。它是JavaScript 语言的第七种数据类型，是一种类似于字符串的数据类型。 "),l("li",null,[e(" Symbol特点 "),l("ul",null,[l("li",null,"Symbol的值是唯一的，用来解决命名冲突的问题"),l("li",null,"Symbol值不能与其他数据进行运算"),l("li",null," Symbol定义的对象属性不能使用for..in循环遍历，但是可以使用Reflect.ownkeys来获取对象的所有键名 ")])]),l("li",null,[e(" 创建Symbol "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  let s = Symbol();
  console.log(s, typeof s);     // Symbol() "symbol"

  // 传参
  let s2 = Symbol('a');
  let s3 = Symbol('a');
  console.log(s2 === s3);       // false，虽然参数值相同，但是标识不同 ，false

  // for
  let s4 = Symbol.for('a');
  let s5 = Symbol.for('a');
  console.log(s4 === s5); // true
  // Symbol.for() 与 Symbol 都会生成Symbol.区别是前者被登记在全局环境中，后者不会，所以相等

  // 不能与其他数据进行运算
  let s = Symbol();
  let s4 = s + s;
  let s5 = s * s;
  console.log(s4, s5);          // Uncaught TypeError: Cannot convert a Symbol value to a number

  /* 总结：数据类型 USONB (you are so niubility)
      U -- undefined
      S -- string / symbol
      O -- Object
      N -- null / number
      B -- boolean
  */`)])]),l("li",null,[e(" Symbol的使用 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  const youXi = {
    name: '坦克',
    [Symbol('up')]: function () {
        console.log('上');
    },
    [Symbol('down')]: function () {
        console.log('下');
    }
  }
  console.log(youXi);`)])]),l("li",null,[e(" Symbol内置值 总共有11个 查文档 "),l("ul",null,[l("li",null,"Symbol.hasInstance"),l("li",null,"Symbol.isConcatSpreadable")]),l("pre",null,[l("code",{class:"language-js line-numbers"},`  const arr = [1, 2, 3];
  const arr2 = [4, 5, 6];
  console.log(arr.concat(arr2));             // 1,2,3,4,5,6
  // 使用isConcatSpreadable 方法
  const arr = [1, 2, 3];
  const arr2 = [4, 5, 6];
  arr2[Symbol.isConcatSpreadable] = false;   // false 是不展开
  console.log(arr.concat(arr2));             // [1,2,3,Array(3)]`)])])],-1)),n[132]||(n[132]=l("p",null,"迭代器",-1)),n[133]||(n[133]=l("ul",null,[l("li",null," 迭代器（iterator）是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构 "),l("li",null,"只要部署iterator 接口，就可以完成遍历操作。"),l("li",null,"iterator 接口就是对象里的一个属性"),l("li",null,[e(" 例子： "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  const arr = ['a', 'b', 'c'];
  for (let v in arr) {
      console.log(v);         // 0,1,3  相当于数组索引号
  }
  // for of
  for (let v of arr) {
      console.log(v);         // a,b,c  数组索引值
  }`)])]),l("li",null,[e(" ES6创造了一种新的遍历命令for..of循环，iterator 接口主要供for..of 消费 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  let arr = ['a', 'b', 'c']
  for (let v of arr) {       // 为什么数组能使用for of 遍历，因为其原型对象中有  Symbol()属性
      console.log(v);        // a b c  键值
  }
  // for of  与 for in 不同区别
  for (let v in arr) {
      console.log(v);        // 0 1 2  索引
  }`)])]),l("li",null,[e(" 原生具备iterator接口的数据（可用for of遍历） "),l("ul",null,[l("li",null,"Array"),l("li",null,"Arguments"),l("li",null,"Set"),l("li",null,"Map"),l("li",null,"String"),l("li",null,"TypedArray"),l("li",null,"NodeList")])]),l("li",null,[e(" 工作原理 "),l("ul",null,[l("li",null,"创建一个指针对象，指向当前数据结构的起始位置"),l("li",null," 第一次调用对象的next方法，指针自动指向数据结构的第一个成员，并返回结果 return next方法 "),l("li",null," 接下来不断调用next方法，指针一直往后移动，直到指向最后一个成员 "),l("li",null," 每调用next方法返回一个包含value和done属性的对象，done 是一个完成时，true 代表遍历完成 "),l("li",null," 与for in 不同， for in 保存的是键名，而for of 保存的是健值 "),l("li",null,"注：需要自定义遍历数据的时候，要想到迭代器。")]),l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 需求 ，循环遍历出  name的数组元素
  const people = {
      age: 18,
      name: [
          'a',
          'b',
          'c'
      ],
      [Symbol.iterator]() {
          let index = 0; // 1、先声明一个索引变量
          let _this = this;
          return {
              next: function () {
                  if (index < _this.name.length) {
                      const result = {
                          value: _this.name[index],
                          done: false
                      }
                      index++;
                      return result;
                  } else {
                      return {
                          value: undefined,
                          done: true
                      }
                  }
              }
          }
      }
  }
  for (let v of people) {
      console.log(v); // a b c
  }`)])])],-1)),n[134]||(n[134]=l("p",null,"生成器",-1)),n[135]||(n[135]=l("ul",null,[l("li",null," 生成器函数是ES6提供的一种异步编程解决方案，语法行为与传统函数完全不同 "),l("li",null,"生成器其实就是一个特殊的函数"),l("li",null,[e(" 异步编程，纯回调函数 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  function* get() {
    console.log('生成器');
  }
  let a = get();
  console.log(a);           // 这样打印不出log
  a.next();                 // 需要使用 next 方法来调用`)])]),l("li",null,[e(" yield 是函数代码的分隔符 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  function* get() {
    console.log('1');
    yield 'a';            // 会根据next调用次数，打印几次'，这里会分隔代码
    console.log('2');
    yield 'b';
    console.log('3');
    yield 'c';
  }
  let a = get();
  a.next();               // 1  这里只调用一次，则只会输出 log 1 的内容
  a.next();               // 2  这里第二次调用，则会输出 log 2 的内容，以此类推`)])]),l("li",null,[e(" 生成器函数参数 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  function* get(arg) {
    console.log(arg);
    let one = yield 111;
    console.log(one);
    yield 222;
    yield 333;
  }
  let a = get('1');
  console.log(a.next());
  console.log(a.next('2'));`)])]),l("li",null,"每次输出都是作为上一个的返回结果"),l("li",null,[e(" 异步编程 "),l("ul",null,[l("li",null,[e(" 1s后控制台输出111，2s 输出222 ，3s 输出333 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 这种称为回调地狱
  setTimeout(() => {
      console.log(111);
      setTimeout(() => {
          console.log(222);
          setTimeout(() => {
              console.log(333);
          }, 3000);
      }, 2000);
  }, 1000);

  // 使用yield
  function one() {
      setTimeout(() => {
          console.log(111);
          a.next();            // 2、在定时器里面添加调用，这样就可以实现多次调用
      }, 1000);
  }
  function two() {
      setTimeout(() => {
          console.log(222);
          a.next();            // 2、在定时器里面添加调用，这样就可以实现多次调用
      }, 2000);
  }
  function three() {
      setTimeout(() => {
          console.log(333);
          a.next();            // 2、在定时器里面添加调用，这样就可以实现多次调用
      }, 3000);
  }
  function* get() {
      yield one();
      yield two();
      yield three();
  }
  // 调用生成器函数
  let a = get();
  a.next();                    // 1、这样调用只会执行one（）函数，后面的函数都不调用`)])]),l("li",null,[e(" 案例2 依次输出数据 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  function one() {
    setTimeout(() => {
        let data = '数据1';
        a.next(data);
    }, 1000);
  }

  function two() {
    setTimeout(() => {
        let data = '数据2';
        a.next(data);
    }, 1000);
  }

  function three() {
    setTimeout(() => {
        let data = '数据3';
        a.next(data);
    }, 1000);
  }

  function* get() {
    console.log(yield one());        // 简写调用
    console.log(yield two());        // 简写调用
    let three3 = yield three();
    console.log(three3);
  }

  let a = get();
  a.next();
  // one(); 这种调用不实际，要先拿到数据1 再去拿到数据2
  // two();
  // three();`)])])])])],-1)),n[136]||(n[136]=l("p",null,"Promise",-1)),n[137]||(n[137]=l("ul",null,[l("li",null,[e(" Promise是E56引入的异步编程的新解决方案。语法上Promise是一个构造函数，用来封装异步操作并可以获取其成功或失败的结果。 "),l("ul",null,[l("li",null,"Promise构造函数：Promise（Executor）"),l("li",null,"Promise.prototype.then方法"),l("li",null,[e(" Promise.prototype.catch 方法 "),l("ul",null,[l("li",null,[e(" Promise 封装读取文件 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 实例化 Promise 对象
  const p = new Promise(function (resolve, reject) { // 两个参数，resolve成功，reject 失败
      setTimeout(() => {
          // let data = '数据库中的数据'
          // resolve(data);

          let err = '数据读取失败';
          reject(err);
      }, 1000);
  });
  // 调用 promise 对象的 then 方法,  是两个回调函数
  p.then(function (value) { // 成功进入这个函数
      console.log('1、' + value);
  }, function (reason) { // 失败进入这个函数
      console.log('2、' + reason);
  })`)])]),l("li",null,[e(" Promise 封装AJAX 请求 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 实例化 Promise 对象
  const fs = require("fs");
  const p = new Promise(function (resolve, reject) {
      fs.readFile("./text/a.text", (err, data) => {
          // 判断失败
          if (err) reject(err);
          // 如果成功
          resolve(data);
      });
  });
  // 调用 promise 对象的 then 方法, 是两个回调函数
  p.then(function (value) { // 成功进入这个函数
      console.log(value.toString());
  }, function (reason) { // 失败进入这个函数
      console.error("读取失败2");
  });`)])])])])])]),l("li",null,[e(" Promise 原型 prototype ..then 的方法 "),l("ul",null,[l("li",null,[e(" 代码： "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 1
  let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('用户数据');   // 如果p成功了，调用resolve 出错了调用reject
        // reject('出错了');
    })
  });
  p.then(resolve => {
    console.log(resolve);
  }, reject => {
    console.warn(reject);
  })

  // 2
  let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('用户数据');
    })
  });
  // 调用 then 方法, then的返回结果是promise对象，对象的状态取决于回调函数的执行结果决定
  // 如果回调函数中的返回结果是  非promise 类型的属性，状态为成功，返回值为成功的值
  // 如果不写return 值，是undefined ,但也是返回成功的值
  let a = p.then(resolve => {
    console.log(value);
    // 非 promise 类型的属性
    return '123';                           // 返回值
    // 如果是promise 对象 ，内部返回的promise的状态就决定 p.then 方法的状态
    // 入下面代码，promise 是成功的，那么返回值就是 'ok'，如果失败，那么就是返回失败的值
    return new promise((resolve, reject) => {
        resolve('ok');                      // 输出promise  成功的 用户数据，
        /* 如果失败 */
        reject('ok');                       // 输出promise  失败的 用户数据，
    })
  }, reject => {
    console.warn(reject);
  })
  console.log(a);

  // 3
  let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('用户数据');
    })
  });

  // 链式调用
  p.then(value => {

  }, reason => {

  }).then(value => {

  }, reason => {})

  p.then(value => {}).then(value => {  // 可以直接写成功，省略失败 })
                  `)])]),l("li",null,[e(" 读取拼接三个文件 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  const fs = require("fs");
  fs.readFile("./text/a.text", (err, data1) => {
      fs.readFile("./text/b.text", (err, data2) => {
          fs.readFile("./text/c.text", (err, data3) => {
              let result = data1 + '\\r\\n' + data2 + '\\r\\n' + data3;
              console.log(result);
          });
      });
  });`)])]),l("li",null,[e(" Promise 方式拼接三个文件 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 实例化 Promise 对象
  const fs = require("fs");
  const p = new Promise(function (resolve, reject) {
      fs.readFile("./text/a.text", (err, data) => {
          resolve(data);
      });
  });

  p.then(value => {
      return new Promise((resolve, reject) => {
          fs.readFile("./text/b.text", (err, data) => {
              resolve([value, data]);
          });
      });
  }).then(value => {
      return new Promise((resolve, reject) => {
          fs.readFile("./text/c.text", (err, data) => {
              value.push(data);
              resolve(value);
          });
      });
  }).then(value => {
      console.log(value.join('\\r\\n'));
  });`)])])])]),l("li",null,[e(" Promise catch方法 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 实例化 Promise 对象
  const p = new Promise(function (resolve, reject) {
      setTimeout(() => {
          reject('出错了');
      }, 1000);
  });

  p.catch(reason => { // catch 只需要定义一个回调，失败的回调函数就行
      console.warn(reason);
  })`)])])],-1)),n[138]||(n[138]=l("p",null,"Set",-1)),n[139]||(n[139]=l("ul",null,[l("li",null,"set 与map 是一样的，但是set存储的是唯一值，不允许重复"),l("li",null,[e(" ES6提供了新的数据结构Set（集合）。它类似于数组，但成员的值都是唯一的，集合实现了iterator接口，所以可以使用 [扩展运算符] 和[for..of..]进行遍历，集合的属性和方法： "),l("ul",null,[l("li",null,"size 返回集合的元素个数 相当于 length"),l("li",null,"add 增加一个新元素，返回当前集合 add(‘需要添加的元素’);"),l("li",null,"delete 删除元素，返回boolean值 delete('想要删除的元素')"),l("li",null,"has 检测集合中是否包含某个元素，返回boolean值"),l("li",null,"set.entries() 返回键值对"),l("li",null,"clear 清除数据")]),l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 1
  let s = new Set();
  let s2 = new Set([1, 3, 4, 5, 7, 3, 4]);
  console.log(s2);                          // 输出结果，set[5]{ 1, 3, 4, 5, 7}  ，会自动去重
  console.log(s2.size);                     // 5
  console.log(s2.delete(1));                // true
  console.log(s2.add(2));                   // set[5]{ 3, 4, 5, 7, 2}
  console.log(s2.has(1));                   // false 因为前面删掉了
  console.log(s2.has(3));                   // 有则返回 true
  s2.clear();
  console.log(s2);                          // set[0]
  ------------------------------------
  for (let i of s2) {
      console.log(i);                       // 1  3 4 5 7
  }

  // 2
  let arr = [1, 3, 4, 5, 7, 3, 4];
  // 数组去重
  let result = [...new Set(arr)];
  console.log(result); // 变成一个数组  [1,3,4,5,7]

  // 交集
  let arr = [1, 3, 4, 5, 7, 3, 4];
  let arr2 = [4, 5, 3, 5, 6];
  let result = [...new Set(arr)].filter(item => {  // 过滤
      let s2 = new Set(arr2);                      //  给arr2 也做一个去重  4，5，3
      if (s2.has(item)) {
          return true;
      } else {
          return false;
      }
  })
  let result = [...new Set(arr)].filter(item=> new Set(arr2).has(item));  //简写
  console.log(result);                             // 3,4,5

  // 并集，就是两个的集合
  let arr = [1, 3, 4, 5, 7, 3, 4];
  let arr2 = [4, 5, 3, 5, 6];
  let result = [...new Set([...arr, ...arr2])];
  console.log(result);                             // 1,3,4,5,7,6

  // 差集，在两个数组中，谁是主体，那么就要判断副体中，没有重复的就是差集，案例中arr是主体，1和7没有
  let arr = [1, 3, 4, 5, 7, 3, 4];
  let arr2 = [4, 5, 3, 5, 6];
  let result = [...new Set(arr)].filter(item => {  // 过滤
      let s2 = new Set(arr2);                      // 给arr2 也做一个去重  4，5，3
      if (!s2.has(item)) {                         // 和并集一样，就是取反
          return true;
      } else {
          return false;
      }
  });
  // let result = [...new Set(arr)].filter(item => !new Set(arr2).has(item));
  console.log(result);                             // 3,4,5`)])]),l("li",null,[e(" Set 数据结构 "),l("ul",null,[l("li",null,"set 中的数据不允许重复，添加不进去"),l("li",null," ES6提供了新的数据结构Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。 "),l("li",null,[e(" Set 本身是一个构造函数，用来生成set数据结构 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  let data = new Set();
  console.log(data.size);                    // 0
  let data2 = new Set(["a", "b"]);           // 传入数组
  console.log(data2.size);                   // 2
  let data3 = new Set(["a", "b", "b", "a"]); // 传入数组 但是会过滤掉重复的值
  console.log(data3.size);                   // 2  `)])]),l("li",null,[e(" 实例方法 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 1. add（value）：添加媒个值，返回Set结构本身
  let data = new Set(['a', 'b']);
  data.add('a').add('b');              // 注意，在set数据中，如果有了数据，那么此次添加只会覆盖，不会添加
  console.log(data.size);              // 2

  // 2. delete（value）：删除某个值，返回一个布尔值，表示删除是否成功
  data.delete('a');                    // 并可以返回 布尔值，如果删除成功，则返回true ,可以拿变量来接收
  console.log(data.size);              // 1

  // 3.has（value）：返回一个布尔值，表示该值是否为Set的成员
  let a = data.has('a');               // false 因为前面删除了
  let b = data.has('b');               // true
  console.log(a);

  // 4.clear()：清除所有成员，没有返回值
  data.clear();
  console.log(data.size);              // 0

  // 5.遍历 Set 中的数据
  let data = new Set(['a', 'b']);
  data.add('c').add('d');
  data.forEach(d => console.log(d));   // 遍历出 a   b  c  d
                  `)])])])])],-1)),n[140]||(n[140]=l("p",null,"Map",-1)),n[141]||(n[141]=l("ul",null,[l("li",null," ES6提供了Map数据结构。它类似于对象，也是键值对的集合。但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。Map也实现了iterator接口，所以可以使用[扩展运算符]和for..of...进行遍历。Map的属性和方法： "),l("li",null,[e(" const m = new Map() 创建需要用new关键字 "),l("ul",null,[l("li",null,"map.size() 返回Map的元素个数"),l("li",null,"map.set() 增加一个新元素，返回当前Map"),l("li",null,"map.get() 返回键名对象的键值"),l("li",null,"map.has() 检测Map中是否包含某个元素，返回boolean值"),l("li",null,"map.delete() 删除指定数据"),l("li",null,"map.clear() 清空集合，返回undefined")])])],-1)),n[142]||(n[142]=l("p",null,"class 类",-1)),n[143]||(n[143]=l("ul",null,[l("li",null," ES6提供了更接近传统语言的写法，引入了Class（类）这个概念，作为对象的模板。通过class关键字，可以定义类。基本上，ES6的class可以看作只是一个语法糖，它的绝大部分功能，ES5都可以做到，新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。 "),l("li",null,[e(" 代码： "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 1. class 声明类
  // 之前的实例化对象方法
  function Phone(brand, price) {
      this.brand = brand;
      this.price = price;
  }
  //添加方法
  Phone.prototype.call = function () {
      console.log('我是手机');
  }
  //实例化对象
  let iphone = new Phone('apple', '1000');
  iphone.call();
  console.log(iphone);

  // 使用ES6 class
  // ES6 class
  class Phone {
      constructor(brand, price) {         // 构造方法  固定名字，不能修改，不需要return 用这个名字会直接返回
          this.brand = brand;
          this.price = price;
      }                                   // 并且多个函数或方法之间不能加 ， 逗号
      call() {       // 方法必须使用该语法，不能使用ES5 的对象完整形式 例如 call : function(){}
          console.log('我是手机');
      }
  }
  // 实例化
  let iphone = new Phone('apple', 1200);  // 必须使用 new 来实例化对象
  iphone.call();
  console.log(iphone);

  // class 的静态成员
  class Phone {
      // 静态属性
      static name = '手机';                // 对于标注 static 的属性和方法，它属于类，不属于实例对象
      // 静态方法
      static get() {
          console.log('我是手机');
      }
  };
  let a = new Phone();
  console.log(a.name);                    // undefined
  console.log(Phone.name);                // 手机

  // 2. constructor 定义构造函数初始化
  constructor(brand, price) {
      this.brand = brand;
      this.price = price;
  }

  // 3. extends 继承父类
  class Father {
    // 父类
    eat() {
        console.log("吃方法");
    }
  }
  class Son extends Father {
                               // 使用 extends 关键字  进行继承
  }
  let a = new Son();
  a.eat();                     // 会继承父类的 eat的方法

  // 4. super 用于访问和调用父级构造方法，和普通函数
  class Father {
    constructor(x, y) {   //这里xy 是Son 中 super 传递过来的x y
        this.x = x;
        this.y = y;
    }
    sum() {
        console.log(this.x + this.y);
    }
  }
  class Son extends Father {
      constructor(x, y) {
          super(x, y);   // 调用父类中的构造函数
      }
  }
  let a = new Son(1, 2); // 如果没有使用 super() 方法，此时传参父类是接收不到的，只有使用super方法才能传给父类
  a.sum();

    /* 继承中，如果实例化自雷输出一个方法，先看子类有没有这个方法，如果有就先执行子类的
       继承中，如果子类里面没有，就去查找父类有没有这个方法，如果有，就执行父类的这个方法（就近原则）
       可以使用 super() 方法 改变就近原则，自己有方法，但通过super.sum() 去调用父级方法
       扩展自己的方法同时想调用父类方法，那么在子类 constructor中 先要声明 super ,不能在this之后声明 */

    class Father {
      constructor(x, y) {
          this.x = x;
          this.y = y;
      }
      add() {
          console.log(this.x + this.y);
      }
    }
    class Son extends Father {
        constructor(x, y) {
            super(x, y);         // 如果要调用父级，那么必须要在this之前声明好，强制要求
            this.x = x;
            this.y = y;
        }
        sub() {
            console.log(this.x - this.y);
        }
    }
    let a = new Son(7, 3);
    a.sub();
    a.add();

    //  super() 调用父类的构造函数
    class Father {
      constructor(x, y) {
          this.x = x;
          this.y = y;
      }
      add() {
          console.log(this.x + this.y);
      }
    }
    class Son extends Father {
        constructor(x, y) {
            super(x, y);     // 如果要调用父级，那么必须要在this之前声明好，强制要求
            super.add(x, y); // 调用父类的方法，注意用 点 来调用父类的方法
        }
    }
    let a = new Son(7, 3);
    a.sum();                // 得到两个结果，一个是sum() 和 add()的结果

    /* 类也可以直接调用方法 */
    class Father {
      constructor(x, y) {
          this.x = x;
          this.y = y;
          this.add();  // 加上 this. 方法
      }
      add() {
          console.log(this.x + this.y);
      }
    }

    /* 点击事件 也要加this，并且 btn点击了 this就指向了btn ，所以要创建一个变量来存储 constructor 里的 this */
    <button id="btn">按钮</button>
    <script>
        let _this = null;        // 创建一个 变量 来存储constructor 的 this
        class Father {
            constructor(x, y) {  // this 指向的是 实例化对象 a
                _this = this;
                this.x = x;
                this.y = y;
                this.btn = document.getElementById('btn');
                this.btn.onclick = this.add;
            }
            add() {              // 但是这里的this 指向的是 btn  因为谁调用，this就指向谁
                console.log(_this.x + _this.y);
            }
        }
        let a = new Father(7, 3);
    <\/script>

    /* constructor里面的 this 指向的是创建实例化对象 */
    class Father {
      constructor(x, y) {
          this.x = x;   // this 就指向的是 实例化对象 a
          this.y = y;   // this 就指向的是 实例化对象 a
      }
    }
    let a = new Father(7, 3);

  // 4. static 定义静态方法和属性 37j
  class Phone {
    // 静态属性
    static name = '手机';    // 对于标注 static 的属性和方法，它属于类，不属于实例对象
    // 静态方法
    static get() {
        console.log('我是手机');
      }
  };
  let a = new Phone();
  console.log(a.name);      // undefined 实例成员是通过 实例化对象来访问，这里没有实例成员this.成员
  console.log(Phone.name);  // 手机

  // 5. 私有属性
  class Person {                      // 创建一个构造函数
        #name;                        // 必须封闭类中声明私有字段“#name”
        #age;                         // 必须封闭类中声明私有字段“#gae”
        #sex;                         // 必须封闭类中声明私有字段“#sex”
        constructor(name, age, sex,money) {
            this.#name = name;        // 私有属性，只能通过方法getter获取和方法setter设置
            this.#age = age;          // 私有属性，只能通过方法getter获取和方法setter设置
            this.#sex = sex;          // 私有属性，只能通过方法getter获取和方法setter设置
            this.money = money;       // Person 公共属性,不受限制调用
        }
        fun() {
            console.log(this.#name, this.#age, this.#sex);
        }
        set name(name) {               // 私有属性，js提供set 函数名 来设置私有属性
            this.#name = name;
        }
        get name() {                   // 私有属性，js提供get 函数名 来获取私有属性
            return this.#name;
        }
        /*
          setName(name) {              // 等同于上面的set方法  来设置私有属性
              this.#name = name;
          }
          getName() {                  // 等同于上面的get方法  来获取私有属性
              return this.#name;
          }
        */
    }
    let p = new Person("张三", 18, "男",500);
    p.setName("猪八戒")                // 只能通过方法set 设置私有属性
    p.getName()                       // 只能通过方法get 获取私有属性
    p.name = "猪八戒"                  // 当设置私有属性时，调用的是set方法
    console.log(p.name);              // 当获取私有属性时，调用的是get方法，调用时不要加括号
    console.log(p.money);             // 公共属性可以直接获取

  // 6. 父类方法可以重写 38j
              `)])]),l("li",null,[e(" 创建类注意点： "),l("ul",null,[l("li",null,"没有变量提升，必须先创建好类，再实例化对象，才能调用"),l("li",null,"共有的属性和方法一定要加 this")])])],-1)),n[144]||(n[144]=l("p",null,"数值扩展",-1)),n[145]||(n[145]=l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 0.Number.EPSILON是Javascript表示的最小精度
  // EPSILON 属性的值接近于2.2204460492503130808472633361816E-16
  function equal(a, b) {
      if (Math.abs(a - b) < Number.EPSILON) {
          return true;
      } else {
          return false;
      }
  }
  console.log(0.1 + 0.2); // 0.30000000000000004
  console.log(equal(0.1 + 0.2, 0.3)); // true

  // 1. 二进制和八进制
  let t = 0b1010;

  // 2. Number.isFinite 检测一个数值是否为有限数
  console.log(Number.isFinite(100)); // true
  console.log(Number.isFinite(100 / 0)); // false

  // 3. Number.isNaN() 检测一个数值是否为NaN

  // 4. Number.parseInt() Number.PaseFloat()  字符串转整数

  // 5. Number.isInteger() 判断一个数是否为整数

  // 6. Number.trunc() 将数字的小数部分抹掉

  // 7. Math.sign() 判断一个数到底为正数 负数 还是零  返回结果  1  -1   0`)],-1)),n[146]||(n[146]=l("p",null,"对象方法扩展",-1)),n[147]||(n[147]=l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 1.Object.is() 判断两个值是否完全相等
  // 相当于 ===   但是 NaN 是个例外

  // 2.Object.assign 对象的合并
  const config1 = {
      name: '1',
      age: 2
  };
  const config2 = {
      name: '2',
      sex: '男'
  }
  console.log(Object.assign(config1, config2));  // 后面的对象会覆盖前面的，如果没有的属性会合并

  // 3.Object.setPrototypeof 设置原型对象   Object.getPrototypeof
  const school = {
      name: '尚硅谷'
  }
  const cities = {
      campus: ['北京', '上海', '深圳']
  }
  Object.setPrototypeof(school, cities);
  console.log(Object.getPrototypeof(school));
  console.log(school);`)],-1)),n[148]||(n[148]=l("p",null,"ES6模块化",-1)),n[149]||(n[149]=l("ul",null,[l("li",null," 模块化是指将一个大的程序文件，拆分成许多小的文件，然后将小文件组合起来。 "),l("li",null,[e(" ES6提模块化的优势有以下几点： "),l("ul",null,[l("li",null,"防止命名冲突"),l("li",null,"代码复用"),l("li",null,"高维护性")])]),l("li",null,[e(" CommonJS => NodeJS、Browserify "),l("ul",null,[l("li",null,"AMD => requireJs"),l("li",null,"CMD => seals")])]),l("li",null,[e(" 模块化语法，模块功能主要由两个命令构成： export 和 import "),l("ul",null,[l("li",null,[e(" export 命令用于规定模块的对外接口 "),l("pre",null,[l("code",{class:"language-html line-numbers"},`  // 分别暴露
  export const fs = '1';
  export function get() {
      console.log('暴露数据');
  }
  // html 页面 script type属性必须写上   type ="module"
    <script type="module">
       // html 页面引入 index.js 暴露的模块内容
        import * as index from "./js/index.js";
        console.log(index);
    <\/script>
  </body>

  // 统一暴露
  const fs = '1';
  function get() {
      console.log('暴露数据');
  }
  export { fs, get };   // 统一暴露  用 export{ } 格式

  // 默认暴露
  export default {
      aa: '1';
      fn: function() {
            console.log('暴露数据');
          }
  }
  // html页面调用方法，需要多加一个 default
  <script type="module">
      // html 页面引入 index.js 模块内容
      import * as index from "./js/index.js"
      index.default.fn();
  <\/script`)])]),l("li",null,[e(" import 命令用于输入其它模块提供的功能 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 通用 导入方式
  import * as index from "./js/index.js"

  // 结构赋值形式，
  export let a = 1;
  export function get() {
      console.log(111);
  }
  import {a,get} from "./js/index.js"; // 结构赋值形式  ｛里面跟着要暴露的名称｝
  console.log(a);
  console.log(get);

  //结构 统一暴露下的的结构赋值
  const a = 1;
  function get() {
      console.log('暴露数据');
  }
  export { a, get };   // 统一暴露  用 export{ } 格式
  html 页面下调用方式
  import {a as bm , get} from "./js/index.js"; // 因为a 和其他冲突了，所以用 as 取一个别名
  console.log(bm , get);

  // 默认暴露
  export default {
      a: 1,
      get: function () {
          console.log(111);
      }
  }
  html 页面下调用方式
  import {default as index} from "./js/index.js"; // 固定写法 ，必须要起一个别名
  console.log(index);

  // 简便形式，但只能针对默认暴露
  import index from "./js/index.js";`)])])])]),l("li",null,[e(" 模块化引入： "),l("ul",null,[l("li",null,[e(" 代码 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 需要单独创建一个 All名字随便的 同级 js 入口文件
  import * as index1 from "./index.js"
  import * as index2 from "./common.js"
  import * as index3 from "./style.js"
  console.log(index1);
  console.log(index2);
  console.log(index3);

  // html 引入必须加一个  type="module"
  <script> src="./js/All.js" type="module"><\/script>`)])]),l("li",null,[e(" 为了兼容性，需要引入插件来把es6 转换成兼容性 es5的代码，然后对打包好的js 文件进行引入就可以了 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  /* 安装工具
      abel-cli 命令行
      babel-preset-env 预设包，能够转换ES5语法
      browserify 打包工具，项目的话 会使用 webpack 打包
    vscode 打开终端，输入 :
      npm init --yes // --yes 是两个杠
      npm i babel-cli babel-preset-env browserify -D
    处理js 文件
      npx babel js -d dist/js --presets=babel-preset-env
      注：js 代表在哪里的目录下，配置同级就 js ，dist/js 代表要生成在哪个目录下
    打包
    html 页面引入即可
      npx browserify dist/js/All.js -o dist/bundle.js // -o 代表输出在哪里 js/All.js 代表 入口js
    html 页面引入即可  */

    <script src="./dist/bundle.js" type="module"><\/script>
                  `)])])])]),l("li",null,[e(" 模块化引入 NPM 包 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 安装jQuery npm i jquery
  // 页面引入
  import $ from 'jquery';        // 注意jquery 全小写  import 变量名 from 'npm 包的名字'
  $(function () {
      $('body').css('background', 'pink');
  })

  // 执行 npx babel js -d dist/js --presets=babel-preset-env
  // 重新打包 npx browserify dist/js/All.js -o dist/bundle.js
              `)])])],-1)),n[150]||(n[150]=l("p",null,"ECMAScript 7 新特性",-1)),n[151]||(n[151]=l("ul",null,[l("li",null,[e(" Array.prototype.includes "),l("ul",null,[l("li",null," includes方法用来检测数组中是否包含某个元素，返回布尔类型值 ")]),l("pre",null,[l("code",{class:"language-js line-numbers"},`  const arr = [1, 2, 3, 4, 5, 6];
  console.log(arr.includes(0));     // false  indexOf 只会返回1 -1 ，这个则会判断有没有

  console.log(2 ** 3);              // 次方 等同于 Math.pow() 求x的y 次幂的值
  console.log(Math.pow(2, 3));      // 求次方`)])])],-1)),n[152]||(n[152]=l("p",null,"ECMAScript 8 新特性",-1)),n[153]||(n[153]=l("ul",null,[l("li",null,[e(" async和await两种语法结合可以让异步代码像同步代码一样 "),l("ul",null,[l("li",null,"async函数的返回值为promise对象，"),l("li",null,"promise对象的结果由async函数执行的返回值决定")])]),l("li",null,[e(" await 表达式 "),l("ul",null,[l("li",null,"await必须写在async函数中 ,但是async 里可以没有await"),l("li",null,"await右侧的表达式一般为promise对象"),l("li",null," await返回的是promise成功的值4.await的promise失败了，就会抛出异常,需要通过try..catch捕获处理 ")])])],-1)),n[154]||(n[154]=l("p",null,"对象扩展",-1)),n[155]||(n[155]=l("ul",null,[l("li",null," Rest参数与spread扩展运算符在ES6中已经引入，不过ES6中只针对于数组，在·ES9·中为对象提供了像数组一样的rest参数和扩展运算符 ")],-1)),n[156]||(n[156]=l("p",null,"正则扩展",-1)),n[157]||(n[157]=l("ul",null,[l("li",null,[e(" 命名捕获分组 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 1. 命名捕获分组
  let str = '<a href="http://www.baidu.com">百度</a>';
  const reg = /<a href="(.*)">(.*)<\\/a>/;   // 第一个（.*） 代表第一个数据
  const result = reg.exec(str);
  console.log(result[1]);
  console.log(result[2]);
  // 分组
  let str = '<a href="http://www.baidu.com">百度</a>';
  const reg = /<a href="(?<url>.*)">(?<text>.*)<\\/a>/; // 第一个（?<标识名>.*）
  const result = reg.exec(str);
  console.log(result);                                  // 输出有 个  groups  属性

  // 2. 正向断言
  let str = '122313213一二三四五6666不知道';
  const reg = /\\d+(?=不)/;      // 匹配前面的数字
  const result = reg.exec(str);
  console.log(result);          // 输出结果  取不字前面的数字
  console.log(result[0]);       // 6666

  // 3. 反向断言
  let str = '122313213一二三四五6666不知道';
  const reg = /(?<=五)\\d+/;      // 匹配后面的数字
  const result = reg.exec(str);
  console.log(result);              // 输出结果  取不字前面的数字
  console.log(result[0]);           // 6666
          `)])]),l("li",null,[e(" dotAll 模式 "),l("ul",null," 命名捕获分组：之前的方式，换行也要算上，\\s ")])],-1)),n[158]||(n[158]=l("p",null,"Object.fromEntries",-1)),n[159]||(n[159]=l("ul",null,[l("li",null,"用来创建一个对象")],-1)),n[160]||(n[160]=l("p",null,"TrimStart 与 trimEnd",-1)),n[161]||(n[161]=l("pre",null,[l("code",{class:"language-js line-numbers"},`  let str = '    abc     ';
  console.log(str.trim());       // 清除左右的空字符串
  console.log(str.trimStart());  // 清除字符串前面的空格
  console.log(str.trimEnd());    // 清除字符串后面的空格
          `)],-1)),n[162]||(n[162]=l("p",null,"flat 与 flatMap",-1)),n[163]||(n[163]=l("ul",null,[l("li",null,"用来创建一个对象")],-1)),n[164]||(n[164]=l("p",null,"Symbol.prototype.description",-1)),n[165]||(n[165]=l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 用来得到 Symbol 的字符串
  let str = Symbol('字符串');
  console.log(str.description);  // 输出 字符串 三个字 `)],-1)),n[166]||(n[166]=l("p",null,"私有属性",-1)),n[167]||(n[167]=l("pre",null,[l("code",{class:"language-js line-numbers"},`  class Person {
    //公有属性
    name;
    //私有属性
    #age;#weight;
    constructor(name, age, weight) {
        this.name = name;
        this.#age = age;
        this.#weight=weight;
    }
    // 使用intro方法来调用
    intro() {
        console.log(this.name);
        console.log(this.#age);
        console.log(this.#weight);
      }
  }
  const girl = new Person('ming', 18, '50kg');
  girl.intro();`)],-1)),n[168]||(n[168]=l("p",null,"String.prototype.matchAll",-1)),n[169]||(n[169]=l("p",null,"可选链操作符",-1)),n[170]||(n[170]=l("p",null,"动态import",-1)),n[171]||(n[171]=l("ul",null,[l("li",null," import 返回的结果是一个 Promise 对象，成功的值就是暴露出来的模块对象 ")],-1)),n[172]||(n[172]=l("p",null,"BigInt",-1)),n[173]||(n[173]=l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 大整形，但是BigInt（'转换对象不能是浮点数'）
  let n = 123n;
  console.log(n, typeof n);

  // 函数
  console.log(BigInt(n));
  // console.log(BigInt(1.2));    // 不能使用浮点数进行转换

  // 作用是大数值运算
  let max = Number.MAX_SAFE_INTEGER;
  console.log(max);
  console.log(max + 1);
  console.log(max + 2);
  console.log('-------------------------');
  console.log(BigInt(max));
  // console.log(BigInt(max) + 1); // 报错
  console.log(BigInt(max) + BigInt(1));
  console.log(BigInt(max) + BigInt(2));`)],-1))]),_:1,__:[109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173]}),i(s,{id:"part8",shadow:"hover"},{default:t(()=>[n[187]||(n[187]=l("h2",null,"SVG",-1)),n[188]||(n[188]=l("p",null,"js库",-1)),n[189]||(n[189]=l("ul",null,[l("li",null,"JavaScript 操作 SVG 推荐使用 D3.js 库")],-1)),n[190]||(n[190]=l("p",null,"svg 四种引入格式",-1)),n[191]||(n[191]=l("pre",null,[l("code",{class:"language-html line-numbers"},`  <img src="">
  <iframe src="" frameborder="0"></iframe>
  <object data="" type=""></object>
  <embed src="" type="">
  <!-- 以上引用图片路径，下面svg标签是用数据画出来的 -->

  <svg></svg>  `)],-1)),n[192]||(n[192]=l("p",null,"svg 底层语法",-1)),n[193]||(n[193]=l("ul",null,[l("li",null," width属性和height属性，制定了SVG图像在HTML元素中所占据的宽度和高度。除了相对单位也可以采用绝对单位 "),l("li",null," （单位：像素）。如果不指定这两个属性， SVG图像默认大小是300像素（宽）*150像素（高）。 "),l("li",null,"如果只想展示SVG图像的一部分I就要指定viewBox属性。"),l("li",null," viewBox属性的值有四个数字，分别是左上角的横坐标和纵坐标、视口的高魔和宽度。上面代码中，SVG图像是100像素宽*100像素高， "),l("li",null," viewBox属性指定视口从（50，50）这个点开始。所以，实际看到的是右下角的四分之一圆。 "),l("li",null," 注意，视口必须适配所在的空间。上面代码中，视口的大小是5050，由于SVG图像的大小是100100，所以视口会放大去适配SVG图像的 大小，即放大了四倍。 "),l("li",null," 如果不指定width属性和height属性，只指定viewBox属性，则相当于只给到定SVG图像的长宽比。这时，SVG图像的默认大小将等于所在 的HTML元素的大小。 "),l("li",null,[e(" 代码 "),l("pre",null,[l("code",{class:"language-html line-numbers"},`  <!-- 设置矢量图的宽高 填充颜色 切出大小 -->
  <svg width="200px" height="200px" fill="white" viewBox="50 50 50 50">
      <!-- 画圆标签 id 相对父元素的坐标X 坐标Y 半径 -->
      <circle> id="myCircle" cx="50" cy="50" r="50"></circle>
  </svg>   `)])])],-1)),n[194]||(n[194]=l("p",null,"动画过渡变换",-1)),n[195]||(n[195]=l("pre",null,[l("code",{class:"language-html line-numbers"},`  <!--  <circle> 圆形，三个属性,cx代表相对父元素x起点坐标,cy代表相对父元素y起点坐标,r表示圆半径 -->
  <circle id="mycircle" class="red" fill="white" cx="50" cy="100" r="50"></circle>

  <!-- <line> 直线x1和y1代表线段起始点的横坐标和纵坐标，x2和y2代表结束点的坐标，style代表样式，颜色和宽度 -->
  <line> x1="50" y1="50" x2="50" y2="600" style="stroke: white; stroke-width: 5px"></line>

  <!-- <polyline> 折线 -->
  <style>
      svg {transition: all 2s;}  .line {stroke: white;stroke-width: 50px;fill: none;}  svg:hover {transform: rotate(90deg);}
  </style>
  <polyline points="50,100 50,300 350,300" class="line"></polyline>

  <!-- <rect>矩形，  x起始坐标   y起始坐标    width宽度    height高度  -->
  <rect> x="50" y="50" width="200" height="200" class="line"></rect>

  <!-- <ellipse>  椭圆，  cx横坐标   cy纵坐标    rx指定椭圆的横向坐标    ry指定椭圆的纵向坐标 -->
  <ellipse cx="150" cy="150" rx="50" ry="20" class="line"></ellipse>

  <!-- <polygon>  多边形，  points指定坐标，第一点x,y  第二个点x,y  第三个........ -->
  <polyline> points="0,0 50,100 50,300 350,300" class="line"></polyline>

  <!--
      <path>    路径， 按顺序书写：d = " M移动到    L画直线到........    Z闭合路径"
      M x    y      移动到（x，y）（小写表示相对于上个坐标的位移，下同
      L x    y      画一条直线到x，y）
      H x        水平画一条直线到x
      V y        竖直画一条直线到y
      A rx   ry  x-axis-rotation large-arc    sweep  x   y
        画一段到x，y的椭圆弧，椭圆弧的x，y轴半径分别为rx，ry.椭圆相对于x轴旋转x-axis-rotation度，
        large-arc=0表明弧线小于180，large-arc=1表示弧线大于180度，sweep=0表明弧线逆时针旋转，
        sweep=1表明现线顺时间旋转.具体解释看如何绘制椭圆弧
      Q cx   cy   x  y
      T x    y
      C cx2  cy2  x  y
      S cx2  cy2  x  y
  -->
  <path d="M 18,3 L 46,3 L 80,4 L108,150 L200,50 Z" class="line"></path>

  <!-- <text>  文本， x起始坐标   y起始坐标，必须y欧诺个fill改变颜色，其他class改变 -->
  <text> x="200" y="200" class="line" fill="red">这是绘制路径</text>

  <!-- <use>  复制， 给需要复制的形状ID，X Y是复制位置的起始坐标，相对需要复制的那个元素，不能超出svg位置 -->
  <circle id="mycircle" class="red" fill="white" cx="50" cy="100" r="50"></circle>
  <use href="#mycircle" x="150" y="150"></use>

  <!-- <g>  组   相当于ps 的  ctrl + g 形成一个组合 ，方便复用 -->
  <g id="mycircle">
      <circle> class="red" fill="white" cx="100" cy="100" r="50"></circle>
      <circle> class="red" fill="green" cx="50" cy="100" r="50"></circle>
  </g>
  <use> href="#mycircle" x="150" y="150"></use>

  <!-- <dfs>  相当于函数，当有其它来调用内容时才会显示 -->
  <defs>
      <g id="mycircle">
          <circle class="red" fill="white" cx="100" cy="100" r="50"></circle>
          <circle class="red" fill="green" cx="50" cy="100" r="50"></circle>
      </g>
  </defs>
  <use href="#mycircle" x="150" y="150"></use>

  <!-- <pattern>  用于自定义一个形状，该形状可以被引用来平铺一个区域。 -->
  <!-- <image>   用于插入图片文件 但不使用这种方式，因为放大会失真 -->
  <image> xlink:href="img/0.png" width="50%" height="50%"></image>

  <!-- <animate> 用于产生动画效果 , animate的属性含义如下。
        attributeName：发生动画效果的属性名。
        from；单次动画的初始值。
        to：单次动画的结束值。
        dur：单次动画的持续时间。
        repeatCount：动画的循环模式。  -->
  <svg width="300" height="300">
      <circle cx="50" cy="50" r="30">
          <animate attributeName="cx" from="0" to="500" dur="2s" repeatCount="indefinite" />
          <animate attributeName="cy" from="0" to="500" dur="2s" repeatCount="indefinite" />
      </circle>
  </svg>

  <!-- <animateTransform>   对于animate标签transform不起作用时采用的
      上面代码中，<animateTransform>的效果为旋转（rotate），这from和to属性值有三个数字，第一个数字是角度值，第二个值和第三个值是旋转
      中心的坐标。from="0200200"表示开始时，角度为0，围绕（200，200）开始旋转；to="360400400"表示结束时，角度为360，围绕（400，400）旋转。
  -->
  <animateTransform attributeName="transform" type="rotate" begin="0s" dur="10s" form="0 200 200" to="360 400 400" repeatCount="indefinite" />
`)],-1)),n[196]||(n[196]=l("p",null,"写class类",-1)),n[197]||(n[197]=l("ul",null,[l("li",null,"svg标签属性与网页元素的css不同"),l("li",null,[e(" 表格 "),l("table",null,[l("tbody",null,[l("tr",null,[l("th",null,"属性"),l("th",null,"描述"),l("th",null,"属性"),l("th",null,"描述")]),l("tr",null,[l("td",null,"fill"),l("td",null,"填充色"),l("td",null,"stroke"),l("td",null,"描边色")]),l("tr",null,[l("td",null,"stroke-width"),l("td",null,"边框宽度"),l("td",null,"stroke-linecap"),l("td",null,"边框角圆弧")]),l("tr",null,[l("td",null,"stroke-dasharray"),l("td",null,"边框间隔"),l("td"),l("td")])])])])],-1)),n[198]||(n[198]=l("p",null,"JS操作",-1)),n[199]||(n[199]=l("pre",null,[l("code",{class:"language-html line-numbers"},`  <svg width="200px" height="200px" fill="black">
  <circle> id="mycircle" cx="100" cy="100" r="50"></circle>
  </svg>
  <button>点击放大</button>
  <script>>
    let btn = document.querySelector("button");
    btn.addEventListener("click", function () {
        let svg = document.querySelector("svg");
        let circle = document.querySelector("#mycircle");
        svg.setAttribute("width", "300px");     // 通过setAttribute来修改属性
        svg.setAttribute("height", "300px");
        circle.setAttribute("r", "100px");
        svg.style.fill = "red";                 // 通过style来修改样式
        let num = 10;
        let timer = setInterval(function () {   // 也可以做动画
            num += 10;
            circle.setAttribute("cx", num);
        }, 100);
        console.log([svg]);                     // 获取元素里的属性
    });
  <\/script>`)],-1)),n[200]||(n[200]=l("p",null,"绘制条形图",-1)),l("ul",null,[n[185]||(n[185]=l("li",null,[e(" 流程 "),l("ul",null,[l("li",null,"获取数据"),l("li",null,"创建svg"),l("li",null,"创建坐标"),l("li",null,"绘制坐标文字"),l("li",null,"依据数据绘制矩形（条形）")])],-1)),l("li",null,[n[184]||(n[184]=e(" 可以使用封装好的库: ")),i(o,{type:"primary",icon:"Link",target:"_blank",href:"https://echarts.apache.org/zh/index.html"},{default:t(()=>n[174]||(n[174]=[e(" https://echarts.apache.org/zh/index.html ")])),_:1,__:[174]}),l("ul",null,[l("li",null,[n[181]||(n[181]=e(" 引入JS文件或者下载好js文件，进行引入 ")),l("ul",null,[l("li",null,[n[176]||(n[176]=e(" Staticfile CDN（国内）: ")),i(o,{type:"primary",icon:"Link",target:"_blank",href:"https://cdn.staticfile.org/echarts/4.3.0/echarts.min.js"},{default:t(()=>n[175]||(n[175]=[e(" https://cdn.staticfile.org/echarts/4.3.0/echarts.min.js ")])),_:1,__:[175]})]),l("li",null,[n[178]||(n[178]=e(" jsDelivr： ")),i(o,{type:"primary",icon:"Link",target:"_blank",href:"https://cdn.jsdelivr.net/npm/echarts@4.3.0/dist/echarts.min.js"},{default:t(()=>n[177]||(n[177]=[e(" https://cdn.jsdelivr.net/npm/echarts@4.3.0/dist/echarts.min.js ")])),_:1,__:[177]})]),l("li",null,[n[180]||(n[180]=e(" cdnjs: ")),i(o,{type:"primary",icon:"Link",target:"_blank",href:"https://cdnjs.cloudflare.com/ajax/libs/echarts/4.3.0/echarts.min.js"},{default:t(()=>n[179]||(n[179]=[e(" https://cdnjs.cloudflare.com/ajax/libs/echarts/4.3.0/echarts.min.js ")])),_:1,__:[179]})])])]),n[182]||(n[182]=l("li",null,[e(" 使用之前，要准备一个DOM容器 "),l("pre",null,[l("code",{class:"language-html line-numbers"},`  <body>
      <!-- 为 ECharts 准备一个定义了宽高的 DOM -->
      <div id="main" style="width: 600px;height:400px;"></div>
  </body>`)])],-1)),n[183]||(n[183]=l("li",null,[e(" 【完整写法】然后就可以通过 echarts.init 方法初始化一个 echarts 实例并通过 setOption 方法生成一个简单的柱状图，下面是完整代码。 "),l("pre",null,[l("code",{class:"language-html line-numbers"},`  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <title>ECharts</title>
      <!-- 引入刚刚下载的 ECharts 文件 或者 直接引入CDN -->
      <script> src="echarts.js"><\/script>
    </head>
    <body>
      <!-- 为 ECharts 准备一个定义了宽高的 DOM -->
      <div> id="main" style="width: 600px;height:400px;"></div>
      <script> type="text/javascript">
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        // 指定图表的配置项和数据
        var option = {
          title: {text: 'ECharts 入门示例'},
          tooltip: {},
          legend: {data: ['销量']},
          xAxis: {data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']},
          yAxis: {},
          series: [
            {name: '销量',type: 'bar',data: [5, 20, 36, 10, 10, 20]}
          ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
      <\/script>
    </body>
  </html>`)])],-1))])]),n[186]||(n[186]=l("li",null,[e(" 模版引入方法 "),l("ul",null,[l("li",null,"引入js 或者 cdn"),l("li",null," 创建一个DOM容器 id= main 并设置宽高，也可以用js来控制宽高，官方文档有写 "),l("li",null," 写script， 初始化容器（官网下载模版，复制option配置项），并配置，最后 显示 ")]),l("pre",null,[l("code",{class:"language-html line-numbers"},`  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <!-- 第一步 -->
      <script src="https://cdn.staticfile.org/echarts/4.3.0/echarts.min.js"><\/script>
  </head>
  <body>
      <!-- 第二步 -->
      <div id="main" style="width: 600px;height:400px;"></div>
      <script type="text/javascript">
          var myChart = echarts.init(document.getElementById('main'));  // 第三步1
          var option = ｛                                                // 第三步2
              xAxis: {type: 'category',boundaryGap: false, data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']},
              yAxis: { type: 'value'},
              series: [｛ data: [820, 932, 901, 934, 1290, 1330, 1320],type: 'line',areaStyle: {｝｝]
          };
          myChart.setOption(option);                                    // 第三步3
      <\/script>
  </body>
  </html>`)])],-1))])]),_:1,__:[187,188,189,190,191,192,193,194,195,196,197,198,199,200]})]),_:1},8,["data"])}}});export{C as default};
