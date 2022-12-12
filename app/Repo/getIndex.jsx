export default function getIndex(price, amount, percentage){
  price = parseFloat(price);
  amount = parseFloat(amount);
  percentage = parseFloat(percentage);

  index = (((price/percentage)/amount)*100.00)
    if(isNaN(index)){
      return 0
    }
    var result = ((50 - (index/1.92)*50)*2).toFixed(0)
    if(result == -0){
      return 0;
    } else {
      return result;
    }
}