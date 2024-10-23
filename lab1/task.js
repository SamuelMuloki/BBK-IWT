function larger() {
    var str1 = document.getElementById("num1").value;
    var str2 = document.getElementById("num2").value;
    var num1 = parseInt(str1);
    var num2 = parseInt(str2);

    return `The larger of ${num1} and ${num2} is ${num1 > num2 ? num1 : num2}`;
}