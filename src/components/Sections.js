function Sections({switchContent}){
    return(
        <div className="sections">
           <div className="resume btn" onClick={() => switchContent('resume')}>
                <span>Resume</span>
           </div>
           <div className="projects btn" onClick={() => switchContent('projects')}>
                <span>Projects</span>
           </div>
           <div className="contact btn" onClick={() => switchContent('contact')}>
                <span>Contact</span>
           </div>
        </div>
    )
}

export default Sections;