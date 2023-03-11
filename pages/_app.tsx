import '../styles/globals.css'
import { useState } from 'react'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'
import { AppProps } from 'next/app'

function ChatApp({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session,
}>) {
  const [supabase] = useState(() => createBrowserSupabaseClient())

  return (
    <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
      <Component {...pageProps} />
    </SessionContextProvider>
  )
}
export default ChatApp

// function ChatApp({
//   Component,
//   pageProps,
// }: AppProps<{
//   initialSession: Session,
// }>) {
//   const [supabase] = useState(() => createBrowserSupabaseClient())

//   return (
//     <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
//       <Component {...pageProps} />
//     </SessionContextProvider>
//   )
// }
// export default ChatApp