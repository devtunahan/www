import { useState } from 'react';
import './App.css';

function App() {
  // State to manage the current language
  const [language, setLanguage] = useState('en');

  // Content in English and German
  const content = {
    en: {
      occupation: 'Software Developer',
      headerText: `Hi, studying Computer Science at JKU in Linz, I have a passion for designing and building web apps. I find joy in bringing ideas to life on the screen and love exploring the latest tech trends. Automating workflows to enhance efficiency is another area I enjoy diving into.
      I'm also fascinated by psychology, especially when it comes to general knowledge and self-improvement. This interest fuels my curiosity and helps me grow both personally and professionally.
      Feel free to explore my projects and reach out if you'd like to connect!`,
      techTitle: 'Tech, I am comfortable with',
      workTitle: 'Work',
      workItems: [
        'Managed 61 tests in the test pipeline, ensuring their smooth execution.',
        'Developed and successfully implemented 23 new tests in the pipeline using the C# .NET Test Framework.',
        'Enhanced test automation processes, significantly improving efficiency.',
        'Submitted 10 bug reports to support ongoing quality assurance.',
        'Ensured adherence to quality standards and best practices.',
      ],
      educationTitle: 'Education',
      educationItems: {
        bachelor: [
          'Data structures and algorithms 1, Electronics, Software development 1, Operating systems',
        ],
        matura: [
          'Software Development: OOP, data types, functions, interfaces, classes, data structures, networking, sockets, streams, threads, multithreading, JavaFX, JDBC',
          'Project Management: Requirements documentation, project handbook, diagrams, Agile methods',
          'Systems Engineering: Operating systems, processes/threads, deadlocks, memory management, file systems, Bash scripting, Arduino, decentralized systems, Raspberry Pi, full-stack web development (Vue.js, Node.js), virtual machines',
          'Media Technology: Video technology theory, HTML, CSS, JavaScript, Adobe Creative Cloud',
          'Networking: CCNA Routing & Switching, network configuration, Packet Tracer, Kali Linux, Wireshark',
          'Information Systems: Database systems, Microsoft SQL, normalization, GDPR, relational databases, ER diagrams, SAP, MongoDB',
        ],
      },
      contact: 'You can contact me via email',
      footer: 'All rights reserved',
    },
    de: {
      occupation: 'Software-Entwickler',
      headerText: `Hallo, ich studiere Informatik an der JKU in Linz und habe eine Leidenschaft für das Designen und Entwickeln von Web-Apps. Es bereitet mir Freude, Ideen auf dem Bildschirm zum Leben zu erwecken, und ich liebe es, die neuesten Technologietrends zu erkunden. Auch das Automatisieren von Workflows zur Effizienzsteigerung ist ein Bereich, in den ich gerne eintauche.
      Ich bin auch fasziniert von Psychologie, insbesondere im Bereich allgemeines Wissen und self improvement. Dieses Interesse befeuert meine Neugier und hilft mir, sowohl persönlich als auch beruflich zu wachsen.
      Du kannst auch meine Projekte erkunden oder mich anschreiben, wenn du gerne in Kontakt treten möchtest!`,
      techTitle: 'Technologien, mit denen ich vertraut bin',
      workTitle: 'Berufserfahrung',
      workItems: [
        '61 Tests in der Testpipeline verwaltet und deren reibungslose Ausführung sichergestellt.',
        '23 neue Tests in der Pipeline entwickelt und erfolgreich implementiert, unter Verwendung des C# .NET Test Frameworks.',
        'Testautomatisierungsprozesse verbessert und damit die Effizienz erheblich gesteigert.',
        '10 Fehlerberichte eingereicht, um die laufende Qualitätssicherung zu unterstützen.',
        'Einhaltung der Qualitätsstandards und Best Practices sichergestellt.',
      ],
      educationTitle: 'Bildung',
      educationItems: {
        bachelor: [
          'Datenstrukturen und Algorithmen 1, Elektronik, Softwareentwicklung 1, Betriebssysteme',
        ],
        matura: [
          'Softwareentwicklung: OOP, Datentypen, Funktionen, Schnittstellen, Klassen, Datenstrukturen, Netzwerke, Sockets, Streams, Threads, Multithreading, JavaFX, JDBC',
          'Projektmanagement: Anforderungsdokumentation, Projektleitfaden, Diagramme, Agile Methoden',
          'Systemtechnik: Betriebssysteme, Prozesse/Threads, Deadlocks, Speicherverwaltung, Dateisysteme, Bash-Skripting, Arduino, dezentrale Systeme, Raspberry Pi, Full-Stack-Webentwicklung (Vue.js, Node.js), virtuelle Maschinen',
          'Medientechnik: Theorie der Videotechnik, HTML, CSS, JavaScript, Adobe Creative Cloud',
          'Netzwerktechnik: CCNA Routing & Switching, Netzwerk-Konfiguration, Packet Tracer, Kali Linux, Wireshark',
          'Informationssysteme: Datenbanksysteme, Microsoft SQL, Normalisierung, DSGVO, relationale Datenbanken, ER-Diagramme, SAP, MongoDB',
        ],
      },
      contact: 'Du kannst mich per E-Mail kontaktieren',
      footer: 'Alle Rechte vorbehalten',
    },
  };

  // Function to switch language
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className="container">
      <div className="language-toggle">
        <button onClick={() => handleLanguageChange('en')} disabled={language === 'en'}>EN</button>
        <button onClick={() => handleLanguageChange('de')} disabled={language === 'de'}>DE</button>
      </div>
      <div className="name-container">
        <h2 className="name">Tunahan Karakaya</h2>
      </div>

      <p className="occupation">{content[language].occupation}</p>
      <p className="header-text">{content[language].headerText}</p>

      <h2>{content[language].techTitle}</h2>
      <div className="marquee marquee--8">
        <img className="marquee__item" src="/icons/c-sharp.png" width="50" height="50" alt="" />
        <img className="marquee__item" src="/icons/confluence.png" width="50" height="50" alt="" />
        <img className="marquee__item" src="/icons/creative-cloud.png" width="50" height="50" alt="" />
        <img className="marquee__item" src="/icons/git.png" width="50" height="50" alt="" />
        <img className="marquee__item" src="/icons/gnu-bash.png" width="50" height="50" alt="" />
        <img className="marquee__item" src="/icons/java.png" width="50" height="50" alt="" />
        <img className="marquee__item" src="/icons/jira.png" width="50" height="50" alt="" />
        <img className="marquee__item" src="/icons/letter-c.png" width="50" height="50" alt="" />
        <img className="marquee__item" src="/icons/mongodb.png" width="50" height="50" alt="" />
        <img className="marquee__item" src="/icons/social.png" width="50" height="50" alt="" />
        <img className="marquee__item" src="/icons/sql-server.png" width="50" height="50" alt="" />
        <img className="marquee__item" src="/icons/unity.png" width="50" height="50" alt="" />
      </div>

      <h2>{content[language].workTitle}</h2>
      <div className="work-item">
        <p className="left">Software Test Engineer</p>
        <p className="center">Fronius International</p>
        <p className="right">Jun 2023 – Feb 2024</p>
      </div>
      <div className="content">
        
          {content[language].workItems.map((item, index) => (
            <li key={index} className="content-list-item">{item}</li>
          ))}
        
      </div>

      <br />

      <h2>{content[language].educationTitle}</h2>
      <div className="education-item">
        <p className="left">Bachelor of Science, Informatics</p>
        <p className="center">JKU Linz</p>
        <p className="right">Mar 2024 - current</p>
      </div>
      <div className="content">
       
          {content[language].educationItems.bachelor.map((item, index) => (
            <li key={index} className="content-list-item">{item}</li>
          ))}
        
        <br />
        <br />
        <div className="education-item">
          <p className="left">Matura, Informationstechnologie</p>
          <p className="center">HTL Wels</p>
          <p className="right">Sept 2017 – Jun 2022</p>
        </div>
        <div className="content">
          
            {content[language].educationItems.matura.map((item, index) => (
              <li key={index} className="content-list-item">{item}</li>
            ))}
        </div>
      </div>

      <br />

      <h2>Contact me</h2>
      <p>{content[language].contact} <a href="mailto:me@tunahan.at">email</a></p>
      <footer>
        <div className="top-line"></div>
        <div className="footer-content">
          <span className="name-footer">Tunahan Karakaya</span>
          <span className="rights">{content[language].footer}</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
