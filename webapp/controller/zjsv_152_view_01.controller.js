sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/Fragment"
], function(Controller, Fragment) {
	"use strict";

	return Controller.extend("sapui5.app152.controller.zjsv_152_view_01", {
		
		onSelNorthwind: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("nwMP");
		},
		
		onSelES5: function()	{
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("ES5MP");
			
			
		},
		
		onLaunchFragment: function(){
			
                this._Dialog = sap.ui.jsfragment("sapui5.app152.view.zjsf_152_fragment_01",
                                this);
                this._Dialog.open();

			
		}
		
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf sapui5.app152.view.zjsv_152_view_01
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf sapui5.app152.view.zjsv_152_view_01
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf sapui5.app152.view.zjsv_152_view_01
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf sapui5.app152.view.zjsv_152_view_01
		 */
		//	onExit: function() {
		//
		//	}

	});

});