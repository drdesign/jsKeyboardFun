// var keyboard =

// (function (){

	var keyboard = {
		array : [
				  	//alphabet	
				  	'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s', 't','u','v','w','x','y','z', 
	          		//numbers 
	              	'1', '!', '2', '@', '3', '4', '$', '5', '%', '6', '^', '7', '&', '8', '*', '9', '(', '0', ')', 
	          		//Special Keys
	              	'-', '_', '=', '+','[','{',']', '}', '\\', '|',';', ':',"'",'"',',','<', '.', '>','/', '?', 
		        ],
		key : function(key){
				var keyIndex = this.array.indexOf(key)
				var item = this.array[keyIndex];
				var res = item.toLowerCase();
				return res;
			},        
		shift : function(key){
				var keyIndex = this.array.indexOf(key)

				if(keyIndex > 25){
					var item = this.array[keyIndex];
					console.log(keyIndex);
					return this.array[keyIndex + 1];
					
				} else {
					var item = this.array[keyIndex];
					var res = item.toUpperCase();
					return res;
				};
			},
		capsLock : function(key){
				var keyIndex = this.array.indexOf(key)

				if(keyIndex > 25){
					var item = this.array[keyIndex];
					console.log(keyIndex);
					return this.array[keyIndex + 1];
					
				} else {
					var item = this.array[keyIndex];
					var res = item.toUpperCase();
					return res;
				}
			},
		type : function(){

		}
	};
	
// })();


// var Keyboard = new makeKeyboard();
// console.log("keyboard.key(key); will return lowercase key");
// console.log("keyboard.shift(key); for uppercase letters");
// console.log("keyboard.capsLock(key); for uppercase letters");

	


