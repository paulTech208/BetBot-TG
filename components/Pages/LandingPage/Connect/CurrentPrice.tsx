const CurrentPrice = () => (
  <div className="w-full h-[150px] p-3 bg-black rounded-[15px] flex flex-col px-5">
    <p className="font-seoge pt-2 text-base md:text-xl font-bold">$2,768,708 / $2,844,000 RAISED</p>
    <p className="font-seoge text-xs md:text-base pt-2">
      STAGE 11 - Buy in before price increases!
    </p>
    <div>progress bar</div>
    <div className="flex justify-between items-center font-fixedsys text-[9.6px] md:text-xs text-black_3 py-2">
      <p>Current Price $0.0163</p>
      <p>
        Next Stage Price:<span className="text-red">$0.0171</span>
      </p>
    </div>
  </div>
)

export default CurrentPrice
