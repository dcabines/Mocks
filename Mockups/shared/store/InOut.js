Ext.define('Shared.store.InOut', {
	extend: 'Ext.data.Store',

	constructor: function (cfg) {
		var me = this;
		cfg = cfg || {};
		me.callParent([Ext.apply({
			storeId: 'InOut',
			data: [
				{
					name: 'Lamar Nguyen',
					bank: 80.96,
					mon: '',
					tues: 'Jury - 8',
					wed: '',
					thur: '',
					fri: 'PTO - 4'
				},
				{
					name: 'Vicki Powers',
					bank: 44.59,
					mon: 'PTO - 8',
					tues: '',
					wed: '',
					thur: '',
					fri: ''
				},
				{
					name: 'Ella Howell',
					bank: 85.28,
					mon: '',
					tues: '',
					wed: '',
					thur: 'PTO - 4',
					fri: ''
				},
				{
					name: 'Lucas Lyons',
					bank: 86.82,
					mon: '',
					tues: '',
					wed: '',
					thur: '',
					fri: ''
				},
				{
					name: 'Willie Mccormick',
					bank: 15.14,
					mon: '',
					tues: '',
					wed: '',
					thur: '',
					fri: ''
				},
				{
					name: 'Inez Barnett',
					bank: 84.76,
					mon: '',
					tues: 'PTO - 8',
					wed: '',
					thur: 'PTO - 4',
					fri: ''
				},
				{
					name: 'Tina Warner',
					bank: 26.48,
					mon: '',
					tues: '',
					wed: '',
					thur: '',
					fri: ''
				},
				{
					name: 'Betty Ramos',
					bank: 33.96,
					mon: '',
					tues: '',
					wed: '',
					thur: '',
					fri: ''
				},
				{
					name: 'Rosa French',
					bank: 57.75,
					mon: '',
					tues: '',
					wed: 'PTO - 4',
					thur: '',
					fri: ''
				},
				{
					name: 'Brandon Brewer',
					bank: 1.98,
					mon: '',
					tues: '',
					wed: '',
					thur: '',
					fri: ''
				},
				{
					name: 'Angel Chandler',
					bank: 91.08,
					mon: '',
					tues: '',
					wed: '',
					thur: '',
					fri: ''
				},
				{
					name: 'Carla Baldwin',
					bank: 11.65,
					mon: '',
					tues: '',
					wed: '',
					thur: '',
					fri: ''
				},
				{
					name: 'Penny Reese',
					bank: 46.82,
					mon: '',
					tues: '',
					wed: 'PTO - 4',
					thur: '',
					fri: ''
				},
				{
					name: 'Andrea Hale',
					bank: 46.35,
					mon: '',
					tues: '',
					wed: 'PTO - 8',
					thur: '',
					fri: ''
				},
				{
					name: 'Angelica Wilkins',
					bank: 35.68,
					mon: '',
					tues: '',
					wed: 'Jury - 8',
					thur: '',
					fri: ''
				},
				{
					name: 'Marlene Mullins',
					bank: 42.5,
					mon: '',
					tues: 'PTO - 4',
					wed: '',
					thur: '',
					fri: ''
				},
				{
					name: 'Julie Doyle',
					bank: 1.67,
					mon: '',
					tues: '',
					wed: '',
					thur: '',
					fri: ''
				},
				{
					name: 'Phil Lewis',
					bank: 70.94,
					mon: '',
					tues: '',
					wed: '',
					thur: '',
					fri: ''
				},
				{
					name: 'Teresa Webb',
					bank: 91.96,
					mon: 'PTO - 4',
					tues: '',
					wed: '',
					thur: '',
					fri: ''
				},
				{
					name: 'Melanie Hopkins',
					bank: 46.9,
					mon: '',
					tues: '',
					wed: '',
					thur: '',
					fri: ''
				},
				{
					name: 'Stanley Francis',
					bank: 2.28,
					mon: '',
					tues: '',
					wed: 'PTO - 8',
					thur: 'PTO - 8',
					fri: 'PTO - 8'
				},
				{
					name: 'Javier Estrada',
					bank: 25.12,
					mon: '',
					tues: 'FH- 8',
					wed: '',
					thur: '',
					fri: ''
				},
				{
					name: 'Hannah Ford',
					bank: 39.87,
					mon: '',
					tues: '',
					wed: '',
					thur: '',
					fri: ''
				},
				{
					name: 'Bert Woods',
					bank: 29.49,
					mon: '',
					tues: '',
					wed: '',
					thur: '',
					fri: ''
				},
				{
					name: 'Fernando Olson',
					bank: 5.5,
					mon: '',
					tues: '',
					wed: '',
					thur: '',
					fri: ''
				},
				{
					name: 'Nathan Robinson',
					bank: 35.75,
					mon: '',
					tues: '',
					wed: '',
					thur: '',
					fri: ''
				},
				{
					name: 'Willie Keller',
					bank: 13.7,
					mon: '',
					tues: '',
					wed: '',
					thur: '',
					fri: ''
				},
				{
					name: 'Roland Kelley',
					bank: 21.67,
					mon: '',
					tues: '',
					wed: '',
					thur: '',
					fri: 'PTO - 8'
				},
				{
					name: 'Leroy Rice',
					bank: 89.45,
					mon: '',
					tues: '',
					wed: '',
					thur: '',
					fri: ''
				},
				{
					name: 'Tyrone Bryan',
					bank: 38.76,
					mon: '',
					tues: '',
					wed: '',
					thur: '',
					fri: ''
				},
				{
					name: 'Adrian Salazar',
					bank: 65.41,
					mon: '',
					tues: '',
					wed: '',
					thur: '',
					fri: ''
				}
			],
			fields: [
				{
					type: 'string',
					name: 'name'
				},
				{
					type: 'float',
					name: 'bank'
				},
				{
					type: 'string',
					name: 'mon'
				},
				{
					type: 'string',
					name: 'tues'
				},
				{
					type: 'string',
					name: 'wed'
				},
				{
					type: 'string',
					name: 'thur'
				},
				{
					type: 'string',
					name: 'fri'
				}
			]
		}, cfg)]);
	}
});