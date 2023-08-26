let str =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed asperiores assumenda eveniet possimus ullam temporibus reiciendis voluptas, sapiente esse vel perspiciatis totam magnam aspernatur commodi, consequuntur, nemo molestias obcaecati dolor.';

console.log(str.toUpperCase() + ' \n');

str =
  'LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. SED ASPERIORES ASSUMENDA EVENIET POSSIMUS ULLAM TEMPORIBUS REICIENDIS VOLUPTAS, SAPIENTE ESSE VEL PERSPICIATIS TOTAM MAGNAM ASPERNATUR COMMODI, CONSEQUUNTUR, NEMO MOLESTIAS OBCAECATI DOLOR.';

console.log(str.toLowerCase());

var usrName = 'roshan';

var firstChar = usrName.slice(0, 1);

var upperCaseFirstChar = firstChar.toUpperCase();

var restName = usrName.slice(1, usrName.length);

var capitalizeName = upperCaseFirstChar + restName;

console.log(capitalizeName);
