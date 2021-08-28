import { eventBusService } from "../services/event-bus-service.js";

const { NavLink } = ReactRouterDOM
export class AppHeader extends React.Component {

  menuToggle = ({ target }) => {
    document.body.classList.toggle("menu-open");
  }
  onSendingNote = (noteInfo) => {
    console.log('noteInfo', noteInfo);
  }
  componentDidMount() {
    eventBusService.on('send-note', this.onSendingNote)
  }
  render() {
    return (
      <React.Fragment>
        <div className="screen" onClick={this.menuToggle}></div>
        <section className="app-header flex space-between center">
          <div className="logo flex center">
            <div className="icon-header"></div>
            <h2 className="logo-name">AppSuss</h2>
          </div>
          <i onClick={this.menuToggle} className="btn-menu fas fa-bars"></i>
          <nav className="flex center header-links">
            <NavLink exact to="/" ><i className="fas fa-home"></i></NavLink>
            <NavLink to="/mail" ><i className="fas fa-envelope"></i></NavLink>
            <NavLink to="/keeper" ><i className="fas fa-sticky-note"></i></NavLink>
            <NavLink to="/Books" ><i className="fas fa-book-open"></i></NavLink>
          </nav>
        </section>
      </React.Fragment>
    );
  }
}