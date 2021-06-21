import React, { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { ContactType, MAIN_CONTACTS } from '@consts/contacts'

import { Contact } from '../Contact'

export const MainContacts: FC = () => (
  <>
    {MAIN_CONTACTS.map((contact) =>
      <Contact key={uuidv4()} contact={contact} type={ContactType.MAIN} />
    )}
  </>
)
