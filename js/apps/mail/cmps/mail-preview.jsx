const { Link } = ReactRouterDOM;
export function MailPreview({ mail, onSetStarred, onDeleteMail, onDraftClick }) {
    return (
        <Link to={`/mail/${mail.id}`} onClick={(ev) => { if (!mail.isDraft) return; ev.preventDefault(); onDraftClick(mail) }} className={mail.isRead ? "mail-preview flex space-between center" : "mail-preview flex space-between center mail-unread"}>
            <div className="mail-select flex center">
                <i className={mail.isRead ? "fas fa-envelope-open" : "fas fa-envelope"}></i>
                <i className={mail.isStarred ? "fas fa-star starred" : "fas fa-star none"}
                    onClick={(ev) => { ev.preventDefault(); onSetStarred(mail.id) }}></i>
            </div>
            <span className="adress">{mail.from ? mail.from.name : mail.to}</span>
            <span className="subject">{mail.subject}</span>
            <span>{mail.body.slice(0, 20)}...</span>
            <span className="date">{mail.sentAt.date}</span>
            <i className="fas fa-trash" onClick={(ev) => { ev.preventDefault(); onDeleteMail(mail.id) }}></i>
        </Link>
    );
}