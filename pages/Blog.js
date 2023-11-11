import Navbar from './Navbar';
import styles from '../styles/Home.module.scss';
import Footer from './Footer';


const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'Introduction to Fiber Optic Cables',
      date: 'May 1, 2023',
      author: 'John Doe',
      excerpt: 'Learn about the basics of fiber optic cables and their uses in different industries.',
      image: '/images/fiber-optics-cable.jpg',
      slug: 'introduction-to-fiber-optic-cables'
    },
    {
      id: 2,
      title: 'The Advantages of Fiber Optic Networks',
      date: 'May 5, 2023',
      author: 'Jane Smith',
      excerpt: 'Discover the benefits of using fiber optic networks over traditional copper networks.',
      image: '/images/fiber-optics-network.jpg',
      slug: 'the-advantages-of-fiber-optic-networks'
    },
    // Add more posts as needed
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="mx-auto max-w-4xl p-8">
        <h1 className="text-3xl font-bold mb-4">Blog</h1>
        {posts.map(post => (
          <div key={post.id} className={styles.post}>
            <img src={post.image} alt={post.title} className={styles.img} height={500} />
            <h2 className={styles.title}>{post.title}</h2>
            <p className={styles.author}>{post.date} | By {post.author}</p>
            <p className={styles.content}>{post.excerpt}</p>
            <a href={`/blog/${post.slug}`} className="text-blue-500 hover:underline">Read more</a>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
