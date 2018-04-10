sap.ui.jsview("sapui5.app152.view.zjsv_152_detail_0202", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf sapui5.app152.view.zjsv_152_detail_0202
	 */
	getControllerName: function() {
		return "sapui5.app152.controller.zjsv_152_detail_0202";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf sapui5.app152.view.zjsv_152_detail_0202
	 */
	createContent: function(oController) {

		var oList = new sap.m.List("ES5ProdList", {
			items: {
				path: "ES5>/ProductCollection",
				template: new sap.m.ObjectListItem("idES5ProdObjectListItem", // string
					{
						title: "{ES5>ProductName}", // string
						intro: "{ES5>ProductCategory}", // string
						// number: "{ES5>UnitPrice}",	
						number: "{ parts: [ {path: 'ES5>UnitPrice'},{path: 'ES5>CurrencyCode'}	], type: 'sap.ui.model.type.Currency', formatOptions: { showMeasure: true, currencyCode: false } }",
						numberUnit: "{ES5>CurrencyCode}",
						numberState: "{= ${ES5>UnitPrice} > 1000 ? 'Warning' : 'Success' }",
						type: sap.m.ListType.Active, // sap.m.ListType
						press: [oController.onSelProd, oController], // function|array
						attributes: [ // sap.m.ObjectAttribute[]
							{
								"text": "{ES5>ProductID}"
							}
						],
						firstStatus: {
							text: "{ES5>SupplierName}"
						}
					})
			}
		});

		return new sap.m.Page({
			title: "{i18n>ES5ProdTitle}",
			content: [oList]
		});
	}

});