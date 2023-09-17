function Name({name, showIntro}){
    return(
        <div className="nameCont">
            <div className="circle" onClick={showIntro}></div>
            <div className="nameVal" onClick={showIntro}>{name}</div>
        </div>
    )
}

export default Name;