Ext.define('MyApp.panel.Main', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.main',
	controller: 'mycontroller',

	requires: [
		'MyApp.panel.Shell',
		'MyApp.controller.MyController'
	],

	layout: 'border',

	tbar: [
		{
			text: 'Save'
		},
		{
			text: 'Cancel'
		},
		'-',
		{
			text: 'Main',
			
			menu: {
				xtype: 'menu',

				defaults: {
					handler: 'onSelect'
				},

				items: [
					{ text: "Project Details" },
					{ text: "Billing" },
					{ text: "Notes" },
					{ text: "Workflow" },
					{ text: "Reports" }
				]
			}
		},
		{
			text: 'Setup',
			menu: {
				xtype: 'menu',

				defaults: {
					handler: 'onSelect'
				},

				items: [
					{ text: "Project Access" },
					{ text: "Time Types" },
					{ text: "Project Shifts" },
					{ text: "Project Activity" },
					{ text: "General Orders" },
					{ text: "Rates Setup" },
					{ text: "Crew Master Setup" },
					{ text: "Crew Setup" },
					{ text: "OT Billing Rules" },
					{ text: "Notifications" },
					{ text: "Attachments" }
				]
			}
		},
		{
			text: 'Financial',
			menu: {
				xtype: 'menu',

				defaults: {
					handler: 'onSelect'
				},

				items: [
					{ text: "Budget" },
					{ text: "Daily Spend Plan" },
					{ text: "Est. Budget Rollup" },
					{ text: "Estimated Budget" }
				]
			}
		},
		{
			text: 'Billing And Cost',
			menu: {
				xtype: 'menu',

				defaults: {
					handler: 'onSelect'
				},

				items: [
					{ text: "Timesheets" },
					{ text: "Audit" },
					{ text: "Bonus Entry" },
					{ text: "Employee Expenses" },
					{ text: "Misc Expenses" },
					{ text: "Missing Costs" },
					{ text: "Tools Import" },
					{ text: "Purchase Orders" },
					{ text: "Timeclock" }
				]
			}
		}
	],

	items: [
		{
			reference: 'shell',
			title: 'Project Details',
			xtype: 'shell',
			region: 'center',
			border: false
		}
	]
});
