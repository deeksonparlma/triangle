function  tracker(){
  /*USER INTERFACE LOGIC*/

  var collect1=parseInt(document.getElementById("sideA").value);
  var collect2=parseInt(document.getElementById("sideB").value);
  var collect3=parseInt(document.getElementById("sideC").value);
  var sides=[collect1,collect2,collect3];

  /*BUSINESS LOGIC*/

  if(sides[0]<=0 || sides[1]<=0 || sides[2]<=0){
    var firstOutput=sides[0]+" "+sides[1]+" "+sides[2]+" "+"can't make a triangle";
    document.getElementById("trackOutput").innerHTML=firstOutput;
  }
  else if(sides[0]===sides[1] && sides[1]===sides[2] && sides[2]===sides[0]){
  }
}
