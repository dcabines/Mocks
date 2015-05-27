Ext.define('MyApp.controller.MyController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.mycontroller',

	onRemoveClick: function () {
		Ext.Msg.alert('Mockup', 'This will remove an item.');
	},

	onPeopleClick: function () {
		this.getViewModel().get('peopleDialog').show();
	},

	onPermissionsClick: function () {
		this.getViewModel().get('permissionDialog').show();
	},

	onSaveClick: function () {
		Ext.Msg.alert('Mockup', 'This will save changes.');
	},

	onCancelClick: function () {
		Ext.Msg.alert('Mockup', 'This will undo changes.');
	},

	onBeforeDrop: function () {
		//debugger;
	}
});