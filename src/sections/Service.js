import React from 'react'

const Service = () => {
  return (
    <section id="service" >
        <div className="container">
            <div className="service_text">
                <h2>Hello! I’m Jonathon Kubb, a freelance Photographer.</h2>

                <p>Based in New York, I specialize in landscape, advertorial and conceptual photography. </p>
            </div>
            <div className="common_heading">
                <h3>What services do I offer</h3>
            </div>
            <div className="service_main">
                <div className="service_item">
                    <div className="service_img">
                        <img src="assets/service1.jpg" alt="service 1"/>
                    </div>
                    <div className="service_content">
                        <h3>Landscape</h3>
                        <p>Curabitur blandit tempus porttitor. Duis mollis inceptos mollisest commodo luctus erat. </p>
                    </div>
                </div>
                <div className="service_item">
                    <div className="service_img">
                        <img src="assets/service2.jpg" alt="service 1"/>
                    </div>
                    <div className="service_content">
                        <h3>Advertorial </h3>
                        <p>Maecenas faucibus mollis interdum. Morbi risus porta ac consectetur, vestibulum at eros. </p>
                    </div>
                </div>
                <div className="service_item">
                    <div className="service_img">
                        <img src="assets/service3.jpg" alt="service 1"/>
                    </div>
                    <div className="service_content">
                        <h3>Landscape</h3>
                        <p>Donec elit non porta gravida eget metus. Etiam porta sem malesuada magna mollis euismod. </p>
                    </div>
                </div>
            </div>

        </div>  
    </section>
  )
}

export default Service