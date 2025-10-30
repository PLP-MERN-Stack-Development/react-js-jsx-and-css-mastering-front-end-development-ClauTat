import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


export default function Layout({ children }) {
return (
<div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
<Navbar />
<main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</main>
<Footer />
</div>
)
}