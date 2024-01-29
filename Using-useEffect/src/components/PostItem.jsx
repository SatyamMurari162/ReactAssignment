function PostItem({ data }) {
  return (
    <div>
      {data.map((item) =>(
        <div key={item.id} id="post-item">
        <h1>ID: {item.id}</h1>
        <p>Title: {item.title}</p>
        <p>Body: {item.body}</p>
      </div>
      ))}
    </div>
  );
}

export default PostItem;
