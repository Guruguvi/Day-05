// 1)Print odd numbers in an array
console.log("answer for 1 ques");                                 
  var oddarray=[];
  let anofun=(array)=>{
      for(let ele of array){                              //arrow func
          if(ele%2!==0)
          oddarray.push(ele);
      }
      return oddarray;
  }
  
  console.log(anofun([1,2,3,4,5,6,7,8,9,10]));
 
  
  // 2)Convert all the strings to title caps in a string array
  console.log("answer for 2nd ques");
  var caparray=[];                                             //arrowfunc
  let anofun2=(str)=>{
      for (let iterator of str) {
      let a= iterator.toUpperCase(); 
      caparray.push(a);
      }
      return caparray;
   
  }
  
  console.log(anofun2(["ajith","deepan","aravindh","madan"]));
  
  //3)sum of all numbers in an array
  
  console.log("answer for 3 ques");
                                                         
      var output=0;
      let anofun3=(str)=>{
      for (let iterator of str) {                               //arrow func
          output+=iterator;
      }
      return output;
      }
      console.log(anofun3([23,23,70,45]));

  
  
  //4)Return all the prime numbers in an array
  console.log("answer for 4 ques");
  primearray=[];
  nonprimearray=[];                                           //arrow func
  let anofun4=(array)=>{
      
      for (var iterator of array) {
          for (var i = 2; i < iterator; i++) {
              a=i;
              if(iterator%i==0){
              nonprimearray.push(iterator);
             break;}
          }   
          if(iterator%a!==0){
          primearray.push(iterator);}
  }
  return primearray;
  }
  
  console.log(anofun4([3,7,15,21,56,11]));
  
  //5) Return all the palindromes in an array
  console.log("answer for 5 ques");                                                    
  var reversedName=[];
  var palindromeNames=[];  
  
  let anofun5=(array)=>{
      for (var iterator of array) {
          for(i=iterator.length-1;i>=0;i--){
             reversedName.push(iterator[i]); 
             
          }
          reversedstring=reversedName.join("");
            
            if(reversedstring.toUpperCase() === iterator.toUpperCase())
            {console.log(reversedstring)}
           
            for(i=iterator.length-1;i>=0;i--){
              reversedName.pop(iterator[i]); 
              
                }
                
         }
          return 0;
      }
       console.log(anofun5(["racecar","madam","level","access","lock"])); 