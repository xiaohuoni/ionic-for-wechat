'use strict';
/***
 * 首页
 */
app.controller('DashCtrl', ["$scope",function($scope) {
    $scope.share = function (){
        //d指的是window
        window.sharetitle = "啊啊啊啊大大";
        window.shareUrl = "http://test.lbwan.com/res/upload/images/ad/p1ac6g12391r27dg42knu6ej65.jpg";
        (function(s,d,e){try{}catch(e){}var f='http://v.t.sina.com.cn/share/share.php?',u=d.location.href,p=['url=',e(u),'&title=',e(window.sharetitle),'&appkey=2924220432','&pic=',e(window.shareUrl)].join('');function a(){if(!window.open([f,p].join(''),'mb',['toolbar=0,status=0,resizable=1,width=620,height=450,left=',(s.width-620)/2,',top=',(s.height-450)/2].join('')))u.href=[f,p].join('');};if(/Firefox/.test(navigator.userAgent)){setTimeout(a,0)}else{a()}})(screen,document,encodeURIComponent);
    }
    $scope.shareQQ = function () {

        if(wx){
            wx.checkJsApi({
                jsApiList: [
                    'getLocation',
                    'onMenuShareTimeline',
                    'onMenuShareAppMessage'
                ],
                success: function (res) {
                    alert(JSON.stringify(res));
                }
            });
            wx.onMenuShareAppMessage({
                title: '什么鬼', // 分享标题
                desc: 'aaaaa', // 分享描述
                link: 'http://www.baidu.com', // 分享链接
                //imgUrl: '', // 分享图标
                success: function () {
                    // 用户确认分享后执行的回调函数
                    alert("分享成功")
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                    alert("分享取消")

                }
            });
        }
    }
}]);
