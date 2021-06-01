import React, { FC } from 'react'

import {
  IconGitHub,
  IconGitLab,
  IconLinkedIn,
  IconMail,
  IconPhone,
  IconTelegram,
  IconWakatime
} from '@components/icons'

export const Contacts: FC = () => (
  <div className='wrapper-left d-flex flex-column mt-6'>
      <h3 className='mb-4'>Contacts</h3>
      <ul className='lisn my-0'>
        <li className='mb-4 mr-auto'>
          <a className='d-flex align-items-center t-gray' href='mailto:sladkov.e.m@outlook.com?subject="Job invitation"'>
            <IconMail classes='mr-4' size='x1h' />
            sladkov.e.m@outlook.com
          </a>
        </li>
        <li className='mb-4'>
          <a className='d-flex align-items-center t-gray' href='tel:+79188900075'>
            <IconPhone classes='mr-4' size='x1h' />
            +7 (918) 890-00-75
          </a>
        </li>
        <li className='mb-4'>
          <a className='d-flex align-items-center t-gray' href='tg:https://t.me/NeikaN_N'>
            <IconTelegram classes='mr-4' size='x1h' />
            @NeikaN_N
          </a>
        </li>
        <li className='d-flex'>
          <a className='mr-4' href='https://wakatime.com/@Neikan' target='blank1'>
            <IconWakatime size='x1h' />
          </a>
          <a className='mr-4' href='https://github.com/Neikan' target='blank2'>
            <IconGitHub size='x1h' />
          </a>
          <a className='mr-4' href='https://gitlab.com/Neikan' target='blank3'>
            <IconGitLab size='x1h' />
          </a>
          <a className='mr-4' href='https://www.linkedin.com/in/neikan' target='blank4'>
            <IconLinkedIn size='x1h' />
          </a>
        </li>
      </ul>
  </div>
)
