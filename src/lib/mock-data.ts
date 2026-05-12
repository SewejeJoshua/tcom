export const counselors = [
  { id: "1", alias: "Sage Owl", specialty: "Anxiety & Stress", rating: 4.9, sessions: 1240, status: "online", color: "from-violet-400 to-indigo-500" },
  { id: "2", alias: "Calm Lion", specialty: "Relationships", rating: 4.8, sessions: 980, status: "online", color: "from-emerald-400 to-teal-500" },
  { id: "3", alias: "Quiet River", specialty: "Career & Purpose", rating: 4.9, sessions: 1560, status: "away", color: "from-sky-400 to-blue-500" },
  { id: "4", alias: "Warm Sun", specialty: "Grief Support", rating: 5.0, sessions: 720, status: "online", color: "from-amber-400 to-orange-500" },
];

export const moods = [
  { emoji: "😊", label: "Great", value: "great" },
  { emoji: "🙂", label: "Okay", value: "okay" },
  { emoji: "😐", label: "Meh", value: "meh" },
  { emoji: "😟", label: "Anxious", value: "anxious" },
  { emoji: "😢", label: "Sad", value: "sad" },
  { emoji: "😡", label: "Angry", value: "angry" },
];

export const marketCategories = [
  { name: "Electrical", icon: "⚡", count: 142 },
  { name: "Fashion", icon: "👗", count: 530 },
  { name: "Food", icon: "🍲", count: 318 },
  { name: "Plumbing", icon: "🔧", count: 96 },
  { name: "Tech", icon: "💻", count: 264 },
  { name: "Tutors", icon: "📚", count: 187 },
  { name: "Cleaning", icon: "🧽", count: 74 },
  { name: "Photography", icon: "📷", count: 121 },
];

export const listings = [
  { id: "l1", title: "Senior Electrician — Same-day repairs", vendor: "Kwame O.", category: "Electrical", price: "₦8,000/visit", rating: 4.9, distance: "1.2 km", verified: true },
  { id: "l2", title: "Handcrafted Ankara Dresses", vendor: "Adaeze Studio", category: "Fashion", price: "₦15,500", rating: 4.8, distance: "3.4 km", verified: true },
  { id: "l3", title: "Home-cooked Jollof — Bulk Orders", vendor: "Mama Ife Kitchen", category: "Food", price: "₦4,500", rating: 5.0, distance: "0.8 km", verified: true },
  { id: "l4", title: "Laptop Repair & Data Recovery", vendor: "TechHub Lagos", category: "Tech", price: "from ₦6,000", rating: 4.7, distance: "2.1 km", verified: false },
  { id: "l5", title: "Math Tutor — JAMB & WAEC Prep", vendor: "Mr. Bayo", category: "Tutors", price: "₦3,000/hr", rating: 4.9, distance: "4.7 km", verified: true },
  { id: "l6", title: "Event Photography Package", vendor: "Lens by Tobi", category: "Photography", price: "₦120,000", rating: 4.9, distance: "5.5 km", verified: true },
];

export const classes = [
  { id: "c1", title: "Calculus II — Integrals & Series", teacher: "Dr. Amina Bello", students: 48, schedule: "Mon · Wed · 4:00pm", color: "bg-gradient-aurora", status: "live" },
  { id: "c2", title: "Intro to Product Design", teacher: "Yemi Aluko", students: 124, schedule: "Tue · Thu · 6:00pm", color: "bg-gradient-emerald", status: "upcoming" },
  { id: "c3", title: "Yoruba Literature", teacher: "Mrs. Folake A.", students: 32, schedule: "Fri · 3:00pm", color: "bg-gradient-primary", status: "upcoming" },
  { id: "c4", title: "Web Dev with React", teacher: "Chuka Eze", students: 210, schedule: "Sat · 10:00am", color: "bg-gradient-aurora", status: "upcoming" },
];

export const assignments = [
  { id: "a1", title: "Problem Set 4 — Definite Integrals", class: "Calculus II", due: "Tomorrow, 11:59pm", status: "pending" },
  { id: "a2", title: "Wireframe Critique", class: "Product Design", due: "Fri, 5:00pm", status: "submitted" },
  { id: "a3", title: "Essay: Things Fall Apart", class: "Yoruba Literature", due: "Next Mon", status: "pending" },
];

export const notifications = [
  { id: "n1", title: "Sage Owl accepted your session", time: "2m ago", type: "counsel" },
  { id: "n2", title: "New message from Adaeze Studio", time: "10m ago", type: "market" },
  { id: "n3", title: "Calculus II goes live in 30 min", time: "30m ago", type: "class" },
  { id: "n4", title: "Your wallet was credited ₦12,000", time: "1h ago", type: "wallet" },
];
