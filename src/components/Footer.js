import Phone from "./Phone";
import Email from "./Email";
import FollowMe from "./FollowMe";

function Footer(){
    return(
        <div className="footerCont">
            <Phone phoneNo={'+91-9840974436'}/>
            <Email emailId={'gsriramsgkrishnan@gmail.com'}/>
            <FollowMe/>
        </div>
    )
}

export default Footer;