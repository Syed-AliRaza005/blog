// // import { client } from '@/sanity/lib/client';
// // import { blog } from '../../../sanity/schemaTypes/blog';
// // import { groq } from 'next-sanity';
// // import Image from 'next/image';
// // import { urlFor } from '@/sanity/lib/image';
// // interface blogDetail{
// //     params:Promise<{slug:string}>
// // }
// // interface Blog{
// //     title: string,
// //     author: string,
// //     description: string,
// //     date: string,
// //    image: string,
// // //    slug:{
// // //     _type:"slug"
// // //     current: string;
// // // } 
// //   }
  
// // async function getBlog(slug:string):Promise<Blog|null>{
// //     return client.fetch(
// //         groq`*[_type=="blog" && slug.current==$slug][0]{title, description,image, date, author }`,
// //         {slug}
// //     )
// //     }
// // export default async function ProductPage({ params }: blogDetail) {
// //     const { slug } = await params;
// //     const blog = await getBlog(slug);
// //     return(
  
// //     <div>
// //                 {blog?.image && (
// //                     <Image
// //                     src={urlFor(blog.image).url()}
// //                     alt={blog.title}
// //                     width={50}
// //                     height={50}/>
// //                 )}
// //                 <h1 className=''>Title:"{blog?.title}"</h1>
// //                 <p >Description{blog?.description}</p>
// //                 <p>Data of Publish: {blog?.date}</p>
// //                 <p>Author Name: {blog?.author}</p>

               

// //     </div>
// //     )

// // // }

// // import Header from "@/app/components/header";
// // import { client } from "@/sanity/lib/client";
// // import { urlFor } from "@/sanity/lib/image";
// // import Footer from "@/app/components/footer";
// // import { groq } from "next-sanity";
// // import Image from "next/image";
// // import React from "react";
// // import { blogType } from "@/types/blogType";

// // interface ProductPageProps {
// //     params: Promise<{ slug: string }>;
// // }
// // async function getblog(slug: string): Promise<blogType | null> {
// //     return client.fetch(
// //         groq`*[_type=="blog" && slug.current==$slug][0] {title, description, date, image, author}`,
// //         { slug }
// //     );

// // }
// // export default async function ProductPage({ params }: ProductPageProps) {
// //     const { slug } = await params;
// //     const product = await getblog(slug);
   
// //     return (
// //         <div className="min-h-screen bg-gray-50">
// //             <Header />

// //             <div className="max-w-6xl mx-auto p-6">
// //                 <h1 className="text-center font-extrabold text-4xl text-gray-800 mb-6">
// //                     Product Details of "{product?.title}"
// //                 </h1>

// //                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
// //                     {product?.image && (
// //                         <Image
// //                             className="w-full h-full object-cover rounded-lg shadow-md"
// //                             src={urlFor(product.image).url()}
// //                             alt={product.title}
// //                             width={400}
// //                             height={400}
// //                         />
// //                     )}

// //                     <div className="space-y-4">
// //                         <h2 className="text-2xl font-semibold text-gray-800">
// //                             Product Name: {product?.title}
// //                         </h2>
// //                         <p className="text-xl text-gray-700 font-medium">
// //                             Price: ${product?.date}
// //                         </p>
// //                         <p className="text-xl text-gray-700 font-medium">
// //                             Discount: {product?.description}%
// //                         </p>
// //                         <p className="text-gray-700">
// //                             {product?.author }
// //                         </p>
                                          
// //                     </div>
// //                 </div>

// //                <hr className="my-8 border-gray-300" />

// //                 <Footer />
// //             </div>
// //         </div>
// //     );
// // // }

// // "use client";
// // import { client } from "@/sanity/lib/client";
// // import { urlFor } from "@/sanity/lib/image";
// // import { allblog, slugblog } from "@/sanity/lib/quaries";
// // import { blogType } from "@/types/blogType";
// // import Link from "next/link";
// // import { useEffect, useState } from "react";

// // const Page = () => {
// //   const [blog, setBlog] = useState<blogType[]>([]);

// //   useEffect(() => {
// //     async function fetchBlog() {
// //       try {
// //         const fetchedBlog: blogType[] = await client.fetch(slugblog);
// //         setBlog(fetchedBlog);
// //       } catch (error) {
// //         console.error("Error fetching blog data:", error);
// //       }
// //     }
// //     fetchBlog();
// //   }, []);

// //   return (
// //     <div className="max-w-6xl mx-auto p-6 h-max w-screen">
// //       <h1 className="text-4xl font-extrabold text-center my-8 text-gray-800">Latest Blogs</h1>
// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
// //         {blog.map((b, i) => (
// //           <div key={i} className="bg-white shadow-lg rounded-xl overflow-hidden relative group hover:shadow-2xl transition duration-300 transform hover:scale-105">
// //             {b.slug?.current && (
// //               <Link href={`/blog/${b.slug.current}`}>
// //                 <div className="relative w-full h-48 overflow-hidden">
// //                   <img
// //                     src={urlFor(b.image).url()}
// //                     alt={b.title}
// //                     className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
// //                   />
// //                 </div>
// //                 <div className="p-4">
// //                   <h2 className="text-xl font-semibold text-gray-900">{b.title}</h2>
// //                 </div>
// //                 <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 text-white text-center">
// //                   <h2 className="text-2xl font-semibold">{b.title}</h2>
// //                   <p className="mt-2 text-sm font-medium">✍ {b.author} | 📅 {b.date}</p>
// //                 </div>
// //               </Link>
// //             )}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Page;

// import Header from "@/app/components/header";
// import { client } from "@/sanity/lib/client";
// import { groq } from "next-sanity";
// import React from "react";
// import Footer from "@/app/components/footer";
// import { urlFor } from "@/sanity/lib/image";

// interface BlogPageProps {
//     params: Promise<{ slug: string }>;
// }

// async function getBlogPost(slug: string): Promise<any | null> {
//     return client.fetch(
//         groq`*[_type=="blog" && slug.current==$slug][0] {title, description, author, date,image}`,
//         { slug }
//     );
// }

// export default async function BlogPage({ params }: BlogPageProps) {
//     const { slug } = await params;
//     const blogPost = await getBlogPost(slug);

//     return (
//         <div className="min-h-screen bg-gray-50">
//             <Header />
//         <div className="relative w-full h-48 overflow-hidden">
//                           <img
//                             src={urlFor(blogPost?.image).url()}
//                             alt={blogPost?.title}
//                             className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
//                           />
//                         </div>
//             <div className="max-w-6xl mx-auto p-6">
//                 <h1 className="text-center font-extrabold text-4xl text-gray-800 mb-6">
//                     {blogPost?.title}
//                 </h1>

//                 <div className="text-gray-700">
//                     <p>By {blogPost?.author}</p>
//                     <p>Published on {new Date(blogPost?.date).toLocaleDateString()}</p>
//                     <div className="mt-4">
//                         {blogPost?.description}
//                     </div>
//                 </div>

//                 <hr className="my-8 border-gray-300" />

//                 <Footer />
//             </div>
//         </div>
//     );
// }

import Header from "@/app/components/header";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import React from "react";
import Footer from "@/app/components/footer";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

interface BlogPageProps {
    params: Promise<{ slug: string }>;
}

async function getBlogPost(slug: string): Promise<any | null> {
    return client.fetch(
        groq`*[_type=="blog" && slug.current==$slug][0] {title, description, author, date, image}`,
        { slug }
    );
}

export default async function BlogPage({ params }: BlogPageProps) {
    const { slug } = await params;
    const blogPost = await getBlogPost(slug);

    return (
        <div className="min-h-screen bg-gray-100">
            <Header />

            <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
                {blogPost?.image && (
                    <div className="w-full h-full overflow-hidden rounded-lg">
                        <img
                            src={urlFor(blogPost.image).url()}
                            alt={blogPost?.title}
                            className="w-full h-full "
                        />
                    </div>
                )}

                <h1 className="text-center text-3xl font-extrabold text-gray-900 mt-6">
                    {blogPost?.title}
                </h1>

                <div className="text-gray-600 text-center mt-2">
                    <p>By <span className="font-semibold">{blogPost?.author}</span></p>
                    <p>Published on {new Date(blogPost?.date).toLocaleDateString()}</p>
                </div>

                <div className="mt-6 text-gray-800 leading-relaxed">
                    {blogPost?.description}
                </div>

                <hr className="my-8 border-gray-300" />

                <h2 className="text-2xl font-bold text-gray-900">Related Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <Link href="/" className="block p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
                        <h3 className="text-lg font-semibold">Sample Blog 1</h3>
                        <p className="text-gray-600">Brief description of another post...</p>
                    </Link>
                    <Link href="/" className="block p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
                        <h3 className="text-lg font-semibold">Sample Blog 2</h3>
                        <p className="text-gray-600">Brief description of another post...</p>
                    </Link>
                </div>
            </div>

            <Footer />
        </div>
    );
}
