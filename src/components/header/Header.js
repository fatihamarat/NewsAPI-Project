import "./index.css"
import Navbar from '../navbar/Navbar';

function Header() {
  return (
    <>
      <header className="header">
        <div className="header-left">
          <a href="https://drive.google.com/file/d/1ZMilK7dxaB1K_UHH3_JsI6f0xe2AVH6i/view?usp=share_link" className="header-title">FatiHamarat</a>
        </div>
        <div className="header-right">
          <form>
            <input type="text" placeholder="Ara..." />
          </form>
        </div>
      </header>
      <div className='navbar'><Navbar/></div>
    </>
  )
}

export default Header;