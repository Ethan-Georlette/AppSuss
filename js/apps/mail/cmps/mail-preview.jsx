const { Link } = ReactRouterDOM;
export function MailPreview({ mail, onSetStarred }) {
    return (
        <div className={mail.isRead ? "mail-preview flex space-between center" : "mail-preview flex space-between center mail-unread"}>
            <div className="mail-select flex center">
                <div className="select-box">
                </div>
                <i className={mail.isStarred ? "fas fa-star starred" : "fas fa-star"}
                    onClick={() => onSetStarred(mail.id)}></i>
            </div>
            <Link className="flex space-between center" to={`/mail/${mail.id}`}>
                <p>{mail.from ? mail.from.name : mail.to}</p>
                <p>{mail.subject}</p>
                <p>{mail.body.slice(0, 20)}...</p>
                <p>{mail.sentAt.date}</p>
            </Link>
        </div >
    );
}