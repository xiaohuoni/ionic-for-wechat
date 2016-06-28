// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic','oc.lazyLoad'])
    .run(['$rootScope', function ($rootScope) {
        $rootScope.onibaritems = [
            {title:"首页",href:"#/tab/dash"},
            {title:"聊天",href:"#/tab/chats"}
        ]
    }])
//.run(function($ionicPlatform) {
//  $ionicPlatform.ready(function() {
//    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
//    // for form inputs)
//    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
//      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
//      cordova.plugins.Keyboard.disableScroll(true);
//
//    }
//    if (window.StatusBar) {
//      // org.apache.cordova.statusbar required
//      StatusBar.styleDefault();
//    }
//  });
//})

    .config(['$stateProvider', '$ionicConfigProvider','$urlRouterProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$ocLazyLoadProvider', 'JS_REQUIRES',
        function($stateProvider,$ionicConfigProvider, $urlRouterProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $ocLazyLoadProvider, jsRequires) {
            app.controller = $controllerProvider.register;
            app.directive = $compileProvider.directive;
            app.filter = $filterProvider.register;
            app.factory = $provide.factory;
            app.service = $provide.service;
            app.constant = $provide.constant;
            app.value = $provide.value;

            $ionicConfigProvider.platform.ios.tabs.style('standard');
            $ionicConfigProvider.platform.ios.tabs.position('bottom');
            $ionicConfigProvider.platform.android.tabs.style('standard');
            $ionicConfigProvider.platform.android.tabs.position('bottom');
            $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
            $ionicConfigProvider.platform.android.navBar.alignTitle('center');
            $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
            $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');
            $ionicConfigProvider.platform.ios.views.transition('ios');
            $ionicConfigProvider.platform.android.views.transition('android');
            // LAZY MODULES

            $ocLazyLoadProvider.config({
                debug: true,
                events: true
            });
            // Ionic uses AngularUI Router which uses the concept of states
            // Learn more here: https://github.com/angular-ui/ui-router
            // Set up the various states which the app can be in.
            // Each state's controller can be found in controllers.js
            $stateProvider

                // setup an abstract state for the tabs directive
                .state('tab', {
                    url: '/tab',
                    abstract: true,
                    templateUrl: 'templates/tabs.html'
                })

                // Each tab has its own nav history stack:

                .state('tab.dash', {
                    url: '/dash',
                    views: {
                        'tab-dash': {
                            templateUrl: 'templates/tab-dash.html',
                            prefetchTemplate:false,
                            controller: 'DashCtrl'
                        }
                    },
                    resolve: loadSequence('DashArgs')
                })

                .state('tab.chats', {
                    url: '/chats',
                    views: {
                        'tab-chats': {
                            templateUrl: 'templates/tab-chats.html',
                            prefetchTemplate:false,
                            controller: 'ChatsCtrl'
                        }
                    },
                    resolve: loadSequence('ChatsArgs')
                })
                .state('tab.chat-detail', {
                    url: '/chats/:chatId',
                    views: {
                        'tab-chats': {
                            templateUrl: 'templates/chat-detail.html',
                            prefetchTemplate:false,
                            controller: 'ChatDetailCtrl'
                        }
                    },
                    resolve: loadSequence('ChatDetailArgs')
                })
                .state('tab.account', {
                    url: '/account',
                    views: {
                        'tab-account': {
                            templateUrl: 'templates/tab-account.html',
                            prefetchTemplate:false,
                            controller: 'AccountCtrl'
                        }
                    },
                    resolve: loadSequence('AccountArgs')
                });

            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/tab/dash');
            function loadSequence() {
                var _args = arguments;
                var viewArgs = repeatArgs(_args[0]);
                if(viewArgs){
                    _args = viewArgs
                }else{
                    //console.log("没有找到模块�?")
                }
                function repeatArgs(name){
                    return jsRequires.ViewArgs[name];
                }
                return {
                    deps: ['$ocLazyLoad', '$q',
                        function ($ocLL, $q) {
                            var promise = $q.when(1);
                            for (var i = 0, len = _args.length; i < len; i++) {
                                promise = promiseThen(_args[i]);
                            }
                            return promise;

                            function promiseThen(_arg) {
                                if (typeof _arg == 'function')
                                    return promise.then(_arg);
                                else
                                    return promise.then(function () {
                                        var nowLoad = requiredData(_arg);
                                        if (!nowLoad)
                                            return console.log('Route resolve: Bad resource name [' + _arg + ']');
                                        return $ocLL.load(nowLoad);
                                    });
                            }
                            function requiredData(name) {
                                if(jsRequires.scripts && jsRequires.scripts[name]){
                                    return jsRequires.scripts[name];
                                }else if(jsRequires.IonicCss && jsRequires.IonicCss[name]){
                                    return jsRequires.IonicCss[name];
                                }else if(jsRequires.CssArg && jsRequires.CssArg[name]){
                                    return jsRequires.CssArg[name];
                                }
                            }
                        }]
                };
            }
        }]);
