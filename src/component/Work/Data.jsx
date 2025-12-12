import img1 from '../../assets/travel-go.png';
import img3 from '../../assets/crypto-watch.png';
import img4 from '../../assets/razorpay.png';
import img5 from '../../assets/salesforce.png';
import img6 from '../../assets/food-share.png';
import img7 from '../../assets/image-gini.png';

export const projectData = [
    {
        id: 1,
        title: "Drazy | Real-time Collaborative Whiteboard",
        category: "Fullstack",
        image: img1, // add your image later
        url: "https://github.com/vishwakarma-vishal/drazy",
        github: "https://github.com/vishwakarma-vishal/drazy",
        tech: ["Next.js", "Node.js", "TypeScript", "WebSockets", "PostgreSQL"],
        points: [
            "Real-time collaborative whiteboard with a custom canvas engine.",
            "WebSockets-based sync achieving <100ms latency across clients.",
            "Optimized architecture using batching & multi-server setup.",
            "Built with Next.js, Node.js, TypeScript & PostgreSQL.",
            "Designed for scalable multi-user collaboration."
        ]
    },

    {
        id: 2,
        title: "Food Share | Share Food, Spread Smiles",
        category: "Fullstack",
        image: img6,
        url: "https://food-share-app.netlify.app/",
        github: "https://github.com/vishwakarma-vishal/food-share",
        tech: ["React.js", "Node.js", "Express", "MongoDB", "Cloudinary", "JWT"],
        points: [
            "Full-stack donation platform connecting restaurants with NGOs.",
            "Secure authentication with JWT & structured user workflows.",
            "MongoDB + Cloudinary for storage and image uploads.",
            "Responsive React UI with optimized request flows.",
            "Implements real-world surplus food distribution system."
        ]
    },

    {
        id: 3,
        title: "Image Gini | AI-powered text-to-image generator",
        category: "Fullstack",
        image: img7,
        url: "https://image-gini.netlify.app/",
        github: "https://github.com/vishwakarma-vishal/image-gini",
        tech: ["React", "Node.js", "Express", "MongoDB", "Cloudinary", "Razorpay"],
        points: [
            "AI-powered text-to-image generator for creative workflows.",
            "Secure Razorpay integration for credit-based usage billing.",
            "JWT authentication and protected API routes.",
            "Cloudinary-based asset handling & media management.",
            "Combines AI inference with modern full-stack architecture."
        ]
    },

    {
        id: 4,
        title: "Travel Go",
        category: "Fullstack",
        image: img1,
        url: "https://travel-go.onrender.com/",
        github: "https://github.com/vishwakarma-vishal/travel-go",
        tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
        points: [
            "Full MERN stack travel booking platform.",
            "Users can search, filter, save, and book properties.",
            "Authentication system with personalized dashboards.",
            "Property add/listing system with images.",
            "Responsive UI with robust backend API integration."
        ]
    },

    {
        id: 5,
        title: "Crypto Watch",
        category: "Design",
        image: img3,
        url: "https://crypto-watch-vishal.netlify.app/",
        github: "https://github.com/vishwakarma-vishal/crypto-watch",
        tech: ["React.js", "REST APIs", "CSS3", "Taliwind CSS"],
        points: [
            "Real-time crypto tracking interface with live data.",
            "Clean, modern UI focused on readability & visuals.",
            "Data-driven dashboard-style design.",
            "Uses public crypto APIs for live updates.",
            "Fully responsive design across devices."
        ]
    },

    {
        id: 6,
        title: "Razorpay Landing Page",
        category: "Design",
        image: img4,
        url: "https://vishal-razorpay-clone.netlify.app/",
        github: "https://github.com/vishwakarma-vishal/razorpay-frontend-clone",
        tech: ["HTML5", "CSS3", "JavaScript"],
        points: [
            "Pixel-perfect clone of Razorpay’s modern landing page.",
            "Clean section-based layout mirroring production UI.",
            "Accurate typography, spacing, and color reproduction.",
            "Fully responsive with smooth visual transitions.",
            "Demonstrates strong UI/UX attention to detail."
        ]
    },

    {
        id: 7,
        title: "Salesforce Landing Page",
        category: "Design",
        image: img5,
        url: "https://salesforce-clone-frontend.netlify.app/",
        github: "https://github.com/vishwakarma-vishal/Salesforce-clone-frontend",
        tech: ["HTML5", "CSS3", "JavaScript"],
        points: [
            "High-fidelity clone of Salesforce’s marketing homepage.",
            "Structured layout with polished component sections.",
            "Emphasis on visual hierarchy, branding & gradients.",
            "Smooth scrolling & responsive design.",
            "Showcases enterprise-grade UI recreation skills."
        ]
    }
];

export const projectsNav = [
    { name: "All" },
    { name: "Fullstack" },
    { name: "Design" },
];
