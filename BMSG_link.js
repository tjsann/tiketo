// URL
const ACTION_URL = "https://l-tike.com/st1/4cycmqgfqmim718b01t6";

// 認証キー
const POST_VALUE = "a5bb8b56c0ef60ba67883dc103a8a226";

// キー情報
const KEY_VALUE = "-MjAyMS0xMS0zMCAxNzozNjoxMg==";

function setPostForm() {
   try {
createForm(KEY_VALUE, ACTION_URL, POST_VALUE);
   } catch (e) {
showRedirectError();
   }
}

// フォーム生成&クリック
setPostForm();
