import { ContactType } from '@components/Contacts/consts'

import { IContact } from '@components/Contacts/types'

export interface IContactProps {
  contact: IContact
  target?: string
  type: ContactType
}
