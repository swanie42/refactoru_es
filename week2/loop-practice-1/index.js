// - 0 100 200 300 400 500


for(var i = 0; i < 600; i=i+100){
  console.log(i);
}


// - 1 2 4 8 16 32 64

for (var i = 1; i < 65; i=i*2){
    console.log(i);
}
// // - 1 1 1 2 2 2 3 3 3

for (var i = 1; i<=3; i++){
    for(var j = 0; j< 3; j++) {
  console.log(i);
}
}

// - 0 2 4 6 8 10
for (var i = 0; i < 11; i=i+2){
    console.log(i);
}
// - 3 6 9 12 15
for (var i = 3; i < 16; i=i+3){
    console.log(i);
}
// - 9 8 7 6 5 4 3 2 1 0
for (var i = 9; i >= 0; i=i-1){
    console.log(i);
}
// - 0 1 2 3 0 1 2 3 0 1 2 3
for (var i = 0; i<3; i++){
    for(var j = 0; j<=3; j++) {
  console.log(j);
}
}