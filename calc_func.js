function solve() {
    let x = document.getElementById("result").value;
    let y = math.evaluate(x);
    document.getElementById("result").value = y;
}
function clr() {
    document.getElementById("result").value = '';
}
function dis(val) {
    document.getElementById("result").value += val;
}
document.getElementById("result").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        solve();
    }
});
document.addEventListener("keydown", function(event) {
    const validKeys = "0123456789+-*/.";
    if (validKeys.includes(event.key)) {
        dis(event.key);
    } else if (event.key === "Enter") {
        solve();
    } else if (event.key === "Escape") {
        clr();
    }
});
