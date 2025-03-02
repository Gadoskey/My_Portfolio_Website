import Articles from "@/components/Articles";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certificates from "@/components/Certificates";


export default function Body() {
  return (
    <main className="w-full sm:w-2/3 mt-4 mx-auto p-4 text-center">
      <Articles />
      <Projects />
      <Skills />
      <Certificates />
    </main>
  );
}
