import MotionDiv from './MotionDiv'; // Import the client-side component
import Image from 'next/image';

const projects = [
  { 
    title: 'GIAIC Clone', 
    description: 'A simple description of the project 1. This project focuses on frontend development.', 
    image: '/giaic.jpeg', 
    link: 'https://example.com/project1' 
  },
  { 
    title: 'AR Developers Web', 
    description: 'Description for project 2. This project involves backend technologies and APIs.', 
    image: '/ar.jpeg', 
    link: 'https://ardevelopers.great-site.net/' 
  },
  { 
    title: 'Dif Exam Web', 
    description: 'This project uses modern frameworks and libraries for building full-stack applications.', 
    image: '/dif.jpeg', 
    link: 'https://dif-exam02.vercel.app/' 
  },
  // Add more projects here
];

export default function Projects() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-12 text-blue-400">My Projects</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <MotionDiv
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              {/* Project Image */}
              <div className="mb-4">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  width={400} // Set appropriate width
                  height={300} // Set appropriate height
                  className="w-full h-48 object-cover rounded-md"
                  priority={index === 0} // Prioritize loading the first project image
                />
              </div>
              
              {/* Project Title */}
              <h3 className="text-xl font-semibold text-blue-300 mb-4">{project.title}</h3>
              
              {/* Project Description */}
              <p className="text-lg text-gray-300 mb-4">{project.description}</p>
              
              {/* Project Link */}
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-2 text-blue-400 hover:text-blue-600 transition-all"
              >
                View Project
              </a>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
