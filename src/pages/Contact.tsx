import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      {/* Contact Hero */}
      <div className="relative bg-khum-primary py-12 md:py-20 overflow-hidden">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-khum-primary to-khum-accent opacity-90 z-0"></div>
        {/* Animated Pattern */}
        <motion.div
          className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] z-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        ></motion.div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-gray-100 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get in touch with us for all your technical and cleaning service
            needs.
          </motion.p>
        </div>
      </div>

      {/* Contact Information & Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-khum-primary mb-6">
                Get In Touch
              </h2>
              <p className="text-gray-600 mb-8">
                Have questions about our services or want to request a quote?
                Contact us today and one of our representatives will get back to
                you as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="flex">
                  <div className="w-12 h-12 rounded-full bg-khum-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-khum-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-khum-primary">
                      Email
                    </h3>
                    <p className="text-gray-600">ktcgroup.uae@gmail.com</p>
                    <p className="text-gray-500 text-sm">
                      We respond to emails within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="w-12 h-12 rounded-full bg-khum-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-khum-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-khum-primary">
                      Phone
                    </h3>
                    <p className="text-gray-600">+971 XXXXXXXXX</p>
                    <p className="text-gray-500 text-sm">
                      Available 7 days a week, 8am-8pm
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="w-12 h-12 rounded-full bg-khum-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-map-pin"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-khum-primary">
                      Location
                    </h3>
                    <p className="text-gray-600">Port Saeed, Deira, Dubai, UAE</p>
                    <p className="text-gray-500 text-sm">
                      Serving all areas across Dubai
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-lg font-semibold mb-4 text-khum-primary">
                  Company Information
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <strong>Company Name:</strong> KHUM TECHNICAL AND CLEANING
                    SERVICES L.L.C S.O.C
                  </li>
                  <li>
                    <strong>Managing Director:</strong> KHUM PRASAD BHANDARI
                  </li>
                  <li>
                    <strong>Director:</strong> INU THAPA
                  </li>
                  <li>
                    <strong>Director:</strong> SAFDAR SAEED
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-khum-primary mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28868.649107892143!2d55.32167445!3d25.25102915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d266902c99f%3A0xa425a57a853de792!2sPort%20Saeed%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2snp!4v1747997512377!5m2!1sen!2snp"
              width="100%"
              height="450"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
