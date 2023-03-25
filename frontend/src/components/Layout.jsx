import NavBar from "./NavBar.jsx"
import Footer from "./footer/Footer.jsx"

export default function Layout({children})
{
  <div>
    <NavBar/>
    {children}
    <Footer/>
  </div>
}