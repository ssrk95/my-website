import linkedInLogo from '../images/linkedinLogo.png';
import githubLogo from '../images/githubLogo.png';

function FollowMe(){

    const redirectToLinkedIn = e => {
        try{
            window.open('https://www.linkedin.com/in/ssrk95/', '_blank');
        }catch(err){
            console.log('error in redirectToLinkedIn method in FollowMe component: ', err);
        }
    }

    const redirectToGithub = e => {
        try{
            window.open('https://github.com/ssrk95', '_blank');
        }catch(err){
            console.log('error in redirectToGithub method in FollowMe component: ', err);
        }
    }

    return(
        <div className="followMeCont">
            <div className="label">Follow Me</div>
            <div className='links'>
                <div className="link linkedin"><img src={linkedInLogo} alt="linkedIn logo" onClick={redirectToLinkedIn}/></div>
                <div className="link github"><img src={githubLogo} alt="github logo" onClick={redirectToGithub}/></div>
            </div>
        </div>
    )
}

export default FollowMe;