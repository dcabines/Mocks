Ext.define('MyApp.store.Requests', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'Requests',
            data: [
                {
                	request: '2/4/2012'
                },
                {
                    request: '2/8/2012'
                },
                {
                    request: '2/12/2012'
                },
                {
                    request: '2/14/2012'
                },
                {
                    request: '2/24/2012'
                }
            ],
            fields: [
                {
                	name: 'request'
                }
            ]
        }, cfg)]);
    }
});