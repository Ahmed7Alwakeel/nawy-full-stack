"use client"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
	return (
		<>
			<nav className="bg-white border-b border-gray-200  px-8 md:px-28 flex items-center justify-between h-16 overflow-hidden">
				<div className="flex gap-12 items-center h-full">
					<div className="flex gap-4">
						<Link passHref href={"/"} className="relative w-24 h-10">
							<Image src="/images/logo.svg" alt="logo" fill sizes="" />
						</Link>
					</div>
				</div>
			</nav>

		</>
	)
}

export default Navbar
