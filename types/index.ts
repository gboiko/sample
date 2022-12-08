export interface CollegeListProps {
  id: number;
  "latest.student.size"?: string;
  "location.lat": number;
  "location.lon": number;
  "school.city": string;
  "school.name": string;
  "school.state": string;
  "school.zip": string;
}

export interface RequestMetadataProps {
  page: number;
  per_page: number;
  total: number;
}

export interface CollegeSearchRequestProps {
  metadata?: RequestMetadataProps;
  results?: CollegeListProps[];
  error?: string;
}