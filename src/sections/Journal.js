import React from 'react'

const Journal = () => {
  return (
    <section id="journal">
        <div className="container">
            <div className="instagram_main">
                <h3 className="instagram_heading">From the Journal</h3>
            </div>
            <div className="journal_wrapper">
                <div className="journal_item">
                    <div className="journal_item_head">
                        <h3>Pellentesque  Malesuada Vulputate</h3>
                        <p>21.04.2014  /  Photography, Journal</p>
                    </div>
                    <div className="journal_item_img">
                        <img src="assets/journal1.jpg" alt="img"/>
                    </div>
                    <div className="journal_item_detail">
                        <p>Curabitur blandit tempus porttitor. Duis at vollisky inceptos mollisestor commodo luctus erat. Morbi  risus, porta consectetur vestibulum at eros.</p>
                        <div className="journal_action">
                            <a href="#">Continue Reading</a>
                            <div className="journal_reaction">
                                <i className="fa-regular fa-heart"></i> <span>35</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="journal_item">
                    <div className="journal_item_head">
                        <h3>Malesuada Portar Etiam Ligula</h3>
                        <p>21.04.2014  /  Photography, Journal</p>
                    </div>
                    <div className="journal_item_img">
                        <img src="assets/journal2.jpg" alt="img"/>
                    </div>
                    <div className="journal_item_detail">
                        <p>Curabitur blandit tempus porttitor. Duis at vollisky inceptos mollisestor commodo luctus erat. Morbi  risus, porta consectetur vestibulum at eros.</p>
                        <div className="journal_action">
                            <a href="#">Continue Reading</a>
                            <div className="journal_reaction">
                                <i className="fa-regular fa-heart"></i> <span>27</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="journal_item">
                    <div className="journal_item_head">
                        <h3>Purus Justo Consectetur Ipsum</h3>
                        <p>21.04.2014  /  Photography, Journal</p>
                    </div>
                    <div className="journal_item_img">
                        <img src="assets/journal3.jpg" alt="img"/>
                    </div>
                    <div className="journal_item_detail">
                        <p>Curabitur blandit tempus porttitor. Duis at vollisky inceptos mollisestor commodo luctus erat. Morbi  risus, porta consectetur vestibulum at eros.</p>
                        <div className="journal_action">
                            <a href="#">Continue Reading</a>
                            <div className="journal_reaction">
                                <i className="fa-regular fa-heart"></i> <span>43</span>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    </section>
  )
}

export default Journal