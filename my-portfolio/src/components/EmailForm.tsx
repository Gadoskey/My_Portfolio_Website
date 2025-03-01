"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, subject, message }),
      });

      const data = await res.json();
      if (data.success) {
        toast.success("Message sent successfully!", {
          className: "bg-green-500 text-white text-xs p-2 min-h-[30px] rounded-md shadow-md",
        });
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        toast.error("Failed to send message.", {
          className: "bg-red-500 text-white text-xs p-2 min-h-[20px]",
        });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Error sending email.");
    }

    setLoading(false);
  };

  return (
    <div>
      <form
        onSubmit={sendEmail}
        className="pt-2 max-w-md mx-auto p-6 shadow-md rounded-lg relative"
      >
        <h2 className="text-sm lg:text-[20px] text-white font-bold mb-4 text-center">
          Send Me a Message
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-2 text-[12px] lg:text-[16px] text-slate-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder:text-[14px]"
          required
        />

        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full p-3 mb-2 text-[12px] lg:text-[16px] text-slate-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder:text-[14px]"
          required
        />

        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full min-h-[75px] max-h-[100px] p-3 mb-1 text-[12px] lg:text-[16px] text-slate-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder:text-[14px]"
          required
        />

        <button
          type="submit"
          className="block w-fit py-1 px-3 bg-slate-600 text-white text-[11px] lg:text-[16px] font-semibold rounded-md hover:bg-slate-700"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
}
