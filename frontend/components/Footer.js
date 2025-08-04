// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { FaFacebookF, FaXTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa6";

// export default function Footer() {
//   return (
//     <footer className="bg-gray-100 text-sm text-gray-700 mt-12 dark:bg-gray-900">
//       {/* Subscribe Section */}
//       <div className="px-6 py-10 max-w-6xl mx-auto border-b">
//         <h2 className="text-xl font-semibold text-pink-800 mb-4">Subscribe to Our Blogs</h2>
//         <p className="mb-4 max-w-md">Get latest updates on insurance trends, expert tips, and policy changes directly to your inbox.</p>
//         <form className="flex flex-col sm:flex-row gap-3 max-w-md">
//           <Input placeholder="Enter your email" type="email" />
//           <Button className="bg-pink-800 text-white hover:bg-pink-700">Subscribe</Button>
//         </form>
//       </div>

//       {/* Footer Links */}
//       <div className="px-6 py-6 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
//         <div className="text-center md:text-left">
//           <p>© 2025 Axis Bank</p>
//           <ul className="flex flex-wrap gap-4 mt-2 text-gray-600">
//             <li><a href="/disclaimer" className="hover:text-pink-800">Disclaimer</a></li>
//             <li><a href="/privacy-policy" className="hover:text-pink-800">Privacy Policy</a></li>
//             <li><a href="/webforms/code-of-commitment" className="hover:text-pink-800">Code of Commitment</a></li>
//             <li><a href="/docs/default-source/default-document-library/responsible-disclosure-policy.pdf" className="hover:text-pink-800">Responsible Disclosure</a></li>
//           </ul>
//         </div>

//         {/* Social Links */}
//         <div className="flex gap-4 text-pink-800 text-lg">
//           <a href="https://www.facebook.com/axisbank" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
//           <a href="https://twitter.com/axisbank" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
//           <a href="https://www.youtube.com/user/axisbank" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
//           <a href="https://www.linkedin.com/company/axis-bank" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
//         </div>
//       </div>
//     </footer>
//   );
// }

"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaFacebookF, FaXTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa6";
import { useState } from "react"; // Only useState is needed now

export default function Footer() {
    const [email, setEmail] = useState(""); // State to store the email input value
    const [message, setMessage] = useState(""); // State to store feedback messages
    const [isSubmitting, setIsSubmitting] = useState(false); // State to disable button during submission

    // IMPORTANT: Replace this with your ACTUAL N8N Webhook Production URL
    // Once you've tested, you should get the Production URL from your n8n Webhook node.
    const N8N_WEBHOOK_URL = "https://darshit008.app.n8n.cloud/webhook-test/a49e4619-9c45-4760-9018-80f17ee81d90";
    // const N8N_WEBHOOK_URL = "https://darshit008.app.n8n.cloud/webhook-test/ba351819-2b6b-41eb-8262-199a499c967d";

    // Function to handle the subscribe button click
    const handleSubscribeClick = async () => {
        // Basic validation
        if (!email) {
            setMessage("Please enter your email address.");
            return;
        }

        // Basic email format validation (optional, but good practice)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setMessage("Please enter a valid email address.");
            return;
        }

        setIsSubmitting(true); // Disable the button
        setMessage("Subscribing..."); // Inform the user

        try {
            const response = await fetch(N8N_WEBHOOK_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", // We are sending JSON data
                },
                body: JSON.stringify({ email: email }), // Send the email as a JSON object
            });

            // Check if the request was successful (HTTP status code 2xx)
            if (response.ok) {
                console.log("N8n webhook response:", response);
                setMessage("Subscription successful! Check your inbox for a welcome email.");
                setEmail(""); // Clear the input field
                // No formRef.current.reset() needed if there's no <form> tag
            } else {
                // If the server responded with an error status
                // You might get a specific error message from n8n if configured
                const errorText = await response.text(); // Get raw response text for debugging
                setMessage(`Error subscribing: Please try again. (Details: ${errorText.substring(0, 100)}...)`); // Show partial error
                console.error("N8n webhook error response:", errorText);
            }
        } catch (error) {
            // Catch network errors or issues before reaching the server
            setMessage("Network error. Please check your internet connection and try again.");
            console.error("Error during subscription:", error);
        } finally {
            setIsSubmitting(false); // Re-enable the button
        }
    };

    return (
        <footer className="bg-gray-100 text-sm text-gray-700 mt-12 dark:bg-gray-900">
            {/* Subscribe Section */}
            <div className="px-6 py-10 max-w-6xl mx-auto border-b">
                <h2 className="text-xl font-semibold text-pink-800 mb-4">Subscribe to Our Blogs</h2>
                <p className="mb-4 max-w-md">Get latest updates on insurance trends, expert tips, and policy changes directly to your inbox.</p>
                {/* No <form> tag here as per your clarification */}
                <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                    <Input
                        placeholder="Enter your email"
                        type="email"
                        value={email} // Controlled component: input value is tied to state
                        onChange={(e) => setEmail(e.target.value)} // Update state on change
                        required // Make email field mandatory
                        disabled={isSubmitting} // Disable input while submitting
                    />
                    <Button
                        // type="button" is generally good if not inside a form
                        // but if no form, it defaults to type="button" anyway.
                        onClick={handleSubscribeClick} // Attach the click handler directly
                        className="bg-pink-800 text-white hover:bg-pink-700"
                        disabled={isSubmitting} // Disable button while submitting
                    >
                        {isSubmitting ? "Subscribing..." : "Subscribe"}
                    </Button>
                </div>
                {/* Display messages to the user */}
                {message && <p className="mt-3 text-sm">{message}</p>}
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