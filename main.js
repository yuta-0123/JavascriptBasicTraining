// arg: 高さと底辺の値
// logic: 面積を計算する
// return: 面積

function getArea(base,height) {
  let base = 10;
  let height = 5;
  var triangle=1/2*height*base;
  return triangle
}

// オブジェクトのインスタンス化
// 利用したいオブジェクトの中のメソッド
// 関数を制作(引数,処理,戻す)

// I => month
// O => season

function getSeason(month){
  if(month<3){
    return "春"
  }
}

// 課題2:曜日に対応した数を求める関数
// I => 曜日
// O => 数値

function convertDayToNum(day){
  switch(day){
    case "月曜日":
      return 1
      break;
    case "日曜日":
      return 7
      break;
    default:
      return "一致しません"
  }
} 

// 階乗を求める 1*2*3*4*5
// I => 数字
// O => 階乗

function calcFactorial(num){
  let answer = 1
  for(i=1; i<=num; i++){
    answer=answer*i;
  }
  return answer;
}
