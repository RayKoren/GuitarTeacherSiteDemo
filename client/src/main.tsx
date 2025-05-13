import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { init as initEmailJS } from '@emailjs/browser';

// Initialize EmailJS with your public key
const emailJSPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";
initEmailJS({
  publicKey: emailJSPublicKey,
});

createRoot(document.getElementById("root")!).render(<App />);
