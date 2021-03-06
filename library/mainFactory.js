//factory 
var makeKeyboard = 
	(function (){ //begin IIFE

		function makeKey(key){
			if (!isValidKey(key))
			return null;

			var keyboard = {
				key : key, //key property
				//shared methods
				shift : shift,
				capsLock : capsLock
				
			};

		return card;
	};

//Resources
		var keyName = [
						  //alphabet	
						  'a','A','b', 'B','c', 'C','d', 'D', 'e', 'E', 'f', 'F', 'g', 'G', 'h', 'H', 'i', 'I', 'j', 'J', 'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 
		                  'o', 'O', 'p', 'P', 'q', 'Q', 'r', 'R', 's', 't', 'T', 'u', 'U', 'v', 'V', 'w', 'W','x', 'X', 'y', 'Y', 'z', 'Z', 
		                  //numbers 
		                  '1', '!', '2', '@', '3', '4', '$', '5', '%', '6', '^', '7', '&', '8', '*', '9', '(', '0', ')', 
		                  //Special Keys
		                  '-', '_', '=', '+','[','{',']', '}', '\\', '|',';', ':',"'",'"',',','<', '.', '>','/', '?', 
	                	];
//Methods

		var keys = function(key){
			var keyIndex = keyName.indexOf(key);
			return keyName[keyIndex];
		};
		var shift  = function(key){
			var keyIndex = keyName.indexOf(key);
			return keyName[keyIndex + 1];
		};
		var capsLock  = function(key){
			var keyIndex = keyName.indexOf(key);
			return keyName[keyIndex + 1];
		};


});



//Inh

var keyboard = {
	array : [1,2,3],
	counter : function(num){
		return this.array.length && this.array.push(1);

	}

};

console.log(keyboard.counter());

var keyboard = {
	array : ['a','b','c'],
	counter : function(num){
		for(i=0;i<array.length;++i){
			return array[i];
		}

		return this.array.length && this.array.push(1);

	}

};

console.log(keyboard.counter());


