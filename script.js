function firstNonRepeatedChar(str) {
	// Write your code here
	   const charCount={};

	   for(let i=0;i<str.length;i++){
			charCount[str[i]]=(charCount[str[i]]||0)+1;
	   }

	   for(let x of str){
		if(charCount[x]==1){
			return x;
		}
	   }
	   return null;
   }
const input = prompt("Enter a string"); 
alert(firstNonRepeatedChar(input)); 
