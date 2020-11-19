
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
 // creating a hashTag array to collect the hashTag from the while loop
  var hashTag = [];
 // using a while loop to loop through the length of hashTag 7 times 
while(hashTag.length < num){
 // the output will print the # 7 times in the console 
  hashTag = hashTag + "#";
  console.log(hashTag);
}

}

////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  for(let i = 1; i <= 15; i++){
    if(i %15 === 0){
      console.log('fizzbuzz')
      
    } else if (i %3 === 0){
      console.log('fizz')
    } else if(i %5 === 0){
      console.log('buzz')
    } else {
      console.log(i);
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(size) {
  let chessboard = "";
  for(let i = 0; i < size; i++){//1
      for(let j = 0; j < size; j++){//0
          if((i + j) % 2 === 0){
              chessboard += " ";
          }else{
              chessboard += "#";
      }
  }
  chessboard += "\n";
  //console.log(chessboard);
 }
//return chessboard;
 console.log(chessboard);
}


////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
