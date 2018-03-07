sap.ui.jsview("sapui5.app152.view.zjsv_152_view_01", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf sapui5.app152.view.zjsv_152_view_01
	 */
	getControllerName: function() {
		return "sapui5.app152.controller.zjsv_152_view_01";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf sapui5.app152.view.zjsv_152_view_01
	 */
	createContent: function(oController) {
		var oButtonNorthwind = new sap.m.Button("buttonToNW", {
			text: "{i18n>ViewNorthwind}", // string
			press: [oController.onSelNorthwind, oController]
		});

		var oFooter = new sap.m.Bar("footerView01", {
			contentLeft: [], // sap.ui.core.Control
			contentMiddle: [], // sap.ui.core.Control
			contentRight: [oButtonNorthwind] // sap.ui.core.Control
		});

		return new sap.m.Page({
			title: "{i18n>TitleView01}",
			content: [],
			footer: [oFooter]
		});
	}

});