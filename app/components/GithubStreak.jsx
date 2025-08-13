import React from 'react'
import { Card, CardContent } from "./ui/card"

const GithubStreak = () => {
  return (
    <div className="min-h-screen bg-background p-4 flex items-center justify-center">
      <Card className="w-full max-w-6xl">
        <CardContent className="p-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold text-foreground mb-8">My GitHub Streak</h1>

            <div className="relative group">
              <a
                href="https://github.com/itsranjithkumar"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-transform duration-300 hover:scale-105"
              >
                <img
                  src="https://ghchart.rshah.org/1aa8b8/itsranjithkumar"
                  alt="itsranjithkumar's Github chart"
                  className="w-full max-w-5xl h-auto mx-auto rounded-xl shadow-lg bg-white dark:bg-gray-100 p-4 transition-shadow duration-300 hover:shadow-2xl"
                />
              </a>

              {/* Overlay gradient for better visual appeal */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-muted-foreground">
              <p className="text-lg">Click to view my GitHub profile</p>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm">Active contributor</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default GithubStreak
