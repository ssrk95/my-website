import JobDescription from "./JobDescription";

function Experience({org, link}){

    const handleExpClick = e => {
        if (e.target.tagName === 'A') {
            return;
        }
        window.open(link, '_blank')
    }

    return(
        <div className="expCont" onClick={handleExpClick}>
            <div className="fromTo">
            {
             org === 'Expeditech' ? 
                                    <div>
                                        <span>Jan 2024 - Present</span>
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