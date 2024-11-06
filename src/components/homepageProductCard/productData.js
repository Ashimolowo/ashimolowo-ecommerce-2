const productData = [
    {
      id: 1,
      name: 'Wireless Earbuds',
      price: 49.99,
      category: 'Electronics',
      imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQOPZANJbxc6HiHvoU-bjb1EBJ1FG1LwARAORIci-MZ5lXZAZVj913Qr_5P_diTJzOQ2YOo_U3QtIPS9huiIhX0BSZIIgHCLYiqUNskTFI2WY3HQlfst6ITPwX0mO0AEPKMs4_gNyd8TgU&usqp=CAc',
      title: 'High-Quality Wireless Earbuds',
      desc: 'Experience superior sound quality with our wireless earbuds, featuring noise-cancellation and long battery life.',
      trendingProductName: 'Noise-Cancelling Earbuds',
      quantity: 150
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 199.99,
      category: 'Wearables',
      imageUrl: 'https://example.com/smart-watch.jpg',
      title: 'Stylish Smart Watch',
      desc: 'Stay connected and track your fitness with this sleek, modern smart watch.',
      trendingProductName: 'Fitness Smart Watch',
      quantity: 85
    },
    {
      id: 3,
      name: 'Gaming Mouse',
      price: 29.99,
      category: 'Accessories',
      imageUrl: 'https://example.com/gaming-mouse.jpg',
      title: 'Precision Gaming Mouse',
      desc: 'Improve your gaming performance with this responsive and ergonomic gaming mouse.',
      trendingProductName: 'Ergonomic Gaming Mouse',
      quantity: 300
    },
    {
      id: 4,
      name: 'Bluetooth Speaker',
      price: 89.99,
      category: 'Audio',
      imageUrl: 'https://example.com/bluetooth-speaker.jpg',
      title: 'Portable Bluetooth Speaker',
      desc: 'Enjoy high-quality sound on the go with this portable Bluetooth speaker.',
      trendingProductName: 'Portable Audio Speaker',
      quantity: 200
    },
    {
      id: 5,
      name: 'Laptop Stand',
      price: 24.99,
      category: 'Office',
      imageUrl: 'https://example.com/laptop-stand.jpg',
      title: 'Adjustable Laptop Stand',
      desc: 'Enhance your workspace with this sturdy and adjustable laptop stand.',
      trendingProductName: 'Ergonomic Laptop Stand',
      quantity: 120
    },
    {
      id: 6,
      name: '4K Monitor',
      price: 349.99,
      category: 'Electronics',
      imageUrl: 'https://example.com/4k-monitor.jpg',
      title: 'Ultra HD 4K Monitor',
      desc: 'Upgrade your viewing experience with a stunning 4K resolution display.',
      trendingProductName: '4K Display Monitor',
      quantity: 60
    },
    {
      id: 7,
      name: 'Wireless Keyboard',
      price: 39.99,
      category: 'Accessories',
      imageUrl: 'https://example.com/wireless-keyboard.jpg',
      title: 'Compact Wireless Keyboard',
      desc: 'Type comfortably from anywhere with this wireless, lightweight keyboard.',
      trendingProductName: 'Portable Wireless Keyboard',
      quantity: 250
    },
    {
      id: 8,
      name: 'Fitness Tracker',
      price: 129.99,
      category: 'Wearables',
      imageUrl: 'https://example.com/fitness-tracker.jpg',
      title: 'Smart Fitness Tracker',
      desc: 'Monitor your activity, heart rate, and more with this advanced fitness tracker.',
      trendingProductName: 'Activity Fitness Tracker',
      quantity: 140
    },
    {
      id: 9,
      name: 'Action Camera',
      price: 249.99,
      category: 'Cameras',
      imageUrl: 'https://example.com/action-camera.jpg',
      title: '4K Action Camera',
      desc: 'Capture your adventures in ultra HD with this durable action camera.',
      trendingProductName: 'Adventure Action Camera',
      quantity: 90
    },
    {
      id: 10,
      name: 'Portable Hard Drive',
      price: 79.99,
      category: 'Storage',
      imageUrl: 'https://example.com/portable-hard-drive.jpg',
      title: 'High-Speed Portable Hard Drive',
      desc: 'Store all your important files with this fast and reliable portable hard drive.',
      trendingProductName: 'Portable Storage Drive',
      quantity: 175
    },
    {
      id: 11,
      name: 'Noise Cancelling Headphones',
      price: 159.99,
      category: 'Audio',
      imageUrl: 'https://example.com/noise-cancelling-headphones.jpg',
      title: 'Over-Ear Noise Cancelling Headphones',
      desc: 'Immerse yourself in music with premium noise-cancelling technology.',
      trendingProductName: 'Over-Ear Headphones',
      quantity: 130
    },
    {
      id: 12,
      name: 'Smart Light Bulb',
      price: 19.99,
      category: 'Smart Home',
      imageUrl: 'https://example.com/smart-light-bulb.jpg',
      title: 'Color Changing Smart Light Bulb',
      desc: 'Control the ambiance of your home with this smart light bulb that changes colors.',
      trendingProductName: 'Color Smart Bulb',
      quantity: 500
    },
    {
      id: 13,
      name: 'VR Headset',
      price: 299.99,
      category: 'Electronics',
      imageUrl: 'https://example.com/vr-headset.jpg',
      title: 'Virtual Reality Headset',
      desc: 'Step into a new world with this immersive virtual reality headset.',
      trendingProductName: 'Immersive VR Headset',
      quantity: 80
    },
    {
      id: 14,
      name: 'Digital Photo Frame',
      price: 99.99,
      category: 'Gadgets',
      imageUrl: 'https://example.com/digital-photo-frame.jpg',
      title: 'Wi-Fi Digital Photo Frame',
      desc: 'Display your favorite moments with this smart digital photo frame.',
      trendingProductName: 'Wi-Fi Photo Frame',
      quantity: 110
    },
    {
      id: 15,
      name: 'Smart Thermostat',
      price: 149.99,
      category: 'Smart Home',
      imageUrl: 'https://example.com/smart-thermostat.jpg',
      title: 'Energy-Saving Smart Thermostat',
      desc: 'Save energy and control your home’s temperature with this smart thermostat.',
      trendingProductName: 'Eco Smart Thermostat',
      quantity: 95
    },
    
  {
    id: 16,
    imageUrl: "https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec9ac175ea8498a67939.jpg",
    title: "Hand Painted Blue Kaushalam Tea Pot in Aluminium",
    desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically sourced.",
    price: 150,
    trendingProductName: "Featured",
    quantity: 1,
  },
  {
    id: 17,
    imageUrl: "https://i.pinimg.com/564x/12/34/56/1234567890abcdef.jpg",
    title: "Vintage Wooden Wall Clock",
    desc: "Elegant and classic vintage wooden wall clock. Adds a rustic charm to your living room.",
    price: 120,
    trendingProductName: "Bestseller",
    quantity: 1,
  },
  {
    id: 18,
    imageUrl: "https://i.pinimg.com/564x/98/76/54/9876543210fedcba.jpg",
    title: "Stylish Leather Backpack",
    desc: "High-quality leather backpack with ample storage. Perfect for daily use or travel.",
    price: 80,
    trendingProductName: "New Arrival",
    quantity: 1,
  },
  {
    id: 19,
    imageUrl: "https://i.pinimg.com/564x/4a/6b/8c/4a6b8c3f3bba9fffe4c87f7dc4a1c95d.jpg",
    title: "Modern Ceramic Vase",
    desc: "Sleek and modern ceramic vase in white. Perfect for minimalist home decor.",
    price: 60,
    trendingProductName: "Trending",
    quantity: 1,
  },
  {
    id: 20,
    imageUrl: "https://i.pinimg.com/564x/34/89/01/34890127dcabef24c6f8c7f8ab4b54ef.jpg",
    title: "Handwoven Cotton Table Runner",
    desc: "Beautiful handwoven cotton table runner with intricate patterns. Adds a cozy feel to dining.",
    price: 40,
    trendingProductName: "Featured",
    quantity: 1,
  },
  {
    id: 21,
    imageUrl: "https://i.pinimg.com/564x/56/78/90/567890abcdef1234.jpg",
    title: "Eco-friendly Bamboo Cutlery Set",
    desc: "Sustainable and reusable bamboo cutlery set. Ideal for picnics and travel.",
    price: 25,
    trendingProductName: "Bestseller",
    quantity: 1,
  },
  {
    id: 22,
    imageUrl: "https://i.pinimg.com/564x/ab/cd/ef/abcdef1234567890.jpg",
    title: "Nordic Style Pendant Light",
    desc: "Minimalist Nordic-style pendant light. Adds a modern touch to any space.",
    price: 75,
    trendingProductName: "Trending",
    quantity: 1,
  },
  {
    id: 23,
    imageUrl: "https://i.pinimg.com/564x/12/34/ab/1234abcd567890ef.jpg",
    title: "Rustic Wooden Serving Tray",
    desc: "Handcrafted wooden serving tray with handles. Perfect for serving drinks and snacks.",
    price: 55,
    trendingProductName: "New Arrival",
    quantity: 1,
  },
  {
    id: 24,
    imageUrl: "https://i.pinimg.com/564x/98/ba/cd/98bacd4321fedc98.jpg",
    title: "Handmade Macrame Wall Hanging",
    desc: "Boho-style macrame wall hanging. Adds texture and warmth to any room.",
    price: 35,
    trendingProductName: "Featured",
    quantity: 1,
  },
  {
    id: 25,
    imageUrl: "https://i.pinimg.com/564x/65/43/21/6543210fedcba123.jpg",
    title: "Elegant Glass Teapot",
    desc: "Borosilicate glass teapot with stainless steel infuser. Perfect for loose-leaf teas.",
    price: 90,
    trendingProductName: "Bestseller",
    quantity: 1,
  },
  {
    id: 26,
    imageUrl: "https://i.pinimg.com/564x/ab/56/78/ab5678123456cdef.jpg",
    title: "Cotton Woven Hammock Chair",
    desc: "Comfortable cotton hammock chair. Ideal for indoor or outdoor lounging.",
    price: 130,
    trendingProductName: "Featured",
    quantity: 1,
  },
  {
    id: 27,
    imageUrl: "https://i.pinimg.com/564x/34/78/12/347812abcdeff123.jpg",
    title: "Vintage Style Leather Journal",
    desc: "Handcrafted leather journal with vintage-style paper. Great for writers and travelers.",
    price: 45,
    trendingProductName: "New Arrival",
    quantity: 1,
  },
  {
    id: 28,
    imageUrl: "https://i.pinimg.com/564x/98/65/43/98654321cba98765.jpg",
    title: "Decorative Moroccan Lantern",
    desc: "Beautiful Moroccan lantern with intricate patterns. Adds warmth and style to any decor.",
    price: 70,
    trendingProductName: "Trending",
    quantity: 1,
  },
  {
    id: 29,
    imageUrl: "https://i.pinimg.com/564x/21/43/65/21436587bcdefa12.jpg",
    title: "Artisan Ceramic Mug Set",
    desc: "Hand-painted ceramic mug set. Ideal for coffee and tea lovers.",
    price: 50,
    trendingProductName: "Bestseller",
    quantity: 1,
  },
  {
    id: 30,
    imageUrl: "https://i.pinimg.com/564x/ab/34/56/ab3456789cde12ab.jpg",
    title: "Handmade Wool Throw Blanket",
    desc: "Cozy handmade wool throw blanket. Perfect for chilly evenings.",
    price: 110,
    trendingProductName: "Featured",
    quantity: 1,
  },
  {
    id: 31,
    imageUrl: "https://i.pinimg.com/564x/cd/78/12/cd7812ab345678de.jpg",
    title: "Decorative Wooden Photo Frame",
    desc: "Rustic wooden photo frame. Perfect for displaying your cherished memories.",
    price: 30,
    trendingProductName: "New Arrival",
    quantity: 1,
  },
  {
    id: 32,
    imageUrl: "https://i.pinimg.com/564x/45/67/89/456789abcdef1234.jpg",
    title: "Portable Bluetooth Speaker",
    desc: "Compact and portable Bluetooth speaker. Great sound quality for its size.",
    price: 85,
    trendingProductName: "Trending",
    quantity: 1,
  },
  {
    id: 33,
    imageUrl: "https://i.pinimg.com/564x/12/34/56/1234567890abcdef.jpg",
    title: "Handmade Terracotta Planter",
    desc: "Unique terracotta planter. Perfect for indoor plants or succulents.",
    price: 25,
    trendingProductName: "Bestseller",
    quantity: 1,
  },
  {
    id: 34,
    imageUrl: "https://i.pinimg.com/564x/ab/78/90/ab7890cdef123456.jpg",
    title: "Stylish Geometric Rug",
    desc: "Modern geometric rug with soft texture. Adds style to any living space.",
    price: 150,
    trendingProductName: "Featured",
    quantity: 1,
  },
  {
    id: 35,
    imageUrl: "https://i.pinimg.com/564x/ef/12/34/ef1234cdef567890.jpg",
    title: "Ceramic Essential Oil Diffuser",
    desc: "Elegant ceramic essential oil diffuser. Perfect for aromatherapy enthusiasts.",
    price: 65,
    trendingProductName: "New Arrival",
    quantity: 1,
  },
  {
    id: 36,
    imageUrl: "https://i.pinimg.com/564x/cd/ab/ef/cdabcdef12345678.jpg",
    title: "Handcrafted Leather Wallet",
    desc: "Durable leather wallet with multiple compartments. Perfect for everyday use.",
    price: 50,
    trendingProductName: "Bestseller",
    quantity: 1,
  },
  {
    id: 37,
    imageUrl: "https://i.pinimg.com/564x/12/34/56/abcdef1234567890.jpg",
    title: "Eco-friendly Cork Yoga Mat",
    desc: "Sustainable cork yoga mat with non-slip surface. Ideal for yoga practitioners.",
    price: 95,
    trendingProductName: "Trending",
    quantity: 1,
  },
  

  ];
export default productData;  