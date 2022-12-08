import cn from "classnames";

function Placeholder({ noResults }: { noResults: boolean }) {
  return (
    <div
      className={cn(
        "w-full h-96 bg-gray-200 flex flex-col justify-center items-center", {
          'animate-pulse': !noResults
        }
      )}
    >
      <img
        src="/map-placeholder.svg"
        alt="Map loading"
        width={200}
        height={200}
      />

      <p className="text-gray-600 text-lg">
        {noResults
          ? "Ooops... Seems like no colleges matching name you provided."
          : "Hang tight, searching for available colleges"}
      </p>
    </div>
  );
}

export default Placeholder;
