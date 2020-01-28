Ext.define('AntaresHelpDesk.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    routes: {
        'home': 'setTab',
        'detail': 'setTab',
        'detail-:id': 'setTab',
        'users': 'setTab',
        'groups': 'setTab',
        'settings':'setTab',
    },

    control: {
        'app-main': {
            tabchange: function (tabPanel, newCard, oldCard) {
                var newTabToken = newCard.itemId.substring(0, newCard.itemId.indexOf('-'));
                this.redirectTo(newTabToken);
            }
        }
    },
    tabs: function () {
        return this.getView();
    },
    setTab: function () {
        name = window.location.hash.split('#')[1].split('-')[0];
        this.tabs().setActiveTab(name+'-tab');
    },

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    onClickButton: function () {
        // Remove the localStorage key/value
        localStorage.removeItem('AHDLoggedIn');

        // Remove Main View
        this.getView().destroy();

        // Add the Login Window
        Ext.create({
            xtype: 'login'
        });
    }
});