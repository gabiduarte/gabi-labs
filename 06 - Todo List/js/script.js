window.onload = function() {
  if (localStorage.getItem('todo')) {
  	return document.getElementById('td-input').innerHTML = localStorage.getItem('todo');
	}
};
function createTodo() {
	var tableRow = document.getElementById('td-input'),
	entry = document.getElementById('input'),
	userInput = tableRow.innerHTML + "<tr><td><button type='button' class='fa-btn' onclick='deleteRecord(this)'><i class='fa fa-trash-o fa-fw'></i></button>" + entry.value + "</td></tr>\n";
	if (entry.value === '') { return ; } else { entry.value = ''; };
	localStorage.setItem('todo', userInput);
	return tableRow.innerHTML = userInput;
};
function clearTodos() {
	localStorage.clear();
	window.location = window.location;
};
function deleteRecord(row) {
    var rowNum= row.parentNode.parentNode.rowIndex;
    document.getElementById('todo-list').deleteRow(rowNum);
    localStorage.setItem('todo', document.getElementById('td-input').innerHTML);
};
//Console Notes
console.log('Hey, thanks for stopping by! This is a simple study project so I could learn more about localStorage and build something useful. \n' +
	'Here\'s what helped me build this project:\n' + 'http://zenorocha.com/html5-local-storage/ - http://getskeleton.com/ - http://www.w3.org/TR/webstorage/ \n\n' +
	'While coding, listened to: Halls of Science - Aperture Science (Songs to Test By - Portal 2 OST)');