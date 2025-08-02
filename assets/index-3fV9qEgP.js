import{_ as p,E as d}from"./el-card-BC1LQGcn.js";import"./base-BOVE5efH.js";import{d as i,r,m as c,w as t,f as a,b as n,Q as s,o as m}from"./index-rcW_pH8g.js";import"./index-BRdTUeC1.js";import"./event-BB_Ol6Sd.js";const g=i({name:"UniApp"}),P=i({...g,setup(h){const u=r([{id:1,h2:"新建项目"},{id:2,h2:"初始配置"},{id:3,h2:"生命周期"},{id:4,h2:"项目开发"}]);return(v,l)=>{const e=d,o=p;return m(),c(o,{data:u.value},{svg:t(()=>l[0]||(l[0]=[n("svg",{t:"1737717671929",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3652",width:"48",height:"48"},[n("path",{d:"M62 62m45 0l810 0q45 0 45 45l0 810q0 45-45 45l-810 0q-45 0-45-45l0-810q0-45 45-45Z",fill:"#2B9939","p-id":"3653"}),n("path",{d:"M212.00000029 212.00000029v599.99999942h599.99999942V212.00000029H662.00000029v450H361.99999971V212.00000029z",fill:"#FFFFFF","p-id":"3654"})],-1),n("h1",null,"Uni-app",-1)])),describe:t(()=>l[1]||(l[1]=[n("p",null," Uni-app是一个基于Vue.js开发的跨平台移动应用开发框架，由DCloud（凌云科技）推出。uni-app允许开发者使用一套代码，同时在多个平台上构建原生级别的应用程序，包括微信小程序、H5、iOS、Android以及其他支持的平台 ",-1)])),content:t(()=>[a(e,{id:"part1",shadow:"hover"},{default:t(()=>l[2]||(l[2]=[n("h2",null,"新建项目",-1),n("p",null,"步骤",-1),n("ul",null,[n("li",null,"官网： https://uniapp.dcloud.net.cn/"),n("li",null,"使用HBuilderX 创建")],-1)])),_:1,__:[2]}),a(e,{id:"part2",shadow:"hover"},{default:t(()=>l[3]||(l[3]=[n("h2",null,"初始配置",-1),n("p",null,"代码",-1),n("pre",null,[n("code",{class:"language-js line-numbers"},`  Uni-app                           # 项目根目录（所有指令必须在这个目录运行）
      └── components                # uni-app组件目录
      ├   └── comp-a                # 可复用的a组件
      ├── bybrid                    # 存放本地网页的目录（自建）
      ├── olatforms                 # 存放各平台专用页面的目录
      ├── pages                     # 业务页面文件存放的目录
      ├   └── index
      ├       └── index.vue         # index页面
      ├   └── list
      ├       └── list.vue          # list页面
      ├── static                    # 存放应用引用静态资源（注意：静态资源只能放这里）
      ├── wxcomponents              # 存放小程序组件的目录（自建）
      ├── common                    # 公共资源（自建）
      ├── api                       # 请求封装（自建）
      ├── store                     # 状态管理（自建）
      ├── main                      # Vue初始化入口文件
      ├── App                       # 应用配置，用来配置App全局样式以及监听，应用生命周期
      ├── manifest                  # 配置应用名称，appid.logo，版本等打包信息
      ├── pages                     # 配置页面路由，导航条，选项卡等页面信息

      manifest：可以配置微信小程序的APP ID https://mp.weixin.qq.com/ 获取ID`)],-1)])),_:1,__:[3]}),a(e,{id:"part3",shadow:"hover"},{default:t(()=>l[4]||(l[4]=[n("h2",null,"生命周期",-1),n("p",null,"表格",-1),n("table",null,[n("tbody",null,[n("tr",null,[n("th",null,"函数名"),n("th",null,"描述")]),n("tr",null,[n("td",null,"onLanch"),n("td",null,"当uni-app初始化完成时触发（全局只触发一次）")]),n("tr",null,[n("td",null,"onShow"),n("td",null,"当uni-app启动，或从后台进入前台显示")]),n("tr",null,[n("td",null,"onHide"),n("td",null,"当uni-app从前台进入后台")]),n("tr",null,[n("td",null,"onError"),n("td",null,"当uni-app报错时触发")]),n("tr",null,[n("td",null,"onUniNViewMessage"),n("td",null,"对nvue页面发送的数据进行监听，可参考 nvue向 vue通讯")]),n("tr",null,[n("td",null,"onUnhandledRejection"),n("td",null,"对未处理的Promise拒绝事件监听函数（2.8.1+）")]),n("tr",null,[n("td",null,"onPageNotFound"),n("td",null,"页面不存在监听函数")]),n("tr",null,[n("td",null,"onThemeChange"),n("td",null,"监听系统主题变化")])])],-1)])),_:1,__:[4]}),a(e,{id:"part4",shadow:"hover"},{default:t(()=>l[5]||(l[5]=[n("h2",null,"项目开发",-1),n("p",null,"前言",-1),n("ul",null,[n("li",null,"pages 新建页面 => 项目名称+使用scss的页面+json注册+创建"),n("li",null,[s(" 配置tabBar,修改pages.json，配置bar导航 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  "tabBar": {
      "color":"#000",
      "selectedColor":"#0050ff",
      "list":[{
          "iconPath":"/static/tabbar-icon/index.png",
          "selectedIconPath": "/static/tabbar-icons/index_s.png",
          "text": "首页",
          "pagePath": "pages/index/index"
      },{
          "iconPath":"/static/tabbar-icon/index.png",
          "selectedIconPath": "/static/tabbar-icons/index_s.png",
          "text": "动态",
          "pagePath": "pages/feeds/feeds"
      },{
          "iconPath":"/static/tabbar-icon/index.png",
          "selectedIconPath": "/static/tabbar-icons/index_s.png",
          "text": "我的",
          "pagePath": "pages/me/me"
      }]
  },

  // 对应的要在pages 下创建三个tabbar的vue页面`)])]),n("li",null,[s(" 使用npm 引入uView Ui插件库，终端安装 "),n("pre",null,[n("code",{class:"language-js line-numbers"},`  /* npm install uview-ui
      npm update uview-ui */

  // main.js 导入
  import uView from "uview-ui";Vue.use(uView);

  // uni.scss
  @import 'uview-ui/theme.scss';

  // App.vue
  <style lang="scss">
      @import "uview-ui/index.scss";
  </style>

  // HB 工具下 插件安装scss/sass编译 按需引入 pages.json
  "easycom": {
      "^u-(.*)": "uview-ui/components/u-$1/u-$1.vue"
  }

  // 在页面使用 index.vue
  <template>
      <view class="content">
          <u-button>按钮</u-button>
      </view>
  </template>

  // mac如果报错，在main.js 删除多余的注释，且要在开发小程序安全设置开启端口 `)])])],-1)])),_:1,__:[5]})]),_:1},8,["data"])}}});export{P as default};
