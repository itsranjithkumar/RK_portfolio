import React from "react"

export function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-block rounded bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-700 dark:bg-gray-700 dark:text-gray-200 ${className}`}
    >
      {children}
    </span>
  )
}
