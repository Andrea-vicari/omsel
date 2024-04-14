import React from 'react'
import Resume from "../assets/pdf/Resume.pdf"

function CallToActionSmall() {
    return (
        <section className="bg-primary py-5">

            <div className="container">

                <div className="row d-flex align-items-center">
                    <div className="col-md-9">
                        <h4 className='fs-3 fw-bolder text-black mb-0'>Download Resume</h4>
                        <p className='fs-5 text-black-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi reprehenderit sed ullam modi at unde consequuntur porro ut eum excepturi dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="col-md-3 mt-3">
                        <p className="text-center">
                            <a className="btn btn-outline-dark btn-lg p-3" href={Resume} target='_blank'>
                                <i className="fs-3 fa fa-download"></i> Download
                            </a>
                        </p>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default CallToActionSmall