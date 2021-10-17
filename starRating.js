function StarRating(str) {
 let arr = [];
 let rounded = Math.floor(str);
 let half = (rounded - str) !== 0;

   for(i = 0; i < 5; i++) {
    var value = i < rounded ? "full" : i == rounded & half ? "half" : "empty"
    arr.push(value)
    
  } 
  return arr=arr.join(' ')
}
console.log(StarRating(0.38))
