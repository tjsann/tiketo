var form = document.createElement('form');
document.body.appendChild(form);
form.method = 'post';
form.action = 'https://ticket.skiyaki.tokyo/events/mokahinata/token_restriction';

var input1 = document.createElement('input');
input1.type = 'hidden';
input1.name = 'tk';
input1.value = 'ojez36aDhRxmrsex/dcFAo2nHaT3xH4yva0C8atg9VBSMerKp/lxU5MUgSgzgTNzo5w/hXpWkDfHlbO/kwy7PA==';
form.appendChild(input1);

var input2 = document.createElement('input');
input2.type = 'hidden';
input2.name = 'tk';
input2.id = 'st-timestamp-5280';
input2.value = 1746542690
form.appendChild(input2);

form.submit();
