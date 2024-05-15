// pages/products/[category].js
import styles from '../../styles/ProductCategory.module.scss'; // Import SCSS module
import { useRouter } from 'next/router';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';

export default function ProductCategory({ products }) {
  const router = useRouter();
  const { category } = router.query;

  return (
    <div>
      <h1>{category}</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={200}
              height={200}
            />
            <p>{product.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const category = params.category;
  const filePath = path.join(process.cwd(), `./public/data/${category}.json`);
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const products = JSON.parse(jsonData);
  return {
    props: {
      products,
    },
  };
}






