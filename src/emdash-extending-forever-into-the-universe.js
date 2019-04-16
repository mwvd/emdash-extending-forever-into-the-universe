function setDefaults(options, defaults){
    return _.defaults({}, _.clone(options), defaults);
}

function foreverIntoTheUniverse (options) {
    var defaults = {
        howLong: 2,
        whatToReplace: '—',
        whereToReplace: 'body',
        howMuchCloserCouldWePossiblyBe: '0.25'
    };
    options = setDefaults(options, defaults);
    var extend = "<span style=\"letter-spacing:-" + options.howMuchCloserCouldWePossiblyBe + "em\">" + options.whatToReplace + "</span>"
    var replaceMe = options.whereToReplace.slice(0,1)
    var withMe = options.whereToReplace.substring(1)
    if (options.whereToReplace === 'body') {
        document.body.innerHTML = document.body.innerHTML.replace(new RegExp(options.whatToReplace, 'g'), extend.repeat(options.howLong-1) + options.whatToReplace);
    } else if (options.whereToReplace.slice(0,1) === '#') {
        var elementId = document.getElementById(withMe).innerHTML
        document.getElementById(withMe).innerHTML = elementId.replace(new RegExp(options.whatToReplace, 'g'), extend.repeat(options.howLong-1) + options.whatToReplace);
    } else if (options.whereToReplace.slice(0,1) === '.') {
        var elementClass = document.getElementsByClassName(withMe)
        for (var i=0;i<elementClass.length;i++){
            document.getElementsByClassName(withMe)[i].innerHTML = document.getElementsByClassName(withMe)[i].innerHTML.replace(new RegExp(options.whatToReplace, 'g'), extend.repeat(options.howLong-1) + options.whatToReplace);
        }
    } else {
        console.log('idk bro this shit is broken 4 u i guess')
    }
}
