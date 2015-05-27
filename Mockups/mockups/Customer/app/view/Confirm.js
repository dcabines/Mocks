Ext.define('MyApp.view.Confirm', {
	extend: 'Ext.window.Window',
	alias: 'widget.Confirm',

	draggable: false,
	resizable: false,
	width: 550,
	title: 'Confirm Changes',
	bodyPadding: 10,
	modal: true,

	items: [
		{
			xtype: 'label',
			text: 'You are about to alter the PTO settings for Bob Dobbs. Are you sure you want to continue?'
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