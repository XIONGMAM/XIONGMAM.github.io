import{_ as a,E as c}from"./el-card-BC1LQGcn.js";import"./base-BOVE5efH.js";import{E as p}from"./el-link-b02lqcaU.js";import{d as o,r as m,m as $,w as s,f as e,b as l,Q as n,o as h}from"./index-rcW_pH8g.js";import"./index-BRdTUeC1.js";import"./event-BB_Ol6Sd.js";import"./icon-D8zniuSg.js";import"./style-CQyj6J43.js";import"./use-global-config-ZfVEybhJ.js";import"./index-DL17Y2WH.js";import"./index-DNrEt1wy.js";const g=o({name:"Sass"}),N=o({...g,setup(b){const u=m([{id:1,h2:"使用"},{id:2,h2:"语法"}]);return(f,t)=>{const r=p,i=c,d=a;return h(),$(d,{data:u.value},{svg:s(()=>t[0]||(t[0]=[l("svg",{t:"1737886263985",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"14901",width:"48",height:"48"},[l("path",{d:"M512 64c247.3 0 447.8 200.5 447.8 447.8S759.3 959.6 512 959.6 64.2 759.1 64.2 511.8 264.7 64 512 64z m-89 597c6.5 24.1 5.8 46.6-0.9 66.9l-2.4 6.7c-0.9 2.3-1.9 4.5-2.9 6.6-5.2 10.8-12.2 20.9-20.7 30.2-26 28.3-62.4 39.1-78 30-16.8-9.8-8.4-49.8 21.8-81.7 32.5-34.3 79.1-56.3 79.1-56.3v-0.1l4-2.3z m369.8-405.3c-20.2-79.6-152.1-105.8-277-61.4-74.2 26.4-154.6 67.8-212.4 121.9-68.8 64.2-79.7 120.2-75.2 143.6 15.9 82.5 129 136.5 175.5 176.5v0.2c-13.7 6.7-114 57.1-137.5 109.2-25.2 54.9 3.9 94.1 22.9 99.1 58.8 16.3 119.2-13.4 151.7-61.5 31.3-47.1 28.6-107.5 15.1-137.2 18.5-5 40.3-7.3 68.3-3.9 78.4 9 94.1 58.2 90.7 78.4-3.4 20.1-19.5 31.9-25.2 35.2-5.6 3.4-7.3 4.5-6.8 6.8 0.6 3.4 3.4 3.4 7.8 2.8 6.2-1.1 40.9-16.8 42.6-54.9 1.7-48.1-44.3-101.8-125.9-100.8-33.6 0.6-54.9 3.4-70 9.6-1-1.6-2.4-2.9-3.9-3.9-50.4-54.3-143.9-92.4-139.9-164.6 1.1-26.3 10.6-95.7 179.1-179.6 138.3-68.9 248.6-49.8 267.6-7.8 27.4 59.9-58.8 171.3-202.7 187.5-54.9 6.2-83.4-15.1-90.7-22.9-7.8-8.4-8.9-9-11.7-7.2-4.5 2.2-1.7 9.5 0 14 4.5 11.2 21.8 30.8 52.1 40.9 26.3 8.4 90.7 13.4 167.9-16.8C742 425 809.7 331.5 790.1 253.2l2.7 2.5z",fill:"#CF649A","p-id":"14902"})],-1),l("h1",null,"Sass",-1)])),describe:s(()=>t[1]||(t[1]=[l("p",null," Sass（Syntactically Awesome Stylesheets）是一种强大的CSS预处理器，它扩展了CSS的功能，使其更加强大和灵活。Sass允许开发者使用变量、嵌套规则、混合（Mixins）、继承等高级特性，从而编写更简洁、更可维护的样式表。 ",-1)])),content:s(()=>[e(i,{id:"part1",shadow:"hover"},{default:s(()=>[t[7]||(t[7]=l("h2",null,"使用",-1)),t[8]||(t[8]=l("p",null,"安装",-1)),l("ul",null,[l("li",null,[t[5]||(t[5]=n(" 方法1 ")),l("ul",null,[l("li",null,[t[3]||(t[3]=n(" 官网： sass-lang.com , 中文文档 ")),e(r,{type:"primary",icon:"Link",target:"_blank",href:"https://www.sass.hk/docs/"},{default:s(()=>t[2]||(t[2]=[n(" https://www.sass.hk/docs/ ")])),_:1,__:[2]})]),t[4]||(t[4]=l("li",null," win / mac => 打开官网 => Install => 使用NPM在命令行输入 => npm install -g sass => 输入npm sass -v 检查版本 ",-1))])]),t[6]||(t[6]=l("li",null,[n(" 方法2(推荐) "),l("ul",null,[l("li",null," Vscode 安装插件 EasySass 在配置里settings.json中配置，默认会输出两个文件，一个压缩和一个未压缩， "),l("li",null,"文件命名为 index.scss"),l("li",null,"配置路径，到settings设置"),l("li",null," 如果不是在根目录下的sass文件夹，那么就可能不会输出.css文件，需要用监视 ")]),l("table",null,[l("tbody",null,[l("tr",null,[l("th",null,"说明"),l("th",null,"描述")]),l("tr",null,[l("td",null,"全局安装 sass"),l("td",null,"npm install -g sass")]),l("tr",null,[l("td",null,"将sass文件转换为css文件"),l("td",null," sass --watch test.scss output.css 执行上面语句会监听scss文件变化，一旦文件变化并保存后将立即输出到css文件上 ")]),l("tr",null,[l("td",null,"监听目录的变化"),l("td",null,[n(" sass --watch app/sass:public/stylesheets "),l("br"),n(" sass将会监听src/sass目录下所有文件的变动，并编译css到public/stylesheets目录。 "),l("br"),n(" 其中以冒号进行分割，前面是sass目录，后面是css目录。 ")])])])])],-1))]),t[9]||(t[9]=l("p",null,"Easy Sass插件",-1)),t[10]||(t[10]=l("pre",null,[l("code",{class:"language-js line-numbers"},`  /* 配置 */
  "easysass.formats": [
    {
      "format": "expanded",          /* 格式为 扩展*/
      "extension": ".css"            /* 扩展名为.css */
    },
    {
      "format": "compressed",        /* 格式为 压缩*/
      "extension": ".min.css"        /* 扩展名为.min.css */
    }
  ],
  "easysass.targetDir": "./css/",    /* 自定义输出位置 ,这样写的话你在创建Sass文件夹后，输出会到css文件夹下*/ `)],-1))]),_:1,__:[7,8,9,10]}),e(i,{id:"part2",shadow:"hover"},{default:s(()=>t[11]||(t[11]=[l("h2",null,"语法",-1),l("p",null,"代码",-1),l("pre",null,[l("code",{class:"language-css line-numbers"},`  /* nested嵌套： */
  div {
    width: 10px; }
    div ul {
      width: 20px; }
      div ul li {
        width: 30px; }

  /* compact紧凑： */
  div { width: 10px; }
  div ul { width: 20px; }
  div ul li { width: 30px; }

  /* expanded扩展： */
  div {width: 10px;}
  div ul {width: 20px;}

  div ul li {width: 30px;}

  /* compressed压缩：  */
  div{width:10px}
  div ul{width:20px}
  div ul li{width:30px}`)],-1),l("p",null,"两种语法区别",-1),l("ul",null,[l("li",null,[n(" 原始缩进式： .sass "),l("ul",null,[l("li",null,"/* 多行注释 sass写法"),l("li",null,"// 单行写法 其他内容sass只需要缩进下就可以达到注释效果")]),l("pre",null,[l("code",{class:"language-css line-numbers"},`  @import base
  =alert
      color:#333
  .alert-warning
      +alert
  ul
      font-size: 15px
      li
          list-style:non`)])]),l("li",null,[n(" sassy css: .scss "),l("pre",null,[l("code",{class:"language-css line-numbers"},`  /* 多行写法
      多行要写尾部
  */

  // 单行 且 每行都要加反斜杠

  @import "base";
  @mixin alert {color: #333;}
  .alert-warning {@include alert;}
  ul {
      font-size: 15px;
      li {
          list-style: none;
      }
  }`)])])],-1),l("p",null,"语法",-1),l("ul",null,[l("li",null,[n(" 变量 "),l("pre",null,[l("code",{class:"language-css line-numbers"},`  $color-red: #333;
  $border: 1px solid $color-red;
  div{color:$color-red;}
  h1{border:$border;}   /* 可以变量中引用变量 */`)])]),l("li",null,[n(" 嵌套 "),l("pre",null,[l("code",{class:"language-css line-numbers"},`  div {
      color:$color-red;
      h1 {border: $border;}
      &:hover { color: #333;}
      & &-text{ color: #444;}
  }

  /* 可以使用根来嵌套 */
  body{font-size: 12px;font-weight: 600;font-family: 'Courier New', Courier, monospace;}

  /* 使用嵌套简写 */
  body{
      font: {   /* 注意font: 加上空格 再写{} */
          size: 12px;weight: 600;family: 'Courier New', Courier, monospace;
      }
  }`)])]),l("li",null,[n(" 混合 "),l("pre",null,[l("code",{class:"language-css line-numbers"},`  @mixin alert {                               /* 定义mixin */
      color: #444;
      background-color: #666;
      a {color: #666;}                         /* 可以使用嵌套 */

  }

  .alert-warning {                             /* 类使用mixin */
      @include alert;                          /* 使用关键字  @include */
  }

  /* 高级用法 */
  @mixin alert($color-red, $border) {          /* 定义mixin  （）里添加变量参数 */
      color: $color-red;background-color: $border;
      a {color: darken($color-red, 10%); }     /* 可以使用嵌套,darken是颜色加深的函数，后面是加深值 */
  }

  .alert-warning {                             /* 类使用mixin */
      @include alert(#666,#777);               /* 使用关键字  @include，可以不传参，也可以传入实参 */
  }
  .alert-info {                                /* 类使用mixin */
      @include alert($color-red:#fff,$border:#ccc); /* 可以定义变量初始值 */
  }

  /* 注意：混合形参可以给默认值，或者给null ,除掉某些样式，不会生成到最终的CSS样式中，除非我们调用混合宏时为其赋值。*/

  /* sass mixin variable fun start */
  @mixin displayStyle($display: null, $justifyContent: null, $alignItems: null) {
      display: $display;justify-content: $justifyContent;align-items: $alignItems;
  }
  @mixin widthStyle($width: null, $height: null, $color: null) {
      width: $width;height: $height;color: $color;
  }
  @mixin fontStyle($fontSize: null, $color: null, $fontWeight: null) {
      font-size: $fontSize;color: $color;font-weight: $fontWeight;
  }
  @mixin positionStyle($position: null, $top: null, $left: null) {
      position: $position;top: $top;left: $left;
  }
  @mixin borderStyle($size: null, $style, $color) {
      border: $size $style $color;
  }
  @mixin borderRadius($top: null, $right: null, $bottom: null, $left: null) {
      border-radius: $top $right $bottom $left;
  }
  @mixin imgStyle($address: null, $style: null, $width: null, $height: null) {
      $url: url; background: #{$url }($address) $style;background-size: $width $height;
  }
  @mixin spacingStyle($margin: null, $padding: null) {
      margin: $margin;padding: $padding;
  }
  @mixin pseudoClass($width: null, $height: null) {
      content: "";display: block;width: $width;height: $height;}

  /* sass mixin variable fun ebd */
  /* 当不确定形参个数时，可用...代替 @mixin box-shadow($shadows...) */
  @mixin box-shadow($shadows...) {
    -moz-box-shadow: $shadows;
    -webkit-box-shadow: $shadows;
    box-shadow: $shadows;
  }
  .shadows {
    @include box-shadow(0px 4px 5px #666, 2px 6px 10px #999);
  }`)])]),l("li",null,[n(" 继承extend "),l("pre",null,[l("code",{class:"language-css line-numbers"},`  .alert{padding: 15px;}
  .alert a{font-weight: bold;}
  .alert-info{   /* 继承 */
      @extend .alert;    /* 关键字  extend */
      background-color: #ccc;
  }

  /* 输出css结果为 */
  .alert, .alert-info{padding: 15px;}
  .alert a, .alert-info a{font-weight: bold;}
  .alert-info{background-color: #ccc;}`)])]),l("li",null,[n(" 导入import， 导入partials文件 "),l("ul",null,[l("li",null,"sass/_base.css"),l("li",null,"sass/style.scss"),l("li",null," partials文件要以下划线命名开头 _base.scss，这种文件不会被编译，而是等待@import导入 "),l("li",null," 在@import 导入 _base.scss ， @import “base”; 不需要加后缀，会自动解析 ")])]),l("li",null,[n(" 注释 "),l("ul",null,[l("li",null,[n(" /* 我写一个多行注释 "),l("br"),n(" * 这种会生成在css文件里面 */ ")]),l("li",null," /*! 强制输出的注释内容，压缩的css中也会出现,就是在前面加个！号*/ "),l("li",null,"// 单行注释不会出现在Css文件里面")])]),l("li",null,"查看类型 type-of()"),l("li",null,"运算加括号（1 x 2）"),l("li",null,[n(" 函数：数学 "),l("table",null,[l("tbody",null,[l("tr",null,[l("th",null,"函数"),l("th",null,"描述"),l("th",null,"函数"),l("th",null,"描述")]),l("tr",null,[l("td",null,"abs(10px)"),l("td",null,"处理数字函数取绝对值"),l("td",null,"round(3.5)"),l("td",null,"保留整数")]),l("tr",null,[l("td",null,"ceil(3)"),l("td",null,"保留整数 进位，输出4，不会四舍五入"),l("td",null,"floor(3.6)"),l("td",null,"保留整数，向下取整")]),l("tr",null,[l("td",null,"percentage(650px / 1000px)"),l("td",null,"百分比 65%"),l("td",null,"min(1,2,3)"),l("td",null,"取最小值 1")]),l("tr",null,[l("td",null,"max(1,2,3)"),l("td",null,"取最大值 3"),l("td"),l("td")])])])]),l("li",null,[n(" 函数：字符串 "),l("table",null,[l("tbody",null,[l("tr",null,[l("th",null,"函数"),l("th",null,"描述"),l("th",null,"函数"),l("th",null,"描述")]),l("tr",null,[l("td",null,"to-upper-case(变量)"),l("td",null,"全部转大写"),l("td",null,"to-lower-case(变量)"),l("td",null,"全部转小写")]),l("tr",null,[l("td",null,"str-length(变量)"),l("td",null,"获取字符长度"),l("td",null,"str-index(检查字符串，判断位置)"),l("td",null,"获取位置")]),l("tr",null,[l("td",null,"str-insert(变量，“插入值”，位置)"),l("td",null,"插入"),l("td"),l("td")])])])]),l("li",null,[n(" 函数：color "),l("table",null,[l("tbody",null,[l("tr",null,[l("th",null,"函数"),l("th",null,"描述"),l("th",null,"函数"),l("th",null,"描述")]),l("tr",null,[l("td",null,"rgb()"),l("td",null,"红，绿，蓝数量来改变颜色"),l("td",null,"rgba()"),l("td",null,"红，绿，蓝数量，alpha通道0-1 来改变颜色")]),l("tr",null,[l("td",null,"hsl()"),l("td",null,"色相0，饱和度%，明度% ，会转换成rgb()"),l("td",null,"hsla()"),l("td",null,"色相0，饱和度%，明度%，alpha通道0-1，会转换成rgba()")]),l("tr",null,[l("td",null,"adjust-hue()"),l("td",null," 颜色，度数deg，调整颜色，会转换成十六进制颜色，相当ps中颜色的滑块 "),l("td",null,"lighten()"),l("td",null,"处理的颜色，增加的明度%，调整颜色")]),l("tr",null,[l("td",null,"dorken()"),l("td",null,"颜色，减少明度%，调整颜色"),l("td",null,"saturate()"),l("td",null,"颜色，增加饱和度%， 改变纯度")]),l("tr",null,[l("td",null,"desaturate()"),l("td",null,"颜色，减少饱和度% ， 改变纯度"),l("td",null,"transparent()"),l("td",null,"颜色，减少的透明度0-1，转换成rgba")]),l("tr",null,[l("td",null,"opacify()"),l("td",null,"颜色，0-1增加颜色的不透明度,转换成rgba"),l("td"),l("td")])])])]),l("li",null,[n(" 列表函数：list 列表函数，可用（）或者，分割 "),l("table",null,[l("tbody",null,[l("tr",null,[l("th",null,"函数"),l("th",null,"描述"),l("th",null,"函数"),l("th",null,"描述")]),l("tr",null,[l("td",null,"length()"),l("td",null,"列表，获取长度，里面的位置是index索引值"),l("td",null,"nth()"),l("td",null,"列表，获取第几个项")]),l("tr",null,[l("td",null,"index()"),l("td",null,"列表，指定值，输出指定值的位置"),l("td",null,"append()"),l("td",null,"列表，插入值，增加")]),l("tr",null,[l("td",null,"join()"),l("td",null,"列表，列表，组合"),l("td",null,"map"),l("td",null,"map名/变量：(键：值，键：值)")]),l("tr",null,[l("td",null,"map-get()"),l("td",null,"map名,键 ， 返回键的值"),l("td",null,"map-key()"),l("td",null,"map名，返回列表里所有的键")]),l("tr",null,[l("td",null,"map-valuese()"),l("td",null,"map名，返回列表里所有的值"),l("td",null,"map-has-key()"),l("td",null,"map名，值。判断map里面有没有这个值，返回布尔值")]),l("tr",null,[l("td",null,"map-remove()"),l("td",null,"map名，键，键 ，移除多个用逗号分隔"),l("td"),l("td")])])])]),l("li",null,[n(" 布尔值 true / false "),l("ul",null,[l("li",null,"ont")])]),l("li",null,[n(" interpolation 类似模版字符串 "),l("pre",null,[l("code",{class:"language-css line-numbers"},`  $version: "0.0.1";
  /* 项目当前的版本是： #{$version} */

  $name: "info";
  $attr: "border";

  .alert-#{$name} {#{$attr}-color: #ccc;}

  输出结果：
  /* 项目当前的版本是： 0.0.1
  .alert-info {
      border-color: #ccc;
  } */`)])]),l("li",null,[n(" @echo 循环输出 "),l("pre",null,[l("code",{class:"language-css line-numbers"},`  /* @each $var in $list{} */
  $icons: a b c;
  @each $icon in $icons ｛.icon-#{$icon} ｛background-image: url(../img/icons/#{$icon}.svg);｝｝
  $list: (1: hb_img52,2: hb_img51,3: hb_img53);
  @each $key, $var in $list ｛
      .rotationImg:nth-child(#{$key}) {
          @include imgStyle("../images/upload/#{$var}.jpg", no-repeat, 100%, 100%);}`)])]),l("li",null,[n(" @while 循环输出,条件为真一直输出，条件为假则中断 "),l("pre",null,[l("code",{class:"language-css line-numbers"},`  $condition: 6;
  @while $condition>0 {
      .item-#{$condition} {width: 5px * $condition;}
      $condition: $condition - 2;
  }
  /* 输出结果
      .item-6 {width: 30px;}
      .item-4 {width: 20px;}
      .item-2 { width: 10px;} */`)])]),l("li",null,[n(" @if 判断:变量值是真是假 { 然后才输出这里的代码} else if {} else{} "),l("pre",null,[l("code",{class:"language-css line-numbers"},`  @if $use-prefixes: true;    /* true会输出  false不会输出  */
  .rounded {
      @if $use-prefixes {
          -webkit-border-radius: 5px;
          -moz-border-radius: 8px;
          -ms-border-radius: 8px;
          -o-border-radius: 8px;
      }
      border-radius: 8px;
  }

  /* 多条件判断 */
  $theme: dark;  /* 输出black */
  body {
      @if $theme == dark {
          background-color: black;
      } @else if $theme == light {
          background-color: white;
      } @else {
          background-color: pink;
      }
  }`)])]),l("li",null,[n(" @for 变化重复： "),l("ul",null,[l("li",null," @for $var from <开始值> through <结束值> 包含结束值 "),l("li",null," @for $var from <开始值> to <结束值> 不包含结束值 ")]),l("pre",null,[l("code",{class:"language-css line-numbers"},`  $columns: 4;
  @for $i from 1 through $columns {
    .col-#{$i}-#{$columns} {
      width: (100% / $columns) * $i;
    }
  } `)])]),l("li",null,[n(" 自定义函数 "),l("pre",null,[l("code",{class:"language-css line-numbers"},`  $colors: (light:#fff, dark:#000);
  @function color($key) {@return map-get($colors, $key);}

  body {background-color: color(light); }  /* 输出为#fff */`)])]),l("li",null,[n(" 显示错误/正确 提示 "),l("pre",null,[l("code",{class:"language-css line-numbers"},`  $colors: (light:#fff, dark:#000);
  @function color($key) {
      @if not map-has-key($colors, $key) {
          @error "在输出下会有错误提示，提示#{$key}不存在";
      }
      @return map-get($colors, $key);
  }

  body {background-color: color(red); } /* 给错的值 */`)])])],-1)])),_:1,__:[11]})]),_:1},8,["data"])}}});export{N as default};
