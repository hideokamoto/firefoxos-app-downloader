var installButton = document.getElementById("ffapp-dl-btn");

installButton.addEventListener("click", function() {
    var manifestUrl = installButton.getAttribute("data-ffapp-dllink");
    var request = window.navigator.mozApps.install(manifestUrl);
    request.onsuccess = function () {
      // 戻り値の App オブジェクトを保存
      var appRecord = this.result;
      alert('アプリケーションはインストールされました');
    };
    request.onerror = function () {
      // DOMError オブジェクトからエラー情報を表示
      alert('インストール処理中にエラーが発生しました:' + this.error.name);
    };
});