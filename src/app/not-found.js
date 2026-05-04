import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-black text-white px-4">

            <h1 className="text-7xl font-bold mb-4">404</h1>

            <p className="text-gray-400 mb-6 text-center">
                Page not found. The page you are looking for doesn't exist.
            </p>

            <Link
                href="/"
                className="px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition"
            >
                Back to Home
            </Link>

        </div>
    );
}