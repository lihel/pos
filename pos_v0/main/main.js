'use strict';

function printReceipt(inputs) {

  let arr = new Array();
  let sum = 0,string = "***<没钱赚商店>收据***\n";
  for (let i = 0; i < inputs.length; i++) {

    sum = sum + inputs[i].count * inputs[i].price;

    arr.push("名称：" + inputs[i].name + "，数量：" + inputs[i].count +  inputs[i].unit + "，" + "单价：" + inputs[i].price + ".00(元)，" + "小计：" + inputs[i].count * inputs[i].price + ".00(元)\n");

    string = string + arr[i];
  }

  string = string + "----------------------\n" + "总计：" + sum + ".00(元)\n" + "**********************";

  console.log(string);

}
