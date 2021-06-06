import React, { FC } from 'react'

import { MainContacts } from './components/MainContacts'
import { AdditionalContacts } from './components/AdditionalContacts'

export const Contacts: FC = () => (
  <section className='constacts'>
    <h3 className='contact__title'>Contacts</h3>
    <ul className='contacts__list'>
      <MainContacts />
      <AdditionalContacts />
    </ul>
  </section>
)
