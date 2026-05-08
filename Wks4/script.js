const inputValue = document.getElementById("inputTask");
const inputDate = document.getElementById("inputDate");
const btnTambah = document.getElementById("btnTambahTodo");
const daftarTugas = document.getElementById("listTugas");

btnTambah.addEventListener("click", function(){
    if(inputValue.value === "" || inputDate.value === ""){
        alert("Input Tugas Dan Tanggal Tidak Boleh Kosong!!");
        return;
    }

    const listbaru = document.createElement("li");
    const span = document.createElement("span");
    listbaru.innerHTML = inputValue.value;

    listbaru.appendChild(span);
    daftarTugas.appendChild(listbaru);

    inputValue.value = "";
    inputDate.value = "";
    inputValue.focus();

});

const checkbox = document.createElement("input");
checkbox.type = "checkbox";
listbaru.appendChild(checkbox);

const containerTeks = document.createElement("div");
containerTeks.style.flex = "1";

const spanTugas = document.createElement("span");
spanTugas.innerHTML = inputValue.value;

const spanTanggal = document.createElement("small");
spanTanggal.innerHTML = ` (${inputDate.value})`;
spanTanggal.style.color = "#888";

containerTeks.appendChild(spanTugas);
containerTeks.appendChild(spanTanggal);
listbaru.appendChild(containerTeks);

const labelStatus = document.createElement("span");
labelStatus.innerHTML = "Progress";
labelStatus.className = "labelStatus";

const btnEdit = document.createElement("button");
btnEdit.innerHTML = "Edit";
btnEdit.className = "btnEdit";


btnEdit.onclick = function(){
    const newTask = promt("Masukkan Tugas Baru :", spanTugas.innerHTML);
}

const btnDelete = document.createElement("button");
btnDelete.innerHTML = "Hapus";
btnDelete.className = "btnDelete";

btnDelete.onclick = function(){
    if(confirm("Apakah Anda Yakin Ingin Menghapus Tugas Ini?")){
        listbaru.remove();
    }
};
listbaru.appendChild(btnDelete);
