

var makeKeyboard = {

(function () { //begin IIFE 
    //Factory
    function makeKeyboard(key){
            if(!isValidKey(key))
                return null;
        var keys = {
            key:key,
            alpha : alpha,
            special : special
        }; // end keys

        return keys;            
    };// end makeKeyboard

    var alphaLetters = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var alphaNumbers = ['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    var special

});// end IIFE

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

