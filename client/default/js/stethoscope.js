define( [
'backbone',
'jquery'
], function ( Backbone, $ ) {

    var Stethoscope = function ( heartbeatDef ) {
        this.settings = $.extend( {
            type : "GET",
            dataType : "json",
            timeout : 5000
        }, heartbeatDef );
    };

    $.extend( Stethoscope.prototype, Backbone.Events, {
        checkHeartbeat : function () {
            var self = this;
            self.trigger( 'checking-heartbeat' );
            self.checkCloud(function(){
                self.trigger( 'heartbeat' );
            },function(){
                self.checkNetwork(function(){
                    self.trigger( 'no-cloud' );
                },function(){
                    self.trigger( 'no-heartbeat' );
                });
            });
        },

        checkCloud: function(success, error) {
            $fh.act({
                act: "heartbeat",
                req: {}
            }, function(res){
                return success();
            }, function(err){
                return error();
            });

        },
        checkNetwork: function(success, error) {
            var img = new Image();
            img.onload = function() {return success();};
            img.onerror = function() {return error();};
            img.src = "http://www.feedhenry.com/wp-content/themes/feedhenry/images/logo.gif";
        }
    });

    return Stethoscope;
} );