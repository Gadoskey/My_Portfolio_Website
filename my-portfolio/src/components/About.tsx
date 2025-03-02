"use client";
import ScrollLink from "@/components/ScrollLink";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <header id="about" className="container mx-auto p-2 sm:p-4 text-center">
      <div className="flex flex-col gap-7 items-center justify-center">
        <h1 className="text-[19px] sm:text-[26px] sm:pt-2 font-bold text-center">Software Engineer &amp; Technical Writer</h1>
        <div className="w-[200px] h-[200px] overflow-hidden rounded-full border-[7px]">
          <Image
            src="/profile.jpg"
            alt="My Profile"
            width={300}
            height={300}
            className="object-cover"
            priority
          />
        </div>
        <p className="text-center text-[20px] sm:text-[30px]">
          Hi, i&apos;m Mustapha Opeyemi Yusuf. Software Engineer with a strong background in technical writing 
          and customer relations, bringing over two years of experience in developing user-focused solutions and enhancing 
          customer experiences.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-1 text-[14px] sm:text-[18px] justify-center items-center">
          <div className="cursor-pointer relative px-3 py-2 bg-slate-900 transform transition hover:scale-105 rounded-[16px] border border-slate-950 hover:bg-slate-950 flex items-center justify-center gap-2">
            <p className="relative  leading-none"> <ScrollLink to="contact" className="hover:text-white">Send Me a Message</ScrollLink> </p>
            <Image src="/message_img.png" alt="Send Me a Message" width={20} height={20} className="relative border border-1 rounded-full object-fill" />
          </div>

          <div className="cursor-pointer relative px-3 py-2 bg-slate-900 transform transition hover:scale-105 rounded-[16px] border border-slate-950 hover:bg-slate-950 flex items-center justify-center gap-1">
            <Link href="/about" className="absolute inset-0"></Link>
            <p className="relative leading-none"> <ScrollLink to="certificates">Download Certificates</ScrollLink> </p>
            <Image src="/download_img.png" alt="Download Certificates" width={20} height={20} className="relative border border-1 rounded-full object-fill" />
          </div>

          <div className="flex items-center justify-center gap-6">
            <a href="https://github.com/Gadoskey" target="_blank">
              <Image src="/github.png" alt="GitHub" width={30} height={30} className="border-2 rounded-full object-fill transform transition hover:scale-105" />
            </a>
            <a href="https://www.linkedin.com/in/mustapha-ope?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">
              <Image src="/linkedin.png" alt="GitHub" width={30} height={30} className="border-2 rounded-full object-fill transform transition hover:scale-105" />
            </a>
            <a href="https://x.com/ym_opeyemi?s=21&t=8pdY6a_bpCDOsyufwS-n8w" target="_blank" >
              <Image src="/x.png" alt="GitHub" width={30} height={30} className="bg-white border-2 rounded-full object-fill transform transition hover:scale-105" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
