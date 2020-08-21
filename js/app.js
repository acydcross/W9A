var is_subscribed = [true, false, true, false];
var userAge = ["16", "17", "18", "19"];

console.log(userAge);
console.log(is_subscribed);

for(index = 0; index < 6; index++) {
    if((userAge[index] < 18) && (is_subscribed[index] != true)) {
        console.log("the user is younger than 18 and not subscribed");
    }
    else if((userAge[index] >= 18) && (is_subscribed[index] != true)) {
        console.log("the user is 18 and older and not subscribed");
    }
    else if((userAge[index] < 18) && (is_subscribed[index] == true)) {
        console.log("the user is younger than 18 and is subscribed");
    }
    else if((userAge[index] >= 18) && (is_subscribed[index] == true)) {
        console.log("the user is 18 and older and is subscribed");
    }
    else {
        console.log("ERROR!!!!!!!")
    }
}



//var userAge = ["under 18", "18", "over 18"];
//var arrayLength = userAge;
//var subscriptionStatus = ["not subscribed", "pending subscription", "subscribed"]
//var arrayLength = subscriptionStatus;
//
//for(var index=0; index < userAge.length; index++) {
//    console.log(userAge[index]);
//}
//
//for(var index=0; index < subscriptionStatus.length; index++) {
//    console.log(subscriptionStatus[index]);
//}