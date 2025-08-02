import{_ as m,E as p}from"./el-card-BC1LQGcn.js";import"./base-BOVE5efH.js";import{E as a}from"./el-link-b02lqcaU.js";import{d as o,r as x,m as g,w as e,f as u,b as l,Q as i,o as b}from"./index-rcW_pH8g.js";import"./index-BRdTUeC1.js";import"./event-BB_Ol6Sd.js";import"./icon-D8zniuSg.js";import"./style-CQyj6J43.js";import"./use-global-config-ZfVEybhJ.js";import"./index-DL17Y2WH.js";import"./index-DNrEt1wy.js";const w=o({name:"Mobile"}),B=o({...w,setup(f){const d=x([{id:1,h2:"开发流程"},{id:2,h2:"主流方案"},{id:3,h2:"技术选型"},{id:4,h2:"rem适配方案"}]);return(S,n)=>{const t=p,s=a,r=m;return b(),g(r,{data:d.value},{svg:e(()=>n[0]||(n[0]=[l("svg",{t:"1737873127623",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"6778",width:"48",height:"48"},[l("path",{d:"M744 62H280c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h464c35.3 0 64-28.7 64-64V126c0-35.3-28.7-64-64-64z m-8 824H288V134h448v752zM472 784a40 40 0 1 0 80 0 40 40 0 1 0-80 0z",fill:"#1296DB","p-id":"6779"})],-1),l("h1",null,"Mobile",-1)])),describe:e(()=>n[1]||(n[1]=[l("p",null," 随着智能手机和移动互联网的迅速发展，用户对移动应用的需求不断增高，HTML及其相关技术也被广泛应用于移动端的开发 ",-1)])),content:e(()=>[u(t,{id:"part1",shadow:"hover"},{default:e(()=>n[2]||(n[2]=[l("h2",null,"开发流程",-1),l("p",null,"移动端rem开发流程",-1),l("ul",null,[l("li",null," 技术方案：flex布局 、百分比布局、rem布局、vw/vh布局、响应式布局 "),l("li",null,"技术选型：flex + rem + flexible.js + sass + normalize.css"),l("li",null," 最小适配Iphone5 320px , 最大适配 iphone8 plus (ipad能正常查看内容) "),l("li",null," UI：750设计稿，ps插件使用慕客，标注切图，再上传到慕客，再查看项目，再下载切图 "),l("li",null,[i(" 结构 (用webpack打包，正常书写要用link引入css、js 文件) "),l("pre",null,[l("code",{class:"language-html line-numbers"},`  Project
  |__css    / normalize.css  index.css
  |__js     / index.js   flexible.js
  |__images
  |__index.html`)])]),l("li",null," VSCode => 设置 => Root Font Size => 改成37.5 => flexible.js => 改成20等分 "),l("li",null,"设置完了就正常书写样式代码"),l("li",null,[i(" 注意事项：设计稿最好能把字体做大来，24px以上，移动端最小只有12px，字体太小影响阅读 "),l("pre",null,[l("code",{class:"language-css line-numbers"},`  <!--- The site is designed by XIONGBAB 2023/1/30 --->
  <!DOCTYPE html>
  <html lang="en">
      <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="author" content="XIONGBAB" />
          <meta name="description" content="WEDDING LINK" />
          <meta name="keywords" content="WEDDING LINK" />
          <meta http-equiv="Pragma" content="no-cache" />
          <meta http-equiv="Window-target" content="_top" />
          <meta name="robots" content="none" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
          <link rel="Shortcut Icon" href="../src/images/favicon.ico" />
          <title><%=htmlWebpackPlugin.options.title%></title>
      </head>
      <body>
      </body>
  </html>

  <!-- css -->
  <style>
      html ｛body ｛min-width: 320px;max-width: 750px;margin: 0 auto;｝｝
      @media screen and (min-width: 750px) {
          html {font-size: 37.5px !important;}
      }
  </style>

  <!-- 在写项目的时候 normalize.css要先引入，要不然会出现优先级错误 -->`)])])],-1),l("p",null,"浏览器现状",-1),l("ul",null,[l("li",null,[i(" PC端常见浏览器 "),l("ul",null,[l("li",null," 360浏览器、谷歌浏览器、火狐浏览器、QQ浏览器、百度浏览器、搜狗浏览器、E浏览器。 ")])]),l("li",null,[i(" 移动端常见浏览器 "),l("ul",null,[l("li",null," UC浏览器，QQ浏览器，欧朋浏览器，百度手机浏览器，360安全浏览器，谷歌浏览器，搜狗手机浏览器， 猎豹浏览器，以及其他杂牌浏览器。 ")])]),l("li",null," 国内的UC和QQ，百度等手机浏览器都是根据Webkit修改过来的内核，国内尚无自主研发的内核，就像国内的手机操作 系统都是基于Android修改开发的一样。 "),l("li",null,"总结：兼容移动端主流浏览器，处理Webkit内核浏览器即可。")],-1),l("p",null,"手机屏幕现状",-1),l("ul",null,[l("li",null,"移动端设备屏幕尺寸非常多，碎片化严重。"),l("li",null," Android设备有多种分辨率：480×800，480×854，540x960，720x1280，1080x1920等，还有传说中的2K，4k屏。 "),l("li",null," 近年来iPhone的碎片化也加剧了，其设备的主要分辨率有：640×960，640×1136，750x1334，1242×2208等。 "),l("li",null,[i(" 作为开发者无需关注这些分辨率，因为我们常用的尺寸单位是px。 "),l("table",null,[l("tbody",null,[l("tr",null,[l("th",null,"设备"),l("th",null,"尺寸"),l("th",null,"开发尺寸"),l("th",null,"物理像素比(dpr)")]),l("tr",null,[l("td",null,"iphone3G"),l("td",null,"3.5"),l("td",null,"320*480"),l("td",null,"1.0")]),l("tr",null,[l("td",null,"iphone4/4s"),l("td",null,"3.5"),l("td",null,"320*480"),l("td",null,"2.0 640x960")]),l("tr",null,[l("td",null,"iphone5/5s/5c"),l("td",null,"4.0"),l("td",null,"320*568"),l("td",null,"2.0")]),l("tr",null,[l("td",null,"HTC One M8"),l("td",null,"4.5"),l("td",null,"360*640"),l("td",null,"3.0")]),l("tr",null,[l("td",null,"iphone6"),l("td",null,"4.7"),l("td",null,"375*667"),l("td",null,"2.0 750x1334")]),l("tr",null,[l("td",null,"Nexus4"),l("td",null,"4.7"),l("td",null,"384*640"),l("td",null,"2.0")]),l("tr",null,[l("td",null,"Nexus 5x"),l("td",null,"5.2"),l("td",null,"411*731"),l("td",null,"2.6")]),l("tr",null,[l("td",null,"iphone6 Plus"),l("td",null,"5.5"),l("td",null,"414*736"),l("td",null,"3.0")]),l("tr",null,[l("td",null,"Samsung Galaxy Note 4"),l("td",null,"5.7"),l("td",null,"480*853"),l("td",null,"3.0")]),l("tr",null,[l("td",null,"Sony Xperia Z UlItra"),l("td",null,"6.4"),l("td",null,"540*960"),l("td",null,"2.0")]),l("tr",null,[l("td",null,"Nexus 7(C12)"),l("td",null,"7.0"),l("td",null,"600*960"),l("td",null,"1.3")]),l("tr",null,[l("td",null,"iPad Mini"),l("td",null,"7.9"),l("td",null,"768*1024"),l("td",null,"1.0")])])])]),l("li",null,"注：作为前端开发，不建议大家去纠结dp，dpi，pt，ppi等单位。")],-1),l("p",null,"移动端调试方法",-1),l("ul",null,[l("li",null,"Chrome DevTools（谷歌浏览器）的模拟手机调试，"),l("li",null," 搭建本地web服务器，手机和服务器一个局域网内，通过手机访问服务器 "),l("li",null,"使用外网服务器，直接IP或域名访问"),l("li",null,[i(" 总结 "),l("ul",null,[l("li",null,"移动端浏览器我们主要对webkit内核进行兼容"),l("li",null,"我们现在开发的移动端主要针对手机端开发~"),l("li",null,"现在移动端碎片化比较严重，分辨率和屏幕尺寸大小不一"),l("li",null,"学会用谷歌浏览器模拟手机界面以及调试")])])],-1),l("p",null,"视口",-1),l("ul",null,[l("li",null," 视口（viewport）就是浏览器显示页面内容的屏幕区域。视口可以分为布局视口、视觉视口和理想视口 "),l("li",null,[i(" 布局视口 layout viewport 不合适做移动端，只做了解 "),l("ul",null,[l("li",null," 一般移动设备的浏览器都默认设置了一个布局视口，用于解决早期的PC端页面在手机上显示的问题。 "),l("li",null," IOS，Android基本都将这个视口分辨率设置为980px，所以PC上的网页大多都能在手机上呈现，只不过元素看上 去很小，一般默认可以通过手动缩放网页。 ")])]),l("li",null,[i(" 视觉视口 visual viewport "),l("ul",null,[l("li",null," 字面意思，它是用户正在看到的网站的区域。注意：是网站的区域。 "),l("li",null," 我们可以通过缩放去操作视觉视口，但不会影响布局视口，布局视口仍保持原来的宽度。 ")])]),l("li",null,[i(" 理想视口 ideal viewport 乔布斯发明的理想视口，推荐使用 "),l("ul",null,[l("li",null,"为了使网站在移动端有最理想的浏览和阅读宽度而设定"),l("li",null,"理想视口，对设备来讲，是最理想的视口尺寸"),l("li",null,"需要手动添写meta视口标签通知浏览器操作"),l("li",null," meta视口标签的主要目的：布局视口的宽度应该与理想视口的宽度一致，简单理解就是设备有多宽，我们布局的视口就多宽 ")])]),l("li",null,[i(" 总结 "),l("ul",null,[l("li",null,"视口就是浏览器显示页面内容的屏幕区域"),l("li",null,"视口分为布局视口、视觉视口和理想视口"),l("li",null," 我们移动端布局想要的是理想视口就是手机屏幕有多宽，我们的布局视口就有多宽 "),l("li",null,"想要理想视口，我们需要给我们的移动端页面添加meta视口标签")])])],-1),l("p",null,"meta 标签",-1),l("ul",null,[l("li",null,[i(" 标准的viewport设置 "),l("ul",null,[l("li",null,'视口宽度和设备保持一致 content="width=device-width"'),l("li",null,"视口的默认缩放比例1.0 initial- scale=1.0;"),l("li",null,"不允许用户自行缩放 user-scalable=no;"),l("li",null,"最大允许的缩放比例1.0 maximum-scale=1.0;"),l("li",null,"最小允许的缩放比例1.0 minimum-scale=1.0;")])]),l("li",null,[i(" 注意：开发移动端，必须写完整这些属性，大厂都写上了 "),l("pre",null,[l("code",{class:"language-html line-numbers"},`  <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
<!--
    width              宽度设置的是viewport宽度，可以设置device-width特殊值
    initial-scale      初始缩放比，大于0的数字
    maximum-scale      最大缩放比，大于0的数字
    minimum-scale      最小缩放比，大于0的数字
    user-scalable      用户是否可以缩放，yes或no（1或0）
-->`)])])],-1),l("p",null,"物理像素&物理像素比",-1),l("ul",null,[l("li",null,"PC端 和早前的手机屏幕 / 普通手机屏幕： 1CSS像素 = 1物理像素的"),l("li",null," Retina（视网膜屏幕）是一种显示技术，可以将把更多的物理像素点压缩至一块屏幕里，从而达到更高的分辨率， 并提高屏幕显示的细腻程感 ")],-1),l("p",null,"多倍图",-1),l("ul",null,[l("li",null," 对于一张50px*50px的图片，在手机Retina屏中打开，按照刚才的物理像素比会放大倍数，这样会造成图片模糊 "),l("li",null," 在标准的viewport设置中，使用倍图来提高图片质量，解决在高清设备中的模糊问题 "),l("li",null," 通常使用二倍图，因为iPhone6\\78的影响，但是现在还存在3倍图4倍图的情况，这个看实际开发公司需求 "),l("li",null,[i(" 背景图片注意缩放问题 "),l("pre",null,[l("code",{class:"language-css line-numbers"},`  /* 在iphone8下 */
  img{
      width: 50px;height: 50px;     /* 原始图片100 * 100px */
  }
  .box{
      background-size: 50px 50px;   /* 原始图片100*100px */
  }
  /* 我们需要一个50*50像素（css像素）的图片直接放到我们的iphone8里面会放大2倍100*100就会模糊 */
  /* 我们采取的是放一个100*100图片然后手动的把这个图片缩小为50*50（css像素）*/
  /* 我们准备的图片比我们实际需要的大小大2倍，这就方式就是2倍图 */`)])]),l("li",null,[i(" 二倍精灵图做法 "),l("ul",null,[l("li",null,"在firework里面把精灵图等比例缩放为原来的一半"),l("li",null,"之后根据大小测量坐标"),l("li",null,"注意代码里面background-size也要写：精灵图原来宽度的一半")])]),l("li",null,[i(" 精灵图缩放制作方法 "),l("ul",null,[l("li",null,"在firework 等比锁定后，填入缩放一半的数值"),l("li",null,"右侧工具栏> web栏 > 切片工具量出 X Y坐标"),l("li",null," 添加背景图片URL，no-repeat不平铺，写上XY坐标，注意从左到右的话要写 负值，因为XY轴是以左上角为中心 "),l("li",null," 添加缩放后的背景精灵图大小，background-size: 值 auto；/* 写原来图片宽度的一半 高auto */ ")])]),l("li",null,[i(" 背景缩放 background-size "),l("ul",null,[l("li",null,"background-size属性规定背景图像的尺寸"),l("li",null," 语法：background-size：背景图片 宽度背景 图片高度； // 背景图片只写一个数值就是等比缩放 "),l("li",null,[i(" 单位：长度 百分比 cover contain； "),l("ul",null,[l("li",null," cover 把背景图像扩属至足够大，以使背景图像完全覆盖背景区域。 "),l("li",null," contain 把图像图像扩展至最大尺寸，以使其宽度和高度完全适应内容区域 ")]),l("pre",null,[l("code",{class:"language-css line-numbers"},`  background: url(images/dog.jpg) no-repeat;
  /* background-size：图片的宽度图片的高度；*/
  /* background-size：500px200px；*/
  /* 1.只写一个参数肯定是宽度高度省略了会等比例缩放*/
  /* background-size：500px；*/
  /* 2.里面的单位可以跟%相对于父盒子来说的*/
  /* background-size：50%；*/
  /* 3.cover要完全覆盖div盒子可能有部分背景图片显示不全*/
  /* background-size:cover；*/
  /* 4.contain 高度和宽度等比例拉伸当宽度或者高度铺满div盒子就不再进行拉伸了*/
  background-size: contain;`)])])])])],-1)])),_:1,__:[2]}),u(t,{id:"part2",shadow:"hover"},{default:e(()=>[n[7]||(n[7]=l("h2",null,"主流方案",-1)),n[8]||(n[8]=l("p",null,"移动端方案",-1)),n[9]||(n[9]=l("ul",null,[l("li",null,[i(" 单独制作移动端页面（主流） "),l("ul",null,[l("li",null,"京东商城手机版"),l("li",null,"淘宝触屏版"),l("li",null,"苏宁易购手机版")])]),l("li",null,[i(" 响应式页面兼容移动端（其次） "),l("ul",null,[l("li",null,"三星手机官网")])]),l("li",null,[i(" 单独移动端页面（主流） "),l("ul",null,[l("li",null," 通常情况下，网址域名前面加m(mobile)可以打开移动端。通过判断设备，如果是移动设备打开，则跳到移动端页面。 "),l("li",null,"m.taobao.com || m.jd.com || m.suning.com")])]),l("li",null," 现在市场常见的移动端开发有 单独制作移动端页面 和 响应式页面 两种方案 "),l("li",null,"现在市场主流的选择还是 单独制作移动端页面")],-1)),n[10]||(n[10]=l("p",null,"移动端浏览器",-1)),n[11]||(n[11]=l("ul",null,[l("li",null," 移动端浏览器基本以webkit内核为主，因此我们就考虑webkit兼容性问题。 "),l("li",null,"我们可以放心使用H5标签和CSS3样式。"),l("li",null,"同时我们浏器的私有前缀我们只需要考虑添加webkit即可")],-1)),n[12]||(n[12]=l("p",null,"normalize.css",-1)),l("ul",null,[n[6]||(n[6]=l("li",null,[i(" 移动端CSS初始化推荐使用normalize.css/ "),l("ul",null,[l("li",null,"Normalize.css：保护了有价值的默认值"),l("li",null,"Normalize.css：修复了浏览器的bug"),l("li",null,'Normalize.css：是模块化的"'),l("li",null,"Normalize.css：拥有详细的文档")])],-1)),l("li",null,[n[4]||(n[4]=i(" 官网地址： ")),u(s,{type:"primary",icon:"Link",target:"_blank",href:"http://necolas.github.io/normalize.css/"},{default:e(()=>n[3]||(n[3]=[i(" http://necolas.github.io/normalize.css/ ")])),_:1,__:[3]}),n[5]||(n[5]=i(" 点download 下载拷贝页面代码就可以了 "))])]),n[13]||(n[13]=l("p",null,"Css3盒子模型",-1)),n[14]||(n[14]=l("ul",null,[l("li",null,"传统模式宽度计算：盒子的宽度=CSS中设置的width+border+padding"),l("li",null," CSS3盒子模型：盒子的宽度=CSS中设置的宽度width里面包含了border和padding "),l("li",null,[i(" 也就是说，我们的CSS3中的盒子模型，padding和border不会撑大盒子了 "),l("pre",null,[l("code",{class:"language-css line-numbers"},`  box-sizing: border-box;                       /* css3盒子模型 */
  box-sizing: content-box;                      /* 传统盒子模型 */`)])]),l("li",null,[i(" 传统or CSS3盒子模型？ "),l("ul",null,[l("li",null,"移动端可以全部CSS3盒子模型"),l("li",null," PC端如果完全需要兼容，我们就用传统模式，如果不考虑兼容性，我们就选择CSS3盒子模型 ")])])],-1)),n[15]||(n[15]=l("p",null,"特殊样式",-1)),n[16]||(n[16]=l("pre",null,[l("code",{class:"language-css line-numbers"},`  div{
      box-sizing: border-box;                     /* css3 盒子模型 */
      -webkit-box-sizing: border-box;
      -webkit-tap-highlight-color: transparent;   /* 点击高亮我们需要清除  完全透明 */
      -webkit-appearance: none;                   /* 在移动端浏览器默认的外观在ios上加上这个属性才能给按钮和输入框自定义样式 */
  }
  img,a{-webkit-touch-callout: none;}             /* 禁用长按页面时的弹出菜单*/

 /* 去掉链接高亮颜色，开发的时候注意这些参数加上，加在样式初始化里面,长按 */ `)],-1)),n[17]||(n[17]=l("p",null,null,-1))]),_:1,__:[7,8,9,10,11,12,13,14,15,16,17]}),u(t,{id:"part3",shadow:"hover"},{default:e(()=>[n[34]||(n[34]=l("h2",null,"技术选型",-1)),n[35]||(n[35]=l("p",null,"移动端技术选型",-1)),n[36]||(n[36]=l("ul",null,[l("li",null,[i(" 移动端布局和以前我们学习的PC端有所区别 "),l("ul",null,[l("li",null,[i(" 单独制作移动端页面（主流） "),l("ul",null,[l("li",null,"flex弹性希局（强烈推荐）"),l("li",null,"less+rem+媒体查询布局"),l("li",null,"less+rem+媒体查询布局"),l("li",null,"混合布局")])]),l("li",null,[i(" 响应式页面兼容移动端（其次） "),l("ul",null,[l("li",null,"媒体查询"),l("li",null,"bootstrap")])])])]),l("li",null,[i(" 流式布局（百分比布局） "),l("ul",null,[l("li",null,"流式布局，就是百分比布局，也称非固定像素布局。"),l("li",null," 通过盒子的宽度设置成百分比来根据屏幕的宽度来进行伸缩，不受固定像素的限制，内容向两侧填充。 "),l("li",null,"流式布局方式是移动web开发使用的比较常见的布局方式")])]),l("li",null,[i(" 区别：不能被用户拉伸无限大，所以要设定好最大宽度和最小宽度，来保证不能出现bug "),l("ul",null,[l("li",null,[i(" 传统布局 "),l("ul",null,[l("li",null,"兼容性好"),l("li",null,"布局繁琐"),l("li",null,"局限性，不能再移动端很好的布局")])]),l("li",null,[i(" flex 弹性布局 "),l("ul",null,[l("li",null,"操作方便，布局极为简单，移动端应用很广泛"),l("li",null,"PC端浏览器支持情较差"),l("li",null,"IE11或更低版本，不支持或仅部分支持")])])])]),l("li",null,[i(" 建议 "),l("ul",null,[l("li",null,"如果是PC端页面布局，我们还是传统布局。"),l("li",null," 如果是移动端或者不考虑兼容性问题的PC端页面布局，我们还是使用flex弹性布局 ")])])],-1)),n[37]||(n[37]=l("p",null,"图片格式",-1)),n[38]||(n[38]=l("ul",null,[l("li",null,[i(" DPG图片压缩技术 "),l("ul",null,[l("li",null," 京东自主研发推出DPG图片压缩技术，经测试该技术，可直接节省用户近50%的浏览流量，极大的提升了用户的网页打开速度 "),l("li",null," 能够兼容jpeg，实现全平台、全部浏览器的兼容支持，经过内部和外部上万张图片的人眼浏览测试后发现，压缩后的图片和webp 的清晰度对比没有差距。 ")])]),l("li",null,[i(" webp图片格式 "),l("ul",null,[l("li",null," 谷歌开发的一种旨在加快图片加载速度的图片格式。图片压缩体积大约只有JPEG的2/3 并能节省大量的服务器宽带资源和数据空间 ")])])],-1)),n[39]||(n[39]=l("p",null,"rem 单位",-1)),n[40]||(n[40]=l("ul",null,[l("li",null," 技巧：网页开发中，用rem做适配方案时，html根字体设置10px，是为了更好的计算 "),l("li",null," rem（rootem）是一个相对单位，类似于em，em是父元素字体大小。不同的是rem的基准是相对于html元素的学体大小。 "),l("li",null,[i(" 比如，根元素（html）设置font-size=12px非根元素设置width2rem；则换成px表示就是24px. "),l("pre",null,[l("code",{class:"language-css line-numbers"},`  body{ font-size: 12px; };   /* 此时父元素字体大小为12px， */
  div { width: 10em; };       /* 那么用了em单位，宽度= 12*10 也就是这个盒子的宽度是120px */
                              /* 12px * 10em =120px */
  html{font-size: 12px;}      /* 根标签字体大小是 12 */
  div { width: 1rem; }        /* 盒子的宽度用了rem单位 1rem, 也就是盒子的宽度是 12px */
                              /* 12px * 1rem = 12px */
  p{ width: 20rem; }          /* 盒子的宽度用了rem单位, 也就是盒子的宽度是 240px */
                              /* 12px * 20rem = 240px */

  /* 优点: rem的优点就是可以通过修改html里面的文字大小来改变页面中元素的大小，且可以整体控制 */`)])]),l("li",null,[i(" 使用js 修改根字体的大小 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  var c = () => {
      let screenWidth = document.documentElement.clientWidth; // 获取设备的宽度
      // 常规情况下 假如默认为20号字体大小，这个值可以自己设定
      let fontSize = (20 * (screenWidth / 320) > 40 ? 40 + "px" : (20 * (screenWidth / 320) +"px"));
      document.documentElement.style.fontSize = fontSize;
  }
  window.addEventListener("load", c);
  window.addEventListener("resize", c);`)])])],-1)),n[41]||(n[41]=l("p",null,"媒体查询",-1)),n[42]||(n[42]=l("ul",null,[l("li",null,[i(" 媒体查询（Media Query）是CSS3新语法 "),l("ul",null,[l("li",null,"使用@media查询，可以针对不同的媒体类型定义不同的样式"),l("li",null,"@media可以针对不同的屏幕尺寸设置不同的样式"),l("li",null," 当你重置浏览器大的过程中，页面也会根据浏览器的宽应和高度重新渲染页面 "),l("li",null," 目前针对很多苹果手机、Android手机，平板等设备都用得到多媒体查询 ")]),l("pre",null,[l("code",{class:"language-css line-numbers"},`  @media mediatype and|not|only (media feature){
    css-code;
  }

  @media screen and (max-width: 1200px){
    div{ width: 30px;}
  }
  /* 用@media开头注意@符号
  mediatype媒体类型
  关链字and not only
  media feature媒体特性必须有小括号包含

  mediatype查询类型：将不同的终端设备划分成不同的类型，称为媒体类型
      all               用于所有设备
      print             用于打印机和打印预览
      screen            用于电脑屏幕，平板电脑，智能手机等
      speech            屏幕阅读器

  关键字:  关键字将媒体类型或多个媒体特性连接到一起做为媒体查询的条件
      and               可以将多个媒体特性连接到一起，相当于“里”的意思。
      not               排除某个媒体类型，相当于“非”的意思，可以省略。
      only              指定某个特定的媒体类型，可以省略。

  每种媒体类型都具体各自不同的特性，根据不同媒体类型的媒体特性设置不同的展示风格。我们暂且了解三个。注意他们要加小括号包含
      width             定义输出设备中页面可见区域的宽度

      min-width         定义输出设备中页面最小可见区域宽度
      max-width         定义输出设备中页面最大可见区域宽度
      min               是大于且等于的意思   当屏幕大于100px且包含100px 的时候，执行指定代码
      max               是小于且等于的意思   当屏幕小于200px 且包含200px 的时候，执行指定代码
                        比如 750px以下(max-width: 749px)      比如 750以上(min-width: 750px)
  */

  @media screen and (max-width: 800px) {
      .container {
          width: 750px; /* 当屏幕最大800且包含800的时候，container宽度为750px */
      }
  }
  @media screen and (min-width: 1280px) {
      .container {
          width: 1280px; /* 当屏幕大于宽度且包含1280的时候，container宽度为1280px */
      }
  }
  /* 媒体查询可以根据不同的屏幕尺寸在改变不同的样式 */

  /* 案例：
  1、按照从大到小的或者从小到大的思路
  2、注意我们有最大值max-width和最小值min-width都是包含等于的
  3、当屏幕小于540像素，背景颜色变为蓝色（x<=539）
  4、当屏幕大等于540像素并且小于等于969像素的时候背景颜色为绿色（540 =< x <= 969）
  5、当屏幕大于等于970像素的时候，背景颜色为红色（x>=970） */

  @media screen and (max-width: 539px) {
    body{background-color: blue;}
  };
  /* 540 ~ 970 我们的页面颜色改为绿色 */
  @media screen and (min-width: 540px) and (max-width: 969px) {
      body{background-color: blue;}
  };

  /* 案例：当屏幕最小于500px时，背景蓝，当大于501px 且最小949px 的时候，背景红。屏幕最大为950px，背景绿 */
  @media screen and (max-width: 500px) {
      body{background-color: blue;}
  }
  @media screen and (min-width: 501px) and (max-width: 949px){
      body{background-color: red;}
  }
  @media screen and (min-width: 950px) {
      body {background-color: green;}
  }

  /* 简化后： */
  @media screen and (max-width: 500px) {
      body{background-color: blue;}
  }
  @media screen and (min-width: 501px) {
      body{background-color: red;}
  }
  @media screen and (min-width: 950px) {
      body {background-color: green;}
  }

  /* 注意：
      为了防止混乱，媒体查询我们要按照从小到大或者从大到小的顺序来写，
      但是我们最喜欢的还是从小到大来写，这样代码更简洁，因为这样可以利用代码的层叠性，后面覆盖前面的
      screen还有and必须带上不能省略的
      我们的数字后面必须跟单位970px这个px不能省略的
  */`)])])],-1)),n[43]||(n[43]=l("p",null,"媒体查询+rem",-1)),n[44]||(n[44]=l("ul",null,[l("li",null,[i(" 媒体查询+rem实现元素动态大小变化 "),l("ul",null,[l("li",null," rem单位是跟着html来走的，有了rem页面元素可以设置不同大小尺寸 "),l("li",null,"媒体查询可以根据不同设备宽度来修改样式"),l("li",null," 媒体查询+rem就可以实现不同设备宽度，实现页面元索大小的动态变化 ")])])],-1)),n[45]||(n[45]=l("p",null,"引入资源（理解）",-1)),n[46]||(n[46]=l("ul",null,[l("li",null," 当样式比较繁多的时候，我们可以针对不同的媒体使用不同stylesheets（样式表）。 "),l("li",null,[i(" 原理，就是直接在link中判断设备的尺寸，然后引用不同的css件。 "),l("pre",null,[l("code",{class:"language-html line-numbers"},`  <link rel="stylesheet" href="style320.css" media="screen and (min-width: 320px)">
  <link rel="stylesheet" href="style640.css" media="screen and (min-width: 640px)">`)])])],-1)),n[47]||(n[47]=l("p",null,"维护css的弊端",-1)),l("ul",null,[n[29]||(n[29]=l("li",null," CSS 是一门非程序式语言，没有变量、函数、SCOPE（作用域）等概念。 ",-1)),n[30]||(n[30]=l("li",null,"CSS需要书写大量看似没有逻辑的代码，CSS冗余度是比较高的。",-1)),n[31]||(n[31]=l("li",null,"不方便维护扩展，不利于复用。",-1)),n[32]||(n[32]=l("li",null,"CSS没有很好的计算能力",-1)),n[33]||(n[33]=l("li",null," 非前端开发工程师来讲，往往会因为缺少CSS编写经验而很难写出组织良好且易于维护的CSS代码项目 ",-1)),l("li",null,[n[28]||(n[28]=i(" 解决方案： Less介绍 ")),l("ul",null,[n[21]||(n[21]=l("li",null," Less（Leaner Style Sheets的缩写）是一门CSS扩属语言，也成为CSS预处理器。做为CSS的一种形式的扩展，它并没有减少 CSS的功能，而是在现有的CSS语法上，为CSS加入程序式语言的特性。它在CSS的语法基础之上，引入了变量，Mixin（混入）， 运算以及函数等功能，大大简化了CSS的编写，并且降低了CSS的维护成本，就像它的名称所说的那样，Less可以让我们用更少 的代码做重多的事情。 ",-1)),l("li",null,[n[19]||(n[19]=i(" Less中文网址： ")),u(s,{type:"primary",icon:"Link",target:"_blank",href:"http:/lesscss.cn/"},{default:e(()=>n[18]||(n[18]=[i(" http:/lesscss.cn/ ")])),_:1,__:[18]}),n[20]||(n[20]=l("ul",null,[l("li",null,"常见的CSS预处理器：Sass、Less、Stylus")],-1))]),n[22]||(n[22]=l("li",null,"一句话：Less是一门CSS预处理语言，它扩展了CSS的动态特性。",-1)),n[23]||(n[23]=l("li",null,[i(" Less 使用： "),l("ul",null,[l("li",null," 我们首先新建一个后缀名为less的文件，在这个less文件里面书写less语句。 "),l("li",null,"style.less || index.less")])],-1)),n[24]||(n[24]=l("li",null,[i(" Less 编译： "),l("ul",null,[l("li",null," 本质上，Less包含套自定义的语法及一个解析器，用户根据这些语法定义自己的样式规则，这些规则最终会通过解析器， 编译生成对应的CSS文件。 "),l("li",null," 所以，我们需要把我们的less文件，编译生成为css文件，这样我们的html页面才能使用。 ")])],-1)),n[25]||(n[25]=l("li",null,[i(" VSCode less 插件： "),l("ul",null,[l("li",null," Easy LESS插件用来把less文件编译为CSS文件。安装完毕插件，重新加载下vscode "),l("li",null,"只要保存一下Less文件，会自动生成CSS文件。")])],-1)),n[26]||(n[26]=l("li",null,[i(" Less 运算： "),l("pre",null,[l("code",{class:"language-css line-numbers"},`  @number: 15;
  @media screen and (min-width: 320px) {
      html {font-size: (320px / @number);}
  }
  @media screen and (min-width: 360px) {
      html {font-size: (360px / @number);}
  }
  @media screen and (min-width: 375px) {
      html {font-size: (375px / @number);}
  }`)])],-1)),n[27]||(n[27]=l("li",null,[i(" less文件中引入less 文件 ： "),l("ul",null,[l("li",null," （与link的区别，link是引入到html页面里，@import是引入到css页面里） "),l("li",null,' @import "common"; // 在新建的less文件下，导入common.less文件 @import是导入的意思 ')])],-1))])])]),n[48]||(n[48]=l("p",null,"px转换rem插件",-1)),n[49]||(n[49]=l("ul",null,[l("li",null,"VSCode px转换rem 插件cssrem (可以不用less计算)"),l("li",null,[i(" 插件默认的文字大小是16，根据设计页面手动修改大小 "),l("ul",null,[l("li",null,"点击vscode 左下角设置齿轮按钮，选设置命令"),l("li",null," 在搜索框里直接输入 px 就可以看到 root font size ,然后下面点击修改就可以了 ")])])],-1))]),_:1,__:[34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49]}),u(t,{id:"part4",shadow:"hover"},{default:e(()=>[n[63]||(n[63]=l("h2",null,"rem适配方案",-1)),n[64]||(n[64]=l("p",null,"rem",-1)),n[65]||(n[65]=l("ul",null,[l("li",null," 让一些不能等比自适应的元素，达到当设备尺寸发生改变的时候，等比例适配当前设备。 "),l("li",null," 使用媒体查询根据不同设备按比例设置html的字体大小，然后页面元素使用rem做尺寸单位，当html字体大小变化元素 尺寸也会发生变化，从而达到等比缩放的适配。 "),l("li",null,[i(" 实际开发： "),l("ul",null,[l("li",null," 按照设计稿与设备宽度的比例，动态计算并设置html根标签的font-size大小；（媒体查询） "),l("li",null," CSS中，设计稿元素的宽、高、相对位置等取值，按照同等比例换算为rem为单位的值； ")])]),l("li",null,[i(" rem 适配方案技术使用（市场主流） "),l("ul",null,[l("li",null,"技术方案1：less + 媒体查询 + rem"),l("li",null,"技术方案2（推荐）：flexible.js + rem")])]),l("li",null,[i(" rem实际开发适配方案 "),l("ul",null,[l("li",null,"rem + 媒体查询 + less技术")])]),l("li",null,[i(" 设计稿常见尺寸宽度 "),l("ul",null,[l("li",null,"iphone 4.5 640px"),l("li",null,"iphone 678 750px"),l("li",null,"Android 320px"),l("li",null,[i(" 375 是iphone 678的 最小宽度, 一般情况下，我们以一套或两套效果图适应大部分的屏幕，放弃极端屏或对其优雅降级，牺牲一些效果现在基本以750为准。 "),l("ul",null,[l("li",null," 常见320px、360px、375px、384px、400px、414px500p、720px "),l("li",null,"大部分4.7~5寸的安卓设备为720px")])])])]),l("li",null,[i(" 动态设置html标签font-size大小 "),l("ul",null,[l("li",null,"假设设计稿是750px"),l("li",null," 假设我们把整个屏幕划分为15等份（划分标准不一可以是20份也可以是10等份） "),l("li",null,"每一份作为html字体大小，这里就是50px"),l("li",null,"那么在320px设备的时候，字体大小为320/15就是21.33px"),l("li",null," 用我们页面元素的大小除以不同的html字体大小会发现他们比例还是相同的 "),l("li",null,"比如我们以750为标准设计稿"),l("li",null," 一个100*100像素的页面元素在750屏幕下，就是100/50转换为rem是2rem*2rem比例是1比1 "),l("li",null," 320屏幕下，html字体大小为21.33则2rem=42.66px此时宽和高都是42.66但是宽和高的比例还是1比1 "),l("li",null,"但是已经能实现不同屏幕下页面元素盒子等比例缩放的效果")])]),l("li",null,[i(" 元素大小取值方法 "),l("ul",null,[l("li",null," 最后的公式：页面元素的rem值=页面元素值（px）/（屏幕宽度/划分的份数） "),l("li",null,"屏幕宽度/划分的份数就足html font-size的大小"),l("li",null," 或者：页面元素的rem值=页面元素值（px）/html font-size字体大小 ")])]),l("li",null,[i(" Visual Studio Code安装px to rem插件,如何设置字体 "),l("ul",null,[l("li",null,"在设置->用户设置中->扩展中输入px，就能找到**px to rem **"),l("li",null,"修改相应的字体大小。默认是16")])]),l("li",null,[i(" 开发 "),l("ul",null,[l("li",null,"首先我们选一套标准尺寸750为准"),l("li",null," 我们用屏幕尺寸 除以 我们划分的分数｛分数自己定｝ 得到了htm1里面的内文字大小，但是不同屏幕下得到的文字大小是不一样的 "),l("li",null," 页面元素的rem值 = 页面元素在750像素下px值 / html里面的文字大小 ")])]),l("li",null,[i(" 公式 "),l("ul",null,[l("li",null," 字体大小是页面元素（比如宽750px）/ 划分的分数（比如15份）: 750 / 15 = 50px "),l("li",null," 页面元素的px（比如宽是80）/ html的字体大小（比如字体大小是50）: 80 / 50 = 1.6 rem ")])]),l("li",null,[i(" 书写完整 "),l("pre",null,[l("code",{class:"language-html line-numbers"},`  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0, minimum-scale=1.0" />
      <link rel="stylesheet" href="css/normalize.css">
      <title>sun</title>
  </head>
  <body>

  </body>
  </html>`)])]),l("li",null,[i(" 设置公共common.less文件 "),l("ul",null,[l("li",null," 新建common.less 设置好最常见的屏幕尺寸，利用媒体查询设置不同的html字体大小，因为除了首页其他页面也需要 "),l("li",null," 我们关心的尺寸有320px、360px、375px、384px、400px、414px、424px、480px、540px、720px、750px "),l("li",null,"划分的份数我们定为15等份"),l("li",null," 因为我们pc端也可以打开我们苏宁移动端首页，我们默认html字体大小为50px，注意这句话写到最上面 ")])]),l("li",null,[i(" 注意代码（案例5.28移动端flex布局） "),l("ul",null,[l("li",null,[i(" 图片是会随着屏幕大小变化而缩放，所以不要忘记添加background - size "),l("pre",null,[l("code",{class:"language-css line-numbers"},`  background: url(../images/classify.png) no-repeat;
  background-size: (44rem / @fontsize) (70rem / @fontsize);      /* 因为大小会变化，所以要缩放 */`)])]),l("li",null,[i(" 文字的大小可以根据psd设计文稿来得出大小，或者打出相同的字体大小看下多少大 "),l("pre",null,[l("code",{class:"language-css line-numbers"},"  font-size: (25rem / @fontsize);   /* 这里文字大小可以根据psd设计图的大小来计算 */")])]),l("li",null,"公共的样式就写在公共的样式里面"),l("li",null,[i(" 图片的宽高记得写完整 "),l("pre",null,[l("code",{class:"language-css line-numbers"},`  .banner {
      width: (750rem / @fontsize);
      height: (368rem / @fontsize);
      img { width: 100%;height: 100%}
  }`)])])])])],-1)),n[66]||(n[66]=l("p",null,"flexible.js",-1)),l("ul",null,[l("li",null,[n[58]||(n[58]=i(" 简洁高效的rem适配方案flexible.js ")),l("ul",null,[n[52]||(n[52]=l("li",null,"手机淘宝团队出的简洁高效移动端适配库",-1)),n[53]||(n[53]=l("li",null,"我们再也不需要在写不同屏幕的媒体查询，因为里面js做了处理",-1)),n[54]||(n[54]=l("li",null," 它的原理是把当前设备划分为10等份，但是不同设备下，比例不是一致的。 ",-1)),n[55]||(n[55]=l("li",null,"我们要做的，就是确定好我们当前设备的html文字大小就可以了",-1)),n[56]||(n[56]=l("li",null," 比如当前设计稿是750px，那么我们只需要把html文字大小设置为75px（750px/10）就可以 ",-1)),n[57]||(n[57]=l("li",null," 里面页面元素rem值：页面元素的px值/75剩余的，让flexible.js来去算 ",-1)),l("li",null,[n[51]||(n[51]=i(" github地址： ")),u(s,{type:"primary",icon:"Link",target:"_blank",href:"https://github.com/amfe/lib-flexible"},{default:e(()=>n[50]||(n[50]=[i(" https://github.com/amfe/lib-flexible ")])),_:1,__:[50]})])])]),n[59]||(n[59]=l("li",null,[i(" 使用方法 "),l("ul",null,[l("li",null,"设计稿为750px , flexible 划分的是10等份"),l("li",null,[i(" 引入flexible.js文件 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  (function flexible(window, document) {
      var docEl = document.documentElement
      var dpr = window.devicePixelRatio || 1

      // adjust body font size
      function setBodyFontSize() {
          if (document.body) {
              document.body.style.fontSize = (12 * dpr) + 'px'
          } else {
              document.addEventListener('DOMContentLoaded', setBodyFontSize)
          }
      }
      setBodyFontSize();

      // set 1rem = viewWidth / 10
      function setRemUnit() {
          var rem = docEl.clientWidth / 10
          docEl.style.fontSize = rem + 'px'
      }

      setRemUnit()

      // reset rem unit on page resize
      window.addEventListener('resize', setRemUnit)
      window.addEventListener('pageshow', function (e) {
          if (e.persisted) {
              setRemUnit()
          }
      })

      // detect 0.5px supports
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
  }(window, document))`)])]),l("li",null,[i(" 添加body 的css 样式 "),l("pre",null,[l("code",{class:"language-css line-numbers"},`  body {
      min-width: 320px;
      height: 750px;
      width: 10rem;
      margin: 0 auto;
      line-height: 1.5;
      font-family: Arial, Helvetica;
      background: #fff;
  }`)])]),l("li",null,[i(" VSCode 修改字体大小 "),l("ul",null,[l("li",null,"设置 => 输入：font-size => 修改默认16 为 75px;")])]),l("li",null,[i(" 如果我们的屏幕超过了750px,那么我们就按照750设计稿来走，不会让我们的页面超过750px "),l("pre",null,[l("code",{class:"language-css line-numbers"},`  @media screen and (min-width:750px) {
      html {font-size: 75px!important;}
  }`)])])])],-1)),n[60]||(n[60]=l("li",null,[i(" 使用方法2 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  window.onresize = function () {  // 窗口修改后触发此函数
      getSize();
  };
  getSize();                                                 // 手动触发一次
  function getSize() {                                       // 得到html字体函数
      let deviceSize = document.documentElement.clientWidth; // 1.设备的大小
      let fontSize = (deviceSize / 750) * 100;               // 2.假设设计稿750的大小,算出字体大小
      document.documentElement.style.fontSize = fontSize;    // 3.设置当前设备的html字体大小
  };`)])],-1)),n[61]||(n[61]=l("li",null,[i(" 使用方法3 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  !(function (doc, win) {
    let docEl = doc.documentElement,
        resizeEvt = 'onorientationchange' in window ? 'onorientationchange' :'resize',
        reCalc = function () {
            let clientW = docEl.clientWidth;
            if (!clientW) return;
            if (clientW >= 750) {
                docEl.style.fontSize = '100px';
            } else {
                docEl.style.fontSize = 100 * (clientW / 750) + 'px';
            };
        };
    if (!doc.addEventListener) return;
    window.addEventListener("resize", reCalc, false);
    doc.addEventListener('DOMContentLoaded', reCalc, false);

  })(document, window); `)])],-1)),n[62]||(n[62]=l("li",null,[i(" VSCode 修改字体大小 "),l("ul",null,[l("li",null,[i(" 设置 => 输入：font-size => 修改默认16 为 100px; "),l("pre",null,[l("code",{class:"language-css line-numbers"},`  body{   /* 大于750的屏幕设置默认字体大小 */
    font-size: 14px;
    max-width: 1080px;
    margin: 0 auto;
  }`)])])])],-1))]),n[67]||(n[67]=l("p",null,"技术选型",-1)),n[68]||(n[68]=l("ul",null,[l("li",null,"方案：我们采取单独制作移动页面方案"),l("li",null,"技术：布局采取rem适配布局2（flexible.js+rem）"),l("li",null,"设计图：本设计图采用750px设计尺寸")],-1)),n[69]||(n[69]=l("p",null,"控制页面文字大小方法",-1)),n[70]||(n[70]=l("ul",null,[l("li",null,"当屏幕大于等于750px时，强制设置html字体"),l("li",null," 在75px 后面加上 75px!important; 这样权重会最高，要不然不起作用 ")],-1)),n[71]||(n[71]=l("p",null,"发布到gitee",-1)),n[72]||(n[72]=l("ul",null,[l("li",null,[i(" 下载git软件（修改安装目录， 其他默认安装 ） https://git-scm.com/download/win "),l("ul",null,[l("li",null," > 新建帐号 > 点击右上角创建仓库 > 输入详细信息 > 创建成功 "),l("li",null," > 到根目录下 > 右键 git bash here > 配置全局复制粘贴 > 初始化仓库git init > "),l("li",null,' > 把本地文件放到暂存区 git add . > 把本地文件放到仓库里面git commit -m "网页" > '),l("li",null," > 链接远程仓库 git remote add origin https://gitee.com/xiongbab/newstudy.git > "),l("li",null,"> 把本地仓库的文件推送到远程仓库 push >"),l("li",null," > 如果弹出的账号密码框，直接输入gitee 注册时的帐号密码即可 > ")])]),l("li",null,[i(" Git 全局设置: 复制，粘贴 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  git config --global user.name "XIONGBAB"
  git config --global user.email 2770949518@qq.com`)])]),l("li",null,[i(" 创建 git 仓库: "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  mkdir newStudy
  cd newStudy
  git init                                                       // 初始化仓库
  touch README.md
  git add README.md
  git commit -m "first commit"                                   // 提交网页文件
  git remote add origin https://gitee.com/xiongbab/newstudy.git  // 链接远程仓库
  git push -u origin master                                      // 推送本地文件到仓库*/`)])]),l("li",null,[i(" 已有仓库? "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  cd existing_git_repo
  git remote add origin https://gitee.com/xiongbab/newstudy.git
  git push -u origin master`)])]),l("li",null,[i(" 发布静态网站 "),l("ul",null,[l("li",null," 点击导航栏上的服务 > 点击 gitee pages > 启动后，复制网址就可以了 ")])])],-1)),n[73]||(n[73]=l("p",null,"rem适配",-1)),n[74]||(n[74]=l("ul",null,[l("li",null,[i(" 常见设计稿 "),l("ul",null,[l("li",null,"320px (用px作为单位时设计稿)"),l("li",null,"640px 750px 1080px (移动端常用设计稿)")])]),l("li",null,"移动端适配方案"),l("li",null,[i(" vw单位兼容性比rem稍差，ios8、 安卓4.4及以上才完全支持. "),l("ul",null,[l("li",null,"固定大小 320px 很少用"),l("li",null,"百分比，可以结合固定大小一起写"),l("li",null,"rem 布局"),l("li",null,"vw 布局")]),l("pre",null,[l("code",{class:"language-css line-numbers"},`  html{font-size:13.33333333vw;}

  /* vw表示1%的屏幕宽度，而我们的设计稿通常是750px的,屏幕一共是100vw,对应750px,
     那么1px就是0.1333333vw,为了方便计算，我们放大100倍,同时我们知道另-一个单rem,rem是相对html元素，
     为了方便计算，我们取htmI是100px,通过上面的计算结果1px是 0.13333333vw,那么100px就是13.333333vw了
     .这样后面的用rem就很好计算了,这样就得到13.3333333vw对应100px(750px的设计稿),然后我们就可以很愉快的
     写rem单位了,由于倍率是100，我们也不需要啥计算插件之类的了,除以100,直接小数点向左移动2位 */

  @media (min-width: 640px) {   /* 防止字体过大 */
      html { font-size: 10px;}
  }
  body { font-size: 14px; }
              `)])]),l("li",null,"vw单位兼容性比rem稍差，ios8、 安卓4.4及以上才完全支持.")],-1)),n[75]||(n[75]=l("p",null,"Cutterman 使用",-1)),n[76]||(n[76]=l("ul",null,[l("li",null,"ps插件，切图工具"),l("li",null,"web就选中web"),l("li",null,"移动端就选ios"),l("li",null,"选中图层，设置好输出路径，点导出就可以了")],-1))]),_:1,__:[63,64,65,66,67,68,69,70,71,72,73,74,75,76]})]),_:1},8,["data"])}}});export{B as default};
