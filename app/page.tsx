'use client';

import React from 'react';
import { useEffect, useState } from 'react';
import { Course } from './types/Course';
import LoadingPage from './loading';
import Courses from './components/Courses';
import CourseSearch from './components/CourseSearch';

const HomePage = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch('/api/courses');
      const courses: Course[] = await res.json();
      setCourses(courses);
      setLoading(false);
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <h1 className="text-xl font-semibold mb-5">Courses</h1>
      <CourseSearch
        getSearchResult={(results: Course[]) => setCourses(results)}
      />
      <Courses courses={courses} />
    </>
  );
};

export default HomePage;
