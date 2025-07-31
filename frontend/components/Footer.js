import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaFacebookF, FaXTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-sm text-gray-700 mt-12">
      {/* Subscribe Section */}
      <div className="px-6 py-10 max-w-6xl mx-auto border-b">
        <h2 className="text-xl font-semibold text-pink-800 mb-4">Subscribe to Our Blogs</h2>
        <p className="mb-4 max-w-md">Get latest updates on insurance trends, expert tips, and policy changes directly to your inbox.</p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-md">
          <Input placeholder="Enter your email" type="email" />
          <Button className="bg-pink-800 text-white hover:bg-pink-700">Subscribe</Button>
        </form>
      </div>

      {/* Footer Links */}
      <div className="px-6 py-6 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p>© 2025 Axis Bank</p>
          <ul className="flex flex-wrap gap-4 mt-2 text-gray-600">
            <li><a href="/disclaimer" className="hover:text-pink-800">Disclaimer</a></li>
            <li><a href="/privacy-policy" className="hover:text-pink-800">Privacy Policy</a></li>
            <li><a href="/webforms/code-of-commitment" className="hover:text-pink-800">Code of Commitment</a></li>
            <li><a href="/docs/default-source/default-document-library/responsible-disclosure-policy.pdf" className="hover:text-pink-800">Responsible Disclosure</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 text-pink-800 text-lg">
          <a href="https://www.facebook.com/axisbank" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://twitter.com/axisbank" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
          <a href="https://www.youtube.com/user/axisbank" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          <a href="https://www.linkedin.com/company/axis-bank" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  );
}
