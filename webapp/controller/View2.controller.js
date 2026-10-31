sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("nwproductsdata.controller.View2", {
        //lifecycle functions
        onInit() {
          sap.m.MessageToast.show('You are in view 2');
          }   


    });
});
