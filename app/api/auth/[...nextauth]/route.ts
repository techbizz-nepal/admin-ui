import NextAuth from "next-auth"

import { authOptions } from "@/modules/auth/domain/config/auth-options"

const handler: unknown = NextAuth(authOptions)

export { handler as GET, handler as POST }
