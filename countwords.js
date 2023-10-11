var paragarph=`A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs..`
paragarph=paragarph.toLowerCase();

paragarph=paragarph.replace(/[,.!#$@%&""]/g,'')
console.log(paragarph);
paragarph=paragarph.split(" ");
console.log(paragarph);

var newarray=[]
var number='8';
var count=1;

for(let i=0;i<paragarph.length;i++){
	if(paragarph[i]!=number){
        for(let j=i+1;j<paragarph.length;j++){
			if(paragarph[i]==paragarph[j]){
				count++;
				paragarph[j]=number;
			}}
			newarray.push([paragarph[i],count]);
		    count=1;}}`	1`

for(let k=0;k<newarray.length;k++){
	for(let m=k+1;m<newarray.length;m++ ){
		if(newarray[k][1]<newarray[m][1]){
			let temp=newarray[k];
			newarray[k]=newarray[m];
			newarray[m]=temp;
			}}}	

var top=newarray.slice(0,3);
console.log(top);	
var text=""


for(let z=0;z<newarray.length;z++){
	
	text=text+"<h1>"+newarray[z][0]+"------------>"  +newarray[z][1] + "times occurs"+"</h1>"
}
document.getElementById('count').innerHTML=text;

		
	
		

		
		
	












