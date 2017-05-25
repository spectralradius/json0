declare interface type {
    name: string;
    uri: string;
}

declare class json implements type {
    name: "json0";
    uri: "http://sharejs.org/types/JSONv0";
}

declare namespace json {

    interface component {
        p: string[];
    }

    class operation {
        m?: { ts: string, uid: string };
        op: component[];
    }

    namespace operation {

        namespace number {

            class increment implements component {
                p: string[];
                na: number;
            }
        }

        namespace list {

            class insert implements component {
                p: string[];
                li: any;
            }

            class remove implements component {
                p: string[];
                ld: any;
            }

            class replace implements component {
                p: string[];
                li: any;
                ld: any;
            }

            class move implements component {
                p: string[];
                lm: number;
            }
        }

        namespace object {

            class insert implements component {
                p: string[];
                oi: any;
            }

            class remove implements component {
                p: string[];
                oi: any;
            }

            class replace implements component {
                p: string[];
                oi: any;
                od: any;
            }
        }

        namespace string {

            class insert implements component {
                p: string[];
                si: any;
            }

            class remove implements component {
                p: string[];
                sd: any;
            }
        }
    }
}

export = json;