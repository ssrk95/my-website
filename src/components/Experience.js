import JobDescription from "./JobDescription";
import ReactGA from 'react-ga4';

function Experience({org, link}){

    const handleExpClick = e => {
        if (e.target.tagName === 'A') {
            return;
        }
        ReactGA.event({
            category: 'Interaction',    
            action: 'Resume Section Click',      
            label: org          
          });
        window.open(link, '_blank')
    }

    return(
        <div className="expCont" onClick={handleExpClick}>
            <div className="fromTo">
            {
             org === 'Tcs' ? 
                                    <div>
                                        <span>Sep 2024 - Present</span>
                                    </div>
                                :
             org === 'Expeditech' ? 
                                    <div>
                                        <span>Jan 2024 - May 2024</span>
                                    </div>
                                :   
             org === 'Animaker' ? 
                                    <div>
                                        <span>May 2021 - Aug 2023</span>
                                    </div>
                                :
             org === 'Zoho' ? 
                                <div>
                                    <span>May 2018 - Mar 2020</span>
                                </div> 
                                :
             org === 'MuSigma' ? 
                                <div>
                                    Aug 2017 - Jan 2018
                                </div>
                                : ""
            }
            </div>
            <JobDescription org={org}/>
        </div>
    )
}

export default Experience;