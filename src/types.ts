export interface main {
  /** @description The show title. */
  title: string;
  /** @description The website associated with a podcast. Use the full URL. */
  link?: string;
  /** @description The show description. */
  description: string;
  /** @example `aaa,bbb` */
  keywords: string;
  /** @link https://podcasters.apple.com/support/1691-apple-podcasts-categories @description The show category information. */
  category: string;
  /** @example `ja` @link https://www.loc.gov/standards/iso639-2/php/code_list.php @description The language spoken on the show. */
  language: string;
  /** @description The group responsible for creating the show. */
  author?: string;
  /** @description The email address associated with the podcast. */
  email: string;
  /** @link https://podcasters.apple.com/ja-jp/support/896-artwork-requirements @description The artwork for the show. */
  imageurl: string;
  /** @description The podcast parental advisory information. */
  explicit: boolean;
  /** @description The show title specific for Apple Podcasts. */
  itunesTitle?: string;
  /** @description The type of show. */
  itunesType?: string;
  /** @description The show copyright details. */
  copyright?: string;
  /** @description The new podcast RSS Feed URL. */
  itunesNewFeedUrl?: string;
  /** @description The podcast show or hide status. */
  itunesBlock?: string;
  /** @description The podcast update status. */
  itunesComplete?: string;
}

export interface episodetype {
  /** @description guid is the episode identifier. Do not inadvertently change it for the same episode. */
  guid: string;
  /** @description An episode title. */
  title: string;
  /** @description An episode link URL. Use the full URL. */
  siteurl?: string;
  /** @description The date and time when an episode was released. */
  pubdate?: Date;
  /** @description An episode description. */
  description?: string;
  /** @example `audio/mp3` @description This is mime type. */
  filetype: string;
  /** @description The URL of the episode content. */
  fileurl: string;
  /** @description The file size in bytes. */
  filesize: number;
  /** @description The group responsible for creating the episode. */
  author?: string;
  /** @description The duration of an episode. */
  duration?: string;
  /** @description The episode parental advisory information. */
  explicit?: boolean;
  /** @description The episode type. */
  episodeType?: string;
  /** @link https://podcasters.apple.com/ja-jp/support/896-artwork-requirements @description The episode artwork. */
  imageurl?: string;
}
