const Anagram = (str1,str2) => {
    const formate=(str)=> {
return str.toLowerCase().replace(/[^a-z]/g,'').split('').sort().join('');
    }
   return formate(str1) === formate(str2)
}
console.log(Anagram("listen","silent"))
console.log(Anagram("rat","car"))
console.log(Anagram("hello","world"))