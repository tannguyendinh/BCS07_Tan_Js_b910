//! reset input
function ganGiaTriInput(
  taiKhoan,
  hoTen,
  eMail,
  matKhau,
  ngayLam,
  luongCoBan,
  chucVu,
  gioLam
) {
  // reset lại gd khi nhập xong

  document.getElementById("tknv").value = taiKhoan;
  document.getElementById("name").value = hoTen;
  document.getElementById("email").value = eMail;
  document.getElementById("password").value = matKhau;
  document.getElementById("datepicker").value = ngayLam;
  document.getElementById("luongCB").value = luongCoBan;
  document.getElementById("chucvu").value = chucVu;
  document.getElementById("gioLam").value = gioLam;
}

//! tim vi tri nhan vien
function timViTriNhanVien(taiKhoan) {
  var viTri = -1;
  arrNhanVien.forEach(function (item, index) {
    if (item.taiKhoan == taiKhoan) {
      viTri = index;
    }
  });
  return viTri;
}

function layGiaTriInput() {
  // lấy dữ liệu ng dung

  var _taiKhoan = document.getElementById("tknv").value;
  var _hoTen = document.getElementById("name").value;
  var _eMail = document.getElementById("email").value;
  var _matKhau = document.getElementById("password").value;
  var _ngayLam = document.getElementById("datepicker").value * 1;
  var _luongCoBan = document.getElementById("luongCB").value * 1;
  var _chucVu = document.getElementById("chucvu").value;
  var _gioLam = document.getElementById("gioLam").value * 1;

  // var valid = true;
  // valid = 
  // checkInput(_taiKhoan, "tbTK") ;
  
  // if (!valid){
  //   return
  // }

  var nhanVien = new NhanVien(
    _taiKhoan,
    _hoTen,
    _eMail,
    _matKhau,
    _ngayLam,
    _luongCoBan,
    _chucVu,
    _gioLam
  );
  return nhanVien;
}

//!  reset from 
function resetFrom() {
  document.getElementById("tknv").readOnly = false;
  document.getElementById("header-title").innerHTML = "Thêm nhân viên mới";
  document.getElementById("btnThemNV").style.display = "block";
  document.getElementById("btnCapNhat").style.display = "none";
  ganGiaTriInput("", "", "", "", "", "", "", "");
}

