function MaopaoSort(elements){
   for(var i=0;i<elements.length-1;i++){
      for (var j=0;j<elements.length-1-i;j++){
         if(elements[j]>elements[j+1]){
            var swap=elements[j];
            elements[j]=elements[j+1];
            elements[j+1]=swap;
         }
      }
   }
}
function quickSort(elements){
   if(elements.length<=1){
      return elements;
   }
   var pivotIndex=Math.floor(elements.length/2);
   var pivot=elements.splice(pivotIndex,1)[0];
   var left=[];
   var right=[];
   for(var i=0;i<elements.length;i++){
      if(elements[i]<pivot){
         left.push(elements[i]);
      }else{
         right.push(elements[i]);
      }
   }
   return quickSort(left).concat([pivot],quickSort(right));
};
var elements=[3,1,5,7,2,4,9,6,10,8];
console.log('before: '+elements);
MaopaoSort(elements);
console.log('after: '+elements);
console.log(quickSort(elements));
