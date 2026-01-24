export const getCookie = (name: string): string | null => {
  const match = document.cookie.split('; ').find((c) => c.startsWith(`${name}=`))
  return match ? decodeURIComponent(match.split('=')[1]) : null
}
