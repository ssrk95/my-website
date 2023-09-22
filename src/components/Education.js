import sastraLogo from '../images/sastraLogo.png';

function Education({colg}){
    return(
        <div className="eduCont">
            <div className="fromTo">
            {
             colg === 'Sastra' ? 
                                    <div>
                                        <span>2013 - 2017</span>
                                    </div>
                                : ""
            }
            </div>
            <div className="degree">
                <span>Bachelor of Technology | <br/> Computer Science & Engineering | <br/> SASTRA DEEMED UNIVERSITY</span>
            </div>
            <div className="univLogo">
                <img src={sastraLogo} alt="university logo"/>
            </div>
        </div>
    )
}

export default Education;