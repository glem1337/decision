import React, { useCallback, useEffect, useRef, useState } from 'react';
import Icon from '../../Icon/Icon';
import Placeholder from './Placeholder/Placeholder';

const Search = () => {
    const [query, setQuery] = useState('');
    const inputEl = useRef(null);

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Search query: ${query}`);
    };

    const handleKeyPress = useCallback((e) => {
        switch (e.code) {
            case 'Slash':
                inputEl.current.focus();
                break;
            case 'Escape':
                inputEl.current.blur();
                break;
            default:
                return;
        }
    }, []);

    useEffect(() => {
        window.addEventListener('keyup', handleKeyPress);

        return () => {
            window.removeEventListener('keyup', handleKeyPress);
        };
    }, [handleKeyPress]);

    return (
        <form className="search relative bg-gray-100 text-sm" onSubmit={handleSubmit}>
            {!query && <Placeholder />}
            <input
                className="w-100 z-10 h-11 pl-4 pr-12 relative bg-transparent rounded-lg border border-gray-600 focus:outline-none focus:shadow-outline"
                autoComplete="off"
                type="text"
                name="query"
                value={query}
                onChange={handleChange}
                ref={inputEl}
            />
            <button
                className="focus:outline-none opacity-25 hover:opacity-100 hover:bg-gray-600 rounded-r-lg absolute z-10 right-0 h-full w-11 inline-flex justify-center items-center"
                type="submit"
            >
                <Icon name="search-icon" width="16" height="16" />
            </button>
        </form>
    );
};

export default Search;
