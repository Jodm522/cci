
function checkPermutation(str1, str2){
    if(str1.length !== str2.length) {
        return false
    }
    else if(str1 === str2){
        return true
    }
    else{
        let sorted= str1.split('').sort().join("") 
        let sorted2=str2.split('').sort().join("") 
        return sorted === sorted2
    }

}

console.log(checkPermutation("ASDF", "ASDF"))
console.log(checkPermutation("ASF", "ASDF"))