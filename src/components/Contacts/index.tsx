import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { MainContacts } from './components/MainContacts'
import { AdditionalContacts } from './components/AdditionalContacts'

export const Contacts: FC = () => {
  const { t } = useTranslation()

  return (
    <section className='constacts'>
      <h3 className='contact__title'>{t('common:contacts')}</h3>
      <ul className='contacts__list'>
        <MainContacts />
        <AdditionalContacts />
      </ul>
    </section>
  )
}
