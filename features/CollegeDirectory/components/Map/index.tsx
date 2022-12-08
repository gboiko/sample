import type { CollegeListProps } from "@types";

import Placeholder from "./Placeholder";
import GoogleMap from "./GoogleMap";

interface MapProps {
  list?: CollegeListProps[];
  isLoading: boolean;
}

function Map({ list, isLoading }: MapProps) {
  if (isLoading || !list) return <Placeholder noResults={false} />;
  if (!list.length) return <Placeholder noResults={true} />;


  return <GoogleMap list={list} />;
}

export default Map;
