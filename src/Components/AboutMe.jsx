import React from 'react'
import { useSelector} from 'react-redux'

function Bio() {

    const themeType = useSelector((state) => state.counter.value)

    let bgType, textType, textColor;

    themeType == "ligth" ? bgType = "bg-ligth" : bgType = "bg-dark"
    themeType == "ligth" ? textType = "" : textType = "text-bg-dark"
    themeType == "ligth" ? textColor = "" : textColor = "text-body-secondary"


  return (
    <>
    <section id="about" className={"about py-5 mt-5"+ " " + bgType + " " + textType}>
        <div className="container px-3">

        <div>
              <h2 className="section-title">about</h2>
              <p className='mb-5 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, animi, quasi cum nost</p>
        </div>

            <div className="row">
                <div className="image col-lg-4 d-flex align-items-stretch justify-content-center justify-content-lg-start">
                </div>
                <div className="col-lg-8 d-flex flex-column align-items-stretch">
                    <div className="content ps-lg-4 d-flex flex-column justify-content-center">
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right text-primary"></i> <strong>Name:</strong> <span>Your Name
                                            </span></li>
                                    <li><i className="bi bi-chevron-right text-primary"></i> <strong>Website:</strong>
                                        <span>www.example.com</span>
                                    </li>
                                    <li><i className="bi bi-chevron-right text-primary"></i> <strong>Phone:</strong> <span>+123 456
                                            7890</span></li>
                                    <li><i className="bi bi-chevron-right text-primary"></i> <strong>City:</strong> <span>Northbrook,
                                            IL</span></li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right text-primary"></i> <strong>Age:</strong> <span>30</span></li>
                                    <li><i className="bi bi-chevron-right text-primary"></i> <strong>Degree:</strong> <span>Master</span>
                                    </li>
                                    <li><i className="bi bi-chevron-right text-primary"></i> <strong>Email:</strong>
                                        <span>yourmail@example.com</span>
                                    </li>
                                    <li><i className="bi bi-chevron-right text-primary"></i> <strong>Freelance:</strong>
                                        <span>Available</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <hr></hr>
                        <div className="mt-0">
                            <p className='mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aspernatur odit, dolorem dicta commodi doloribus excepturi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aspernatur odit, dolorem dicta commodi doloribus excepturi.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
    </>
  )
}

export default Bio