import React from "react";

const Docs = ({
  params,
}: {
  params: {
    slug: string[];
  };
}) => {
  if (params.slug?.length === 2) {
    return (
      <h1>
        Viewing docs for the feature {params.slug[0]} and the concept{" "}
        {params.slug[1]}
      </h1>
    );
  } else if (params.slug?.length == 1) {
    return <h1>Viewing docs for the feature {params.slug[0]}</h1>;
  }
  return <div>Docs Home Page</div>;
};

export default Docs;
