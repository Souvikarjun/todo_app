<h1>✅ ToDo App (Next.js + MongoDB)</h1>

<p>A simple and modern ToDo application built with <strong>Next.js</strong> and <strong>MongoDB</strong>. Create, manage, and delete your daily tasks with ease — all with a clean, full-stack architecture.</p>

<h2>🔧 Tech Stack</h2>
<ul>
  <li><strong>Frontend:</strong> Next.js (React)</li>
  <li><strong>Backend:</strong> API Routes (Next.js)</li>
  <li><strong>Database:</strong> MongoDB (with prisma)</li>
  <li><strong>Styling:</strong> Tailwind CSS</li>
</ul>

<h2>🚀 Features</h2>
<ul>
  <li>Create new tasks</li>
  <li>Mark tasks as complete/incomplete</li>
  <li>Delete tasks</li>
  <li>Fully responsive UI</li>
</ul>

<h2>📁 Folder Structure</h2>
<pre><code>/
├── app/                # App Router structure
│   ├── page.tsx        # Main ToDo UI
│   ├── global.css      # styles of UI
├── components/type.ts  # Todo model (prisma)
└── components/         # Reusable components
  
<h2>⚙️ Setup Instructions</h2>
<pre><code># 1. Clone the repository
git clone https://github.com/yourusername/nextjs-todo-app.git
cd nextjs-todo-app

# 2. Install dependencies
npm install

# 3. Create a .env.local file
MONGODB_URI=your_mongodb_connection_string

# 4. Run the app
npm run dev
</code></pre>

<h2>📜 License</h2>
<p>MIT – Free to use, learn from, and modify.</p>
