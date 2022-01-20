import { ReactNode, createContext, useEffect, useState } from 'react'

import { api } from './services/api'

interface Transaction {
  id: number
  title: string
  amount: number
  type: string
  category: string
  createdAt: string
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionContextData {
  transactions: Transaction[]
  createTransaction: (transaction: TransactionInput) => Promise<void>
}

export const TransactionsContext = createContext<TransactionContextData>(
  {} as TransactionContextData
)

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

  async function createTransaction(transaction: TransactionInput) {
    const res = await api.post('/transactions', {
      ...transaction,
      createdAt: new Date(),
    })

    const { transaction: newTransaction } = res.data

    setTransactions([...transactions, newTransaction])
  }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}
