import Experience from "./Experience";
import Education from "./Education";

function Details({section}){

    const skills =
                    <ol>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Javascript</li>
                        <li>CSS</li>
                        <li>HTML5</li>
                        <li>HTML Canvas</li>
                        <li>Web API</li>
                        <li>Immutable Js</li>
                        <li>Agile Development Process</li>
                        <li>Atlassian Jira</li>
                        <li>Gitlab</li>
                        <li>Github</li>
                        <li>Visual Studio Code</li>
                        <li>Jenkins (CI/CD)</li>
                    </ol>

    return(
        <div className={`details ${section}`}>
         {(section === 'work' && 
                <>
                <Experience org='Animaker'/>
                <Experience org='Zoho'/>
                <Experience org='MuSigma'/>
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
        </div>
    )
}

export default Details;