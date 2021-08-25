export class Compose extends React.Component {
    state = {
        mail: {
            subject: '',
            body: '',
            to: '',
        }
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
        this.props.onSendMail(this.state.mail)
    }

    render() {
        const { subject,body,to } = this.state.mail
        return (
            <form onSubmit={this.onSendMail}>
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