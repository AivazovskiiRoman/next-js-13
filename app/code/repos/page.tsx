import Link from 'next/link';

async function fetchRepos() {
  const response = await fetch(
    'https://api.github.com/users/aivazovskiiroman/repos'
  );

  return await response.json();
}

const ReposPage = async () => {
  const repos = await fetchRepos();

  return (
    <>
      <h1>Repositories</h1>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <Link href={`/code/repos/${repo.name}`}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <div>
                <span>
                  <FaStart /> {repo.stargazers_count}
                </span>
                <span>
                  <FaCodeBranch /> {repo.forks_count}
                </span>
                <span>
                  <FaEye /> {repo.watchers_count}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ReposPage;
