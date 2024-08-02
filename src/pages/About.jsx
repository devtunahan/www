import React from 'react';

function About() {
  return (
    <div className="mt-8 mx-auto p-6 max-w-2xl overflow-x-hidden">
      <section className="text-left mb-12">
        <p className="text-2xl font-semibold text-gray-600">About me</p>
        <h1 className="text-4xl font-bold text-gray-800 mt-2">Hi, I'm Tunahan Karakaya</h1>
        <p className='text-gray-400'>Updated at 08/02/2024</p>
        <p className="mt-6 text-gray-700 leading-relaxed">
          Currently enrolled as a Computer Science student at JKU in Linz, I have a passion for designing and building web apps. I find joy in bringing ideas to life on the screen and love exploring the latest tech trends. Automating workflows to enhance efficiency is another area I enjoy diving into.
          I'm also fascinated by psychology, especially when it comes to general knowledge and self-improvement. This interest fuels my curiosity and helps me grow both personally and professionally.
          Feel free to explore my projects and reach out if you'd like to <a className="text-black underline" href="mailto:me@tunahan.at">connect</a>!
        </p>
      </section>

      <section className="py-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Work</h2>
        <div className="pb-8">
          <div className="flex items-center mb-6">
            <p className="text-gray-800 text-base flex-1 text-left">Software Test Engineer</p>
            <div className="border-l border-gray-300 h-8 mx-4"></div> {/* Vertical Separator */}
            <p className="text-gray-800 text-base flex-1 text-center">Fronius International</p>
            <div className="border-l border-gray-300 h-8 mx-4"></div> {/* Vertical Separator */}
            <p className="text-gray-800 text-base flex-1 text-right">06/2023 – 02/2024</p>
          </div>
          <ul className="list-disc list-inside text-gray-800 space-y-4 mb-8">
            <li>Managed 61 tests in the test pipeline, ensuring their smooth execution.</li>
            <li>Developed and successfully implemented 23 new tests in the pipeline using the C# .NET Test Framework.</li>
            <li>Enhanced test automation processes, significantly improving efficiency.</li>
            <li>Submitted 10 bug reports to support ongoing quality assurance.</li>
            <li>Ensured adherence to quality standards and best practices.</li>
          </ul>
        </div>

        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Education</h2>
        <div className="pb-8">
          <div className="flex items-center mb-6">
            <p className="text-gray-800 text-base flex-1 text-left">BSc, Computer Science</p>
            <div className="border-l border-gray-300 h-8 mx-4"></div> {/* Vertical Separator */}
            <p className="text-gray-800 text-base flex-1 text-center">JKU Linz</p>
            <div className="border-l border-gray-300 h-8 mx-4"></div> {/* Vertical Separator */}
            <p className="text-gray-800 text-base flex-1 text-right">03/2024 - current</p>
          </div>
          <ul className="list-disc list-inside text-gray-800 space-y-4 mb-8">
            <li>Data structures and algorithms 1, Electronics, Software development 1, Operating systems</li>
          </ul>
        </div>

        <div className="pb-8">
          <div className="flex items-center mb-6">
            <p className="text-gray-800 text-base flex-1 text-left">Matura, Informatics</p>
            <div className="border-l border-gray-300 h-8 mx-4"></div> {/* Vertical Separator */}
            <p className="text-gray-800 text-base flex-1 text-center">HTL Wels</p>
            <div className="border-l border-gray-300 h-8 mx-4"></div> {/* Vertical Separator */}
            <p className="text-gray-800 text-base flex-1 text-right">09/2017 – 06/2022</p>
          </div>
          <ul className="list-disc list-inside text-gray-800 space-y-4">
            <li><b>Software Development:</b> OOP, data types, functions, interfaces, classes, data structures, networking, sockets, streams, threads, multithreading, JavaFX, JDBC</li>
            <li><b>Project Management:</b> Requirements documentation, project handbook, diagrams, Agile methods</li>
            <li><b>Systems Engineering:</b> Operating systems, processes/threads, deadlocks, memory management, file systems, Bash scripting, Arduino, decentralized systems, Raspberry Pi, full-stack web development (Vue.js, Node.js), virtual machines</li>
            <li><b>Media Technology:</b> Video technology theory, HTML, CSS, JavaScript, Adobe Creative Cloud</li>
            <li><b>Networking:</b> CCNA Routing & Switching, network configuration, Packet Tracer, Kali Linux, Wireshark</li>
            <li><b>Information Systems:</b> Database systems, Microsoft SQL, normalization, GDPR, relational databases, ER diagrams, SAP, MongoDB</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default About;
