/*(*) Чему будет равно выражение 1000 + "108" в JavaScript? Объяснить, почему именно такой ответ.*/

1000 + "108";
/* 
Это называется неявное приведение типов. В нашем случае число 1000 станет строкой и
к ней добавится строка "108". В итоге получится 1000108.
*/

let str = 1000 + "108";
typeof str;