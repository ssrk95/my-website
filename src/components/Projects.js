import ProjectDetails from "./ProjectDetails";
import cmvSnap from '../images/cmv_snap.png';
import mpwSnap from '../images/mpw_snap.png';
import evrSnap from '../images/evr_snap.png';

function Projects({id, switchContent}){

    const projectSnaps = {
        'cmv' : cmvSnap,
        'evr' : evrSnap,
        'mpw' : mpwSnap
    }

    const tryItLinks = {
        'evr' : 'https://ssrk95.github.io/video-reversal/',
        'cmv' : 'https://ssrk95.github.io/music-visualiser/'
    }

    const handleTryIt = e =>{
        try{
            if(id === 'mpw'){
                switchContent('intro');
            }else{
                window.open(tryItLinks[id], '_blank');
            }
        }catch(err){
            console.log('error in handleTryIt method in ProjectDetails component: ', err);
        }
    }

    return(
        <div className="projectsCont">
            <div className="lhs">
                <ProjectDetails id={id} handleTryIt={handleTryIt}/>
            </div>
            <div className="rhs">
                <img src={projectSnaps[id]} onClick={handleTryIt} alt='project snap'/>
            </div>
        </div>
    )
}

export default Projects;