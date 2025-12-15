'use client';

import { Github, Facebook, Send } from "lucide-react"
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
                            ease='power3.out'
                            scrollStart='top bottom'
                            scrollEnd='center bottom'
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

                    <div className="flex justify-center">
                        {/* Contact Form */}
                        <div className="w-full max-w-xl">
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
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="Name"
                                            className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-800 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-white placeholder-neutral-500 transition-all"
                                            required
                                        />
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Email"
                                            className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-800 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-white placeholder-neutral-500 transition-all"
                                            required
                                        />
                                    </div>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        placeholder="Subject"
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                        className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-800 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-white placeholder-neutral-500 transition-all"
                                        required
                                    />
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-800 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-white placeholder-neutral-500 transition-all min-h-[120px]"
                                        required
                                    />
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
            </div>
        </section>
    )
}
