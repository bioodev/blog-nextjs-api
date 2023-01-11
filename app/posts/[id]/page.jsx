import { PostDetail } from "./PostDetail";

export default function PostsPage({ params }) {
  const { id } = params;

  return (
    <>
      <PostDetail id={id} />
    </>
  );
}
