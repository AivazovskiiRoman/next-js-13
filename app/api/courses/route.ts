import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import data from './data.json';
import { Course } from '@/app/types/Course';

export async function GET(request: Request) {
  const courses = data.courses;
  return NextResponse.json(courses);
}

export async function POST(request: Request) {
  const { title, description, level, link } = await request.json();

  const newCourse: Course = {
    id: uuidv4(),
    title,
    description,
    level,
    link,
  };

  const courses = [...data.courses, newCourse];

  return NextResponse.json(courses);
}
