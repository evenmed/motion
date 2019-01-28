import * as React from "react"
import { motion } from "../../src"

const styleA = {
    width: 300,
    height: 300,
    background: "white",
    borderRadius: "10px",
}
export const App = () => {
    return (
        <motion.div
            drag="x"
            dragConstraints={{ left: -500, right: 500 }}
            overdrag
            dragMomentum
            style={styleA}
        />
    )
}