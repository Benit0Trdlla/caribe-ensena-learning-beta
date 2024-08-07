import Link from "next/link"
export default function Header() {
    return (
        <div className="d-flex justify-content-center gap-3">
            <Link href="/Ensenapaz/Modulo-1/2">
                2
            </Link>
            <Link href="/Ensenapaz/Modulo-1/3">
                3
            </Link>
            <Link href="/Ensenapaz/Modulo-1/4">
                4
            </Link>
            <Link href="/Ensenapaz/Modulo-1/5">
                5
            </Link>
        </div>
    )
}