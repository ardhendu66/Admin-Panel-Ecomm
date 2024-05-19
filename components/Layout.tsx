import { ReactNode, useEffect, useState } from "react"
import Link from "next/link"
import { GiHamburgerMenu } from "react-icons/gi"
import { MdCancel } from "react-icons/md"
import { RiAdminFill } from "react-icons/ri"
import Sidebar from "./Sidebar"

interface ReactNodeArray extends Array<ReactNode> {}
type ChildProps = { children: ReactNode | ReactNodeArray | boolean | null | undefined }

function Layout({children}: ChildProps) {
  const [showSideBar, setShowSideBar] = useState(true)

  useEffect(() => {
    setShowSideBar(window.localStorage.getItem("openSideBar") === "1" ? true : false)
  }, [])

  useEffect(() => {
    window.localStorage.setItem("openSideBar", showSideBar ? "1" : "0")
  }, [showSideBar])


  return (
    <div className="bg-bgGray flex min-h-screen max-md:flex-col">
      <Sidebar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      <div 
        className={`${!showSideBar && "bg-white w-full"} bg-bgGray text-black fixed cursor-pointer rounded-full`}
        onClick={() => setShowSideBar(!showSideBar)}
      >
      {
        showSideBar 
          ? 
        <MdCancel className="w-10 h-10 rounded-full" />  
          : 
        (
          <div className="flex w-full bg-bgGray pb-1">
            <GiHamburgerMenu className="w-10 h-10 mr-4" />
            <div className="w-full flex justify-center">
              <Link href={'/'} className="flex gap-1 text-sky-700 font-medium">
                <RiAdminFill className="w-10 h-10 text-sky-700"/>
                <span className="text-3xl font-semibold mt-1 underline"> 
                  AdminDashboard
                </span>
              </Link>
            </div>
          </div>
        )
      }
      </div>
      <div 
        className={`${!showSideBar && "rounded-lg pt-20 ml-2"} text-black bg-white flex-grow my-2 mr-2 rounded-lg p-4`}
      >
        {children}
      </div>
    </div>
  )
}

export default Layout;