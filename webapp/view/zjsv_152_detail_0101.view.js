sap.ui.jsview("sapui5.app152.view.zjsv_152_detail_0101", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf sapui5.app152.view.zjsv_152_detail_0101
	 */
	getControllerName: function() {
		return "sapui5.app152.controller.zjsv_152_detail_0101";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf sapui5.app152.view.zjsv_152_detail_0101
	 */
	createContent: function(oController) {
		var oPage = new sap.m.Page({
			title: "Title",
			content: []
		});

		var app = new sap.m.App("myApp", {
			initialPage: "oPage"
		});
		app.addPage(oPage);
		return app;
	}

});