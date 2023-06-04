import { NextResponse } from 'next/server';
import { courses } from '../data.json';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');

  console.log(query);

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(query?.toLowerCase() || '')
  );

  return NextResponse.json(filteredCourses);
}
