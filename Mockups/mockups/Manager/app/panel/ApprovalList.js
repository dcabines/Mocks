Ext.define('MyApp.panel.ApprovalList', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.approvalList',
	
	requires: [
		'MyApp.form.AppSearch',
		'MyApp.tab.Details',
		'Shared.grid.AppResults'
	],

	layout: 'border',

	dockedItems: [
		{
			xtype: 'toolbar',
			dock: 'top',
			items: [
				{
					xtype: 'button',
					handler: function (button, e) {
						var search = this.up('panel').down('form');
						var isHidden = search.isHidden();
						search.setHidden(!isHidden);
					},
					text: 'Search'
				},
				{
					xtype: 'button',
					handler: function (button, e) {
						var details = this.up('panel').down('panel[title="Details"]');
						details.toggleCollapse();
					},
					text: 'Details'
				},
				{
					xtype: 'button',
					text: 'Submit'
				},
				{
					xtype: 'tbseparator'
				},
				{
					xtype: 'tbtext',
					text: 'Forward To: Select Approver'
				}
			]
		}
	],
	items: [
		{
			xtype: 'appsearch',
			region: 'north',
			border: false
		},
		{
			xtype: 'appresults',
			region: 'center',
			border: false,
			store: 'SearchResults'
		},
		{
			xtype: 'details',
			title: 'Details',
			region: 'south',
			border: false,
			height: 300,
			split: true,
			collapsed: true,
			collapsible: true,
			floatable: false
		}
	]
});