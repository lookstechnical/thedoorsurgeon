import React, { useState, useEffect, useRef } from "react"

const StickyHeader = () => {
    const [isSticky, setSticky] = useState(false)
    const ref = useRef(null)
    const handleScroll = () => {
        if (ref.current && ref.current.getBoundingClientRect().top <= 0) {
            setSticky(true)
        } else {
            setSticky(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", () => handleScroll)
        }
    }, [])

    return (
        <div
            className={`has-background-grey-dark contact-header ${
                isSticky ? " sticky" : ""
            }`}
            ref={ref}
        >
            <div className="container has-text-white">
                <div>Locked out ?</div>
                <div>
                    <a href="tel:07912 294 111" className="has-text-white">
                        Call Now: 07912 294 111
                    </a>
                </div>
            </div>
        </div>
    )
}

export default StickyHeader
