import Link from "next/link";
import { Fragment } from "react";

const NewsPage = () => {
  return (
    <Fragment>
      <h1>The News Page!!</h1>
      <ul>
        <li>
          <Link href="/news/next-js-course">The Next JS best course!!</Link>
        </li>
        <li>
          <Link href="/news/react-course">React Course!!</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
