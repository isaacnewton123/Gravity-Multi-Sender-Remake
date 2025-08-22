const StepBar = () => {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <button className="w-8 h-8 rounded-full bg-pink-600 text-white">
                1
            </button>
            <div className="w-18 h-px bg-pink-600" />
            <button className="w-8 h-8 rounded-full bg-pink-300 text-white">
                2
            </button>
            <div className="w-18 h-px bg-pink-600" />
            <button className="w-8 h-8 rounded-full bg-pink-300 text-white">
                3
            </button>
        </div>
    )
}

export default StepBar