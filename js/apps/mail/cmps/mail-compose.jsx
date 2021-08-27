import { MailService } from "../services/mail.service.js";

export class Compose extends React.Component {
    state = {
        mail: {
            subject: '',
            body: '',
            to: '',
        }
    }
    saveAsDraftInteval
    draftId = null;

    componentDidMount() {
        const { mail } = this.props
        if (mail) {
            this.setState({
                mail: {
                    subject: mail.subject,
                    body: mail.body,
                    to: mail.to
                }
            })
            this.draftId = mail.id;
        }
        this.saveAsDraftInteval = setInterval(this.saveMailAsDraft, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.saveAsDraftInteval)
        console.log('clear');
    }

    saveMailAsDraft = () => {
        console.log('saving');
        MailService.addAsDraft(this.state.mail, this.draftId)
            .then(id => this.draftId = id);
    }

    handleChange = ({ target }) => {
        let input = target.value;
        let key = target.name;
        this.setState((prevState) => ({
            mail: { ...prevState.mail, [key]: input }
        }));
    };

    onSendMail = (ev) => {
        ev.preventDefault();
        this.props.onSendMail(this.state.mail);
        MailService.deleteMail(this.draftId);
    }

    render() {
        const { subject, body, to } = this.state.mail
        return (
            <form className="mail-compose" onSubmit={this.onSendMail}>
                <div className="mail-header flex space-between center">
                    <h5>New Message</h5>
                    <button type="button" onClick={this.props.onCloseCompose}>X</button>
                </div>
                <input type="text"
                    name="to"
                    onChange={this.handleChange}
                    value={to} placeholder="To" />
                <input type="text"
                    name="subject"
                    onChange={this.handleChange}
                    value={subject} placeholder="Subject" />
                <textarea
                    name="body"
                    placeholder="Write your message..."
                    value={body}
                    onChange={this.handleChange}>
                </textarea>
                <button>Send</button>
            </form>
        );
    }
}