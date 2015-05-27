Ext.define('Shared.store.SearchResults', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'SearchResults',
            data: [
                {
                    name: 'voluptatibus',
                    baseRate: 114.62,
                    additionalRate: 303.52,
                    bank: 762.49,
                    carryOver: 423
                },
                {
                    name: 'eaque',
                    baseRate: 915.19,
                    additionalRate: 397.93,
                    bank: 533.16,
                    carryOver: 73
                },
                {
                    name: 'quam',
                    baseRate: 145.59,
                    additionalRate: 691.93,
                    bank: 674.16,
                    carryOver: 276
                },
                {
                    name: 'eveniet',
                    baseRate: 978.72,
                    additionalRate: 774.07,
                    bank: 959.31,
                    carryOver: 937
                },
                {
                    name: 'ea',
                    baseRate: 760.22,
                    additionalRate: 348.75,
                    bank: 283.22,
                    carryOver: 714
                },
                {
                    name: 'consequatur',
                    baseRate: 887.85,
                    additionalRate: 53.94,
                    bank: 255,
                    carryOver: 110
                },
                {
                    name: 'dolorem',
                    baseRate: 200.47,
                    additionalRate: 108.64,
                    bank: 761.43,
                    carryOver: 339
                },
                {
                    name: 'voluptatem',
                    baseRate: 325.51,
                    additionalRate: 731.57,
                    bank: 433.41,
                    carryOver: 514
                },
                {
                    name: 'non',
                    baseRate: 868.43,
                    additionalRate: 544.82,
                    bank: 598.45,
                    carryOver: 177
                },
                {
                    name: 'laboriosam',
                    baseRate: 210.28,
                    additionalRate: 371.34,
                    bank: 764.46,
                    carryOver: 340
                },
                {
                    name: 'est',
                    baseRate: 413.51,
                    additionalRate: 904.58,
                    bank: 952.02,
                    carryOver: 859
                },
                {
                    name: 'voluptas',
                    baseRate: 866.48,
                    additionalRate: 709.47,
                    bank: 174.78,
                    carryOver: 93
                },
                {
                    name: 'tempore',
                    baseRate: 706.27,
                    additionalRate: 195.11,
                    bank: 600.79,
                    carryOver: 879
                },
                {
                    name: 'non',
                    baseRate: 812.01,
                    additionalRate: 729.81,
                    bank: 737.36,
                    carryOver: 220
                },
                {
                    name: 'consequuntur',
                    baseRate: 527.73,
                    additionalRate: 666.66,
                    bank: 142.9,
                    carryOver: 712
                },
                {
                    name: 'aliquid',
                    baseRate: 536.04,
                    additionalRate: 549.4,
                    bank: 198.82,
                    carryOver: 172
                },
                {
                    name: 'iure',
                    baseRate: 987.79,
                    additionalRate: 44.98,
                    bank: 497.77,
                    carryOver: 377
                },
                {
                    name: 'reiciendis',
                    baseRate: 722.87,
                    additionalRate: 639.91,
                    bank: 697.41,
                    carryOver: 980
                },
                {
                    name: 'quia',
                    baseRate: 396.49,
                    additionalRate: 47.95,
                    bank: 52.35,
                    carryOver: 604
                },
                {
                    name: 'ipsam',
                    baseRate: 929.01,
                    additionalRate: 229.13,
                    bank: 742.95,
                    carryOver: 130
                },
                {
                    name: 'qui',
                    baseRate: 870.1,
                    additionalRate: 67.38,
                    bank: 614.7,
                    carryOver: 991
                },
                {
                    name: 'distinctio',
                    baseRate: 667.1,
                    additionalRate: 102.44,
                    bank: 991.9,
                    carryOver: 875
                },
                {
                    name: 'quas',
                    baseRate: 845.85,
                    additionalRate: 158.39,
                    bank: 186.76,
                    carryOver: 816
                },
                {
                    name: 'ut',
                    baseRate: 758.53,
                    additionalRate: 166.14,
                    bank: 595.34,
                    carryOver: 540
                },
                {
                    name: 'consequatur',
                    baseRate: 501.9,
                    additionalRate: 970.87,
                    bank: 581.99,
                    carryOver: 748
                },
                {
                    name: 'labore',
                    baseRate: 178.24,
                    additionalRate: 325.21,
                    bank: 477.2,
                    carryOver: 113
                },
                {
                    name: 'magni',
                    baseRate: 466.8,
                    additionalRate: 598.49,
                    bank: 201.41,
                    carryOver: 725
                },
                {
                    name: 'hic',
                    baseRate: 949.82,
                    additionalRate: 209.04,
                    bank: 886.12,
                    carryOver: 937
                },
                {
                    name: 'perferendis',
                    baseRate: 605.02,
                    additionalRate: 644.53,
                    bank: 357.61,
                    carryOver: 620
                },
                {
                    name: 'maiores',
                    baseRate: 929.31,
                    additionalRate: 132.05,
                    bank: 471.85,
                    carryOver: 471
                }
            ],
            fields: [
                {
                    type: 'string',
                    name: 'name'
                },
                {
                    type: 'float',
                    name: 'baseRate'
                },
                {
                    type: 'float',
                    name: 'additionalRate'
                },
                {
                    type: 'float',
                    name: 'bank'
                },
                {
                    type: 'int',
                    name: 'carryOver'
                }
            ]
        }, cfg)]);
    }
});