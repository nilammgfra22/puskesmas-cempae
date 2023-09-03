const Activities = {
  async render() {
    return `
    <!--Card (Kegiatan Puskesmas)-->
    <section id="Kegiatan" class="portfolio section-padding">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-header-activities text-center">
              <h2>Kegiatan Puskesmas</h2>
              <p>Puskesmas aktif mengadakan berbagai kegiatan untuk mempromosikan kesehatan dan memberikan pelayanan medis bagi masyarakat.<br />
              Beberapa kegiatan Puskesmas yang bekerjasama dengan Mahasiswa KKNT Gel. 110 meliputi:</p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-md-12 col-lg-4 pb-3">
            <div class="card text-light text-center bg-white pb-2 h-100">
              <div class="card-body text-dark">
                <div class="img-area mb-4">
                  <img src="./img/penanaman-toga.jpg" class="img-fluid" alt="Dokumentasi Penanaman TOGA" />
                </div>
                <h5 class="card-title">Kegiatan Penanaman TOGA di Puskesmas: Memperkenalkan Tanaman Obat Keluarga</h5>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-12 col-lg-4 pb-3">
            <div class="card text-light text-center bg-white pb-2 h-100">
             <div class="card-body text-dark">
                <div class="img-area mb-4">
                  <img src="./img/penyuluhan-kelas-ibu-hamil.jpeg" class="img-fluid" alt="Dokumentasi saat Penyuluhan" />
                </div>
                <h5 class="card-title">Penyuluhan Pencegahan Stunting Sejak dalam Kandungan: Membangun Generasi Sehat dan Cerdas</h5>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-12 col-lg-4 pb-3">
            <div class="card text-light text-center bg-white pb-2 h-100">
             <div class="card-body text-dark">
                <div class="img-area mb-4">
                  <img src="./img/pembuatan-jamu.jpg" class="img-fluid" alt="Pembuatan Jamu dari TOGA" />
                </div>
                <h5 class="card-title">Kegiatan Pembuatan Jamu dari TOGA: Mendorong Penggunaan Obat Tradisional yang Aman dan Berkhasiat</h5>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-12 col-lg-4 pb-3">
            <div class="card text-light text-center bg-white pb-2 h-100">
             <div class="card-body text-dark">
                <div class="img-area mb-4">
                  <img src="./img/ukgs-sdn10.jpg" class="img-fluid" alt="Kegiatan UKGS" />
                </div>
                <h5 class="card-title">Kegiatan Usaha Kesehatan Gigi Sekolah (UKGS) di UPTD SDN 10 Parepare</h5>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-12 col-lg-4 pb-3">
          <div class="card text-light text-center bg-white pb-2 h-100">
           <div class="card-body text-dark">
              <div class="img-area mb-4">
                <img src="./img/seminar-edukasi.jpeg" class="img-fluid" alt="Seminar Edukasi" />
              </div>
              <h5 class="card-title">Seminar Edukasi: Optimalisasi Tumbuh Kembang Anak</h5>
            </div>
          </div>
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
 
export default Activities;