export interface main {
  feedurl: string;
  siteurl: string;
  title: string;
  description: string;
  /**@example`aaa,bbb` */
  keywords: string;
  category: string;
  /**@example`ja` */
  language: string;
  author: string;
  email: string;
  imageurl: string;
}

export interface episodetype {
    title: string;
    siturl: string;
    pubdate: Date;
    description: string;
    /**@example `audio/mp3`
     * @description This is mime type */
    filetype: string;
    fileurl: string;
    filesize: number;
    guid: string;
    author: string;
    duration: string;
    explicit: boolean;
    episodeType: string;
    imageurl: string;
}
