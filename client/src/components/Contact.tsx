import React, { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { contactInfo } from "@/lib/constants";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [interest, setInterest] = useState<string>("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS configuration
    const serviceId =
      import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
    const templateId =
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
    const publicKey =
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";
    const recipientEmail =
      import.meta.env.VITE_EMAILJS_RECIPIENT_EMAIL || "your_recipient_email";

    if (formRef.current) {
      // Add recipient email to form data
      const formData = new FormData(formRef.current);
      formData.append("recipient_email", recipientEmail);

      // Convert FormData to object
      const templateParams = {};
      formData.forEach((value, key) => {
        Object.assign(templateParams, { [key]: value });
      });

      // Send email using EmailJS
      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then((result) => {
          console.log(
            "Email sent successfully to " + recipientEmail + ":",
            result.text,
          );
          toast({
            title: "Message Sent",
            description:
              "Thank you for your message! I'll get back to you soon.",
          });
          // Reset form
          formRef.current?.reset();
          setInterest("");
        })
        .catch((error) => {
          console.error("Failed to send email:", error.text);
          toast({
            title: "Message Failed",
            description:
              "There was an error sending your message. Please try again later.",
            variant: "destructive",
          });
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#F5F5F0]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#8B4513] mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600">
            Have questions or ready to schedule your first lesson? Reach out
            using any of the methods below.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <Card className="shadow-md">
              <CardContent className="p-8">
                <h3 className="text-2xl font-display font-bold mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-[#8B4513] bg-opacity-10 rounded-full p-3">
                      <i className="fas fa-map-marker-alt text-[#8B4513]"></i>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold">Location</h4>
                      <p className="text-gray-600">{contactInfo.location}</p>
                      <p className="text-gray-600">
                        Lessons available in-studio or online
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-[#8B4513] bg-opacity-10 rounded-full p-3">
                      <i className="fas fa-phone-alt text-[#8B4513]"></i>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-gray-600">
                        <a
                          href="tel:+10000000000"
                          className="hover:text-[#8B4513]"
                        >
                          (000) 000-0000
                        </a>
                      </p>
                      <p className="text-sm text-gray-500">
                        {contactInfo.phoneHours.weekdays}
                      </p>
                      <p className="text-sm text-gray-500">
                        {contactInfo.phoneHours.saturday}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-[#8B4513] bg-opacity-10 rounded-full p-3">
                      <i className="fas fa-envelope text-[#8B4513]"></i>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-gray-600">
                        <a
                          href="mailto:john.doe@email.com"
                          className="hover:text-[#8B4513]"
                        >
                          john.doe@email.com
                        </a>
                      </p>
                      <p className="text-sm text-gray-500">
                        I'll respond within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-[#8B4513] bg-opacity-10 rounded-full p-3">
                      <i className="fas fa-clock text-[#8B4513]"></i>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold">Lesson Hours</h4>
                      <p className="text-gray-600">
                        {contactInfo.hours.weekdays}
                      </p>
                      <p className="text-gray-600">
                        {contactInfo.hours.saturday}
                      </p>
                      <p className="text-gray-600">
                        {contactInfo.hours.sunday}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-[#8B4513] bg-opacity-10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#8B4513] hover:text-white transition-all"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      href="#"
                      className="bg-[#8B4513] bg-opacity-10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#8B4513] hover:text-white transition-all"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      href="#"
                      className="bg-[#8B4513] bg-opacity-10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#8B4513] hover:text-white transition-all"
                    >
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:w-1/2">
            <Card className="shadow-md">
              <CardContent className="p-8">
                <h3 className="text-2xl font-display font-bold mb-6">
                  Send a Message
                </h3>

                <form ref={formRef} onSubmit={handleFormSubmit}>
                  <div className="mb-6">
                    <Label
                      htmlFor="user_name"
                      className="font-medium text-gray-700 mb-2"
                    >
                      Your Name
                    </Label>
                    <Input
                      type="text"
                      name="user_name"
                      id="user_name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:border-transparent"
                      placeholder="John Smith"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <Label
                      htmlFor="user_email"
                      className="font-medium text-gray-700 mb-2"
                    >
                      Email Address
                    </Label>
                    <Input
                      type="email"
                      name="user_email"
                      id="user_email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:border-transparent"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <Label
                      htmlFor="user_phone"
                      className="font-medium text-gray-700 mb-2"
                    >
                      Phone Number
                    </Label>
                    <Input
                      type="tel"
                      name="user_phone"
                      id="user_phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:border-transparent"
                      placeholder="(307) 307-0307"
                    />
                  </div>

                  <div className="mb-6">
                    <Label
                      htmlFor="user_interest"
                      className="font-medium text-gray-700 mb-2"
                    >
                      I'm Interested In
                    </Label>
                    <Select value={interest} onValueChange={setInterest}>
                      <SelectTrigger id="user_interest">
                        <SelectValue placeholder="Please select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Guitar Lessons">
                          Guitar Lessons
                        </SelectItem>
                        <SelectItem value="Vocal Lessons">
                          Vocal Lessons
                        </SelectItem>
                        <SelectItem value="Music Theory & Ear Training">
                          Music Theory & Ear Training
                        </SelectItem>
                        <SelectItem value="Songwriting">Songwriting</SelectItem>
                        <SelectItem value="Advanced Techniques">
                          Advanced Techniques
                        </SelectItem>
                        <SelectItem value="Kids' Programs">
                          Kids' Programs
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      type="hidden"
                      name="user_interest"
                      value={interest}
                    />
                  </div>

                  <div className="mb-6">
                    <Label
                      htmlFor="message"
                      className="font-medium text-gray-700 mb-2"
                    >
                      Your Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:border-transparent"
                      placeholder="Tell me about your musical goals or any questions you have"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#8B4513] hover:bg-opacity-90 text-white px-6 py-6 text-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? "Sending..."
                      : "Send Message - Will Respond"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
