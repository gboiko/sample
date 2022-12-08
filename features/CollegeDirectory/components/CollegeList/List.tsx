import { MapPinIcon, UserGroupIcon } from "@heroicons/react/20/solid";
import { CollegeListProps } from "@types";

interface ListProps {
  list: CollegeListProps[];
}

function List({ list }: ListProps) {
  return (
    <ul role="list" className="divide-y divide-gray-200">
      {list.map((item, index) => (
        <li key={item.id} className="px-6 py-4">
          <h4 className="text-sm font-bold">({index + 1}) {item["school.name"]}</h4>
          <div className="flex gap-4">
            <div className="text-sm flex w-8/12 gap-2">
              <MapPinIcon className="h-5 w-5" />
              {item["school.city"]}, {item["school.state"]},{" "}
              {item["school.zip"]}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default List;
