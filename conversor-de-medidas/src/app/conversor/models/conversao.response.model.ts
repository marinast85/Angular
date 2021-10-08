export class ConversaoResponse{
    constructor(
        public unitFrom?: string,
        public unitTo?: string,
        public originalValue?: number,
        public convertedValue?: number,
    ){}
}
