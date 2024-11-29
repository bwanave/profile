import Image from 'next/image'
import { Linkedin } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Bharat Wanave</h1>
          <p className="text-xl">Lead Java Developer | SaaS Product Specialist</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700">
            With over 11 years of hands-on experience as a Java Developer, I specialize in crafting large-scale distributed applications. 
            I'm passionate about pushing boundaries and delivering high-quality, scalable software solutions.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {['Java', 'AWS', 'SpringBoot', 'ElasticSearch', 'Kafka', 'RDBMS', 'Data Structures', 'Algorithms', 'System Design'].map((skill) => (
              <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Lead Developer</h3>
            <p className="text-gray-600 mb-4">SaaS Product Design and Development Team</p>
            <p className="text-gray-700">
              Currently serving as a lead developer in a dynamic SaaS product design and development team, 
              architecting innovative solutions to complex problems and delivering scalable software solutions.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <a 
            href="https://www.linkedin.com/in/bwanave" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            <Linkedin className="mr-2" />
            Connect on LinkedIn
          </a>
        </section>
      </main>

      <footer className="bg-gray-200 py-4 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-600">
          © {new Date().getFullYear()} Bharat Wanave. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

