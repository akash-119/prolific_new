import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { X } from "lucide-react";

const categories = ["All", "Training Labs", "Events", "Infrastructure"];

const galleryImages = [
  { id: 1, category: "Training Labs", title: "PLC Training Lab" },
  { id: 2, category: "Training Labs", title: "Computer Lab" },
  { id: 3, category: "Events", title: "Placement Drive 2024" },
  { id: 4, category: "Infrastructure", title: "Reception Area" },
  { id: 5, category: "Training Labs", title: "Robotics Lab" },
  { id: 6, category: "Events", title: "Annual Convocation" },
  { id: 7, category: "Infrastructure", title: "Conference Room" },
  { id: 8, category: "Training Labs", title: "Automation Lab" },
  { id: 9, category: "Events", title: "Industry Seminar" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <Layout>
      <Helmet>
        <title>Office Gallery - Prolific Delhi | Our Infrastructure</title>
        <meta name="description" content="Explore Prolific Delhi's state-of-the-art training facilities, labs, and infrastructure. See our modern classrooms and advanced equipment." />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-primary py-20">
        <div className="container-section text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4"
          >
            Office Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-primary-foreground/80 max-w-2xl mx-auto"
          >
            Take a virtual tour of our world-class training facilities
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-section">
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted cursor-pointer"
                onClick={() => setSelectedImage(image.id)}
              >
                <div className="absolute inset-0 bg-gradient-primary flex items-center justify-center">
                  <span className="text-primary-foreground/80 text-lg font-medium">{image.title}</span>
                </div>
                <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-primary-foreground text-lg font-semibold">{image.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-primary-foreground hover:text-secondary"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <div className="max-w-4xl w-full aspect-video bg-gradient-primary rounded-2xl flex items-center justify-center">
            <span className="text-primary-foreground text-2xl">
              {galleryImages.find((img) => img.id === selectedImage)?.title}
            </span>
          </div>
        </motion.div>
      )}
    </Layout>
  );
}
