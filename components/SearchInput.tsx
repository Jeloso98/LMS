'use client'

import { Search } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function SearchInput() {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState("");
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/search/${encodeURIComponent(searchQuery.trim())}`);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="relativ w-full flex-1 max-w[300px]">
            <input
                type="text"
                placeholder="Buscar..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border rounded-l px-4 py-2"
            />
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        </form>
    )
}