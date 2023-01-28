import React from "react";

interface SearchFormProps {
    search: Function;
}

export const SearchForm = ({ search }: SearchFormProps) => {
    const [searchInput, setSearchInput] = React.useState<string>("");

    return (
        <form onSubmit={(e) => search(e, searchInput)}>
                 <div className="flex-input">
                    <div>
                        <input type="text" placeholder="search an author" onChange={e => setSearchInput(e.target.value)}/>
                    </div>
                </div>
                <div className="controls">
                    <button type="submit">Search</button>
                </div>
        </form>
    );

    const getSearchInput = () => searchInput;
}