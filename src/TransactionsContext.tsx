import { ReactNode, createContext, useEffect, useState } from 'react'

import { api } from './services/api'

interface Transaction {
  id: number
  title: string
  value: number
  type: string
  category: string
  createdAt: string
}

export const TransactionsContext = createContext<Transaction[]>([])

interface TransactionsProviderProps {
  children: ReactNode
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api
      .get(`transactions`)
      .then((res) => setTransactions(res.data.transactions))
  }, [])

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  )
}
