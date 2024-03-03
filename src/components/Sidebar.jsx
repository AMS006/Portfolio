import { motion } from "framer-motion";

const variants = {
    open: {
        transition: {
            staggerChildren: 0.1,
        },
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
        },
    },
};
const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
    },
    closed: {
        y: 50,
        opacity: 0,
    },
};

const Sidebar = ({ setIsOpen }) => {
    const items = [
        {
            name: "Home",
            link: "#"
        },
        {
            name: "About",
            link: "#about"
        },
        {
            name: "Projects",
            link: "#projects"
        },
        {
            name: "Contact",
            link: "#contact"
        }
    ];

    return (
        <motion.div variants={variants} className="h-full flex flex-col justify-center items-center gap-8">
            {items.map((item) => (
                <motion.a
                    href={`${item.link}`}
                    key={item.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(false)}
                >
                    {item.name}
                </motion.a>
            ))}
        </motion.div>
    );
};

export default Sidebar;