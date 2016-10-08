console.log("Hola Mundo");


/*var miFuncion = function(valor){
  var is_not_number = Number.isNaN(valor);
  if(is_not_number){
    valor = valor.toLowerCase();
  }
  if(valor=="dia" || (valor <=  12  && valor >= 0)){
    console.log("Buenos días");
  }else if (valor == "noche" || valor == 13) {
    console.log("Buenas noches");
  }

};

var suerte = function(valor){
if (valor === 7) {
  console.log("Buena suerte");
}else if (valor === "13") {
  console.log("Sentido pesame");
}
};
var num = 0;
while(num<10){
  console.log(++num);
}

var casa = {altura:100, ancho:400};
var casota = Object.create(casa);
var arreglo = ["a" , 5 , true , "abc"];
casota.ventana = 100;
for(var pos in arreglo){
  //console.log(pos);
  console.log(arreglo[pos]);
}
for (var prop in casota) {
  //console.log(prop);
  console.log(prop + ":" + casota[prop]);
}

var entrada = prompt("Hola amigos");
console.log(entrada);

var operador = "suma";
var res = NaN;
switch (operador) {
  case "suma":
    res = 4+4;
    console.log(res);
  case "resta":
    res = 4-4;
    console.log(res);
  break;
  default:
  console.log(res);

}
console.log(res);

var i=0;
while (i<=10) {
  console.log(i);
  continue;//Te lleva a la siguiente instruccion si hubiese un for, iria al for y asi sucesivamente. En este caso se devuelve al while
  i++;//nunca entro a esta instruccion

}
console.log("fin");

var i=0;
while (++i <= 1000) {
  if (i % 2 === 1) {
    continue;
  }
  console.log(i);//imprime numeros pares menores a 1000
}

var Figure = {
"lados" : 4,
"color" : "black",
"longitud_lado" : 2,
"perimetro" : function(){
  return this.lados * this.longitud_lado;
 }
};

var Triangle = Object.create(Figure);
for(var prop_name in Triangle){
  console.log(prop_name + ":" + Triangle[prop_name]);
}

Triangle.lados = 3;
console.log(Triangle.perimetro());*/

var Figure = function(lados=3, longitud=2){
  return  {
    lados: lados,
    logitud: 2,
    color: "black",
  };
};
//creacion de nuevos objetos de tipo figura
var triangle = Figure(3,3);
var square = Figure(5,5);
var pentagon = Figure(5,3);

pentagon.color = "red";

var FigureNonRegular = function(){
  var parent = new Figure();
  figure_non_regular = Object.create(parent);
  figure_non_regular.angle = 120;
  return figure_non_regular;
};

var rhombus = new FigureNonRegular();
var rectagle_triangle = new FigureNonRegular();

rhombus.angle = 70;
rectangle_triangle.angle = 90;

console.log(triangle);
console.log(square);
console.log(pentagon);
console.log(rhombus);
console.log(rectangle_triangle);
