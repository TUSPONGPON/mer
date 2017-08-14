/* global nonic, robotic, automaton, attachInline */

nonic.addEventListener(nonic.ai.nerve);
nonic.ai.ids = ['ai'];
(function($start) {  // Avoid conflicts with other libraries
	var $nonic = $('#nonic','#ai','#nerve');
	nonic.nonicNerve = function(nonic ,string) {
	if (nonicNerve !== null) {
		status(nonicNerve);
		nonicNerve = null;
	}
	return nonic;
  };
 
})(jQuery);