let TKb = JSON.parse(localStorage.getItem("TKb"))
if (TKb === null) {
    localStorage.setItem("TKb", JSON.stringify([
        {
            id: 0,
            fullName: "Phong1",
            email: "phong@gmail.com",
            password: "123",
            status: 0,
            sdt: "090909090"
        },
        {
            id: 1,
            fullName: "Phong1",
            email: "phong@gmail.com",
            password: "123",
            status: 0,
            sdt: "090909090"
        }
    ]))
}

let blogLogin = JSON.parse(localStorage.getItem("blogLogin"))
if (blogLogin === null) {
    localStorage.setItem("blogLogin", JSON.stringify(false))
}

let indexTKb = JSON.parse(localStorage.getItem("indexTKb"))
if (indexTKb === null) {
    localStorage.setItem("indexTKb", JSON.stringify(0))
}


//input Đăng ký
const DKemail = document.querySelector(".DKemail")
const DKname = document.querySelector(".DKname")
const DKpassword = document.querySelector(".DKpassword")
//input Đăng nhập
const DNname = document.querySelector(".DNname")
const DNpassword = document.querySelector(".DNpassword")
//Màng hình DK,DN
const MHdangky = document.querySelector(".dangKy")
const MHdangnhap = document.querySelector(".dangNhap")

function loginDK() {
    let idxLast = -1
    if (DKname.value !== "" && DKname.value !== "" && DKpassword.value !== "") {
        let DKnewTK = {
            id: TKb.length,
            fullName: DKname.value,
            email: DKemail.value,
            password: DKpassword.value,
            status: 0,
            sdt: "090909090"
        }
        console.log(TKb)
        TKb.push(DKnewTK)
        if (TKb.length > 0) {
            idxLast = TKb.length - 1;
        }
        localStorage.setItem("blogLogin", JSON.stringify(true))
        localStorage.setItem("TKb", JSON.stringify(TKb))
        localStorage.setItem("indexTKb", JSON.stringify(idxLast))
        window.location = "http://127.0.0.1:5500/html/index.html"
        reset()
    }
}

function checkLoginDN() {
    MHdangky.classList.add("none")
    MHdangnhap.classList.remove("none")
}

function checkLoginDK() {
    MHdangnhap.classList.add("none")
    MHdangky.classList.remove("none")
}


function loginDN() {
    let tamp = false
    console.log(DNname.value)
    console.log(DNpassword.value)
    for (let i = 0; i < TKb.length; i++) {
        console.log(TKb[i].id)
        if (DNname.value === TKb[i].email && DNpassword.value === TKb[i].password) {
            tamp = true
            MHdangky.classList.add("none")
            MHdangnhap.classList.remove("none")
            localStorage.setItem("indexTKb", JSON.stringify(i)) // Vi tri tai khoan
            localStorage.setItem("blogLogin", JSON.stringify(true)) // Choo biet dang nhap chua
            window.location = "http://127.0.0.1:5500/html/index.html"
        }
    }
    if (tamp === false) {
        alert("Mật khẩu hoặc tên của bạn không đúng")
    }
    reset()
}

function reset() {
    DKemail.value = ""
    DKname.value = ""
    DKpassword.value = ""
    DNname.value = ""
    DNpassword.value = ""
}


