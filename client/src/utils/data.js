import gulabJamun from "../Assets/gulab-jamun.jpeg";
import samosa from "../Assets/samosa.jpeg";
import paneerTikka from "../Assets/paneer-tikka.jpeg";
import chickenPakora from "../Assets/chicken-pakora.jpeg";
import butterChicken from "../Assets/butter-chicken.jpeg";
import palakPaneer from "../Assets//palak-paneer.jpeg";
import chanaMasala from "../Assets/chana-masala.jpeg";
import lambBiryani from "../Assets/lamb-biryani.jpeg";
import Kheer from "../Assets/kheer.jpeg";
import mangoLassi from "../Assets/mango-lassi.jpeg";
import masalachai from "../Assets/masala-chai.jpeg";

export const menuItems = [
  // Appetizers
  {
    id: "app1",
    name: "Samosa",
    description: "Crispy pastry filled with spiced potatoes and peas",
    price: 5.99,
    image: samosa,
    category: "appetizers",
    dietary: ["vegetarian"],
  },
  {
    id: "app2",
    name: "Paneer Tikka",
    description: "Chunks of cottage cheese marinated in spices and grilled",
    price: 8.99,
    image: paneerTikka,
    category: "appetizers",
    dietary: ["vegetarian"],
  },
  {
    id: "app3",
    name: "Chicken Pakora",
    description: "Spiced chicken fritters served with chutney",
    price: 7.99,
    image: chickenPakora,
    category: "appetizers",
    dietary: ["non-vegetarian"],
  },
  // Main Courses
  {
    id: "main1",
    name: "Butter Chicken",
    description: "Tender chicken in a rich, creamy tomato sauce",
    price: 14.99,
    image: butterChicken,
    category: "main-courses",
    dietary: ["non-vegetarian"],
  },
  {
    id: "main2",
    name: "Palak Paneer",
    description: "Cottage cheese cubes in a spinach gravy",
    price: 12.99,
    image: palakPaneer,
    category: "main-courses",
    dietary: ["vegetarian"],
  },
  {
    id: "main3",
    name: "Chana Masala",
    description: "Spiced chickpeas in a tangy tomato sauce",
    price: 11.99,
    image: chanaMasala,
    category: "main-courses",
    dietary: ["vegetarian", "vegan"],
  },
  {
    id: "main4",
    name: "Lamb Biryani",
    description: "Fragrant rice dish with tender lamb and aromatic spices",
    price: 16.99,
    image: lambBiryani,
    category: "main-courses",
    dietary: ["non-vegetarian"],
  },
  // Desserts
  {
    id: "des1",
    name: "Gulab Jamun",
    description: "Sweet milk solids balls soaked in rose-flavored syrup",
    price: 4.99,
    image: gulabJamun,
    category: "desserts",
    dietary: ["vegetarian"],
  },
  {
    id: "des2",
    name: "Kheer",
    description: "Traditional rice pudding with cardamom and nuts",
    price: 5.99,
    image: Kheer,
    category: "desserts",
    dietary: ["vegetarian"],
  },
  // Beverages
  {
    id: "bev1",
    name: "Mango Lassi",
    description: "Refreshing yogurt drink with mango pulp",
    price: 3.99,
    image: mangoLassi,
    category: "beverages",
    dietary: ["vegetarian"],
  },
  {
    id: "bev2",
    name: "Masala Chai",
    description: "Spiced tea with milk",
    price: 2.99,
    image: masalachai,
    category: "beverages",
    dietary: ["vegetarian"],
  },
];

export const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    rating: 5,
    date: "2023-10-15",
    comment:
      "The butter chicken and naan bread were absolutely delicious! Authentic flavors that reminded me of home.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 2,
    name: "Raj Patel",
    rating: 4,
    date: "2023-09-28",
    comment:
      "Great food and quick delivery. The biryani was flavorful, though I would have preferred it a bit spicier.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    rating: 5,
    date: "2023-10-05",
    comment:
      "First time trying Indian food and I'm hooked! The staff was very helpful in guiding me through the menu.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 4,
    name: "Amir Khan",
    rating: 5,
    date: "2023-09-20",
    comment:
      "The vegetarian options are outstanding. Palak paneer was creamy and flavorful. Will order again!",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
  },
];
