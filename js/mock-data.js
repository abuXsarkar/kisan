// KisanDirect NE - Mock Data
const MOCK_DATA = {
    // Brand Info
    brand: {
        name: "KisanDirect NE",
        tagline: "From Assam's Farms to Your Table – Fresh, Fair, Traceable",
        phone: "+91 98765 43210",
        email: "hello@kisandirect.ne"
    },

    // Farmer Profiles
    farmers: [
        {
            id: "F001",
            name: "Ranjit Borah",
            photo: "https://randomuser.me/api/portraits/men/32.jpg",
            village: "Nalbari",
            district: "Nalbari",
            experience: "15 years",
            landSize: "2.5 acres",
            speciality: "Organic Vegetables",
            certifications: ["Organic Certified", "GAP Certified"],
            rating: 4.8,
            totalOrders: 342,
            earnings: 285000,
            phone: "+91 94350 XXXXX",
            bio: "Third-generation farmer specializing in traditional Assamese vegetables. My family has been farming this land for over 50 years.",
            produces: ["Kaji Nemu", "Lai Xaak", "Bhoot Jolokia"],
            joinedDate: "2024-06-15"
        },
        {
            id: "F002",
            name: "Mamoni Kalita",
            photo: "https://randomuser.me/api/portraits/women/44.jpg",
            village: "Sualkuchi",
            district: "Kamrup",
            experience: "8 years",
            landSize: "1.2 acres",
            speciality: "Leafy Greens",
            certifications: ["Organic Certified"],
            rating: 4.9,
            totalOrders: 256,
            earnings: 198000,
            phone: "+91 94350 XXXXX",
            bio: "Started farming after leaving my corporate job. Now I grow the healthiest greens in Kamrup district!",
            produces: ["Paleng Xaak", "Dhekia Xaak", "Mati Kadhi"],
            joinedDate: "2024-08-20"
        },
        {
            id: "F003",
            name: "Bhupen Das",
            photo: "https://randomuser.me/api/portraits/men/65.jpg",
            village: "Jorhat",
            district: "Jorhat",
            experience: "25 years",
            landSize: "4 acres",
            speciality: "Bhut Jolokia Expert",
            certifications: ["GI Tagged", "Export Quality"],
            rating: 4.7,
            totalOrders: 512,
            earnings: 425000,
            phone: "+91 94350 XXXXX",
            bio: "Known as the 'Bhut Jolokia Raja' of Jorhat. My chilies have won state-level competitions.",
            produces: ["Bhut Jolokia", "Bird's Eye Chili", "Tomato"],
            joinedDate: "2024-03-10"
        },
        {
            id: "F004",
            name: "Dimpi Hazarika",
            photo: "https://randomuser.me/api/portraits/women/68.jpg",
            village: "Tezpur",
            district: "Sonitpur",
            experience: "12 years",
            landSize: "3 acres",
            speciality: "Citrus Fruits",
            certifications: ["Organic Certified", "Women Farmer Leader"],
            rating: 4.9,
            totalOrders: 389,
            earnings: 356000,
            phone: "+91 94350 XXXXX",
            bio: "Leading a women's farming cooperative in Tezpur. We specialize in the famous Kaji Nemu.",
            produces: ["Kaji Nemu", "Robab Tenga", "Komola"],
            joinedDate: "2024-05-01"
        },
        {
            id: "F005",
            name: "Pradip Nath",
            photo: "https://randomuser.me/api/portraits/men/42.jpg",
            village: "Barpeta",
            district: "Barpeta",
            experience: "20 years",
            landSize: "5 acres",
            speciality: "Seasonal Vegetables",
            certifications: ["Organic Certified"],
            rating: 4.6,
            totalOrders: 623,
            earnings: 510000,
            phone: "+91 94350 XXXXX",
            bio: "Farming is not just my profession, it's my passion. Fresh vegetables straight from soil to your kitchen.",
            produces: ["Cabbage", "Cauliflower", "Potato", "Onion"],
            joinedDate: "2024-02-15"
        }
    ],

    // Products Catalog
    products: [
        {
            id: "P001",
            name: "Bhut Jolokia (Ghost Pepper)",
            nameAssamese: "ভূত জলকীয়া",
            category: "Spices",
            price: 450,
            unit: "250g",
            image: "🌶️",
            farmerId: "F003",
            freshness: "Harvested Today",
            organic: true,
            description: "World-famous ghost pepper from Jorhat. Scoville rating: 1,000,000+. Handle with care!",
            nutrition: { calories: 40, protein: "2g", fiber: "1.5g" },
            inStock: true,
            rating: 4.8,
            reviews: 89
        },
        {
            id: "P002",
            name: "Kaji Nemu (Kaffir Lime)",
            nameAssamese: "কাজি নেমু",
            category: "Fruits",
            price: 120,
            unit: "500g",
            image: "🍋",
            farmerId: "F004",
            freshness: "Harvested Yesterday",
            organic: true,
            description: "Aromatic Assamese lime with intense fragrance. Perfect for pickles, curries, and beverages.",
            nutrition: { calories: 30, vitaminC: "53mg", fiber: "2.8g" },
            inStock: true,
            rating: 4.9,
            reviews: 156
        },
        {
            id: "P003",
            name: "Lai Xaak (Mustard Greens)",
            nameAssamese: "লাই শাক",
            category: "Leafy Greens",
            price: 40,
            unit: "250g",
            image: "🥬",
            farmerId: "F001",
            freshness: "Harvested Today",
            organic: true,
            description: "Traditional Assamese mustard greens. Rich in iron and vitamins. Perfect for xaak bhaji.",
            nutrition: { calories: 27, iron: "1.5mg", vitaminA: "118%" },
            inStock: true,
            rating: 4.7,
            reviews: 234
        },
        {
            id: "P004",
            name: "Ou Tenga (Elephant Apple)",
            nameAssamese: "ঔ টেঙা",
            category: "Fruits",
            price: 80,
            unit: "500g",
            image: "🍎",
            farmerId: "F001",
            freshness: "Harvested 2 days ago",
            organic: true,
            description: "Tangy elephant apple used in traditional Assamese fish curries. Unique sour flavor.",
            nutrition: { calories: 52, vitaminC: "45mg", fiber: "4g" },
            inStock: true,
            rating: 4.6,
            reviews: 78
        },
        {
            id: "P005",
            name: "Paleng Xaak (Spinach)",
            nameAssamese: "পালেং শাক",
            category: "Leafy Greens",
            price: 35,
            unit: "250g",
            image: "🥗",
            farmerId: "F002",
            freshness: "Harvested Today",
            organic: true,
            description: "Fresh organic spinach from Sualkuchi. Tender leaves perfect for dal or stir-fry.",
            nutrition: { calories: 23, iron: "2.7mg", protein: "2.9g" },
            inStock: true,
            rating: 4.8,
            reviews: 312
        },
        {
            id: "P006",
            name: "Kosu (Taro Root)",
            nameAssamese: "কচু",
            category: "Root Vegetables",
            price: 60,
            unit: "500g",
            image: "🥔",
            farmerId: "F005",
            freshness: "Harvested Yesterday",
            organic: true,
            description: "Fresh taro root for traditional Assamese kosu pitika or curry. Creamy texture.",
            nutrition: { calories: 112, fiber: "4.1g", potassium: "591mg" },
            inStock: true,
            rating: 4.5,
            reviews: 145
        },
        {
            id: "P007",
            name: "Bamboo Shoot (Khorisa)",
            nameAssamese: "খৰিচা",
            category: "Specialty",
            price: 150,
            unit: "500g",
            image: "🎋",
            farmerId: "F003",
            freshness: "Freshly Prepared",
            organic: true,
            description: "Fermented bamboo shoot - essential ingredient for authentic Assamese pork curry.",
            nutrition: { calories: 27, fiber: "2.2g", protein: "2.6g" },
            inStock: true,
            rating: 4.9,
            reviews: 198
        },
        {
            id: "P008",
            name: "Mati Kadhi (Banana Flower)",
            nameAssamese: "মাটি কাঢ়ী",
            category: "Specialty",
            price: 45,
            unit: "1 pc",
            image: "🌸",
            farmerId: "F002",
            freshness: "Harvested Today",
            organic: true,
            description: "Fresh banana flower for traditional posola or khar dishes. Rich in fiber.",
            nutrition: { calories: 51, fiber: "5.7g", protein: "1.6g" },
            inStock: true,
            rating: 4.7,
            reviews: 167
        },
        {
            id: "P009",
            name: "Fresh Cabbage",
            nameAssamese: "বন্ধাকবি",
            category: "Vegetables",
            price: 30,
            unit: "1 kg",
            image: "🥬",
            farmerId: "F005",
            freshness: "Harvested Today",
            organic: true,
            description: "Crisp, fresh cabbage from Barpeta farms. Perfect for salads and stir-fries.",
            nutrition: { calories: 25, vitaminC: "36mg", fiber: "2.5g" },
            inStock: true,
            rating: 4.6,
            reviews: 289
        },
        {
            id: "P010",
            name: "Bird's Eye Chili",
            nameAssamese: "ডালচেনি জলকীয়া",
            category: "Spices",
            price: 180,
            unit: "100g",
            image: "🌶️",
            farmerId: "F003",
            freshness: "Harvested Yesterday",
            organic: true,
            description: "Small but mighty! Traditional Assamese chili with intense heat and flavor.",
            nutrition: { calories: 40, vitaminC: "144mg", capsaicin: "High" },
            inStock: true,
            rating: 4.8,
            reviews: 134
        }
    ],

    // Price Trend Data (for charts)
    priceTrends: {
        "Bhut Jolokia": {
            daily: [420, 435, 440, 445, 450, 455, 450],
            weekly: [400, 420, 435, 450, 460, 455, 450],
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            prediction: "↑ Expected to rise 5% next week"
        },
        "Kaji Nemu": {
            daily: [110, 115, 118, 120, 122, 120, 120],
            weekly: [100, 105, 110, 115, 120, 122, 120],
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            prediction: "→ Stable pricing expected"
        },
        "Lai Xaak": {
            daily: [38, 40, 42, 40, 38, 40, 40],
            weekly: [35, 38, 40, 42, 40, 38, 40],
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            prediction: "↓ Slight decrease expected (harvest season)"
        },
        "Cabbage": {
            daily: [28, 29, 30, 30, 31, 30, 30],
            weekly: [25, 27, 28, 29, 30, 30, 30],
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            prediction: "→ Stable pricing expected"
        }
    },

    // Cold Storage Data
    coldStorage: {
        facilities: [
            { name: "Guwahati Central Cold Storage", location: "Guwahati", capacity: 5000, available: 1200, pricePerKg: 2.5 },
            { name: "Jorhat Agri Storage", location: "Jorhat", capacity: 3000, available: 800, pricePerKg: 2.0 },
            { name: "Tezpur Cold Chain Hub", location: "Tezpur", capacity: 2000, available: 500, pricePerKg: 2.2 }
        ],
        userAllocation: {
            current: 150,
            max: 500,
            expires: "2026-03-15",
            facility: "Guwahati Central Cold Storage"
        }
    },

    // Sample Orders
    orders: [
        { id: "ORD001", date: "2026-02-03", items: 5, total: 450, status: "Delivered", customer: "Rahul S." },
        { id: "ORD002", date: "2026-02-02", items: 3, total: 280, status: "Delivered", customer: "Priya K." },
        { id: "ORD003", date: "2026-02-02", items: 8, total: 720, status: "In Transit", customer: "Hotel Brahmaputra" },
        { id: "ORD004", date: "2026-02-01", items: 2, total: 150, status: "Delivered", customer: "Anita B." },
        { id: "ORD005", date: "2026-02-01", items: 12, total: 1100, status: "Delivered", customer: "Spice Garden Restaurant" }
    ],

    // Cart (for demo)
    cart: [],

    // Categories
    categories: [
        { name: "All", icon: "🛒", count: 10 },
        { name: "Leafy Greens", icon: "🥬", count: 2 },
        { name: "Fruits", icon: "🍋", count: 2 },
        { name: "Spices", icon: "🌶️", count: 2 },
        { name: "Root Vegetables", icon: "🥔", count: 1 },
        { name: "Specialty", icon: "🎋", count: 2 },
        { name: "Vegetables", icon: "🥗", count: 1 }
    ],

    // Stats for displays
    stats: {
        totalFarmers: 2741,
        totalOrders: 15420,
        avgDeliveryTime: "4.2 hrs",
        farmerEarningsIncrease: "82%",
        customersServed: 8500,
        villagesCovered: 156
    }
};

// Helper functions
function getFarmerById(id) {
    return MOCK_DATA.farmers.find(f => f.id === id);
}

function getProductById(id) {
    return MOCK_DATA.products.find(p => p.id === id);
}

function getProductsByFarmer(farmerId) {
    return MOCK_DATA.products.filter(p => p.farmerId === farmerId);
}

function getProductsByCategory(category) {
    if (category === "All") return MOCK_DATA.products;
    return MOCK_DATA.products.filter(p => p.category === category);
}

function formatCurrency(amount) {
    return "₹" + amount.toLocaleString('en-IN');
}

function generateQRData(productId, farmerId) {
    return `KISANDIRECT-${productId}-${farmerId}-${Date.now()}`;
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MOCK_DATA;
}
