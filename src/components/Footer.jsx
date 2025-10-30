import React from 'react'


export default function Footer() {
return (
<footer className="mt-12 py-6 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500">
&copy; {new Date().getFullYear()} MyReactApp. All rights reserved.
</footer>
)
}