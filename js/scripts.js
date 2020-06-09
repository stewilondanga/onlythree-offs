var navigate = (function() {
	$('.dd').toggle();
	$('.dd_btn').click(function() {
		var dataName = $(this).attr('data-name');
		$('.dd').hide();
		$('.' + dataName).toggle();
	});
})();

var switches = document.querySelectorAll(".switch__input");

var getRandom = function(min, max) {
  return Math.round(Math.random() * (max - min) + min);
};

for (var i = 0; i < switches.length; i++) {
  var sw = switches[i];

  sw.onchange = function(e) {
    var activeSwitches = Array.prototype.slice.call(
      document.querySelectorAll(":checked")
    );

    if (activeSwitches.length > 2) {
      var notSelf = activeSwitches.filter(function(item) {
        return item !== e.target;
      });

      notSelf[getRandom(0, 1)].checked = false;
    }
  }
}
