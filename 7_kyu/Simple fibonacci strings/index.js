// example 
   // 4 => 01001010 f3 + f2
  //  5 => 0100101001001         f4 + f3

  
  
 // f2 = f1 + f0
// start = ''
// f0 = 0
// f1 = 01
// f2 = f1 + f0
// f3 = f2 + f1
// create an empty array 
   //fSring = []
// create a condition that check if the input is zero
     //start+=f0
   // create another condintion that check if the value is 1 
       // start+=f1

// create a condintion that check if the value 2 
      // start+=f2

   //create a condintion that check if the value is 3
       //start+=f3
      


        
 


       function solve(n){
        let start = ''
        let f0 = '0';
        let f1 = '01'
     
          if(n == 0){
                return f0;
            }
       
         else if (n == 1 ){  
              return f1
           }
      
       else {
         return solve(n-1) + solve(n - 2)
       }
     
     }