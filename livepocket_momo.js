//ライポケ自動入力[エイリアス]

//使用ドメイン一覧
var domains = ['@gmail.com'];

//使用アドレス一覧
var address_names = ['tingtianminghongt','xiguguitailangxigu','tianchuandunshengtianchuan'];

var domain = domains[Math.floor(Math.random()*domains.length)];
var address_name =  address_names[Math.floor(Math.random()*address_names.length)];
var ketasuu = Math.floor(Math.random()*6);

//アドレスに連番を付ける（エイリアス）
var alias = Math.random().toString(36).slice(-1*(ketasuu+5));
var mail = address_name + "+" + alias + domain;

//名前リスト
var array_sei = ['上田','齋藤','坂田','青田','佐藤','黒木','山田','江藤','遠藤','鈴木','小川','太田','蔵前','栗林','栗原','浅村','杉内','和田','岩隈','涌井','成瀬','金子','内海','三浦','石川','安藤','大竹','吉見','川上','上原'];
var array_mei = ['歩夢','舞','真希','奏帆','貴音','梨々','創','健太','秀太','康二','潤','一輝','光輝','隼也','俊夫','太郎','和幸','紀之','咲','真由美','俊介','恵那','翔','和也','光','こころ','結衣','智子','美優','千紗'];
var array_mei_kana =['ayumu','mai','maki','kaho','takane','riri','sou','kenta','shuta','kouji','jun','kazuki','kouki','shunya','toshio','taro','kazuyuki','noriyuki','saki','mayumi','shunsuke','ena','shun','kazuya','hikari','kokoro','yui','tomoko','miyu','chisa'];

//名前生成
var sei_len = array_sei.length;
var mei_len = array_mei.length;
var mei_kana_len = array_mei_kana.length;

var sei_pic = Math.floor(Math.random()*sei_len);
var mei_pic = Math.floor(Math.random()*mei_len);
var mei_kana_pic = Math.floor(Math.random()*mei_kana_len);

var sei = array_sei[sei_pic];
var mei = array_mei[mei_pic];
var mei_kana = array_mei_kana[mei_pic];

//4桁パスワード生成
var pass = mei_kana + alias;

//生年月日生成
var birth_y = (Math.floor(Math.random()*15)+1985);
var birth_m = (Math.floor(Math.random()*12)+1);
var birth_d = (Math.floor(Math.random()*28)+1);

// IPアドレス取得
async function getip(){
const API_URL = 'https://api.ipify.org/?format=json';
const res =  await fetch(API_URL);
const data =  await res.json();
ip = data.ip
return ip;
}

//以下入力
//ip取得完了後入力等実施
getip().then(() => {

//メアド入力
document.querySelector("#u_email").value = mail;

//パスワード入力
document.querySelector("#password").value = pass;

//パスワード入力(確認)
document.querySelector("#password_retype").value　 = pass;

//姓入力
document.querySelector("#familyname").value = sei;

//名入力
document.querySelector("#firstname").value = mei;

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
if(10 > prefnum){
  prefnum = '0'+prefnum;
  }
document.querySelector("#pref").value　= prefnum;
  
//IPセッション格納
sessionStorage.setItem("ip", ip);
//メアドセッション格納
sessionStorage.setItem("mail", mail);
//パスセッション格納
sessionStorage.setItem("pass", pass);
//名前セッション格納
sessionStorage.setItem("name", sei + mei);

//性別セッション格納
  if (sexnum == 0) {
    sessionStorage.setItem("sex", "男");
  } else if (sexnum == 1){
    sessionStorage.setItem("sex", "女");
  } else {
    sessionStorage.setItem("sex", "未選択"); 
  }

//生年月日セッション格納
sessionStorage.setItem("birth", birth_y　 + "/" + birth_m + "/" + birth_d);

//都道府県セッション格納
//sessionStorage.setItem("mei", mei);

//利用規約チェック
document.querySelector("#terms_lp").checked = true;
document.querySelector("#terms_plusid").checked = true;
document.querySelector("#privacy").checked = true;

//メルマガ
document.querySelector("body > div.ui-page.ui-body-c.ui-page-active > div.base-layout.ui-content > form > section:nth-child(9) > div > div > div:nth-child(1) > input[type=checkbox]").checked = false;
document.querySelector("body > div.ui-page.ui-body-c.ui-page-active > div.base-layout.ui-content > form > section:nth-child(9) > div > div > div:nth-child(2) > input[type=checkbox]").checked = false;

//次ページへ
document.querySelector("body > div.ui-page.ui-body-c.ui-page-active > div.base-layout.ui-content > form > nav > ul > li:nth-child(1) > a").click();
  
});
