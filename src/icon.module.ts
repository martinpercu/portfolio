import { NgModule } from '@angular/core';

import { TablerIconsModule } from 'angular-tabler-icons';
import {
  IconCamera, IconHeart, IconBrandGithub, IconSun, IconMoon, IconBrandLinkedin, IconMailFast, IconBrandGit,
  IconSourceCode, IconBrandStackshare, IconCodeCircle, IconCodeCircle2, IconFileExport,
  IconFileLike, IconFileTypeDoc, IconLink, IconCode, IconCodeDots, IconBrandYoutube,
  IconBrandGithubFilled,
  IconArrowRight,
  IconArrowLeft,
  IconArrowUp,
  IconArrowDown,
  IconX,
  IconSquareRoundedX,
  IconCaretRight,
  IconSquareRoundedArrowRight,
  IconUserSearch,
  IconBriefcase,
  IconBracketsContain
 } from 'angular-tabler-icons/icons';

// Select some icons (use an object, not an array)
const icons = {
  IconCamera,
  IconHeart,
  IconBrandGithub,
  IconBrandGithubFilled,
  IconSun,
  IconMoon,
  IconBrandLinkedin,
  IconMailFast,
  IconBrandGit,
  IconBrandYoutube,
  IconSourceCode,
  IconBrandStackshare,
  IconCodeCircle,
  IconCodeCircle2,
  IconFileExport,
  IconFileLike,
  IconFileTypeDoc,
  IconLink,
  IconCode,
  IconCodeDots,
  IconArrowRight,
  IconArrowLeft,
  IconArrowUp,
  IconArrowDown,
  IconX,
  IconSquareRoundedX,
  IconCaretRight,
  IconSquareRoundedArrowRight,
  IconUserSearch,
  IconBriefcase,
  IconBracketsContain
};

@NgModule({
  imports: [
    TablerIconsModule.pick(icons)
  ],
  exports: [
    TablerIconsModule
  ]
})
export class IconsModule { }

// NOTES:
// 1. We add TablerIconsModule to the 'exports', since the <i-tabler> component will be used in templates of parent module
// 2. Don't forget to pick some icons using TablerIconsModule.pick({ ... })
