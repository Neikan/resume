import { ContactType } from '@consts/contacts'

import { IContact } from '@components/sections/Contacts/types'

export interface IContactProps {
  contact: IContact
  target?: string
  type: ContactType
}
