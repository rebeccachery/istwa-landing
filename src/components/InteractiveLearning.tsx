import { motion } from "framer-motion";
import { Gamepad2, BookOpen, Trophy, Sparkles } from "lucide-react";
import { Button } from "./ui/Button";

const features = [
  {
    icon: Gamepad2,
    title: "Interactive Games",
    description:
      "Engage with history through immersive games that bring revolutionary events to life",
  },
  {
    icon: BookOpen,
    title: "Guided Quizzes",
    description:
      "Test your knowledge and dive deeper into the historical context with educational quizzes",
  },
  {
    icon: Sparkles,
    title: "Interactive Stories",
    description:
      "Make choices and explore different perspectives in branching narrative experiences",
  },
  {
    icon: Trophy,
    title: "Achievement System",
    description:
      "Track your learning journey and earn rewards as you master historical knowledge",
  },
];

export function InteractiveLearning() {
  return (
    <section className="py-24 px-6 bg-neutral-950 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-blue-600/20 border border-blue-600/30 rounded-full">
            <span className="text-blue-400">Beyond the Screen</span>
          </div>
          <h2 className="text-4xl md:text-6xl text-white mb-6">
            Interactive Learning Experience
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            The film is just the beginning. Dive deeper into history with our companion
            interactive platform that transforms passive watching into active learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-neutral-900 p-8 rounded-lg border border-neutral-800 hover:border-blue-600/50 transition-all duration-300 h-full">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl text-white mb-2">{feature.title}</h3>
                    <p className="text-neutral-400">{feature.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-600/20 rounded-lg p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl md:text-4xl text-white mb-4">
            Learn History Your Way
          </h3>
          <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
            Whether you're a student, educator, or history enthusiast, our interactive
            platform offers multiple ways to explore and understand the Haitian Revolution
            and its lasting impact on world history
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8"
          >
            Explore the Platform
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
