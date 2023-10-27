var form = document.createElement('form');
document.body.appendChild(form);
form.method = 'post';
form.action = 'https://eplus.jp/sf/detail/0348300008?P6=777';

var input1 = document.createElement('input');
input1.type = 'hidden';
input1.name = 'keyword';
input1.value = '11400';
form.appendChild(input1);

form.submit();
