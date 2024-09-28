import Experience from "./Experience";
import Education from "./Education";
import Testimonial from "./Testimonial";

function Details({section}){

    const skills =
                    <ol>
                        <li>React</li>
                        <li>Redux (Flux architecture)</li>
                        <li>Next.js</li>
                        <li>Javascript</li>
                        <li>Typescript</li>
                        <li>Custom CSS, Tailwind CSS</li>
                        <li>HTML5</li>
                        <li>HTML Canvas / SVG</li>
                        <li>Web API</li>
                        <li>Immutable Js</li>
                        <li>Agile Development Process</li>
                        <li>Atlassian Jira, Azure Devops</li>
                        <li>Gitlab</li>
                        <li>Github</li>
                        <li>Visual Studio Code</li>
                        <li>Jenkins (CI/CD)</li>
                        <li>Ember Js</li>
                    </ol>

    const achievements =
                    <ul>
                        <li>
                            Built a feature <a style={{color: 'blue'}} href="https://new.animaker.com/introducing-presenter-view-on-animaker-deck-the-ultimate-feature-for-delivering-flawless-presentations-261346" target="_blank">Presenter View</a> in my last company Animaker Inc. This feature was acknowledged as the ultimate feature in the product "Animaker Deck".
                        </li>
                        <li>
                            Qualified to the Advanced Round of AMTI(Association of Mathematics Teachers of India) Olympiad in 2010.
                        </li>
                        <li>
                            Qualified through IIT-JEE Prelims and secured 92 marks in JEE Advanced.
                        </li>
                        <li>
                            Participated in and qualified through multiple competitive aptitude exams. 
                            Obtained 3rd position at city level in TIME aptitude exam, in 2008.
                        </li>
                        <li>
                            Trained in Mridangam. Been a part of a few stage plays.
                        </li>
                        <li>
                            Played for the school cricket team at the Cluster level in 2010.
                        </li>
                        <li>
                            Editor and content manager of a <a style={{color: 'blue'}} href="https://www.facebook.com/siageonf" target="_blank">Facebook Page</a> (1.6K followers) and a <a style={{color: '#ff0000'}} href="https://www.youtube.com/channel/UCiMO35Kpjv9gS7rtUuMpSfQ" target="_blank">Youtube Channel</a> (1.2K subscribers).
                        </li>
                        <li>
                            Edited short films during college and presented them as part of the inter-college fests.
                        </li>
                    </ul>

    return(
        <div className={`details ${section}`}>
         {(section === 'work' && 
                <>
                <Experience org='Tcs' link="https://www.tcs.com/"/>
                <Experience org='Expeditech' link="https://www.expeditech.net/"/>
                <Experience org='Animaker' link="https://www.animaker.com"/>
                <Experience org='Zoho' link="https://www.manageengine.com/"/>
                <Experience org='MuSigma' link="https://www.mu-sigma.com/"/>
                </>
            )}
        {(section === 'testimonial' && 
                <>
                <Testimonial/>
                </>
            )}
        {(section === 'education' && 
                <>
                <Education colg='Sastra'/>
                </>
            )}
        {(section === 'skills' && 
                <div className="skills">
                    {skills}   
                </div>
            )}
        {(section === 'achievements' && 
                <div className="achievements">
                    {achievements}   
                </div>
            )}
        </div>
    )
}

export default Details;