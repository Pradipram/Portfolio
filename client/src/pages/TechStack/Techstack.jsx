import React from 'react'

import "./Techstack.css"
import { TechStackList } from '../../utils/techstackList'

const Techstack = ({toggle}) => {
  return (
    <div className='techstack'>
        <h1>Tech Stack</h1>
        <div className="row">
            {
                TechStackList.map(tech =>(
                    <div className={toggle? "col-md-4":"col-md-3"} key={tech.id}>
                        <div className="card m-2 tech-card">
                            <div className="card-content">
                                <div className="card-body">
                                    <div className='tech-item'>
                                        <tech.icon/>
                                        <h5>{tech.name}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Techstack