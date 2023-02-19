export interface SmallThumbnail {
    name: string;
    width: number;
    height: number;
    size: number;
    url: string;
}

export interface ThumbnailFormats {
    thumbnail: SmallThumbnail;
}

export interface ThumbnailAttributes {
    name: string;
    width: number;
    height: number;
    formats: ThumbnailFormats;
    url: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface ThumbnailData {
    id: number;
    attributes: ThumbnailAttributes;
}

export interface ActionThumbnail {
    data: ThumbnailData;
}

export interface ActionAttributes {
    Title: string;
    Description: string;
    Price: number;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    Thumbnail: ActionThumbnail;
}

export interface ActionsData {
    id: number;
    attributes: ActionAttributes;
}

export interface ActionsPagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}

export interface ActionsMeta {
    pagination: ActionsPagination;
}

export interface Actions {
    data: ActionsData[];
    meta: ActionsMeta;
}
