import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🚀 App is Running</h1>
        <p style={styles.text}>
          Your React SPA deployed successfully.
        </p>

        <button
          style={styles.button}
          onClick={() => setCount((prev) => prev + 1)}
        >
          Count is: {count}
        </button>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#0f172a",
    fontFamily: "system-ui, sans-serif",
  },
  card: {
    padding: "30px",
    borderRadius: "12px",
    background: "#111827",
    textAlign: "center",
    color: "#fff",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
  },
  title: {
    fontSize: "24px",
    marginBottom: "10px",
  },
  text: {
    marginBottom: "20px",
    opacity: 0.8,
  },
  button: {
    padding: "10px 16px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    background: "#3b82f6",
    color: "white",
    fontSize: "14px",
  },
};