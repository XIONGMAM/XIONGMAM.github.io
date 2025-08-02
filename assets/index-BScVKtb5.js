import{_ as p,E as d}from"./el-card-BC1LQGcn.js";import"./base-BOVE5efH.js";import{E as m}from"./el-link-b02lqcaU.js";import{d as o,r as v,m as g,w as u,f as i,b as l,Q as e,o as b}from"./index-rcW_pH8g.js";import"./index-BRdTUeC1.js";import"./event-BB_Ol6Sd.js";import"./icon-D8zniuSg.js";import"./style-CQyj6J43.js";import"./use-global-config-ZfVEybhJ.js";import"./index-DL17Y2WH.js";import"./index-DNrEt1wy.js";const c=o({name:"vue2"}),D=o({...c,setup(w){const a=v([{id:1,h2:"Webpack"},{id:2,h2:"vue简介"},{id:3,h2:"基本使用"},{id:4,h2:"Axios"},{id:5,h2:"其他"}]);return(j,n)=>{const t=m,s=d,r=p;return b(),g(r,{data:a.value},{svg:u(()=>n[0]||(n[0]=[l("svg",{width:"48",height:"48",t:"1699148478737",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"6334"},[l("path",{d:"M615.6 123.6h165.5L512 589.7 242.9 123.6H63.5L512 900.4l448.5-776.9z",fill:"#acef65","p-id":"6335"}),l("path",{d:"M781.1 123.6H615.6L512 303 408.4 123.6H242.9L512 589.7z",fill:"#34495E","p-id":"6336"})],-1),l("h2",null,"Vue2",-1)])),describe:u(()=>n[1]||(n[1]=[l("p",null," Vue基于标准HTML、CSS和JavaScript构建，提供了一套声明式的、组件化的编程模型，用于高效地开发用户界面。Vue是一个框架，也是一个生态，功能覆盖大部分前端开发常见的需求。 ",-1)])),content:u(()=>[i(s,{id:"part1",shadow:"hover"},{default:u(()=>[n[24]||(n[24]=l("h2",null,"Webpack",-1)),n[25]||(n[25]=l("p",null,"vue中使用",-1)),l("ul",null,[n[22]||(n[22]=l("li",null,[e(" 实际前端开发 "),l("ul",null,[l("li",null,"模块化（js的模块化、css的模块化、资源的模块化）"),l("li",null,"组件化（复用现有的UI结构、样式、行为）"),l("li",null," 规范化（目录结构的划分、编码规范化、接口规范化、文档规范化、Git分支管理） "),l("li",null,"自动化（自动化构建、自动部署、自动化测试）")])],-1)),l("li",null,[n[12]||(n[12]=e(" 前端工程化的解决方案: ")),l("ul",null,[l("li",null,[n[6]||(n[6]=e(" 早期的前端工程化解决方案： ")),l("ul",null,[l("li",null,[n[3]||(n[3]=e(" grunt ")),i(t,{type:"primary",icon:"Link",target:"_blank",href:"https://www.gruntjs.net/"},{default:u(()=>n[2]||(n[2]=[e(" https://www.gruntjs.net/ ")])),_:1,__:[2]})]),l("li",null,[n[5]||(n[5]=e(" gulp ")),i(t,{type:"primary",icon:"Link",target:"_blank",href:"https://www.gulpjs.com.cn/"},{default:u(()=>n[4]||(n[4]=[e(" https://www.gulpjs.com.cn/ ")])),_:1,__:[4]})])])]),n[11]||(n[11]=l("li",null,"目前主流的前端工程化解决方案：",-1)),l("li",null,[n[8]||(n[8]=e(" webpack ")),i(t,{type:"primary",icon:"Link",target:"_blank",href:"https://www.webpackjs.com/"},{default:u(()=>n[7]||(n[7]=[e(" https://www.webpackjs.com/ ")])),_:1,__:[7]})]),l("li",null,[n[10]||(n[10]=e(" parcel ")),i(t,{type:"primary",icon:"Link",target:"_blank",href:"https://zh.parceljs.org/"},{default:u(()=>n[9]||(n[9]=[e(" https://zh.parceljs.org/ ")])),_:1,__:[9]})])])]),n[23]||(n[23]=l("li",null,[e(" 什么是webpack "),l("ul",null,[l("li",null,"概念：webpack是前端项目工程化的具体解决方案。"),l("li",null," 主要功能：它提供了友好的前端模块化开发支持，以及代码压缩混淆、处理浏览器端JavaScript的兼容性、性能优化等强大的功能。 ")])],-1)),l("li",null,[n[21]||(n[21]=e(" 安装node.js并配置 ")),l("ul",null,[n[18]||(n[18]=l("li",null," 新建项目空白目录，并运行npm init-y命令，初始化包管理配置文件 package.json ",-1)),l("li",null,[n[17]||(n[17]=e(" 需要安装node.js ")),l("ul",null,[l("li",null,[n[14]||(n[14]=e(" 旧版本网址 ")),i(t,{type:"primary",icon:"Link",target:"_blank",href:"https://nodejs.org/zh-cn/download/releases/"},{default:u(()=>n[13]||(n[13]=[e(" https://nodejs.org/zh-cn/download/releases/ ")])),_:1,__:[13]})]),l("li",null,[n[16]||(n[16]=e(" 新版本网址 ")),i(t,{type:"primary",icon:"Link",target:"_blank",href:"https://nodejs.org/zh-cn/download/"},{default:u(()=>n[15]||(n[15]=[e(" https://nodejs.org/zh-cn/download/ ")])),_:1,__:[15]})])])]),n[19]||(n[19]=l("li",null,[e(" win7默认安装后配置（注：因为nodejs版本太高了，v12.16.2以上版本不支持win7系统，win10直接新版本下载默认安装） "),l("ul",null,[l("li",null," cmd => node -v 看版本 12.22.6 => npm -v 看npm版本6.14.15 "),l("li",null,[e(" 安装过程四个选项： "),l("ul",null,[l("li",null,"Node.js runtime 表示运行环境"),l("li",null,"npm package manager表示npm包管理器"),l("li",null,"online documentation shortcuts 在线文档快捷方式"),l("li",null,"Add to PATH添加到环境变量")])])])],-1)),n[20]||(n[20]=l("li",null,[e(" 修改包路径 "),l("ul",null,[l("li",null,[e(" 默认情况下，我们在执行npm install -g XXXX时，下载了一个全局包，这个包的默认存放路径位 "),l("ul",null,[l("li",null," C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules下 "),l("li",null,"2. 可以通过CMD指令 npm root -g 查看")])]),l("li",null,[e(" 但是有时候我们不想让全局包放在这里，我们想放在node的安装目录下 "),l("ul",null,[l("li",null,"在node安装目录下下新建两个文件夹"),l("li",null,"node_global 全局包下载存放"),l("li",null,"node_cache node缓存")])]),l("li",null,[e(" 修改路径 "),l("ul",null,[l("li",null,"在CMD窗口执行以下两条命令："),l("li",null,' npm config set prefix "？:\\？\\nodejs\\node_global" //自己的创建目录 '),l("li",null,' npm config set cache "？:\\？\\nodejs\\node_cache" //自己的创建目录 '),l("li",null," 或者在nodejs的安装目录中找到node_modules\\npm.npmrc文件，修改如下： "),l("li",null,"prefix =C:\\node\\node_global"),l("li",null,"cache = C:\\node\\node_cache"),l("li",null," 下载一个全局包，执行命令npm install -g vue，可以发现， "),l("li",null,"下载的全局包vue已经放在了我们设置的目录中")])]),l("li",null,[e(" 修改用户变量path为：E:\\java\\nodejs\\node_global "),l("ul",null,[l("li",null," 我们更改了npm全局模块的存放路径和cache路径，此时使用module时将会出现上述错误， "),l("li",null," 因为电脑系统现在还不知道你把默认路径给改了，所以需要修改系统环境变量。 ")])]),l("li",null,[e(" 接下来设置环境变量，关闭cmd窗口，“我的电脑”-右键-“属性”-“高级系统设置”-“高级”-环境变量” "),l("ul",null,[l("li",null," 新增系统变量NODE_PATH,变量值为E:\\java\\nodejs\\node_global\\node_modules 或者默认路径的进入环境变量对话框，在【系统变量】下新建【NODE_PATH】 "),l("li",null," 输入【D:\\Develop\\nodejs\\node_global\\node_modules】，将【用户变量】下的【Path】修改为【D:\\Develop\\nodejs\\node_global】 ")])])])],-1))])])]),n[26]||(n[26]=l("p",null,"案例隔行变色",-1)),n[27]||(n[27]=l("ul",null,[l("li",null," 新建项目空白目录，并运行npm init-y命令，初始化包管理配置文件 package.json "),l("li",null,"新建src源代码目录"),l("li",null,"新建src -> index.html首页和src -> index.js脚本文件"),l("li",null," 初始化首页基本的结构 ⑤运行npm install jquery -S命令，安装jQuery "),l("li",null,[e(" 通过ES6模块化的方式导入jQuery，实现列表隔行变色效果 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 1、使用ES6导入语法，导入jQuery
  import $ from 'jquery'

  // 2、定义jQuery的入口函数
  $(function () {
      $('li:odd').css('background-color','red')
      $('li:even').css('background-color','blue')
  })`)])]),l("li",null,[e(" 在终端运行如下的命令，安装webpack相关的两个包 "),l("ul",null,[l("li",null,[e(" npm install webpack@5.42.1 webpack-cli@4.7.2 -D "),l("ul",null,[l("li",null," -D（--save-dev） 参数表示明确告诉npm ，装上两个包要对应版本的包，装在devDependencies下 devDependencies 表示只在开发阶段时包记录在这里面 "),l("li",null," -S（--save） 装在dependencies下 dependencies表示是在项目开发阶段和上线，这个包都需要使用https://www.npmjs.com/package/webpack 网址install中，有介绍什么时候用- D ,什么时候用- S ")])]),l("li",null,[e(" 配置webpack： "),l("ul",null,[l("li",null,[e(" 在项目根目录中，创建名为webpack.config.js的webpack配置文件，并初始化如下的基本配置： "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 使用Node.js 中的导出语法，向外导出一个webpack的配置对象
  module.exports = {
      // 代表 webpack 运行模式，可选值有两个 development（开发模式） 和 production (上线模式)
      // 开发时候一定要用development,因为追求的是打包速度，而不是体积
      // 在发布上线的时候一定要用production，因为上线追求的是体积小，而不是打包速度
      mode: 'development'
  }`)])]),l("li",null," 如果要上线了，也可以利用webpack 进行代码压缩，更改 mode: 'production' ,然后 命令行 npm run dev ")])]),l("li",null,[e(" 在package.json的scripts节点下，新增 dev 脚本如下： "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  "scripts": {
      "dev": "webpack" //script 节点下的脚本，可以通过npm run 执行，例如 npm run dev，dev是自定义的
  },`)])]),l("li",null,[e(" 在终端中运行npm run dev命令，启动webpack进行项目的打包构建 "),l("ul",null,[l("li",null,"在 M VVM 概念中:"),l("li",null," Model表示当前页面渲染时所依赖的数据源。表示当前页面所渲染的 DOM 结构。 "),l("li",null,"View"),l("li",null,"ViewModel表示 vue 的实例，它是 M VVM 的核心。"),l("li",null," 代码意思：创建一个了main.js放入了dist下，同时将index.js和jQuery.js打包到了main.js下，KiB代表了文件大小 ")])]),l("li",null,[e(" js引入 "),l("pre",null,[l("code",{class:"language-html line-numbers"},'  <script src="../dist/main.js"><\/script>')])])])])],-1)),n[28]||(n[28]=l("p",null,"webpack中的默认约定",-1)),n[29]||(n[29]=l("ul",null,[l("li",null,[e(" 在webpack 4.x 和 5.x 的版本中，有如下的默认约定： "),l("ul",null,[l("li",null,"默认的打包入口文件为 src => index.js"),l("li",null,"默认输出的文件路径为 dist=> main.js")])]),l("li",null,[e(" 注意：可以在webpack.config.js 中修改打包的默认约定 "),l("ul",null,[l("li",null," 在webpack.config.js 配置文件中，通过entry节点指定打包的入口。 "),l("li",null,"通过output节点指定打包的出口。示例代码如下：")]),l("pre",null,[l("code",{class:"language-js line-numbers"},`  const path = require('path')
  // 使用Node.js 中的导出语法，向外导出一个webpack的配置对象
  module.exports = {
      // 代表 webpack 运行模式，可选值有两个 development（开发模式） 和 production (上线模式)
      mode: 'development',
      // entry :'指定要处理的js文件'
      entry: path.join(__dirname, './src/index1.js'), // ，后的路径文件index1.js就是自定义的js文件名
      //  output :指定要生成的文件存放在哪里
      output: {
          // 存放到目录
          path: path.join(__dirname, 'main'), // 'main' 是文件名  等于修改了dist的文件名字，_ _就代表下根目录
          filename: 'bundle.js' // 'bundle.js' 是要修改后的js文件名，等于修改main.js的名字
      }
  }

  // 注意：改完后记得html文件的引入js也要修改相对应的文件名`)])])],-1)),n[30]||(n[30]=l("p",null,"webpack中的插件",-1)),n[31]||(n[31]=l("ul",null,[l("li",null," 作用：通过安装和配置第三方的插件，可以拓展 webpack的能力，从而让webpack用起来更方便。最常用的webpack 插件 "),l("li",null,[e(" webpack-devServer "),l("ul",null,[l("li",null,"类似于node.js阶段用到的nodeMon工具"),l("li",null,"每当修改了源代码，webpack会自动进行项目的打包和构建"),l("li",null,"安装运行命令: npm install webpack-dev-server@3.11.2 -D"),l("li",null,[e(" 配置修改 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  // package.json => script 中的dev命令如下
  "scripts": {
      "dev": "webpack serve"    // script 节点下的脚本，可以通过 npm run 执行
  },

  // 再次运行 npm run dev 命令，重新进行项目的打包
  [webpack-cli] Unable to load '@webpack-cli/serve' command
  [webpack-cli] TypeError: options.forEach is not a function
  // 如果出现以上错误提示， 看报错表面意思 "[webpack cli]无法加载“@webpack cli/serve”命令",
  // 感觉应该是加载不到 webpack-cli 就安装一下

  npm install webpack-cli --save-dev

  // 在浏览器中访问 http://localhost:8080 地 址，查看自动打包效果
  /* 当窗口一直在监听的时候，不需要再npm run了，如果想停掉终端，按两下 ctrl + c 就可以了
      但同时监听结束，修改后保存不起作用
      进入8080端口的网页中src点进去就可以实现同步效果，注意html也要修改引入的内存中js文件
      <script> src="/main.js"><\/script>       <!-- 这里是加载内存中的main.js,html页面是需要修改成内存中的js  --> */
                  `)])])])]),l("li",null,[e(" html-webpack-plugin "),l("ul",null,[l("li",null,"webpack中的HTML 插件（类似于一个模板引擎插件）"),l("li",null,"可以通过此插件自定制index.html页面的内容"),l("li",null,"安装运行命令： npm install html-webpack-plugin@5.3.2 -D"),l("li",null,[e(" 配置 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  const path = require('path')
  // 1、导入HTML 插件，得到一个构造函数
  const HtmlPlugin = require('html-webpack-plugin')
  // 2、创建HTML插件的实例对象
  const htmlPlugin = new HtmlPlugin({
      template: './src/index.html', // 指定原文件的存放路径
      filename: './index.html'      // 指定生成的文件的存放路径
  });

  // 使用Node.js 中的导出语法，向外导出一个webpack的配置对象
  module.exports = {
      // 代表 webpack 运行模式，可选值有两个 development（开发模式） 和 production (上线模式)
      mode: 'development',
      // entry :'指定要处理的js文件'
      entry: path.join(__dirname, './src/index.js'), // ，后的路径文件index1.js就是自定义的js文件名
      //  output :指定要生成的文件存放在哪里
      output: {
          // 存放到目录
          path: path.join(__dirname, 'dist'), // 'main' 是文件名  等于修改了dist的文件名字
          filename: 'main.js' // 'bundle.js' 是要修改后的js文件名，等于修改main.js名字
      },
      plugins: [htmlPlugin]  // 3.通过plugins节点，使htmlPlugin插件生效
  }

  /* html-webpack-plugin 还会做一件事，就是自动注入打包好的main.js放在html页面中
      通过HTML插件复制到项目根目录中的index.html页面，也被放到了内存中
      HTML 插件在生成的index.html页面，自动注入了打包的main.js文件 `)])])])])],-1)),n[32]||(n[32]=l("p",null,"devServer节点",-1)),n[33]||(n[33]=l("ul",null,[l("li",null," 在webpack.config.js配置文件中，可以通过devserver节点对webpack-dev-server插件进行更多的配置 "),l("li",null,[e(" 实例代码如下： "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  const path = require('path')
  const HtmlPlugin = require('html-webpack-plugin')
  const htmlPlugin = new HtmlPlugin({
      template: './src/index.html',
      filename: './index.html'
  });
  // 使用Node.js 中的导出语法，向外导出一个webpack的配置对象
  module.exports = {
      // 代表 webpack 运行模式，可选值有两个 development（开发模式） 和 production (上线模式)
      mode: 'development',
      // entry :'指定要处理的js文件'
      entry: path.join(__dirname, './src/index.js'),  // ，后的路径文件index1.js就是自定义的js文件名
      //  output :指定要生成的文件存放在哪里
      output: {
          // 存放到目录
          path: path.join(__dirname, 'dist'),         // 'main' 是文件名  等于修改了dist的文件名字
          filename: 'main.js'                         // 'bundle.js' 是要修改后的js文件名，等于修改main.js名字
      },
      plugins: [htmlPlugin],
      devServer: {
          open: true,                                 // 初次打包完成后，自动打开浏览器
          port: 80,                                   // （自定义端口号） 在http协议中，如果端口号为 80 ，则会被省略
          host: '127.0.0.1'                           // 实时打包所使用的主机地址   注意：地址之间不能有空格，必须连着
      }
  }`)])]),l("li",null," 注意：凡是修改了webpack.config.js配置文件，或修改了package.json配置文件，必须重启实时打包的服务器， 否则最新的配置文件无法生效！ "),l("li",null,[e(" 如果想修改打开指定浏览器，需要在package .json 文件修改 script 的 dev代码，如下 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  "scripts": {
      "dev": "webpack serve --open chrome"
  },`)])])],-1)),n[34]||(n[34]=l("p",null,"loader概述",-1)),n[35]||(n[35]=l("ul",null,[l("li",null," 在实际开发过程中，webpack 默认只能打包处理以.js后缀名结尾的模块。其他非 .js后缀名结尾的模块， "),l("li",null," webpack 默认处理不了，需要调用loader加载器才可以正常打包，否则会报错！ "),l("li",null,[e(" loader 加载器的作用：协助webpack打包处理特定的文件模块。比如： "),l("ul",null,[l("li",null,"css-loader可以打包处理.cs5相关的文件"),l("li",null,"less-loader 可以打包处理.less相关的文件"),l("li",null,"babel-loader 可以打包处理 webpack无法处理的高级J5语法")])])],-1)),n[36]||(n[36]=l("p",null,"打包处理css文件",-1)),n[37]||(n[37]=l("ul",null,[l("li",null," 运行npm i style-loader@3.0.0 css-loader@5.2.6 -D 命令，安装处理css文件的loader "),l("li",null,"在src目录下创建css"),l("li",null,[e(" 在 index.js 下用ES6导入css样式 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 1、 使用ES6导入语法，导入jQuery
  import $ from 'jquery'
  // 导入样式（在webpack中，一切皆模块，都可以通过ES6导入语法进行导入和使用）
  import './css/index.css'

  // 2、 定义jQuery的入口函数
  $(function() {
      // 3、实现奇偶行变色
      // 奇数行为红色
      $('li:odd').css('background-color', 'red')
      $('li:even').css('background-color', 'yellow')
  })`)])]),l("li",null,[e(" 在webpack.config.js 的 module => rules 数组中，添加loader规则如下： "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  const path = require('path')
  const HtmlPlugin = require('html-webpack-plugin')
  const htmlPlugin = new HtmlPlugin({
      template: './src/index.html',
      filename: './index.html'
  });
  module.exports = {
      mode: 'development',
      entry: path.join(__dirname, './src/index.js'),
      output: {
          path: path.join(__dirname, 'dist'),
          filename: 'main.js'
      },
      plugins: [htmlPlugin],
      devServer: {
          open: true,
          port: 80,
          host: '127.0.0.1'
      },
      module: {       // 所有第三方文件模块的匹配规则
          rules: [    // 文件后缀名的匹配规则
              // 定义不同的拨快的loader
              { test: /\\.css$/, use: ['style-loader', 'css-loader'] }
          ]
      }
  }`)])])],-1)),n[38]||(n[38]=l("p",null,"打包处理Less文件",-1)),n[39]||(n[39]=l("ul",null,[l("li",null," 运行npm i less-loader@10.0.1 less@4.1.1 -D 命令，安装处理css文件的loader "),l("li",null,"在src目录下创建less"),l("li",null,[e(" 在 index.js 下用ES6导入css样式 "),l("pre",null,[l("code",{class:"language-js line-numbers"},"  import './css/index.less'")])]),l("li",null,[e(" 在webpack.config.js 的 module => rules 数组中，添加loader规则如下： "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 处理 .less文件的loader
  { test: /\\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },`)])])],-1)),n[40]||(n[40]=l("p",null,"处理Url (打包处理样式表中的Url路径相关的文件)",-1)),n[41]||(n[41]=l("ul",null,[l("li",null,"运行npm i url-loader@4.1.1 file-loader@6.2.0 -D 命令"),l("li",null,"在src目录下创建images，添加图片"),l("li",null,[e(" 在 index.js 下用ES6导入css样式 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 1.导入图片，得到图片文件
  import logo from './images/star1.png'`)])]),l("li",null,[e(" 在webpack.config.js 的 module => rules 数组中，添加loader规则如下： "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 处理 .less文件的loader
  // { test: /\\.jpg|png|gif$/, use: 'url-loader' }
  { test: /\\.jpg|png|gif$/, use: 'url-loader?limit=22229' }  // 这里22229代表的是图片字节`)]),l("ul",null,[l("li",null,"其中？之后的是loader 的参数项："),l("li",null,"limit用来指定图片的大小，单位是字节（byte）"),l("li",null,"只有小于等于limit大小的图片，才会被转为base64格式的图片")])]),l("li",null,[e(" html的url需要安装 "),l("ul",null,[l("li",null,"npm install html-withImg-loader --save-dev"),l("li",null,"webpack.config.js 添加配置")]),l("pre",null,[l("code",{class:"language-js line-numbers"},`  module: {
    loaders: [{
        test: /\\.html$/,
        loader: 'html-withimg-loader'
    }]
  }`)])])],-1)),n[42]||(n[42]=l("p",null,"处理js (loader打包处理js文件中的高级语法)",-1)),n[43]||(n[43]=l("ul",null,[l("li",null," webpack 只能打包处理一部分高级的JavaScript 语法I对于那些webpack无法处理的高级js语法，需要借助于babel-loader 进行打包处理。例如 webpack无法处理下面的JavaScript代码： "),l("li",null," 运行npm i babel-loader@8.2.2 @babel/core@7.14.6 @babel/plugin-proposal-decorators@7.14.5 -D 命令 "),l("li",null,"在src目录下创建images，添加图片"),l("li",null,"在 index.js 下用ES6导入css样式"),l("li",null,[e(" 在webpack.config.js 的 module => rules 数组中，添加loader规则如下： "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 使用babel-loader 处理高级的JS 语法
  // 注意：必须使用exclude 指定拍出项 ； 因为node_ modules目录下的第三方包不需要被打包
  // 在配置 babel-loader 的时候，程序员只需要把自己的代码进行转换即可，一定要排除node_ modules
  // 应为第三方包中的JS 兼容性，不需要程序员关心
  { test: /\\.js$/, use: 'babel-loader', exclude: /node_modules/ }`)])]),l("li",null,[e(" 配置 babel-loader "),l("ul",null,[l("li",null," 在项目根目录下，创建名为 babel.config.js的配置文件，定义Babel的配置项如下： ")]),l("pre",null,[l("code",{class:"language-js line-numbers"},`  module: {
    loaders: [{
        test: /\\.html$/,
        loader: 'html-withimg-loader'
    }]
  }`)])])],-1)),n[44]||(n[44]=l("p",null,"打包发布",-1)),n[45]||(n[45]=l("ul",null,[l("li",null,[e(" 在package.json 文件的 scripts 节点下，新增build命令如下： "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  "scripts": {
      "dev": "webpack serve --open chrome",
      "build": "webpack --mode production"   // 项目发布时，运行 build命令 ，'build'可以自定义属性名
  },`)])]),l("li",null," --model 是一个参数选项，用来指定webpack的运行模式。production 代表生产环境，会对打包生成的文件 "),l("li",null,"进行代码压缩和性能优化"),l("li",null," 注意：通过 --model的参数项优先级更高，会覆盖webpack.config.js 中的 model选项 "),l("li",null,"发布直接使用 npm run build 命令即可")],-1)),n[46]||(n[46]=l("p",null,"优化 (把javascript文件统一生成到js目录中，图片放在images下)",-1)),n[47]||(n[47]=l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 1. 在webpack.config.js 配置文件的 output节点，进行如下配置：
  output: {
      // 存放到目录
      path: path.join(__dirname, 'dist'),           // 'main' 是文件名  等于修改了dist的文件名字
      filename: 'js/main.js'                        // 在前面加上一个 js 表示，在js文件夹根目录下创建 main.js
  },

  /* 2. 修改webpack.config.js 中的 url-loader 配置项，新增outputPath选项即可指定图片文件的输出路径
      在配置 url-loader的时候，多个参数之间，使用 & 符号进行分隔 limit 如果小于等于 值 就会转换base64格式 */
  { test: /\\.jpg|png|gif$/, use: 'url-loader?limit=470&outputPath=images' },

  /* 3. 自动清理dist 目录下的旧文件
      为了在每次打包发布时自动清理掉dist目录中的旧文件，可以安装并配置clean-webpack-plugin插件
        安装清理dist 目录的webpack插件 ，输入命令如下：    */
        npm install clean-webpack-plugin@3.0.0 -D   // 官网命令  npm install --save-dev clean-webpack-plugin

        在webpack.config.js 配置文件的 output节点，进行如下配置：
        // clean-webpack-plugin 插件 创建常亮构造函数
        const { CleanWebpackPlugin } = require('clean-webpack-plugin')

        // 插件数组，将来webpack 在运行时，会加载并调用这些插件，添加插件
        plugins: [htmlPlugin, new CleanWebpackPlugin()], `)],-1)),n[48]||(n[48]=l("p",null,"什么是Source Map",-1)),n[49]||(n[49]=l("ul",null,[l("li",null," Source Map就是一个信息文件，里面储存着位置信息。也就是说，Source Map文件中存储着压缩混淆后的代码，所对应的转换前的位置。 "),l("li",null," 有了它，出错的时候，除错工具将直接显示原始代码，而不是转换后的代码，能够极大的方便后期的调试。 "),l("li",null,[e(" 解决默认 Source Map 的问题 "),l("ul",null,[l("li",null,[e(" 开发环境下，推荐在 webpack.config.js中 添加如下配置，即可保证 运行时报错行数与源码行数一致 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 代表 webpack 运行模式，可选值有两个 development（开发模式） 和 production (上线模式)
  mode: 'development',
  // eval-source-map 仅限在 “开发模式” 下使用，不建议在 “生产模式” 下使用
  // 此选项生成的 Source Map 能够保持 运行错误行数与源代码行数一致
  devtool: 'eval-source-map',`)])]),l("li",null,[e(" 生产环境下，如果省略了devtool 选项，则最终生成的文件中不包含Source Map ，这样能防止源码暴露，提高安全性 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 在发布时，直接注释掉即可，关闭 Spirce Map
  // devtool: 'eval-source-map',`)])])])]),l("li",null,[e(" 为了方便代码修改。只定位行数不暴露代码 "),l("ul",null,[l("li",null," 在生产环境下，如果只想定位报错的具体行数， 且不想暴露源码。此时可以将devtool 的值设置为 nosources-source-map ")])]),l("li",null,[e(" 总结： "),l("ul",null,[l("li",null," 开发环境 : 建议把 devtool 的值设置为 eval-source-map //好处是可以精准定位到具体的错误行 source-map 跟eval-source-map 效果一样，但是不建议使用 "),l("li",null," 生产环境 : 建议关闭 Source Map （直接注释掉） 或者 将devtool的值设置为 nosources-source-map ")])])],-1)),n[50]||(n[50]=l("p",null,"拓展 (讲解在 webpack 中 @ 好处和原理)",-1)),n[51]||(n[51]=l("ul",null,[l("li",null,"如果使用 ../../../ 会比较繁琐，"),l("li",null,"如果书写错误时就会报错"),l("li",null," 好处：使用 @ 示在项目的目录下进行查找，则不需要使用../ ./ 来表示层级关系 "),l("li",null,[e(" 在webpack.config.js 配置文件的设置如下： "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  module.exports = {
      resolve: {
          alias: {
               // 告诉 webpack 程序员写的代码中，@ 符号表示 src 这一层目录
              '@': path.join(__dirname, './src/')
          }
      }
  }`)])]),l("li",null,[e(" 然后在js 中引入的ES6语法就可以写成如下： "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 导入样式（在webpack中，一切皆模块，都可以通过ES6导入语法进行导入和使用）
  import '@/css/index.css'
  import '@/css/index.less'

  // 导入图片，得到图片文件
  import logo from '@/images/star1.png'`)])])],-1)),n[52]||(n[52]=l("p",null,"拓展 (安装 chrome 的 vue_devtools_chrome .crx 插件)",-1)),n[53]||(n[53]=l("ul",null,[l("li",null," 在\\Vue\\工具\\vue-google-plugin 下的crx文件，打开谷歌浏览器，开发者模式下，直接拖入安装 "),l("li",null,[e(" 安装完后进行配置 "),l("ul",null,[l("li",null,"安装完点击插件的详细信息 => 开启 > 允许访问文件网址")])])],-1))]),_:1,__:[24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53]}),i(s,{id:"part2",shadow:"hover"},{default:u(()=>n[54]||(n[54]=[l("h2",null,"vue简介",-1),l("p",null,"什么是vue",-1),l("ul",null,[l("li",null," 官方给出的概念：Vue（读音/vju:/，类似于view）是一套用于构建用户界面的前端框架。 "),l("li",null,[e(" 构建用户界面 "),l("ul",null,[l("li",null,"用vue往html页面中填充数据，非常的方便")])]),l("li",null,[e(" 框架 "),l("ul",null,[l("li",null," 框架是一套现成的解决方案，程序员只能遵守框架的规范，去编写自己的业务功能！ "),l("li",null,"要学习vue，就是在学习vue框架中规定的用法！"),l("li",null," vue的指令、组件（是对UI结构的复用）、路由、VueX、vue组件库 ")])])],-1),l("p",null,"vue的两个特性",-1),l("ul",null,[l("li",null,[e(" 数据>驱动>视图 "),l("ul",null,[l("li",null,[e(" 在使用了vue的页面中，vue会监听数据的变化，从而自动重新渲染页面的结构。 结构如下 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`            自动渲染                      变化

  页面结构    <==>    vue监听数据的变化    <==>    页面所依赖的数据

  --------------------------- 数据驱动视图 ---------------------------`)])]),l("li",null,"好处：当页面数据发生变化时，页面会自动重新渲染！"),l("li",null,"注意：数据驱动视图是单向的数据绑定。")])]),l("li",null,[e(" 双向数据绑定 "),l("ul",null,[l("li",null," 在填写表单时，双向数据绑定可以辅助开发者在不操作DOM的前提下，自动把用户填写的内容同步到数据源中 "),l("li",null," 好处：开发者不再需要手动操作DOM元素，来获取表单元素最新的值！ "),l("li",null,"在网页中，form 表单负责采集数据， Ajax负责提交数据"),l("li",null,"js数据变化，会被自动渲染到页面上"),l("li",null," 页面上表单采集的数据发生变化时，会被vue自动获取，并更新到js数据中 "),l("li",null," 注意：数据驱动视图和双向数据绑定的底层原理是MVVM （Model 数据源、View 视图、ViewModel vue实例） ")])])],-1),l("p",null,"MVVM的工作原理",-1),l("ul",null,[l("li",null," MVVM是vue 实现数据驱动视图和双向数据绑定的核心原理。MVVM指的是Model、View和ViewModel，它把每个HTML页面都 "),l("li",null,"拆分成了这三个部分"),l("li",null,[e(" 当数据源发生变化时，会被ViewModel监听到，VM会根据最新的数据源自动更新页面的结构 "),l("ul",null,[l("li",null,"Model 表示当前页面渲染时所依赖的数据源。"),l("li",null,"View 表示当前页面所渲染的 DOM 结构。"),l("li",null,"ViewModel表示vue 的实例，它是 MVVM 的核心。")])]),l("li",null," 当表单元素的值发生变化时，也会被VM监听到，VM会把变化过后最新的值自动同步到Model数据源中 ")],-1),l("p",null,"Vue的版本",-1),l("ul",null,[l("li",null,"作者：尤雨溪"),l("li",null,[e(" 目前，vue共有三个大版本，其中 "),l("ul",null,[l("li",null,"2.x 版本的vue是目前企业级项目开发中的主流版本"),l("li",null," 3.x 版本的vue于2020-09-19发布，生态还不完善，尚未在企业级项目开发中普及和推广 "),l("li",null,"1.x 版本的vue几乎被淘汰，不再建议学习与使用")])]),l("li",null,[e(" 总结： "),l("ul",null,[l("li",null,"3.x 版本的vue是未来企业级项目开发的趋势"),l("li",null,"2.x 版本的vue在未来（1~2年内）会被逐渐淘汰")])])],-1)])),_:1,__:[54]}),i(s,{id:"part3",shadow:"hover"},{default:u(()=>[n[66]||(n[66]=l("h2",null,"基本使用",-1)),n[67]||(n[67]=l("p",null,"步骤",-1)),n[68]||(n[68]=l("ul",null,[l("li",null,"导入vue.js的 script 脚本文件"),l("li",null,"在页面中声明一个将要被vue所控制的DOM区域"),l("li",null,[e(" 创建VM实例对象（vue实例对象） "),l("pre",null,[l("code",{class:"language-html line-numbers"},`  <body>
    <!-- 希望Vue 能控制下面的这个div，帮我们在把数据填充到div内部 -->
    <div> id="app">｛｛ username ｝｝</div>
    <!-- 导入vue 的库文件 -->
    <script> src="lib/vue-2.6.12.js"><\/script>
    <!-- 创建Vue 的实例对象 -->
    <script>
        // 创建Vue的实例对象
        const vm = new Vue({
            // el 属性是固定的写法，表示当前vm实例要控制页面上的哪个区域，接受的值是一个选择器
            el: '#app',
            // data对象就是要渲染页面上的数据
            data: {
                username: 'zs'
            }
        })
    <\/script>
  </body>`)])])],-1)),n[69]||(n[69]=l("p",null,"调试",-1)),n[70]||(n[70]=l("ul",null,[l("li",null,"谷歌插件商店和 Firefox商店 都可以下载"),l("li",null,"导入vue的 .js 文件"),l("li",null,"F12可以查看 Vue 调试")],-1)),n[71]||(n[71]=l("p",null,"指令的概念",-1)),n[72]||(n[72]=l("ul",null,[l("li",null," 指令（Directives）是vue为开发者提供的模板语法，用于辅助开发者渲染页面的基本结构。 "),l("li",null,[e(" vue中的指令按照不同的用途，可以分为如下6大类： "),l("ul",null,[l("li",null,[e(" 内容渲染指令用来辅助开发者渲染DOM元素的文本内容。常用的内容渲染指令有如下3个： "),l("ul",null,[l("li",null,[e(" v-text: // 缺点：会覆盖元素内部原有的内容，在开发中基本不用 "),l("pre",null,[l("code",{class:"language-html line-numbers"},`  <p v-text="username"></p>
  <!-- 把 gender 对应的值，渲染到第二个p标签中 -->
  <!-- 注意： 第二个p标签，默认的文本 “性别” 会被gender的值覆盖掉-->
  <p v-text="gender">性别</p>

  //------------------------------------------
  data: {
      username: 'zs',
      gender: '女'
  }`)])]),l("li",null,[e(" ｛｛ ｝｝：vue 提供的｛｛ ｝｝语法，专门用来解决 v-text 会覆盖默认文本内容的问题。 "),l("pre",null,[l("code",{class:"language-html line-numbers"},`  /* 这种｛｛ ｝｝语法的专业名称是插值表达式（英文名为：Mustache）。
  在开发中用的最多，只是内容的占位符，不会覆盖原有的内容  */
  <p>姓名：｛｛ username ｝｝</p>
  <p>性别: ｛｛ gender ｝｝</p>`)])]),l("li",null,[e(" v-html ：v-text指令和插值表达式只能渲染纯文本内容。如果要把包含HTML标签的字符串渲染为页面的HTML元素， 则需要用到V-html这个指令，相当于原生js的 innerHTML： "),l("pre",null,[l("code",{class:"language-html line-numbers"},`  <p v-html="info"></p>
  //--------------------------------
  data: {
      username: 'zs',
      gender: '女',
      info: '<div style="background:red;width:200px;heigh:300px">1</div>'
  }`)])])])]),l("li",null,[e(" 属性绑定指令 "),l("ul",null,[l("li",null," 注意：差值表达式只能用在元素的内容节点，不能用在元素的属性节点中 ，所以需要属性绑定指令 "),l("li",null,"功能：为元素的属性动态绑定值"),l("li",null,[e(" 写法： （可简写: ） "),l("pre",null,[l("code",{class:"language-html line-numbers"},`  <div> id="app">
      <input type="text" v-bind:placeholder="tips">   // 在属性前面前面加上一个 v-bind:
      // vue规定中 v-bind: 指令可以简写只要在属性名前面加个 ：
      <img :src="photo" alt="">
  </div>
  //--------------------------------------------
  data: {
      tips: '请输入用户名'，
      photo: 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'
  }`)])]),l("li",null,[e(" 使用 javascript 表达式 "),l("pre",null,[l("code",{class:"language-html line-numbers"},`  /* 在vue提供的模版渲染语法中，除了支持绑定简单的数据值之外，还支持javascript 表达式运算
  注意：在使用 v-bind属性绑定期间，如果绑定内容需要进行动态拼接，则字符串的外面应该包裹单引号，如下面例子
  ｛｛ ｝｝ 和 v-bind: 都支持简单的运算操作 */
  <div>1+2的结果：｛｛ 1 + 2 ｝｝</div>
  <div>｛｛ tips ｝｝反转的结果是：｛｛ tips.split('').reverse().join('')｝｝</div>
  <!-- 这样的写法就要用 js 的逻辑来写，不能看成只是一个字符串，vue会进行转换 -->
  <!-- 如果 box 没有加上单引号，则会被认为是一个 变量，如果没找到则会报错 -->

  <div :title="'box' + index">这是一个 div</div>
  //--------------------------------------------
  data: {
    index: 3
  }`)])])])]),l("li",null,[e(" 事件绑定指令 "),l("ul",null,[l("li",null," vue提供了v-on事件绑定指令，用来辅助程序员为DOM元素绑定事件监听。 "),l("li",null,[e(" 语法格式： （可简写 @） "),l("pre",null,[l("code",{class:"language-html line-numbers"},`  <div id="app">
    <div>当前的数值为 ｛｛ count ｝｝</div>
    <button> v-on:click="add">+1</button>
    <button> v-on:click="sub">-1</button>
  </div>
  //------------------------------------------------
  // methods 的作用，就是定义事件的处理函数
  methods: {
     // add: function() {
     //     console.log(1);
     // }
     //实际开发中会省略 ：function  简写形式
      add() {
          vm.count++ // vm 不推荐写法，因为 vm === this
          this.count++
      },
      sub() {
          this.count--
      }
  },

  // 注意：在绑定事件处理函数的时候，可以使用（）传递参数
  <div id="app">
      <div>当前的数值为 ｛｛ count ｝｝</div>
      <button> v-on:click="add(3)">+3</button>
      <button> v-on:click="sub(5)">-5</button>
  </div>
  //-----------------------------------------------
  methods: {
      add(n) {
          this.count += n
      },
      sub() {
          this.count -= n
      }
  },

  // 简写形式
  <div id="app">
    <div>当前的数值为 ｛｛ count ｝｝</div>
    <button> @click="add(3)">+1</button>   // v-on: 可以简写  @
    <button> @click="sub(5)">-1</button>
  </div>
  //----------------------------------------------
  methods: {
      add(n) {
          this.count += n
      },
      sub(n) {
          this.count -= n
      }
  },`)])]),l("li",null," 注意：原生DOM对象有onclick、oninput、onkeyup等原生事件，替换为vue的事件绑定形式后， "),l("li",null," 分别为：v-on:click、v-on:input、v-on:keyup // 简写 成 @click @input @keyup "),l("li",null,[e(" 事件对象： "),l("pre",null,[l("code",{class:"language-html line-numbers"},`  /* 当调用函数没有传参时，可以使用事件对象 event
  如果有传参,需要使用事件对象 e. 如果只写 e，则会被当做实参，防止拿不到事件对象 e
  那么vue 提供一个 &event 来解决 ,实参是固定写法 ,不带实参也可以默认当做事件对象 */

  <div>count的值为： ｛｛ count ｝｝ </div>
  <button @click="add(1 , $event)">-N</button>
  //------------------------------------------------
  methods: {
      add(n , e) {
          this.count += n;
          if (this.count % 2 == 0) {
              e.target.style.backgroundColor = 'red'
          } else {
              e.target.style.backgroundColor = 'blue'
          }
      }
  },
                      `)])]),l("li",null,[e(" 事件修饰符：.prevent .stop .capture .once .self "),l("pre",null,[l("code",{class:"language-html line-numbers"},`  // 在事件处理函数中调用event.preventDefault（）或 event.stopPropagation（）是非常常见的需求。因此， vue提供了事件修饰符的概念，来辅助程序员更方便的对事件的触发进行控制。常用的5个事件修饰符
  <a href="http://www.baidu.com" @click.prevent="show">跳转链接，阻止默认行为</a>
  //----------------------------------------------------------------
  methods: {
      show(e) {
          // e.preventDefault()  DOM标准写法
          console.log('输出1')
      }
  },`)])]),l("li",null,[e(" 键盘修饰符：.esc .enter "),l("pre",null,[l("code",{class:"language-html line-numbers"},`  // 在监听键盘事件时，我们经常需要判断详细的按键。此时，可以为键盘相关的事件添加按键修饰符
  <input type="text" @keyup.esc="clearInput">  // .esc代表是按下了 esc键，如果是其它的，则修改成相应按键
  <input type="text" @keyup.esc="clearInput" @keyup.enter="commitAjax">
  //----------------------------------------
  methods: {
      clearInput(e) {
          e.target.value = ''
      }
  },
                      `)])])])]),l("li",null,[e(" 双向绑定指令 "),l("ul",null,[l("li",null," vue 提供了v-model双向数据绑定指令，用来辅助开发者在不操作DOM的前提下，快速获取表单的数据。 ")]),l("pre",null,[l("code",{class:"language-html line-numbers"},`  <div id="app">
      <p>您的名字是 ｛｛ username ｝｝</p>
      <input type="text" v-model="username">  // 双向绑定
      <br>
      <input type="text" v-bind:value="username">  // 单向绑定
  </div>
  //--------------------------------------------------
  data: {
      username: '张三'
  },`)])]),l("li",null,[e(" input 输入框 textarea select v-model 常用于表单元素 "),l("ul",null,[l("li",null,[e(" type = 'radio' type = 'checkbox' type = 'xxx' "),l("pre",null,[l("code",{class:"language-html line-numbers"},`  <input type="text" v-model="n1"> + <input type="text" v-model="n2"> = <span> ｛｛ n1 + n2 ｝｝</span>
  //----------------------------------------------------
  data: {
        n1: 1,
        n2: 2
  },`)])]),l("li",null,[e(" v-model指令的修饰符： "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  .number              自动将用户的输入值转为数值类型               <input v-model.number="age"/>
  .trim                自动过滤用户输入的首尾空白字符               <input v-model.trim="msg"/>
  .lazy                在"change"时而非“input”时更新               <input v-model.lazy="msg"/>`)])])])]),l("li",null,[e(" 条件渲染指令 "),l("ul",null,[l("li",null,[e(" 条件渲染指令用来辅助开发者按需控制DOM的显示与隐藏。条件渲染指令有如下两个，分别是 "),l("pre",null,[l("code",{class:"language-html line-numbers"},`  /* v-if： 作为判断条件，动态创建添加 移除 开发时 if 用的更多, 初始不需要展示，而且后期这个元素也不需要被展示，才使用 if 性能才会更好
  v-show： 动态为元素添加 style=“display: none” ，如果频繁切换，使用 show 性能更好 */

  <div id="app">
     <p v-if="flag">我是被v-if控制的</p>       // if是作为判断条件 动态
     <p v-show="flag">我是被v-show控制的</p>   // 而show  是作为内联样式，display：none 显示的
  </div>
  //-----------------------------------------------------------
  data: {
      flag: true
  },`)])]),l("li",null,[e(" v-else : 跟 v-if 配套的指令 v-if 可以单独使用，或配合v-else指令一起使用 "),l("pre",null,[l("code",{class:"language-html line-numbers"},`  <div id="app">
      <div> v-if="type === 'A'">优秀</div>
      <div> v-else-if="type ==='B'">良好</div>
      <div> v-else>一般</div>
  </div>
  //----------------------------------------------------
  data: {
      flag: true,
      type: 'A'
  },`)])])])]),l("li",null,[e(" 列表渲染指令 "),l("ul",null,[l("li",null," vue提供了 v-for 列表渲染指令，用来辅助开发者基于一个数组来循环渲染一个列表结构。V-for 指令需要 "),l("li",null,[e(" 使用 item in items （item in 数组） 形式的特殊语法，其中： "),l("pre",null,[l("code",{class:"language-html line-numbers"},`  /* items 是待循环的数组
  item 是被循环的每一项 */

  <link rel="stylesheet" href="./lib/bootstrap.css">
  //--------------------------------------
  <div id="app">
      <table class="table table-bordered table-hover table-striped">
          <thead>
              <th>索引</th>
              <th>ID</th>
              <th>姓名</th>
          </thead>
          <tbody>
              <tr v-for="item in list">
                  <td>｛｛ 0 ｝｝</td>
                  <td>｛｛ item.id ｝｝</td>
                  <td>｛｛ item.name ｝｝</td>
              </tr>
          </tbody>
      </table>
  </div>
  //-----------------------------------------------------------
  data: {
      list: [
          { id: 1, name: '张三'},
          { id: 2, name: '李四'},
          { id: 3, name: '王五' }
      ]
  },`)])]),l("li",null,[e(" V-for 指令还支持一个可选的第二个参数，即当前项的索引。语法格式为（item，index）in items "),l("pre",null,[l("code",{class:"language-html line-numbers"},`  <tbody>
      <tr v-for="(item, index) in list">
          <td>｛｛ index ｝｝</td>
          //这样 索引号就可以使用了
          <td>｛｛ item.id ｝｝</td>
          <td>｛｛ item.name ｝｝</td>
      </tr>
  </tbody>`)])]),l("li",null,[e(" 注意： 官方建议，只要用到 v-for指令，那么一定要绑定一个 ：key 属性，并且尽量把id作为key 的值, html中忘记加不会报错，但是在 .vue 的文件中忘记加，则会报错 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  <!-- 官网对key 的值类型 是有要求的： 数字或者字符串 -->
  <!-- key值不允许使用name ,因为字符串会出现有相同的字符串。重复就报错，id不会，id是唯一的 -->
  <tr v-for="(item, index) in list" :key="item.id">
      <td>｛｛ index ｝｝</td>
      <td>｛｛ item.id ｝｝</td>
      <td>｛｛ item.name ｝｝</td>
  </tr>`)])]),l("li",null,[e(" key 值的注意事项 "),l("ul",null,[l("li",null,"key的值只能是字符串或数字类型"),l("li",null,"key的值必须具有唯一性（即：key的值不能重复）"),l("li",null," 建议把数据项id属性的值作为key的值（因为id属性的值具有唯一性）不建议用name 来当做key 的值，因为name 会有重复，终端会报错 "),l("li",null," 使用index的值当作key的值没有任何意义（因为index的值不具有唯一性）因为当往数据前添加一个数据，那么索引号会重新排序，这样导致数据紊乱，造成错误 "),l("li",null," 建议使用V-for指令时一定要指定key的值（既提升性能、又防止列表状态紊乱） ")])])])]),l("li",null,[e(" 案例中label 的for 属性 "),l("pre",null,[l("code",{class:"language-html line-numbers"},`  <div class="custom-control custom-switch">
      <input type="checkbox" class="custom-control-input" :id="'customSwitch'+ item.id" v-model="item.status" />
      <label> class="custom-control-label" :for="'customSwitch'+ item.id" v-if="item.status">已启用</label>
      <label> class="custom-control-label" :for="'customSwitch'+ item.id" v-else>已禁用</label>
  </div>`)])])])]),l("li",null,[e(" 总结: "),l("ul",null,[l("li",null,[e(" vue的使用步骤 "),l("ul",null,[l("li",null,"导入vue.js 文件"),l("li",null,"new Vue() 构造函数，得到vm实例对象"),l("li",null,"声明 el 和 data 数据节点"),l("li",null,"MVVM 的对应关系")])]),l("li",null,[e(" 掌握vue中的常用指令的基本用法 "),l("ul",null,[l("li",null," 差值表达式｛｛ ｝｝ 、 v-bind ( 数据到视图，单向，简写 : ) 、v-on ( @ )、 v-if 和 v-else 、 很少用的有： v-show(display:none) 、 v-text 、 v-html "),l("li",null,"私有过滤器 filters 节点")])]),l("li",null,[e(" 掌握vue中过滤器的基本用法 "),l("ul",null,[l("li",null,"全局过滤器 Vue .filter ( '过滤器名称'，function)"),l("li",null,"私有过滤器 filters 节点")])])])])],-1)),n[73]||(n[73]=l("p",null,"过滤器 (仅限用在2.0的项目上，3.0已经不支持了)",-1)),n[74]||(n[74]=l("ul",null,[l("li",null," 过滤器（Filters）是vue为开发者提供的功能，常用于文本的格式化。Filters 本身就是一个函数 function "),l("li",null,"过滤器可以用在两个地方：插值表达式 和 V-bind属性绑定。"),l("li",null,[e(" 过滤器应该被添加在JavaScript表达式的尾部，由“管道符”进行调用，示例代码如下： "),l("pre",null,[l("code",{class:"language-html line-numbers"},`  <!-- 在差值表达式里面通过 “管道符 ”调用 capitalize 过滤器，对message的值进行格式化-->
  <p>｛｛ message | capitalize ｝｝</p>   //  capitalize 过滤器名称可以自定义

  <!-- 在 v-bind 中通过 “管道符”调用， formatId 过滤器， 对rawId的值进行格式化 -->
  <div v-bind:id="rawId | formatId"></div>
  //----------------------------------------------------------------------------------
  const vm = new Vue({
      el: '#app',
      data: {
      },
      methods: {
      },
      // 过滤器函数，必须被定义到filters节点下
      filters:{
          capitalize(val){  // val是 | 前面的那个原值
              const first = val.charAt(0).toUpperCase();
              const other = val.slice(1);
              // 过滤器函数中一定要有返回值
              return first + other;
          }
      }
  });`)])]),l("li",null,[e(" 注意过滤器的注意点： "),l("ul",null,[l("li",null,"要定义到filters节点下，本质是一个函数"),l("li",null,"在过滤器函数中，一定要有return值"),l("li",null,"在过滤器的形参中，就可以获取到“管道符”前面待处理的那个值"),l("li",null," 如果全局过滤器和私有过滤器名字一致，此时按照“就近原则”，调用的是“私有过滤器 ")])])],-1)),n[75]||(n[75]=l("p",null,"私有和全局 过滤器",-1)),l("ul",null,[n[62]||(n[62]=l("li",null," 在filters 节点下定义的过滤器，称为“私有过滤器”，因为它只能在当前vm实例所控制的el区域内使用。 ",-1)),n[63]||(n[63]=l("li",null,[e(" 如果希望在多个vue实例之间共享过滤器，则可以按照如下的格式定义全局过滤器： "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 全局过滤器-独立于每个vm实例之外
  // Vue.filter（）方法接收两个参数： 第1个参数，是全局过滤器的”名字"   第2个参数，是全局过滤器的”处理函数"
  Vue.filter('capitalize', (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1)
  })`)])],-1)),n[64]||(n[64]=l("li",null," 可以连续调用多个过滤器，用 | 分割，最后return最后一个过滤结果， ",-1)),n[65]||(n[65]=l("li",null,[e(' 并且可以传参，第一个参数永远是"管道符"前面待处理的值，第二个参数才是过滤器时传递的过来的num1,num2参数 '),l("pre",null,[l("code",{class:"language-html line-numbers"},`  <div id="app">
      <div>｛｛username | capitalize（num1，num2） | time | xxx | yyy｝｝</div>
  </div>
  //----------------------------------------------------------------------------------------
  Vue.filter('capitalize', (username, num1, num2) => {
  })`)])],-1)),l("li",null,[n[61]||(n[61]=e(" 过滤器的兼容性： ")),l("ul",null,[n[60]||(n[60]=l("li",null," 过滤器仅在vue2.x和1.X中受支持，在vue3.x的版本中剔除了过滤器相关的功能。 ",-1)),l("li",null,[n[59]||(n[59]=e(" 在企业级项目开发中： ")),l("ul",null,[n[57]||(n[57]=l("li",null," 如果使用的是2.x版本的vue，则依然可以使用过滤器相关的功能 ",-1)),n[58]||(n[58]=l("li",null," 如果项目已经升级到了3.x版本的vue，官方建议使用计算属性或方法代替被剔除的过滤器功能具体的迁移指南， ",-1)),l("li",null,[n[56]||(n[56]=e(" 请参考vue3.x的官方文档给出的说明： ")),i(t,{type:"primary",icon:"Link",target:"_blank",href:"https://v3.vuejs.org/guide/migration/filters.html#migration-strategy"},{default:u(()=>n[55]||(n[55]=[e(" https://v3.vuejs.org/guide/migration/filters.html#migration-strategy ")])),_:1,__:[55]})])])])])])]),n[76]||(n[76]=l("p",null,"侦听器",-1)),n[77]||(n[77]=l("ul",null,[l("li",null,[e(" 什么是watch侦听器： "),l("ul",null,[l("li",null," watch 侦听器允许开发者监视数据的变化，从而针对数据的变化做特定的操作。语法格式如下： ")]),l("pre",null,[l("code",{class:"language-js line-numbers"},`  data: {
    username: 'zs',
  },
  watch:{
    // 监听username 值的变化
    // newVal 是“变化后的新值”，oldVal 是“变化之前的旧值”，新值在前，旧值在后
    username(newVal,oldVal){
        // ·调用·jQuery·中的·Ajax·发起请求，判断·newVa1·是否被占用！！！
        $.get('https://www.url/' + newVal, function(result){
            console.log(result); // 判断用户名是否被注册
        })
    }
  }`)])]),l("li",null,[e(" 方法格式的侦听器 "),l("ul",null,[l("li",null," 缺点1：无法在刚进入页面的时候，自动触发！！！，但是推荐，如果一进来就要触发，则采用对象格式 "),l("li",null," 缺点2：如果侦听的是一个对象，如果对象中的属性发生了变化，不会触发侦听器！！ ")])]),l("li",null,[e(" 对象格式的侦听器 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 好处1：可以通过immediate 选项，让侦听器自动触发
  watch:{
    // 监听username 值的变化
    // newVal 是“变化后的新值”，oldVal 是“变化之前的旧值”
    username:{
        handler(nweVal,oldVal){
            console.log(newVal,oldVal);
        },
        immediate:false   // 默认值就是false,改为true就是一进来就触发监听
    }
  }

  // 好处2：可以通过deep选项，让侦听器深度监听对象中每个属性的变化
  watch:{
    info:{
        username(newVal){
            console.log(newVal);
        },
        deep:true        // 开启深度监听，只要对象中任何一个属性变化了，都会触发“对象的侦听器”
    }
  } `)])]),l("li",null,[e(" 如果要侦听的是对象的子属性的变化，则必须包裹一层单引号 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  watch:{
    'info.username'(newVal){
        console.log(newVal);
    }
  }`)])])],-1)),n[78]||(n[78]=l("p",null,"计算属性",-1)),n[79]||(n[79]=l("ul",null,[l("li",null,"计算属性指的是通过一系列运算之后，最终得到一个属性值。"),l("li",null,[e(" 这个动态计算出来的属性值可以被模板结构或methods方法使用。示例代码如下： "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 所有的计算属性，都要定义到computed节点之下
  // 计算属性在定义的时候，要定义成“方法格式”
  computed:{
      // rgb作为一个计算属性，被定义成了方法格式，最终这个方法中，要返回一个生成好的rgb(x,x,x)字符串
      rgb:function(){
          return \` rgb(\${this.r},\${this.g},\${this.b})\`
      }
  }`)])]),l("li",null,[e(" 特点： "),l("ul",null,[l("li",null,"定义的时候，要被定义为“方法”"),l("li",null,"在使用计算属性的时候，当普通的属性使用即可")])]),l("li",null,[e(" 好处： "),l("ul",null,[l("li",null,"实现了代码的复用"),l("li",null," 只要计算属性中依赖的数据源变化了，则计算属性会自动重新求值！ ")])])],-1))]),_:1,__:[66,67,68,69,70,71,72,73,74,75,76,77,78,79]}),i(s,{id:"part4",shadow:"hover"},{default:u(()=>[n[87]||(n[87]=l("h2",null,"Axios",-1)),n[88]||(n[88]=l("p",null,"一个专注于网络请求的库",-1)),l("ul",null,[n[84]||(n[84]=l("li",null,"axios（发音：艾克C奥斯）是前端圈最火的、专注于数据请求的库。",-1)),l("li",null,[n[81]||(n[81]=e(" 中文官网地址： ")),i(t,{type:"primary",icon:"Link",target:"_blank",href:"http://www.axios-js.com/"},{default:u(()=>n[80]||(n[80]=[e(" http://www.axios-js.com/ ")])),_:1,__:[80]})]),l("li",null,[n[83]||(n[83]=e(" 英文官网地址： ")),i(t,{type:"primary",icon:"Link",target:"_blank",href:"https://www.npmjs.com/package/axios"},{default:u(()=>n[82]||(n[82]=[e(" https://www.npmjs.com/package/axios ")])),_:1,__:[82]})]),n[85]||(n[85]=l("li",null,[e(" 先引入axiosjs "),l("pre",null,[l("code",{class:"language-js line-numbers"},'  <script src="./lib/vue-2.6.12.js"><\/script>')])],-1)),n[86]||(n[86]=l("li",null,[e(" 语法结构 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 1、调用axios方法得到的返回值是Promise对象
  axios({
      method:"GET",
      url:"http://www.liulongbin.top:3006/api/getbooks",
      // URL 中的查询参数  GET  或者下面POST请求
      params:{},

      // 请求体参数   POST
      data:{}
  }).then(function(books){
      console.log(books.data);
  });

  // 2. 结合async和 await 调用 axios
  document.querySelector('#btnPost').addEventListener( 'click', async function(){
    // 如果调用某个方法的返回值是Promise实例，则前面可以添加await
    // await 能用在被async“修饰”的方法中
    const result = await axios ({
        method: 'POsT ',
        url:'http: //ww.liulongbin.top:3006/api/post',
        data:{
            name: 'zs',
            age: 20
        }
    });
    console.log(result);
  })

  // 3. 解构赋值的时候，使用 ：进行重命名
  document.querySelector('#btnPost').addEventListener( 'click', async function(){
    const {data: res}= await axios ({
        method: 'POST ',
        url:'http: //www.liulongbin.top:3006/api/post',
    });
  })

  // 4.axios.get() 和 axios.post() 语法
  document.querySelector('#btnPost').addEventListener( 'click', async function(){
    // axios.get('url地址',{
    //     // GET参数
    //     params:{}
    // })
    const {data: res} = await axios.get('http: //www.liulongbin.top:3006/api/getBooks'，{});
  });

  document.querySelector('#btnPost').addEventListener( 'click', async function(){
    const {data: res} = await axios.post('http: //www.liulongbin.top:3006/api/getBooks',{});
  });`)])],-1))])]),_:1,__:[87,88]}),i(s,{id:"part5",shadow:"hover"},{default:u(()=>[n[99]||(n[99]=l("h2",null,"其他",-1)),n[100]||(n[100]=l("p",null,"Vue-cli",-1)),l("ul",null,[n[95]||(n[95]=l("li",null,[e(" 什么是单页面应用程序 (难度比较大，比如杏仁雕刻，一个html里) "),l("ul",null,[l("li",null," 单页面应用程序（英文名：Single Page Application）简称SPA，顾名思义，指的是一个Web网站中只有唯一的一个HTML页面， 所有的功能与交互都在这唯一的一个页面内完成。 ")])],-1)),l("li",null,[n[94]||(n[94]=e(" 什么是vue-cli ")),l("ul",null,[n[93]||(n[93]=l("li",null," vue-cli是Vue.js开发的标准工具。它简化了程序员基于webpack创建工程化的Vue项目的过程。 ",-1)),l("li",null,[n[92]||(n[92]=e(" 引用自vue-cli官网上的一句话： ")),l("ul",null,[n[91]||(n[91]=l("li",null," 程序员可以专注在撰写应用上，而不必花好几天去纠结webpack配置的问题。 ",-1)),l("li",null,[n[90]||(n[90]=e(" 中文官网： ")),i(t,{type:"primary",icon:"Link",target:"_blank",href:"https://cli.vuejs.org/zh/"},{default:u(()=>n[89]||(n[89]=[e(" https://cli.vuejs.org/zh/ ")])),_:1,__:[89]})])])])])]),n[96]||(n[96]=l("li",null,[e(" 安装和使用 "),l("ul",null,[l("li",null,[e(" vue-cli是npm上的一个全局包，使用npm install命令，即可方便的把它安装到自己的电脑上： "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  npm install -g @vue/cli
  // 先要安装nodejs,然后再执行上面的安装命令，安装好后，cmd => vue -V  可查看版本，出现版本号则安装成功`)])]),l("li",null,[e(" 基于vue-cli快速生成工程化的Vue项目： "),l("ul",null,[l("li",null," vue create 项目的名称： 红色代表固定的vue项目，后面的名称随意，用英文 ")])]),l("li",null,[e(" 使用方法： "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 第一步创建一个文件夹，在地址栏上输入cmd ，输出： vue create + 项目名称
  Vue CLI v4.5.15
  ? Please pick a preset:(Use arrow keys)
  > Default([Vue 2] babel, eslint)
    Default(vue 3)([Vue 3l babel, eslint)
    Manually select features
  /* 解释：选择项目是Vue2  还是Vue3，初学者应该选择第三选项，手动选择
      Please pick a preset:(Use arrow keys)             请选择预设：（使用箭头键）
      Default ([Vue 2] babel,eslint)                    默认值（[Vue 2]babel，eslint）
      Default (Vue 3)([Vue 3] babel,eslint)             默认值（Vue 3）（[Vue 3]巴别塔，eslint）
      Manually select features                          手动选择要安装的功能 */

  // 第二步
  Vue CLI v4.5.15
  ? Please pick a preset:Manually select featuresCheck the features needed for your project:(Press<space> to select,
  ? (*) Choose Vue version
    (*) Babe1
    ( ) TypeScript
    ( ) Progressive Web App(PWA)Support
    ( ) Router
    ( ) VueX
    ( ) CSS Pre-processors
    ( ) Linter/ Formatter
    ( ) Unit Testing
    ( ) E2E Testing
  /* 解释： * 号代表需要安装，用空格进行选择
    第一项：要选择安装Vue的版本
    第二项：Babel 是用来解决js兼容性的
    第三项：微软的js语言，没学建议不要选
    第四项：渐进式的web框架
    第五项：路由
    第六项：vueX
    第七项：CSS 预处理器
    第八项：代码风格，前期先去掉，要不然会报错
    第九十项：单元组件测试 先不安装 */

  // 第三步
  Vue CLI v4.5.15
  ? Please pick a preset: Manually select features
  ? Check the features needed for your project: Choose Vue version, Babel, CSS Pre-processors
  ? Choose a version of Vue.js that you want to start the project with (Use arrow keys)
  > 2.x
    3.x
  /* 解释： 选择vue版本，先用2 */

  // 第四步
  Vue CLI y4.5.15
  ? Please pick a preset:Manually select features
  ? check the features needed for your project: Choose Vue version, Babel, CSS Pre-proc
  ? Choose a version of Vue.js that you want to start the project with 2.x
  ? Pick a CSS pre-processor (PostCSS,Autoprefixer and CSS Module are supported by de)
  > Sass/SCSS (with dart-sass)
    Sass/SCSS (with node-sass)
    Less
    Stylus
  /* 解释： 选择css预处理器，less */

  // 第五步
  Vue CLI y4.5.15
  ? Please pick a preset: Manually select features
  ? Check the features needed for your project: Choose Vue version, Babel,
  ? Choose a version of Vue.js that you want to start the project with 2. x
  ? Pick a CSS pre-processor （PostCSS,Where do you prefer placing config for Babel, ESLint, etc.?(Use arrow keys)
  > In dedicated config filesIn
    In package.json
  /*  解释： 是否独立创建文件还是跟package.json放在一起，选默认第一个 */

  /* 最后一步
      是否存储以上选择的预设，供下次创建相同配置时选择此次预设，yes / no 都可以
  注意：
    如果暂停了，需要选中窗口，按ctrl +c 解冻，然后鼠标不要点，静静等就可以了
    如果出错，重新执行多遍就可以了，直到出现 cd ‘项目名’ npm run serve 即可  */`)])])])],-1)),n[97]||(n[97]=l("li",null,[e(" 安装完后： "),l("ul",null,[l("li",null," 根据提示，先cd到项目，然后再跑起来，输入cd item 按tab 则会自动输入全名 "),l("li",null,"npm run serve"),l("li",null," Local: 本机访问的地址，在浏览器输入即可打开项目 Network：局域网访问地址 "),l("li",null,"终端端口不要关，关了就项目不运行了，如果关了就重新启用")])],-1)),n[98]||(n[98]=l("li",null,[e(" vue项目中的src目录的构成： "),l("ul",null,[l("li",null," assets 文件夹：存放项目中用到的静态资源文件，例如：css样式表、图片资源 "),l("li",null," components 文件夹： 程序员封装的、可复用的组件，都要放到components目录下 "),l("li",null,"App.vue：是项目的根组件"),l("li",null," main.js：是项目的入口文件。整个项目的运行，要先执行main.js ")])],-1))]),n[101]||(n[101]=l("p",null,"Vue项目的运行流程",-1)),n[102]||(n[102]=l("ul",null,[l("li",null,[e(" 在工程化的项目中，vue要做的事情很单纯：通过main.js把App.vue渲染到index.html的指定区域中。 "),l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 导入vue这个包，得到Vue构造函数
  import Vue from 'vue'
  // 导入App.vue根组件，将来要把App.vue中的模板结构，渲染到HTML页面中
  // import App from './App.vue'
  import test from './test.vue'

  Vue.config.productionTip = false

  // 创建Vue的实例对象
  new Vue({
    // 把render 函数指定的组件，渲染到HTML页面中
    // render函数中，渲染的是哪个.vue组件，那么这个组件就叫做“根组件”
    render: h => h(test),
  }).$mount('#app')   // $mount函数   相当于  el:'要控制区域'`)])]),l("li",null,[e(" 如果把自己创建的Vue文件渲染到页面中 "),l("ul",null,[l("li",null,"创建文件 test.vue，写一些模版结构"),l("li",null,' 打开main.js 导入文件，修改render函数里的形参，再 .$mount( "文件名" ) ')])])],-1)),n[103]||(n[103]=l("p",null,"什么是组件化开发",-1)),n[104]||(n[104]=l("ul",null,[l("li",null," 组件化开发指的是：根据封装的思想，把页面上可重用的UI结构封装为组件，从而方便项目的开发和维护。 "),l("li",null,[e(" vue中的组件化开发 "),l("ul",null,[l("li",null,"vue是一个支持组件化开发的前端框架。"),l("li",null," vue中规定：组件的后缀名是vue。之前接触到的App.vue文件本质上就是一个vue的组件。 ")])]),l("li",null,[e(" vue 组件的三个组成部分每个.vue组件都由3部分构成，分别是： "),l("ul",null,[l("li",null,"template -> 组件的模板结构"),l("li",null,"script -> 组件的JavaScript行为"),l("li",null,"style -> 组件的样式")])]),l("li",null,[e(" 什么是组件，组件就是对UI的复用 "),l("pre",null,[l("code",{class:"language-html line-numbers"},`  <template>   <!-- 模版 -->
    <div>
        <h1>这里是用户自定义的test.vue----｛｛ username ｝｝</h1>
        <button @click="changeName">+1</button>
    </div>
  </template>

  <script>
    export default { // 固定写法，默认导出
      // data 数据源
      // 注意：.vue组件中的data不能像值钱一样，不能指向对象
      // 主键中的data必须是一个函数
      data(){
          // 这个return出去的｛｝中，可以定义数据
          return {
              username:'zs'
          }
      },
      methods:{
          changeName(){
              // 在组件中，this就表示当前组件的实例对象
              this.username = "whh"
          }
      },
      watch:{ },     // 当前组件的侦听器
      filters:{ },   // 当前组件的过滤器，一般用全局
      computed:{ }   // 当前组件的计算属性
    }
  <\/script>

  <style lang="less"> </style>   /* 样式 如果要用less语法，则需要写语言，默认css，可以不写 */`)])])],-1)),n[105]||(n[105]=l("p",null,"组件之间的父子关系",-1)),n[106]||(n[106]=l("ul",null,[l("li",null,"组件在被封装好之后，彼此之间是相互独立的，不存在父子关系"),l("li",null," 在使用组件的时候，根据彼此的嵌套关系，形成了父子关系、兄弟关系 ")],-1)),n[107]||(n[107]=l("p",null,"组件使用的三个步骤",-1)),n[108]||(n[108]=l("pre",null,[l("code",{class:"language-js line-numbers"},`  // 使用import语法导入需要的组件
  import Left from '@/components/Left.vue'
  import Left from '@/components/right.vue'

  // 使用components节点注册组件，多个组件用，号分割
  export default {
    components: {
      Left，
      Right
    }
  }

  // 在模版中使用组件
  <Left>使用组件标签</Left>

  /* 安装Vue路径提示工具 Path Autocomplete : Vue项目中提示文件路径的插件
      需要设置：设置 => 输入settings找到 setting.json 文件 => 在头部添加代码  */
      // 导入文件时是否携带文件的扩展名
      "path-autocomplete.extensionOnImport": true,
      // 配置@的路径提示
      "path-autocomplete.pathMappings": {
        "@":"\${folder}/src"
      },

  /* 通过components注册的是私有子组件. 例如:
      在组件A的components节点下，注册了组件F。
      则组件F只能用在组件A中；不能被用在组件C中。 */

  /* 注册全局组件
      在vue项目的main.js入口文件中，通过Vue.component（）方法，可以注册全局组件。示例代码如下： */
      // 1、先在main.js中 导入需要被全局注册的那个组件
      import Count from "@/components/Count.vue"
      Vue.component('MyCount', Count);

      // 2、在需要使用的Vue中使用
      <MyCount>Count组件</MyCount>

  /* 组件的props
      props是组件的自定义属性，在封装通用组件的时候，合理地使用props可以极大的提高组件的复用性 */
      <template>
        <div>
            <p>｛｛ init ｝｝</p>  // 要渲染的页面应该放上初始值init
            <MyCount> init="9"></MyCount>  // 将init值传给自定义属性props
        </div>
      </template>

      <script>>
      export default {
        // props 是‘自定义属性’，允许使用者通过自定义属性，为当前组件指定初始化值
        // 自定义属性的名字，是封装者自定义的（只要名称合法即可）
        props:['init'],
        data(){
            return {
                count: 0
            }
        }
      }
      <\/script> `)],-1))]),_:1,__:[99,100,101,102,103,104,105,106,107,108]})]),_:1},8,["data"])}}});export{D as default};
