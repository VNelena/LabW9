
function music(){
	var lyrics =" ";
	var i;
for (i=99;i>1; i=i-1) {

	lyrics +=i+ " bottles of beer on the wall " +i+ " bottles of beer. Take one down and pass it around, " + (i-1) + " bottles of beer on the wall" +"<br>";

    document.getElementById("Lyrics1").innerHTML =lyrics}


for (let i=1;i>0; i=i-1){
	document.getElementById("Lyrics2").innerHTML =i+ " bottles of beer on the wall " +i+ " bottles of beer. Take one down and pass it around,  no more bottles of beer on the wall"
}

document.getElementById("Lyrics").innerHTML ="No more bottles of beer on the wall, no more bottles of beer.Go to the store and buy some more, 99 bottles of beer on the wall"

}