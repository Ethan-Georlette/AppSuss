
const { NavLink } = ReactRouterDOM
export class AppHeader extends React.Component {

  render() {

    return (

      <section className="app-header">
        <nav>
          <NavLink exact to="/" >Home</NavLink>
          <NavLink exact to="/mail/inbox" >Mail Inbox</NavLink>
          <NavLink to="/mail" >Mail</NavLink>
          <NavLink to="/keeper" >Keeper</NavLink>
          <NavLink to="/Books" >Books</NavLink>
        </nav>
      </section>
    );
  }
}