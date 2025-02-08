import React, { useState } from "react";
import "../styles/Blog.css";
import FloatingButtons from "./FloatingButtons";
import img7250 from "../assets/images/first-blog.jpeg"; // Import the image

const Blog = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "hello world~",
      content:
        "welcome to my first blog post!\n this photo was taken at camp mabini in bohol, my beloved province.",
      date: "2025-02-08",
      photos: [
        { url: img7250 }, // Use the imported image
      ],
    },
    {
      id: 2,
      title: "running is fun~",
      content:
        "i just recently started running with the help of the C25k app.\n it's been a great way to stay active and improve my health!",
      date: "2025-02-09",
      photos: [{ url: "https://example.com/photo3.jpg" }],
    },
  ]);

  // Sort posts by id in descending order
  const sortedPosts = posts.sort((a, b) => b.id - a.id);

  return (
    <div className="container">
      <FloatingButtons />
      <h1>blog</h1>
      {sortedPosts.map((post) => (
        <div key={post.id} className="blog-post">
          <h3>
            {"•"}
            {post.title}
            {"•"}
          </h3>
          <p className="blog-content">{post.content}</p>
          <div className="photo-wrapper">
            {post.photos &&
              post.photos.map((photo, index) => (
                <img
                  key={index}
                  src={photo.url}
                  alt={`Post ${post.id} photo ${index + 1}`}
                  className="blog-photo"
                />
              ))}
          </div>
          <p>
            <strong>Date:</strong> {post.date}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Blog;