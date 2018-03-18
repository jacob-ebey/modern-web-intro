function addToElement (id, count, reset = false) {
  var element = document.getElementById(id)

  if (reset) {
    while (element.firstChild) {
      element.removeChild(element.firstChild)
    }
  }

  for (var i = 0; i < count; i++) {
    var newItem = document.createElement('p')

    newItem.innerText = 'Item ' + (i + 1)

    element.appendChild(newItem)
  }
}

function showmethemoney () {
  alert("MONEY")
}