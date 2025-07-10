import { motion } from "framer-motion";
import { Dribbble, Figma, Instagram, Linkedin, Twitter } from "lucide-react";
import ButtonGetInTouch from "./ui/ButtonGetInTouch";



export default function Footer() {
  return (
    <footer className="mt-32">
      <div className="flex flex-col gap-12">
      <h1 className="text-4xl md:text-6xl uppercase font-light text-center text-foreground mt-12 max-w-4xl mx-auto">
        Let’s work together
      </h1>
      <div className="w-fit mx-auto">
        <ButtonGetInTouch />
      </div>
      </div>
    <div className="border-t border-purple-500/10 py-6 bg-gradient-to-b from-background to-muted/20 backdrop-blur-sm mt-12">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-xs text-muted-foreground text-center md:text-left"
            whileHover={{ scale: 1.01 }}
          >
            BKdesigner  © 2016 – 2025 All rights reserved
          </motion.p>

          <div className="flex items-center space-x-4 mt-2 mb-3 order-first md:order-none">
            <a href="/"><Figma /></a>
            <a href="/"><Instagram/></a>
            <a href="/"><Linkedin /></a>
            <a href="/"><Twitter /></a>
            <a href="/"><Dribbble /></a>
          </div>
          

          <motion.p
            className="text-xs text-muted-foreground mt-2 md:mt-0 text-center md:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
          >
            Terms & ConditionsPrivacy & Cookies Policy
          </motion.p>
        </motion.div>
      </div>
    </div>
    </footer>
  );
}
