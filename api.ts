import axios from "axios";

export interface Album{
  userId: number,
  id: number,
  title: string}


export interface Gallery{
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string
}

export interface  AlbumResponse {
  data: Album;
}
export interface GalleryResponse {
  data:Gallery;
}

const getAlbums = ({ queryKey }: any) => {
  const [_key, feedId]: [string, number] = queryKey;
  return axios.get<string, AlbumResponse>(`https://jsonplaceholder.typicode.com/albums`);
}

const getGallery = ({ queryKey }: any) => {
  const [_key, albumId]: [string, number] = queryKey;
  // console.log(albumId)
  return axios.get<string, GalleryResponse>(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
};

export const GalleryApi = {
  getGallery,
  getAlbums
}
