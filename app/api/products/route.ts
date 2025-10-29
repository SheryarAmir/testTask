export async function GET() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 89.99,
      category: "Electronics",
      image: "/wireless-headphones.png",
    },
    {
      id: 2,
      name: "USB-C Cable",
      price: 12.99,
      category: "Electronics",
      image: "/usb-c-cable.jpg",
    },
    {
      id: 3,
      name: "Phone Stand",
      price: 24.99,
      category: "Accessories",
      image: "/phone-stand.jpg",
    },
    {
      id: 4,
      name: "Laptop Bag",
      price: 49.99,
      category: "Accessories",
      image: "/laptop-bag.jpg",
    },
    {
      id: 5,
      name: "Cotton T-Shirt",
      price: 29.99,
      category: "Clothing",
      image: "/cotton-t-shirt.jpg",
    },
    {
      id: 6,
      name: "Denim Jeans",
      price: 59.99,
      category: "Clothing",
      image: "/denim-jeans.png",
    },
    {
      id: 7,
      name: "Running Shoes",
      price: 119.99,
      category: "Footwear",
      image: "/running-shoes.jpg",
    },
    {
      id: 8,
      name: "Casual Sneakers",
      price: 79.99,
      category: "Footwear",
      image: "/casual-sneakers.png",
    },
    {
      id: 9,
      name: "Desk Lamp",
      price: 34.99,
      category: "Home",
      image: "/modern-desk-lamp.png",
    },
    {
      id: 10,
      name: "Coffee Maker",
      price: 99.99,
      category: "Home",
      image: "/modern-coffee-maker.png",
    },
  ];

  return Response.json(products);
}
