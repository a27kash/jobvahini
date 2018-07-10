/*Ques3. Reverse an array of strings.
eg: ['hi','this','is','sponge-bob']
output: ['sponge-bob','is','this','hi']
*/

var list = ['hi','this','is','sponge-bob'];
var new_list = [];

for (var i = (list.length-1);i>=0;i--){
	
	var x = list[i];
	new_list.push(x);
}		
console.log(new_list);