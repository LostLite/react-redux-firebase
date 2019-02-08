import React from 'react'

export default function ProjectDetails(props) {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">Project Title {id}</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, modi nihil in vitae, corrupti officiis minima laborum quam maxime molestias culpa exercitationem sequi voluptatibus dignissimos? Quo reiciendis asperiores totam sed!</p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
                <div>Posted by Mario</div>
                <div>2nd September, 2am.</div>
            </div>
        </div>
    </div>
  )
}
