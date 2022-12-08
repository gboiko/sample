import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import { RequestMetadataProps } from "@types";

interface PaginationProps {
  metadata: RequestMetadataProps;
  paginateTo: (page: number) => void;
}

function getToCount({
  metadata: { page, per_page, total },
}: {
  metadata: RequestMetadataProps;
}) {
  const to = page * per_page + per_page;
  if (to > total) {
    return total;
  }
  return to;
}

function getFromCount({
  metadata: { page, per_page },
}: {
  metadata: RequestMetadataProps;
}) {
  return page * per_page + 1;
}

function canNavNext({ metadata }: { metadata: RequestMetadataProps }) {
  return getToCount({ metadata }) < metadata.total;
}

function canNavBack({
  metadata: { page, per_page },
}: {
  metadata: RequestMetadataProps;
}) {
  return page > 0;
}

function Pagination({ metadata, paginateTo }: PaginationProps) {
  const paginateBack = () => {
    paginateTo(metadata.page - 1);
  };

  const paginateNext = () => {
    paginateTo(metadata.page + 1);
  };

  return (
    <nav
      className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
      aria-label="Pagination"
    >
      <div className="hidden sm:block">
        <p className="text-sm text-gray-700">
          Showing{" "}
          <span className="font-medium">{getFromCount({ metadata })}</span> to{" "}
          <span className="font-medium">{getToCount({ metadata })}</span> of{" "}
          <span className="font-medium">{metadata.total}</span> results
        </p>
      </div>
      <div className="flex flex-1 justify-between sm:justify-end">
        <>
          {canNavBack({ metadata }) && (
            <span
              onClick={paginateBack}
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer"
            >
              <ArrowLeftIcon className="h-5 w-5" aria-hidden="true" />
            </span>
          )}

          {canNavNext({ metadata }) && (
            <span
              onClick={paginateNext}
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer"
            >
              <ArrowRightIcon className="h-5 w-5" aria-hidden="true" />
            </span>
          )}
        </>
      </div>
    </nav>
  );
}

export default Pagination;
