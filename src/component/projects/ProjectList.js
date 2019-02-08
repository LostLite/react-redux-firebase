import React from 'react';
import ProjectSummary from './ProjectSummary'

const ProjectList = (props) =>{
    const {projectList} = props;
    return (
        <div className="project-list section">
            {projectList && projectList.map(project => {
                return(
                    <ProjectSummary project={project} key={project.id} />
                )
            })}
        </div>
    )
}

export default ProjectList;