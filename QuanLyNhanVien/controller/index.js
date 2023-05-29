var arrNhanVien = [];

function renderGiaoDien() {
  var content = "";

  for (var i = 0; i < arrNhanVien.length; i++) {
    var nhanVien = arrNhanVien[i];
    var tongLuongNV = nhanVien.tinhTongLuong();
    var xepLoaiNV = nhanVien.xepLoai();

    content += `<tr>
<td class="nowrap">${nhanVien.taiKhoan}
    
</td>
<td>${nhanVien.hoTen}</td>
<td>${nhanVien.eMail}</td>
<td>${nhanVien.ngayLam}</td>
<td>${nhanVien.chucVu}</td>
<td>${tongLuongNV.toLocaleString("vn-VN", {
      style: "currency",
      currency: "VND",
    })}</td>
<td>${xepLoaiNV}</td>

<td><button onclick="xoaNhanVien('${
      nhanVien.taiKhoan
    }')" class="btn btn-danger mr3"><i class="fa-solid fa-trash-can" aria-hidden="true"></i></button>
<button id="btnEdit" onclick="suaNhanVien('${
      nhanVien.taiKhoan
    }')" class="btn btn-warning mr3" data-toggle="modal" data-target="#myModal" ><i class="fa-solid fa-pencil" aria-hidden="true"></i></button></td>
</tr>`;
  }

  document.getElementById("tableDanhSach").innerHTML = content;
}

// getStorage();

function themNhanVien() {
  // // lấy dữ liệu ng dung

  // var _taiKhoan = document.getElementById("tknv").value;
  // var _hoTen = document.getElementById("name").value;
  // var _eMail = document.getElementById("email").value;
  // var _matKhau = document.getElementById("password").value;
  // var _ngayLam = document.getElementById("datepicker").value * 1;
  // var _luongCoBan = document.getElementById("luongCB").value * 1;
  // var _chucVu = document.getElementById("chucvu").value;
  // var _gioLam = document.getElementById("gioLam").value * 1;

  // var nhanVien = new NhanVien(
  //   _taiKhoan,
  //   _hoTen,
  //   _eMail,
  //   _matKhau,
  //   _ngayLam,
  //   _luongCoBan,
  //   _chucVu,
  //   _gioLam
  // );
  var nhanVien = layGiaTriInput();
  arrNhanVien.push(nhanVien);
  //   console.log(nhanVien)
  // render lên giao diện bằng mảng vưÀ thêm
  renderGiaoDien();

  // reset lại gd khi nhập xong
  ganGiaTriInput("", "", "", "", "", "", "", "");

  // document.getElementById("tknv").value ="";
  // document.getElementById("name").value ="";
  // document.getElementById("email").value ="";
  // document.getElementById("password").value ="";
  // document.getElementById("datepicker").value ="" ;
  // document.getElementById("luongCB").value ="" ;
  // document.getElementById("chucvu").value ="";
  // document.getElementById("gioLam").value ="" ;
}

// //! reset input
// function ganGiaTriInput(
//   taiKhoan,
//   hoTen,
//   eMail,
//   matKhau,
//   ngayLam,
//   luongCoBan,
//   chucVu,
//   gioLam
// ) {
//   // reset lại gd khi nhập xong

//   document.getElementById("tknv").value = taiKhoan;
//   document.getElementById("name").value = hoTen;
//   document.getElementById("email").value = eMail;
//   document.getElementById("password").value = matKhau;
//   document.getElementById("datepicker").value = ngayLam;
//   document.getElementById("luongCB").value = luongCoBan;
//   document.getElementById("chucvu").value = chucVu;
//   document.getElementById("gioLam").value = gioLam;
// }

// //! tim vi tri nhan vien
// function timViTriNhanVien(taiKhoan) {
//   var viTri = -1;
//   arrNhanVien.forEach(function (item, index) {
//     if (item.taiKhoan == taiKhoan) {
//       viTri = index;
//     }
//   });
//   return viTri;
// }

//! xóa Nhân Viên

function xoaNhanVien(taiKhoan) {
  // console.log(taiKhoan);
  var index = timViTriNhanVien(taiKhoan);
  if (index != -1) {
    arrNhanVien.splice(index, 1);
    renderGiaoDien();
  }
}

//! sửa nhân viên

function suaNhanVien(taiKhoan) {
  document.getElementById("btnThemNV").style.display = "none";
  document.getElementById("btnCapNhat").style.display = "block";
  document.getElementById("header-title").innerHTML = "Chỉnh sửa nhân viên";

  document.getElementById("password").type = "text";

  var index = timViTriNhanVien(taiKhoan);
  var nhanVien = arrNhanVien[index];
  ganGiaTriInput(
    nhanVien.taiKhoan,
    nhanVien.hoTen,
    nhanVien.eMail,
    nhanVien.matKhau,
    nhanVien.ngayLam,
    nhanVien.luongCoBan,
    nhanVien.chucVu,
    nhanVien.gioLam
  );
  document.getElementById("tknv").readOnly = true;
}

function capNhapThongTinNV() {
  var nhanVienDaEdit = layGiaTriInput();
  var index = timViTriNhanVien(nhanVienDaEdit.taiKhoan);
  arrNhanVien[index] = nhanVienDaEdit;

  renderGiaoDien();

}
document.getElementById("btnCapNhat").onclick = capNhapThongTinNV;


