import { JobBlockSide } from '@consts'

export interface IJobBlock {
  company: string
  period: string
  position: string
}

export interface IJobBlockExtended extends IJobBlock {
  side: JobBlockSide
}
