Ext.define('MyApp.view.Feature', {
	extend: 'Ext.window.Window',
	alias: 'widget.Feature',

	layout: 'form',

	draggable: false,
	resizable: false,
	modal: true,
	bodyPadding: 10,

	items: [
		{
			xtype: 'displayfield',
			fieldLabel: 'Admin',
			value: 'Bob Dobbs'
		},
		{
			xtype: 'combobox',
			fieldLabel: 'Feature',
			multiSelect: true,
			allowBlank: false,
			displayField: 'name',
			store: {
				xtype: 'arraystore',
				fields: ['name'],
				data: [['OBO'], ['Delegate'], ['Email Copy'], ['Reports']]
			}
		},
		{
			xtype: 'textfield',
			fieldLabel: 'Org Code',
			allowBlank: false
		},
		{
			xtype: 'checkbox',
			fieldLabel: 'Include Suborgs'
		}
	],

	buttons: [
		{
			xtype: 'button',
			text: 'Add',
			handler: function () {
				this.up('Feature').close();
			}
		},
		{
			xtype: 'button',
			text: 'Cancel',
			handler: function () {
				this.up('Feature').close();
			}
		}
	]

});