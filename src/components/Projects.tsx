export default function Projects() {
  const projects = [
    {
      title: "Smart Home Automation",
      description: "IoT-based home automation system with voice control and mobile app integration",
      tech: ["ESP32", "MQTT", "Node-RED", "React"],
      link: "#",
    },
    {
      title: "Environmental Monitor",
      description: "Real-time environmental monitoring system with cloud data logging",
      tech: ["Arduino", "Sensors", "Python", "Firebase"],
      link: "#",
    },
    {
      title: "Wireless Sensor Network",
      description: "Multi-node sensor network for industrial monitoring applications",
      tech: ["ESP8266", "MQTT", "InfluxDB", "Grafana"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="text-blue-600 hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
