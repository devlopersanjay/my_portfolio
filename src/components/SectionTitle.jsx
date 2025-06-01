import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <>
      <h2 className="text-2xl md:text-4xl font-bold mb-5 text-white text-center">
        {title}
      </h2>
    </>
  );
};

export default SectionTitle;
