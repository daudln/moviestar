import {
  QueryClientProvider as TanstackQueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import React from 'react'

const client = new QueryClient();

const QueryClientProvider = ({children}: {children:React.ReactNode}) => {
  return (
    <TanstackQueryClientProvider client={client}>
      {children}
    </TanstackQueryClientProvider>
  )
}

export default QueryClientProvider;