//Ques2. Replace all occurence of vowels with hyphen in the string.
//eg: It is cloudy outside.
//output: -t -s cl--dy --ts-d-

var str = "It is cloudy outside.";
var vowels = ["a","A","e","E","i","I","o","O","u","U"];
var n = "";
var b = "";


/*solution1
for (var i = 0; i<str.length; i++){
	if ( (str.slice(i,i+1) == "a")||(str.slice(i,i+1) =="A")|| (str.slice(i,i+1) == "e")||(str.slice(i,i+1) =="E")||(str.slice(i,i+1) =="i")||(str.slice(i,i+1) =="I")||(str.slice(i,i+1) =="o")||(str.slice(i,i+1) =="O")||(str.slice(i,i+1) =="u")||(str.slice(i,i+1) =="U")){
		 n = str.replace(str.slice(i,i+1),"-");
		 str = n;}
}

console.log(str);*/

//solution2
for (var i = 0;i<str.length;i++){
	n = str.slice(i,i+1);
	for (var j = 0;j<vowels.length;j++){
		if(n == vowels[j]){
			b = str.replace(str.slice(i,i+1),"-");
			str = b;}
	}
}

console.log(str);