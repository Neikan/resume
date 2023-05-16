import { IProject } from '@types'

export const HEADINGS = [
  'projects:headings.title',
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
    name: 'docuForce Mobile [Android][v2]',
    description: 'projects:description.dFM2',
    technologies: 'Flutter, Dart (Flutter Bloc, Dio, i18n, Firebase, Freezed, etc.)',
    type: ProjectType.COMMERCIAL,
    url: 'https://play.google.com/store/apps/details?id=ru.infologistics.docuforce'
  },
  {
    name: 'docuForce Mobile [iOS][v2]',
    description: 'projects:description.dFM2',
    technologies: 'Flutter, Dart (Flutter Bloc, Dio, i18n, Firebase, Freezed, etc.)',
    type: ProjectType.COMMERCIAL,
    url: 'https://apps.apple.com/ru/app/docuforce/id1583931741'
  },
  {
    name: 'docuForce',
    description: 'projects:description.dF',
    technologies: 'TypeScript, React, Redux, Jest, SASS/SCSS, Webpack',
    type: ProjectType.COMMERCIAL,
    url: 'https://docuforce.infologistics.ru/'
  },
  {
    name: 'docuForce Mobile [Android][v1]',
    description: 'projects:description.dFM1',
    technologies: 'Cordova, TypeScript, React, Redux, SASS/SCSS, Webpack',
    type: ProjectType.COMMERCIAL
  },
  {
    name: 'docuForce Mobile [iOS][v1]',
    description: 'projects:description.dFM1',
    technologies: 'Cordova, TypeScript, React, Redux, SASS/SCSS, Webpack',
    type: ProjectType.COMMERCIAL
  },
  {
    name: 'RM-Keeper',
    description: 'projects:description.rmk',
    technologies: 'TypeScript, React, Redux, Jest, SASS/SCSS, Webpack',
    type: ProjectType.COMMERCIAL,
    url: 'https://rm-keeper.infologistics.ru'
  },
  {
    name: 'Frontend Libraries',
    description: 'projects:description.fl',
    technologies: 'TypeScript, React, SCSS, Webpack/Rollup, Styleguidist',
    type: ProjectType.COMMERCIAL,
    url: 'https://www.npmjs.com/package/@infologistics/frontend-libraries'
  },
  {
    name: 'Resume',
    description: 'projects:description.resume',
    technologies: 'TypeScript, React, SASS/SCSS, Webpack',
    type: ProjectType.PRIVATE,
    url: 'https://neikan.pro'
  },
  {
    name: 'Bloc',
    description: 'projects:description.bloc',
    technologies: 'Flutter, Dart (Flutter Bloc, Dio, GetIt, Freezed)',
    type: ProjectType.TRAINING,
    url: 'https://github.com/Neikan/sb13-flutter_bloc'
  },
  {
    name: 'Cubit',
    description: 'projects:description.cubit',
    technologies: 'Flutter, Dart (Flutter Bloc, Dio, GetIt, Freezed)',
    type: ProjectType.TRAINING,
    url: 'https://github.com/Neikan/sb13-cubit'
  },
  {
    name: 'Redux',
    description: 'projects:description.redux',
    technologies: 'Flutter, Dart (Flutter Redux, Redux, Dio, GetIt, Freezed)',
    type: ProjectType.TRAINING,
    url: 'https://github.com/Neikan/sb13-redux'
  },
  {
    name: 'Riverpod',
    description: 'projects:description.riverpod',
    technologies: 'Flutter, Dart (Flutter Riverpod, Dio, GetIt, Freezed)',
    type: ProjectType.TRAINING,
    url: 'https://github.com/Neikan/sb13-riverpod'
  },
  {
    name: 'Riverpod with hooks',
    description: 'projects:description.riverpodHooks',
    technologies: 'Flutter, Dart (Flutter Riverpod, Flutter Hooks, Dio, GetIt, Freezed)',
    type: ProjectType.TRAINING,
    url: 'https://github.com/Neikan/sb13-riverpod-hooks'
  },
  {
    name: 'Stream Bloc',
    description: 'projects:description.streamBloc',
    technologies: 'Flutter, Dart (Dio, GetIt, Freezed)',
    type: ProjectType.TRAINING,
    url: 'https://github.com/Neikan/sb13-stream-bloc'
  },
  {
    name: 'SSM',
    description: 'projects:description.ssm',
    technologies: 'Flutter, Dart (Provider, Dio, GetIt, Freezed)',
    type: ProjectType.TRAINING,
    url: 'https://github.com/Neikan/sb13-ssm'
  }
]

export const ProjectTypeTranslation = {
  [ProjectType.COMMERCIAL]: 'projects:type.commercial',
  [ProjectType.PRIVATE]: 'projects:type.private',
  [ProjectType.TRAINING]: 'projects:type.training'
}
