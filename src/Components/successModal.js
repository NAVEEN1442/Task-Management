import tickMark from "../assets/image.png"

export default function AddSuccessModal() {
  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto">
    <div className="w-[315px] flex flex-col items-center justify-center h-[227px] gap-[10px] bg-white rounded-[30px] border p-6">

            <img className=" w-[100px] h-[80px] " src={tickMark} />

            <p className=" text-black text-center  font-bold text-[16px] w-[223px] h-[44px] " >new task has been created successfully</p>

            <button onClick={()=>{window.location.reload()}} className=" text-white w-[271px] h-[48px] rounded-[10px] bg-[#000000] " >Back</button>





        </div>
      </div>
    

  )
}
