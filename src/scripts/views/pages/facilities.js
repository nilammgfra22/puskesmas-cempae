const Facilities = {
  async render() {
    return `
      <!--Card (Fasilitas Puskesmas)-->
      <section id="Fasilitas" class="portfolio section-padding">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="section-header-facilities text-center">
                <h2>Fasilitas Puskesmas</h2>
                <p>Fasilitas Puskesmas adalah sarana kesehatan dasar yang menyediakan layanan medis dan kesehatan kepada masyarakat di tingkat primer. <br />
                    Berikut ini beberapa fasilitas yang tersedia di Puskesmas Cempae</p>
              </div>
            </div>
          </div>
  
          <div class="row">
            <div class="col-12 col-md-12 col-lg-4 pb-3">
              <div class="card text-light text-center bg-white pb-2 h-100">
                <div class="card-body text-dark">
                  <div class="img-area mb-4">
                    <img src="img/taman-bermain.jpeg" class="img-fluid" alt="Taman Bermain" />
                  </div>
                  <h4 class="card-title">Taman Bermain</h4>
                  <p class="lead">Tujuan dari taman bermain ini adalah untuk menciptakan lingkungan yang menyenangkan dan merangsang pertumbuhan serta perkembangan anak-anak secara fisik, mental, dan sosial.</p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-12 col-lg-4 pb-3">
              <div class="card text-light text-center bg-white pb-2 h-100">
                <div class="card-body text-dark">
                  <div class="img-area mb-4">
                    <img src="img/area-parkir.jpeg" class="img-fluid" alt="Parkiran" />
                  </div>
                  <h4 class="card-title">Area Parkir</h4>
                  <p class="lead">Dengan adanya Layanan parkiran yang memadai, diharapkan masyarakat dapat lebih mudah dan nyaman saat berkunjung ke Puskesmas. Parkiran yang tertata rapi dan terawat juga membantu menghindari kemacetan lalu lintas di sekitar Puskesmas.</p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-12 col-lg-4 pb-3">
              <div class="card text-light text-center bg-white pb-2 h-100">
                <div class="card-body text-dark">
                  <div class="img-area mb-4">
                    <img src="img/ruang-tunggu.jpeg" class="img-fluid" alt="Ruang Tunggu" />
                  </div>
                  <h4 class="card-title">Ruang Tunggu</h4>
                  <p class="lead">Dengan adanya Layanan ruang tunggu yang nyaman dan informatif, diharapkan pengunjung Puskesmas dapat merasa lebih terlayani dengan baik dan memiliki pengalaman positif saat berkunjung ke Puskesmas.</p>
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
 
export default Facilities;