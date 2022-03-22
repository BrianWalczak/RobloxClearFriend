setInterval(function () {
try {
  document.getElementsByClassName("icon-alert")[0].click()
} catch(err) {
	  document.getElementsByClassName("icon-right")[0].click()
	setTimeout(function() {
		document.getElementsByClassName("icon-alert")[0].click()
	}, 1000);
}
}, 10);
