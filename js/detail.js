let baiVietdetail = JSON.parse(localStorage.getItem("baiviet")) || []
let danhMucdetail = JSON.parse(localStorage.getItem("danhMuc")) || []
let taiKhoandetail = JSON.parse(localStorage.getItem("TKb")) || []
const fileURLs = JSON.parse(localStorage.getItem("fileURLs")) || []
const web_url = "https://finalexam-blog-phong.vercel.app"
function getIdBV() {
    let currentUrl = window.location.href
    let url = new URL(currentUrl)
    let queryParameter = url.searchParams
    let value = queryParameter.get("_idBV")
    return value
}

function check() {
    let id = getIdBV()
    if (id === null) {
        window.location.href = "web_url"
    }
}
check()
let h4 = document.querySelector(".tieuDe")
let h3 = document.querySelector(".title")
let span1 = document.querySelector(".span11")
let span2 = document.querySelector(".span22")
let banner = document.querySelector(".img")
const elBanner = document.querySelector(".banner__detail")
function hienThiBVChiTiet() {
    const _id = getIdBV()

    let indexBV = baiVietdetail.findIndex(x => x.idbv === _id)

    console.log(indexBV)
    if (indexBV === -1)
        return;

    let img = document.createElement("img")
    img.classList.add('img_banner')

    const idxUrl = fileURLs.findIndex(x => x.id === baiVietdetail[indexBV].idbv)
    if (idxUrl !== -1)
        img.src = fileURLs[idxUrl].url
    else
        img.src = baiVietdetail[indexBV].banner

    const indexDM = danhMucdetail.findIndex(x => x.id === baiVietdetail[indexBV].idDM)
    h4.innerHTML = indexDM !== -1 ? danhMucdetail[indexDM].nameDM : "Tổng hợp"
    h3.innerHTML = baiVietdetail[indexBV].tilte
    span1.innerHTML = baiVietdetail[indexBV].CreatedAT
    const indexTK = taiKhoandetail.findIndex(x => x.id === baiVietdetail[indexBV].idauthor)
    span2.innerHTML = indexTK !== -1 ? taiKhoandetail[indexTK].fullName : "Anonymous"
    elBanner.appendChild(img)
}
hienThiBVChiTiet()