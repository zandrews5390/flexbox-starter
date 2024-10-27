window.onload = function(){
	// the modal element on the page so we can hide or show it
	let modal = document.getElementById("modal");

	// event listener/handler for the button to open the modal
	document.getElementById("viewModal").addEventListener("click", function(){
		modal.classList.remove("hidden");
	});
	
	// event listener/handler for the button to close the modal
	document.getElementById("closeModal").addEventListener("click", function(){
		modal.classList.add("hidden");
	});
};