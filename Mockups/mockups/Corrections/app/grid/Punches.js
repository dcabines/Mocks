Ext.define('MyApp.grid.Punches', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.punches',

	tbar: [
		{
			text: 'Save'
		},
		{
			text: 'Cancel'
		},
		'-',
		{
			text: 'Add',
			handler: function () {
				var window = Ext.create('MyApp.view.AddPunch');
				window.show();
			}
		}
	],

	plugins: [{
		ptype: 'cellediting',
		clicksToEdit: 1
	}],

	columns: [
		{
			text: 'Swipe Time',
			dataIndex: 'tin',
			renderer: function (value, metaData) {
				var data = metaData.record.data;
				return data.tin ? data.tin : data.tout;
			},
			flex: 1
		},
		{
			text: 'Location',
			dataIndex: 'location',
			flex: 1
		},
		{
			text: 'Reason Code',
			dataIndex: 'activity',
			flex: 1,
			editor: {
				editable: false,
				xtype: 'combobox',
				displayField: 'name',
				store: {
					xtype: 'store',
					fields: ['name'],
					data: [
						{ name: 'Doctor Note' },
						{ name: 'Non Productive' },
						{ name: 'Late' },
						{ name: 'Left Early' }
					]
				}
			}
		},
		{
			text: 'Approved',
			dataIndex: 'approved',
			editor: {
				editable: false,
				xtype: 'combobox',
				displayField: 'name',
				store: {
					xtype: 'store',
					fields: ['name'],
					data: [{ name: '&nbsp;' }, { name: 'Yes' }, { name: 'No' }]
				},
				listeners: {
					select: function (comp, record, index) {
						if (comp.getValue() == "" || comp.getValue() == "&nbsp;")
							comp.setValue(null);
					}
				}
			}
		}
	]
});