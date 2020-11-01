/* eslint-disable no-console */
import { existsSync, readdirSync, rmdirSync, statSync, unlinkSync } from 'fs'

const deleteDir = (path) => {
  if (existsSync(path)) {
    const files = readdirSync(path)
    files.forEach((i) => {
      const currentPath = `${path}/${i}`
      if (statSync(currentPath).isDirectory()) {
        deleteDir(currentPath)
      } else {
        unlinkSync(currentPath)
      }
    })
    rmdirSync(path)
  }
}

console.log('start pre-cleanning')
deleteDir('./dist')
deleteDir('./min')
console.log('pre-cleanning done')
