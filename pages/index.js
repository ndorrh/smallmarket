export default function Home() {
  return (
    <div className="bg-blue-900 w-screen h-screen flex items-center justify-center">
     <div className="flex gap-2">
        <button className="bg-white p-4 rounded-lg">Login with Google</button>
        <button className="bg-white p-4 rounded-lg">Login with Facebook</button>
     </div>
    </div>
  )
}
