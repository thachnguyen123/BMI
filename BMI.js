let cn = prompt("nhập cân nặng (kg)");
let cc = prompt("nhập chiều cao (m)");
BMI = cn / (cc * cc);
if (BMI < 18.5) {
    alert("Gầy");
} else if (18.5 <= BMI&&BMI <= 24.9) {
    alert("Bình thường");
} else if (25 <= BMI&&BMI <= 29.9) {
    alert("Mập");
} else if (30 <= BMI&&BMI<= 34.4) {
    alert("Béo cấp 1");
} else if (35 <= BMI&&BMI <= 39.9) {
    alert("Béo cấp 2");
} else {
    alert("Nguy hiểm");
}
