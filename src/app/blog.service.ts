
export class BlogService {
    // Database
    data: object[] = [
        {
            id: "1",
            title: "John Wick",
            active: false
        },
        {
            id: "2",
            title: "John Doe",
            active: true
        },
        {
            id: "3",
            title: "John W.",
            active: true
        }
    ];


    getBlog() {
        return this.data;
    }
}