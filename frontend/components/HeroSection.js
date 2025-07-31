// "use client";

// import React from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselPrevious,
//   CarouselNext,
// } from "@/components/ui/carousel";
// import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

// export default function HeroSection({ blogs }) {
//   return (
//     <section className="w-full py-10">
//       <div className="max-w-6xl mx-auto px-4">
//         <h1 className="text-4xl font-bold text-center mb-8">Trending Blogs</h1>
//         <Carousel>
//           <CarouselContent>
//             {blogs.map((blog, index) => (
//               <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
//                 <Card className="overflow-hidden h-full">
//                   <img
//                     src={blog.image}
//                     alt={blog.title}
//                     className="w-full h-48 object-cover"
//                   />
//                   <CardContent className="p-4 flex flex-col justify-between h-full">
//                     <div>
//                       <CardTitle className="text-lg font-semibold mb-2">{blog.title}</CardTitle>
//                       <CardDescription>Explore the latest insights.</CardDescription>
//                     </div>
//                     <a href={blog.link} target="_blank" rel="noopener noreferrer" className="mt-4">
//                       <Button className="w-full">Read More</Button>
//                     </a>
//                   </CardContent>
//                 </Card>
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//           <CarouselPrevious />
//           <CarouselNext />
//         </Carousel>
//       </div>
//     </section>
//   );
// }


"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HeroSection({ blogs }) {
  const [active, setActive] = useState(0);
  const total = blogs.length;
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, [total]);

  useEffect(() => {
    const scrollTo = document.querySelector(`#carousel-item-${active}`);
     scrollTo?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });

  }, [active]);

  return (
    <section className="w-full py-12 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white">
          Trending Blogs
        </h1>
        <div className="relative">
          <Carousel className="overflow-hidden">
            <CarouselContent className="flex gap-4">
              {blogs.map((blog, index) => (
                <CarouselItem
                  key={index}
                  id={`carousel-item-${index}`}
                  className="md:basis-1/2 lg:basis-1/3 transition-transform"
                >
                  <Card className="overflow-hidden h-full shadow-md hover:shadow-xl transition duration-300 hover:scale-105 cursor-pointer">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-52 object-cover transition-transform duration-300"
                    />
                    <CardContent className="p-4 flex flex-col justify-between h-full">
                      <div>
                        <CardTitle className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                          {blog.title}
                        </CardTitle>
                        <CardDescription className="text-gray-500 dark:text-gray-300">
                          Explore the latest insights.
                        </CardDescription>
                      </div>
                      <a
                        href={blog.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4"
                      >
                        <Button className="w-full">Read More</Button>
                      </a>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      
    </section>
    
  );
}
