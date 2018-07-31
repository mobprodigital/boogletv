export interface AjaxResponse {
    /**
     * Response code , 1 for success and 0 incase of failure 
     */
    responseCode: number;
    /**
     * Data returned by web api 
     */
    data: any;
    /**
     * message returned by api
     */
    msg: string;
    /**
     * Brief info about http request
     */
    httpInfo: AjaxInfo
}

export interface AjaxInfo {
    /**
     * status of the http response
     */
    ok: boolean;

    /**
     * Status code of the http response like 500, 200 etc
     */
    status: number;
    /**
     * Status text like 
     */
    statusText: string | null;
    /**
     * Full url of web api 
     */
    url: string;
    /**
     * response body (optionl)
     */
    body?: string;
}

