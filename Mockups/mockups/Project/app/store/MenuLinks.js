Ext.define('MyApp.store.MenuLinks', {
	extend: 'Ext.data.TreeStore',

	root: {
		expanded: true,
		children: [
			{ text: "Project Details", leaf: true },
			{
				text: "Setup",
				expanded: true,
				children: [
				  { text: "Project Access", leaf: true },
				  { text: "Time Types", leaf: true },
				  { text: "Project Shifts", leaf: true },
				  { text: "Project Activity", leaf: true },
				  { text: "General Orders", leaf: true },
				  { text: "Rates Setup", leaf: true },
				  { text: "Crew Master Setup", leaf: true },
				  { text: "Crew Setup", leaf: true },
				  { text: "OT Billing Rules", leaf: true },
				  { text: "Notifications", leaf: true },
				  { text: "Attachments", leaf: true }
				]
			},
			{
				text: "Financial",
				expanded: true,
				children: [
				  { text: "Budget", leaf: true },
				  { text: "Daily Spend Plan", leaf: true },
				  { text: "Est. Budget Rollup", leaf: true },
				  { text: "Estimated Budget", leaf: true },
				]
			},
			{
				text: "Billing And Cost",
				expanded: true,
				children: [
				  { text: "Timesheets", leaf: true },
				  { text: "Audit", leaf: true },
				  { text: "Bonus Entry", leaf: true },
				  { text: "Employee Expenses", leaf: true },
				  { text: "Misc Expenses", leaf: true },
				  { text: "Missing Costs", leaf: true },
				  { text: "Tools Import", leaf: true },
				  { text: "Purchase Orders", leaf: true },
				  { text: "Timeclock", leaf: true },
				]
			},
			{ text: "Billing", leaf: true },
			{ text: "Notes", leaf: true },
			{ text: "Workflow", leaf: true },
			{ text: "Reports", leaf: true }
		]
	}
});