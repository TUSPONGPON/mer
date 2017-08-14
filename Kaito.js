/* global nonic, robotic, automaton, attachInline */

kaito.addEventListener(nonic.ai.kaito.nerve);
nonic.ai.kaito.ids = ['kaito'];
(function($start) {  // Avoid conflicts with other libraries
	var $kaito = $('#nonic','#ai','#kaito','#nerve');
	nonic.mikuNerve = function(kaito ,string) {
	if (kaitoNerve !== null) {
		status(kaitoNerve);
		kaitoNerve = null;
	}
	return kaito;
  };
 
})(jQuery);