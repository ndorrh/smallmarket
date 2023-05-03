import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()
  if (session) {
    return (
      <div className="bg-blue-900 w-screen min-h-screen ">
        <p> Signed in as {session.user.email}</p>
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
