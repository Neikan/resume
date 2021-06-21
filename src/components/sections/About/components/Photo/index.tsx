import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const Photo: FC = () => {
  const { t } = useTranslation()

  return (
    <picture>
      <source type='image/webp' media='(min-width: 1280px)' srcSet='img/foto/me-desktop@1x.webp 1x, img/foto/me-desktop@2x.webp 2x' />
      <source type='image/webp' media='(min-width: 768px)' srcSet='img/foto/me-tablet@1x.webp 1x, img/foto/me-tablet@2x.webp 2x' />
      <source type='image/webp' srcSet='img/foto/me-mobile@1x.webp 1x, img/foto/me-mobile@2x.webp 2x' />
      <source media='(min-width: 1280px)' srcSet='img/foto/me-desktop@1x.png 1x, img/foto/me-desktop@2x.png 2x' />
      <source media='(min-width: 768px)' srcSet='img/foto/me-tablet@1x.png 1x, img/foto/me-tablet@2x.png 2x' />
      <img src='img/foto/me.png' alt={t('about:photo')} className='about__photo' />
    </picture>
  )
}
