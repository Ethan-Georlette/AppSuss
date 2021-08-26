export class MailHeader extends React.Component {
    state = {
        search: null,
        filterBy: null,
    }

    render() {
        return (
            <input type="search" name="search" className="search" />
        )
    }
}