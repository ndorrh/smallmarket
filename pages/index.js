import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <Layout>
      <div className="text-blue-900 flex justify-between">
        <h1>  Hello, {session?.user?.name}</h1>
        <div className="flex bg-gray-300 gap-1 text-black rounded-lg overflow-hidden">
          <img src={session?.user?.image} alt="user image" className="w-6 h-6 " />
          {session?.user?.name}
        </div>

      </div>
    </Layout>
  )
}
