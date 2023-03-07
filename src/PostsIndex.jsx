export function PostsIndex(props) {
  return (
    <div>
      <h1>All posts</h1>
      {props.posts.map((post) => (
        <div key={post.id}>
          <h2>{post.name}</h2>
          <p>{post.image} </p>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
