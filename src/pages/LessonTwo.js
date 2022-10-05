import React, { useEffect, useState } from "react";

//* Initial Value & white screen issue (useState)

function LessonTwo() {
  return (
    <div className="p-2 rounded-md shadow-2xl w-full max-w-5xl mx-5 bg-white">
      <div className=" bg-gradient-to-tr to-purple-100 from-cyan-100 rounded-sm p-8">
        <h1 className="text-2xl mb-5 font-bold text-gray-800">Name</h1>
        <p className="text-gray-700">title</p>
      </div>
    </div>
  );
}

export default LessonTwo;
