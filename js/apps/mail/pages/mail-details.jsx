import { MailService } from "../services/mail.service.js";

const { Link } = ReactRouterDOM
export function MailDetails(props) {
    const mail = MailService.getMailById(props.match.params.mailId);
    MailService.setRead(mail.id)
    return (
        <section className="mail-details">
            <div className="details-header">
                <Link to="/mail"><i className="fas fa-envelope"></i></Link>
            </div>
            <h2>{mail.subject}</h2>
            {mail.from ? <h4>{mail.from.name}<small>{`<${mail.from.adress}>`}</small></h4> : (<h4>{mail.to}</h4>)}
            <p>{mail.body}</p>

        </section>
    )
}