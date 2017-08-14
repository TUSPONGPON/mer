/* global nonic, robotic, automaton, attachInline */

vocaloid.addEventListener(nonic.vocaloid.nerve);
nonic.vocaloid.ids = ['vocaloid'];
(function($start) {  // Avoid conflicts with other libraries
	var $vocaloid = $('#nonic','#vocaloid','#nerve');
	nonic.vocaloidNerve = function(vocaloid ,string) {
	if (vocaloidNerve !== null) {
		status(vocaloidNerve);
		vocaloidNerve = null;
	}
	return vocaloid;
  };
 
})(jQuery);