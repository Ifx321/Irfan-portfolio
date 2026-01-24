"use client"

import { useEffect, useRef, useState } from "react"

interface TextEffectProps {
  text: string
  hoverText?: string
  href?: string
  className?: string
  delay?: number
}

export function TextGlitch({ text, hoverText, href, className = "", delay = 0 }: TextEffectProps) {
  const textRef = useRef<HTMLHeadingElement>(null)
  const spanRef = useRef<HTMLSpanElement>(null)
  const [displayText] = useState(text)
  const [displayHoverText, setDisplayHoverText] = useState(hoverText || text)
  const hoverIntervalRef = useRef<NodeJS.Timeout | null>(null)

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import("gsap")

      if (textRef.current) {
        gsap.set(textRef.current, {
          backgroundSize: "0%",
          scale: 0.95,
          opacity: 0.7,
        })

        const tl = gsap.timeline({ delay: delay })

        tl.to(textRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
        }).to(
          textRef.current,
          {
            backgroundSize: "100%",
            duration: 2,
            ease: "elastic.out(1, 0.5)",
          },
          "-=0.3",
        )
      }
    }

    loadGSAP()
  }, [delay])

  const handleMouseEnter = () => {
    if (hoverText) {
      let iteration = 0

      if (hoverIntervalRef.current) {
        clearInterval(hoverIntervalRef.current)
      }

      hoverIntervalRef.current = setInterval(() => {
        setDisplayHoverText(
          hoverText
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return hoverText![index]
              }
              return letters[Math.floor(Math.random() * 26)]
            })
            .join(""),
        )

        if (iteration >= hoverText.length) {
          clearInterval(hoverIntervalRef.current!)
        }

        iteration += 1 / 3
      }, 30)
    }

    if (spanRef.current) {
      spanRef.current.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
    }
  }

  const handleMouseLeave = () => {
    if (hoverIntervalRef.current) {
      clearInterval(hoverIntervalRef.current)
    }
    setDisplayHoverText(hoverText || text)

    if (spanRef.current) {
      spanRef.current.style.clipPath = "polygon(0 50%, 100% 50%, 100% 50%, 0 50%)"
    }
  }

  useEffect(() => {
    return () => {
      if (hoverIntervalRef.current) {
        clearInterval(hoverIntervalRef.current)
      }
    }
  }, [])

  const spanContent = hoverText ? (
    href ? (
      <a href={href} target="_blank" rel="noreferrer" className="no-underline text-inherit">
        {displayHoverText}
      </a>
    ) : (
      displayHoverText
    )
  ) : (
    text
  )

  return (
    <div
      ref={textRef}
      className={`
        group relative
        transition-all duration-500 ease-out
        cursor-pointer
        overflow-hidden
        px-1
        ${className}
      `}
      style={{
        backgroundSize: "0%",
        width: "fit-content",
        wordBreak: "break-word",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="opacity-0">{displayText}</span>
      <div className="absolute inset-0 flex items-center">
        <span className="text-inherit">{displayText}</span>
      </div>
      <span
        ref={spanRef}
        className="
          absolute inset-0 
          text-black font-bold
          flex items-center
          transition-all duration-400 ease-out
          pointer-events-none
          overflow-hidden
        "
        style={{
          clipPath: "polygon(0 50%, 100% 50%, 100% 50%, 0 50%)",
          transformOrigin: "center",
          backgroundColor: "#FFFF02",
          whiteSpace: "nowrap",
        }}
      >
        {spanContent}
      </span>
    </div>
  )
}
