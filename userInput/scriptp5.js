let element = $("#spinning");

// Simulate random interval for data being fetched from server
let randomIntervalSeconds = Math.random() * 10;
console.log(randomIntervalSeconds);
// TODO: keep rotating the element for randomIntervalSeconds
// I used below code along with setInterval with 1001 ms interval



setTimeout(function() {
    // Simulate data arrived callback.
    element.removeClass("go");
    element.css({ "transform": "rotateZ(" + (360 + 48) + "deg)", "transition-duration": 1.5 + "s" });

}, randomIntervalSeconds * 1000)