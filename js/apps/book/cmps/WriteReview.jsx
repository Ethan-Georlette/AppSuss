export class WriteReview extends React.Component {
    state = {
        review: {
            name: '',
            txt: '',
            date: '',
            rate: null,
        }
    }
    handleChange = ({ target }) => {
        let input = target.value;
        let key = target.name;
        this.setState((prevState) => ({
            ...prevState,
            review: { ...prevState.review, [key]: input }
        }));
    };
    onAddReview = (ev) => {
        ev.preventDefault();
        this.props.onAddReview(this.state.review)
    }

    render() {
        const { name, txt, date, rate } = this.state.review
        return (
            <form onSubmit={this.onAddReview}>
                <label htmlFor="name">Name:</label>
                <input type="text"
                    id="name"
                    name="name"
                    onChange={this.handleChange}
                    value={name} placeholder="Full Name"></input>
                <label htmlFor="name">Read at:</label>
                <input type="date"
                    id="date"
                    name="date"
                    onChange={this.handleChange}
                    value={date}></input>
                <div className="rate">
                <button type="button" onClick={this.handleChange} name="rate" value="1" className={rate >= 1 ? "fas fa-star yellow" : "fas fa-star edit"}></button>
                <button type="button" onClick={this.handleChange} name="rate" value="2" className={rate >= 2 ? "fas fa-star yellow" : "fas fa-star edit"}></button>
                <button type="button" onClick={this.handleChange} name="rate" value="3" className={rate >= 3 ? "fas fa-star yellow" : "fas fa-star edit"}></button>
                <button type="button" onClick={this.handleChange} name="rate" value="4" className={rate >= 4 ? "fas fa-star yellow" : "fas fa-star edit"}></button>
                <button type="button" onClick={this.handleChange} name="rate" value="5" className={rate >= 5 ? "fas fa-star yellow" : "fas fa-star edit"}></button>
                </div>
                <textarea 
                name="txt" 
                rows="4" 
                placeholder="Write your review" 
                value={txt}
                onChange={this.handleChange}>
                    
                </textarea>
                <button>Add Review</button>
            </form>
        );
    }
}