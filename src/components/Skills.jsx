import React from 'react';

const icons = [
  'Confluence', 'Git', 'GitHub', 'Bash', 'Java', 'Jira',
  'C', 'MongoDB', 'Microsoft-SQL-Server', 'Unity', 'Docker', 'Xcode', 'React', 'Node.js',
  'Visual-Studio-Code-(VS-Code)', 'Arduino', 'CSS3', 'Figma', 'HTML5', 'IntelliJ-IDEA',
  'JSON', 'JavaScript', 'Jenkins', 'Linux', 'MySQL', 'Postman', 'Raspberry-Pi', 'SSH'
];

function Skills() {
  return (
    <div className="relative bg-gray-300 p-4 rounded-lg flex-grow basis-[60%] min-w-[150px] h-40 overflow-hidden">
      <div className="absolute inset-0 flex items-center">
        <div className="flex animate-marquee whitespace-nowrap">
          {icons.map((icon, index) => (
            <img
              key={`icon1-${index}`}
              src={`/icons/${icon}.svg`}
              alt={icon}
              className="h-16 w-16 mx-4"
            />
          ))}
        </div>
        <div className="flex animate-marquee2 whitespace-nowrap">
          {icons.map((icon, index) => (
            <img
              key={`icon2-${index}`}
              src={`/icons/${icon}.svg`}
              alt={icon}
              className="h-16 w-16 mx-4"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;