'use client'
import Link from "next/link";
export default function Error({ error }) {
    return (
        <div className="container mt-5 w-50">
            <div className="alert alert-danger d-flex align-items-center justify-content-center flex-column gap-2" role="alert">
                <p className="text-center fw-bold mb-0">{error.message}</p>
                <Link href="/" className="btn btn-primary">Volver</Link>
            </div>
        </div>
    );
}