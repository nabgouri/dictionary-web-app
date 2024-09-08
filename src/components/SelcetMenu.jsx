import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { useContext } from "react";
import { FontContext } from "../store/font-theme-context";
// import { IconType } from "react-icons";

const SelectMenu = () => {
  const [open, setOpen] = useState(false);
  const { font, handleFont } = useContext(FontContext);
  const selectFont = (name) => {
    handleFont(name);
    setOpen(false);
    console.log(name);
  };
  return (
    <div className=" mr-4 md:mr-6  flex items-center justify-center ">
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <button
          onClick={() => setOpen((pv) => !pv)}
          className="flex items-center gap-2   text-[#2d2d2d] dark:text-white   "
        >
          <span className="font-bold  text-sm  md:text-lg leading-6">
            {font}
          </span>
          <motion.span variants={iconVariants}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#a445ed"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </motion.span>
        </button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className="flex flex-col z-10 gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden"
        >
          <Option setOpen={setOpen} text="Sans Serif" handleFont={selectFont} />
          <Option setOpen={setOpen} text="Serif" handleFont={selectFont} />
          <Option setOpen={setOpen} text="Mono" handleFont={selectFont} />
        </motion.ul>
      </motion.div>
    </div>
  );
};

const Option = ({ text, setOpen, handleFont }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => handleFont(text)}
      className="  w-full p-2 font-bold text-sm  md:text-lg leading-6  whitespace-nowrap rounded-md hover:bg-indigo-100  text-slate-700 hover:text-[#a445ed] active:text-[rgb(164,69,237)] transition-colors cursor-pointer"
    >
      <span>{text}</span>
    </motion.li>
  );
};

export default SelectMenu;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};
