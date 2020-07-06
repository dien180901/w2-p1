const exchangeRate=23208;
function vndToUsd(amountVnd){
    return (amountVnd/exchangeRate).toFixed(2);
    let amountVND=promt("How much VND?");
}
const returnedFromFunctionCall = vndToUsd(23000);
console.log(
    "The value returned from the call to vndToUsd",
    returnedFromFunctionCall
);

