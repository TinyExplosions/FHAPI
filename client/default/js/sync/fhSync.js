define( [
    'backbone'
], function ( Backbone ) {

    var oldBackboneSync = Backbone.sync;
    Backbone.sync = function( method, model, options ) {
        var self = this;
        var actcall;
        console.log("custom sync, method is",method);

        if ( method === 'create' && model.actRoot) {
            actcall = method+model.actRoot; //createTransaction or similar
            console.log("overridden create!");
            return doAct(actcall,method,model,options);
        } else if ( method === 'update' && model.actRoot) {
            actcall = method+model.actRoot; //updateTransaction or similar
            console.log("overridden update!");
            return doAct(actcall,method,model,options);
        } else if ( method === 'delete' && model.actRoot) {
            actcall = method+model.actRoot; //updateTransaction or similar
            console.log("overridden delete!");
            return doAct(actcall,method,model,options);
        }else {
            return oldBackboneSync.apply(this, [method, model, options]);
        }
    };

    var doAct = function(actcall,method,model,options) {
        App.ajaxManager.mayAct(actcall,model.toJSON(),function(res){
                model.id = res.id;
                if ( method === 'create') {
                    App.offlineStore.save(model);
                } else if ( method === 'update') {
                    App.offlineStore.update(model);
                }
                if(res.error) {
                   return options.error(res.error);
                }
                // model.set({id:res.transactionid},{silent: true});
                return options.success(res);
            },
            function(err){
                return actFailed(err, model, options);
            }
        );
    }

    var actFailed = function( err, model, options) {
        console.log("ARRRGH",model);
        // model.attributes.cid = model.cid;
        // model.id = model.cid;
        App.failedCalls.save(model);
        return options.error(err);
    }

});
