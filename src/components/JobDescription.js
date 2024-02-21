import expeditechLogo from '../images/expdLogo.png';
import animakerLogo from '../images/animakerLogo.png';
import zohoLogo from '../images/zohoLogo.jpg';
import muSigmaLogo from '../images/muSigmaLogo.jpg';

function JobDescription({org}){
    
    const role = org === 'Expeditech' ? 'Front-end Developer' : org === 'Animaker' ? 'React Developer' : org === 'Zoho' ? 'Member of Technical Staff' : org === 'MuSigma' ? 'Trainee Decision Scientist' : '';

    const expeditechDesc = 
                        <ul>
                            <li>
                                Leading a team of 4 front-end developers on an internal project.
                            </li>
                        </ul>

    const animakerDesc = 
                        <ul>
                            <li>
                                Part of the core Animaker App team, building features simplifying the process of video making, delivering value for over 15 Million users.
                            </li>
                            <li>
                                Built 20+ major features and several enhancements, prominent ones being <a style={{color: 'blue'}} href="https://new.animaker.com/introducing-presenter-view-on-animaker-deck-the-ultimate-feature-for-delivering-flawless-presentations-261346" target="_blank">Presenter View</a> | <b>Interactive Audio Fade settings in the timeline</b> | <b>Animaker 2.0 to 3.0 revamp features</b> | <b>Document intelligence features</b> | <b>New user onboard walkthrough</b> | <a style={{color: 'blue'}} href="https://new.animaker.com/say-bye-to-mouse-clicks!-hello-to-your-own-fingers!-introducing-touch-screen-enabled-animaker-for-laptops-and-monitors-244459" target="_blank">Touch functionality for the entire app</a>
                            </li>
                            <li>
                                Independently handled the frontend support for all payment related tasks for my team. This included implementing modern authorization mechanisms like OAuth.
                            </li>
                        </ul>

    const zohoDesc = 
                        <ul>
                            <li>
                                Worked on the Client-side development of “Manage Engine - Desktop Central, which is a division of Zoho Corporation.
                            </li>
                            <li>
                                Client-side development involved UI migration from the then existing Struts framework to Ember framework.
                            </li>
                        </ul>

    const muSigmaDesc = 
                        <ul>
                            <li>
                                Worked on the analysis and performance of a commonly used chat based workspace.
                            </li>
                            <li>
                                Gathered usage statistics in Cosmos DB and performed analytics and dash-boarding on top of it.
                            </li>
                        </ul>

    const desc = org === 'Expeditech' ? expeditechDesc : org === 'Animaker' ? animakerDesc : org === 'Zoho' ? zohoDesc : org === 'MuSigma' ? muSigmaDesc : '';

    const companyName = org === 'Expeditech' ? 'Expeditech Inc.' : org === 'Animaker' ? 'Animaker Inc.' : org === 'Zoho' ? 'Zoho Corporation' : org === 'MuSigma' ? 'Mu Sigma Inc.' : '';

    const companyLogo = org === 'Expeditech' ? expeditechLogo : org === 'Animaker' ? animakerLogo : org === 'Zoho' ? zohoLogo : org === 'MuSigma' ? muSigmaLogo : null;

    return(
        <div className="jobDesc">
            <div className='company'>
                <div className='info'>
                    <div className="name">{companyName}</div>
                    <div className="role">{role}</div>
                </div>
                <div className={`logo ${org}`}>
                    <img src={companyLogo} alt='companyLogo'/>
                </div>
            </div>
            <div className="desc">{desc}</div>
        </div>
    )
}

export default JobDescription;