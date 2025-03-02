import { articles } from "@/components/Data";
import Link from "next/link";

export default function Articles() {
  return (
    <div id="articles" className="pt-12 sm:pt-16">
      <div  className="p-2 sm:p-6 bg-slate-900 text-white rounded-lg shadow-lg">
        <div className="flex justify-between border-b pb-3 mb-4">
          <h2 className="text-[14px] sm:text-[20px] font-semibold">Articles</h2>
          <h2 className="text-[14px] sm:text-[20px] font-semibold">Date Added</h2>
        </div>
        <div className="space-y-3">
          {articles.map((article, index) => (
            <div key={index} className="flex justify-between items-start p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition">
              <a href="" className="text-[13px] sm:text-[16px] hover:underline">{article.title}</a>
              <p className="text-[13px] sm:text-[16px] text-gray-400">{article.date}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 text-center">
          <Link
            href="/articles"
            className="text-gray-300 text-[13px] sm:text-[15px] font-semibold hover:underline"
          >
            Read more articles
          </Link>
        </div>
      </div>
    </div>
    
  )
};

