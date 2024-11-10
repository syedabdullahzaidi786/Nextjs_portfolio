import MotionDiv from './MotionDiv'; // Ensure this is correct
import Image from 'next/image';

const skills = ['React', 'Node.js', 'TypeScript', 'GraphQL', 'Python', 'AWS'];

export default function About() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 text-center">

        {/* Profile Picture */}
        <div className="flex justify-center items-center my-12">
          <div className="relative w-40 h-40">
            <Image
              src="/my.jpg"
              alt="Profile Picture"
              width={160}
              height={160}
              className="w-full h-full object-cover rounded-full border-4 border-blue-400"
            />
          </div>
        </div>

        {/* About Me Description */}
        <MotionDiv initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <h1 className="text-4xl font-bold mb-12 text-blue-400">About Me</h1>
          <p className="text-lg mb-6 text-gray-300">
            With over 5 years of experience in web development, I specialize in creating scalable, 
            efficient, and visually appealing applications. My expertise spans across the full stack, 
            from responsive front-end designs to robust back-end architectures.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            I am constantly exploring new technologies and methodologies to stay at the forefront 
            of the ever-evolving tech landscape. My goal is to deliver solutions that not only meet 
            but exceed client expectations.
          </p>
        </MotionDiv>

        {/* Skills Section */}
        <MotionDiv initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
          <div className="mt-20">
            <h2 className="text-3xl font-semibold text-blue-400 mb-8">My Skills</h2>
            <div className="skills-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <MotionDiv
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="skill-card bg-gray-700 p-6 rounded-lg text-center shadow-lg transition-transform duration-300 hover:scale-105 hover:rotate-1">
                    <p className="text-lg font-semibold text-blue-300">{skill}</p>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
