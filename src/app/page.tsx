"use client";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { allblog } from "@/sanity/lib/quaries";
import { blogType } from "@/types/blogType";
import Link from "next/link";
import { useEffect, useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";

const Page = () => {
  const [blog, setBlog] = useState<blogType[]>([]);

  useEffect(() => {
    async function fetchBlog() {
      try {
        const fetchedBlog: blogType[] = await client.fetch(allblog);
        setBlog(fetchedBlog);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    }
    fetchBlog();
  }, []);

  return (
    <div>
    <Header/>
    <div className="max-w-6xl mx-auto p-6 h-max w-screen">
    
      <h1 className="text-4xl font-extrabold text-center my-8 text-gray-800">Latest Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {blog.map((b, i) => (
          <div key={i} className="bg-white shadow-lg rounded-xl overflow-hidden relative group hover:shadow-2xl transition duration-300 transform hover:scale-105">
            {b.slug?.current && (
              <Link href={`/blog/${b.slug.current}`}>
                <div className="relative w-full h-48 overflow-hidden">
                  <img
                    src={urlFor(b.image).url()}
                    alt={b.title}
                    className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-900">{b.title}</h2>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 text-white text-center">
                  <h2 className="text-2xl font-semibold">{b.title}</h2>
                  <p className="mt-2 text-sm font-medium">✍ {b.author} | 📅 {b.date}</p>
                </div>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Page;