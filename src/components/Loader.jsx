export default function Loading() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">

            <div className="flex flex-col items-center gap-4">

                {/* Spinner */}
                <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>

                {/* Text */}
                <p className="text-white text-lg font-medium">
                    Loading...
                </p>

            </div>
        </div>
    );
}