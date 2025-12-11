'use client';

import { Github, Facebook, MapPin, Send } from "lucide-react"
import { useState } from "react"
import ScrollFloat from "@/components/ui/ScrollFloat";

export function GetInTouch() {
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)

        const form = e.currentTarget
        const formData = new FormData(form)

        try {
            const response = await fetch("https://formspree.io/f/xgvgnywq", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })

            if (response.ok) {
                setIsSubmitted(true)
                setSubject('')
                setMessage('')
                form.reset()
            } else {
                alert("Oops! There was a problem submitting your form")
            }
        } catch (error) {
            alert("Oops! There was a problem submitting your form")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section id="contact" className="py-20 bg-black/60 backdrop-blur-sm relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col items-center justify-center mb-12">
                        <ScrollFloat
                            animationDuration={1}
                            ease='back.inOut(2)'
                            scrollStart='top bottom-=10%'
                            scrollEnd='bottom bottom-=40%'
                            stagger={0.1}
                            containerClassName="mb-6 text-center"
                            textClassName="text-4xl md:text-6xl font-bold text-white leading-tight"
                        >
                            Get In Touch
                        </ScrollFloat>
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
                        {isSubmitted ? (
                            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm text-center">
                                <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                                <p className="text-neutral-300 mb-6">Thanks for reaching out! I'll get back to you as soon as possible.</p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                                >
                                    Send Another
                                </button>
                            </div>
                        ) : (
                            <form
                                action="https://formspree.io/f/xgvgnywq"
                                method="POST"
                                onSubmit={handleSubmit}
                                className="space-y-4 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm"
                            >
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-1">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="w-full px-4 py-2 bg-neutral-900/50 border border-neutral-800 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-white transition-all"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-1">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="w-full px-4 py-2 bg-neutral-900/50 border border-neutral-800 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-white transition-all"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-neutral-300 mb-1">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
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
                                        name="message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className="w-full px-4 py-2 bg-neutral-900/50 border border-neutral-800 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-white transition-all min-h-[120px]"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        "Sending..."
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
