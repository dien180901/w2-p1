let currency=prompt("VND to USD or USD to VND,if you choose VND to USD place write VND the other is USD");

const exchangeRate=23208;
function vndToUsd(amountVnd){
    return (amountVnd/exchangeRate).toFixed(2);
}
function usdToVnd(amountVnd){
  return (amountVnd*exchangeRate).toFixed(2);
}

function formatCurrency(type, value) {
  const formatter = new Intl.NumberFormat(type, {
    currency: type,
    style: "currency"
  });
  return formatter.format(value);
}

if (currency.toUpperCase()==="VND"){
  let amountVND = prompt("How much VND?");
  if (isNaN(amountVND)===false){
  console.log(formatCurrency("USD",vndToUsd(amountVND)));}
  else {
    prompt("only write number");
    let amountVND = prompt("How much VND?");
    console.log(formatCurrency("USD",vndToUsd(amountVND)));}
  
  }


else if (currency.toUpperCase()=="USD"){
  let amountVND = prompt("How much USD?");
  if (isNaN(amountVND)===false){
  console.log(formatCurrency("VND",usdToVnd(amountVND)));}
else{
    prompt("only write number");
    let amountVND = prompt("How much USD?");
    console.log(formatCurrency("VND",usdToVnd(amountVND)));}
  
}
  else{prompt("please write USD or VND");}
  
