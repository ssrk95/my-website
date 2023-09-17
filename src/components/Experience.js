import JobDescription from "./JobDescription";

function Experience({org}){
    return(
        <div className="expCont">
            <div className="fromTo">
            {
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