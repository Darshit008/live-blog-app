'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // shadcn/ui
import { Separator } from "@/components/ui/separator";

export default function AboutSection() {
  return (
    <section className="bg-gray-100 py-12" id="about">
      <div className="container  px-4 mx-auto ">
        <Card className="bg-white shadow-lg border-0 ">
          <CardHeader>
            <CardTitle className="text-pink-800 text-3xl font-bold mb-2">
              About Our Blog
            </CardTitle>
            <Separator className="bg-pink-800 h-1 w-16 mb-4" />
          </CardHeader>
          <CardContent className="space-y-6 text-gray-800">
            <p>
              <span className="font-semibold text-pink-800">Axis Max Life Insurance</span>, formerly known as Max Life Insurance, is a leading life insurer in India—a joint venture between Max Financial Services (80%) and Axis Bank (20%), operating successfully since 2001. Through a multi-channel distribution network of 405 branches and over two decades of customer-focused service, we’ve built trust by offering protection and long-term savings solutions that evolve with your life stages.
            </p>
            <p>
              This blog is designed to empower you with knowledge and clarity. From demystifying different types of insurance plans—like term, ULIPs, endowment, and retirement—to explaining claims, regulatory changes, and financial planning strategies, our aim is to help you make well-informed decisions unburdened by jargon.
            </p>
            <p>
              At Axis Max Life, we’re driven by <span className="font-semibold text-pink-800">"Double Bharosa"</span>—the combined promise of Max Life’s stability and Axis Bank’s credibility. With a 99.70% death claims paid ratio, ₹2,191,857 Cr in sum assured (individual), and ₹175,072 Cr in assets under management in FY 2024‑25, we deliver on that promise year after year.
            </p>
            <p>
              Our vision is to be India’s most admired life insurance company, anchored by honest practices, tailored solutions, and a mission to serve the long-term financial needs of individuals and families. Through this blog, you'll gain insights into insurance planning, risk management, retirement readiness, and much more—all backed by real data and customer experiences.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-pink-800">
              <h3 className="text-pink-800 font-semibold mb-2">Who this blog is for:</h3>
              <p>
                Individuals and families seeking financial protection, savings growth, or retirement solutions—whether you’re new to insurance or reviewing your current coverage.
              </p>
              <h3 className="text-pink-800 font-semibold mt-4 mb-2">What you’ll find here:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Clear explainers on life, term, ULIP, savings, and retirement plans</li>
                <li>Tips for reducing premiums and filing seamless claims</li>
                <li>Insights into new regulations and industry best practices</li>
                <li>Risk‑management and financial literacy content tailored for Indian households</li>
              </ul>
              <h3 className="text-pink-800 font-semibold mt-4 mb-2">Why we do this:</h3>
              <p>
                Insurance should empower, not confuse. We created this blog to break down complexity and build lasting trust. Our goal? To help you feel confident in your insurance decisions—today and for the future.
              </p>
            </div>
            <p>
              <span className="font-semibold">Want to read more or get in touch?</span><br />
              Explore our insightful posts, or if you’d like us to cover a specific topic, just reach out. We’re here to help—always.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
