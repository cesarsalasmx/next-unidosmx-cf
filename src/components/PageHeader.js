import React from "react";
import Link from "next/link";
const PageHeader = (props) => {
  return (
    <div>
      <section className="page-header">
        <div className="container">
          <h2>{props.pageHeading}</h2>
          <ul className="list-unstyled thm-breadcrumb">
            <li>
              <Link href="/"><a>Home</a></Link>
            </li>
            <li>
              <span>{props.pageHeading}</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default PageHeader;
