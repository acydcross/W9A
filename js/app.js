var is_subscribed = true;
var userAge="18cd";

if((userAge < 18) && (is_subscribed != true)) {
    console.log("the user is younger than 18 and not subscribed");
}
else if((userAge >= 18) && (is_subscribed != true)) {
    console.log("the user is 18 and older and not subscribed");
}
else if((userAge < 18) && (is_subscribed == true)) {
    console.log("the user is younger than 18 and is subscribed");
}
else if((userAge >= 18) && (is_subscribed == true)) {
    console.log("the user is 18 and older and is subscribed");
}
