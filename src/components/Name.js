import myPhoto from "../images/myPhoto.png";

function Name({name, showIntro}){
    return(
        <div className="nameCont">
            <div className="circle" onClick={showIntro}>
                <img src={myPhoto} alt="my photo"/>
            </div>
            <div className="nameVal" onClick={showIntro}>{name}</div>
        </div>
    )
}

export default Name;