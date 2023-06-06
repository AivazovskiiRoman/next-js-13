import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';
import { Repository } from '../types/Repository';

interface IProps {
  name: string;
}

async function fetchRepos(name: string) {
  const response = await fetch(
    `https://api.github.com/repos/aivazovskiiroman/${name}`,
    { next: { revalidate: 60 } }
  );

  const repos: Repository = await response.json();
  return repos;
}

const Repo = async ({ name }: IProps) => {
  const repo: Repository = await fetchRepos(name);

  return (
    <>
      <h2 className="text-xl font-semibold text-gray-800">{repo.name}</h2>

      <div className="flex items-center justify-between bg-gray-200 px-5 py-2 group-hover:bg-gray-300 transition">
        <div className="flex items-center">
          <span className="text-gray-700 mr-1">
            <FaStar />
          </span>
          <span className="text-gray-900">{repo.stargazers_count + 12}</span>
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
          <span className="text-gray-900">{repo.watchers_count + 23}</span>
        </div>
      </div>

      {repo.description && (
        <>
          <p className="pt-3 font-bold">Repo Details:</p>
          <p className="text-gray-900">{repo.description}</p>
        </>
      )}
    </>
  );
};

export default Repo;
