var makeKeyboard =

(function (){

	var keyboard = {
		array : [
				  	//alphabet	
				  	'a','A','b', 'B','c', 'C','d', 'D', 'e', 'E', 'f', 'F', 'g', 'G', 'h', 'H', 'i', 'I', 'j', 'J', 'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 
	          		'o', 'O', 'p', 'P', 'q', 'Q', 'r', 'R', 's', 't', 'T', 'u', 'U', 'v', 'V', 'w', 'W','x', 'X', 'y', 'Y', 'z', 'Z', 
	          		//numbers 
	              	'1', '!', '2', '@', '3', '4', '$', '5', '%', '6', '^', '7', '&', '8', '*', '9', '(', '0', ')', 
	          		//Special Keys
	              	'-', '_', '=', '+','[','{',']', '}', '\\', '|',';', ':',"'",'"',',','<', '.', '>','/', '?', 
		        ],
		key : function(key){
				var keyIndex = this.array.indexOf(key)
				console.log(keyIndex);
				return this.array[keyIndex];
			},        
		shift : function(key){
				var keyIndex = this.array.indexOf(key)
				console.log(keyIndex);
				return this.array[keyIndex + 1];
			},
		capsLock : function(key){
				var keyIndex = this.array.indexOf(key)
				console.log(keyIndex);
				return this.array[keyIndex + 1];
		}
	}
	
})();

// var Keyboard = new makeKeyboard();
// console.log("keyboard.key(key); will return lowercase key");
// console.log("keyboard.shift(key); for uppercase letters");
// console.log("keyboard.capsLock(key); for uppercase letters");

	


