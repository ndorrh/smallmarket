import Nav from "@/components/Nav"
import { useSession, signIn, signOut } from "next-auth/react"

export default function Layout({children}) {
  const { data: session } = useSession()
  if (session) {
    return (
      <div className="bg-blue-900 w-screen min-h-screen flex">
        <Nav />
        <div className="bg-white flex-grow mt-2 mr-2 rounded-lg px-4 mb-2">{children}</div>
      </div>
    )
  }

  return (
    <div className="bg-blue-900 w-screen h-screen flex items-center justify-center flex-col">
      <p>  Not signed in</p>
      <div className="flex gap-2">
        <button className="bg-white p-4 rounded-lg" onClick={() => signIn('google')}>Login with Google</button>
      </div>
    </div>
  )
}
