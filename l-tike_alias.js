//ローチケメアド電話番号自動入力[エイリアス]

//使用アドレス入力
var domains = ['@gmail.com'];

//使用アドレス名
var address_names = ['kotaout.20010516'];

var domain = domains[Math.floor(Math.random()*domains.length)];
var address_name =  address_names[Math.floor(Math.random()*address_names.length)];

var ketasuu = Math.floor(Math.random()*6);
var address_rand = address_name + "+" + Math.random().toString(36).slice(-1*(ketasuu+5)) + domain;

//メアド形式選択(1:1)
var mailtype = Math.floor(Math.random()*Math.floor(2));
if(mailtype == 0){
  mail = address_rand;
}else{
  mail = address_rand;
}
// IPアドレス取得
async function getip(){
const API_URL = 'https://api.ipify.org/?format=json';
const res = await fetch(API_URL);
const data = await res.json();
ip = data.ip
return ip;
}

getip();
//IPセッション格納
sessionStorage.setItem("ip", ip);

//メアドセッション格納
sessionStorage.setItem("mail", mail)
//メアド入力
document.forms.ttg160.elements.MAIL_ADDRS.value = document.forms.ttg160.elements.MAIL_ADDRS_CONFIRM.value = mail;

//電話番号
var tell = "0" + (Math.floor(Math.random()*3)+7) + "0" + (Math.floor(Math.random()*90000000)+10000000);

//電話番号セッション格納
sessionStorage.setItem("tell", tell);
//電話番号入力
document.forms.ttg160.elements.TEL.value = document.forms.ttg160.elements.TEL_CONFIRM.value = tell;

//次ページへ
document.querySelector("[name=NEXT]").click();
