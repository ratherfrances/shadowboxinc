// Accordions
document.getElementById('comingUpContent').style.display = 'none';
document.getElementById('pastEventsContent').style.display = 'none';
document.getElementById('eventsWeekTab').className = 'accordionPanelTab highlight';

function hidePanels() {
	document.getElementById('eventsWeekContent').style.display = 'none';
	document.getElementById('comingUpContent').style.display = 'none';
	document.getElementById('pastEventsContent').style.display = 'none';
	document.getElementById('eventsWeekTab').className = 'accordionPanelTab';
	document.getElementById('comingUpTab').className = 'accordionPanelTab';
	document.getElementById('pastEventsTab').className = 'accordionPanelTab';
}
function showEventsWeek() {
	hidePanels();
	document.getElementById('eventsWeekContent').style.display = 'block';
	document.getElementById('eventsWeekTab').className = 'accordionPanelTab highlight';
}
function showComingUp() {
	hidePanels();
	document.getElementById('comingUpContent').style.display = 'block';
	document.getElementById('comingUpTab').className = 'accordionPanelTab highlight';
}
function showPastEvents() {
	hidePanels();
	document.getElementById('pastEventsContent').style.display = 'block';
	document.getElementById('pastEventsTab').className = 'accordionPanelTab highlight';
}


$(document).ready(function(){
	$('#gallery a').magnificPopup({
		gallery: {
			enabled:true,
			tcounter: ''//those are two single quotes!
		},
		type:'image'
	});
	// Lightbox


});
