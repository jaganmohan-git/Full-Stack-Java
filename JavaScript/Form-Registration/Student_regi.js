function valid() {
    var nameleng = /^([a-zA-Z]{6,15})$/;
    var name = document.getElementById('inputname3').value.trim();

    if (!nameleng.test(name)) {
        alert("Enter a valid Username with 6 to 15 letters");
        return false;
    }
    return true;
}