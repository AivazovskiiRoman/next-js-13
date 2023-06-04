import Link from 'next/link';

interface IProps {
  name: string;
}

async function fetchRepoContents(name: string) {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch(
    `https://api.github.com/repos/aivazovskiiroman/${name}/contents`,
    { next: { revalidate: 60 } }
  );

  const contents: any = await response.json();
  return contents;
}

const RepoDirs = async ({ name }: IProps) => {
  const contents = await fetchRepoContents(name);
  const dirs =
    contents && contents.filter((content: any) => content.type === 'dir');

  return (
    <>
      <p className="pt-3 font-bold">Directory:</p>
      <ul className="pl-5">
        {dirs.map((dir: any) => (
          <li key={dir.path} className="list-disc">
            <Link
              href={`/code/repos/${name}/${dir.path}`}
              className="text-blue-500 hover:text-blue-700 underline"
            >
              {dir.path}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RepoDirs;
