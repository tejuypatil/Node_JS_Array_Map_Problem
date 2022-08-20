
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