import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { useState } from "react";
import { supabase } from "../lib/supabase";

export function Waitlist({ ref }: { ref: React.RefObject<HTMLElement | null> }) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const { error } = await supabase
        .from("waitlist")
        .insert([{ email }]);

      if (error) {
        setError("Something went wrong. Please try again.");
      } else {
        setSubmitted(true);
        setEmail("");
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (err) {
      setError("An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      ref={ref}
      className="py-20 md:py-32 px-6 bg-black text-white text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-4xl md:text-5xl font-light mb-6">Be Part of History</h2>
        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-12">
          Sign up to receive exclusive updates, behind-the-scenes content, and early access to new films and interactive experiences
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
          <div className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-4 py-3 rounded-md bg-neutral-800 text-white placeholder-neutral-500 border border-neutral-700 focus:outline-none focus:border-amber-50"
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-md font-medium transition-colors"
            >
              {isLoading ? "Submitting..." : "Stay Updated"}
            </Button>
          </div>
        </form>

        {submitted && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-400 text-sm"
          >
            ✓ Thanks for joining! Check your email for updates.
          </motion.p>
        )}

        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-400 text-sm"
          >
            {error}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
