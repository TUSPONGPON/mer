/* global nonic, robotic, automaton, attachInline */

meiko.addEventListener(nonic.ai.meiko.nerve);
nonic.ai.meiko.ids = ['meiko'];
(function($start) {  // Avoid conflicts with other libraries
	var $meiko = $('#nonic','#ai','#meiko','#nerve');
	nonic.mikuNerve = function(meiko ,string) {
	if (meikoNerve !== null) {
		status(meikoNerve);
		meikoNerve = null;
	}
	return meiko;
  };
 
})(jQuery);