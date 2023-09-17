import Name from "./Name";
import Role from "./Role";

function Header({switchContent}){

    const showIntro = e => {
        try{
            switchContent('intro');
        }catch(err){
            console.log('error in showIntro method in Header component: ', err);
        }
    }

    return(
        <div className="headerCont">
            <div className="left-end">
                <Name name='Sriram G' showIntro={showIntro}/>
                <Role role='React Developer'/>
            </div>
            <div className="right-end">
                <div className="resume" onClick={() => switchContent('resume')}>Resume</div>
                <div className="projects" onClick={() => switchContent('projects')}>Projects</div>
                <div className="contact" onClick={() => switchContent('contact')}>Contact</div>
            </div>
        </div>
    )
}

export default Header;