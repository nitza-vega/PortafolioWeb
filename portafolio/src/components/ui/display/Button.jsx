export default function Button({ children }) {
    return (
        <button className="
            px-5 py-5 md:px-8 md:py-5
            bg-gradient-to-b from-[#572083] via-[#6F29A8] to-[#9D57D6] rounded-[15px] 
            flex flex-col justify-center items-center text-center
            text-(length:--text-sm-button) md:text-(length:--text-lg-button) font-bold tracking-[0.7]
            hover:scale-105 hover:shadow-sm hover:cursor-pointer hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]
            active:scale-95
            duration-300 transition-all">
            {children}
        </button>
    )
}