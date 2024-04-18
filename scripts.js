const username = document.getElementById("username")
const pass = document.getElementById("pass")
const usernameTambah = document.getElementById("username-tambah")
const passTambah = document.getElementById("pass-tambah")
const h1 = document.getElementById("confirm")
const logout = document.getElementById("logout")
const submit = document.getElementById("submit")
const createData = document.getElementById("createData");
const tampilanTambahData = document.querySelector(".tambahData")
const idTable = document.getElementById("id-table")
const userTable = document.getElementById("user-table")
const passTable = document.getElementById("pass-table")
const table = document.querySelector(".table")
const tableBody = document.querySelector(".table-body")
const tableChild = document.querySelector(".table-child")

const admin = {
    username: "admin",
    pass: "admin123"
}
const userAdmin = {
    username: "userAdmin",
    pass: "1234"
}





tampilanTambahData.style.display = "none"
table.style.display = "none"

function clearDocument() {
    localStorage.clear()

    //ketika di clear maka akan masuk halaman Login lagi
    username.style.display = "block";
    pass.style.display = "block";
    submit.style.display = "block";
    logout.style.display = "none";
    h1.innerHTML = "Welcome......"

    tampilanTambahData.style.display = "none"
    table.style.display = "none"

}



let dataBase = []
let idUser = 1;


logout.style.display = "none";
function login() {
    if (username.value === admin.username && pass.value === admin.pass) {

        localStorage.setItem("status", "admin")
        alert(`otoritas : ${localStorage.getItem("status")}`)
        console.log("Login as Admin!!!!")

        h1.textContent = "Anda Login sebagai ADMINN"
        // hilangkan input login
        username.style.display = "none";
        pass.style.display = "none";
        submit.style.display = "none";

        // menampilkan button dan table
        logout.style.display = "block";
        table.style.display = "block"


    } else if (username.value === userAdmin.username && pass.value === userAdmin.pass) {
        localStorage.setItem("status", "user")
        alert(`otoritas : ${localStorage.getItem("status")}`)
        h1.textContent = "Anda Login sebagai USERS"
        username.style.display = "none";
        pass.style.display = "none";
        submit.style.display = "none";
        logout.style.display = "block";
        tampilanTambahData.style.display = "block"

    } else {
        alert("kata sandi atau Pass salah, mohon masukan ulang")
    }
}

function tambahData() {
    dataBase.push({
        nama: usernameTambah.value,
        pass: passTambah.value,
        id: idUser++,
        status: localStorage.getItem("status")
    })

    alert("data berhasil di tambah")

    // menambahakan data 
    var trtable = document.createElement("tr")
    var tdForId = document.createElement('th')
    var tdForUsername = document.createElement("td")
    var tdForPass = document.createElement("td")

    // mengisi content
    tdForId.textContent = idUser - 1
    tdForUsername.textContent = usernameTambah.value
    tdForPass.textContent = passTambah.value

    // memasukan ke html
    trtable.appendChild(tdForId)
    trtable.appendChild(tdForUsername)
    trtable.appendChild(tdForPass)

    //menampilkan data ke HTMl / end user
    tableBody.appendChild(trtable)


    // mereset
    usernameTambah.value = ""
    passTambah.value = ""

}






