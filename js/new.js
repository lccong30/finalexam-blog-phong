let tieuDe_np = document.querySelector(".tieuDe_np")
let noiDung_np = document.querySelector(".noiDung_np")
const editor = document.getElementById("editor")
const web_url = "https://finalexam-blog-phong.vercel.app"
let indexTKbEditor = JSON.parse(localStorage.getItem("indexTKb"))
let baiVietEditor = JSON.parse(localStorage.getItem("baiviet"))
let taiKhoanEditor = JSON.parse(localStorage.getItem("TKb"))
let danhMucEditor = JSON.parse(localStorage.getItem("danhMuc"))
let menuDM = document.querySelector(".menuDM")
let newPost = {}
function generateRandomId() {
    const randomNumber = Math.floor(Math.random() * 1000000); // Số ngẫu nhiên từ 0 đến 999999
    return `ID${randomNumber}`;
}
const randomId = generateRandomId();
// Sử dụng hàm để tạo một ID ngẫu nhiên



function loadDanhMuc() {
    menuDM.innerHTML = ""
    for (let i = 0; i < danhMucEditor.length; i++) {
        let option = document.createElement("option")
        option.innerHTML = danhMucEditor[i].nameDM
        option.value = danhMucEditor[i].id
        menuDM.appendChild(option)
    }
}
loadDanhMuc()


function submitpost() {
    newPost =
    {
        idbv: randomId,
        tilte: tieuDe_np.value,
        content: noiDung_np.value,//l
        banner: "https://images.pexels.com/photos/17982042/pexels-photo-17982042/free-photo-of-chim-thu-v-t-chi-nhanh-nhi-t-d-i.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        status: 4,
        hot: false,
        display: true,
        CreatedAT: getTime1(),//l
        idauthor: taiKhoanEditor[indexTKbEditor].id,//l
        idDM: +menuDM.value
    }
    console.log(newPost)


    let baiVietCount = baiVietEditor.length;
    baiVietEditor.push(newPost)
    localStorage.setItem("baiviet", JSON.stringify(baiVietEditor))

    let baiVietNewCount = JSON.parse(localStorage.getItem("baiviet"));
    if (baiVietNewCount.length > baiVietCount)
        alert("Thêm thành công")
    else
        alert("Có lỗi xảy ra!")
    console.log(baiVietEditor)
}

function getTime1() {
    var today = new Date();
    var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date;
    return dateTime
}
getTime1()
function getcontent() {
    console.log(editor.innerHTML)
}
let fileURLs = JSON.parse(localStorage.getItem('fileURLs')) || [];

const fileUpload = document.getElementById("fileUpload")
const reader = new FileReader()

fileUpload.addEventListener("change", (event) => {
    let fileCount = fileURLs.length;
    const files = event.target.files;
    const file = files[0]
    if (file) {
        const reader = new FileReader()
        reader.onload = function (e) {
            const fileURL = e.target.result;
            const newBanner = {
                id: randomId,
                url: fileURL,
            }
            let idxBanner = fileURLs.findIndex(x => x.id === randomId)
            if (idxBanner !== -1) {
                fileURLs[idxBanner].url = fileURL
            } else {
                fileURLs.push(newBanner);
            }
            // Lưu danh sách URLs vào localStorage
            localStorage.setItem('fileURLs', JSON.stringify(fileURLs));
            let fileNewCount = JSON.parse(localStorage.getItem('fileURLs'));
            if (fileNewCount.length > fileCount) {
                alert("Upload thành công")
            } else {
                alert("Dung lượng quá lớn")
            }
            // updateFileList();
        };

        reader.readAsDataURL(file);
    }
    // reader.readAsDataURL(files[0])
    const url = URL.createObjectURL(file)
})

function clickhere() {
    let baiVietEditor = JSON.parse(localStorage.getItem("baiviet"))
    console.log(fileURLs)
    console.log(baiVietEditor)
}