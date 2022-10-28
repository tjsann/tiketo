// id
// document.querySelector("[name=id]").value = 

// pass
// document.querySelector("[name=pass]").value = 

// pass確認
//document.querySelector("[name=passCert]").value = 

//名前
document.querySelector("[name=memberName]").value = '小川敦史'

//名前カナ
document.querySelector("[name=memberNameYo]").value = 'オガワアツフミ'

//性別
//document.querySelector("[name=sex1]").value = 1

//生年月日
document.querySelector("[name=birthDateY]").value = 1996
document.querySelector("[name=birthDateM]").value = 02
document.querySelector("[name=birthDateD]").value = 23

//住所
document.querySelector("[name=post_1]").value = '125'
document.querySelector("[name=post_2]").value = '0062'

document.querySelector("[name=add_1]").value = 12
document.querySelector("[name=add_4]").value = '葛飾区'
document.querySelector("[name=add_2]").value = '青戸7-36-27'
document.querySelector("[name=add_3]").value = '亀有職員住宅106'

//電話番号
var tel = "0" + (Math.floor(Math.random()*3)+7) + "0" + (Math.floor(Math.random()*90000000)+10000000);
document.querySelector("[name=tel]").value = tel;

//メール
//document.querySelector("[name=mail]").value = 
