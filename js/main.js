// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAn57N3-6v0h_4TB-bEoneVenOZRsJHjhw",
    authDomain: "gsdemo-1b92f.firebaseapp.com",
    projectId: "gsdemo-1b92f",
    storageBucket: "gsdemo-1b92f.appspot.com",
    messagingSenderId: "752542959886",
    appId: "1:752542959886:web:ff6a1da9128eb021d52f5f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//   ファイヤーベースにデータを送信するアクション　決り文句
 const ref = firebase.database().ref();


//   下にデータベースの階層をつくるやり方
//   const ref = firebase.database().ref();
//   const ref = firebase.database().ref();


// 現在時刻を定義
function nowTime() {

let now = new Date();
let min =now.getMinutes();
let hour =now.getHours();

let genzai =hour+":"+min;
return genzai;
}



//入力した内容をデータベースに送る

function sendMessage(){
    const message = $("#input").val();
    const time = nowTime();
    const msg = {
          text: message,
          time: time
      }
      ref.push(msg)
} 

console.log(sendMessage);

//   $("#send").on("click",function(){
//       const uname = $("#uname").val();
//       const text = $("#text").val();
//       //   プッシュでひとつの定数をプッシュできるので
//         //   オブジェクトを使って複数の文字をひとつに
//       const msg = {
//           uname: uname,
//           text: text
//       }
//     //.push（定数）でデータベースに保存！！
//       ref.push(msg);
//   });

 $("#send").on("click",sendMessage);

//   データベースに要素が追加された場合に実行するアクション

 ref.on("child_added",function(data){
  // 一旦全てのデータを取得
  const allData = data.val();
  // データの中からテキストのみとりだす
  const display = '<div class="text_wrap"><p class="text_time">'+allData.time+'<p><p class="text">' + allData.text + '</p></div>'
  $("#output").append(display);
 });

  
 

  // ref.on("child_added",function(data){
  //   //   データベースの中のデータを取得
  //   const v = data.val();
  //   const k = data.key;
  //   console.log(v,k)
  //   const h = '<p>'+ v.uname + '<br>' + v.text + '<br>'+v.time +'</p>';
  //   $("#output").append(h);
  // });

//   eはいろいろな情報を取得できる魔法の言葉
// e.で色々取得可能
// キーコードは予め決められているので、調べれば出てくる
// 今回はエンターを押下すると送信できる実装

// $('#text').on('keydown', function(e){
//       if(e.keyCode === 13){
//         sendMessage();
//       }
//   });
    

