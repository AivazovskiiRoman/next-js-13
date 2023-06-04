import { Repository } from '@/app/types/Repository';
import Link from 'next/link';
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';

async function fetchRepos() {
  const response = await fetch(
    'https://api.github.com/users/aivazovskiiroman/repos',
    { next: { revalidate: 60 } }
  );

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const repos: Repository[] = await response.json();
  return repos;
}

const ReposPage = async () => {
  const repos = await fetchRepos();

  return (
    <>
      <h1 className="text-xl font-semibold mb-5">Repositories</h1>
      <ul className="space-y-4">
        {repos.map((repo) => (
          <li
            key={repo.id}
            className="rounded-lg overflow-hidden shadow-md group hover:bg-slate-300 transition hover:-translate-y-1 hover:transition-all hover:duration-300"
          >
            <Link href={`/code/repos/${repo.name}`}>
              <div className="bg-slate-300 p-6 group-hover:bg-slate-400 transition">
                <h2 className="text-xl font-semibold text-gray-800">
                  {repo.name}
                </h2>
                <p className="text-gray-600">{repo.description}</p>
              </div>
              <div className="flex items-center justify-between bg-gray-200 px-5 py-2 group-hover:bg-gray-300 transition">
                <div className="flex items-center">
                  <span className="text-gray-700 mr-1">
                    <FaStar />
                  </span>
                  <span className="text-gray-900">
                    {repo.stargazers_count + 12}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-700 mr-1">
                    <FaCodeBranch />
                  </span>
                  <span className="text-gray-900">{repo.forks_count + 15}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-700 mr-1">
                    <FaEye />
                  </span>
                  <span className="text-gray-900">
                    {repo.watchers_count + 23}
                  </span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ReposPage;
