var form = document.createElement('form');
document.body.appendChild(form);
form.method = 'post';
form.action = 'https://l-tike.com/st1/49tj04lr7mlp9spuu5sn';

var input1 = document.createElement('input');
input1.type = 'hidden';
input1.name = 'CERK';
input1.value = '51a81e5f111fbc7ca33616ffc880220d';
form.appendChild(input1);

var input2 = document.createElement('input');
input2.type = 'hidden';
input2.name = 'DBNID';
input2.value = '4';
form.appendChild(input2);

var input3 = document.createElement('input');
input3.type = 'hidden';
input3.name = 'ALCD';
input3.value = '1';
form.appendChild(input3);

var input4 = document.createElement('input');
input4.type = 'hidden';
input4.name = 'STID';
input4.value = 'trmm';
form.appendChild(input4);

form.submit();
