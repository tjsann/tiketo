var form = document.createElement('form');
document.body.appendChild(form);
form.method = 'post';
form.action = 'https://va.pia.jp/haroldandmaude23sh/entrance.jsp';

var input1 = document.createElement('input');
input1.type = 'hidden';
input1.name = 'acpt_no';
input1.value = '2498939091517162';
form.appendChild(input1);

var input2 = document.createElement('input');
input2.type = 'hidden';
input2.name = 'slcd';
input2.value = 'VL793';
form.appendChild(input2);

form.submit();
