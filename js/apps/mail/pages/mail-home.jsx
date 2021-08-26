import { MailCatagories } from '../cmps/mail-categories.jsx';
import { MailsList } from '../cmps/mails-list.jsx';
import { MailService } from '../services/mail.service.js'
import { Compose } from '../cmps/mail-compose.jsx'

export class MailHome extends React.Component {
  state = {
    mails: null,
    user: '',
    category: null,
    isCompose: false,
  }

  componentDidMount() {
    this.loadMails();
  }

  loadMails = () => {
    MailService.query(this.state.category)
      .then(({ mails, user }) => {
        this.setState({ mails, user });
      });
  };

  onSetCategory = (category) => {
    this.setState({ category }, this.loadMails)
  }

  onSetStarred = (mailId) => {
    MailService.setStarred(mailId)
      .then(this.loadMails)
  }

  onSendMail = (mail) => {
    mail.sentAt = new Date;
    MailService.addMail(mail)
      .then(() => {
        this.setCompose()
        this.loadMails()
      })
  }

  setCompose = () => {
    this.setState({ isCompose: !this.state.isCompose });
  }

  render() {
    const { mails, user, category, isCompose } = this.state
    if (!mails) return <h1>loading...</h1>
    return (
      <React.Fragment>
        {/* <div className="mail-header">
          <h1>Welcome {user.fullName}</h1>
        </div> */}
        <div className="mail-home">
          <div className="categories">
            {!isCompose && <button className="fas fa-plus" onClick={this.setCompose}>Compose</button>}
            {isCompose && <Compose onSendMail={this.onSendMail} onCloseCompose={this.setCompose} />}
            <MailCatagories currCategory={category} onSetCategory={this.onSetCategory} />
          </div>
          <MailsList mails={mails} onSetStarred={this.onSetStarred} />
        </div>
      </React.Fragment>
    )
  }
}
