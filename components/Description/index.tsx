import dynamic from 'next/dynamic'
import Image from 'next/image'
import Check from '../Check'
import NumPassesMinted from '../NumPassedMinted'

const MintCountdown = dynamic(() => import('../MintCountdown'), {
  loading: () => <>Loading...</>
})

const Description = () => {
  return <></>

  // return (
  //   <div className="mt-48 max-w-md text-center mx-auto text-lg">
  //     <div className="text-4xl">Your game may or may not be notable</div>
  //     <div className="my-12 h-12 w-12 mx-auto">
  //       <Check color="#000" />
  //     </div>
  //     {/* <div>Forge it's notability on persistent ledger</div> */}
  //     <div className="mt-12 text-4xl">CheckTacToe Mint Pass</div>
  //     <a
  //       className="cursor-pointer"
  //       href="https://create.zora.co/collections/0x764d80f0462f5769d30821c0c9352b9af653a5c9"
  //       target="_blank"
  //     >
  //       <div className="mt-12 group">
  //         <Image
  //           className="rounded-xl rounded-b-none shadow-2xl shadow-grey-light"
  //           src="/img/mint-pass.gif"
  //           alt="Animated picture with different coloured CheckTacToe plays"
  //           width="1800"
  //           height="1800"
  //         />
  //         <div className="bg-black text-white rounded-xl rounded-t-none px-4 py-3 font-medium text-xl">
  //           <div className="flex flex-row justify-between items-center">
  //             <div className="flex flex-col items-start">
  //               <div>Mint</div>
  //               <div className="-mt-1 text-grey text-base">Free</div>
  //             </div>
  //             <div className="flex flex-col items-end">
  //               <MintCountdown />
  //               <div className="-mt-1 text-grey text-base">
  //                 <NumPassesMinted />
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </a>
  //     <div className="mt-4">Artwork may or may not be burnable.</div>
  //     <div className="mt-12 text-lg text-grey">Inspired by</div>
  //     <div className="text-2xl">Jack Butcher's</div>
  //     <a
  //       href="https://checks.art/"
  //       target="_blank"
  //       className="underline leading-6 text-2xl"
  //     >
  //       Checks
  //     </a>
  //   </div>
  // )
}

export default Description
