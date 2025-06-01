import React from "react";

const Education = () => {
  return (
    <>
      <div className="w-1/2 max-sm:w-full max-w-lg mx-auto p-4 space-y-2">
        <section className="bg-gray-100 p-3 rounded-lg shadow-lg max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4">Education</h2>

          <div className="space-y-4">
            <div className="bg-white p-2 rounded-lg shadow-md hover:bg-slate-400">
              <h3 className="text-md font-semibold">
                Master of Computer Application(M.C.A)
              </h3>
              <p className="text-gray-600">
                VNSGU University, Gujarat, 2014 - 2017
              </p>
            </div>

            <div className="bg-white p-2 rounded-lg shadow-md hover:bg-slate-400">
              <h3 className="text-md font-semibold">
                Bachelor of Computer Application(B.C.A)
              </h3>
              <p className="text-gray-600">
                VNSGU University, Gujarat, 2011 - 2014
              </p>
            </div>
            <div className="bg-white p-2 rounded-lg shadow-md hover:bg-slate-400">
              <h3 className="text-md font-semibold">GSHEB(H.S.C)</h3>
              <p className="text-gray-600">Gandhinagar, Gujarat, 2011</p>
            </div>

            <div className="bg-white p-2 rounded-lg shadow-md hover:bg-slate-400">
              <h3 className="text-md font-semibold">GSEB(S.S.C)</h3>
              <p className="text-gray-600">Gandhinagar, Gujarat, 2009</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Education;
