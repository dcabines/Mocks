Ext.define('MyApp.view.AddPunch', {
	extend: 'Ext.window.Window',
	alias: 'widget.AddPunch',

	draggable: false,
	resizable: false,
	width: 320,
	title: 'Add Custom Punch',
	bodyPadding: 10,
	modal: true,

	layout: {
		type: 'hbox',
		align: 'stretch'
	},

	items: [
		{
			xtype: 'timepicker',
			width: 100,
			height: 100,
			margin:'0 10px 0 0'
		},
		{
			xtype: 'datepicker'
		}
	],
	dockedItems: [
		{
			xtype: 'toolbar',
			dock: 'bottom',
			ui: 'footer',
			layout: {
				type: 'hbox',
				pack: 'end'
			},
			items: [
				{
					xtype: 'button',
					text: 'Save'
				},
				{
					xtype: 'button',
					text: 'Cancel'
				}
			]
		}
	]

});