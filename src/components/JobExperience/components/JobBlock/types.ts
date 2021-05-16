import { IJobBlock } from '@types'

export type TJobBlockSide = 'left' | 'right'

export interface IJobBlockProps {
  job: IJobBlock
  side?: TJobBlockSide
}
