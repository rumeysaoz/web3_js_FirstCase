oddishOrEvenish = (num) =>{

    let txt = num.toString();
    let sum = 0;
    for(let i=0; i< txt.length; i++){
        
        sum += parseInt(txt[i]);
    }

    return (sum%2===1 ? "Oddish" : "Evenish");
}

/*
oddishOrEvenish(43) ➞ "Odd"
// 4 + 3 = 7
// 7 % 2 = 1
*/
console.log(oddishOrEvenish(43));

/*oddishOrEvenish(373) ➞ "Odd"
// 3 + 7 + 3 = 13
// 13 % 2 = 1
*/
console.log(oddishOrEvenish(373));

/*oddishOrEvenish(4433) ➞ "Even"
// 4 + 4 + 3 + 3 = 14
// 14 % 2 = 0
*/
console.log(oddishOrEvenish(4433));
