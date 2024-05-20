'use client'

import { FileSearch } from "@phosphor-icons/react"
import Link from "next/link"

const Page = () => {
    return(
        <div className="w-full h-[88vh] flex justify-center items-center">
            <div className="flex flex-col justify-center text-center">
                <div className="flex items-center text-color-accent mb-5">
                <FileSearch className="md:text-7xl text-4xl "/>
                <h1 className="md:text-7xl text-4xl">Not Found?</h1>
                </div>

                <Link href="/" className="text-color-primary text-xl underline">Kembali</Link>
            </div>
        </div>
    )
}

export default Page