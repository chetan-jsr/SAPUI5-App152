sap.ui.jsview("sapui5.app152.view.zjsv_152_detail_0203", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf sapui5.app152.view.zjsv_152_detail_0203
	 */
	getControllerName: function() {
		return "sapui5.app152.controller.zjsv_152_detail_0203";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf sapui5.app152.view.zjsv_152_detail_0203
	 */
	createContent: function(oController) {
		
		var oListProd = new sap.m.List("ES4ProdList", {
			items: {
				path: "ES4>/ProductSet",
				template: new sap.m.ObjectListItem("ES4ProdListItem", // string
					{
						title: "{ES4>Name}", // string
						intro: "{ES4>Category}", // string
						// number: "{ES4>Price}",	
						number: "{ parts: [ {path: 'ES4>Price'},{path: 'ES4>CurrencyCode'}	], type: 'sap.ui.model.type.Currency', formatOptions: { showMeasure: true, currencyCode: false } }",
						// numberUnit: "{ES4>CurrencyCode}",
						numberState: "{= ${ES4>Price} > 1000 ? 'Warning' : 'Success' }",
						type: sap.m.ListType.Active, // sap.m.ListType
						press: [oController.onSelProd, oController], // function|array
						attributes: [ // sap.m.ObjectAttribute[]
							{
								"text": "{ES4>ProductID}"
							}
						],
						firstStatus: {
							text: "{ES4>SupplierName}"
						}
					})
			}
		});
		
		
		
		return new sap.m.Page({
								title:"{i18n>ES5SOTitle}",
								content: [oListProd]
							});
		
	}

});