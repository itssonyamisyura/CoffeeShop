
export const CoffeeFilter = ({term, onUpdateSearch, onFilterSelect, filter, onResetFilters}) => {
    const countries = ['Brazil', 'Kenya', 'Colombia'];

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

                {countries.map((country) => (
                    <button 
                    key={country} 
                    className={`coffee-filter__tag ${filter === country ? "active" : ""}`}
                    onClick={() => onFilterSelect(country)}>{country}
                    </button>
                ))}
                <button className="coffee-filter__tag filter-btn--reset"
                onClick={onResetFilters}>Reset</button>
            </div>
	    </div>
    )
}
