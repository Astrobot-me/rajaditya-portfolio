import React from "react"
import { Github, Linkedin, Twitter, Mail, ExternalLink } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-1 hidden sm:inline-block">
            <h2 className="text-3xl font-bold font-funneldisplay hidden sm:inline-block   text-white">Aditya Raj</h2>
            <p className="font-funneldisplay">(Student | CS Undergrad)</p>
          </div>
          <div className=" bg-[#0a0b0d] p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Got any suggestions?</h3>
            {/* bg-[#121212] */}
            <p className="text-gray-400 mb-4">
              I'm always open to new ideas and discussions. Reach out and let's discuss what do you want to see? 
            </p>
            <div className="space-y-2">
              <a
                href="https://twitter.com/messages/compose?recipient_id=astrobot_me"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Twitter className="w-5 h-5 mr-2" />
                DM me on Twitter
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
              {/* <a
                href="https://www.linkedin.com/messaging/compose/?to=astro-adityaraj"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                Message me on LinkedIn
                <ExternalLink className="w-4 h-4 ml-1" />
              </a> */}
              <a
                href="mailto:autobot268@gmail.com"
                target="_blank"
                className="flex items-center text-green-400 hover:text-green-300 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Drop me a Email here
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Aditya Raj. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition-colors"
    >
      {icon}
      <span className="sr-only">{label}</span>
    </a>
  )
}

