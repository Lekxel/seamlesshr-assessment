interface User {
  login: string;
  avatar_url: URL;
  type: string;
  id: number;
}
interface Result {
  total_count: number;
  incomplete_results: boolean;
  items: User[];
}

const fetchUsers = (callback: Function, query = "any", perPage = 10) => {
  fetch(`https://api.github.com/search/users?q=${query}&per_page=${perPage}`)
    .then((response) => response.json())
    .then((data: Result) => callback(data?.items));
};

export default fetchUsers;
export { User };
