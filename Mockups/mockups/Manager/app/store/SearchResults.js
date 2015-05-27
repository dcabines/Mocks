Ext.define('MyApp.store.SearchResults', {
	extend: 'Ext.data.Store',

	constructor: function (cfg) {
		var me = this;
		cfg = cfg || {};
		me.callParent([Ext.apply({
			storeId: 'SearchResults',
			data: [
				{
					approved: false,
					denied: true,
					forwarded: false,
					type: 'praesentium',
					transid: 'quo',
					wedate: '5/21/2014',
					name: 'magni',
					totalAmount: 287.42,
					createdby: 'eaque',
					createdon: '7/7/2007',
					approver: 'nulla',
					formtype: 'ducimus'
				},
				{
					approved: false,
					denied: false,
					forwarded: false,
					type: 'aut',
					transid: 'distinctio',
					wedate: '1/17/2006',
					name: 'porro',
					totalAmount: 743.47,
					createdby: 'commodi',
					createdon: '4/1/2011',
					approver: 'nostrum',
					formtype: 'explicabo'
				},
				{
					approved: false,
					denied: false,
					forwarded: true,
					type: 'enim',
					transid: 'esse',
					wedate: '4/5/2012',
					name: 'ratione',
					totalAmount: 834.56,
					createdby: 'nihil',
					createdon: '6/18/2013',
					approver: 'iste',
					formtype: 'molestiae'
				},
				{
					approved: true,
					denied: true,
					forwarded: false,
					type: 'quis',
					transid: 'eius',
					wedate: '11/19/2012',
					name: 'accusantium',
					totalAmount: 349.02,
					createdby: 'architecto',
					createdon: '8/7/2011',
					approver: 'quos',
					formtype: 'cupiditate'
				},
				{
					approved: true,
					denied: true,
					forwarded: true,
					type: 'sit',
					transid: 'quae',
					wedate: '5/17/2012',
					name: 'est',
					totalAmount: 467.95,
					createdby: 'eos',
					createdon: '12/1/2009',
					approver: 'asperiores',
					formtype: 'est'
				},
				{
					approved: false,
					denied: true,
					forwarded: true,
					type: 'dicta',
					transid: 'aut',
					wedate: '10/13/2014',
					name: 'deleniti',
					totalAmount: 369.8,
					createdby: 'veniam',
					createdon: '12/17/2014',
					approver: 'sed',
					formtype: 'voluptates'
				},
				{
					approved: false,
					denied: false,
					forwarded: true,
					type: 'aut',
					transid: 'non',
					wedate: '4/11/2005',
					name: 'dicta',
					totalAmount: 198.9,
					createdby: 'aut',
					createdon: '6/18/2009',
					approver: 'atque',
					formtype: 'exercitationem'
				},
				{
					approved: true,
					denied: true,
					forwarded: false,
					type: 'atque',
					transid: 'et',
					wedate: '8/2/2003',
					name: 'ut',
					totalAmount: 954.51,
					createdby: 'cum',
					createdon: '4/12/2007',
					approver: 'neque',
					formtype: 'placeat'
				},
				{
					approved: false,
					denied: true,
					forwarded: false,
					type: 'quo',
					transid: 'dolores',
					wedate: '12/20/2003',
					name: 'aut',
					totalAmount: 104.33,
					createdby: 'perferendis',
					createdon: '11/18/2002',
					approver: 'praesentium',
					formtype: 'rem'
				},
				{
					approved: true,
					denied: false,
					forwarded: false,
					type: 'perferendis',
					transid: 'quos',
					wedate: '6/10/2013',
					name: 'debitis',
					totalAmount: 221.69,
					createdby: 'quia',
					createdon: '4/24/2014',
					approver: 'sunt',
					formtype: 'voluptas'
				},
				{
					approved: true,
					denied: true,
					forwarded: true,
					type: 'aliquid',
					transid: 'voluptatem',
					wedate: '7/17/2008',
					name: 'non',
					totalAmount: 126.64,
					createdby: 'sunt',
					createdon: '6/22/2012',
					approver: 'eveniet',
					formtype: 'dolores'
				},
				{
					approved: false,
					denied: true,
					forwarded: false,
					type: 'qui',
					transid: 'aut',
					wedate: '5/15/2011',
					name: 'ipsam',
					totalAmount: 996.21,
					createdby: 'officia',
					createdon: '5/5/2001',
					approver: 'aut',
					formtype: 'molestiae'
				},
				{
					approved: false,
					denied: false,
					forwarded: false,
					type: 'magnam',
					transid: 'sint',
					wedate: '11/12/2001',
					name: 'non',
					totalAmount: 981.72,
					createdby: 'at',
					createdon: '4/20/2012',
					approver: 'autem',
					formtype: 'impedit'
				},
				{
					approved: true,
					denied: false,
					forwarded: false,
					type: 'error',
					transid: 'ipsam',
					wedate: '12/12/2006',
					name: 'labore',
					totalAmount: 936.9,
					createdby: 'libero',
					createdon: '2/7/2009',
					approver: 'adipisci',
					formtype: 'et'
				},
				{
					approved: false,
					denied: true,
					forwarded: true,
					type: 'aut',
					transid: 'esse',
					wedate: '5/28/2004',
					name: 'aspernatur',
					totalAmount: 105.43,
					createdby: 'ea',
					createdon: '7/11/2014',
					approver: 'qui',
					formtype: 'pariatur'
				},
				{
					approved: false,
					denied: false,
					forwarded: true,
					type: 'sed',
					transid: 'impedit',
					wedate: '3/20/2002',
					name: 'omnis',
					totalAmount: 429.67,
					createdby: 'iste',
					createdon: '8/17/2001',
					approver: 'consequatur',
					formtype: 'voluptas'
				},
				{
					approved: true,
					denied: false,
					forwarded: true,
					type: 'libero',
					transid: 'aspernatur',
					wedate: '7/22/2002',
					name: 'sit',
					totalAmount: 515.48,
					createdby: 'dolore',
					createdon: '11/23/2011',
					approver: 'non',
					formtype: 'eaque'
				},
				{
					approved: true,
					denied: false,
					forwarded: true,
					type: 'eius',
					transid: 'et',
					wedate: '5/7/2004',
					name: 'sint',
					totalAmount: 828.78,
					createdby: 'ullam',
					createdon: '12/26/2009',
					approver: 'nulla',
					formtype: 'illo'
				},
				{
					approved: false,
					denied: false,
					forwarded: true,
					type: 'suscipit',
					transid: 'quaerat',
					wedate: '2/16/2002',
					name: 'velit',
					totalAmount: 571.11,
					createdby: 'veniam',
					createdon: '9/10/2006',
					approver: 'itaque',
					formtype: 'hic'
				},
				{
					approved: false,
					denied: false,
					forwarded: false,
					type: 'sed',
					transid: 'et',
					wedate: '9/22/2006',
					name: 'alias',
					totalAmount: 420.99,
					createdby: 'et',
					createdon: '7/10/2006',
					approver: 'alias',
					formtype: 'ratione'
				},
				{
					approved: false,
					denied: false,
					forwarded: true,
					type: 'aspernatur',
					transid: 'et',
					wedate: '1/2/2013',
					name: 'labore',
					totalAmount: 139.94,
					createdby: 'neque',
					createdon: '6/1/2013',
					approver: 'voluptas',
					formtype: 'quisquam'
				},
				{
					approved: true,
					denied: true,
					forwarded: false,
					type: 'quod',
					transid: 'tenetur',
					wedate: '5/16/2006',
					name: 'dolores',
					totalAmount: 638.2,
					createdby: 'iure',
					createdon: '3/6/2012',
					approver: 'voluptatibus',
					formtype: 'sapiente'
				},
				{
					approved: true,
					denied: false,
					forwarded: false,
					type: 'voluptatibus',
					transid: 'vitae',
					wedate: '12/11/2013',
					name: 'in',
					totalAmount: 141.7,
					createdby: 'animi',
					createdon: '9/13/2004',
					approver: 'enim',
					formtype: 'omnis'
				},
				{
					approved: true,
					denied: true,
					forwarded: true,
					type: 'cum',
					transid: 'quasi',
					wedate: '10/3/2009',
					name: 'corrupti',
					totalAmount: 922.15,
					createdby: 'et',
					createdon: '6/1/2006',
					approver: 'nulla',
					formtype: 'modi'
				},
				{
					approved: false,
					denied: true,
					forwarded: false,
					type: 'aut',
					transid: 'hic',
					wedate: '12/20/2009',
					name: 'modi',
					totalAmount: 362.82,
					createdby: 'laudantium',
					createdon: '3/28/2009',
					approver: 'sunt',
					formtype: 'vero'
				},
				{
					approved: false,
					denied: false,
					forwarded: true,
					type: 'neque',
					transid: 'voluptas',
					wedate: '2/5/2011',
					name: 'dolore',
					totalAmount: 256.04,
					createdby: 'dolores',
					createdon: '4/10/2011',
					approver: 'sed',
					formtype: 'mollitia'
				},
				{
					approved: true,
					denied: false,
					forwarded: false,
					type: 'non',
					transid: 'hic',
					wedate: '1/25/2012',
					name: 'rerum',
					totalAmount: 95.96,
					createdby: 'adipisci',
					createdon: '10/19/2005',
					approver: 'ut',
					formtype: 'at'
				},
				{
					approved: true,
					denied: true,
					forwarded: false,
					type: 'corrupti',
					transid: 'qui',
					wedate: '12/24/2009',
					name: 'et',
					totalAmount: 592.34,
					createdby: 'sed',
					createdon: '11/19/2009',
					approver: 'aut',
					formtype: 'illo'
				},
				{
					approved: false,
					denied: true,
					forwarded: false,
					type: 'sunt',
					transid: 'pariatur',
					wedate: '11/28/2011',
					name: 'quas',
					totalAmount: 233.87,
					createdby: 'rem',
					createdon: '7/21/2003',
					approver: 'eveniet',
					formtype: 'est'
				},
				{
					approved: true,
					denied: true,
					forwarded: false,
					type: 'voluptatem',
					transid: 'ut',
					wedate: '12/16/2009',
					name: 'occaecati',
					totalAmount: 250.67,
					createdby: 'sit',
					createdon: '9/22/2003',
					approver: 'repellat',
					formtype: 'eum'
				}
			],
			fields: [
				{
					type: 'boolean',
					name: 'approved'
				},
				{
					type: 'boolean',
					name: 'denied'
				},
				{
					type: 'boolean',
					name: 'forwarded'
				},
				{
					type: 'string',
					name: 'type'
				},
				{
					type: 'string',
					name: 'transid'
				},
				{
					type: 'date',
					name: 'wedate'
				},
				{
					type: 'string',
					name: 'name'
				},
				{
					type: 'float',
					name: 'totalAmount'
				},
				{
					type: 'string',
					name: 'createdby'
				},
				{
					type: 'date',
					name: 'createdon'
				},
				{
					type: 'string',
					name: 'approver'
				},
				{
					type: 'string',
					name: 'formtype'
				}
			]
		}, cfg)]);
	}
});