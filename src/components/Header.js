import Name from "./Name";
import Role from "./Role";

function Header({switchContent, currentPage}){

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
                <Role role='Frontend Developer'/>
            </div>
            <div className="right-end">
                <div className={`home ${currentPage === 'intro' ? 'selected' : ''}`} onClick={showIntro}>Home</div>
                <div className={`resume ${currentPage === 'resume' ? 'selected' : ''}`} onClick={() => switchContent('resume')}>Resume</div>
                <div className={`projects ${currentPage === 'projects' ? 'selected' : ''}`} onClick={() => switchContent('projects')}>Projects</div>
                <div className={`contact ${currentPage === 'contact' ? 'selected' : ''}`} onClick={() => switchContent('contact')}>Contact</div>
            </div>
        </div>
    )
}

export default Header;