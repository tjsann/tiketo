var form = document.createElement('form');
document.body.appendChild(form);
form.method = 'post';
form.action = 'https://ticket.skiyaki.tokyo/events/mokahinata/token_restriction';

// tk（トークン）
var input1 = document.createElement('input');
input1.type = 'hidden';
input1.name = 'tk';
input1.value = 'ojez36aDhRxmrsex/dcFAo2nHaT3xH4yva0C8atg9VBSMerKp/lxU5MUgSgzgTNzo5w/hXpWkDfHlbO/kwy7PA==';
form.appendChild(input1);

// t（動的タイムスタンプ）
var now = Math.floor(new Date().getTime() / 1000);
var input2 = document.createElement('input');
input2.type = 'hidden';
input2.name = 't';
input2.id = 'st-timestamp-5280';
input2.value = now;
form.appendChild(input2);

// 送信
form.submit();
