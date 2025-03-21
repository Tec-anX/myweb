/*
 * @Author: Tec anX 13468639291@163.com
 * @Date: 2025-02-24 20:38:10
 * @LastEditors: Tec anX 13468639291@163.com
 * @LastEditTime: 2025-03-21 22:08:00
 * @FilePath: \myweb\src\config\infoConfig.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'Tec_anX'
export const headline = 'A student in XUST.'
export const introduction =
  "Tec_anX, XUST student, specializes in Machine Learning and Deep Learning, passionate about AI innovations."
export const email = '13468639291@163.com'
export const githubUsername = 'Tec_anX'

// about page
export const aboutMeHeadline = 'Who Are You and Why Should I Care?'
export const aboutParagraphs = [
  "Coucou Les Amis! My name is Tec_anX. I'm from [Your City/Country] and a proud alumnus of XUST, where I've been diving deep into the fascinating world of Machine Learning, Deep Learning, and Large-Scale Model Applications since 2023",
  'Currently, I am immersed in developing a groundbreaking course known as Innovative AI Ventures where high school students embark on an exhilarating journey to create real-world products and startups, all while pushing the boundaries of AI and Deep Learning. This course not only fosters technical prowess but also nurtures entrepreneurial spirit and innovative thinking.',
  "Driven by a passion for continuous learning and knowledge-sharing, I've launched this blog as a platform to document my daily discoveries and insights. Here, you'll find a blend of educational content focused on the intricacies of AI, Deep Learning, and Large-Scale Model Applications, interspersed with reflections on life lessons and personal growth. Whether you're a fellow enthusiast or just curious about the intersection of technology and life, there's something here for everyone.",
]

// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro =
  "I've written something about AI, programming and life."

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Tiktok',
    icon: 'tiktok',
    href: 'https://www.douyin.com/user/MS4wLjABAAAAkD1T5TbHxLToBOh4-4uCwYsRPlMteBJeMUhk_kt5rMw?from_tab_name=main',
  },
  {
    name: 'Bilibili',
    icon: 'bilibili',
    href: 'https://space.bilibili.com/1075121017',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'supabase',
  'cloudflare',
  'java',
  'oracle',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'postgresql',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'androidstudio',
  'ios',
  'apple',
  'wechat',
]
