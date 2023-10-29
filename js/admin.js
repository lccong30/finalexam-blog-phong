function getTime1() {
    var today = new Date();
    var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date;
    return dateTime
}
getTime1()

const baiviet = JSON.parse(localStorage.getItem("baiviet"))
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
            idbv: "7",
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

let danhmuc = JSON.parse(localStorage.getItem("danhMuc"))
if (danhmuc === null) {
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

// const taikhoan = [{
//     id: 1,
//     nameTK: "hieu"
// },
// {
//     id: 2,
//     nameTK: "phong"
// },
// {
//     id: 3,
//     nameTK: "phats"
// }]

let taikhoan = JSON.parse(localStorage.getItem("taiKhoan"))
if (taikhoan === null) {
    localStorage.setItem("taiKhoan", JSON.stringify([
        {
            id: 1,
            fullName: "Phong",
            email: "phong@gmail.com",
            password: "123",
            status: 0,
            sdt: "090909090"
        },
        {
            id: 2,
            fullName: "Phú",
            email: "phu@gmail.com",
            password: "123",
            status: 0,
            sdt: "090909090"
        },
        {
            id: 3,
            fullName: "Hiếu",
            email: "hieu@gmail.com",
            password: "123",
            status: 0,
            sdt: "090909090"
        }, {
            id: 4,
            fullName: "Như",
            email: "nhu@gmail.com",
            password: "123",
            status: 0,
            sdt: "090909090"
        }, {
            id: 5,
            fullName: "Phát",
            email: "phat@gmail.com",
            password: "123",
            status: 0,
            sdt: "090909090"
        }, {
            id: 6,
            fullName: "Ly",
            email: "ly@gmail.com",
            password: "123",
            status: 0,
            sdt: "090909090"
        },
        {
            id: 7,
            fullName: "chau",
            email: "chau@gmail.com",
            password: "123",
            status: 0,
            sdt: "090909090"
        }
    ]))
}
const cnt_baiViet = document.getElementById("cnt_baiViet")
const cnt_danhMuc = document.getElementById("cnt_danhMuc")

function openBV() {
    cnt_baiViet.classList.remove("none")
    cnt_danhMuc.classList.add("none")
}

function openDM() {
    cnt_baiViet.classList.add("none")
    cnt_danhMuc.classList.remove("none")
}

function hienThiBV() {
    const noiDungQT = document.querySelector(".noiDungQT")
    console.log(noiDungQT)
    if (baiviet === null) {
        return
    }
    noiDungQT.innerHTML = ``
    for (let i = 0; i < baiviet.length; i++) {
        const tr = document.createElement("tr")
        let img = document.createElement("img")
        let DM = danhmuc.find(x => x.id === baiviet[i].idDM)
        let TK = taikhoan.find(x => x.id === baiviet[i].idauthor)
        img.src = baiviet[i].banner
        console.log(img)
        console.log(DM)
        tr.innerHTML = `
        <td>${baiviet[i].idbv}</td>
        <td>${TK !== undefined ? TK.fullName : ""}</td>
        <td>${baiviet[i].tilte}</td>
        <td>${baiviet[i].content}</td>
        <td>${baiviet[i].CreatedAT}</td>
        <td><img style="with : 150px; height : 150px;" src="${baiviet[i].banner}"></td>
        <td>${baiviet[i].status}</td>
        <td>${baiviet[i].hot}</td>
        <td>${DM === undefined ? "" : DM.nameDM}</td>
        <td>
        <button>sua</button>
        <button onclick="xoaBV(${baiviet[i].idBV})">xoa</button>
        <button>chi tiet</button>
        </td>
        `
        noiDungQT.appendChild(tr)
    }
}
hienThiBV()
console.log(baiviet)

function xoaBV(id) {
    // for (let i = 0; i < baiviet.length; i++) {
    console.log(id)
    console.log(baiviet)
    baiviet.splice(id, 1);
    console.log(baiviet)
    localStorage.setItem("baiviet", JSON.stringify(baiviet))
    hienThiBV()
    // }
}