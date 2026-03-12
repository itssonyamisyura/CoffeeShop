
export const CoffeeFilter = ({term, onUpdateSearch, onFilterSelect, filter, onResetFilters}) => {
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
                <button className={`coffee-filter__tag ${filter === "Brazil" ? "active" : ""}`}
                onClick={() => onFilterSelect('Brazil')} >Brazil</button>
                <button className={`coffee-filter__tag ${filter === "Kenya" ? "active" : ""}`}
                onClick={() => onFilterSelect('Kenya')}>Kenya</button>
                <button className={`coffee-filter__tag ${filter === "Colombia" ? "active" : ""}`}
                onClick={() => onFilterSelect('Colombia')}>Colombia</button>
                <button className="coffee-filter__tag filter-btn--reset"
                onClick={onResetFilters}>Reset</button>
            </div>
	    </div>
    )
}
