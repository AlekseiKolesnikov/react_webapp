export interface WordState {
    word: string;
    status: string | null;
    error: any | null;
}

export interface WordAction {
    [actionType: string]: (state: {
        word: string;
        status: string | null;
        error: any | null;
    }, action: any) => void;

}



