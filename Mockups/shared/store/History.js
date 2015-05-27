Ext.define('Shared.store.History', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'History',
            data: [
                {
                    action: 'corrupti',
                    value: 519.56,
                    date: '2/4/2012',
                    admin: 'eaque'
                },
                {
                    action: 'porro',
                    value: 583.27,
                    date: '10/2/2005',
                    admin: 'vel'
                },
                {
                    action: 'placeat',
                    value: 937.87,
                    date: '8/3/2007',
                    admin: 'impedit'
                },
                {
                    action: 'quia',
                    value: 448.47,
                    date: '6/1/2012',
                    admin: 'omnis'
                },
                {
                    action: 'beatae',
                    value: 639.02,
                    date: '5/6/2013',
                    admin: 'voluptas'
                },
                {
                    action: 'quod',
                    value: 934.18,
                    date: '8/9/2010',
                    admin: 'sint'
                },
                {
                    action: 'totam',
                    value: 52.19,
                    date: '7/19/2009',
                    admin: 'dolorem'
                },
                {
                    action: 'quo',
                    value: 86.23,
                    date: '2/14/2006',
                    admin: 'illum'
                },
                {
                    action: 'quisquam',
                    value: 593.11,
                    date: '1/15/2014',
                    admin: 'culpa'
                },
                {
                    action: 'quam',
                    value: 289.89,
                    date: '5/12/2004',
                    admin: 'ad'
                },
                {
                    action: 'dolor',
                    value: 319.12,
                    date: '7/21/2012',
                    admin: 'sit'
                },
                {
                    action: 'natus',
                    value: 490.73,
                    date: '10/6/2008',
                    admin: 'minima'
                },
                {
                    action: 'nemo',
                    value: 565.82,
                    date: '1/21/2014',
                    admin: 'est'
                },
                {
                    action: 'laudantium',
                    value: 56.22,
                    date: '1/26/2006',
                    admin: 'pariatur'
                },
                {
                    action: 'omnis',
                    value: 516.65,
                    date: '5/19/2012',
                    admin: 'rerum'
                }
            ],
            fields: [
                {
                    type: 'string',
                    name: 'action'
                },
                {
                    type: 'float',
                    name: 'value'
                },
                {
                    type: 'date',
                    name: 'date'
                },
                {
                    type: 'string',
                    name: 'admin'
                }
            ]
        }, cfg)]);
    }
});