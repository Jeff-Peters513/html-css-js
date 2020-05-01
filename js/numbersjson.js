let colors = ["red", "white", "blue"];
let students = [
    {name: "Andrew", favNumber: 27},
    {name: "Jeff", favNumber: 5}, 
    {name: "Trevor", favNumber: 11},
    {name: "Tyler", favNumber: 24},
    {name: "Dennis", favNumber: 6}
];

// declare function no parameters passed
// const numbers = () => {
//     for (i=1; i < 51; i++) {
//         let liTag = `<lu> ${i}`;
//         ulCtrl.innerHTML += liTag;
//     }

//     for (i=1; i < 51; i++) {
//           nbr =i;
//         if(nbr%3 === 0 || nbr % 5 === 0 ){
//             let three = `<lu> ${nbr}`;
//             let sum3 = nbr;
//             ulCtrl3.innerHTML += three;
//             ulCtrl3a.innerHTML = sum3;       
//         }
//         if(nbr % 5 === 0){
//             let five = `<lu> ${nbr}`;
//             ulCtrl5.innerHTML += five;
//             ulCtrl5a.innerHTML += nbr;        
//     }

const numbers = () => {
    for (let idx = 1; idx <= 50; i++) {

        let nbr = idx;
        if ((nbr % 3 == 0) && (nbr % 5 == 0)) {
            // if number is a factor of 3 & 5 print out FizzBuzz
            ulCtrl.innerHTML += liTag;
            System.out.println("FizzBuzz");
        } else if ((nbr % 5 == 0)) {
            // else if number is a factor of 5 print out Buzz
            System.out.println("Buzz");
        } else if ((nbr % 3 == 0)) {
            // else if number is a factor of 3 print out Fizz
            document.getElementById("print") = nbr;
            System.out.println("Fizz");
        } else {
            document.getElementById("print") = nbr;
        }
    }
}



