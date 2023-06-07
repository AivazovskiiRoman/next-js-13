import { NextResponse } from 'next/server';
import data from '../data.json';

const { courses } = data;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(query?.toLowerCase() ?? '')
  );

  return NextResponse.json(filteredCourses);
}
