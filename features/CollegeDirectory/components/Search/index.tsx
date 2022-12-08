import { useState } from "react";
import { useDebounce } from "react-use";
import { MagnifyingGlassIcon, ArrowPathIcon } from "@heroicons/react/20/solid";

interface SearchProps {
  onSearch: (value: string) => void;
  value: string;
}

function Search({ onSearch, value }: SearchProps) {
  const [searchValue, setSearchValue] = useState(value);
  const [typing, setTyping] = useState(false);

  useDebounce(
    () => {
      setTyping(false);
      onSearch(searchValue);
    },
    1000,
    [searchValue]
  );

  return (
    <div className="relative flex h-16 flex-1 items-center justify-between text-gray-400 focus-within:text-gray-600 lg:border-b lg:border-gray-400 lg:border-opacity-25">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        {typing ? (
          <ArrowPathIcon className=" animate-spin h-5 w-5" aria-hidden="true" />
        ) : (
          <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
        )}
      </div>
      <input
        id="search"
        className="block w-full rounded-md border border-transparent bg-white py-2 pl-10 pr-3 leading-5 text-gray-900 placeholder-gray-500 focus:border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:text-sm"
        placeholder="Type collage name to search"
        type="search"
        name="search"
        value={searchValue}
        onChange={({ currentTarget }) => {
          setTyping(true);
          setSearchValue(currentTarget.value);
        }}
      />
    </div>
  );
}

export default Search;
