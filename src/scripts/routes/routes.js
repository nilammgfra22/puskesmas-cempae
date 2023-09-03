import AboutUs from '../views/pages/about-us';
import Activities from '../views/pages/activities';
import Facilities from '../views/pages/facilities';
import Home from '../views/pages/home';
 
const routes = {
  '/': Home, // default page
  '/beranda': Home,
  '/fasilitas': Facilities,
  '/kegiatan': Activities,
  '/tentang-kami': AboutUs,
};
 
export default routes;