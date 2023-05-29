function kiemTraInput(dataInput, idAlert) {
  if (dataInput) {
    document.getElementById(idAlert).innerHTML = "";
    return true;
  } else {
    document.getElementById(idAlert).innerHTML = "Vui lòng nhập lại";
    return false;
  }
}

function kiemTraTaiKhoan(dataInput, idAlert) {
  var regexTK = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{4,6}$/g;
  var tempTK = regexTK.test(dataInput);
  if (tempTK) {
    document.getElementById(idAlert).innerHTML = "";
    return true;
  } else {
    document.getElementById(idAlert).innerHTML =
      "Vui lòng nhập lại tên tài khoản(4-6 ký số, không có khoảng trống).";
    return false;
  }
}
