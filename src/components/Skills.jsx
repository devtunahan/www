import React from 'react';

const icons = [
  'Confluence', 'Git', 'GitHub', 'Bash', 'Java', 'Jira',
  'C', 'MongoDB', 'Microsoft-SQL-Server', 'Unity', 'Docker', 'Xcode', 'React', 'Node.js',
  'Visual-Studio-Code-(VS-Code)', 'Arduino', 'CSS3', 'Figma', 'HTML5', 'IntelliJ-IDEA',
  'JSON', 'JavaScript', 'Jenkins', 'Linux', 'MySQL', 'Postman', 'Raspberry-Pi', 'SSH'
];

function Skills() {
  return (
    <div className="relative bg-gray-300 p-4 rounded-lg flex-grow basis-[60%] min-w-[150px] h-40 overflow-hidden flex items-center justify-center">
      <div className="w-full flex flex-col gap-4">
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee-right whitespace-nowrap">
            {icons.concat(icons).map((icon, index) => (
              <img
                key={`icon1-${index}`}
                src={`/icons/${icon}.svg`}
                alt={icon}
                className="h-12 w-12 mx-2"
              />
            ))}
          </div>
        </div>
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee-left whitespace-nowrap">
            {icons.concat(icons).map((icon, index) => (
              <img
                key={`icon2-${index}`}
                src={`/icons/${icon}.svg`}
                alt={icon}
                className="h-12 w-12 mx-2"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;