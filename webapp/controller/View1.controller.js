sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("nwproductsdata.controller.View1", {
        //lifecycle functions
        onInit() {
          //this is the code to call the Northwind Odata Service  
          //Aggregation Binding
          var oModel = this.getOwnerComponent().getModel();
          oModel.read('/Products', {
            success : (odata) => {
                var json1 = new sap.ui.model.json.JSONModel();
                json1.setData(odata.results);
                //data binding to the view
                this.getView().setModel(json1,'prod');
            },
            error : (err) => {

            }
          });
       
       var emprecord = {
        "empname" : "Suman",
        "empcountry" : "India"
       };
       var json2 = new JSONModel();
       json2.setData(emprecord);
       this.getView().setModel(json2,"emp");
        //property binding
       this.byId('id1').bindProperty('text', 'emp>/empname');
       
        //Element Binding
        this.byId('SimpleFormDisplay354').bindElement('emp>/');
        },
        //lifecycle functions
      onAfterRendering : function ( ) { 
        
      },
        //lifecycle functions
      onBeforeRendering : function ( ) {

      },

       //lifecycle functions
      onExit : function ( ) {

      },
      //Navigation to view 2 , added routes and targets in manifest.json 
      _toview2 : function ( ) {
        this.oRuter = this.getOwnerComponent().getRouter().navTo("RouteView2");
      },

    });
});
