$ (document).ready(function() {

	$('#category_selec').selectmenu();

let popup = document.getElementById('popup_enter'),
		popupToggle = document.getElementById('myBtn'),
		popupClose = document.querySelector('.close');

		popupToggle.onclick = function() {
			popup.style.display="block";
		};

		popupClose.onclick = function() {
			popup.style.display="none";
		}

		window.onclick = function(e) {
			if(e.target == popup) {
				popup.style.display="none";
			}
}

let popupCall = document.getElementById('recallMy'),
		popupToggleCall = document.getElementById('recallBtn'),
		popupCloseCall = document.querySelector('.close1');

		popupToggleCall.onclick = function() {
			popupCall.style.display="block";
		};

		popupCloseCall.onclick = function() {
			popupCall.style.display="none";
		}

		window.onclick = function(e) {
			if(e.target == popupCall) {
				popupCall.style.display="none";
			}
}

});


$('#userSubscribe').validate({
	rules: {
		inputEmail: {
			required: true,
			email: true
		}
	}
});

$('#userRegistration').validate({
	rules: {
		registrationEmail: {
			required: true,
			email: true
		},
		registrationPass: {
			required: true,
			minlength: 4
		}
	}
});

$('#priceFilter').validate({
	rules: {
		priceFrom: {
			required: true,
			number: true
		},
		priceFor: {
			required: true,
			number: true
		}
	}
});
