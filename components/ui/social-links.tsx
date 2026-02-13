"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface Social {
  id: string
  label: string
  href: string
  icon: React.ReactNode
  image?: string
}

interface SocialLinksProps extends React.HTMLAttributes<HTMLDivElement> {
  socials: Social[]
  iconClassName?: string
}

export function SocialLinks({ socials, className, iconClassName, ...props }: SocialLinksProps) {
  const [hoveredSocial, setHoveredSocial] = React.useState<string | null>(null)
  const [rotation, setRotation] = React.useState<number>(0)
  const [clicked, setClicked] = React.useState<boolean>(false)

  const animation = {
    scale: clicked ? [1, 1.3, 1] : 1,
    transition: { duration: 0.3 },
  }

  React.useEffect(() => {
    const handleClick = () => {
      setClicked(true)
      setTimeout(() => {
        setClicked(false)
      }, 200)
    }
    window.addEventListener("click", handleClick)
    return () => window.removeEventListener("click", handleClick)
  }, [clicked])

  return (
    <div
      className={cn("flex items-center justify-start gap-4", className)}
      {...props}
    >
      {socials.map((social) => (
        <Link
          key={social.id}
          href={social.href}
          className={cn(
            "relative cursor-pointer p-2 bg-white/10 rounded-full hover:scale-110 transition-all duration-300 group flex items-center justify-center",
            iconClassName,
            !iconClassName?.includes("hover:bg-") && "hover:bg-primary",
            hoveredSocial && hoveredSocial !== social.id ? "opacity-50 scale-95" : "opacity-100"
          )}
          onMouseEnter={() => {
            setHoveredSocial(social.id)
            setRotation(Math.random() * 20 - 10)
          }}
          onMouseLeave={() => setHoveredSocial(null)}
          onClick={() => setClicked(true)}
        >
          {/* Base Icon */}
          <div className="relative z-10 w-4 h-4 flex items-center justify-center">
            {social.icon}
          </div>

          {/* Floating Animated Image/Icon */}
          <AnimatePresence>
            {hoveredSocial === social.id && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                animate={animation}
              >
                {social.image ? (
                  <motion.img
                    key={`${social.id}-img`}
                    src={social.image}
                    alt={social.label}
                    className="w-full h-full object-contain p-1"
                    initial={{
                      y: 0,
                      rotate: rotation,
                      opacity: 0,
                      scale: 0.5,
                      filter: "blur(2px)",
                    }}
                    animate={{
                      y: -40,
                      opacity: 1,
                      scale: 1.5,
                      filter: "blur(0px)"
                    }}
                    exit={{
                      y: 0,
                      opacity: 0,
                      scale: 0.5,
                      filter: "blur(2px)"
                    }}
                    transition={{ duration: 0.2, type: "spring", stiffness: 300, damping: 20 }}
                  />
                ) : (
                  <motion.div
                    key={`${social.id}-icon`}
                    className="w-full h-full flex items-center justify-center text-white"
                    initial={{
                      y: 0,
                      rotate: rotation,
                      opacity: 0,
                      scale: 0.5,
                      filter: "blur(2px)",
                    }}
                    animate={{
                      y: -40,
                      opacity: 1,
                      scale: 1.5,
                      filter: "blur(0px)"
                    }}
                    exit={{
                      y: 0,
                      opacity: 0,
                      scale: 0.5,
                      filter: "blur(2px)"
                    }}
                    transition={{ duration: 0.2, type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {social.icon}
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </Link>
      ))}
    </div>
  )
}