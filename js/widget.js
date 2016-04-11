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