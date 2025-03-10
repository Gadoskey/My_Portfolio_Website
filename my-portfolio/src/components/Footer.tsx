import EmailForm from "@/components/EmailForm";

export default function Footer() {
  return (
    <div id="contact" className="pt-12 sm:pt-16">
      <footer className="bg-slate-900 mx-auto p-4 text-center">
        < EmailForm />
        <div id="contact" className="text-center text-gray-400 text-[12px] lg:text-[14px] mt-12">
          © {new Date().getFullYear()} Yusuf Mustapha Opeyemi. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
