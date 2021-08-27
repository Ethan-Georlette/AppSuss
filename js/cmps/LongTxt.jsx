export class LongText extends React.Component {
    state = {
        isShown: false,
        txt: ''
    }

    componentDidMount() {
        // console.log(this.props.txt);
        this.setState({ txt: this.props.txt })
    }

    onReadMore = () => {
        this.setState({ isShown: !this.state.isShown })
    }

    render() {
        const { txt, isShown } = this.state;
        return (
            <React.Fragment>
                <p>{isShown ? txt : txt.slice(99) + '... '} <br/>
                <span className="long-text" onClick={this.onReadMore}>{isShown ? 'Read Less' : 'Read More'}</span></p>

            </React.Fragment >
        )
    }
}