import ProjectDetails from "./ProjectDetails";
import cmvSnap from '../images/cmv_snap.png';

function Projects({id}){

    const projectSnaps = {
        'cmv' : cmvSnap
    }

    return(
        <div className="projectsCont">
            <div className="lhs">
                <ProjectDetails id={id}/>
            </div>
            <div className="rhs">
                <img src={projectSnaps[id]} alt='project snap'/>
            </div>
        </div>
    )
}

export default Projects;