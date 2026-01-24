export interface ArtistSearchResultWrapper {
  artists: ArtistSearchResponse
}

export interface ArtistSearchResponse {
  href: string
  items: ArtistItem[]
  limit: number
  next: string | null
  offset: number
  previous: string | null
  total: number
}

export interface ArtistItem {
  externalUrls: string[]
  followers: {
    href: string | null
    total: number
  }
  genres: string[]
  href: string
  id: string
  images: Image[]
  name: string
  popularity: number
  type: string
  uri: string
}

interface Image {
  height: number | null
  url: string
  width: number | null
}
