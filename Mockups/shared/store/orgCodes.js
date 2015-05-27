Ext.define('Shared.store.orgCodes', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'orgCodes',
            data: [
                {
                    org: 'fugit'
                },
                {
                    org: 'inventore'
                },
                {
                    org: 'et'
                }
            ],
            fields: [
                {
                    name: 'org'
                }
            ]
        }, cfg)]);
    }
});