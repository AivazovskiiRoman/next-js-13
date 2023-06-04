import Repo from '@/app/components/Repo';
import RepoDirs from '@/app/components/RepoDirs';
import { Repository } from '@/app/types/Repository';
import Link from 'next/link';
import { Suspense } from 'react';
import { FaArrowLeft } from 'react-icons/fa';

interface IProps {
  params: Repository;
}

const RepoPage = ({ params: { name } }: IProps) => {
  return (
    <>
      <Link href="/code/repos" className="text-gray-500 hover:text-gray-300">
        <FaArrowLeft className="inline-block mr-1 mb-0.5" /> Back
      </Link>
      <div className="rounded-lg overflow-hidden shadow-md bg-gray-200 text-gray-700 p-6 mt-5">
        <Suspense fallback={<p>Loading repo...</p>}>
          {/* @ts-expect-error Server Component */}
          <Repo name={name} />
        </Suspense>
        <Suspense fallback={<p>Loading directories...</p>}>
          {/* @ts-expect-error Server Component */}
          <RepoDirs name={name} />
        </Suspense>
      </div>
    </>
  );
};

export default RepoPage;
