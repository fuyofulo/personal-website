import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Personal Website",
      description: "Lorem ipsum",
      image: "/placeholder.svg",
      link: "#"
    },
    {
      title: "Leetcode Solver",
      description: "A web application that helps me practice and solve Leetcode problems more efficiently.",
      image: "/placeholder.svg",
      link: "#"
    },
    {
      title: "AI Chatbot",
      description: "A conversational AI chatbot that I'm developing to assist with various tasks and queries.",
      image: "/placeholder.svg",
      link: "#"
    }
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-serif">My Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-serif">
              Here are some of the projects I've been working on. From web development to artificial intelligence,
              I'm always exploring new technologies and ideas.
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
