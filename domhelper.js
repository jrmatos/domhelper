/* Created by Paulo Matos */
var DOMHelper = (function () {
	'use strict';

	var _element;

	var _setElement = function (selector) {
		_element = document.querySelector(selector);
		if(_element) {
			return this;
		}
		else {
			throw new ReferenceError("Element '"+ selector +"' was not found");
		}
	};

	var _hasClass = function (theClass) {
		return (_element.className.indexOf(theClass) > -1);
	};

	var _addClass = function (theClass) {
		if(!this.hasClass(theClass)) {
			_element.classList.add(theClass);
		}
		return this;
	}

	var _removeClass = function (theClass) {
		if(this.hasClass(theClass)) {
			_element.classList.remove(theClass);
		}
		return this;
	}

	var _toggleClass = function (theClass) {
		if(this.hasClass(theClass)) {
			_element.classList.remove(theClass);
		}
		else {
			_element.classList.add(theClass);
		}
		return this;
	}

	var publicMethods = {
		hasClass: _hasClass,
		addClass: _addClass,
		removeClass: _removeClass,
		toggleClass: _toggleClass
	}

	return _setElement.bind(publicMethods);

})();
