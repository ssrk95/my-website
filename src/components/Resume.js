import Details from "./Details";

function Resume({section}){

    const ecaTitle = (
        <>
            Achievements & <br/> Extra-Curricular Activities
        </>
    );

    return(
        <div className={`resumeCont ${section}`}>
            <div className="category">
                {section === 'work' ? "Work Experience" : section === 'testimonial' ? 'Testimonial' : section === 'education' ? 'Education' : section === 'skills' ? 'Skills & Expertise' : section === 'achievements' ? ecaTitle : ""}
            </div>
            <Details section={section}/>
        </div>
    )
}

export default Resume;