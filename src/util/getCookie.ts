export const getCookie = (name: string): string | null => {
  const match = document.cookie.split('; ').find((c) => c.startsWith(`${name}=`))
  if (!match) return null
  const value = match.split('=')[1]
  return value ? decodeURIComponent(value) : null
}
