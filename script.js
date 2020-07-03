var usedStorage = document.querySelector('span.user-gb')
var storageRemainder = document.querySelectorAll('span.user-gb')[1]

$("#range").change(function() {
    let rangeValue = event.target.value
    usedStorage.innerHTML = rangeValue
    storageRemainder.innerHTML = 1000 - rangeValue
})