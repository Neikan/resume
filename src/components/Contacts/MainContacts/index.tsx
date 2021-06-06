import React, { FC, ReactElement } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { MAIN_CONTACTS } from '../consts'

import { IContact } from '../types'

const renderMainContact = ({ icon, title, url }: IContact): ReactElement => (
  <li className='contacts__main-element' key={uuidv4()}>
    <a className='contacts__main-link' href={url}>
      {icon}
      {title}
    </a>
  </li>
)

export const MainContacts: FC = () => <>{MAIN_CONTACTS.map(renderMainContact)}</>
