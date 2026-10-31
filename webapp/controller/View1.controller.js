sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("nwproductsdata.controller.View1", {
        onInit() {
          //this is the code to call the Northwind Odata Service  
          var oModel = this.getOwnerComponent().getModel();
          oModel.read('/Products', {
            success : (odata) => {
                debugger;
                var json1 = new sap.ui.model.json.JSONModel();
                debugger;
                json1.setData(odata.results);
                debugger;
                //data binding to the view
                this.getView().setModel(json1,'prod');
            },
            error : (err) => {

            }
          });
        },
      
    });
});
