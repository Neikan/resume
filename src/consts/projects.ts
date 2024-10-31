import { IProject } from '@types'

export const HEADINGS = [
  'projects:headings.title',
  'projects:headings.platform',
  'projects:headings.type',
  'projects:headings.description',
  'projects:headings.technologies'
]

export enum ProjectType {
  COMMERCIAL = 'commercial',
  PRIVATE = 'private',
  TRAINING = 'training'
}

export const PROJECTS: IProject[] = [
  {
    name: 'M.Life',
    description: 'projects:description.MLife',
    technologies: 'Flutter, Dart (Flutter Bloc, Dio, i18n, Firebase, Freezed, etc.)',
    type: ProjectType.COMMERCIAL,
    urls: [
      {
        title: 'iOS',
        url: 'https://apps.apple.com/app/m-life/id6636485194'
      },
      {
        title: 'Android',
        url: 'https://play.google.com/store/apps/details?id=com.mlife.mtgagro.app'
      }
    ]
  },
  {
    name: 'TerraLife',
    description: 'projects:description.TerraLife',
    technologies: 'Flutter, Dart (Flutter Bloc, Dio, i18n, Firebase, Freezed, etc.)',
    type: ProjectType.COMMERCIAL,
    urls: [
      {
        title: 'iOS',
        url: 'https://apps.apple.com/ru/app/terralife/id6444009593'
      },
      {
        title: 'Android',
        url: 'https://www.rustore.ru/catalog/app/com.terralink.app'
      }
    ]
  },
  {
    name: 'YGroup',
    description: 'projects:description.YGroup',
    technologies: 'Flutter, Dart (Flutter Bloc, Dio, i18n, Firebase, Freezed, Google Maps, Yandex Maps etc.)',
    type: ProjectType.COMMERCIAL,
    urls: [
      {
        title: 'iOS',
        url: 'https://apps.apple.com/ru/app/ygroup/id6446233387'
      },
      {
        title: 'Android',
        url: 'https://play.google.com/store/apps/details?id=com.ygroupcompany.app&hl=ru'
      }
    ]
  },
  {
    name: 'Zeus File Manager',
    description: 'projects:description.Zeus',
    technologies: 'Flutter, Dart (Flutter Bloc, Dio, i18n, Firebase, Freezed, etc.)',
    type: ProjectType.COMMERCIAL,
    urls: [
      {
        title: 'iOS',
        url: 'https://apps.apple.com/ru/app/zeus-file-manager/id6449832116?l=en-GB'
      },
      {
        title: 'Android',
        url: 'https://play.google.com/store/apps/details?id=com.zeus.file'
      }
    ]
  },
  {
    name: 'docuForce Mobile [v2]',
    description: 'projects:description.dFM2',
    technologies: 'Flutter, Dart (Flutter Bloc, Dio, i18n, Firebase, Freezed, etc.)',
    type: ProjectType.COMMERCIAL,
    urls: [
      {
        title: 'iOS',
        url: 'https://apps.apple.com/ru/app/docuforce/id1583931741'
      },
      {
        title: 'Android',
        url: 'https://play.google.com/store/apps/details?id=ru.infologistics.docuforce'
      }
    ]
  },
  {
    name: 'docuForce Mobile [v1]',
    description: 'projects:description.dFM1',
    technologies: 'Cordova, TypeScript, React, Redux, SASS/SCSS, Webpack',
    type: ProjectType.COMMERCIAL,
    urls: [
      {
        title: 'iOS'
      },
      {
        title: 'Android'
      }
    ]
  },
  {
    name: 'docuForce',
    description: 'projects:description.dF',
    technologies: 'TypeScript, React, Redux, Jest, SASS/SCSS, Webpack',
    type: ProjectType.COMMERCIAL,
    urls: [
      {
        title: 'Web',
        url: 'https://docuforce.infologistics.ru/'
      }
    ]
  },
  {
    name: 'RM-Keeper',
    description: 'projects:description.rmk',
    technologies: 'TypeScript, React, Redux, Jest, SASS/SCSS, Webpack',
    type: ProjectType.COMMERCIAL,
    urls: [
      {
        title: 'Web',
        url: 'https://rm-keeper.infologistics.ru'
      }
    ]
  },
  {
    name: 'Frontend Libraries',
    description: 'projects:description.fl',
    technologies: 'TypeScript, React, SCSS, Webpack/Rollup, Styleguidist',
    type: ProjectType.COMMERCIAL,
    urls: [
      {
        title: 'Web',
        url: 'https://www.npmjs.com/package/@infologistics/frontend-libraries'
      }
    ]
  },
  {
    name: 'Resume',
    description: 'projects:description.resume',
    technologies: 'TypeScript, React, SASS/SCSS, Webpack',
    type: ProjectType.PRIVATE,
    urls: [
      {
        title: 'Web',
        url: 'https://neikan.pro'
      }
    ]
  }
]

export const ProjectTypeTranslation = {
  [ProjectType.COMMERCIAL]: 'projects:type.commercial',
  [ProjectType.PRIVATE]: 'projects:type.private',
  [ProjectType.TRAINING]: 'projects:type.training'
}
