import Link from 'next/link';

const HomePage = () => {
  return (
    <>
      <h1>Home Page</h1>
      <ul className="inline">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/about/team">Team</Link>
        </li>
      </ul>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, dolorum
        non impedit, reprehenderit itaque saepe, nesciunt quidem optio
        blanditiis libero repellendus repudiandae amet eligendi quisquam
        consectetur animi a veniam deserunt.
      </p>
    </>
  );
};

export default HomePage;
