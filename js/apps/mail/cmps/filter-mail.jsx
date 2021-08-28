export class FilterMail extends React.Component {
    state = {
        text: '',
        isRead: null,
    }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value })
        this.props.onFilterUpdate(target.name, target.value)
    }

    render() {
        const { text } = this.state
        return (
            <div className="filter-mail flex">
                <input type="search"  name="text" onChange={this.handleChange} value={text} />
                <select name="isRead" onChange={this.handleChange}>
                    <option value="null">All</option>
                    <option value="true">Read</option>
                    <option value="false">Unread</option>
                </select>
            </div>
        )
    }
}