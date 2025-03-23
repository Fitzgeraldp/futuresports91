import './App.css';

import './components/header/header.css';
import './components/aboutus/aboutus.css';
import './components/classtimesandprices/classtimesandprices.css';
import './components/programsandinformation/programsandinformation.css';
import './components/faqs/faqs.css';
import './components/contactus/contactus.css';
import './components/signin/signin.css';
import './components/footer/footer.css';

import Header from './components/header/header';
import AboutUs from './components/aboutus/aboutus';
import ClassTimesandPrices from './components/classtimesandprices/classtimesandprices';
import ProgramsandInformation from './components/programsandinformation/programsandinformation';
import FAQs from './components/faqs/faqs';
import ContactUs from './components/contactus/contactus';
import SignIn from './components/signin/signin';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
      <Header />
      <AboutUs data-testid="about-us" />
      <ClassTimesandPrices data-testid="class-times-prices" />
      <ProgramsandInformation data-testid="programs-information" />
      <FAQs data-testid="faqs" />
      <ContactUs data-testid="contact-us" />
      <SignIn data-testid="sign-in" />
      <Footer />
    </>
  )
}

export default App
