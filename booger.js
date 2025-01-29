/* FizzBuzz -- Write a program that prints the numbers from 1 to 100. But for multiples of three 
print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which 
are multiples of both three and five print “FizzBuzz”.
*/

var fin = [ ];

for (var startNum = 1; startNum <= 1000; startNum++){
        if (startNum % 3 === 0 && startNum % 5 === 0) {
            fin+=("FizzBuzz" + " ");
        } else if (startNum % 3 === 0){
            fin+=("Fizz" + " ");
        } else if (startNum % 5 === 0){
            fin+=("Buzz" + " ");
        } else {
            fin+=(startNum + " ");
        }
}
console.log(fin);