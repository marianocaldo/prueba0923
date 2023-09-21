/* declaro variables */

var nombre = "Pedro";

let edad  = 2;

const pi = 3.1415;



if (edad >= 0 && edad < 120) {
    if (edad >= 18)
        {
            console.log("soy mayor de edad")
        }
        else 
        {
            console.log("soy menor")
        }

    console.log("fin");

    }
  else
    {
        console.log("edad erronea")
    }  

let nro = 6;

console.log(nro);

/*------------ if anidados con elseif------------- */

if (nro == 3)
    {
        console.log("tres")
    }
    else if (nro == 2)
    {
        console.log("dos")
    }
    else if (nro == 1)
    {
        console.log("uno")
        
    }
/* ---------------OPERADOR TERNARIO ----------*/

let nota = 10;

var calificacion = nota < 5 ? "suspendido" : "aprobado";
console.log("Estoy", calificacion);

/* --------------- switch ----------*/

let letra = "uno";

switch (nro) {
    case 1: letra = "uno";
    break;

    case 2: letra = "dos";
    break;
    
    case 3: letra = "tres";
    break;
    
    default: letra = "no esta";


console.log(letra);    
    
}

let nrootro = 1;

/*----------------while ---------------*/
while (nrootro <= 10) {
    console.log("el nro es:", nrootro);
    nrootro++;
}

/*----------------DO while ---------------*/
do  {
    console.log("el nro es:", nrootro);
    nrootro++;
} while (nrootro <= 10)

/*----------------FOR  ---------------*/

for (let i=1; i <=10 ; i++)
{
    console.log(i);
} 

console.log("Fin");

/*----------------------------------------------------------------------------------*/

let tabla = 5;
document.write("<h1>Tabla del " +tabla +"</h1>");

for (let j = 0; j <= 10 ; j++){
    document.write(+tabla +" x " +j+ "=" + tabla * j +"<br>");
}



