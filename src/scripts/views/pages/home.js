import { inject } from '@vercel/analytics';

const Home = {
  async render() {
    return `
    <script>
      window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
    </script>
    <script defer src="/_vercel/insights/script.js"></script>
    <!--carousel-->
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="./img/profil-puskesmas.jpeg" class="d-block w-100" alt="..." />
          <div class="carousel-caption">
            <h5>Selamat Datang di Website</h5>
            <p>Profil Puskesmas Cempae</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="./img/foto-bersama.jpeg" class="d-block w-100" alt="..." />
          <div class="carousel-caption">
            <h5>Anda Sehat, Kami Bahagia</h5>
            <p>Kepuasan Anda, Tujuan Kami</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="./img/img-01.jpg" class="d-block w-100" alt="..." />
          <div class="carousel-caption">
            <h5>Selamat Datang Di Website</h5>
            <p>Profil Puskesmas Cempae</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

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
          <div class="col-12 col-md-12 col-lg-4">
            <div class="card text-light text-center bg-white pb-2">
              <div class="card-body text-dark">
                <div class="img-area mb-4">
                  <img src="img/taman-bermain.jpeg" class="img-fluid" alt="Taman Bermain" />
                </div>
                <h4 class="card-title">Taman Bermain</h4>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-12 col-lg-4">
            <div class="card text-light text-center bg-white pb-2">
              <div class="card-body text-dark">
                <div class="img-area mb-4">
                  <img src="img/area-parkir.jpeg" class="img-fluid" alt="Parkiran" />
                </div>
                <h4 class="card-title">Area Parkir</h4>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-12 col-lg-4">
            <div class="card text-light text-center bg-white pb-2">
              <div class="card-body text-dark">
                <div class="img-area mb-4">
                  <img src="img/ruang-tunggu.jpeg" class="img-fluid" alt="Ruang Tunggu" />
                </div>
                <h4 class="card-title">Ruang Tunggu</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

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
          <div class="col-12 col-md-12 col-lg-4">
            <div class="card text-light text-center bg-white pb-2 h-100">
              <div class="card-body text-dark">
                <div class="img-area mb-4">
                  <img src="./img/penanaman-toga.jpg" class="img-fluid" alt="Dokumentasi Penanaman TOGA" />
                </div>
                <h5 class="card-title">Kegiatan Penanaman TOGA di Puskesmas: Memperkenalkan Tanaman Obat Keluarga</h5>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-12 col-lg-4">
            <div class="card text-light text-center bg-white pb-2 h-100">
             <div class="card-body text-dark">
                <div class="img-area mb-4">
                  <img src="./img/penyuluhan-kelas-ibu-hamil.jpeg" class="img-fluid" alt="Dokumentasi saat Penyuluhan" />
                </div>
                <h5 class="card-title">Penyuluhan Pencegahan Stunting Sejak dalam Kandungan: Membangun Generasi Sehat dan Cerdas</h5>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-12 col-lg-4">
            <div class="card text-light text-center bg-white pb-2 h-100">
             <div class="card-body text-dark">
                <div class="img-area mb-4">
                  <img src="./img/pembuatan-jamu.jpg" class="img-fluid" alt="Pembuatan Jamu dari TOGA" />
                </div>
                <h5 class="card-title">Kegiatan Pembuatan Jamu dari TOGA: Mendorong Penggunaan Obat Tradisional yang Aman dan Berkhasiat</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--Card(Info Lanjut)-->
    <section id="Info Lanjut">
      <div class="container">
        <div class="row text-center">
          <h2>Info Lanjut</h2>
        </div>
        <div class="row">
          <div class="peta-responsive col-md-6 mb-3">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.121458257546!2d119.63377447508077!3d-3.9954405959783057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d95bae56cf39871%3A0xc1de2e67686687b8!2spuskesmas%20cempae!5e0!3m2!1sen!2sid!4v1691288284054!5m2!1sen!2sid" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <div class="col-md-6 mb-3">
          <div class="col">
            <div class="row text-center">
              <h4>Kontak Kami</h4>
              <p>Kami sangat menghargai pesan Anda. Silahkan tinggalkan pesan pada kolom yang tersedia.</p>
            </div>
          </div>
        
          <div class="col">
            <form method="post" id='contact-form'>
               
              <div class="form-group pb-2">
                <label for="">Nama :</label>
                <input type="text" class="form-control" name="nama" placeholder="Nama lengkap">
              </div>
        
              <div class="form-group pb-2">
                <label for="">E-mail :</label>
                <input type="email" class="form-control" name="email" placeholder="example@gmail.com">
              </div>
        
              <div class="form-group pb-3">
                <label for="">Kritik dan Saran :</label>
                <textarea name="pesan" class="form-control" cols="30" rows="7"></textarea>
              </div>
        
              <input class="btn btn-warning" type="submit" value="Kirim Pesan">
        
            </form>
          </div>
        </div>
        </div>
      </div>
    </section>
    `;
  },
 
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const form = document.getElementById('contact-form')
    form.addEventListener('submit', async (e) => {
      e.preventDefault()
      const formData = new FormData(form)
      const name = formData.get('nama')
      const email = formData.get('email')
      const message = formData.get('pesan')
      console.log(name, email, message)
      form.reset()
    })    
    inject();
  },
};
 
export default Home;