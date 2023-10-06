import Phone from "./Phone";
import Email from "./Email";
import FollowMe from "./FollowMe";

function Footer(){
    return(
        <div className="footerCont">
            <Phone phoneNo={'+91-9080934958'}/>
            <Email emailId={'gsriramsgkrishnan@gmail.com'}/>
            <FollowMe/>
        </div>
    )
}

export default Footer;