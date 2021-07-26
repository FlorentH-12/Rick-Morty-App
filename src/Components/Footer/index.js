import React from 'react'


function Footer() {
    return(
        <div>
            <br/>
            <br/>
            <div style={{backgroundColor: "#7CD77C"}}>
                <div class="navbar navbar-expand-lg navbar-light">
                    <div class="navbar-nav me-auto mb-2 mb-lg-0" >
                        <div className="row">
                            <h4>Florent Hirel</h4>
                            <p>
                                &copy;{new Date().getFullYear()} Rick & Morty App | All right reserved | Wubba lubba dub dub
                            </p>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;