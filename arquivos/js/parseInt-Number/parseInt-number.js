/******************************
 * PARSEINT
 *******************************/
/************************************
 Espera que a entrada seja uma string
 ou um número válido, caso contrário 
 ele irá retornar NaN. (Not a Number)
 ************************************/
 console.log(parseInt(10));
 console.log(parseInt("10"));
 console.log(parseInt(false));
 console.log(parseInt(null));
 console.log(parseInt(""));
 console.log(parseInt(undefined));
 console.log(parseInt("a"));
 
 /************************************
  parseInt() analisa até o primeiro
  não dígito e retorna tudo o que foi
  analisado.
  ************************************/
 console.log(parseInt("123abc"));
 console.log(parseInt("12a3bc"));
 console.log(parseInt("1abc23"));
 console.log(parseInt("a123bc"));
 
 /************************************
  Também pode ser utilizado para se 
  converter um número de uma base 
  numérica para decimal.
  ************************************/
 console.log(parseInt("123", 10));
 console.log(parseInt(1010, 2));
 console.log(parseInt("A1", 16));
 
 /******************************
  * NUMBER
  ******************************/
 /************************************
  Number() converte qualquer valor 
  informado baseado em uma regra de 
  conversão própria. Caso ele não 
  consiga, NaN será retornado.
 
  Obs: Number() não pode ser utilizado
  para converter um número de uma base
  numérica para outra.
  ************************************/
  console.log(Number(10));
  console.log(Number(false));
  console.log(Number(null));
  console.log(Number(""));
  console.log(Number(undefined));
  console.log(Number("a"));
  console.log(Number("123abc"));
  console.log(Number("12a3bc"));
  console.log(Number("1abc23"));