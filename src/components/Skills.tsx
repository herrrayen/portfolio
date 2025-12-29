export default function Skills() {
  const skills = [
    { category: "Embedded Systems", items: ["Arduino", "ESP32/ESP8266", "Raspberry Pi", "STM32"] },
    { category: "Programming", items: ["C/C++", "Python", "MicroPython", "JavaScript"] },
    { category: "IoT & Protocols", items: ["MQTT", "HTTP/REST", "Wi-Fi", "Bluetooth"] },
    { category: "Tools & Platforms", items: ["VS Code", "PlatformIO", "Git", "Node-RED"] },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillSet) => (
            <div
              key={skillSet.category}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                {skillSet.category}
              </h3>
              <ul className="space-y-2">
                {skillSet.items.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center text-gray-700"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
