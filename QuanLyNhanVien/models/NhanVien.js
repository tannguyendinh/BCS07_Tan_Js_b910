function NhanVien(
  _taiKhoan,
  _hoTen,
  _eMail,
  _matKhau,
  _ngayLam,
  _luongCoBan,
  _chucVu,
  _gioLam
) {
  this.taiKhoan = _taiKhoan;
  this.hoTen = _hoTen;
  this.eMail = _eMail;
  this.matKhau = _matKhau;
  this.ngayLam = _ngayLam;
  this.luongCoBan = _luongCoBan;
  this.chucVu = _chucVu;
  this.gioLam = _gioLam;

  // this.tongLuong = function (tienViet) {
  //   var tienVietNam = tienViet.toLocaleString("vn-VN", {
  //     style: "currency",
  //     currency: "VND",
  //   });
  //   return tienVietNam;
  // };
 
  this.tinhTongLuong = function () {
    if (this.chucVu == "Sếp") {
      return this.luongCoBan * 3;
    } else if (this.chucVu == "Trưởng phòng") {
      return this.luongCoBan * 2;
    } else {
      return this.luongCoBan;
    }
  };

  this.xepLoai= function(){
    if (this.gioLam >= 192){
      return "nhân viên xuất sắc"
    } else if ( this.gioLam >= 176){
      return "nhân viên giỏi"
    } else if ( this.gioLam >=160){
      return "nhân viên khá"
    } else if (this.gioLam < 160 ){
      return "nhân viên tb"
    }
  }

  //   document.getElementById("tknv").value = taiKhoan;
  //   document.getElementById("name").value = hoTen;
  //   document.getElementById("email").value = eMail;
  //   document.getElementById("password").value = matKhau;
  //   document.getElementById("datepicker").value = ngayLam;
  //   document.getElementById("luongCB").value = luongCoBan;
  //   document.getElementById("chucvu").value = chucVu;
  //   document.getElementById("gioLam").value = gioLam;
}
