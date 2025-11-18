import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const upcomingTopics = [
  {
    title: "Civil Rights Movement",
    description: "The struggle for equality and justice in America",
    status: "In Development",
  },
  {
    title: "Ancient Civilizations",
    description: "Exploring the great empires that shaped our world",
    status: "Planned",
  },
  {
    title: "Scientific Revolutions",
    description: "Discoveries that transformed human understanding",
    status: "Planned",
  },
];

export function FutureVision() {
  return (
    <section className="py-24 px-6 bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="aspect-video rounded-lg overflow-hidden border border-neutral-800">
              <img
                src="https://images.unsplash.com/photo-1626695436755-3e288720849c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMGdsb2JlJTIwbWFwfGVufDF8fHx8MTc2MjYxOTQzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="World globe"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="inline-block mb-4 px-4 py-2 bg-purple-600/20 border border-purple-600/30 rounded-full">
              <span className="text-purple-400">Our Mission</span>
            </div>
            <h2 className="text-4xl md:text-6xl text-white mb-6">
              The Beginning of Something Bigger
            </h2>
            <p className="text-lg text-neutral-300 mb-6">
              LIBERTÉ is our first film, but it represents the start of a broader mission:
              to bring untold stories of human courage, innovation, and transformation to
              life through the power of animation and interactive media.
            </p>
            <p className="text-lg text-neutral-300">
              Each film will be accompanied by rich educational content, allowing audiences
              to not just watch history, but to experience and learn from it in meaningful
              ways.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl text-white mb-8 text-center">
            Future Stories to Tell
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingTopics.map((topic, index) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="bg-neutral-950 p-6 rounded-lg border border-neutral-800 hover:border-purple-600/50 transition-all duration-300 h-full">
                  <div className="flex items-start justify-between mb-3">
                    <div className="px-3 py-1 bg-purple-600/20 rounded text-sm text-purple-400">
                      {topic.status}
                    </div>
                    <ArrowRight className="w-5 h-5 text-neutral-600 group-hover:text-purple-500 group-hover:translate-x-1 transition-all" />
                  </div>
                  <h4 className="text-xl text-white mb-2">{topic.title}</h4>
                  <p className="text-neutral-400">{topic.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-neutral-400 text-lg">
            Have a story you'd like to see brought to life?{" "}
            <a href="#" className="text-purple-400 hover:text-purple-300 underline">
              Share your ideas with us
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
