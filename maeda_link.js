var form = document.createElement('form');
document.body.appendChild(form);
form.method = 'post';
form.action = 'https://va.pia.jp/maedakaori24am/entrance.jsp';

var input1 = document.createElement('input');
input1.type = 'hidden';
input1.name = 'acpt_no';
input1.value = '1849232248054360';
form.appendChild(input1);

var input2 = document.createElement('input');
input2.type = 'hidden';
input2.name = 'slcd';
input2.value = 'VM326';
form.appendChild(input2);

form.submit();
