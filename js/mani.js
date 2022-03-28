var validation = new Validation();

getEle = (id) => {
  return document.getElementById(id);
};

checkFaulsForm=()=>{
    let isValid = true;
    var fName = getEle("firstName").value;
    var lName = getEle("lastName").value;
    var email = getEle("email").value;
    var pass = getEle("password").value;

    isValid &= validation.checkEmpty(fName, "exampleInputFirstName", "Têm Ko Đc Để Trống") 
    && validation.checkName(fName, "exampleInputFirstName", "Têm Chỉ Chứa Các Ký Tự Chữ");

    isValid &= validation.checkEmpty(lName, "exampleInputLastName", "Têm Ko Đc Để Trống") 
    && validation.checkName(lName, "exampleInputLastName", "Têm Chỉ Chứa Các Ký Tự Chữ");

    isValid &= validation.checkEmpty(email, "exampleInputEmail", "Email Ko Đc Để Trống")
    && validation.checkEmail(email, "exampleInputEmail", "Email Ko Đúng Định Dạng");

    isValid &= validation.checkEmpty(pass, "exampleInputPassword", "Mật Khẩu Ko Đc Để Trống")
    && validation.checkPass(pass, "exampleInputPassword", "Mật Khẩu Ko Đúng Định Dạng");

    if(isValid){
        console.log("Succes");
    }
}

