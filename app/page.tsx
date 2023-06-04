import Courses from './components/Courses';

const HomePage = () => {
  return (
    <>
      <h1 className="text-xl font-semibold mb-5">Courses</h1>
      {/* @ts-expect-error Server Component */}
      <Courses />
    </>
  );
};

export default HomePage;
