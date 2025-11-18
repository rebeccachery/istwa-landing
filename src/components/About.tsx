import { motion } from "framer-motion";

export function About() {
  return (
    <section className="py-24 px-6 bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl text-white mb-6">
              A Revolution That Changed History
            </h2>
            <div className="space-y-4 text-neutral-300 text-lg">
              <p>
                In 1791, enslaved people in the French colony of Saint-Domingue rose up
                against their oppressors, sparking a 13-year struggle that would reshape
                the world.
              </p>
              <p>
                Led by visionary leaders like Toussaint Louverture, Jean-Jacques
                Dessalines, and countless unnamed heroes, they achieved the impossible:
                defeating the armies of France, Spain, and Britain to establish Haiti,
                the first free Black republic.
              </p>
              <p>
                This groundbreaking animated film brings their story to a new generation,
                combining historical accuracy with stunning visual artistry to honor the
                courage and sacrifice of those who fought for freedom.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src="https://pixabay.com/get/g45d02dbf98e8d206d3e7ba2c693ffe94b40802b8d13a053499ed2a6be7cb47b4c0f2ae3411c28e09bcd1e8cd34753fc5.jpg"
                alt="Citadel La Ferrière in Haiti"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-red-600 px-6 py-4 rounded">
              <div className="text-white">
                <div className="text-4xl">1804</div>
                <div className="text-sm">Independence Declared</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
