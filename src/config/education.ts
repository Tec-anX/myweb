/*
 * @Author: Tec anX 13468639291@163.com
 * @Date: 2025-03-21 22:14:34
 * @LastEditors: Tec anX 13468639291@163.com
 * @LastEditTime: 2025-03-21 23:08:54
 * @FilePath: \myweb\src\config\education.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// education 
export type EducationItemType = {
    school: string
    major: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
  
  
  export const educationList: Array<EducationItemType> = [
    {
      school: 'Xian university of science and technology',
      major: 'Intelligent Science and Technology',
      logo: 'undergraduate',
      start: '2022',
      end: '2026'
    },
  ]