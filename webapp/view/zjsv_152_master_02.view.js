sap.ui.jsview("sapui5.app152.view.zjsv_152_master_02", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf sapui5.app152.view.zjsv_152_master_02
	 */
	getControllerName: function() {
		return "sapui5.app152.controller.zjsv_152_master_02";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf sapui5.app152.view.zjsv_152_master_02
	 */
	createContent: function(oController) {
		
		var oListES5 = new sap.m.List("idListES5", // string
			{
				items: {  
							path:"ES5List>/EntitySets",
							template: 	new sap.m.ObjectListItem( "idES5ObjectList", // string
																	{ title: "{ES5List>Entity}", // string
																		type: sap.m.ListType.Active, // sap.m.ListType
																		press: [ oController.onSelES5Entity, oController] // function|array
																	})
				} 
			});
		
		
		
		return new sap.m.Page({
			title:"{i18n>masterPageES5}",
			content:[oListES5]
		});
		
		
	}

});