var devsRepository = require('devsRepository');

function onAdd() {
	if ($.nameTextField.value) {
		var id = devsRepository.devs.set($.nameTextField.value);
		alert($.nameTextField.value + " has been added with the id: "+ id );
		$.nameTextField.value = "";
	}else {
		alert("Name is empty");
	}
}

function openDevsView() {
	var devsPage = Alloy.createController('devs').getView();
	devsPage.open({ modal: true });
}

$.index.open();
Alloy.Globals.parent = $.index;