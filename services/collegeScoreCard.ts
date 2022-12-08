import axios from "axios";

const COLLEGE_SCORE_CARD_API_KEY = process.env.COLLEGE_SCORE_CARD_API_KEY;
const COLLEGE_SEARCH_API_BASE_PATH = `https://api.data.gov/ed/collegescorecard/v1/schools`;

function getSearchURL(collegeName: string, page: number) {
  return `${COLLEGE_SEARCH_API_BASE_PATH}?api_key=${COLLEGE_SCORE_CARD_API_KEY}
&fields=id,latest.student.size,school.name,school.state,school.zip,school.city,location
&page=${page}
&per_page=5
&sort=latest.student.size:desc
&school.name=${collegeName}`;
}

export default async function (collegeName: string, page: number) {
  return axios(getSearchURL(collegeName, page))
    .then(({ data }) => {
      return {
        code: 200,
        response: data,
      };
    })
    .catch((err) => {
      return {
        code: 500,
        response: {
          error: err.message,
        },
      };
    });
}
