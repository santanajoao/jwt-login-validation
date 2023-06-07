import { verifyToken } from "@/services/api";
import { useRouter } from "next/navigation"
import { useCallback, useEffect, useState } from "react"

export default function useJWT({ redirectTo, shouldExist }) {
  const router = useRouter()
  const [data, setData] = useState(null)
  
  const validate = useCallback(async () => {
    const token = localStorage.getItem('token')

    if (shouldExist && !token) {
      router.push(redirectTo)
      return null
    }
    
    const data = await verifyToken(token)

    const valid = !data.message
    if (shouldExist && !valid || !shouldExist && valid) {
      router.push(redirectTo)
      return null
    }

    setData(data)
  }, [redirectTo, router, shouldExist])

  const signOut = () => {
    localStorage.removeItem('token')
    router.push('/signin')
  }

  useEffect(() => { validate() }, [validate]);

  return {
    data,
    signOut,
  }
}
