
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result=[];

  if(!matrix) return [];
  
  matrix.map((item,i)=>{
    i%2!=0 ? item.reverse():item;
    result.push(...item)
  })
  
  return result
}
