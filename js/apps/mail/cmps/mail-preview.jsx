
export function MailPreview({ mail, onSetStarred }) {
    return (
        <div className="mail-preview flex space-between center">
            <div className="select-box">
            </div>
            <i className={mail.isStarred ? "fas fa-star starred" : "fas fa-star"}
                onClick={() => onSetStarred(mail.id)}></i>
            <h5>{mail.from ? mail.from : mail.to}</h5>
            <h5>{mail.subject}</h5>
            <p>{mail.body.slice(0,20)}...</p>
            <p>{mail.sentAt.date}</p>
        </div>
    );
}