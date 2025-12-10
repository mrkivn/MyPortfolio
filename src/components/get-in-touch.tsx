'use client';

import { Github, Facebook, MapPin, Send } from "lucide-react"
import { useState } from "react"
import ScrollFloat from "@/components/ui/ScrollFloat";

export function GetInTouch() {
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const mailtoLink = `mailto:mrkivn@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`
        window.location.href = mailtoLink
    }

    return (
        <section id="contact" className="py-20 bg-black/60 backdrop-blur-sm relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col items-center justify-center mb-12">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 text-center">Get In Touch</h2>
                        <div className="h-1 w-24 bg-white rounded-full mb-8"></div>
                        <p className="text-neutral-400 text-center max-w-lg">
                            Have a project in mind or just want to say hi? I&apos;d love to hear from you.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        {/* Contact Info */}
                        <div className="space-y-6">
                            {/* Location */}
                            <a
                                href="https://maps.app.goo.gl/QKhvDKvbaovMRA6Q7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all group"
                            >
                                <div className="p-3 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                                    <MapPin className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform" />
                                </div>
                                <div className="text-left">
                                    <h3 className="font-semibold text-white">Location</h3>
                                    <p className="text-neutral-400 text-sm">View on Google Maps</p>
                                </div>
                            </a>

                            {/* GitHub */}
                            <a
                                href="https://github.com/mrkivn"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all group"
                            >
                                <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                                    <Github className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" />
                                </div>
                                <div className="text-left">
                                    <h3 className="font-semibold text-white">GitHub</h3>
                                    <p className="text-neutral-400 text-sm">github.com/mrkivn</p>
                                </div>
                            </a>

                            {/* Facebook */}
                            <a
                                href="https://www.facebook.com/ivan.deala.963"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-white/10 transition-all group"
                            >
                                <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                                    <Facebook className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
                                </div>
                                <div className="text-left">
                                    <h3 className="font-semibold text-white">Facebook</h3>
                                    <p className="text-neutral-400 text-sm">Ivan Deala</p>
                                </div>
                            </a>
                        </div>

                        {/* Contact Form */}
                        <form onSubmit={handleSubmit} className="space-y-4 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-neutral-300 mb-1">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    className="w-full px-4 py-2 bg-neutral-900/50 border border-neutral-800 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-white transition-all"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-1">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="w-full px-4 py-2 bg-neutral-900/50 border border-neutral-800 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-white transition-all min-h-[120px]"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium py-2.5 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group"
                            >
                                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
