Ext.Loader.setConfig({
	disableCaching: false
});

Ext.application({
	name: 'MyApp',

	launch: function () {
		var loader = Ext.getDom('loader');
		document.body.removeChild(loader);

		var menu = Ext.get('menu');
		menu.setStyle('display', 'block');
	}
});