import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import data from './data.json';
import { Course } from '@/app/types/Course';

const courses = data.courses;

export async function GET(request: Request) {
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

  courses.push(newCourse);

  return NextResponse.json(courses);
}
