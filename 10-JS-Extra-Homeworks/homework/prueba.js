//La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var string = 'adsjfdsfsfjsdjfhacabcsbajda';
  var contar,pos =0;
  var map = new Map();
  var expresion;
  posicion = cadena.indexOf(caracter);
       
  for (let i = 0; i < string.length; i++) {
    pos = string.indexOf(string.charAt(i))
    while (pos != -1) { 
        contar++;           
                                     
        pos = string.indexOf(string.charAt(i), pos + 1);
    }
    map.set(string.charAt(i),contar);
    contar = 0;
    pos = 0;

  }
