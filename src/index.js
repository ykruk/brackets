module.exports = function check(str, bracketsConfig) {
    if(str.length%2 === 1) return false;
    //no need to check if odd number of brackets

    let brackets = {};
  
    //filling obj 'brackets' with data from bracketsConfig (opening and closing brackets used in string)
    bracketsConfig.forEach(function(element){
        brackets[element[0]] = element[1];
    });
  
    let testStorage = [];

    let testStr = str.split('');
  
    for (let i = 0; i < testStr.length; i++) {
      if (testStr[i] in brackets) {
        //if an opening bracket, add it to the storage
        if (testStr[i] === brackets[testStr[i]]) {
          // check for the same brackets
          testStorage[testStorage.length-1] === testStr[i] ? testStorage.pop() : testStorage.push(testStr[i]);
        } else {
          testStorage.push(testStr[i]);
        }
      } else if (brackets[testStorage[testStorage.length-1]] === testStr[i]) {
        //if it is a closing bracket for the last opened one
        testStorage.pop();
      }
    }
    return (testStorage.length === 0) ? true : false; 
}
