import { useRouter } from 'next/router'
export function Videocard() {
  const router =useRouter() 
  const handleChange = () => {
    router.push("/video/1")
  }
  return (
    <div>
      <img src="/thumbnail.png" alt="thumbnail" className={"pb-3 rounded-s-2xl cursor-pointer"} onClick={handleChange}/>
      <div className="grid grid-cols-12">
        <div className="col-span-1">
          <img src="/thumbnail.png" alt="profile" className={"rounded-full w-20 h-20"}/>
        </div>
        <div className="col-span-11">
          <p>What it takes to reach $100M+ revenue as a startup</p>
          <div className="text-base text-gray-500">
            EO<br/>
            11K views
          </div>
        </div>
      </div>
    </div>
  )
}

