
const PLACEHOLDER_SET = Array.from(Array(5).keys());

function Placeholder() {
  
  return (
    <ul role="list" className="divide-y divide-gray-200">
      {PLACEHOLDER_SET.map((_, id) => (
        <li key={id} className="px-6 py-4 flex flex-col gap-2 animate-pulse">
          <div className="h-6 bg-gray-200 w-full rounded-md"></div>
          <div className="h-4 bg-gray-200 w-full rounded-md"></div>
        </li>
      ))}
    </ul>
  );
}

export default Placeholder;
