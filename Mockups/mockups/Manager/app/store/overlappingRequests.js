Ext.define('MyApp.store.overlappingRequests', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'overlappingRequests',
            data: [
                {
                    name: 'voluptatem',
                    requested: '5/23/2009',
                    start: '2/6/2007',
                    end: '8/2/2004'
                },
                {
                    name: 'quas',
                    requested: '12/14/2003',
                    start: '5/5/2011',
                    end: '3/11/2005'
                },
                {
                    name: 'est',
                    requested: '11/28/2009',
                    start: '11/25/2008',
                    end: '9/24/2002'
                },
                {
                    name: 'corporis',
                    requested: '2/12/2001',
                    start: '1/17/2001',
                    end: '5/8/2001'
                },
                {
                    name: 'sint',
                    requested: '1/26/2008',
                    start: '6/19/2006',
                    end: '12/4/2012'
                },
                {
                    name: 'sit',
                    requested: '1/21/2002',
                    start: '5/8/2006',
                    end: '12/12/2002'
                },
                {
                    name: 'ipsa',
                    requested: '6/11/2010',
                    start: '5/10/2008',
                    end: '9/23/2006'
                },
                {
                    name: 'quis',
                    requested: '8/2/2002',
                    start: '4/9/2006',
                    end: '10/21/2010'
                },
                {
                    name: 'similique',
                    requested: '12/8/2003',
                    start: '8/21/2006',
                    end: '12/27/2001'
                },
                {
                    name: 'dolor',
                    requested: '11/3/2007',
                    start: '10/8/2003',
                    end: '5/3/2012'
                },
                {
                    name: 'omnis',
                    requested: '4/5/2005',
                    start: '8/18/2001',
                    end: '7/13/2007'
                },
                {
                    name: 'reprehenderit',
                    requested: '6/13/2011',
                    start: '7/2/2005',
                    end: '6/6/2007'
                },
                {
                    name: 'voluptatum',
                    requested: '2/27/2014',
                    start: '3/17/2004',
                    end: '11/21/2002'
                },
                {
                    name: 'ullam',
                    requested: '8/2/2006',
                    start: '7/6/2003',
                    end: '1/20/2010'
                },
                {
                    name: 'voluptas',
                    requested: '5/26/2007',
                    start: '12/24/2005',
                    end: '12/2/2009'
                }
            ],
            fields: [
                {
                    type: 'string',
                    name: 'name'
                },
                {
                    type: 'date',
                    name: 'requested'
                },
                {
                    type: 'date',
                    name: 'start'
                },
                {
                    type: 'date',
                    name: 'end'
                }
            ]
        }, cfg)]);
    }
});