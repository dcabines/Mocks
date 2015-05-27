Ext.define('Shared.grid.AppResults', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.appresults',

	columns: [
		{
			xtype: 'checkcolumn',
			text: 'Approve',
			dataIndex: 'approved'
		},
		{
			xtype: 'checkcolumn',
			text: 'Reject',
			dataIndex: 'denied'
		},
		{
			xtype: 'checkcolumn',
			text: 'Forward',
			dataIndex: 'forwarded'
		},
		{
			xtype: 'gridcolumn',
			dataIndex: 'type',
			text: 'Type',
			flex: 1
		},
		{
			xtype: 'gridcolumn',
			dataIndex: 'transid',
			text: 'Trans ID',
			flex: 1
		},
		{
			xtype: 'datecolumn',
			dataIndex: 'wedate',
			text: 'WeDate',
			flex: 1
		},
		{
			xtype: 'gridcolumn',
			dataIndex: 'name',
			text: 'Employee Name',
			flex: 1
		},
		{
			xtype: 'numbercolumn',
			dataIndex: 'totalAmount',
			text: 'Total Ammount',
			flex: 1
		},
		{
			xtype: 'gridcolumn',
			dataIndex: 'createdby',
			text: 'Created By',
			flex: 1
		},
		{
			xtype: 'datecolumn',
			dataIndex: 'createdon',
			text: 'Created Date'
		},
		{
			xtype: 'gridcolumn',
			dataIndex: 'approver',
			text: 'Approver',
			flex: 1
		},
		{
			xtype: 'gridcolumn',
			dataIndex: 'formtype',
			text: 'Form Type',
			flex: 1
		}
	]
});