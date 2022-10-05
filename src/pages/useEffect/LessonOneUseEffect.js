import React, { useEffect, useState } from "react";

//* Initial Value & white screen issue (useState)

function LessonOwoUseEffect() {
  const [post, setPost] = useState({});
  const [rNumber, setRNumber] = useState(1);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${rNumber}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [rNumber]);
  // console.log(post);
  const handleNewPost = () => {
    const randomNumber = Math.ceil(Math.random() * 10);
    setRNumber(randomNumber);
  };
  return (
    <div className="flex flex-col items-center">
      <div className="p-2 rounded-md shadow-2xl w-full max-w-5xl mx-5 bg-white">
        <div className=" bg-gradient-to-tr to-purple-100 from-cyan-100 rounded-sm p-8">
          <h1 className="text-2xl mb-5 font-bold text-gray-800">
            {post.title}
          </h1>
          <p className="text-gray-700">{post.body}</p>
        </div>
      </div>
      <div className="mt-10">
        <button
          onClick={handleNewPost}
          className="px-3 py-2 bg-gradient-to-tr to-purple-100 from-cyan-100 rounded-md border-4 border-white"
        >
          New post
        </button>
      </div>
    </div>
  );
}

export default LessonOwoUseEffect;
