
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FeaturesSectionProps {
  features: Feature[];
  className?: string;
}

const FeaturesSection = ({ features, className }: FeaturesSectionProps) => {
  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8", className)}>
      {features.map((feature, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          viewport={{ once: true }}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 group hover:shadow-md transition-shadow"
        >
          <div className="w-16 h-16 mx-auto bg-gradient-to-r from-khum-primary/10 to-khum-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <div className="text-khum-primary">
              {feature.icon}
            </div>
          </div>
          <h3 className="text-xl font-medium mb-3 text-khum-primary text-center">{feature.title}</h3>
          <p className="text-gray-600 text-center">
            {feature.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default FeaturesSection;
