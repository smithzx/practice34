window.Tools = window.Tools || {};
(function (Tools) {

	var text;
	var color;
	var marker;
	var list;

	var count = 0;
	var selectedId;

	Tools.init = function () {
		text = document.getElementById("text");
		color = document.getElementById("color");
		marker = document.getElementById("marker");
		list = document.getElementById("list");
	};

	Tools.create = function () {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(text.value));
		li.setAttribute("id", "li" + ++count);
		li.setAttribute("type", marker.value);
		li.style.color = color.value;
		li.addEventListener('click', select, false);
		list.appendChild(li);
	};

	Tools.change = function () {
		var selected = document.getElementById(selectedId);
		if (!selected) {
			alert("Item is not selected!");
			return;
		}
		selected.textContent = text.value;
		selected.setAttribute("type", marker.value);
		selected.style.color = color.value;
	};

	Tools.remove = function () {
		var selected = document.getElementById(selectedId);
		if (!selected) {
			alert("Item is not selected!");
			return;
		}
		selected.parentNode.removeChild(selected);
		selectedId = null;
	};

	function select() {
		var selected = document.getElementById(selectedId);
		selected && selected.classList.remove("selected");
		this.classList.add("selected");
		selectedId = this.id;
		text.value = this.textContent;
		color.value = this.style.color;
		marker.value = this.type;
	}

})(Tools);