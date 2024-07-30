/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let str = s.split("");
    let arr = [];

    for(let i = 0; i < str.length; i++){
        if(str[i] == "(" || str[i] == "[" || str[i] == "{"){
            arr.push(str[i]);
        }else if(arr.length <= 0 && (str[i] == ")" || str[i] == "]" || str[i] == "}")){
            return false;
        } else if(arr.length > 0){
            if(str[i] == ")" && arr[arr.length - 1] == "("){
                arr.pop();
            } else if(str[i] == "}" && arr[arr.length - 1] == "{"){
                arr.pop();
            }else if(str[i] == "]" && arr[arr.length - 1] == "["){
                arr.pop();
            } else {
                return false;
            }
        }
    }

    if(arr.length == 0){
        return true;
    } else {
        return false;
    }
};