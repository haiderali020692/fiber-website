import React from 'react';
import Footer from '../Footer'
import Navbar from '../Navbar'
import styles from '../../styles/Blog.module.scss';


const Post = () => {

  const posts = [
    {
      id: 1,
      title: 'Introduction to Fiber Optic Cables',
      date: 'May 1, 2023',
      author: 'John Doe',
      content: 'Learn about the basics of fiber optic cables and their uses in different industries.',
      image: '/images/fiber-optics-cable.jpg'
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="mx-auto max-w-4xl p-8">
        <h1 className="text-3xl font-bold mb-4">Blog</h1>
        {posts.map(post => (
            <div key={post.id} className="bg-gray-100">
            <img src={post.image} alt={post.title} className={styles.img1} height={600} />
            <h2 className={styles.title}>{post.title}</h2>
            <p className={styles.author}>{post.date} | By {post.author}</p>
            <p className={styles.content}>{post.content}</p>
          </div>
          ))}
      </div>
      <Footer />
    </div>
  );
};

export default Post;
