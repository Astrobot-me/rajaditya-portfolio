import { Download, Linkedin, MapPin, Mail, Phone, LucideExternalLink } from "lucide-react"
import ProfileImg from "../assets/profile.jpeg"


export default function LinkedInComponent() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white font-funneldisplay " id="linkedin">
      <div className="container max-w-7xl px-4 md:px-6 mx-auto">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left Column - Profile Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16181b] text-sm">
                <Linkedin className="w-4 h-4 text-gray-300" />
                <span> LinkedIn Profile</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Know what I'm currently doing on <span className="text-gray-300">LinkedIn</span>
              </h2>

              <p className="text-lg text-gray-300 leading-relaxed">
                I'm passionate about building innovative solutions and connecting with like-minded people. My
                LinkedIn profile have latest updates about my work, achievements, and the projects I'm currently working on.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-white" />
                <span>Roorkee UK, IN</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5  text-white" />
                <span><a href="mailto:aditya.me269@gmail.com">aditya.me269@gmail.com</a></span>
              </div>
              {/* <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5  text-white" />
                <span>+1 (555) 123-4567</span>
              </div> */}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://www.linkedin.com/in/astro-adityaraj/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#16181b] hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-md transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                View LinkedIn Profile
              </a>

              <a
                href="https://drive.google.com/file/d/1xCf4bRBBcK8lAs4bVpzL5JPAUfSX2nsI/view?usp=sharing"
                download
                className="inline-flex items-center justify-center gap-2 border border-gray-600 text-white hover:bg-[#16181b]  font-semibold px-8 py-3 rounded-md transition-colors"
                target="_blank"
              >
                <LucideExternalLink className="w-5 h-5" />
                Check Resume
              </a>
            </div>
          </div>

          {/* Profile Image */}
           <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <img
                src={ProfileImg}
                alt="Professional Profile"
                className="w-full h-auto rounded-lg shadow-2xl object-cover"
              />
            </div>
          </div>

          {/* Bottom Section - Skills/Highlights */}
          {/* <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold text-white">Key Highlights</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "React & Next.js",
                  "TypeScript",
                  "Node.js",
                  "Cloud Architecture",
                  "Team Leadership",
                  "Product Strategy",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
