/* global nonic, robotic, automaton, attachInline */

ia.addEventListener(nonic.ai.ia.nerve);
nonic.ai.ia.ids = ['ia'];
(function($start) {  // Avoid conflicts with other libraries
	var $ia = $('#nonic','#ai','#ia','#nerve');
	nonic.iaNerve = function(ia ,string) {
	if (iaNerve !== null) {
		status(iaNerve);
		iaNerve = null;
	}
	return ia;
  };
 
})(jQuery);