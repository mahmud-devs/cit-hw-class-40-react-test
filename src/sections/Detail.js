import React from 'react'

const Detail = () => {
  return (
    <section id="detail">
        <div className="container">
            <div className="about_main">
                <div className="about_main_me">
                    <div className="about_me_heading">
                        <h3>A little about me</h3>
                    </div>
                    <div className="about_me_detail">
                        <div className="about_me_img">
                            <img src="assets/me.jpg" alt="me"/>
                        </div>
                        <div className="about_me_option">
                            <div className="option_one">
                                <p>Maecenas faucibus molli interdum. Cras mattis consectetur purus sitor amet sed donec malesuada ullamcorper odio.</p>
                            </div>
                            <div className="option_two">
                                <p>Curabitur blandit tempus porttitor. Vollisky inceptos mollisestor commodo luctus. Curabitur blandit tempus porttitor. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vestibulum id ligulas semper. Cum sociis natoque penatibus et magnis maecenas. Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac egestas eget quam.</p>
                            </div>
                            
                        </div>
                    </div>
                </div>




                <div className="about_main_service">
                    <div className="about_me_heading">
                        <h3>My Services</h3>
                    </div>
                    <div className="about_service_detail">
                        <div className="service_icon">
                            <div className="service_icon_one">
                                <i className="fa-solid fa-camera"></i>
                            </div>
                            <div className="service_icon_two">
                                <i className="fa-solid fa-video"></i>
                            </div>
                            <div className="service_icon_three">
                                <i className="fa-solid fa-paintbrush"></i>
                            </div>
                        </div>
                        <div className="service_extra">
                            <div className="extra_detail">
                                <h3>Photography</h3>
                                <p>Curabitur blandit tempus porttitor. Duis at vollisky inceptos mollisestor commodo luctus erat. Morbi  risus, porta consectetur vestibulum at eros.</p>
                            </div>
                            <div className="extra_detail">
                                <h3>Motion Video</h3>
                                <p>Curabitur blandit tempus porttitor. Duis at vollisky inceptos mollisestor commodo luctus erat. Morbi  risus, porta consectetur vestibulum at eros.</p>
                            </div>
                            <div className="extra_detail">
                                <h3>Photo Retouching</h3>
                                <p>Curabitur blandit tempus porttitor. Duis at vollisky inceptos mollisestor commodo luctus erat. Morbi  risus, porta consectetur vestibulum at eros.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Detail