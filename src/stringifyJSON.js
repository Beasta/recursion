// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
    var str="";

    if (obj===null) {
        str+="null";
    }else if(typeof obj === 'function' || obj===undefined){
        str="";
    }else if (Array.isArray(obj)) {
        str+="[";
        for (var i=0; i <obj.length-1; i++) {
            if(typeof obj[i]==='function' || obj[i]===undefined){
            }else {
                str += stringifyJSON(obj[i]) + ",";
            }
        }
        if (typeof obj[obj.length-1]==='function' || obj[obj.length-1]===undefined){
        }else {
            str += stringifyJSON(obj[obj.length - 1]); //this one is outside the for loop because it doesn't need comma
        }
        str+="]";
    } else if (typeof obj === 'object') {
        var keyArray=Object.keys(obj);
        str+="{";

        for (var i= 0; i < keyArray.length-1; i++) {
            var theValue=stringifyJSON(obj[keyArray[i]]);
            if(typeof obj[keyArray[i]]!=='function' && obj[keyArray[i]]!==undefined) { //don't do anything if the value is function or undefined
                str += "\"" + keyArray[i] + "\"" + ":" + theValue + ",";
            }
        }
        var theValue=stringifyJSON(obj[keyArray[keyArray.length - 1]]);
        if (keyArray.length!==0 && //make sure it is not an empty object before adding a key
            typeof obj[keyArray[keyArray.length - 1]] !== 'function' && //making sure its not a function before adding a keay
            obj[keyArray[keyArray.length - 1]]!==undefined) { //lastly, checking for undefined
            str += "\"" + keyArray[keyArray.length - 1] + "\"" + ":" + theValue;
        };
        str+="}";
    } else if (typeof obj === 'string') {
        str+="\""+obj+"\"";
    } else if (typeof obj === 'boolean') {
        str+=obj.toString()
    } else if (typeof obj === 'number') {
        str+=obj.toString();
    }
    return str;
};
