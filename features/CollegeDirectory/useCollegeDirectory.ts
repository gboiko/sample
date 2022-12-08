import { useQuery } from "react-query";
import { useCallback, useState } from "react";
import axios from "axios";

import { CollegeSearchRequestProps } from "../../types";

const searchDirectory = (searchValue: string, currentPage: number) => {
  return axios(
    `/api/search?collegeName=${searchValue}&page=${currentPage}`
  ).then(({ data }) => {
    return data;
  });
};

function useCollegeDirectory() {
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const { data, isFetching } = useQuery<CollegeSearchRequestProps>(
    ["uniDirectory", searchValue, currentPage],
    () => searchDirectory(searchValue, currentPage),
    { enabled: Boolean(searchValue), refetchOnWindowFocus: false }
  );

  const paginateTo = useCallback(
    (page: number) => {
      setCurrentPage(page);
    },
    [setCurrentPage]
  );

  const updateSearchValue = useCallback(
    (value: string) => {
      setSearchValue(value);
      setCurrentPage(0);
    },
    [setSearchValue, setCurrentPage]
  );

  return {
    searchValue,
    setSearchValue: updateSearchValue,

    isDataLoading: isFetching,
    isWaitingUserInput: !searchValue,

    data,
    paginateTo,
  };
}

export default useCollegeDirectory;
