import reactLogo from '../images/reactLogo.png';
import githubLogo from '../images/githubLogo.png'

function ProjectDetails({id, handleTryIt}){

    const projectTitles = {
        'cmv' : "Cosmic Music Visualizer",
        'evr' : "Easy Video Reversal",
        'mpw' : "My Portfolio Website"
    }

    const projectDescriptions = {
        'evr' : 
                <ul>
                    <li>
                        Upload your video and get the reversed video in seconds!
                    </li>
                    <li>
                        Video reversal app created with React.js and Node.js
                    </li>
                </ul>,
        'cmv' : 
                <ul>
                    <li>
                        Upload your favorite music and enjoy it's visualization in a cosmic setup!
                    </li>
                    <li>
                        Dynamic audio visualization created with React.js, Web Audio API & HTML Canvas.
                    </li>
                </ul>,
        'mpw' : 
                <ul>
                    <li>
                        This website was developed from scratch by me using React.js and Node.js 
                    </li>
                </ul>
    }

    const codeRepoLinks = {
        'evr' : 'https://github.com/ssrk95/video-reversal',
        'cmv' : 'https://github.com/ssrk95/music-visualiser',
        'mpw' : 'https://github.com/ssrk95/my-website'
    }

    const showTryIt = id === 'evr' || id === 'cmv';
    const showCodeRepo = id === 'evr' || id === 'cmv' || id === 'mpw';

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