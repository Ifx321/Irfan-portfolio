## import React, { useCallback, useMemo, useRef } from "react"
import { motion, useAnimationControls } from "framer-motion"
import { v4 as uuidv4 } from "uuid"

import { cn } from "@/lib/utils"
import { useDimensions } from "@/components/hooks/use-debounced-dimensions"

interface PixelTrailProps {
  pixelSize: number // px
  fadeDuration?: number // ms
  delay?: number // ms
  className?: string
  pixelClassName?: string
}

const PixelTrail: React.FC<PixelTrailProps> = ({
  pixelSize = 20,
  fadeDuration = 500,
  delay = 0,
  className,
  pixelClassName,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const dimensions = useDimensions(containerRef)
  const trailId = useRef(uuidv4())

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const x = Math.floor((e.clientX - rect.left) / pixelSize)
      const y = Math.floor((e.clientY - rect.top) / pixelSize)

      const pixelElement = document.getElementById(
        `${trailId.current}-pixel-${x}-${y}`
      )
      if (pixelElement) {
        const animatePixel = (pixelElement as any).__animatePixel
        if (animatePixel) animatePixel()
      }
    },
    [pixelSize]
  )

  const columns = useMemo(
    () => Math.ceil(dimensions.width / pixelSize),
    [dimensions.width, pixelSize]
  )
  const rows = useMemo(
    () => Math.ceil(dimensions.height / pixelSize),
    [dimensions.height, pixelSize]
  )

  return (
    <div
      ref={containerRef}
      className={cn(
        "absolute inset-0 w-full h-full pointer-events-auto",
        className
      )}
      onMouseMove={handleMouseMove}
    >
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="flex">
          {Array.from({ length: columns }).map((_, colIndex) => (
            <PixelDot
              key={`${colIndex}-${rowIndex}`}
              id={`${trailId.current}-pixel-${colIndex}-${rowIndex}`}
              size={pixelSize}
              fadeDuration={fadeDuration}
              delay={delay}
              className={pixelClassName}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

interface PixelDotProps {
  id: string
  size: number
  fadeDuration: number
  delay: number
  className?: string
}

const PixelDot: React.FC<PixelDotProps> = React.memo(
  ({ id, size, fadeDuration, delay, className }) => {
    const controls = useAnimationControls()

    const animatePixel = useCallback(() => {
      controls.start({
        opacity: [1, 0],
        transition: { duration: fadeDuration / 1000, delay: delay / 1000 },
      })
    }, [])

    // Attach the animatePixel function to the DOM element
    const ref = useCallback(
      (node: HTMLDivElement | null) => {
        if (node) {
          ;(node as any).__animatePixel = animatePixel
        }
      },
      [animatePixel]
    )

    return (
      <motion.div
        id={id}
        ref={ref}
        className={cn("cursor-pointer-none", className)}
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
        initial={{ opacity: 0 }}
        animate={controls}
        exit={{ opacity: 0 }}
      />
    )
  }
)

PixelDot.displayName = "PixelDot"
export { PixelTrail }

here is the landing page 

This is excellent. You are building a portfolio that feels "alive." The **Pixel Trail** will serve as your interactive background (the "Landing Page" hook), and the **Particle Button** will make the "Download Resume" action feel rewarding.

To make this work in your AI tool (Cursor/Replit/v0), we need to fix one dependency: your code imports `useDimensions` from `@/components/hooks/use-debounced-dimensions`, which your AI tool **does not have yet**.

Here is the **Complete Master Prompt**. It includes your Resume data, the Pixel Trail logic, the missing Hook, and the Particle Button.

**Copy and paste this entire block into your AI tool.**

---

### **COPY THIS MASTER PROMPT**

**Role:** Expert Creative Developer
**Goal:** Build a "21st.dev" style Portfolio for **Irfan Salim** (Data Analyst).
**Tech Stack:** React, Tailwind CSS, Framer Motion, Lucide React.
**Design:** Dark Mode (Zinc-950), Bento Grid Layout, Interactive Background.

---

#### **STEP 1: ESSENTIAL UTILITIES (Create these first)**

**1. Create `src/hooks/use-debounced-dimensions.tsx**` (Required for PixelTrail)

```tsx
import { useState, useEffect } from "react"

export const useDimensions = (ref: React.RefObject<HTMLElement>) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      if (ref.current) {
        setDimensions({
          width: ref.current.offsetWidth,
          height: ref.current.offsetHeight,
        })
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [ref])

  return dimensions
}

```

**2. Create `src/components/PixelTrail.tsx**`
*(Use the exact code provided by the user earlier. Ensure it imports the hook above.)*

**3. Create `src/components/ParticleButton.tsx**`
*(Use the exact code provided by the user earlier.)*

---

#### **STEP 2: THE LANDING PAGE (`App.tsx`)**

**Structure:**
The entire **Hero Section** must be wrapped in a relative container so the **Pixel Trail** can sit in the background.

**Content (From User Resume):**

* 
**Name:** Irfan Salim 


* 
**Role:** Data Analyst 


* 
**Location:** Alappuzha, Kerala, India 


* 
**Headline:** "Turning raw data into strategic business insights." 


* 
**Sub-Headline:** "Python • SQL • Power BI | Focused on statistical analysis & optimization." 



**Key Projects (For the Bento Grid):**

1. **Deforestation Analysis (Power BI):**
* 
*Metric:* Revealed Agriculture causes >86% of tree loss. 


* 
*Tech:* DAX, Power Query, Star Schema. 




2. **E-Commerce Revenue Optimization (Python):**
* 
*Metric:* Analyzed $65.2M revenue dataset (88k records). 


* 
*Tech:* Pandas, Plotly. 





**Experience:**

* 
**Asquare Technologies:** Data Analyst Intern (Jun '25 - Nov '25). 



**Education:**

* 
**B.Com:** Kerala University. 



---

#### **STEP 3: IMPLEMENTATION LOGIC**

**1. The Hero Section (Interactive):**

```jsx
<div className="relative h-screen w-full flex flex-col items-center justify-center bg-zinc-950 overflow-hidden">
  {/* The Background Effect */}
  <PixelTrail
    pixelSize={24}
    fadeDuration={500}
    pixelClassName="bg-zinc-800" // Subtle trail color
    className="absolute inset-0 z-0"
  />

  {/* The Content (Z-Index 10 to sit ON TOP of pixels) */}
  <div className="z-10 text-center space-y-6 pointer-events-none">
    <h1 className="text-6xl font-bold text-zinc-100 tracking-tighter">Irfan Salim</h1>
    <p className="text-zinc-400 text-xl">Data Analyst</p>
    
    {/* Enable pointer events for the button */}
    <div className="pointer-events-auto mt-8">
      <ParticleButton className="bg-white text-black hover:bg-zinc-200">
        Download Resume
      </ParticleButton>
    </div>
  </div>
</div>

```

**2. The Styles:**

* Background: `bg-zinc-950`
* Text: `text-zinc-50`
* Cards: `bg-zinc-900/50` (Glassmorphism) with `border-zinc-800`

---

### **Next Step for You**

Run this prompt. When the site loads, you might notice the **Pixel Trail** blocks your clicks.

* **Fix:** Ensure the text container has `pointer-events-none` but the buttons have `pointer-events-auto` (I included this in the prompt above).

Ready to build?



```
Sources:
1. https://github.com/MIst3rM/LaunchPoint-Frontend