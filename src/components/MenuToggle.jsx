import * as React from "react";
import { motion } from "framer-motion";



export const MenuToggle = ({ toggle }) => (
    <button onClick={toggle} className="fixed top-[16px] right-[21px] z-50 flex justify-center items-center bg-[#1e293b]  h-12 w-12 rounded-full">
        <svg width="23" height="23" viewBox="0 0 23 23">
            <motion.path
                strokeWidth="3"
                stroke="white"
                strokeLinecap="round"
                d="M 2 9.423 L 20 9.423"
                variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" },
                }}
            />
            <motion.path
                strokeWidth="3"
                stroke="white"
                strokeLinecap="round"
                d="M 2 9.423 L 20 9.423"
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                }}
            />
            <motion.path
                strokeWidth="3"
                stroke="white"
                strokeLinecap="round"
                d="M 2 9.423 L 20 9.423"
                variants={{
                    closed: { d: "M 2 16.346 L 20 16.346" },
                    open: { d: "M 3 2.5 L 17 16.346" },
                }}
            />
        </svg>
    </button>
);
