let show = document.getElementById("show")

setInterval(function() {
    let date = new Date()
    let convert = date.toLocaleTimeString()
    show.textContent = convert
}, 1000)