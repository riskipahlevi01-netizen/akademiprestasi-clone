// Menginisialisasi Slick Slider
$(document).ready(function(){
    $('.slider').slick({
        infinite: true,  // Mengaktifkan loop pada slider
        slidesToShow: 1, // Menampilkan satu gambar per slide
        slidesToScroll: 1,  // Meng-scroll satu gambar per klik
        arrows: true, // Menampilkan tombol navigasi
        dots: true,  // Menambahkan titik navigasi
        autoplay: true,  // Memulai autoplay
        autoplaySpeed: 2000,  // Kecepatan autoplay (2 detik per gambar)
    });
});


