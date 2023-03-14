import '../styles/footer.css'

function Footer() {

  
  return (
    <footer>
        <div className='footer-copy'>
            <a className='footer-email' href="mailto:jdomindev@gmail.com" target="_blank" rel="noreferrer">jdomindev@gmail.com</a>
            <h3 className='copyright'>© 2023 Copyright: Jose Dominguez</h3>
        </div>
        <div className='footer-contact'>
          <div className='icon-container'>
            <a className='contact-icon' href="https://www.github.com/jdomindev" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github fa-fw icon"></i>
              <h3 className='icon-name'>GitHub</h3>
            </a>
            <a className='contact-icon' href="https://www.linkedin.com/in/jdomindev" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-linkedin fa-fw icon"></i>
              <h3 className='icon-name'>LinkedIn</h3>
            </a>
            <a className='contact-icon' href="mailto:jdomindev@gmail.com" target="_blank" rel="noreferrer">
              <i className="fa-regular fa-envelope fa-fw icon"></i>
              <h3 className='icon-name'>Email</h3>
            </a>
          </div>
        </div>
    </footer>
  )
}

export default Footer
