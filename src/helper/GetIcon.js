import { Colors } from "../constants/Colors";


export class BackzgroundImage {
    static images = [
        {
            name: Colors.green,
            image: '/assets/images/piles/green.png'
        },
        {
            name: Colors.blue,
            image: '/assets/images/piles/blue.png'
        },
        {
            name: Colors.red,
            image: '/assets/images/piles/red.png'
        },
        {
            name: Colors.yellow,
            image: '/assets/images/piles/yellow.png'
        },
        {
            name: 1,
            image: '/assets/images/dice/1.png'
        },
        {
            name: 2,
            image: '/assets/images/dice/2.png'
        },
        {
            name: 3,
            image: '/assets/images/dice/3.png'
        },

        {
            name: 4,
            image: '/assets/images/dice/4.png'
        },
        {
            name: 5,
            image: '/assets/images/dice/5.png'
        },
        {
            name: 6,
            image: '/assets/images/dice/6.png'
        }
    ];
    static GetImage = (name) => {
        const found = BackzgroundImage.images.find(e => e.name === name);
        return found ? found.image : "dc";
    }
}