import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between px-50 p-4">
      <div>Collect</div>

      <Link href="/collections">
        My Collections
      </Link>
    </div>
  );
}