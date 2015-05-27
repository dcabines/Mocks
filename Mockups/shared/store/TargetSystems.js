Ext.define('Shared.store.TargetSystems', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'TargetSystems',
            data: [
                {
                    system: 'quibusdam'
                },
                {
                    system: 'unde'
                },
                {
                    system: 'qui'
                },
                {
                    system: 'aut'
                },
                {
                    system: 'autem'
                },
                {
                    system: 'est'
                },
                {
                    system: 'vel'
                },
                {
                    system: 'optio'
                },
                {
                    system: 'numquam'
                },
                {
                    system: 'enim'
                },
                {
                    system: 'molestias'
                },
                {
                    system: 'earum'
                },
                {
                    system: 'ullam'
                },
                {
                    system: 'illo'
                },
                {
                    system: 'tempora'
                }
            ],
            fields: [
                {
                    name: 'system'
                }
            ]
        }, cfg)]);
    }
});