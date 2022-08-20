   let arr = [];
   for(i=0;i<10;i++)
   {
        let num = (Math.floor(Math.random() * 1000));

        while(num<100)
        {
            num = (Math.floor(Math.random() * 1000));
        }

        arr.push(num);
   }

   console.log(arr);

/*
1. Write a program in the following steps
    a. Generates 10 Random 3 Digit number.
    b. Store this random numbers into a array.
    c. Then find the 2nd largest and the 2nd smallest element without sorting the array.
 */

   let smallest = 1000;
   let second_smallest = 1000;
   let largest = 0;
   let second_largest = 0;

   arr.map(num=>
    {
        if(num < smallest)
        {
            second_smallest= smallest;
            smallest = num;
        }
        else if(num < second_smallest)
        {
            second_smallest= num;
        }
        
        
        if(num > largest)
        {
            second_largest= largest;
            largest = num;
        }
        else if(num > second_largest)
        {
            second_largest= num;
        }

    }
   )

   console.log('smallest '+smallest)
   console.log('second_smallest '+second_smallest)
   console.log('largest '+largest)
   console.log('second_largest '+second_largest)


/**
 * 2.Extend the above program to sort the array and then find the 
 *   2nd largest and the 2nd smallest element.
 */

let sortedArr=arr.sort();
console.log(sortedArr);

console.log('smallest '+sortedArr[0])
console.log('second_smallest '+sortedArr[1])
console.log('largest '+sortedArr[sortedArr.length-1])
console.log('second_largest '+sortedArr[sortedArr.length-2])
