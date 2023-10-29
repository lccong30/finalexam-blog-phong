const web_url = "https://finalexam-blog-phong.vercel.app"

const baiViet = JSON.parse(localStorage.getItem("baiviet")) || []
let taiKhoan = JSON.parse(localStorage.getItem("TKb")) || []
const fileURLs = JSON.parse(localStorage.getItem("fileURLs")) || []

let blogs = document.querySelector(".blogs")
console.log(fileURLs)
function hienThiBVthong() {
    if (baiViet === null) return;

    if (blogs !== null) {
        blogs.innerHTML = ""
        for (let i = 0; i < baiViet.length; i++) {
            let blt = document.createElement("a")
            blt.classList.add("blogT")
            // blt.href = `http://127.0.0.1:5500/html/detail.html?_idBV=${baiViet[i].idbv}`
            blt.href = `web_url/html?_idBV=${baiViet[i].idbv}`
            let img = document.createElement("img")
            img.classList.add("img")
            const _src = fileURLs.find(x => x.id === baiViet[i].idbv)
            console.log(_src)
            if (_src !== undefined) {
                img.src = _src.url
            } else {
                img.src = baiViet[i].banner
            }

            let h4 = document.createElement("h4")
            let h3 = document.createElement("h3")
            h4.innerText = "danh muc"
            h3.innerText = baiViet[i].tilte

            let div = document.createElement("div")
            let span1 = document.createElement("span")
            let span2 = document.createElement("span")
            let idx = taiKhoan.findIndex(x => x.id === baiViet[i].idBV)
            let tamp = ""
            if (idx === -1) {
                tamp = "user"
            } else {
                tamp = taiKhoan[idx].fullName
            }
            span1.innerText = tamp
            span2.innerText = baiViet[i].CreatedAT

            blt.appendChild(img)
            blt.appendChild(h4)
            blt.appendChild(h3)
            div.appendChild(span1)
            div.appendChild(span2)
            blt.appendChild(div)
            blogs.appendChild(blt)

            //<div class="blogT">
            //     <img class="img" src="../assets/unsplash_OvLXbURo9Wo.png" alt="">
            //      h4 "danh muc" h4
            //     <h3>Hướng dẫn setup phòng cực chill dành cho người mới toàn tập</h3>
            //     div
            //      span Tac gia
            //      span Ngay dang
            //     div
            //</div>
        }


    }
}
hienThiBVthong()

function hienThiBVthong1(arr) {
    if (blogs !== null) {
        blogs.innerHTML = ""

        for (let i = 0; i < arr.length; i++) {
            let blt = document.createElement("a")
            blt.classList.add("blogT")
            blt.href = `web_url/html/detail.html?_idBV=${arr[i].idBV}`

            let img = document.createElement("img")
            img.classList.add("img")

            const _src = fileURLs.find(x => x.id === arr[i].idbv)
            console.log(_src)
            if (_src != undefined) {
                img.src = _src.url
            } else {
                img.src = arr[i].banner
            }


            let h4 = document.createElement("h4")
            let h3 = document.createElement("h3")
            h4.innerText = "danh muc"
            h3.innerText = arr[i].tilte

            let div = document.createElement("div")
            let span1 = document.createElement("span")
            let span2 = document.createElement("span")
            let idx = taiKhoan.findIndex(x => x.id === arr[i].idBV)
            let tamp = ""
            if (idx === -1) {
                tamp = "user"
            } else {
                tamp = taiKhoan[idx].fullName
            }
            span1.innerText = tamp
            span2.innerText = arr[i].CreatedAT

            blt.appendChild(img)
            blt.appendChild(h4)
            blt.appendChild(h3)
            div.appendChild(span1)
            div.appendChild(span2)
            blt.appendChild(div)
            blogs.appendChild(blt)

            //<div class="blogT">
            //     <img class="img" src="../assets/unsplash_OvLXbURo9Wo.png" alt="">
            //      h4 "danh muc" h4
            //     <h3>Hướng dẫn setup phòng cực chill dành cho người mới toàn tập</h3>
            //     div
            //      span Tac gia
            //      span Ngay dang
            //     div
            //</div>
        }
    }
    if (arr === null) return;
}

function timKiem() {
    let text_search = document.getElementById("text_search")
    const save = baiViet.filter(x => x.tilte.includes(text_search.value))
    hienThiBVthong1(save)
}