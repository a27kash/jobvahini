/*Ques1.  Sort an array of numbers in ascending order.
eg: [7,8,5,4]
output: [4,5,7,8]*/

var x = [7,8,5,4];

do{
	var a = false
	for (var i = 0; i<x.length-1; i++){
	if(x[i]>x[i+1]){
		var y = x[i];
		x[i] = x[i+1];
		x[i+1] = y
		a = true
	}
}
}while(a)
	

console.log(x)
		