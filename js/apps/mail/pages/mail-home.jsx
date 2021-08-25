import { MailsList } from '../cmps/mails-list.jsx';
import { MailService } from '../services/mail.service.js'
export class MailHome extends React.Component {
  state = {
    mails: null,
    user: '',
  }

  componentDidMount() {
    this.loadMails();
  }

  loadMails = () => {
    MailService.query()
      .then((mails) => {
        this.setState({ mails: mails.mails, user: mails.user });
      });
  };



  render() {
    const { mails, user } = this.state
    if (!mails) return <h1>loading...</h1>
    return (
      <main className="mail-home">
        <h1>Welcome {user.fullName}</h1>
        <MailsList mails={mails}/>
      </main>
    )
  }
}