'use strict';

function printReceipt(inputs) {
  let arr = new Array();
  let sum = 0, string = "***<没钱赚商店>收据***\n";
  let a = 0, b = 0, c = 0;
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i] == 'ITEM000000') {
      a++;
    }

    else if (inputs[i] == 'ITEM000001') {
      b++;
    }

    else {
      c++;
    }

  }
  arr.push("名称：" + "可口可乐" + "，数量：" + a + "瓶" + "，" + "单价：" + 3 + ".00(元)，" + "小计：" + a * 3 + ".00(元)\n");
  arr.push("名称：" + "雪碧" + "，数量：" + b + "瓶" + "，" + "单价：" + 3 + ".00(元)，" + "小计：" + b * 3 + ".00(元)\n");
  arr.push("名称：" + "电池" + "，数量：" + c + "个" + "，" + "单价：" + 2 + ".00(元)，" + "小计：" + c * 2 + ".00(元)\n");
  for (let k = 0; k < 3; k++)
    string += arr[k];
  sum = a * 3 + b * 3 + c * 2;
  string = string + "----------------------\n" + "总计：" + sum + ".00(元)\n" + "**********************";

  console.log(string);
}
