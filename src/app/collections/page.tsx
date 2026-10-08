import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Collections() {

    return (
        <>
            <Navbar />

            <main className="flex min-h-screen flex-col items-center p-10 bg-gray-950">
                <h1 className="text-3xl font-bold  text-white">Your Collections</h1>

                <p className="text-gray-400">
                    currently tracking x things
                </p>
                <Link href="/create">
                Create a collection
                </Link>
                <ul>
                    <li>
                        <button type="button" id="btn-ref1" name="action_1" className="p-4 bg-gray-100 text-gray-900">Open list 1</button>
                    </li>
                    <li>
                        <button type="button" id="btn-ref2" name="action_2">Reference Two</button>
                    </li>
                    <li>
                        <button type="button" id="btn-ref3" name="action_3">Reference Three</button>
                    </li>
                </ul>
            </main>
        </>
    );
}