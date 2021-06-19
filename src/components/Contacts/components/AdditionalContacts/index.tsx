import React, { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { LinkTarget } from '@consts/common'
import { ADDITIONAL_CONTACTS, ContactType } from '@consts/contacts'

import { Contact } from '../Contact'

export const AdditionalContacts: FC = () => (
  <li key={uuidv4()} className='contacts__item--additional'>
    {ADDITIONAL_CONTACTS.map((contact, index) => {
      const target = `${LinkTarget.CONTACTS}${index}`

      return (
        <Contact
          key={uuidv4()}
          contact={contact}
          target={target}
          type={ContactType.ADDITIONAL}
        />
      )
    }
    )}
  </li>
)
