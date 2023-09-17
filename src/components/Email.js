function Email({emailId}){
    return(
        <div className="emailCont">
            <div className="label">Email</div>
            <div className="value"><a href="mailto:gsriramsgkrishnan@gmail.com">{emailId}</a></div>
        </div>
    )
}

export default Email;