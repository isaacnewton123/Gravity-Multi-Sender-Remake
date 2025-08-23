const StepBar = () => {
    return (
        <div className="flex items-center justify-center ">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="h-8 w-8 flex items-center justify-center rounded-full font-bold bg-pink-600 text-white">
              1
            </div>
            <span className="text-center mt-2 text-xs font-semibold text-pink-400">
              Connect Wallet
            </span>
          </div>

          {/* Divider 1 */}
          <div className="h-px w-24 bg-pink-600 mx-2"></div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="h-8 w-8 flex items-center justify-center rounded-full font-bold bg-pink-600 text-white">
              2
            </div>
            <span className="text-center mt-2 text-xs font-semibold text-pink-400">
              Input Recipient
            </span>
          </div>

          {/* Divider 2 */}
          <div className="h-px w-24 bg-gray-200 mx-2"></div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="h-8 w-8 flex items-center justify-center rounded-full font-bold bg-gray-200 text-gray-500">
              3
            </div>
            <span className="text-center mt-2 text-xs font-semibold text-gray-500">
              Review & Submit
            </span>
          </div>
        </div>

    )
}

export default StepBar