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

/**
 * This will generate length number of random strings
 * @param length length of the returned string
 */
const randomString = (length = 3) => {
  const charset = "abcdefghijklmnopqrstuvwxyz"; //from where to create
  let i = 0,
    random = "";
  while (i++ < length) random += charset.charAt(Math.random() * charset.length);
  return random;
};

/**
 * This will fetch perUser amount of users from Github API
 * @param callback
 * @param perPage
 */
const fetchUsers = (callback: Function, perPage = 10) => {
  fetch(
    `https://api.github.com/search/users?q=${randomString()}&per_page=${perPage}`
  )
    .then((response) => response.json())
    .then((data: Result) => callback(data?.items));
};

export default fetchUsers;
export { User };
