type Payload = {
    payload: {
        id: string;
        timestamp: string;
        type: "work_updated";
        unique_key: string;
        webhook_id: string;
        work_updated: {
            old_work: WorkDetails;
            work: WorkDetails;
        };
    };
    context: {
        dev_oid: string;
        automation_id: string;
        source_id: string;
        snap_in_id: string;
        snap_in_version_id: string;
        service_account_id: string;
        secrets: {
            service_account_token: string;
        };
        user_id: string;
        event_id: string;
        execution_id: string;
        attempt_number: number;
    };
    execution_metadata: {
        request_id: string;
        function_name: string;
        event_type: "work_updated";
        devrev_endpoint: string;
    };
    input_data: {
        global_values: Record<string, unknown>;
        event_sources: {
            "devrev-webhook": string;
        };
        keyrings: null | Record<string, unknown>;
        resources: {
            keyrings: Record<string, unknown>;
            tags: Record<string, unknown>;
        };
    };
};
type WorkDetails = {
    applies_to_part: {
        display_id: string;
        id: string;
        id_v1: string;
        name: string;
        owned_by: User[];
        stage: {
            name: string;
        };
        type: "product";
    };
    body: string;
    created_by: User;
    created_date: string;
    custom_fields: null | Record<string, unknown>;
    display_id: string;
    id: string;
    id_v1: string;
    is_spam: boolean;
    modified_by: User;
    modified_date: string;
    needs_response: boolean;
    owned_by: User[];
    reported_by?: User[];
    severity: "low" | "medium" | "high";
    source_channel: string;
    stage: {
        name: string;
        notes: string;
        ordinal: number;
        stage: {
            id: string;
            name: string;
        };
        state: {
            id: string;
            is_final: boolean;
            name: string;
        };
    };
    state: string;
    stock_schema_fragment: string;
    tags: Tag[];
    title: string;
    type: "ticket";
};
type User = {
    display_handle: string;
    display_id: string;
    display_name: string;
    full_name: string;
    email?: string;
    id: string;
    id_v1: string;
    state: "active" | "inactive";
    thumbnail: string;
    type: "sys_user" | "dev_user" | "rev_user";
    external_ref?: string;
};
type Tag = {
    id: {
        display_id: string;
        id: string;
        id_v1: string;
        name: string;
        style: string;
    };
    tag: {
        display_id: string;
        id: string;
        id_v1: string;
        name: string;
        style: string;
    };
};
type InputData = {
    global_values: Record<string, unknown>;
    event_sources: {
        "devrev-webhook": string;
    };
    keyrings: null | Record<string, unknown>;
    resources: {
        keyrings: Record<string, unknown>;
        tags: Record<string, unknown>;
    };
};
