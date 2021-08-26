const { Link } = ReactRouterDOM;
export function MailPreview({ mail, onSetStarred, onDeleteMail }) {
    return (
        <Link to={`/mail/${mail.id}`} className={mail.isRead ? "mail-preview flex space-between center" : "mail-preview flex space-between center mail-unread"}>
                <div className="mail-select flex center">   
                    <i className={mail.isRead? "fas fa-envelope-open" : "fas fa-envelope"}></i>
                    <i className={mail.isStarred ? "fas fa-star starred" : "fas fa-star none"}
                        onClick={(ev) => { ev.preventDefault(); onSetStarred(mail.id) }}></i>
                </div>
                <p>{mail.from ? mail.from.name : mail.to}</p>
                <p>{mail.subject}</p>
                <p>{mail.body.slice(0, 20)}...</p>
                <p>{mail.sentAt.date}</p>
                <i className="fas fa-trash" onClick={(ev) => { ev.preventDefault(); onDeleteMail(mail.id) }}></i>
        </Link>
    );
}