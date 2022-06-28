var URL = "https://script.google.com/macros/s/AKfycbyd5pE3_Js7G9YcBSbJqy0aMytwf1ByBkqK1GjYznwbl3qbwrpg3YyWGb7O45bHrzHX/exec";

//会場
var kaijo = document.querySelector("#ttg120 > div > section:nth-child(2) > div:nth-child(2) > div.boxContents > table > tbody > tr:nth-child(2) > td").textContent;

//日時
var nitiji = document.querySelector("#ttg120 > div > section:nth-child(2) > div:nth-child(2) > div.boxContents > table > tbody > tr:nth-child(3) > td").textContent.trim();

//チケット枚数
var maisu = document.querySelector("#ttg120 > div > section:nth-child(2) > div:nth-child(2) > div.boxContents > table > tbody > tr:nth-child(4) > td").textContent;

//予約番号等
var yoyakuset = document.querySelector("#ttg120 > div > section:nth-child(2) > div:nth-child(2) > div.boxLine.boxSpaceAll.bgColor01 > p.mark.bold").textContent.trim();

// メアド
var mail = sessionStorage.getItem('mail');

// 電話番号
var tell =  sessionStorage.getItem('tell');

//姓名
var name = sessionStorage.getItem('name');

//姓名(カナ)
var name_kana = sessionStorage.getItem('name_kana');

//生年月日
var birth = sessionStorage.getItem('birth');

//性別
var sex = sessionStorage.getItem('sex');

//住所
var postcode = sessionStorage.getItem('post');

// マイページパス
var pass = sessionStorage.getItem('pass').trim();

// IPアドレス取得
var ip =
sessionStorage.getItem('ip').trim();

//同行者関連
var doukouName1 = sessionStorage.getItem("doukouName_1");
sessionStorage.setItem("doukouMail_" + i, mail);
sessionStorage.setItem("doukouTel_" + i, tel);
sessionStorage.setItem("doukouAddress_" + i, pref);

let obj = {};
obj.kaijo = kaijo;
obj.nitiji = nitiji;
obj.maisu = maisu;
obj.mail = mail;
obj.tell = tell;
obj.yoyaku = yoyakuset;
obj.name = name;
obj.name_kana = name_kana;
obj.birth = birth;
obj.sex = sex;
obj.postcode = postcode;
obj.pass = pass;
obj.ip = ip;

// completionを呼び出して終了
completion(obj);


var SendDATA = {
   "param1" : value1,
   "param2" : value2,
   "param3" : {
      "subparam1" : subvalue1,
      "subparam2" : subvalue2
   }
};

 var postparam = 
       {
         "method"     : "POST",
         "mode"       : "no-cors",
         "Content-Type" : "application/x-www-form-urlencoded",
         "body" : JSON.stringify(SendDATA)
       };

 fetch(URL, postparam);
