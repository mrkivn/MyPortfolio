export function Footer() {
    return (
        <footer className="py-8 border-t border-neutral-800">
            <div className="container mx-auto px-4 text-center">
                <p className="text-neutral-500 text-sm">
                    &copy; {new Date().getFullYear()} Marck Ivan Deala. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
