import tcsLogo from '../images/tcsLogo.png';
import expeditechLogo from '../images/expdLogo.png';
import animakerLogo from '../images/animakerLogo.png';
import zohoLogo from '../images/zohoLogo.jpg';
import muSigmaLogo from '../images/muSigmaLogo.jpg';

function JobDescription({org}){
    
    const role = org === 'Tcs' ? 'I.T. Analyst (React Js Developer)' : org === 'Expeditech' ? 'Senior Frontend Developer' : org === 'Animaker' ? 'React Developer' : org === 'Zoho' ? 'Member of Technical Staff' : org === 'MuSigma' ? 'Trainee Decision Scientist' : '';

    const tcsDesc = <ul>
                        <li>Engineered scalable UI components with React.js, Redux Toolkit, and TypeScript, implementing form validation, user input handling, and optimizing UI responsiveness.</li>
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
                                Independently developed and delivered 20+ major features for the Animaker App, enhancing the video making experience for 15 Million+ users.
                            </li>
                            <li>
                                Prominent features include
                                <ul>
                                    <li><a style={{color: 'blue'}} href="https://new.animaker.com/introducing-presenter-view-on-animaker-deck-the-ultimate-feature-for-delivering-flawless-presentations-261346" target="_blank">Presenter View</a> - Enabled seamless dual screen control,
                                    significantly improving presentation flow and user interaction.
                                    This feature was recognized as the <b>"ultimate feature"</b> for
                                    delivering flawless presentations.</li>
                                    <li><a style={{color: 'blue'}} href="https://new.animaker.com/say-bye-to-mouse-clicks!-hello-to-your-own-fingers!-introducing-touch-screen-enabled-animaker-for-laptops-and-monitors-244459" target="_blank">Touch functionality for the entire app</a> - Optimized Animaker for
                                    50+ touchscreen laptops, enhancing accessibility for creators.</li>
                                    <li><b>Document Intelligence Features</b> – Bulk editing tools reducing
                                    the editing time by over 90%. Hailed as a <b>“game changer”</b> by
                                    the Sales Head.</li>
                                </ul>
                            </li>
                            <li>
                                Independently handled frontend support for all payment related tasks. Implemented modern authorization mechanisms like OAuth, facilitating secure user authentication.
                            </li>
                        </ul>

    const zohoDesc = 
                        <ul>
                            <li>
                                Worked on frontend development for ManageEngine - Desktop Central, primarily focusing on UI migration from Struts to Ember.js.
                            </li>
                        </ul>

    const muSigmaDesc = 
                        <ul>
                            <li>
                                Analyzed chat based workspace performance, leveraging Cosmos DB for data analytics & dashboarding.
                            </li>
                        </ul>

    const desc = org === 'Tcs' ? tcsDesc : org === 'Expeditech' ? expeditechDesc : org === 'Animaker' ? animakerDesc : org === 'Zoho' ? zohoDesc : org === 'MuSigma' ? muSigmaDesc : '';

    const companyName = org === 'Tcs' ? 'Tata Consultancy Services' : org === 'Expeditech' ? 'Expeditech Inc.' : org === 'Animaker' ? 'Animaker Inc.' : org === 'Zoho' ? 'Zoho Corporation' : org === 'MuSigma' ? 'Mu Sigma Inc.' : '';

    const companyLogo = org === 'Tcs' ? tcsLogo : org === 'Expeditech' ? expeditechLogo : org === 'Animaker' ? animakerLogo : org === 'Zoho' ? zohoLogo : org === 'MuSigma' ? muSigmaLogo : null;

    const tcsSkills = <><div>React.js</div><div>Redux Toolkit</div><div>Typescript</div><div>Html5</div><div>Css3</div><div>Prime React UI</div><div>Agile Process</div><div>Jira</div><div>Github</div><div>VS Code</div></>

    const expeditechSkills = <><div>Next.js</div><div>Typescript</div><div>Html5</div><div>Tailwind Css</div><div>Radix UI</div><div>Agile Methodologies</div><div>Azure Devops</div><div>VS Code</div></>
    
    const animakerSkills = <><div>React.js</div><div>Redux</div><div>Javascript</div><div>Html5</div><div>Css3</div><div>Html Canvas</div><div>SVG</div><div>Web APIs</div><div>Immutable Js</div><div>Agile Methodologies</div><div>Atlassian Jira</div><div>Gitlab</div><div>Github</div><div>VS Code</div><div>Jenkins</div></>
    
    const zohoSkills = <><div>Ember.js</div><div>React.js</div><div>Javascript</div><div>Html5</div><div>Css3</div><div>Gitlab</div><div>VS Code</div></>
    
    const muSigmaSkills = <><div>Cosmos DB</div><div>Power BI</div></>

    const skillsUsed = org === 'Tcs' ? tcsSkills : org === 'Expeditech' ? expeditechSkills : org === 'Animaker' ? animakerSkills : org === 'Zoho' ? zohoSkills : org === 'MuSigma' ? muSigmaSkills : ''; 

    

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