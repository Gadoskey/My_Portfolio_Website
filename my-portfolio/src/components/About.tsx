"use client";
import ScrollLink from "@/components/ScrollLink";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <header id="about" className="container mx-auto p-4 text-center">
      <div className="flex flex-col gap-2 sm:gap-4 items-center justify-center">
        <h1 className="text-[13px] sm:text-[20px] font-bold text-center">Software Engineer &amp; Technical Writer</h1>
        <Image src="/profile.jpg" alt="My Profile" className="border-4 rounded-full w-32 h-32 object-fill" />
        <p className="text-center text-[11px] sm:text-[18px]">
          Hi, i&apos;m Opeyemi. Software Engineer with a strong background in technical writing 
          and customer relations, bringing over two years of experience in developing user-focused solutions and enhancing 
          customer experiences.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-1 sm:gap-4 text-[12px] justify-center items-center">
          <div className="cursor-pointer relative p-1 sm:p-1.5 bg-slate-900 transform transition hover:scale-105 rounded-[16px] border border-slate-950 hover:bg-slate-950 flex items-center justify-center gap-2">
            <p className="relative text-[10px] sm:text-sm leading-none"> <ScrollLink to="contact" className="hover:text-white">Send Me a Message</ScrollLink> </p>
            <Image src="/message_img.png" alt="Send Me a Message" className="relative border border-1 rounded-full w-3.5 h-3.5 object-fill" />
          </div>

          <div className="cursor-pointer relative p-1 sm:p-1.5 bg-slate-900 transform transition hover:scale-105 rounded-[16px] border border-slate-950 hover:bg-slate-950 flex items-center justify-center gap-1">
            <Link href="/about" className="absolute inset-0"></Link>
            <p className="relative text-[10px] sm:text-sm leading-none">Download Certificates</p>
            <Image src="/download_img.png" alt="Download Certificates" className="relative border border-1 rounded-full w-3.5 h-3.5 object-fill" />
          </div>

          <div className="flex items-center justify-center gap-4">
            <a href="https://github.com/Gadoskey" target="_blank">
              <Image src="/github.png" alt="GitHub"  className="border-2 rounded-full w-5 h-5 object-fill transform transition hover:scale-105" />
              </a>
            <a href="https://www.linkedin.com/in/mustapha-ope?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">
              <Image src="/linkedin.png" alt="GitHub" className="border-2 rounded-full w-5 h-5 object-fill transform transition hover:scale-105" />
              </a>
            <a href="https://x.com/ym_opeyemi?s=21&t=8pdY6a_bpCDOsyufwS-n8w" target="_blank" >
              <Image src="/x.png" alt="GitHub" className="bg-white border-2 rounded-full w-5 h-5 object-fill transform transition hover:scale-105" />
              </a>
          </div>
        </div>
      </div>
    </header>
  );
}
