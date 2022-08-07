//楽天登録実行

 //チェック解除
  document.forms.Regist3Form.elements.chk_news.checked = false;

  document.forms.Regist3Form.elements.chk_news.value = false;

  document.getElementsByName("chk_research").checked = false;

  document.getElementsByName("chk_research").value = false;

//登録実行
  document.querySelector("#regist3Form > p.buttons > button").click();
