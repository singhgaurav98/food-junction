// This file is the SEED content. It's used the very first time the site runs
// (before an admin has saved anything to storage), and as a fallback if
// storage isn't configured yet. Edit freely, or just use the Admin Panel.

const defaultContent = {
  site: {
    name: "Food Junction",
    tagline: "Family Restaurant",
    subTagline: "100% Pure Vegetarian",
    phone: "8779613622",
    phoneAlt: "9170426483",
    email: "foodjunction2026@gmail.com",
    address: "NH-731 Fattupur, Badlapur, Jaunpur, U.P. 222125",
    timings: "08:00 AM – 12:00 AM",
    heroImage: "",
    note: "Note - Your order will be served after 10 minutes."
  },
  categories: [
    {
      id: "dal",
      name: "दाल",
      nameEn: "Dal",
      image: "/images/categories/dal.svg",
      items: [
        { name: "Dal Tadka", price: "160" },
        { name: "Dal Fry", price: "150" },
        { name: "Dal Makhani", price: "200" },
        { name: "Food Junction Special Mixed Dal", price: "220" }
      ]
    },
    {
      id: "south-indian",
      name: "साउथ इंडियन स्नैक्स",
      nameEn: "South Indian Snacks",
      image: "/images/categories/south-indian.svg",
      items: [
        { name: "Vada Sambar (4 Pcs)", price: "120" },
        { name: "Paneer Uttapam", price: "150" },
        { name: "Uttapam", price: "80" },
        { name: "Onion Uttapam", price: "100" },
        { name: "Paper Dosa", price: "80" },
        { name: "Masala Dosa", price: "120" },
        { name: "Butter Masala Dosa", price: "150" },
        { name: "Paneer Masala Dosa", price: "180" },
        { name: "Food Junction Special Dosa", price: "200" },
        { name: "Vada", price: "30" }
      ]
    },
    {
      id: "rice-varieties",
      name: "राइस वैरायटी",
      nameEn: "Rice Varieties",
      image: "/images/categories/rice-varieties.svg",
      items: [
        { name: "Khichdi", price: "120" },
        { name: "Lemon Rice", price: "150" },
        { name: "Curd Rice", price: "150" }
      ]
    },
    {
      id: "paneer-mushroom",
      name: "पनीर / मशरूम",
      nameEn: "Paneer / Mushroom",
      image: "/images/categories/paneer-mushroom.svg",
      items: [
        { name: "Kadhai Paneer", price: "250" },
        { name: "Paneer Butter Masala", price: "270" },
        { name: "Matar Paneer", price: "250" },
        { name: "Paneer Tikka Masala", price: "270" },
        { name: "Paneer Taka Tak", price: "280" },
        { name: "Kaju Paneer Masala", price: "300" },
        { name: "Paneer Tawa Masala", price: "300" },
        { name: "Mushroom Masala", price: "250" },
        { name: "Mushroom Matar", price: "260" },
        { name: "Banarasi Dum Aloo", price: "240" },
        { name: "Veg Kofta", price: "240" },
        { name: "Jeera Aloo", price: "150" },
        { name: "Mix Veg", price: "200" },
        { name: "Chole Masala", price: "220" }
      ]
    },
    {
      id: "rice-noodles",
      name: "राइस / नूडल्स",
      nameEn: "Rice / Noodles",
      image: "/images/categories/rice-noodles.svg",
      items: [
        { name: "Veg Fried Rice", price: "150" },
        { name: "Paneer Fried Rice", price: "200" },
        { name: "Chilli Garlic Fried Rice", price: "200" },
        { name: "Schezwan Fried Rice", price: "200" },
        { name: "Veg Noodles", price: "150" },
        { name: "Paneer Noodles", price: "180" },
        { name: "Hakka Noodles", price: "180" },
        { name: "Schezwan Noodles", price: "180" },
        { name: "Chilli Garlic Noodles", price: "180" }
      ]
    },
    {
      id: "biryani-pulao",
      name: "राइस / वेज बिरयानी",
      nameEn: "Rice / Veg Biryani",
      image: "/images/categories/biryani-pulao.svg",
      items: [
        { name: "Steamed Rice", price: "150" },
        { name: "Jeera Rice", price: "170" },
        { name: "Peas Pulao", price: "160" },
        { name: "Veg Pulao", price: "170" },
        { name: "Veg Biryani", price: "200" }
      ]
    },
    {
      id: "roti",
      name: "रोटी",
      nameEn: "Roti",
      image: "/images/categories/roti.svg",
      items: [
        { name: "Tawa Roti (Plain/Butter)", price: "10/15" },
        { name: "Lachha Paratha", price: "40" },
        { name: "Tandoori Roti (Plain/Butter)", price: "20/25" },
        { name: "Missi Roti", price: "30" },
        { name: "Naan (Plain/Butter/Garlic)", price: "45/50/55" },
        { name: "Kulcha", price: "60" }
      ]
    },
    {
      id: "raita-salad",
      name: "रायता / पापड़ / सलाद",
      nameEn: "Raita / Papad / Salad",
      image: "/images/categories/raita-salad.svg",
      items: [
        { name: "Boondi Raita", price: "70" },
        { name: "Mix Raita", price: "60" },
        { name: "Masala Papad", price: "70" },
        { name: "Roasted Papad", price: "40" },
        { name: "Green Salad", price: "60" },
        { name: "Onion Salad", price: "40" }
      ]
    },
    {
      id: "tandoor-starter",
      name: "तंदूर स्टार्टर",
      nameEn: "Tandoor Starters",
      image: "/images/categories/tandoor-starter.svg",
      items: [
        { name: "Paneer Tikka", price: "220" },
        { name: "Mushroom Tikka", price: "220" }
      ]
    },
    {
      id: "chinese-starter",
      name: "चाइनीज़ स्टार्टर",
      nameEn: "Chinese Starters",
      image: "/images/categories/chinese-starter.svg",
      items: [
        { name: "Chilli Potato", price: "180" },
        { name: "Honey Potato", price: "180" },
        { name: "Veg Dry Manchurian", price: "180" },
        { name: "Veg Gravy Manchurian", price: "200" },
        { name: "Paneer Chilli Dry", price: "220" },
        { name: "Paneer Chilli Gravy", price: "240" },
        { name: "Mushroom Chilli", price: "230" },
        { name: "Paneer 65", price: "220" },
        { name: "Mushroom 65", price: "220" },
        { name: "Crispy Chilli Baby Corn", price: "220" },
        { name: "Veg Spring Roll", price: "150" }
      ]
    },
    {
      id: "soups",
      name: "सूप / मीठा",
      nameEn: "Hot Soups / Sweets",
      image: "/images/categories/soups.svg",
      items: [
        { name: "Veg Manchow Soup", price: "100" },
        { name: "Hot & Sour Soup", price: "100" },
        { name: "Peking Soup", price: "100" },
        { name: "Tomato Soup", price: "80" },
        { name: "Kheer", price: "100" },
        { name: "Food Junction Special Kheer", price: "100" }
      ]
    },
    {
      id: "snacks",
      name: "स्नैक्स",
      nameEn: "Snacks",
      image: "/images/categories/snacks.svg",
      items: [
        { name: "Paneer Pakora", price: "150" },
        { name: "Onion Pakora", price: "120" },
        { name: "Mix Pakora", price: "150" },
        { name: "Garlic Bread", price: "100" },
        { name: "Veg Burger", price: "100" },
        { name: "French Fries", price: "100" },
        { name: "Peri Peri Fries", price: "120" },
        { name: "Crispy Corn", price: "200" },
        { name: "Aloo Paratha", price: "80" },
        { name: "Paneer Paratha", price: "100" },
        { name: "Onion Paratha", price: "80" },
        { name: "Mix Paratha", price: "100" },
        { name: "Chole Bhature", price: "120" },
        { name: "Puri Sabzi", price: "100" },
        { name: "Poha", price: "100" }
      ]
    },
    {
      id: "tea-coffee",
      name: "चाय / कॉफ़ी",
      nameEn: "Tea / Coffee",
      image: "/images/categories/tea-coffee.svg",
      items: [
        { name: "Tea (Kulhad/Cup)", price: "20/40" },
        { name: "Masala Tea", price: "25/45" },
        { name: "Special Coffee", price: "60" },
        { name: "Cold Coffee", price: "70" },
        { name: "Soft Drinks", price: "-" },
        { name: "Cold Drinks", price: "-" },
        { name: "Ice Cream", price: "-" },
        { name: "Masala Buttermilk", price: "60" },
        { name: "Lassi", price: "80" }
      ]
    },
    {
      id: "thali",
      name: "थाली",
      nameEn: "Thali",
      image: "/images/categories/thali.svg",
      items: [
        {
          name: "Regular Thali – Aloo Matar Curry, Mix Veg, Dal Fry, Steamed Rice, 2 Tandoori Rotis, Raita & Salad",
          price: "180"
        },
        {
          name: "Special Thali – Kadhai Paneer, Mix Veg, Dal Makhani, Jeera Rice, 4 Tawa Rotis, 2 Butter Tandoori Rotis, Raita, Salad & Papad",
          price: "240"
        },
        {
          name: "Chinese Thali – Veg Manchurian Gravy, Veg Fried Rice, Veg Noodles & Spring Roll",
          price: "240"
        }
      ]
    }
  ]
};

export default defaultContent;
