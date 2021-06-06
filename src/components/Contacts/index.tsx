import React, { FC } from 'react'

import { MainContacts } from './MainContacts'
import { AdditionalContacts } from './AdditionalContacts'

export const Contacts: FC = () => (
  <section className='constacts'>
    <h3 className='contact__title'>Contacts</h3>
    <ul className='contacts__list'>
      <MainContacts />
      <AdditionalContacts />
    </ul>
  </section>
)
