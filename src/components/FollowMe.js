import linkedInLogo from '../images/linkedinLogo.png';

function FollowMe(){

    const redirectToLinkedIn = e => {
        try{
            window.open('https://www.linkedin.com/in/ssrk95/', '_blank');
        }catch(err){
            console.log('error in redirectToLinkedIn method in FollowMe component: ', err);
        }
    }

    return(
        <div className="followMeCont">
            <div className="label">Follow Me</div>
            <div className="linkedIn"><img src={linkedInLogo} alt="linkedIn logo" onClick={redirectToLinkedIn}/></div>
        </div>
    )
}

export default FollowMe;