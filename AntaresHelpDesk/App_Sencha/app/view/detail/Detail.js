Ext.define('AntaresHelpDesk.view.detail.Detail', {
    extend: 'Ext.panel.Panel',
    xtype: 'detail',
    itemId:'detail',

    requires: [
        'AntaresHelpDesk.view.detail.DetailController',
        'AntaresHelpDesk.view.detail.DetailModel',
    ],
    controller: 'detail',
    viewModel: 'detail',
   
    height: 500,
    
    bind: {
        html: '{loremIpsum}',
        title: '{detailTitle}',
    },
    closable: false
});