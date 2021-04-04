export interface IJobBlock {
  company: string
  period: string
  position: string
}

export interface IJobBlocks {
  [key: string]: IJobBlock
}
