import Navbar from "./components/Navbar";


export default function Home() {
    return (
        <>
            <Navbar />

            <main className="flex min-h-screen flex-col items-center justify-center bg-gray-950">
                <h1 className="text-3xl font-bold  text-white">Collect</h1>

                <p className="text-gray-400">
                    Track what you've tried.
                </p>

                <button className="bg-gray-800 text-white p-4 mt-8 rounded-lg">
                    Create a collection
                </button>
            </main>
        </>
    );
}