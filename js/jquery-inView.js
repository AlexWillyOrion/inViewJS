/*

Autore:      Alessandro Manno <alexmanno96@gmail.com>
Descrizione: Plugin jQuery che permette di vedere se un elemento è visibile nel monitor

*/

(function ( $ ) {

	$.fn.inView = function( options ) {
	    var h = this.height();
	    var w = this.width();
	    var t = this.offset().top;
	    var l = this.offset().left;
	    var w_w = $(window).width();
	    var w_h = $(window).height();
	    var s_t = $(window).scrollTop();
	    var s_l = $(window).scrollLeft();

	    var settings = $.extend({
            onlyTop: false,
            preView: false
        }, options );
	    if(settings.preView == true)
	    	w = h = 0;
        if(settings.onlyTop == true)
        	return (((s_t + w_h) >= (t + h) && s_t <= t) ? true : false);
        else
			return (((s_t + w_h) >= (t + h) && s_t <= t && (s_l + w_w) >= (l+w) && s_l <= l) ? true : false);


	};

}( jQuery ));