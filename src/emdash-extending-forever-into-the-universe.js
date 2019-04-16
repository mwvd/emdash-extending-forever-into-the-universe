function foreverIntoTheUniverse (options) {

    if (typeof(howLong)==='undefined') howLong = 2;
    if (typeof(whatToReplace)==='undefined') whatToReplace = '—';
    if (typeof(whereToReplace)==='undefined') whatToReplace = 'body';
    if (typeof(howMuchCloserCouldWePossiblyBe)==='undefined') whatToReplace = '0.25';

    var extend = "<span style=\"letter-spacing:-" + howMuchCloserCouldWePossiblyBe + "em\">" + whatToReplace + "</span>"
    var replaceMe = whereToReplace.slice(0,1)
    var withMe = whereToReplace.substring(1)
    if (whereToReplace === 'body') {
        document.body.innerHTML = document.body.innerHTML.replace(new RegExp(whatToReplace, 'g'), extend.repeat(howLong-1) + whatToReplace);
    } else if (whereToReplace.slice(0,1) === '#') {
        var elementId = document.getElementById(withMe).innerHTML
        document.getElementById(withMe).innerHTML = elementId.replace(new RegExp(whatToReplace, 'g'), extend.repeat(howLong-1) + whatToReplace);
    } else if (whereToReplace.slice(0,1) === '.') {
        var elementClass = document.getElementsByClassName(withMe)
        for (var i=0;i<elementClass.length;i++){
            document.getElementsByClassName(withMe)[i].innerHTML = document.getElementsByClassName(withMe)[i].innerHTML.replace(new RegExp(whatToReplace, 'g'), extend.repeat(howLong-1) + whatToReplace);
        }
    } else {
        console.log('idk bro this shit is broken 4 u i guess')
    }
}
