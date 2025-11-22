import { motion } from "framer-motion";
import { GraduationCap, FileText, Users, Video, Download, BarChart } from "lucide-react";
import { Button } from "./ui/Button";

const educatorFeatures = [
  {
    icon: FileText,
    title: "Lesson Plans",
    description: "Comprehensive, standards-aligned curriculum guides ready to use",
  },
  {
    icon: Video,
    title: "Classroom Screenings",
    description: "Licensed streaming access for educational institutions",
  },
  {
    icon: Users,
    title: "Group Activities",
    description: "Collaborative exercises designed for classroom engagement",
  },
  {
    icon: Download,
    title: "Downloadable Resources",
    description: "Worksheets, discussion guides, and supplementary materials",
  },
  {
    icon: BarChart,
    title: "Progress Tracking",
    description: "Monitor student engagement and learning outcomes",
  },
  {
    icon: GraduationCap,
    title: "Professional Development",
    description: "Training materials to help educators maximize impact",
  },
];

const curriculumAreas = [
  "World History & Social Studies",
  "African Diaspora Studies",
  "Civics & Government",
  "English Language Arts",
  "Critical Thinking & Analysis",
  "Media Literacy",
];

export function Educators() {
  return (
    <section id="educators" className="py-24 px-6 bg-neutral-950 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-green-600/20 border border-green-600/30 rounded-full">
            <span className="text-green-400">For Educators</span>
          </div>
          <h2 className="text-4xl md:text-6xl text-white mb-6">
            Bring History to Life in Your Classroom
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Empower your students with engaging, historically accurate content and
            comprehensive teaching resources designed by educators, for educators
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl text-white mb-6">
              Everything You Need to Teach
            </h3>
            <p className="text-lg text-neutral-300 mb-8">
              We've created a complete educational ecosystem around LIBERTÉ, providing
              you with all the tools needed to deliver impactful lessons that resonate
              with today's students.
            </p>

            <div className="space-y-4 mb-8">
              {curriculumAreas.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-neutral-300">{area}</span>
                </motion.div>
              ))}
            </div>

            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              Request Educator Access
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="aspect-4/3 rounded-lg overflow-hidden border border-neutral-800">
              <img
                src="https://images.unsplash.com/photo-1752920299210-0b727800ea50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwbGVhcm5pbmclMjBib29rc3xlbnwxfHx8fDE3NjI1Nzc4MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Students learning"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl md:text-4xl text-white mb-12 text-center">
            Educator Resources
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {educatorFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-neutral-900 p-6 rounded-lg border border-neutral-800 hover:border-green-600/50 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-green-500" />
                  </div>
                  <h4 className="text-xl text-white mb-2">{feature.title}</h4>
                  <p className="text-neutral-400">{feature.description}</p>
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
          className="bg-linear-to-br from-green-600/10 to-blue-600/10 border border-green-600/20 rounded-lg p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl text-white mb-4">
                Special Educator Pricing
              </h3>
              <p className="text-lg text-neutral-300 mb-6">
                We believe in making quality educational content accessible. That's why
                we offer discounted rates for verified educators and educational
                institutions.
              </p>
              <ul className="space-y-3 text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Free tier with essential resources</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Discounted premium access for teachers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Institutional licenses for schools and districts</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                View Educator Pricing
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-neutral-700 text-white hover:bg-neutral-800"
              >
                Schedule a Demo
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
