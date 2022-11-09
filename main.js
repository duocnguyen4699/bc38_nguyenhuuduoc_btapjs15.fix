// Bài 1

// INPUT: Nhập vào điểm chuẩn, điểm thi của 3 môn, chọn vùng và đối tượng
// được cộng điểm.


// PROCESS:
// Nhập điểm chuẩn điểm thi 3 môn và chọn vùng, đối tượng cộng điểm
// Cho chọn vùng phù hợp với số điểm được cộng
// Cho chọn đối tượng phù hợp với điểm được cộng

//   Tính cộng thức:
// - Nếu 1 trong 3 điểm môn thi bằng 0 thì xuất ra kết quả "Rớt"
//     - Nếu tổng điểm 3 môn lớn hơn điểm chuẩn thì xuất ra kết quả "Đậu"

//         - Còn thấp hơn sẽ xuất ra kết quả "Rớt"

// Xuất kết Quả

// OUTPUT: Xuất ra số điểm và kết quả

function result() {
    var exemScore1 = document.getElementById("exemScore1").value * 1;
    var exemScore2 = document.getElementById("exemScore2").value * 1;
    var exemScore3 = document.getElementById("exemScore3").value * 1;
    var point = document.getElementById("point").value * 1;
    var zone = document.getElementById("zone").value;
    var khuvucA = document.getElementById("khuvucA").value;
    var khuvucB = document.getElementById("khuvucB").value;
    var khuvucC = document.getElementById("khuvucC").value;
    var people = document.getElementById("people").value;
    var p1 = document.getElementById("p1").value;
    var p2 = document.getElementById("p2").value;
    var p3 = document.getElementById("p3").value;
    var total = 0;
    var point = document.getElementById("point").value * 1;
    var x;
    var y;
    var result = "";
    if (people == p1) {
        x = 2.5;
    } else if (people == p2) {
        x = 1.5;
    } else if (people == p3) {
        x = 1;
    }
    if (zone == khuvucA) {
        y = 2;
    } else if (zone == khuvucB) {
        y = 1;
    } else if (zone == khuvucC) {
        y = 0.5;
    }
    total = exemScore1 + exemScore2 + exemScore3 + x + y;
    if (exemScore1 === 0 || exemScore2 === 0 || exemScore3 === 0) {
        result = "Bạn đã rớt. Vì có môn thi 0 điểm";
    } else if (total >= point) {
        result = "Điểm của bạn là " + total + ". Bạn đã đậu";
    } else {
        result = "Điểm của bạn là " + total + ". Bạn đã rớt";
    }
    document.getElementById("info").innerHTML = result;
}

// BÀI 2
// INPUT: Nhập vào tên và số Kw

// PROCESS:
//       Nhập vào tên và số Kw

//         Tính cộng thức:
// - Dưới 50Kw = Số Kw được nhập * 500đ
//     - Trên 50Kw = 500 * 50 + 650 * (Số Kw được nhập - 50);
// - Trên 100Kw = 500 * 50 + 650 * 50 + 850 * (Số Kw được nhập - 150)
// - Trên 150Kw = 500 * 50 + 650 * 50 + 850 * 100 + 1100 * (Số Kw được nhập
//     - 200);
// - Còn lại = 500 * 50 + 650 * 50 + 850 * 100 + 1100 * 150 + 1300 * (Số Kw
//         được nhập - 350);

//       Xuất kết Quả

// OUTPUT: Xuất ra tên và tiền điện


function electricityBill() {
    var name = document.getElementById("name").value;
    var electricity = document.getElementById("electricity").value * 1;
    var money;
    var total;
    var result = "";
    if (electricity > 0 && electricity <= 50) {
        money = 500 * electricity;
    } else if (electricity > 50 && electricity <= 100) {
        money = 500 * 50 + 650 * (electricity - 50);
    } else if (electricity > 100 && electricity <= 200) {
        money = 500 * 50 + 650 * 50 + 850 * (electricity - 150);
    } else if (electricity > 200 && electricity <= 350) {
        500 * 50 + 650 * 50 + 850 * 100 + 1100 * (electricity - 200);
    } else {
        money =
            500 * 50 + 650 * 50 + 850 * 100 + 1100 * 150 + 1300 * (electricity - 350);
    }
    total = money;
    result = "Giá tiền điện của " + name + " là " + total;
    document.getElementById("info1").innerHTML = result;
}

// Bài 3


// INPUT: Nhập vào tên, thu nhập năm và số người phụ thuộc

// PROCESS:
//       Nhập vào tên, tổng thu nhập năm và số người phụ thuộc

//         Tính cộng thức:
// - Thu nhập chịu thuế = tổng thu nhập năm - 4tr - số người phụ thuộc
// 1.6tr
//     - Đến 60tr = Thu nhập chịu thuế * 0.05
//         - Trên 60 đến 120 = 60tr * 0.05 + (Thu nhập chịu thuế - 60tr) * 0.1;
// - Trên 120 đến 210 = 60tr * 0.05 + 60tr * 0.1 + (Thu nhập chịu thuế -
//     120tr) * 0.15;
// - Trên 210 đến 384 = 60tr * 0.05 + 60tr * 0.1 + 120tr * 0.15 + (Thu nhập
//         chịu thuế - 210tr) * 0.2;
// - Trên 384 đến 624 = 60tr * 0.05 + 60tr * 0.1 + 120tr * 0.15 + 210tr * 0.2
//     + (Thu nhập chịu thuế - 384tr) * 0.25;
// - Trên 624 đến 960 = 60tr * 0.05 + 60tr * 0.1 + 120tr * 0.15 + 210tr * 0.2
//     + 384tr * 0.25 + (Thu nhập chịu thuế - 624tr) * 0.3;
// - Trên 960 = 60tr * 0.05 + 60tr * 0.1 + 120tr * 0.15 + 210tr * 0.2 +
//     384tr * 0.25 + 624tr * 0.3 + (Thu nhập chịu thuế - 960tr) * 0.35;

//         Xuất kết Quả

// OUTPUT: Xuất ra tên và xuất ra thuế thu nhập cá nhân
function totalIncome() {
    var fullName = document.getElementById("fullName").value;
    var salaryOfYear = document.getElementById("salaryOfYear").value * 1;
    var numberOfPeople = document.getElementById("numberOfPeople").value * 1;
    var money;
    var total;
    var result = "";
    money = salaryOfYear - 4e6 - numberOfPeople * 16e5;
    if (money <= 6e7) {
        total = money * 0.05;
    } else if (money > 6e7 && money <= 12e7) {
        total = 6e7 * 0.05 + (money - 6e7) * 0.1;
    } else if (money > 12e7 && money <= 21e7) {
        total = 6e7 * 0.05 + 6e7 * 0.1 + (money - 12e7) * 0.15;
    } else if (money > 21e7 && money <= 384e6) {
        total = 6e7 * 0.05 + 6e7 * 0.1 + 12e7 * 0.15 + (money - 21e7) * 0.2;
    } else if (money > 384e7 && money <= 624e7) {
        total =
            6e7 * 0.05 +
            6e7 * 0.1 +
            12e7 * 0.15 +
            21e7 * 0.2 +
            (money - 384e7) * 0.25;
    } else if (money > 624e6 && money <= 96e7) {
        total =
            6e7 * 0.05 +
            6e7 * 0.1 +
            12e7 * 0.15 +
            21e7 * 0.2 +
            384e7 * 0.25 +
            (money - 624e6) * 0.3;
    } else if (money > 96e7) {
        total =
            6e7 * 0.05 +
            6e7 * 0.1 +
            12e7 * 0.15 +
            21e7 * 0.2 +
            384e7 * 0.25 +
            624e6 * 0.3 +
            (money - 96e7) * 0.35;
    }
    result = "Thuế thu nhập cá nhận của " + fullName + " là " + total;
    document.getElementById("info2").innerHTML = result;
}

// BÀI 4
// INPUT: Chọn loại khách hàng và nhập vào mã khách hàng, số kênh cao cấp
//       và số kết nối


// PROCESS:
     
//         Chọn loại khách hàng và nhập vào mã khách hàng, số kênh cao cấp và số
//         kết nối   

//         Tính cộng thức:
// - Nếu khách hàng là nhà dân: Hóa đơn = phí xử lý hóa đơn + phí dịch vụ
//         cơ bản + (số kênh cao cấp * 7.5$)
// - Nếu khách hàng là doanh nghiệp:
// + Nếu số kết nối >= 10: Hóa đơn = phí xử lý hóa đơn + (phí dịch vụ cơ
// bản * số kết nối) + (số kênh cao cấp * 50$)
// + Còn lại: Hóa đơn = phí xử lý hóa đơn + (75$ * 10) + (số kết nối - 10)
//         * 5$ + (số kênh cao cấp * 50$)
      
//       Xuất kết Quả

// OUTPUT: Xuất ra mã khách hàng và số tiền trên hóa đơn

function price() {
    var in4 = document.getElementById("in4").value;
    var company = document.getElementById("company").value;
    var sim = document.getElementById("sim").value;
    var maKH = document.getElementById("maKH").value;
    var soKetNoi = document.getElementById("soKetNoi").value * 1;
    var soKenhCC = document.getElementById("soKenhCC").value * 1;
    var serviceCharge = 0;
    var channelRental = 0;
    var billFee;
    var total;
    var result;
    total = billFee + serviceCharge + channelRental;
    if (in4 == company) {
        billFee = 15;
        channelRental = soKenhCC * 50;
        if (soKetNoi <= 10) {
            serviceCharge = 75;
        } else if (soKetNoi > 10) {
            serviceCharge = 75 + (soKetNoi - 10) * 5;
        }
        total = billFee + serviceCharge + channelRental;
    } else if ((in4 = sim && soKetNoi == 0)) {
        billFee = 4.5;
        serviceCharge = 20.5;
        channelRental = soKenhCC * 7.5;
        total = billFee + serviceCharge + channelRental;
    }
    result = "Mã khách hàng: " + maKH + ". Tiền cáp: $" + total;
    document.getElementById("info3").innerHTML = result;
}