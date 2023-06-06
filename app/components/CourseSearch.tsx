import { Course } from '../types/Course';
import { useState } from 'react';

interface IProps {
  getSearchResult: Function;
}

const CourseSearch = ({ getSearchResult }: IProps) => {
  const [query, setQuery] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch(`/api/courses/search?query=${query}`);
    const courses: Course[] = await res.json();

    getSearchResult(courses);
  };

  return (
    <div className="flex justify-end mb-5">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search Course..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="py-1 px-4 rounded-l-lg border border-gray-300 border-0 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-500"
        />
        <button
          type="submit"
          className="bg-slate-500 hover:bg-slate-600 py-1 px-5 rounded-r-lg focus:outline-none border-none"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default CourseSearch;
