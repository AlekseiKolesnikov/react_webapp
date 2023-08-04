export interface WordAction {
    [actionType: string]: (state: {
        word: string;
        status: string | null;
        error: string | null;
    }, action: any) => void;

}