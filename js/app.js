//var is_subscribed = true;
//var userAge="18cd";


//if((userAge < 18) && (is_subscribed != true)) {
//    console.log("the user is younger than 18 and not subscribed");
//}
//else if((userAge >= 18) && (is_subscribed != true)) {
//    console.log("the user is 18 and older and not subscribed");
//}
//else if((userAge < 18) && (is_subscribed == true)) {
//    console.log("the user is younger than 18 and is subscribed");
//}
//else if((userAge >= 18) && (is_subscribed == true)) {
//    console.log("the user is 18 and older and is subscribed");
//}


var userAge = ["16", "18", "21"];
var arrayLength = userAge;
var subscriptionStatus = ["not subscribed", "pending subscription", "subscribed"]
var arrayLength = subscriptionStatus;

for(var index=0; index < userAge.length; index++) {
    console.log(userAge[index]);
}

for(var index=0; index < subscriptionStatus.length; index++) {
    console.log(subscriptionStatus[index]);
}