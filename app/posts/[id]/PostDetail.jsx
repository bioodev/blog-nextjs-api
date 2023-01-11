import React from "react";

export async function PostDetail({ id }) {
  const fetchPost = () => {
    return fetch(`https://jsonplaceholder.typicode.com/users/1/posts?id=${id}`)
      .then((res) => res.json())
      .catch((err) => console.log(err));
  };
  const post = await fetchPost();
  const { title, body } = post[0];
  console.log(id);
  console.log(post);
  console.log(title);
  return (
    <div className="container">
      {title && body && (
        <>
          <h1>{title}</h1>
          <div>{body}</div>
        </>
      )}
    </div>
  );
}
