import React from 'react'
import { useSelector } from 'react-redux'

function Skills() {

  const themeType = useSelector((state) => state.counter.value)

  let bgType, textType;

  themeType == "ligth" ? bgType = "bg-body-tertiary" : bgType = "bg-black"

  themeType == "ligth" ? textType = "" : textType = "text-bg-dark"

  return (
    <>
      <section id="skills" className={"skills" + " " + bgType + " " + textType}>
        <div id='skills_container' className="container">
          <h1 className="section-title pt-5">skills</h1>
          <p className='mb-5 text-center'>As a front-end developer, I possess a strong foundation in HTML, CSS, and JavaScript,</p>
          <div className="row pt-3 pb-5">
            <div className="col-lg-4 col-md-6 icon-box">
              <div className="icon bg-primary"><i className="bi bi-android2"></i></div>
              <h4 className="title">Android</h4>
              <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box">
              <div className="icon bg-primary"><i className="bi bi-apple"></i></div>
              <h4 className="title">IOs</h4>
              <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box">
              <div className="icon bg-primary"><i className="bi bi-bootstrap"></i></div>
              <h4 className="title">Bootstrap5</h4>
              <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box">
              <div className="icon bg-primary"><i className="bi bi-diagram-3-fill"></i></div>
              <h4 className="title">Node</h4>
              <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box">
              <div className="icon bg-primary"><i className="bi bi-gem"></i></div>
              <h4 className="title">Responsive</h4>
              <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box">
              <div className="icon bg-primary"><i className="bi bi-wordpress"></i></div>
              <h4 className="title">Wordpress</h4>
              <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Skills