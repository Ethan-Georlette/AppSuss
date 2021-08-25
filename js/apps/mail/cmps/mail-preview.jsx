
export function MailPreview({ mail }) {
    return (
        <div className="mail-preview flex space-between center">
            <div className="select-box"></div>
            <i className="fas fa-star"></i>
            <h5>{mail.from ? mail.from : mail.to}</h5>
            <h5>{mail.subject}</h5>
            <p>{mail.body.slice(20)}...</p>
            <p>{mail.sentAt.date}</p>
        </div>
    );
}