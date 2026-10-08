import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Create() {

    return (
        <>
            <Navbar />

            <main className="flex min-h-screen flex-col items-center p-10 bg-gray-950">
                <h1>
                    Create A Collection
                </h1>
                <label>Name</label>
                <input></input>
            </main>
        </>
    );
}