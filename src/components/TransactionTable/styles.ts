import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      padding: 1rem 2rem;
      color: var(--text-body);
      font-weight: 400;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      color: var(--text-body);
      background: var(--shape);
      border-radius: 0.25rem;

      &:first-child {
        color: var(--text-title);
      }

      &.income {
        color: var(--green);
      }

      &.outcome {
        color: var(--red);
      }
    }
  }
`
