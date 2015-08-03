// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){

    var allElements = document.all; //collect all html elements
    var results = []; //array for returning results
    var classes = []; //array for collecting classes of all elements

    for(var i =0;i<allElements.length;i++){
        if(allElements[i].className && allElements[i].className !== '') {
            classes = allElements[i].className.split(' ');
            classes.forEach(function(singleClass){
                if(singleClass === className) {
                    results.push(allElements[i]);
                }
            });
        }
    }
    return results;
};