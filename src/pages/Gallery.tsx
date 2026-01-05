import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { X } from "lucide-react";
import heroAutomation from "@/assets/hero-automation-lab.jpg";
import heroStudents from "@/assets/hero-students-plc.jpg";
import heroIndustry from "@/assets/hero-industry-4.jpg";
import heroCenter from "@/assets/hero-training-center.jpg";

const categories = ["All", "Training Labs", "Events", "Infrastructure"];

const galleryImages = [
  { id: 1, src: heroAutomation, title: "PLC Training Lab", category: "Training Labs" },
  { id: 2, src: heroStudents, title: "Hands-on Training Session", category: "Training Labs" },
  { id: 3, src: heroIndustry, title: "Industrial Automation Setup", category: "Infrastructure" },
  { id: 4, src: heroCenter, title: "Modern Computer Lab", category: "Infrastructure" },
  { id: 5, src: heroAutomation, title: "SCADA Workshop", category: "Events" },
  { id: 6, src: heroStudents, title: "Student Practical Session", category: "Training Labs" },
  { id: 7, src: heroCenter, title: "Conference Room", category: "Infrastructure" },
  { id: 8, src: heroIndustry, title: "Robotics Lab", category: "Training Labs" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-4"
          >
            Office Gallery
          </motion.h1>
          <p className="text-primary-foreground/80 text-lg">
            Take a virtual tour of our state-of-the-art training facilities
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative overflow-hidden rounded-xl aspect-square">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-primary-foreground font-medium">{image.title}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 p-2 bg-card/10 rounded-full text-card hover:bg-card/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-[80vh] rounded-xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Gallery;
