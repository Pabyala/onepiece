import Navbar from '../../components/Navbar'
import HeroImage from '../../components/HeroImage';
import CoverImg from '../../assets/OP-Img1.jpg'
import BirthdayContext from '../../components/BirthdayContext';

function Birthday() {
  return (
    <div>
      <Navbar/>
      <HeroImage heroImg={CoverImg}
                 title="Birthday list"
      />
      <BirthdayContext/>
    </div>
  )
}

export default Birthday;