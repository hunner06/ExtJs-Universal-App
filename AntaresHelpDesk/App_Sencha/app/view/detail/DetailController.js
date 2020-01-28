Ext.define('AntaresHelpDesk.view.detail.DetailController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.detail',
    routes: {
        'detail-:id': 'setDetailId'
    },
    setDetailId: function (id) {
        var panel = this.getView()
        panel.setTitle('Details For Ticket' + '  #' + id);
    }

   
});