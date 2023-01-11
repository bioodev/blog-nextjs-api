import Link from "next/link"
const fetchPosts = () => {
    return fetch("https://jsonplaceholder.typicode.com/users/1/posts")
        .then(res => res.json())
        .catch(err => console.log(err))
}

export async function ListOfPosts() {
    const posts = await fetchPosts()
    return posts.slice(0, 15).map(post => (
        <Link className="articles" href={`/posts/${post.id}`} key={post.id}>
            <h2>
                {post.title}
            </h2>
            <p>
                {post.body}
            </p>
        </Link>
    ))
}