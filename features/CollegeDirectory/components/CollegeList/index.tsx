import { CollegeListProps, RequestMetadataProps } from "@types";
import List from "./List";
import Pagination from "./Pagination";
import Placeholder from "./Placeholder";

interface CollegeListComponentProps {
  list?: CollegeListProps[];
  metadata?: RequestMetadataProps;
  isLoading: boolean;
  paginateTo: (page: number) => void;
}

function CollegeList({
  metadata,
  list,
  isLoading,
  paginateTo,
}: CollegeListComponentProps) {
  if (isLoading || !metadata || !list || !list.length) return <Placeholder />;

  return (
    <>
      <List list={list} />
      {metadata.total > list.length && (
        <Pagination metadata={metadata} paginateTo={paginateTo} />
      )}
    </>
  );
}

export default CollegeList;
