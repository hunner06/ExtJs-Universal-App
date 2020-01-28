Ext.define('AntaresHelpDesk.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',
    itemId: 'app-main',
    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'AntaresHelpDesk.view.main.MainController',
        'AntaresHelpDesk.view.main.MainModel',
        'AntaresHelpDesk.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',
    plugins: 'viewport',

    //ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'x-fa fa-th-list',
        items: [{
            xtype: 'button',
            bind: {
                text: '{navTitleLogout}',
            },
           
            margin: '10 0',
            handler: 'onClickButton'
        }]
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        itemId: 'home-tab',
        bind: {
            title: '{navTitleHome}',
        },
        
        iconCls: 'x-fa fa-home',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'mainlist'
        }]
        },
        {
            itemId: 'detail-tab',
            bind: {
                title: '{navTitleDetail}',
            },

            iconCls: 'x-fa fa-user',
            items: [{
                xtype: 'detail'
            }]
        },
        {
        itemId: 'users-tab',
        iconCls: 'x-fa fa-user',
        bind: {
            html: '{loremIpsum}',
            title: '{navTitleUsers}',
            }
        },
        {
        itemId: 'groups-tab',
            iconCls: 'x-fa fa-users',
        bind: {
            html: '{loremIpsum}',
            title: '{navTitleGroups}',
        }
        }, {
        itemId: 'settings-tab',
        title: 'Settings',
            iconCls: 'x-fa fa-cog',
        bind: {
            html: '{loremIpsum}',
            title: '{navTitleSettings}',

        }
    }]
});