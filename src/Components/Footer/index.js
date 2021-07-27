import React from 'react'



//------------------------------------- Footer -----------------------------------------------//



function Footer() {
    return(
        <div>
            <div style={{backgroundColor: "#7CD77C"}}>
                <div class="navbar navbar-expand-lg navbar-light">
                    <div class="navbar-nav me-auto mb-2 mb-lg-0" >
                        <div className="row">
                            <h4 className="titlePage" style={{fontSize:'200%', paddingLeft:'35%'}}>Florent Hirel</h4>
                            <p className="titlePage" style={{fontSize:'80%', paddingLeft:'35%'}}>
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