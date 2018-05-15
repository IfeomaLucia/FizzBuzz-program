//FizzBuzz program
function numbers(number){ 
    //To loop through numbers 1 to 100
    for(number = 1; number < 101; number++){
        //To check if the number is divisible by both 3 and 5 and displays FizzBuzz
       if(number % 3 == 0 && number % 5 == 0){
            console.log("FizzBuzz");
        }
        //To check if the number is divisble by only 3 and displays Fizz
        else if(number % 3 == 0){
            console.log("Fizz");
        }
        //To check if the number is divisble  by only 5 and displays Buzz
        else if(number % 5 == 0){
           console.log("Buzz");
        }
        //Displays the number itself when not divisible by either 3 or 5 
        else{
         console.log(number);   
        }
    }
}
numbers(15);

