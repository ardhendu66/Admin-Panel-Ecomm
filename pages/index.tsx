import Layout from "@/components/Layout"
import { useSession, signIn } from "next-auth/react"
import Image from "next/image"

function Index() {
  const {data: session} = useSession()
  const sourceOfImage: string = session?.user?.image!

  if(!session) {
    return (
      <div className="bg-bgGray w-screen min-h-screen flex items-center">
        <div className="text-center w-full">
          <button
            className="bg-sky-500 text-white py-2 px-4 rounded-md"
            onClick={() => signIn('google')}
          >
            Login with Google
          </button>
        </div>
      </div>
    )
  }

  return (
    <Layout>
      <div className="text-blue-900 flex justify-between m-3">
        <h2>
          Hello, {session?.user?.name}
        </h2>
        <div className="bg-gray-300 gap-1 text-black flex justify-between rounded-xl overflow-hidden pr-2">
          <span className="w-8 h-8">
            {/* <Image 
              src={sourceOfImage}
              alt="error"
              fill
              objectFit="cover"
              className="w-8 h-8 rounded-sm"
            /> */}
          </span>
          <span className="flex items-center justify-center">
            {session?.user?.name}
          </span>
        </div>
      </div>
    </Layout>
  )
}

export default Index;