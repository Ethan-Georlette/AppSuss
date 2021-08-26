
export class Modal extends React.Component {
    state = {
        isOn: false,
        msg: null,
        type: null,
    }
    removeEventBus;
    timeoutId;
    componentDidMount() {
        this.removeEventBus = eventBusService.on('user-msg', (msg) => {
            this.setState({ msg }, () => {
                if (this.timeoutId) clearTimeout(this.timeoutId)
                this.timeoutId = setTimeout(this.onCloseMsg, 2000)
            })
        })
    }
    componentWillUnmount() {
        this.removeEventBus()
    }
    onCloseMsg = () => {
        this.setState({ msg: null })
        clearTimeout(this.timeoutId)
    }
    render() {
        return (
            <h1></h1>
        )
    }
}