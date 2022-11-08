import { REGEXS } from 'common/constants'

export const copyToClipBoard = async (text: string) => {
  await navigator.clipboard.writeText(text)
}

export const isValidUrl = (urlString: string) => {
  return !!REGEXS.URL.test(urlString)
}
