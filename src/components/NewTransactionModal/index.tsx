import { useState } from 'react'
import Modal from 'react-modal'

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { Container, RadioBox, TransactionTypeContainer } from './styles'

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

type TransactionType = 'income' | 'outcome'

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [type, setType] = useState<TransactionType>('income')

  function handleSetTransactionType(type: TransactionType) {
    setType(type)
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal__overlay"
      className="react-modal__content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal__close"
      >
        <img src={closeImg} alt="Close new transaction modal" />
      </button>

      <Container>
        <h2>Register transaction</h2>

        <input type="text" placeholder="Title" />

        <input type="number" placeholder="Value" />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => handleSetTransactionType('income')}
            isActive={type === 'income'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Income" />
            <span>Income</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => handleSetTransactionType('outcome')}
            isActive={type === 'outcome'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Outcome" />
            <span>Outcome</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input type="text" placeholder="Category" />

        <button type="submit">Register</button>
      </Container>
    </Modal>
  )
}
