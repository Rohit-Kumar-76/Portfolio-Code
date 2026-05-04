'use client';

import { useRouter } from 'next/navigation';

export default function Error({ error, reset }) {
    const router = useRouter();

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white px-4">

            <h1 className="text-4xl font-bold mb-4">Oops! 😢</h1>

            <p className="text-gray-300 mb-6 text-center max-w-md">
                Something went wrong. Please try again or go back home.
            </p>

            <div className="flex gap-4">

                {/* Retry */}
                <button
                    onClick={() => reset()}
                    className="px-5 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition"
                >
                    Try Again
                </button>

                {/* Home */}
                <button
                    onClick={() => router.push('/')}
                    className="px-5 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition"
                >
                    Go Home
                </button>

            </div>

        </div>
    );
}