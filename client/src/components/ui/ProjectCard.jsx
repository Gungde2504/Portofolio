import { motion } from "framer-motion";
import { FolderIcon, GithubIcon, ExternalLinkIcon } from "../ui/icons";

export default function ProjectCard({ project, index, onOpen }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onClick={() => onOpen(project)}
      className="skill-card overflow-hidden cursor-pointer flex flex-col"
    >
      <div className="relative h-28 bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center overflow-hidden">
        {project.banner && (
          <img
            src={project.banner}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        )}
        <span className="absolute top-3 left-4 text-xs font-bold text-white bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-full z-10">
          {String(index + 1).padStart(2, "0")}
        </span>
        {!project.banner && <FolderIcon className="w-10 h-10 text-white/90" />}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-slate-700 dark:text-white mb-1.5">{project.title}</h3>
        <p className="text-sm text-slate-500 dark:text-gray-300 leading-relaxed mb-4 flex-1 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.stack.slice(0, 3).map((tech) => (
            <span key={tech} className="skill-pill">
              {tech}
            </span>
          ))}
          {project.stack.length > 3 && (
            <span className="skill-pill">+{project.stack.length - 3}</span>
          )}
        </div>

        <div className="flex gap-3 pt-3 border-t border-slate-200/60 dark:border-white/10">
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-slate-500 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
          ) : (
            <GithubIcon className="w-5 h-5 text-slate-300 dark:text-gray-600" />
          )}
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-slate-500 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors"
              aria-label="Live Demo"
            >
              <ExternalLinkIcon className="w-5 h-5" />
            </a>
          ) : (
            <ExternalLinkIcon className="w-5 h-5 text-slate-300 dark:text-gray-600" />
          )}
        </div>
      </div>
    </motion.div>
  );
}

