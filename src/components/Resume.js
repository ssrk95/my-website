import Details from "./Details";

function Resume({section}){
    return(
        <div className={`resumeCont ${section}`}>
            <div className="category">
                {section === 'work' ? "Work Experience" : section === 'education' ? 'Education' : section === 'skills' ? 'Skills & Expertise' : ""}
            </div>
            <Details section={section}/>
        </div>
    )
}

export default Resume;