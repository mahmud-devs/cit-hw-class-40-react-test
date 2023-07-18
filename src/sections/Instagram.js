import React from 'react'

const Instagram = () => {
  return (
    <section id="instagram">
        <div className="instagram_main">
            <h3 className="instagram_heading">Latest ınstagram shots</h3>
        </div>
        <div className="shots_wrapper">
            <div className="insta_shots">
                <img src="assets/pic1.jpg" alt="shots"/>
            </div>
            <div className="insta_shots">
                <img src="assets/pic2.jpg" alt="shots"/>
            </div>
            <div className="insta_shots">
                <img src="assets/pic3.jpg" alt="shots"/>
            </div>
            <div className="insta_shots">
                <img src="assets/pic4.jpg" alt="shots"/>
            </div>
        </div>
        <div className="insta_button">
            <a href="#"><i className="fa-brands fa-instagram"></i>Instagram page</a>
        </div>
        
    </section>
  )
}

export default Instagram