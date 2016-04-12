// Create a xml object
var xhr = new XMLHttpRequest();
// Ste 2: Call back function 
xhr.onreadystatechange = function () {
	if (xhr.readyState === 4){
		// console.log(xhr.responseText);
		// console.log(typeof xhr.responseText);
		var employees = JSON.parse(xhr.responseText);
		// console.log(typeof employees);
		// console.log(employees);

		var statusHTML = '<ul class="bulleted">';
		for (var i=0; i<employees.length; i+=1){
			if (employees[i].inoffice === true){
				statusHTML += '<li class="in">';
			} else {
				statusHTML += '<li class="out">';
			}
			statusHTML += employees[i].name;
		}
			statusHTML += '</ul>';
			document.getElementById('employeeList').innerHTML = statusHTML;
	}
};
// Step 3: open a request
xhr.open('GET', 'data/employees.json');
// Step 4: send the XMLHttpRequest
xhr.send();







// Create a xml object
var xhr2 = new XMLHttpRequest();
// Ste 2: Call back function 
xhr2.onreadystatechange = function () {
	if (xhr2.readyState === 4){
		// console.log(xhr.responseText);
		// console.log(typeof xhr.responseText);
		var rooms = JSON.parse(xhr2.responseText);
		// console.log(typeof employees);
		 console.log(rooms);

		var statusHTML = '<ul class="rooms">';
		for (var i=0; i<rooms.length; i+=1){
			if (rooms[i].available === true){
				statusHTML += '<li class="empty">';
			} else {
				statusHTML += '<li class="full">';
			}
			statusHTML += rooms[i].room;
		}
			statusHTML += '</ul>';
			document.getElementById('roomList').innerHTML = statusHTML;
	}
};
// Step 3: open a request
xhr2.open('GET', 'data/rooms.json');
// Step 4: send the XMLHttpRequest
xhr2.send();