import { Github, Facebook } from "lucide-react";

export function Footer() {
    return (
        <footer className="py-8 border-t border-neutral-800">
            <div className="container mx-auto px-4 text-center">
                <div className="flex justify-center gap-6 mb-4">
                    <a
                        href="https://github.com/mrkivn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-400 hover:text-white hover:scale-110 transition-all p-2"
                        aria-label="GitHub"
                    >
                        <Github className="w-6 h-6" />
                    </a>
                    <a
                        href="https://www.facebook.com/ivan.deala.963"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-400 hover:text-white hover:scale-110 transition-all p-2"
                        aria-label="Facebook"
                    >
                        <Facebook className="w-6 h-6" />
                    </a>
                </div>
                <p className="text-neutral-500 text-sm">
                    &copy; {new Date().getFullYear()} Marck Ivan Deala. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
