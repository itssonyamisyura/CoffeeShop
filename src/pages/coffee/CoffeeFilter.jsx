export const CoffeeFilter = ({term, onUpdateSearch, onFilterSelect}) => {

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
                <button className="coffee-filter__tag"
                onClick={() => onFilterSelect('Brazil')} >Brazil</button>
                <button className="coffee-filter__tag"
                onClick={() => onFilterSelect('Kenya')}>Kenya</button>
                <button className="coffee-filter__tag"
                onClick={() => onFilterSelect('Columbia')}>Columbia</button>
            </div>
	    </div>
    )
}
