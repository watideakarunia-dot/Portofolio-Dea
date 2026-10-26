// ===== TAHUN OTOMATIS PADA FOOTER =====
document.getElementById("year").textContent =
    new Date().getFullYear();


// ===== FITUR DARK MODE =====
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function () {
    const isDark = document.body.classList.toggle("dark-mode");

    themeToggle.textContent = isDark
        ? " Light Mode"
        : " Dark Mode";

    themeToggle.setAttribute("aria-pressed", String(isDark));
});


// ===== VALIDASI FORM KONTAK =====
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function (event) {
    // Mencegah halaman melakukan reload
    event.preventDefault();

    // Mengambil nilai input
    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const pesan = document.getElementById("pesan").value.trim();

    // Menghapus pesan validasi sebelumnya
    formMessage.className = "";
    formMessage.textContent = "";

    // VALIDASI INPUT KOSONG
    if (!nama || !email || !pesan) {
        tampilkanPesan(
            "Semua kolom wajib diisi!",
            "error"
        );
        return;
    }

    // VALIDASI FORMAT EMAIL
    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!polaEmail.test(email)) {
        tampilkanPesan(
            "Format email tidak valid. Periksa kembali email kamu.",
            "error"
        );
        return;
    }

    // MENAMPILKAN PESAN BERHASIL
    formMessage.className = "success";

    const judul = document.createElement("h3");
    judul.textContent = "Pesan berhasil divalidasi!";

    const info = document.createElement("p");
    info.textContent =
        "Terima kasih, " + nama +
        ". Berikut data yang kamu masukkan:";

    const dataNama = document.createElement("p");
    dataNama.textContent = "Nama: " + nama;

    const dataEmail = document.createElement("p");
    dataEmail.textContent = "Email: " + email;

    const dataPesan = document.createElement("p");
    dataPesan.textContent = "Pesan: " + pesan;

    // Memasukkan data ke halaman dengan aman
    formMessage.replaceChildren(
        judul,
        info,
        dataNama,
        dataEmail,
        dataPesan
    );

    // Mengosongkan form setelah berhasil
    contactForm.reset();
});


// ===== FUNGSI MENAMPILKAN PESAN =====
function tampilkanPesan(teks, tipe) {
    formMessage.className = tipe;
    formMessage.textContent = teks;
}
