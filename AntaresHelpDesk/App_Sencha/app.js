/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application.
 */
Ext.application({
    name: 'AntaresHelpDesk',
    defaultToken: 'home',
    //launch: function () {
    //    Ext.Msg.alert('Hello Ext JS', 'Hello! Welcome to Ext JS.');
    //}
    stores: [
        // TODO: add global / shared stores here
    ],

    launch: function () {
        //function loadLocale() {

        //    var query = Ext.Object.fromQueryString(location.search),
        //        lang = 'es';

        //    //if (lang === 'pt') {
        //    //    lang = 'pt_BR';
        //    //}

        //    var extJsFile = Ext.util.Format.format("ext/classic/locale/overrides/es/ext-locale-{0}.js", lang);
        //    if (lang !== 'en') {
        //        Ext.Loader.loadScript({ url: extJsFile });
        //    }
        //}

        //loadLocale();
        // It's important to note that this type of application could use
        // any type of storage, i.e., Cookies, LocalStorage, etc.
        var loggedIn;

        // Check to see the current value of the localStorage key
        loggedIn = localStorage.getItem("AHDLoggedIn");

        // This ternary operator determines the value of the TutorialLoggedIn key.
        // If TutorialLoggedIn isn't true, we display the login window,
        // otherwise, we display the main view
        Ext.create({
            xtype: loggedIn ? 'app-main' : 'login'
        });

    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
