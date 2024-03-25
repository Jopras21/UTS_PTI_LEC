function resetForm(modalId) {
  $("#" + modalId + " input").val("");
}

function displayTime() {
  clientTime = new Date();
  time = new Date(clientTime.getTime());
  sh = time.getHours().toString();
  sm = time.getMinutes().toString();
  ss = time.getSeconds().toString();
  document.getElementById("jam").innerHTML =
    (sh.length == 1 ? "0" + sh : sh) +
    ":" +
    (sm.length == 1 ? "0" + sm : sm) +
    ":" +
    (ss.length == 1 ? "0" + ss : ss);
}
document.addEventListener("DOMContentLoaded", function () {
  setInterval(displayTime, 1000);
});

function myMenuFunction() {
  i = document.getElementById("navMenu");

  if (i.className === "nav-menu") {
    i.className += " responsive";
  } else {
    i.className = "nav-menu";
  }
}

$(document).ready(function () {
  urlParams = new URLSearchParams(window.location.search);
  username = urlParams.get("username");

  if (username) {
    $("#welcomeMessage").text("Welcome, " + username + "!");
  } else {
    $("#welcomeMessage").text("Welcome, Guest!");
  }
});

$("#TambahData").click(function () {
  $("#modalFormTambah").modal("show");
});

$("#Tampilkan").click(function () {
  $("#data-table").show();
});

$("#Sembunyikan").click(function () {
  $("#data-table").hide();
});

$(document).on("click", "#Tambah", function () {
  nim = $("#nim").val();
  nama = $("#nama").val();
  alamat = $("#alamat").val();

  if (!nim || !nama || !alamat) {
    $("#modalFormTidakLengkap").modal("show");
  } else if (!/^\d+$/.test(nim)) {
    $("#modalNIM").modal("show");
  } else {
    baris =
      "<tr data-nim='" +
      nim +
      "'><td class='nim'>" +
      nim +
      "</td><td class='nama'>" +
      nama +
      "</td><td class='alamat'>" +
      alamat +
      "</td><td><button type='button' class='btn btn-secondary btn-edit mt-1' data-nim='" +
      nim +
      "' data-nama='" +
      nama +
      "' data-alamat='" +
      alamat +
      "'>Edit</button> <button type='button' class='icon-delete' onclick='stopAnimation()'></button></td></tr>";
    $("#data-table tbody").append(baris);
    $("#nim").val("");
    $("#nama").val("");
    $("#alamat").val("");

    $("#modalFormTambah").modal("hide");
    $("#ModalTambah").modal("show");
  }
});

$(document).on("click", ".btn-edit", function () {
  nimEdit = $(this).data("nim");
  namaEdit = $(this).data("nama");
  alamatEdit = $(this).data("alamat");

  $("#nimEdit").val(nimEdit);
  $("#namaEdit").val(namaEdit);
  $("#alamatEdit").val(alamatEdit);

  $("#modalFormEdit").modal("show");
});

$("#modalFormEdit").on("click", "#Edit", function () {
  nimEdit = $("#nimEdit").val();
  namaEdit = $("#namaEdit").val();
  alamatEdit = $("#alamatEdit").val();

  $("tr[data-nim='" + nimEdit + "']")
    .find(".nama")
    .text(namaEdit);
  $("tr[data-nim='" + nimEdit + "']")
    .find(".alamat")
    .text(alamatEdit);

  $("#modalFormEdit").modal("hide");
  $("#modalEdit").modal("show");
  });

$(document).on("click", ".icon-delete", function () {
  row = $(this).closest("tr");
  $("#modalFormDelete")
    .modal("show")
    .on("click", "#Delete", function () {
      row.remove();
      $("#modalFormDelete").modal("hide");
      $("#modalHapus").modal("show");
    });
});

function stopAnimation() {
  var element = document.querySelector(".icon-delete");
  element.style.animation = "none";
}

const images = document.querySelectorAll(".number1img");

function fadeInImages() {
  let delay = 0;
  images.forEach((image) => {
    setTimeout(() => {
      image.style.opacity = "1";
    }, delay);
    delay += 1000;
  });
}

window.onload = fadeInImages;
