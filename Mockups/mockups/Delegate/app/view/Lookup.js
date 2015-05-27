Ext.define('MyApp.view.Lookup', {
	extend: 'Ext.window.Window',
	alias: 'widget.Lookup',

	draggable: false,
	resizable: false,
	modal: true,
	width: 300,

	layout: {
		type: 'vbox',
		align: 'stretch'
	},

	items: [
		{
			xtype: 'container',
			layout: 'form',
			style:'padding: 10px;',
			items: [
				{
					xtype: 'textfield',
					fieldLabel: 'GID'
				},
				{
					xtype: 'textfield',
					fieldLabel: 'Name'
				}
			]
		},
		{
			xtype: 'grid',
			border: false,
			height: 150,
			store: {
				xtype: 'store',
				fields: ['gid', 'name'],
				data: [
					{ gid: '123', name: 'Bob Dobbs' },
					{ gid: '123', name: 'Mary Joe' },
					{ gid: '123', name: 'Jim Bob' },
					{ gid: '123', name: 'Billy Bob' },
					{ gid: '123', name: 'Janet Mary Smith' },
					{ gid: '123', name: 'Bob Jones' },
					{ gid: '123', name: 'Joe James' }
				]
			},
			columns: [
				{
					text: 'GID',
					dataIndex: 'gid'
				},
				{
					text: 'Name',
					dataIndex: 'name',
					flex: 1
				}
			]
		}
	],
	buttons: [
		{
			xtype: 'button',
			text: 'Add',
			handler: function () {
				this.up('Lookup').close();

				var window = Ext.create({
					xtype: 'Feature',
					title: 'Edit Feature'
				});
				window.show();
			}
		},
		{
			xtype: 'button',
			text: 'Cancel',
			handler: function () {
				this.up('Lookup').close();
			}
		}
	]

});