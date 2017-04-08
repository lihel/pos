'use strict';

function printReceipt(inputs) {
  let arr = new Array();
  let k = 0, i;
  let sum = 0, count = 1, string = "***<没钱赚商店>收据***\n";

  for (i = 0; i < inputs.length - 1; i++) {     //时间复杂度O(N),下标计算到i+1,所以循环i累加到数组长度减一

    if (inputs[i].name == inputs[i + 1].name) {      //比较输入的前一个对象名是否和后一个对象名相等
      count++;
    }

    else {                    //若对象名不相等则计算该商品总价,将其信息存入数组arr,count重置为1
      sum = sum + count * inputs[i].price;

      arr.push("名称：" + inputs[i].name + "，数量：" + count + inputs[i].unit + "，" + "单价：" + inputs[i].price + ".00(元)，" + "小计：" + count * inputs[i].price + ".00(元)\n");
      count = 1;

      string = string + arr[k++];
    }

  }

  if (inputs[i-1].name != inputs[i].name) {     //若最后一个对象名不等于倒数第二个对象名则将最后一个商品个数为一

    arr.push("名称：" + inputs[i].name + "，数量：" + count + inputs[i].unit + "，" + "单价：" + inputs[i].price + ".00(元)，" + "小计：" + count * inputs[i].price + ".00(元)\n");

  }
  string = string + arr[k++];
  sum += inputs[i].price;
  string = string + "----------------------\n" + "总计：" + sum + ".00(元)\n" + "**********************";

  console.log(string);
}
