'use strict';

/**
 * Config constant
 */
app.constant('JS_REQUIRES', {
    //*** Scripts
    scripts: {
        //*** Controllers
        'ChatDetailCtrl': 'js/controllers/ChatDetailCtrl.js',
        'ChatsCtrl': 'js/controllers/ChatsCtrl.js',
        'DashCtrl': 'js/controllers/DashCtrl.js',
        'AccountCtrl': 'js/controllers/AccountCtrl.js',
        //*** Services
        'ChatsService': 'js/services/ChatsService.js',
        //***  工具类
        'LbwanUtil': 'js/util/LbwanUtil.js',
        //*** 主件
        'OniBarDirective': 'js/directives/OniBarDirective.js'
    },
    CssArg:{
        ChatsStyle:'css/ChatsStyle.css'
    },
    IonicCss:{
        ActionSheets:'lib/ionic/css/ionic_action_sheets.min.css',
        Animations:'lib/ionic/css/ionic_animations.min.css',
        Badges:'lib/ionic/css/ionic_badges.min.css',
        Bar:'lib/ionic/css/ionic_bar.min.css',
        ButtonBar:'lib/ionic/css/ionic_button_bar.min.css',
        Buttons:'lib/ionic/css/ionic_buttons.min.css',
        Checkbox:'lib/ionic/css/ionic_checkbox.min.css',
        ComplexItems:'lib/ionic/css/ionic_complex_items.min.css',
        Forms:'lib/ionic/css/ionic_forms.min.css',
        Grid:'lib/ionic/css/ionic_grid.min.css',
        Icon:'lib/ionic/css/ionic_icon.min.css',
        ItemButton:'lib/ionic/css/ionic_item_button.min.css',
        ItemIcons:'lib/ionic/css/ionic_item_icons.min.css',
        Items:'lib/ionic/css/ionic_items.min.css',
        ListsAndCard:'lib/ionic/css/ionic_lists_and_card.min.css',
        Loading:'lib/ionic/css/ionic_loading.min.css',
        Menu:'lib/ionic/css/ionic_menu.min.css',
        Modals:'lib/ionic/css/ionic_modals.min.css',
        Platform:'lib/ionic/css/ionic_platform.min.css',
        Popovers:'lib/ionic/css/ionic_popovers.min.css',
        Popups:'lib/ionic/css/ionic_popups.min.css',
        Progress:'lib/ionic/css/ionic_progress.min.css',
        Radio:'lib/ionic/css/ionic_radio.min.css',
        Range:'lib/ionic/css/ionic_range.min.css',
        Select:'lib/ionic/css/ionic_select.min.css',
        Slidebox:'lib/ionic/css/ionic_slidebox.min.css',
        Spinners:'lib/ionic/css/ionic_spinners.min.css',
        Swiper:'lib/ionic/css/ionic_swiper.min.css',
        Tabs:'lib/ionic/css/ionic_tabs.min.css',
        Toggle:'lib/ionic/css/ionic_toggle.min.css',
        Utility:'lib/ionic/css/ionic_utility.min.css'
    },
    ViewArgs: {
        //请注意这个文件是有加载顺序要求的。没按正确的顺序，将会导致错误。
        DashArgs: ['DashCtrl','ActionSheets'],
        ChatsArgs: ['ChatsCtrl','ChatsService','Items','ListsAndCard','ComplexItems','ItemButton','ItemIcons'],
        ChatDetailArgs: ['ChatDetailCtrl','ChatsService'],
        AccountArgs: ['AccountCtrl','ActionSheets']
    }
});
app.constant('VERSION', 1)
app.constant('LOCALSTORAGEKEY',"LBWUSERINFOSTORAGE")
app.constant('LOCALSTORAGEAUTHKEY',"LOCALSTORAGEAUTHKEY")
