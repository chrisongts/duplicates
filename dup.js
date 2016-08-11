function getDuplicates(arr)
{
  if (arr.length === 0) {return false};
  var count = 0;
  for ( var i = 0; i <= arr.length-1; i++) {
    var str = arr[i];
    if (typeof(str) === "number") {
      var valid = true;
    } else
    {
      count += 1;
    }
  };

  if (count > 0) {return false};

// var arr = [2, 5, 22, 2, 5, 3, 2, 1, 1, 4, 3];

 arr.sort(function(a, b){return a - b});
 var newArr = [];
 var j = 0;
 for (var i = 0; i < arr.length-1; i++) {
   j += 1;
   if (arr[i] === arr[j]) {
     var a = newArr.indexOf(arr[i]);
     if (a <= -1){
       newArr.push(arr[i]);
     };
   };
 };
// console.log(newArr);

   };
 };
};
