

var keyboard = {

	shift : function(letter){
		for(i = 0; i < letter.length; i++){
		console.log(letter[i])
		}
	},

	capslock : function(){
		for(i = 0; i < letter.length; i++){
		console.log(letter[i])
		}
	},	
	a : ['a', 'A'],
	b : ['b', 'B'],
	c : ['c', 'C'],
	d : ['d', 'D'],
	e : ['e', 'E']
};

		console.log('test');

(function() {
	keyboard.shift();

	keyboard.capslock();
})();

