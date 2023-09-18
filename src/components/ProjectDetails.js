import reactLogo from '../images/reactLogo.png';
import githubLogo from '../images/githubLogo.png'

function ProjectDetails({id}){

    const projectTitles = {
        'cmv' : "Cosmic Music Visualiser",
        'mpw' : "My personal website"
    }

    const projectDescriptions = {
        'cmv' : 
                <ul>
                    <li>
                        Upload your favorite music and enjoy it's visualization in a cosmic setup!
                    </li>
                    <li>
                        Dynamic audio visualization created with React, Web Audio API & HTML Canvas.
                    </li>
                </ul>,
        'mpw' : 
                <ul>
                    <li>
                        This website was developed from scratch by me using React.js and Node.js 
                    </li>
                </ul>
    }

    const tryItLinks = {
        'cmv' : 'https://ssrk95.github.io/music-visualiser/'
    }

    const codeRepoLinks = {
        'cmv' : 'https://github.com/ssrk95/music-visualiser',
        'mpw' : 'https://github.com/ssrk95/my-website'
    }

    const showTryIt = id === 'cmv';
    const showCodeRepo = id === 'cmv' || id === 'mpw';

    const handleTryIt = e =>{
        try{
            window.open(tryItLinks[id], '_blank');
        }catch(err){
            console.log('error in handleTryIt method in ProjectDetails component: ', err);
        }
    }

    const openCodeRepo = e => {
        try{
            window.open(codeRepoLinks[id], '_blank');
        }catch(err){
            console.log('error in openCodeRepo method in ProjectDetails component: ', err);
        }
    }

    return(
        <>
            <div className="title">
                {projectTitles[id]}
            </div>
            <div className="desc">
                {projectDescriptions[id]}
            </div>
            {showTryIt && 
                            <div className="tryIt">
                                <img src={reactLogo} alt='react logo'/>
                                <span onClick={handleTryIt}>Try it</span>
                            </div>
            }
            {showCodeRepo && 
                            <div className="codeRepo">
                                <img src={githubLogo} alt='github logo'/>
                                <span onClick={openCodeRepo}>Code Repo</span>
                            </div>
            }
        </>
    )
}

export default ProjectDetails;