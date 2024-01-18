"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"

const InputSearch = () => {
    const searchRef = useRef()
    const handleSearch = () => {
        alert(searchRef.current.value)
    }
    return (
        <div className="relative">
            <input
                placeholder="cari anime..."
                className="w-full p-2 rounded"
                ref={searchRef}
            />
            <button className="absolute top-2 end-2" onClick={handleSearch}>
                <MagnifyingGlass size={24} />
            </button>
        </div>
    )
}
export default InputSearch