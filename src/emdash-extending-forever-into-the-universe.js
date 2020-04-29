function foreverIntoTheUniverse(options) {
  options.howLong = options.howLong || 2
  options.whatToReplace = options.whatToReplace || '—'
  options.whereToReplace = options.whereToReplace || 'body'
  options.howMuchCloserCouldWePossiblyBe = options.howMuchCloserCouldWePossiblyBe || '0.25'

  const extend = `<span style="letter-spacing:-${options.howMuchCloserCouldWePossiblyBe}em">${options.whatToReplace}</span>`
  const withMe = options.whereToReplace.substring(1)
  if (options.whereToReplace === 'body') {
    document.body.innerHTML = document.body.innerHTML.replace(
      new RegExp(options.whatToReplace, 'g'),
      extend.repeat(options.howLong - 1) + options.whatToReplace
    )
  } else if (options.whereToReplace.slice(0, 1) === '#') {
    const elementId = document.getElementById(withMe).innerHTML
    document.getElementById(withMe).innerHTML = elementId.replace(
      new RegExp(options.whatToReplace, 'g'),
      extend.repeat(options.howLong - 1) + options.whatToReplace
    )
  } else if (options.whereToReplace.slice(0, 1) === '.') {
    const elementClass = document.getElementsByClassName(withMe)
    for (let i = 0; i < elementClass.length; i++) {
      document.getElementsByClassName(withMe)[i].innerHTML = document
        .getElementsByClassName(withMe)
        [i].innerHTML.replace(new RegExp(options.whatToReplace, 'g'), extend.repeat(options.howLong - 1) + options.whatToReplace)
    }
  } else {
    console.log('idk bro this shit is broken 4 u i guess')
  }
}
