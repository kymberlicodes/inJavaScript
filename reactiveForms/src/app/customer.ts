export class Customer {

    constructor(public firstName = '',
        public lastName = '',
        public email = '',
        public address?: string,
        public city?: string,
        public state = '',
        public zip = '') {}
}