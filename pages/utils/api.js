
const productsByCategory = {
    'networking': [
      { id: 1, name: 'networking product 1', imageUrl: '../../public/images/network.jpg' },
      { id: 2, name: 'networking 2', imageUrl: '../../public/images/sec.jpg' }
    ],
    'cctv': [
      { id: 3, name: 'pro 1' },
      { id: 4, name: 'pro 2' }
    ],
    'wall-mount': [
      { id: 5, name: 'p1' },
      { id: 6, name: 'p2' }
    ]
  };
  
  export function getProductsByCategory(category) {
    return productsByCategory[category] || [];
  }
  