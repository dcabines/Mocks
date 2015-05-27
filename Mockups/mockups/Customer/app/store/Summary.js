Ext.define('MyApp.store.Summary', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'Summary',
            data: [
                {
                    month: 'January',
                    tenure: '13y 0m',
                    bank: 123.45,
                    requested: 0,
                    spent: 0,
                    rate: 16.67
                },
                {
                    month: 'February',
                    tenure: '13y 1m',
                    bank: 140.12,
                    requested: 0,
                    spent: 0,
                    rate: 16.67
                },
                {
                    month: 'March',
                    tenure: '13y 2m',
                    bank: 156.79,
                    requested: 0,
                    spent: 0,
                    rate: 16.67
                },
                {
                    month: 'April',
                    tenure: '13y 3m',
                    bank: 157.46,
                    requested: 16,
                    spent: 16,
                    rate: 16.67
                },
                {
                    month: 'May',
                    tenure: '13y 4m',
                    bank: 174.13,
                    requested: 0,
                    spent: 0,
                    rate: 16.67
                },
                {
                    month: 'June',
                    tenure: '13y 5m',
                    bank: 190.8,
                    requested: 0,
                    spent: 0,
                    rate: 16.67
                },
                {
                    month: 'July',
                    tenure: '13y 6m',
                    bank: 207.47,
                    requested: 0,
                    spent: 0,
                    rate: 16.67
                },
                {
                    month: 'August',
                    tenure: '13y 7m',
                    bank: 224.14,
                    requested: 0,
                    spent: 0,
                    rate: 16.67
                },
                {
                    month: 'September',
                    tenure: '13y 8m',
                    bank: 240.81,
                    requested: 0,
                    spent: 0,
                    rate: 16.67
                }
            ],
            fields: [
                {
                    type: 'string',
                    name: 'month'
                },
                {
                	type: 'string',
                    name: 'tenure'
                },
                {
                    type: 'float',
                    name: 'bank'
                },
                {
                    type: 'float',
                    name: 'requested'
                },
                {
                    type: 'float',
                    name: 'spent'
                },
                {
                    type: 'float',
                    name: 'rate'
                }
            ]
        }, cfg)]);
    }
});