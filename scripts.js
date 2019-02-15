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
    var secondOutput=sides[0]+" "+sides[1]+" "+sides[2]+" "+"make an equilateral triangle";
    document.getElementById("trackOutput").innerHTML=secondOutput;
  }
  else if(sides[0]===sides[1] || sides[0]===sides[2] || sides[1]===sides[2]){
    var thirdOutput=sides[0]+" "+sides[1]+" "+sides[2]+" "+"make an isosceles triangle";
    document.getElementById("trackOutput").innerHTML=thirdOutput;
  }
  else if(sides[0]!=sides[1] && sides[0]!=sides[2] && sides[2]!=sides[1] && sides[0]+sides[1]>sides[2] && sides[1]+sides[2]>sides[0] && sides[2]+sides[0]>sides[1]){
    var fourthOutput=sides[0]+" "+sides[1]+" "+sides[2]+" "+"make a scalene triangle";
    document.getElementById("trackOutput").innerHTML=fourthOutput;
  }
  else if(sides[0]+sides[1]<sides[2] && sides[1]+sides[2]<sides[0] && sides[2]+sides[0]<sides[1]){
    var fifthOutput=sides[0]+" "+sides[1]+" "+sides[2]+" "+"don't make a triangle";
    document.getElementById("trackOutput").innerHTML=fifthOutput;  
  }
}
