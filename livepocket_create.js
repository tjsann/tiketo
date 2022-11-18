//ローチケメアド電話番号自動入力[エイリアス]

//使用アドレス入力
var domains = ['@gmail.com'];

//使用アドレス名
var address_names = [''];

var domain = domains[Math.floor(Math.random()*domains.length)];
var address_name =  address_names[Math.floor(Math.random()*address_names.length)];

var ketasuu = Math.floor(Math.random()*6);
//アドレスに連番を付ける
var address_rand = address_name + "+" + Math.random().toString(36).slice(-1*(ketasuu+5)) + domain;

//メアド形式選択(1:1)
var mailtype = Math.floor(Math.random()*Math.floor(2));
if(mailtype == 0){
  mail = address_rand;
}else{
  mail = address_rand;
}

//4桁パスワード生成
var pass = Math.random().toString(36).slice(-4);

//生年月日生成
var birth_y = (Math.floor(Math.random()*15)+1985);
var birth_m = (Math.floor(Math.random()*12)+1);
if(birth_m < 10){
  birth_m = "0" + birth_m;
}
var birth_d = (Math.floor(Math.random()*28)+1);
var day = (Math.floor(Math.random()*28)+1);
if(birth_d < 10){
  birth_d = "0" + birth_d;
}
if(day < 10){
  day = "0" + day;
}

//メアド入力
document.querySelector("#u_email").value = mail;

//パスワード入力
document.querySelector("#password")value = pass;

//パスワード入力(確認)
document.querySelector("#password_retype")　 = pass;

//姓入力
document.querySelector("#familyname") = sei;

//名入力
document.querySelector("#firstname") = mei;

//性別選択
var sexnum = Math.floor(Math.random()*2);
if(sexnum == 0) {
  document.querySelector("#divMale > div.name-select").click();
  } else if(sexnum == 1) {
    document.querySelector("#divFemale > div.name-select").click();
  } else {
    document.querySelector("#divGenderUnselected > div.name-select").click();
  }

//生年月日入力
//年
document.querySelector("#birth_year").value = birth_y;
//月
document.querySelector("#birth_month").value = birth_m;
//日
document.querySelector("#birth_day").value = birth_d;

//都道府県入力
var prefnum = Math.floor(Math.random()*48);
document.querySelector("#pref")　= "0" + prefnum;

//利用規約チェック
document.querySelector("#terms_lp").checked = true;
document.querySelector("#terms_plusid").checked = true;
document.querySelector("#privacy").checked = true;

//メルマガ
document.querySelector("#notified").checked = false;
document.querySelector("#notified_plusid").checked = false;

//次ページへ
document.querySelector("body > div.base-wrapper.clearfix > section > form > nav > ul > li:nth-child(2) > a").click();
