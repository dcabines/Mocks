Ext.define('MyApp.grid.Sample', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.Sample',

	columns: [
		{
			header: 'Budget Type',
			dataIndex: 'budget_type'
		},
		{
			header: 'Job Charge Code',
			dataIndex: 'charge_code'
		},
		{
			header: 'Charge Code Descr',
			dataIndex: 'charge_code_desc'
		},
		{
			header: 'Suffix',
			dataIndex: 'suffix'
		},
		{
			header: 'Suffix Description',
			dataIndex: 'suffix_descr'
		},
		{
			header: 'Budget Date',
			dataIndex: 'budget_date'
		},
		{
			header: 'Budget Amount',
			dataIndex: 'budget_amount'

		},
		{
			header: 'GO Number',
			dataIndex: 'go_num'
		},
		{
			header: 'Sequence Number',
			dataIndex: 'seq_no'
		}
	]
});