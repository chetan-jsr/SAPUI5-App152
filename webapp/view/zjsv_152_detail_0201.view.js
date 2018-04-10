sap.ui.jsview("sapui5.app152.view.zjsv_152_detail_0201", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf sapui5.app152.view.zjsv_152_detail_0201
	 */
	getControllerName: function() {
		return "sapui5.app152.controller.zjsv_152_detail_0201";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf sapui5.app152.view.zjsv_152_detail_0201
	 */
	createContent: function(oController) {
		
		var oES5BPList = new sap.m.List( "idES5BPList", // string
											{
				items: {
							path : "ES5>/BusinessPartnerCollection",
							template :  new sap.m.ObjectListItem( "idES5BPObjectListItem", // string
																	{
																		title: "{ES5>BusinessPartnerID}", // string
																		intro: "{ES5>BusinessPartnerRoleCode}", // string
																		number: "{ES5>TelephoneNumber}", // string
																		type: sap.m.ListType.Active, // sap.m.ListType
																		press: [ oController.onSelBP, oController], // function|array
																		attributes: [			 // sap.m.ObjectAttribute[]
																						{	"text": "{ES5>Company}" }
																						]
																	})
				} 
			});
		
		return new sap.m.Page({
			title:"{i18n>ES5BPTitle}",
			content: [oES5BPList]
		});
	}

});