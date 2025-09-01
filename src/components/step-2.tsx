import { useState } from "react";
import { useStepContext } from "../context/step/useStepContext";
import { useDataContext } from "../context/data/useDataContext";
import type { Data } from "../context/data/types";
import { toast } from "react-toastify";

const Step2 = () => {
  const [input, setInput] = useState("");
  const { setData } = useDataContext();
  const { setStep } = useStepContext();
  const isValidEVMAddress = (address: string): boolean => {
    // Regex untuk alamat EVM (0x diikuti 40 karakter hex)
    const evmAddressRegex = /^0x[a-fA-F0-9]{40}$/;
    return evmAddressRegex.test(address);
  };

  // Fungsi yang dipanggil saat tombol "Review" diklik
  const handleReview = () => {
    const lines = input.split("\n");
    const newData: Data[] = [];
    let hasError = false;

    lines.forEach((line, index) => {
      if (line.trim() !== "") {
        const parts = line.split(",");

        if (parts.length === 2) {
          const address = parts[0].trim();
          const amount = parseFloat(parts[1].trim());

          if (!isValidEVMAddress(address)) {
            toast.error(`Invalid EVM address on line ${index + 1}: ${address}`);
            hasError = true;
            return;
          }

          if (isNaN(amount)) {
            toast.error(
              `Invalid amount on line ${index + 1}: ${parts[1].trim()}`
            );
            hasError = true
            return;
          }

          if (!isNaN(amount)) {
            newData.push({
              address,
              amount,
            });
          } else {
            toast.error(
              `Invalid format on line ${index + 1}. Expected: address,amount`
            );
            hasError = true
          }
        }
      }
    });

    if (hasError) {
      return;
    } 

    if (!hasError && newData.length > 0) {
        toast.success(`${newData.length} recipients validated successfully!`);
        setData(newData);
        setStep(3)
    }

    // Jika tidak ada data yang valid
    if (newData.length === 0) {
      toast.error("Please enter at least one valid recipient");
      return;
    }

    
  };

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
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Example :
0x...44D3e,10 
0x...44D3e,0.1"
      />

      {/* Tombol review */}
      <button
        onClick={handleReview}
        className="bg-blue-600 w-32 h-10 rounded-lg text-white font-semibold text-md hover:bg-blue-500 transition-colors duration-200 shadow-lg transform hover:scale-105 cursor-pointer"
      >
        Review
      </button>
    </div>
  );
};

export default Step2;
