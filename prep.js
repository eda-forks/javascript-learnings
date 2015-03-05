// forEach

var forEach = function (input, func) {
	
// takes input and function 
// check if input is empty or not object  
	// return the input 

// check if input is obj or arr 
// if array 
	if(Array.isArray(input)) {
		// loop over array
		for(i = 0; i < input.length; i++) {
			// apply function to each element 
			func(input[i]);
		}
	}
	// if object
	else if(input.constructor === Object) {
		// loop over object
		for(var key in input) {
			// apply function to each element 
			func(input[key]);
		}
	}
};


// map
// use forEach in map

var map = function(input, func) {
	var mapped = [];
	var mapElement = function(element) {
		mapped.push(func(element));
	};
	forEach(input, mapElement);
	return mapped;
};

var testArr = [1,2,3,4,5];
var testFunc = function(a) {
	return a+1;
};

console.log(map(testArr, testFunc));
// [2,3,4,5,6] 



// filter
var filter = function(input, test) {
	var passed = [];
	var pushPassedElements = function(element){
		if(test(element)) {
			passed.push(element);
		}
	};
	forEach(input, pushPassedElements);
	return passed;
};

var testTestFunc = function(n) {
	return n > 1;
};
console.log(filter(testArr, testTestFunc));
// [2,3,4,5]

// reduce
var reduce = function(input, reducer, startVal) {
	var current = startVal;
	var reduceElements = function(element) {
		current = reducer(current, element);
	};
	forEach(input, reduceElements);
	return current;
};

var testReducer = function(a,b) { return a+b; };

console.log(reduce(testArr, testReducer, 0));
// 15

var forEach = function(input, func) {
	if(input.length === 0 || input == null) {
		return input;
	}
	else if(Array.isArray(input)) {
		for (var i = 0; i<input.length; i++) {
			func(input[i]);
		}
	}
	else if(constructor.input === Object) {
		for (var key in input) {
			func(input[key]);
		}
	} else {
		return "wat";
	}
}; 

var map = function (input, func) {
	var mapped = [];
	var pushToMapped = function(element) {
		mapped.push(func(element));
	};
	// forEach
	forEach(input, pushToMapped);
	return mapped;	
};


var testArr = [1,2,3,4,5];
var testMapFunc = function (a) {
	return a+1;
};
console.log(map(testArr, testMapFunc));
// [2,3,4,5,6]

var reduce = function (input, reducer, start){
	var current = start;
	var reduceElements = function(element) {
		current = reducer(current, element);
	};
	// forEach
	forEach(input, reduceElements);
	return current;
};


var testReduceFunc = function(a,b) {
	return a+b;
};

console.log(reduce(testArr, testReduceFunc, 0));
// 15


