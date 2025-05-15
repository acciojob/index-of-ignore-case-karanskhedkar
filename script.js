function indexOfIgnoreCase(s1, s2) {
  // write your code here
	let index=-1;
	let str1Len=s1.length;
	let str2Len=s2.length;
	if(str2Len>str1Len){
		return -1;
	}
	s1=s1.toLowerCase();
	s2=s2.toLowerCase();
	let itrLen=str1Len-str2Len;
	for(let i=0;i<=itrLen;i++){
		if(s1.slice(i,i+str2Len)===s2){
		    index=i;
		    break;
		}
	}
	return index;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
