import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "./ui/Button";

const pricingTiers = [
  {
    name: "Free",
    price: "0",
    description: "Perfect for trying out the platform",
    features: [
      "Watch the film (with ads)",
      "Access to basic quizzes",
      "Limited interactive content",
      "Community forums access",
    ],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Explorer",
    price: "TBD",
    period: "/month",
    description: "For individuals who want to dive deeper",
    features: [
      "Ad-free film streaming",
      "Full access to all quizzes and games",
      "Interactive storytelling experiences",
      "Downloadable study guides",
      "Progress tracking and achievements",
      "Early access to new content",
    ],
    cta: "Start Exploring",
    popular: true,
  },
  {
    name: "Educator",
    price: "TBD",
    period: "/month",
    description: "Designed for teachers and institutions",
    features: [
      "Everything in Explorer",
      "Classroom screening licenses",
      "Comprehensive lesson plans",
      "Student progress dashboard",
      "Downloadable classroom resources",
      "Priority support",
      "Professional development materials",
      "Bulk student access (up to 150 students)",
    ],
    cta: "Request Access",
    popular: false,
  },
];

const faqs = [
  {
    question: "When will pricing be finalized?",
    answer:
      "We're still finalizing our pricing structure to ensure we offer the best value. Sign up for our newsletter to be notified when pricing is announced.",
  },
  {
    question: "Will there be institutional licenses?",
    answer:
      "Yes! We're developing special pricing for schools, districts, and educational institutions. Contact us for custom enterprise solutions.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer:
      "Absolutely. You'll be able to change your subscription tier at any time, and we'll prorate the charges accordingly.",
  },
  {
    question: "Is there a student discount?",
    answer:
      "We're committed to making educational content accessible. Student discounts will be available with valid student ID verification.",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-neutral-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-yellow-600/20 border border-yellow-600/30 rounded-full">
            <span className="text-yellow-400">Flexible Pricing</span>
          </div>
          <h2 className="text-4xl md:text-6xl text-white mb-6">
            Choose Your Learning Journey
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Start free and upgrade as you explore. Pricing details coming soon — subscribe
            to be the first to know
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-linear-to-r from-yellow-600 to-orange-600 rounded-full flex items-center gap-1">
                  <Sparkles className="w-4 h-4 text-white" />
                  <span className="text-white text-sm">Most Popular</span>
                </div>
              )}
              <div
                className={`bg-neutral-950 rounded-lg p-8 h-full flex flex-col ${
                  tier.popular
                    ? "border-2 border-yellow-600/50"
                    : "border border-neutral-800"
                }`}
              >
                <div className="mb-6">
                  <h3 className="text-2xl text-white mb-2">{tier.name}</h3>
                  <p className="text-neutral-400 text-sm">{tier.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-white text-sm">$</span>
                    <span className="text-5xl text-white">{tier.price}</span>
                    {tier.period && (
                      <span className="text-neutral-400">{tier.period}</span>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 mb-8 grow">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-neutral-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={
                    tier.popular
                      ? "bg-linear-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white w-full"
                      : "bg-neutral-800 hover:bg-neutral-700 text-white w-full"
                  }
                  size="lg"
                >
                  {tier.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl text-white mb-12 text-center">
            Frequently Asked Questions
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-neutral-950 p-6 rounded-lg border border-neutral-800"
              >
                <h4 className="text-lg text-white mb-3">{faq.question}</h4>
                <p className="text-neutral-400">{faq.answer}</p>
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
          <p className="text-neutral-400">
            Need a custom solution for your institution?{" "}
            <a href="#" className="text-yellow-400 hover:text-yellow-300 underline">
              Contact our enterprise team
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
