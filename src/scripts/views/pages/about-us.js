const AboutUs = {
  async render() {
    return `
    <!--sambutan-->
    <section id="Sambutan" class="about section-padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-12 col-12 ps-lg-5 mt-md-5">
            <div class="about-img">
              <img src="./img/img-01.jpg" alt="Foto Kepala Puskesmas Cempae" class="img-fluid rounded-circle" />
              <h1 class="text-center" style="font-size: 18px">Kepala Puskesmas Cempae</h1>
              <h1 class="text-center" style="font-size: 18px">????</h1>
            </div>
          </div>
          <div class="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
            <div class="about-text">
              <h2>KATA SAMBUTAN UNTUK PENGUNJUNG WEBSITE</h2>
              <p>Assalamualaikum Warahmatullahi Wabarakatuh, </br>
              Selamat datang di website Puskesmas Cempae! Kami dengan senang hati ingin mendengar masukan, saran, atau pertanyaan Anda. Prioritas kami adalah kesehatan dan kesejahteraan bersama.
              Jangan ragu untuk menghubungi kami untuk layanan atau informasi lebih lanjut. Terima kasih atas kunjungan Anda, Salam Sehat untuk kita semua!</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--visi misi-->
    <section id="about" class="about section-padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-3">
            <div class="about-text">
              <h2>VISI</h2>
              <p>PUSKESMAS CEMPAE SEBAGAI PUSKESMAS TERDEPAN YANG MAMPU MEWUJUDKAN MASYARAKAT SEHAT MANDIRI DI WILAYAH KERJANYA TAHUN 2023</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-12 col-12">
            <div class="about-text">
              <h2>MISI</h2>
              <li>MEMBERIKAN PELAYANAN KESEHATAN YANG BERMUTU DAN PROFESIONAL,</li>
              <li>MENINGKATKAN PELAYANAN KESEHATAN YANG TERPADU DAN BERKESINAMBUNGAN</li>
              <li>MENDORONG KEMANDIRIAN INDIVIDU, KELUARGA, DAN MASYARAKAT UNTUK BERPERILAKU HIDUP BERSIH DAN SEHAT,</li>
              <li>MENJALIN KEMITRAAN DENGAN LINTAS PROGRAM DAN LINTAS SEKTOR</li>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--denah-->
    <section id="about" class="about section-padding">
      <div class="container">
        <div class="section-header text-center">
          <h2>DENAH PUSKESMAS</h2>
        </div>
        <div class="row">
          <div class="col-lg-6 col-md-12 col-12">
            <div class="about-img">
              <img src="./img/denah-puskesmas-lt1.png" alt="Denah Puskesmas Lantai 1" class="img-fluid" />
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-12">
              <img src="./img/denah-puskesmas-lt2.png" alt="Denah Puskesmas Lantai 2" class="img-fluid" />
          </div>
        </div>
      </div>
    </section>
    `;
  },
 
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};
 
export default AboutUs;