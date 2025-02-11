import { RiMoneyDollarBoxLine } from "react-icons/ri"
import { CiGift } from "react-icons/ci"
import { PiChartLineUp } from "react-icons/pi"
import Image from "next/image"
import { useState } from "react"

export enum IMAGESTATUS {
  REVENUE_IMAGE = "image1.gif",
  PERKS_IMAGE = "image2.gif",
  BITBOT_IMAGE = "image3.gif",
}

const Explanation = () => {
  const [imageStatus, setImageStatus] = useState(IMAGESTATUS.REVENUE_IMAGE)
  return (
    <div className="w-full md:grid grid-cols-3 justify-center items-center text-white_2 mt-[90px] md:mt-[150px]">
      <div className="col-span-2 flex flex-col justify-center items-start gap-[3px] md:gap-[5px]">
        <button
          type="button"
          className={`flex jsutify-start items-start gap-[15px] p-4 rounded-[15px] ${
            imageStatus === IMAGESTATUS.REVENUE_IMAGE ? "bg-green" : ""
          }`}
          onClick={() => setImageStatus(IMAGESTATUS.REVENUE_IMAGE)}
        >
          <RiMoneyDollarBoxLine className="text-[24px] mt-2" />
          <div className="flex flex-col justify-start items-start ">
            <p className="font-fixedsys font-bold text-lg md:text-3xl mb-2">Revenue Share</p>
            <p className="font-seoge font-500 text-xs md:text-base tracking-[2px] text-left">
              {`Rewards $BITBOT holders with the platform's \n
              progressive growth. Best in the market, \n
              guaranteed.`}
            </p>
          </div>
        </button>
        <button
          type="button"
          className={`flex jsutify-start items-start gap-[15px] p-4 rounded-[15px] ${
            imageStatus === IMAGESTATUS.PERKS_IMAGE ? "bg-green" : ""
          }`}
          onClick={() => setImageStatus(IMAGESTATUS.PERKS_IMAGE)}
        >
          <CiGift className="text-[24px] mt-2" />
          <div className="flex flex-col justify-start items-start ">
            <p className="font-fixedsys font-bold text-lg md:text-3xl mb-2">Revenue Share</p>
            <p className="font-seoge font-500 text-xs md:text-base tracking-[2px] text-left">
              {`$BITBOT holders indulge in unique, \n
              electrifying perks and airdrops.`}
            </p>
          </div>
        </button>
        <button
          type="button"
          className={`flex jsutify-start items-start gap-[15px] p-4 rounded-[15px] ${
            imageStatus === IMAGESTATUS.BITBOT_IMAGE ? "bg-green" : ""
          }`}
          onClick={() => setImageStatus(IMAGESTATUS.BITBOT_IMAGE)}
        >
          <PiChartLineUp className="text-[24px] mt-2" />
          <div className="flex flex-col justify-start items-start ">
            <p className="font-fixedsys font-bold text-lg md:text-3xl mb-2">Revenue Share</p>
            <p className="font-seoge font-500 text-xs md:text-base tracking-[2px] text-left">
              {`Unveiling the future of exponential growth, \n
              $BitBot Token isn't just an investment; it's \n
              also a gateway to identifying and capitalizing \n
              on the next big market winners.`}
            </p>
          </div>
        </button>
      </div>
      <div className="col-span-1 w-full rounded-[20px] my-[10px] md:mx-[20px] overflow-hidden">
        <Image
          src={`/images/landing/${imageStatus}`}
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
    </div>
  )
}

export default Explanation
