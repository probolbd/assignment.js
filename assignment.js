// #Problem-1
function kilometerToMeter(kilometer) {
    if(kilometer<0){
        return console.error ("Kilometer should be grater 0");
    }
    else{
        var meter = 1000;
        var result = kilometer*meter;
        return result;
    }  
}
var input= kilometerToMeter(5);
// console.log(input);

// #Problem-2
function budgetCalculator(ghori, phone, laptop){
    if (ghori<0 || phone<0 || laptop<0){
        return console.error("Buy quantity should be positive");
    }
    else{
        var ghoriPrice= 50;
        var phonePrice=100;
        var laptopPrice=500;
        var totalBudget= ghori*ghoriPrice + phone*phonePrice + laptop*laptopPrice;
        return totalBudget;
        }  
}
var buyQuantity = budgetCalculator(1, 10, 0);
// console.log(buyQuantity);

// #Problem-3
function hotelCost(day){
    var rent1=100;
    var rent2 = 80;
    var rent3 =50;
    if(day<0){
        return console.error("Day should be grather than 0");
    }
    else if(day<=10){
        rent1total=day*rent1;
        return rent1total;
    }
    else if(day>10 && day<=20){
        rent2total=day*rent2 + 10*20;
        return rent2total;
    }
    else{
        rent3total=day*rent3 + 10*50 + 10*30;
        return rent3total;
    }
}
var totalrent=hotelCost(9);
// console.log(totalrent);

// #Problem-4
function megaFriend(){
    var Friends = ['Sojib', 'Tarekul Islam', 'Mahmud'];
      var lgth = 0;
      var longest;
      
      for (var i = 0; i < Friends.length; i++) {
        if (Friends[i].length > lgth) {
          var lgth = Friends[i].length;
          longest = Friends[i];
        }  
      }
      return longest;
}
var output= megaFriend()
//   console.log(output);