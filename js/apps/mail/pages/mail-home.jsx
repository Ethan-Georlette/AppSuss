import { MailCatagories } from '../cmps/mail-categories.jsx';
import { MailsList } from '../cmps/mails-list.jsx';
import { MailService } from '../services/mail.service.js'
export class MailHome extends React.Component {
  state = {
    mails: null,
    user: '',
    category:null,
  }

  componentDidMount() {
    this.loadMails();
  }

  loadMails = () => {
    MailService.query(this.state.category)
      .then(({mails,user}) => {
        this.setState({ mails,user });
      });
  };

  onSetCategory=(category)=>{
    this.setState({category},this.loadMails)
  }
  onSetStarred=(mailId)=>{
    MailService.setStarred(mailId)
    .then(this.loadMails)
  }


  render() {
    const { mails, user ,category } = this.state
    if (!mails) return <h1>loading...</h1>
    return (
      <div className="mail-home">
        <div className="categories">
          <MailCatagories currCategory={category} onSetCategory={this.onSetCategory} />
        </div>
        <h1>Welcome {user.fullName}</h1>
        <MailsList mails={mails} onSetStarred={this.onSetStarred} />
      </div>
    )
  }
}