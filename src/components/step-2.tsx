import { useStepContext } from "../context/useStepContext"

const Step2 = () => {

    const {setStep} = useStepContext()
    const handleSubmit = () => {
        setStep(3)
    }
    return (
        <div className="p-10 max-w-xl w-full flex flex-col items-center space-y-4">
            {/* Judul dengan font yang lebih kecil */}
            <h2 className="text-pink-200 text-2xl font-bold text-center tracking-wide jockey-one-regular">
                Input Recipient and Amount
            </h2>

            {/* Area teks dengan latar belakang putih, tinggi dan baris yang dikurangi, serta placeholder yang lebih kecil dan rata kiri */}
            <textarea
                className="bg-white text-gray-800 rounded-lg w-full p-4 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 resize-none h-24 text-sm"
                rows={5}
                placeholder="Example :
0x...44D3e,10 
0x...44D3e,10"
            />

            {/* Tombol review */}
            <button
            onClick={handleSubmit}
            className="bg-blue-600 w-32 h-10 rounded-lg text-white font-semibold text-md hover:bg-blue-500 transition-colors duration-200 shadow-lg transform hover:scale-105 cursor-pointer">
                Review
            </button>
        </div>
    )
}

export default Step2