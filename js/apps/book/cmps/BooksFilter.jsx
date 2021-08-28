export class BooksFilter extends React.Component {
    state = {
        filterBy: {
            name: '',
            minPrice: 0,
            maxPrice: Infinity,
            author: '',
            category: '',
        },
        isFilter:false,
    };

    handleChange = (ev) => {
        const field = ev.target.name;
        const value =
            ev.target.type === 'number' ? +ev.target.value : ev.target.value;
        this.setState({ filterBy: { ...this.state.filterBy, [field]: value } });
    };

    onFilter = (ev) => {
        ev.preventDefault();
        this.props.onSetFilter(this.state.filterBy)
        this.onFilterMenu();
    };
    
    onFilterMenu=()=>{
        this.setState({isFilter:!this.state.isFilter})
    }

    render() {
        const { name, author, maxPrice, minPrice, category } = this.state.filterBy;
        const {isFilter} = this.state;
        return (
            <div className="filters">
                {isFilter &&(
                <form className='books-filter' onSubmit={this.onFilter}>
                    <label className="name" htmlFor='by-name'>Name:</label>
                    <input
                        name='name'
                        id='by-name'
                        type='text'
                        placeholder='Books Name'
                        value={name}
                        onChange={this.handleChange}
                    />
                    <label className="author" htmlFor='by-author'>Author:</label>
                    <input
                        name='author'
                        id='by-author'
                        type='text'
                        placeholder='Author`s Name'
                        value={author}
                        onChange={this.handleChange}
                    />
                    <label className="minPrice" htmlFor='min-price'>Min Price:</label>
                    <input
                        name='minPrice'
                        id='min-price'
                        type='number'
                        placeholder='Min price'
                        value={minPrice}
                        onChange={this.handleChange}
                    />
                    <label className="maxPrice" htmlFor='max-price'>Max Price:</label>
                    <input
                        name='maxPrice'
                        id='max-price'
                        type='number'
                        placeholder='Max Price'
                        value={maxPrice}
                        onChange={this.handleChange}
                    />
                    <label className="books-categories" htmlFor='by-category'>Category:</label>
                    <input
                        list="by-category"
                        type="search"
                        name="category"
                        className="by-category"
                        placeholder="Category"
                        value={category}
                        onChange={this.handleChange} />
                    <datalist id="by-category">
                        <option value='Computers'>Computers</option>
                        <option value='Hack'>Hack</option>
                    </datalist>
                    <div className="buttons flex space-between">
                    <button type="button" onClick={this.onFilterMenu}>Close</button>
                    <button>Filter</button>
                    </div>

                </form>
                )}
                {!isFilter && (
                <div className="fas fa-filter filter-menu" onClick={this.onFilterMenu}>
                filter By
                </div>
                    )}
            </div>
        );
    }
}
