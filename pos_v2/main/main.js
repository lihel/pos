'use strict';
var sum = 0, save = 0;
function printReceipt(tags) {
  const dateDigitToString = num => (num < 10 ? `0${num}` : num);
  let myDate=new Date(),
    year = dateDigitToString(myDate.getFullYear()),
    month = dateDigitToString(myDate.getMonth() + 1),
    date = dateDigitToString(myDate.getDate()),
    hour = dateDigitToString(myDate.getHours()),
    minute = dateDigitToString(myDate.getMinutes()),
    second = dateDigitToString(myDate.getSeconds());
  var arr = [], string = "***<没钱赚商店>收据***\n" + "打印时间：" + `${year}年${month}月${date}日 ${hour}:${minute}:${second}\n`+"----------------------\n";
  let arrSpilt = new Array(), arrCount = 0;
  var ad = 0, bd = 0, cd = 0;
  for (let i = 0; i < tags.length; i++) {
    if (tags[i].length > 10) {
      arrSpilt = tags[i].split("-");
      arrCount = parseFloat(arrSpilt[1]);
      if (arrSpilt[0] == "ITEM000001") {
        ad += arrCount;
      }
      else if (arrSpilt[0] == "ITEM000003") {
        bd += arrCount;
      }
      else if (arrSpilt[0] == "ITEM000005") {
        cd += arrCount;
      }
    }

    else {
      if (tags[i] == "ITEM000001") {
        ad++;
      }
      else if (tags[i] == "ITEM000003") {
        bd++;
      }
      else {
        cd++;
      }
    }
  }
  push(arr, ad, bd, cd);

  for (let i = 0; i < 3; i++) {
    string += arr[i];
  }


  string = string + "----------------------\n" + "总计：" + sum + "0(元)\n" + "节省：" + save + "0(元)\n" + "**********************";

  console.log(string);
}

function push(arr, ad, bd, cd) {
  if (ad >= 5) {
    arr.push("名称：" + "雪碧" + "，数量：" + ad + "瓶" + "，" + "单价：" + 3 + ".00(元)，" + "小计：" + (ad - 1) * 3 + ".00(元)\n");
    save += 3;
    sum += (ad - 1) * 3;
  }

  else
    arr.push("名称：" + "雪碧" + "，数量：" + ad + "瓶" + "，" + "单价：" + 3 + ".00(元)，" + "小计：" + ad * 3 + ".00(元)\n");

  arr.push("名称：" + "荔枝" + "，数量：" + bd + "斤" + "，" + "单价：" + 15 + ".00(元)，" + "小计：" + bd * 15 + "0(元)\n");
  sum += bd * 15;
  if (cd >= 3) {
    arr.push("名称：" + "方便面" + "，数量：" + cd + "袋" + "，" + "单价：" + 4.5 + "0(元)，" + "小计：" + (cd - 1) * 4.5 + ".00(元)\n");
    save += 4.5;
    sum += (cd - 1) * 4.5;
  }

  else
    arr.push("名称：" + "方便面" + "，数量：" + cd + "袋" + "，" + "单价：" + 4.5 + "0(元)，" + "小计：" + cd * 4.5 + "0(元)\n");

}
