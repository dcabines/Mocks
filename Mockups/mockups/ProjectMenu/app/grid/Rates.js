Ext.define('MyApp.grid.Rates', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.Rates',

	columns: [
		{
			header: 'Rate Eff Start',
			dataIndex: 'effdt'
		},
		{
			header: 'Price List',
			dataIndex: 'price_list_name'
		},
		{
			header: 'Supplier',
			dataIndex: 'supplier'
		},
		{
			header: 'Rate Code',
			dataIndex: 'rate_code'
		},
		{
			header: 'Shift',
			dataIndex: 'shift'
		},
		{
			header: 'Description',
			dataIndex: 'billable_job_title'
		},
		{
			header: 'UPC',
			dataIndex: 'upc'
		},
		{
			header: 'UPC Eff Date',
			dataIndex: 'upc_effdt'
		},
		{
			header: 'Cost ST',
			dataIndex: 'cost_st'
		},
		{
			header: 'Cost OT',
			dataIndex: 'cost_ot'
		},
		{
			header: 'Cost DT',
			dataIndex: 'cost_dt'
		},
		{
			header: 'Cost Per Diem',
			dataIndex: 'cost_perdiem'
		},
		{
			header: 'Cost Mileage',
			dataIndex: 'cost_mileage'
		},
		{
			header: 'Cost Per Diem Taxable',
			dataIndex: 'cost_perdiem_taxable'
		},
		{
			header: 'Cost Mileage Taxable',
			dataIndex: 'cost_mileage_taxable'
		},
		{
			header: 'Bill ST',
			dataIndex: 'bill_st'
		},
		{
			header: 'Bill OT',
			dataIndex: 'bill_ot'
		},
		{
			header: 'Bill DT',
			dataIndex: 'bill_dt'
		},
		{
			header: 'Bill Per Diem',
			dataIndex: 'bill_perdiem'
		},
		{
			header: 'Bill Mileage',
			dataIndex: 'bill_mileage'
		},
		{
			header: 'Pay ST',
			dataIndex: 'pay_st'
		},
		{
			header: 'Pay OT',
			dataIndex: 'pay_ot'
		},
		{
			header: 'Pay DT',
			dataIndex: 'pay_dt'
		},
		{
			header: 'Expiration Date',
			dataIndex: 'expdt'
		}
	]
});