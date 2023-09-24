import MyPhoto from "./MyPhoto";
import photoSrc from '../images/myPhoto.png'
import Greeting from "./Greeting";
import SelfIntro from "./SelfIntro";
import Sections from "./Sections";
import Resume from "./Resume";
import Projects from "./Projects";
import ContactForm from "./ContactForm";

function Content({content, switchContent}){

    const phoneNo = '+91-9840974436';
    const emailId = 'gsriramsgkrishnan@gmail.com';

    return(
        <div className={`contentCont ${content}`}>
            {(content === 'intro' && 
                <>
                <div className="lhs">
                    <MyPhoto photoSrc={photoSrc}/>
                </div>
                <div className="rhs">
                    <Greeting/>
                    <SelfIntro/>
                    <Sections switchContent={switchContent}/>
                </div>
                </>
            )}
            {(content === 'resume' && 
                <>
                <div className="header">Resume</div>
                <Resume section='work'/>
                <Resume section='education'/>
                <Resume section='skills'/>
                <Resume section='achievements'/>
                </>
            )}
            {(content === 'projects' && 
                <>
                <div className="header">Personal Projects</div>
                <Projects id='mpw'/>
                <Projects id='cmv'/>
                </>
            )}
            {(content === 'contact' && 
                <div className="contactCont">
                    <div className="lhs">
                        <div className="header">Contact</div>
                        <div className="sub-header">Looking forward to hearing from you</div>
                        <div className="phoneDiv">
                            <div className="label">Phone</div>
                            <div className="val">{phoneNo}</div>
                        </div>
                        <div className="emailDiv">
                            <div className="label">Email</div>
                            <div className="val">{emailId}</div>
                        </div>
                    </div>
                    <div className="rhs">
                        <ContactForm/>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Content;