export interface MLSearchResult {
    site_id: MLSiteID;
    country_default_time_zone: string;
    query: string;
    paging: MLPaging;
    results: MLResult[];
    sort: MLSort;
    available_sorts: MLSort[];
    filters: any[];
    available_filters: MLAvailableFilter[];
    pdp_tracking: MLPDPTracking;
}

export interface MLAvailableFilter {
    id: string;
    name: string;
    type: string;
    values: MLAvailableFilterValue[];
}

export interface MLAvailableFilterValue {
    id: string;
    name: string;
    results: number;
}

export interface MLSort {
    id: string;
    name: string;
}

export interface MLPaging {
    total: number;
    primary_results: number;
    offset: number;
    limit: number;
}

export interface MLPDPTracking {
    group: boolean;
    product_info: MLProductInfo[];
}

export interface MLProductInfo {
    id: string;
    score: number;
    status: MLStatus;
}

export enum MLStatus {
    Shown = "shown",
}

export interface MLResult {
    id: string;
    title: string;
    condition: MLCondition;
    thumbnail_id: string;
    catalog_product_id: null | string;
    listing_type_id: MLListingTypeID;
    permalink: string;
    buying_mode: MLBuyingMode;
    site_id: MLSiteID;
    category_id: string;
    domain_id: string;
    thumbnail: string;
    currency_id: MLCurrencyID;
    order_backend: number;
    price: number;
    original_price: number | null;
    sale_price: null;
    available_quantity: number;
    official_store_id: number | null;
    use_thumbnail_id: boolean;
    accepts_mercadopago: boolean;
    shipping: MLShipping;
    stop_time: Date;
    seller: MLSeller;
    attributes: MLAttribute[];
    installments: MLInstallments | null;
    winner_item_id: null;
    catalog_listing: boolean;
    discounts: null;
    promotions: any[];
    inventory_id: null | string;
    official_store_name?: string;
    differential_pricing?: MLDifferentialPricing;
    variation_filters?: string[];
    variations_data?: { [key: string]: MLVariationsDatum };
}

export interface MLAttribute {
    id: string;
    name: string;
    value_id: null | string;
    value_name: null | string;
    attribute_group_id: MLAttributeGroupID;
    attribute_group_name: MLAttributeGroupName;
    value_struct: MLStruct | null;
    values: MLAttributeValue[];
    source: number;
    value_type: MLValueType;
}

export enum MLAttributeGroupID {
    Empty = "",
    Others = "OTHERS",
}

export enum MLAttributeGroupName {
    Empty = "",
    Otros = "Otros",
}

export interface MLStruct {
    number: number;
    unit: MLUnit;
}

export enum MLUnit {
    CM = "cm",
    Cc = "cc",
    G = "g",
    Kg = "kg",
    ML = "mL",
}

export enum MLValueType {
    Boolean = "boolean",
    Integer = "integer",
    List = "list",
    Number = "number",
    NumberUnit = "number_unit",
    String = "string",
}

export interface MLAttributeValue {
    id: null | string;
    name: null | string;
    struct: MLStruct | null;
    source: number;
}

export enum MLBuyingMode {
    BuyItNow = "buy_it_now",
}

export enum MLCondition {
    New = "new",
}

export enum MLCurrencyID {
    Ars = "ARS",
}

export interface MLDifferentialPricing {
    id: number;
}

export interface MLInstallments {
    quantity: number;
    amount: number;
    rate: number;
    currency_id: MLCurrencyID;
}

export enum MLListingTypeID {
    GoldPro = "gold_pro",
    GoldSpecial = "gold_special",
}

export interface MLSeller {
    id: number;
    nickname: string;
}

export interface MLShipping {
    store_pick_up: boolean;
    free_shipping: boolean;
    logistic_type: MLLogisticType;
    mode: MLMode;
    tags: string[];
    benefits: null;
    promise: null;
}

export enum MLLogisticType {
    CrossDocking = "cross_docking",
    DropOff = "drop_off",
    Fulfillment = "fulfillment",
    XdDropOff = "xd_drop_off",
}

export enum MLMode {
    Me2 = "me2",
}

export enum MLSiteID {
    Mla = "MLA",
}

export interface MLVariationsDatum {
    thumbnail: string;
    ratio: string;
    name: string;
    pictures_qty: number;
    user_product_id: string;
}

export class MLSearchResultResponse implements MLSearchResult {
    site_id: MLSiteID;
    country_default_time_zone: string;
    query: string;
    paging: MLPaging;
    results: MLResult[];
    sort: MLSort;
    available_sorts: MLSort[];
    filters: any[];
    available_filters: MLAvailableFilter[];
    pdp_tracking: MLPDPTracking;

    constructor(
        site_id: MLSiteID,
        country_default_time_zone: string,
        query: string,
        paging: MLPaging,
        results: MLResult[],
        sort: MLSort,
        available_sorts: MLSort[],
        filters: any[],
        available_filters: MLAvailableFilter[],
        pdp_tracking: MLPDPTracking
    ) {
        this.site_id = site_id;
        this.country_default_time_zone = country_default_time_zone;
        this.query = query;
        this.paging = paging;
        this.results = results;
        this.sort = sort;
        this.available_sorts = available_sorts;
        this.filters = filters;
        this.available_filters = available_filters;
        this.pdp_tracking = pdp_tracking;
    }

    static fromJson(json: any): MLSearchResultResponse {
        return new MLSearchResultResponse(
            json['site_id'],
            json['country_default_time_zone'],
            json['query'],
            json['paging'],
            json['results'],
            json['sort'],
            json['available_sorts'],
            json['filters'],
            json['available_filters'],
            json['pdp_tracking']
        );
    }
}