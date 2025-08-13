import React from "react";

export function Card({ className = "", children, ...props }) {
  return (
    <div
      className={
        "rounded-3xl shadow-2xl border border-blue-200 bg-white/90 " + className
      }
      {...props}
    >
      {children}
    </div>
  );
}

export function CardContent({ className = "", children, ...props }) {
  return (
    <div className={"p-8 " + className} {...props}>
      {children}
    </div>
  );
}
