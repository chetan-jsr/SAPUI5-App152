		sap.ui.jsfragment("sapui5.app152.view.zjsf_152_fragment_01", {

			// defines the UI of this View
			createContent: function() {
				// button text is bound to Model, "press" action is bound to Controller's event handler
				return [
					new sap.m.Button("idFragmentButton2",{
						text: 'my Fragment Button'
					}),
					new sap.m.Button("idFragmentButton2", {
						text: 'my second Fragment Button'
					})
				];
			}
		});