import { MailCatagories } from '../cmps/mail-categories.jsx';
import { MailsList } from '../cmps/mails-list.jsx';
import { MailService } from '../services/mail.service.js'
import { Compose } from '../cmps/mail-compose.jsx'
import { FilterMail } from '../cmps/filter-mail.jsx';

export class MailHome extends React.Component {
  state = {
    mails: null,
    user: '',
    category: null,
    isCompose: false,
    filter: {
      text: '',
      isRead: null,
    },
    draftMail:null,
  }

  componentDidMount() {
    this.loadMails();
  }

  loadMails = () => {
    MailService.query(this.state.category, this.state.filter)
      .then(({ mails, user }) => {
        this.setState({ mails, user });
      });
  };

  onSetCategory = (category) => {
    this.setState({ category }, this.loadMails)
  }

  onSetStarred = (mailId, ev) => {
    console.log(ev);
    MailService.setStarred(mailId)
      .then(this.loadMails)
  }

  onDeleteMail = (mailId) => {
    MailService.deleteMail(mailId)
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

  onFilterUpdate = (type, val) => {
    if (type === 'isRead') {
      switch (val) {
        case 'null':
          val = null;
          break;
        case 'true':
          val = true;
          break;
        case 'false':
          val = false;
          break;
      }
    }
    this.setState(prevState => ({ filter: { ...prevState.filter, [type]: val } }), this.loadMails)
  }

  setCompose = () => {
    this.setState({ isCompose: !this.state.isCompose });
  }

  onDraftClick=(mail)=>{
    this.setState({isCompose:true,draftMail:mail})
  }

  render() {
    const { mails, category, isCompose ,draftMail } = this.state
    if (!mails) return <h1>loading...</h1>
    return (
        <div className="mail-home">
        <FilterMail onFilterUpdate={this.onFilterUpdate} />
          <div className="categories">
            <button className="fas fa-plus" onClick={this.setCompose}></button>
            {isCompose &&
            <Compose onSendMail={this.onSendMail} onCloseCompose={this.setCompose} mail={draftMail}/>}
            <MailCatagories currCategory={category} onSetCategory={this.onSetCategory} />
          </div>
          <MailsList mails={mails} onSetStarred={this.onSetStarred} onDeleteMail={this.onDeleteMail}  onDraftClick={this.onDraftClick}  />
        </div>
    )
  }
}
