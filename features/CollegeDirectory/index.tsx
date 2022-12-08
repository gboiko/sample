import cn from "classnames";

import ContentWrapper from "@common/ContentWrapper";

import Search from "./components/Search";
import CollegeList from "./components/CollegeList";
import Map from "./components/Map";
import Hero from "./components/Hero";
import useCollegeDirectory from "./useCollegeDirectory";

function CollegeDirectory() {
  const {
    searchValue,
    setSearchValue,
    isDataLoading,
    isWaitingUserInput,
    data,
    paginateTo,
  } = useCollegeDirectory();

  return (
    <div className="min-h-full">
      <div
        className={cn("bg-emerald-600", {
          "h-screen flex justify-center items-center": isWaitingUserInput,
          "pb-32": !isWaitingUserInput,
        })}
      >
        <ContentWrapper className="flex-1">
          <>
            {isWaitingUserInput && <Hero />}

            <Search value={searchValue} onSearch={setSearchValue} />
          </>
        </ContentWrapper>
      </div>

      {!isWaitingUserInput && (
        <ContentWrapper className="-mt-28">
          <h1 className="text-3xl font-bold tracking-tight text-gray-100">
            College search directory
          </h1>

          <div className="mx-auto mt-8 grid grid-cols-1 gap-6 lg:grid-flow-col-dense md:grid-cols-3">
            <section className="lg:col-span-2 lg:col-start-1">
              <div className="bg-white shadow sm:rounded-lg overflow-hidden">
                <Map list={data?.results} isLoading={isDataLoading} />
              </div>
            </section>

            <section className="lg:col-span-1 lg:col-start-3">
              <div className="overflow-hidden rounded-md bg-white shadow">
                <CollegeList
                  isLoading={isDataLoading}
                  metadata={data?.metadata}
                  list={data?.results}
                  paginateTo={paginateTo}
                />
              </div>
            </section>
          </div>
        </ContentWrapper>
      )}
    </div>
  );
}

export default CollegeDirectory;
