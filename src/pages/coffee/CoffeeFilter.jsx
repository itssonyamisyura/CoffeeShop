export const CoffeeFilter = ({term, onUpdateSearch}) => {

    // const buttonsData = [
    //     {name: 'Columbia', label: ''},
    //     {name: 'Brazil', label: ''},
    //     {name: 'Kenya', label: ''}
    // ]

    return (
        <div className="coffee-filter">
            <div className="coffee-filter__search">
                <span className="coffee-filter__label">Looking for</span>
                <input
                    type="text"
                    className="coffee-filter__input"
                    placeholder="start typing here..."
                    value={term}
                    onChange={(e) => onUpdateSearch(e.target.value)}
                />
            </div>
            <div className="coffee-filter__tags">
                <span className="coffee-filter__label">Or filter</span>
                <button className="coffee-filter__tag">Brazil</button>
                <button className="coffee-filter__tag">Kenya</button>
                <button className="coffee-filter__tag">Columbia</button>
            </div>
	    </div>
    )
}
