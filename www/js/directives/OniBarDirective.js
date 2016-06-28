'use strict';
app.directive('oniBar', [function() {
    return {
        restrict: 'E',
        template:'<ion-header-bar class="bar bar-header" align-title="center"><div class="buttons"><button class="button button-icon icon ion-navicon-round" ></button></div><div class="title"><ion-tabs class="tabs-striped" ><div ng-repeat="item in items"><ion-tab title="{{item.title}}" href="{{item.href}}"></ion-tab></div></ion-tabs></div><div class="buttons"><button class="button button-icon icon ion-ios-search" > </button> </div> </ion-header-bar>',
        replace:true,
        controller: function(){
            var style = window.document.createElement('style');
            style.type = 'text/css';
            style.innerHTML += '.tabs .tab-title{font-family:"微软雅黑" !important;}';
            style.innerHTML += '.tabs-striped .tab-item.tab-item-active, .tabs-striped .tab-item.active, .tabs-striped .tab-item.activated {margin-top: 0px;border-style: solid;border-width: 0 0 3px 0;border-color: #FF7A01; }';
            style.innerHTML += '.tabs-striped .tabs{border-bottom: 0px solid #ddd !important;}';
            style.innerHTML += '.tab-item{font-size: 17px;}';
            style.innerHTML += '.bar .title{margin: 1px 37px;}';
            window.document.getElementsByTagName('head')[0].appendChild(style);
        },
        link: function(scope, element, attrs) {
            scope.items = JSON.parse(attrs.items);
        }
    }
}])