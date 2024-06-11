import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
   <footer id="footer" className="footer ">
  <div className="copyright">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-12">
          <div className="copyright-content">
            <p>Copyright © 2024 PSU-Hi-FI SciencePark PSU. Developed by <Link href='http://www.github.com/rusdeexii'> Internship </Link>  </p>
          </div>
        </div>
      </div>
    </div>
  </div></footer>

  )
}

export default Footer
