export declare function postCall(url: string, payload: any, authorization: string): Promise<any>;
export declare function getCall(url: string, authorization: string): Promise<any>;
export declare function generateQueryString(params: {
    [key: string]: any;
}): string;
