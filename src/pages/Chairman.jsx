import React from 'react'
import Chairmanimg from '../assets/chairman1.jpg'

function Chairman() {
  return (
    <div className='bio'>
      <div className="left">
        <div className="biography">
          <h2>Biography</h2>
          <p>Hon. Oladipupo Ajibola. A is the Executive Chairman of Ifedore Local Government Area, elected on a platform of grassroots development and transparent governance. He brings extensive experience in public administration and community leadership to the office.</p>
          <p>Born and raised in Ifedore, he pursued his education at [Institution] and has dedicated his career to the development of his people. Prior to his election as Executive Chairman, he served in [previous roles] and championed several development initiatives across the local government.</p>
        </div>

        <div className="achievements">
          <h2>Key Achievements In Office</h2>
            <div className="a1">
                <img src="" alt="" />
                <div className="txt">
                  <h3>Road infrastructure upgrade</h3>
                  <p>Rehabilitated 14km of roads across 6 communities within the first year</p>
                </div>
            </div>
            <div className="a1">
                <img src="" alt="" />
                <div className="txt">
                  <h3>Road infrastructure upgrade</h3>
                  <p>Rehabilitated 14km of roads across 6 communities within the first year</p>
                </div>
            </div>
            <div className="a1">
                <img src="" alt="" />
                <div className="txt">
                  <h3>Road infrastructure upgrade</h3>
                  <p>Rehabilitated 14km of roads across 6 communities within the first year</p>
                </div>
            </div>
        </div>

        {/* <div className="development">
            <h3>Development Agenda</h3>
            <ul>
              <li className="dev"></li>
              <li className="dev"></li>
              <li className="dev"></li>
              <li className="dev"></li>
              <li className="dev"></li>
            </ul>
        </div> */}
      </div>
      <div className="right">
        <div className="pic">
          <img src={Chairmanimg} alt="" />
        </div>
        <div className="officedeets">

        </div>
        <div className="sendmessage">

        </div>
      </div>

    </div>
  )
}

export default Chairman