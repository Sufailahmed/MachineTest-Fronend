import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
   <>
            <header>
                <h1 class="site-heading text-center text-faded d-none d-lg-block">
                    <span class="site-heading-upper text-primary mb-3">A Dashboard Application</span>
                   
                </h1>
            </header>

            <nav class="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
             
            </nav>
            <section class="page-section about-heading">
                <div class="container">
                    <img class="img-fluid rounded about-heading-img mb-3 mb-lg-0" src="https://t3.ftcdn.net/jpg/03/93/37/24/360_F_393372407_u34qDqrJuvMZICQC0oKnKgEUi8XqVPJG.jpg" alt="..." />
                    <div class="about-heading-content">
                        <div class="row">
                            <div class="col-xl-9 col-lg-10 mx-auto">
                                <div class="bg-faded rounded p-5">
                                    <h2 class="section-heading mb-4">
                                        {/* <span class="section-heading-upper">Strong Coffee, Strong Roots</span> */}
                                      
                                    </h2>
                                    <p>
                                       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore mollitia nostrum ut, assumenda, qui eligendi quidem sapiente perferendis magnam quae velit corrupti libero recusandae minus voluptatum explicabo cum dolores sequi.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer class="footer text-faded text-center py-5">
                <div class="container"><p class="m-0 small">Copyright &copy; Your Website 2023</p></div>
            </footer>
   
   </>
  )
}

export default About