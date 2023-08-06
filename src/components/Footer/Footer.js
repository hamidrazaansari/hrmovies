import React from 'react'
import './Footer.css';

function Footer() {
    return (
    

        <div className='footer'>
            <section className="">
                <p className="d-flex justify-content-center align-items-center">
                    <span className="me-3">Register for free</span>
                    <button type="button" className="btn btn-outline-light btn-rounded">
                        Sign up!
                    </button>
                </p>
            </section>

            <hr className="mb-4" />

            <section className="mb-4 text-center">
                <a
                    className="btn btn-outline-light btn-floating m-1"
                    href="#!"
                    role="button"
                ><i className="fab fa-facebook-f"></i
                ></a>

                <a
                    className="btn btn-outline-light btn-floating m-1"
                    href="#!"
                    role="button"
                ><i className="fab fa-twitter"></i
                ></a>

                <a
                    className="btn btn-outline-light btn-floating m-1"
                    href="#!"
                    role="button"
                ><i className="fab fa-google"></i
                ></a>


                <a
                    className="btn btn-outline-light btn-floating m-1"
                    href="#!"
                    role="button"
                ><i className="fab fa-instagram"></i
                ></a>


                <a
                    className="btn btn-outline-light btn-floating m-1"
                    href="#!"
                    role="button"
                ><i className="fab fa-aedin-in"></i
                ></a>

                <a
                    className="btn btn-outline-light btn-floating m-1"
                    href="#!"
                    role="button"
                ><i className="fab fa-github"></i
                ></a>
            </section>
            <div className="text-center p-3 style-copyR"
         >
      © 2020 Copyright:
      <a className="text-white" href="https://mdbootstrap.com/"
         >HRSmovies.com</a
        >
    </div>
  </div>
    
    )
}

export default Footer
