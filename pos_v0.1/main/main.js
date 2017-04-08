'use strict';

function printReceipt(inputs) {
  let arr = new Array();
  let k = 0, i;
  let sum = 0, count = 1, string = "***<没钱赚商店>收据***\n";

  for (i = 0; i < inputs.length - 1; i++) {

    if (inputs[i].name == inputs[i + 1].name) {
      count++;
    }

    else {
      sum = sum + count * inputs[i].price;
      arr.push("名称：" + inputs[i].name + "，数量：" + count + inputs[i].unit + "，" + "单价：" + inputs[i].price + ".00(元)，" + "小计：" + count * inputs[i].price + ".00(元)\n");
      count = 1;

      string = string + arr[k++];
    }

  }
  if (i + 1 == inputs.length) {

    arr.push("名称：" + inputs[i].name + "，数量：" + count + inputs[i].unit + "，" + "单价：" + inputs[i].price + ".00(元)，" + "小计：" + count * inputs[i].price + ".00(元)\n");

  }
  string = string + arr[k++];
  sum += inputs[i].price;
  string = string + "----------------------\n" + "总计：" + sum + ".00(元)\n" + "**********************";

  console.log(string);
}
