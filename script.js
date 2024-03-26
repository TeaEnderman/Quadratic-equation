function solve() {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;
    var solution = document.getElementById('solution');
//czeching if numbers are numbers ykwim
if (isNaN(a) || isNaN(b) || isNaN(c)) {
    solution.innerHTML = "Please enter valid numbers for a, b, and c.";
    return;
}
//czeching if the coeficient it not 0
    // Check if a is not zero
if (a == 0) {
        solution.innerHTML = "The coefficient 'a' should not be zero.";
        return;
    }

     var discriminant = b * b - 4 * a * c;
    if (discriminant < 0) {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    } else if (discriminant == 0) {
        var root = -b / (2 * a);
        solution.innerHTML = "One root: " + root;
    } else {
        var root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        var root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        solution.innerHTML = "Two roots: " + root1 + " and " + root2;
    }
}
