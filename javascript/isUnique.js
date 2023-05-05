function isUnique1(str){
   let checkObj = {}

   for(let i=0; i< str.length;i++){
    let currLetter = str[i];

    if(!checkObj[currLetter]){ 
        checkObj[currLetter] = 1
        }
    
    else if(checkObj[currLetter]){ 
            return false
            }
   }
   

   return true
}

function isUnique2(str){
    for(let i = 0; i <str.length; i++){
        let currLetter = str[i]
        for(let j=i+1;j< str.length; j++){
            if(str[j]=== currLetter){
                return false
            }
        }
    }
        return true
}


