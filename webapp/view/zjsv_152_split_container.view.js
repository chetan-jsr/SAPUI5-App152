sap.ui.jsview("sapui5.app152.view.zjsv_152_split_container", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf sapui5.app152.view.zjsv_152_split_container
	 */
	getControllerName: function() {
		return "sapui5.app152.controller.zjsv_152_split_container";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf sapui5.app152.view.zjsv_152_split_container
	 */
	createContent: function(oController) {
		this.setDisplayBlock(true);
		
		return new sap.m.SplitApp("SplitAppContainer");
	}

});