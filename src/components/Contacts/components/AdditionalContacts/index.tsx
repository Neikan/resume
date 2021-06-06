import { LinkTarget } from '@consts'
import React, { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { ADDITIONAL_CONTACTS, ContactType } from '../../consts'

import { Contact } from '../Contact'

export const AdditionalContacts: FC = () => (
  <li key={uuidv4()} className='contacts__additional-element'>
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
