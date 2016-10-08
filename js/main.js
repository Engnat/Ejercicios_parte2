var firts_name = "Engie";
var last_name = "Ruge";

var full_name = firts_name+" "+last_name;
var name = "";


name = name.concat(firts_name);
console.log(name);
name = name.concat(" ", last_name);
//console.log(name);

var lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
console.log(lorem);

var comilla = '\'';
//console.log(comilla);

String.jiberish = function(str){//metodo que agrega una deficinion que le estoy asignando
  if(!str){
    str = this;
  }
  var i= 0;
  for(i = 0 ; i < str.length ; i++){
    if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u"){
        str = str.replace(str[i], "i");
    }
  }
  return str;
};

String.prototype.jiberish = String.jiberish;//Define de una vez en la fabrica...

var tigres = String.jiberish("Tres tristes tigres comian trigo en tres tristes platos");
console.log(tigres);
var cigarra = String.jiberish("erre con erre cigarra, erre con erre barril, rapido ruedan los carros tirando el azucar por el ferrocarril");
console.log(cigarra);


hola_array = "hola mundo".split("");
console.log(hola_array);

hola_string = hola_array.join("");
console.log(hola_string);

var ar1 = [1,2,3,4,5,6];
var ar2 = [7,8,9];
ar3 = ar1.concat(ar2);
console.log(ar3);

ar3.forEach(function(element , index , array){
  console.log("index" + index + "element" + element);
});
