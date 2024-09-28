import tcsLogo from '../images/tcsLogo.png';
import expeditechLogo from '../images/expdLogo.png';
import animakerLogo from '../images/animakerLogo.png';
import zohoLogo from '../images/zohoLogo.jpg';
import muSigmaLogo from '../images/muSigmaLogo.jpg';

function JobDescription({org}){
    
    const role = org === 'Tcs' ? 'IT Analyst (React Js Developer)' : org === 'Expeditech' ? 'Senior Frontend Developer' : org === 'Animaker' ? 'React Developer' : org === 'Zoho' ? 'Member of Technical Staff' : org === 'MuSigma' ? 'Trainee Decision Scientist' : '';

    const tcsDesc = 
                        <ul>
                            <li>
                            Working on a cloud migration project for a US based client.
                            </li>
                        </ul>
    
    const expeditechDesc = 
                        <ul>
                            <li>
                            Led a team of 3-4 frontend developers on an internal UEMS (Unified Endpoint Management System) product development project.
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

    const desc = org === 'Tcs' ? tcsDesc : org === 'Expeditech' ? expeditechDesc : org === 'Animaker' ? animakerDesc : org === 'Zoho' ? zohoDesc : org === 'MuSigma' ? muSigmaDesc : '';

    const companyName = org === 'Tcs' ? 'Tata Consultancy Services' : org === 'Expeditech' ? 'Expeditech Inc.' : org === 'Animaker' ? 'Animaker Inc.' : org === 'Zoho' ? 'Zoho Corporation' : org === 'MuSigma' ? 'Mu Sigma Inc.' : '';

    const companyLogo = org === 'Tcs' ? tcsLogo : org === 'Expeditech' ? expeditechLogo : org === 'Animaker' ? animakerLogo : org === 'Zoho' ? zohoLogo : org === 'MuSigma' ? muSigmaLogo : null;

    const expeditechSkills = <><div>Next.js</div><div>Typescript</div><div>Html5</div><div>Tailwind Css</div><div>Agile Methodologies</div><div>Azure Devops</div><div>VS Code</div></>
    
    const animakerSkills = <><div>React.js</div><div>Redux</div><div>Javascript</div><div>Html5</div><div>Css3</div><div>Html Canvas</div><div>SVG</div><div>Web APIs</div><div>Immutable Js</div><div>Agile Methodologies</div><div>Atlassian Jira</div><div>Gitlab</div><div>Github</div><div>VS Code</div><div>Jenkins</div></>
    
    const zohoSkills = <><div>Ember.js</div><div>React.js</div><div>Javascript</div><div>Html5</div><div>Css3</div><div>Gitlab</div><div>VS Code</div></>
    
    const muSigmaSkills = <><div>Cosmos DB</div><div>Power BI</div></>

    const skillsUsed = org === 'Expeditech' ? expeditechSkills : org === 'Animaker' ? animakerSkills : org === 'Zoho' ? zohoSkills : org === 'MuSigma' ? muSigmaSkills : ''; 

    

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
            <div className="skills">{skillsUsed}</div>
        </div>
    )
}

export default JobDescription;