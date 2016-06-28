OniPlatform
在ionic的基础上配置ocLazyLoad，使得项目满足微信应用-单页面表现的需求，使得单页面访问，不会因为项目的庞大而造成读取缓慢，加快启动项目的速度。
拆分ionic视图控制器的绑定，使之底层的服务能够用于pc端，pc端的页面使用bootstrap编写，用ionic的控制器和服务支持。
使用此框架要遵循一下规定（以下以移动端路径说明，pc端在最前面加上ionicforpc）：
1、命名规则
①文件夹命名全部小写
②文件命名以首字母大写的驼峰式命名
③服务以Service结尾
④控制器以Ctrl结尾
⑤指令以Directive结尾
2、文件存放路径
①所有服务放于js/services
②所有控制器放于js/controllers
③所有指令放于js/directives
④所有工具类放于js/util
⑤所有的html文件放于templates
⑥路由在App.js中定义
⑦所有的文件都要在Config.js文件中写明路径
3、发布(发布文件路径为www/dest，相对路径不变，可以直接拷贝里面的文件发布)
①首次使用运行firstbuild.bat，安装相关插件
②首次发布运行buildall.bat，压缩js、css、html、image，拷贝lib里面的文件和index.html
③只修改js，再次发布，运行buildjs.bat
④只修改css，再次发布，运行buildcss.bat
⑤只修改html，再次发布，运行buildhtml.bat
⑥只修改image，再次发布，运行buildimage.bat
⑦增加lib里面的文件，最好重新buildall
4、按需加载的实现
①按需加载html，在路由中配置属性templateUrl: 'templates/xx.html',prefetchTemplate:false,不会提前加载html
②按需加载js，在路由中配置resolve: loadSequence('DashArgs')，resolve: loadSequence('DashCtrl')，resolve: loadSequence(['DashCtrl','DashService','MainService'])
  resolve:预载入
  使用预载入功能，可以预先载入一系列依赖或者数据，然后注入到控制器中。
  在路由中的resolve，能够保证在路由到达前载入数据保证（promises）.
  预载入对象需要一个对象，这个对象的key纪要注入到控制器的依赖，这个对象的值为需要被载入的服务。
  如果传入的是字符串，路由会视图匹配已经注册的服务。
  如果传入的是函数，该函数会被注入，并且该函数返回的值便是控制器的依赖之一。
  如果该函数返回一个数据保证（promise），这个数据保证将在控制器被实例化前被预先载入并且数据会被注入到控制器中。
  loadSequence：自定义的加载js文件的方法，返回的是一个数据保证（promise）。resolve会保证在控制器被实例化之前载入相关数据。
  loadSequence接受三种格式的参数。
  第一种单个文件名称（该名称需要在Config.js中配置真实的文件路径）。
  第二种一个文件名称的数据对象（要求同上）。
  第三种单个的数组对象名称（该名称需要在Config.js中配置相应的文件名称的数组对象）
  建议使用第三种格式的参数，提供一个数组对象的名称，在Config.js中匹配对应的数组对象，再通过遍历数组对象，匹配单个文件真实的文件路径，实现加载。
③按需加载css文件，在对应的服务中调用 $ocLazyLoad.load( [{type: 'css', path: 'css/ChatsStyle.css'}])，需要注入服务$ocLazyLoad。
  注意需要写在它特有的服务中，不要写在多个界面通用的服务里面。也可以使用按需加载js文件的方式，在配置表中配置。
5、相关规范
①服务是按照界面区分的，不是按照功能区分的。
②在index.html中使用的服务和指令需要在index中使用script标签加载相关文件。
  在index编译完成启动app之后才会触发路由


  6、关于自由复制
    在ion-content中设置 overflow-scroll="true"
    在需要的复制的对象增加样式selectable
    .selectable{
      -webkit-user-select: auto;
      -moz-user-select: all;
      -ms-user-select: all;
      user-select: all;
    }