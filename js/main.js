function getTime1() {
    var today = new Date();
    var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date;
    return dateTime
}
const web_url = "https://finalexam-blog-phong.vercel.app"


//-----------------------------------khai bao bien (input,button,img...)--------------------------------//
const img = document.querySelector(".img")
const blogThuong = document.querySelector(".blogThuong")
const hotblog = document.querySelector(".hotblogblog")
const hotblog__blog = document.querySelector(".hotblog__blog")
const hotblog__blog_left = document.querySelector(".hotblog__blog-left")

// const hotblogDetail = document.querySelector
//-----------------------------------//khai bao bien (input,button,img...)//--------------------------------//

//-----------------------------------localStorage---------------------------------------//
let baiviet = JSON.parse(localStorage.getItem("baiviet"))
if (baiviet === null) {
    localStorage.setItem("baiviet", JSON.stringify([
        {
            idbv: '1',
            tilte: "bai viet thang 1",
            content: "",
            banner: "https://images.pexels.com/photos/17982042/pexels-photo-17982042/free-photo-of-chim-thu-v-t-chi-nhanh-nhi-t-d-i.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            status: 1,
            display: true,
            hot: true,
            CreatedAT: getTime1(),
            idauthor: 0,
            idDM: 0
        },
        {
            idbv: '2',
            tilte: "bai viet thang 1",
            content: "",
            banner: "https://images.pexels.com/photos/17982042/pexels-photo-17982042/free-photo-of-chim-thu-v-t-chi-nhanh-nhi-t-d-i.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            status: 2,
            display: true,
            hot: false,
            CreatedAT: getTime1(),
            idauthor: 1,
            idDM: 2
        },
        {
            idbv: '3',
            tilte: "bai viet thang 1",
            content: "",
            banner: "https://images.pexels.com/photos/17982042/pexels-photo-17982042/free-photo-of-chim-thu-v-t-chi-nhanh-nhi-t-d-i.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            status: 2,
            display: true,
            hot: false,
            CreatedAT: getTime1(),
            idauthor: 2,
            idDM: 3
        },
        {
            idbv: '4',
            tilte: "bai viet thang 1",
            content: "",
            banner: "https://images.pexels.com/photos/17982042/pexels-photo-17982042/free-photo-of-chim-thu-v-t-chi-nhanh-nhi-t-d-i.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            status: 2,
            display: true,
            hot: false,
            CreatedAT: getTime1(),
            idauthor: 4,
            idDM: 1
        },
        {
            idbv: '5',
            tilte: "bai viet thang 1",
            content: "",
            banner: "https://images.pexels.com/photos/17982042/pexels-photo-17982042/free-photo-of-chim-thu-v-t-chi-nhanh-nhi-t-d-i.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            status: 3,
            display: true,
            hot: false,
            CreatedAT: getTime1(),
            idauthor: 3,
            idDM: 2
        },
        {
            idbv: '6',
            tilte: "bai viet thang 1",
            content: "",
            banner: "https://images.pexels.com/photos/17982042/pexels-photo-17982042/free-photo-of-chim-thu-v-t-chi-nhanh-nhi-t-d-i.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            status: 3,
            display: true,
            hot: false,
            CreatedAT: getTime1(),
            idauthor: 3,
            idDM: 1
        },
        {
            idbv: '7',
            tilte: "bai viet thang 1",
            content: "",
            banner: "https://images.pexels.com/photos/17982042/pexels-photo-17982042/free-photo-of-chim-thu-v-t-chi-nhanh-nhi-t-d-i.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            status: 3,
            display: true,
            hot: false,
            CreatedAT: getTime1(),
            idauthor: 4,
            idDM: 2
        }
    ]))
}

let danhMuc = JSON.parse(localStorage.getItem("danhMuc"))
if (danhMuc === null) {
    localStorage.setItem("danhMuc", JSON.stringify([
        {
            id: 1,
            nameDM: "Nghệ thuật",
        },
        {
            id: 2,
            nameDM: "Công nghệ",
        },
        {
            id: 3,
            nameDM: "Thời trang",
        },
        {
            id: 4,
            nameDM: "Làm đẹp",
        },
        {
            id: 5,
            nameDM: "Sức khoẻ",
        },
        {
            id: 6,
            nameDM: "Du lịch",
        },
        {
            id: 7,
            nameDM: "Thủ công",
        }
    ]))
}

let taiKhoan = JSON.parse(localStorage.getItem("TKb")) || []


let idBV = JSON.parse(localStorage.getItem("idBV"))
if (idBV === null) {
    localStorage.setItem("idBV", JSON.stringify(-1))
}
// -----------------------------------//localStorage//---------------------------------------//
// -----------------------------------hien thi bai viet---------------------------------------//
function hienThiBV() {
    if (hotblog__blog !== null) {
        hotblog__blog.innerHTML = ""
        for (let i = 0; i < baiviet.length; i++) {
            if (baiviet[i].display === true) {//y
                // let a = document.createElement("a")
                // a.href = `http://127.0.0.1:5500/baiCuoiKi/html/detail.html${baiviet[i].idauthor}`
                if (baiviet[i].status === 2) {
                    let blt = document.createElement("a")
                    blt.classList.add("blogT")
                    // blt.href = `http://127.0.0.1:5500/html/detail.html?_idBV=${baiviet[i].idbv}`
                    blt.href = `web_url/html/detail.html?_idBV=${baiviet[i].idbv}`

                    let img = document.createElement("img")
                    img.classList.add("img")
                    img.src = baiviet[i].banner

                    let h4 = document.createElement("h4")
                    let h3 = document.createElement("h3")
                    // Danh muc
                    const dm = danhMuc.find(x => x.id === baiviet[i].idDM)
                    h4.innerText = dm !== undefined ? dm.nameDM : 'Tổng hợp'
                    h3.innerText = baiviet[i].tilte
                    let div = document.createElement("div")
                    let span1 = document.createElement("span")
                    let span2 = document.createElement("span")
                    //Tai khoan
                    let idx = taiKhoan.findIndex(x => x.id === baiviet[i].idauthor)
                    let tamp = ""
                    if (idx === -1) {
                        tamp = "Anonymous"
                    } else {
                        tamp = taiKhoan[idx].fullName
                    }
                    span1.innerText = tamp
                    span2.innerText = baiviet[i].CreatedAT

                    blt.appendChild(img)
                    blt.appendChild(h4)
                    blt.appendChild(h3)
                    div.appendChild(span1)
                    div.appendChild(span2)
                    blt.appendChild(div)
                    blogThuong.appendChild(blt)
                } else if (baiviet[i].status === 3) {//x
                    let blog = document.createElement("a")
                    blog.classList.add("blog")
                    blog.href = `web_url/html/detail.html?_idBV=${baiviet[i].idbv}`
                    // blog.href = `http://127.0.0.1:5500/html/detail.html?_idBV=${baiviet[i].idbv}`
                    let img = document.createElement("img")
                    img.classList.add("img")
                    img.src = baiviet[i].banner

                    let bv_content = document.createElement("div")
                    bv_content.classList.add("bv_content")

                    let h3 = document.createElement("h3")
                    let h4 = document.createElement("h4")
                    h3.innerText = baiviet[i].tilte
                    // Danh muc
                    const dm = danhMuc.find(x => x.id === baiviet[i].idDM)
                    h4.innerText = dm !== undefined ? dm.nameDM : "Tổng hợp"

                    let div = document.createElement("div")
                    let span1 = document.createElement("span1")
                    let span2 = document.createElement("span2")
                    let idx = taiKhoan.findIndex(x => x.id === baiviet[i].idauthor)
                    let tamp = ""
                    if (idx === -1) {
                        tamp = "Anonymous"
                    } else {
                        tamp = taiKhoan[idx].fullName
                    }

                    span1.innerText = tamp
                    span2.innerText = baiviet[i].CreatedAT
                    blog.appendChild(img)
                    bv_content.appendChild(h4)
                    bv_content.appendChild(h3)
                    div.appendChild(span1)
                    div.appendChild(span2)
                    blog.appendChild(bv_content)
                    bv_content.appendChild(div)
                    hotblog__blog.appendChild(blog)
                }

            }
        }
    }
    if (baiviet === null) return;
}
hienThiBV()

function hienthiBaiVietChinh() {
    for (let i = 0; i < baiviet.length; i++) {
        if (baiviet[i].status === 1 && baiviet[i].hot === true) {
            let a = document.createElement("a")
            // a.href = `http://127.0.0.1:5500/html/detail.html?_idBV=${baiviet[i].idbv}`
            a.href = `web_url/html/detail.html?_idBV=${baiviet[i].idbv}`

            let img = document.createElement("img")
            img.classList.add("img")
            img.src = baiviet[i].banner

            let h4 = document.createElement("h4")
            let h3 = document.createElement("h3")
            // Danh muc
            const dm = danhMuc.find(x => x.id === baiviet[i].idDM)
            h4.innerText = dm !== undefined ? dm.nameDM : "Tổng hợp"
            h3.innerText = baiviet[i].tilte

            let bv_author = document.createElement("div")
            bv_author.classList.add("bv_author")

            let span1 = document.createElement("span")
            let span2 = document.createElement("span")
            let idx = taiKhoan.findIndex(x => x.id === baiviet[i].idauthor)
            let tacGia = ""
            if (idx === -1) {
                tacGia = "Anonymous"
            } else {
                tacGia = taiKhoan[idx].fullName
            }
            span1.innerText = tacGia
            span2.innerText = baiviet[i].CreatedAT

            bv_author.appendChild(span1)
            bv_author.appendChild(span2)
            a.appendChild(img)
            a.appendChild(h4)
            a.appendChild(h3)
            a.appendChild(bv_author)
            hotblog__blog_left.appendChild(a)
        }
    }
}
hienthiBaiVietChinh()

function baiVietChiTiet(baiViet) {
    alert(baiViet.idBV)
    alert("hello")
}


//-----------------------------------//hien thi bai viet//---------------------------------------//

//-----------------------------------Dang xuat----------------------------------------------//
let indexTKb = JSON.parse(localStorage.getItem("indexTKb"))
let blogLogin = JSON.parse(localStorage.getItem("blogLogin"))
if (indexTKb === -1 || blogLogin === false) {
    window.location = "web_url/html/login.html"
}
function dangXuat() {
    localStorage.setItem("indexTKb", JSON.stringify(-1))
    localStorage.setItem("blogLogin", JSON.stringify(false))
    // window.location = "http://127.0.0.1:5500/html/login.html"
    window.location = "web_url/html/login.html"
}
//---------------------------------//Dang xuat//--------------------------------------------//

