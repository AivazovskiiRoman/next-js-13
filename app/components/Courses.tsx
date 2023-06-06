import Link from 'next/link';
import { Course } from '../types/Course';

async function fetchCourses() {
  const response = await fetch('http://localhost:3000/api/courses/', {
    next: { revalidate: 60 },
  });

  const courses: Course[] = await response.json();
  return courses;
}

const Courses = async () => {
  const courses = await fetchCourses();

  return (
    <ul className="space-y-4 pb-5">
      {courses.map((course) => (
        <li key={course.id} className="rounded-lg overflow-hidden shadow-md">
          <div className="bg-slate-300 p-6">
            <h2 className="text-xl font-semibold text-gray-800">
              {course.title}
            </h2>
            <small className="text-gray-800">Level: {course.level}</small>
            <p className="text-gray-600">{course.description}</p>
            <div className="flex justify-end mt-3">
              <Link
                href={course.link}
                target="_blank"
                className="bg-gray-800 text-white font-semibold py-2 px-4 rounded hover:bg-gray-700 transition hover:-translate-y-1 hover:transition-all hover:duration-300"
              >
                Go to course
              </Link>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Courses;
