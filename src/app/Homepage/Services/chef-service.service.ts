
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chef } from '../../../app/models/chef';

var chefs={
	"data": [
		{
			"id": "1000",
			"code": "f230fh0g3",
			"name": "Bamboo Watch",
			"description": "Product Description",
			"image": "bamboo-watch.jpg",
			"price": 65,
			"category": "Accessories",
			"quantity": 24,
			"inventoryStatus": "INSTOCK",
			"rating": 5
		},
		{
			"id": "1001",
			"code": "nvklal433",
			"name": "Black Watch",
			"description": "Product Description",
			"image": "black-watch.jpg",
			"price": 72,
			"category": "Accessories",
			"quantity": 61,
			"inventoryStatus": "INSTOCK",
			"rating": 4
		},
		{
			"id": "1002",
			"code": "zz21cz3c1",
			"name": "Blue Band",
			"description": "Product Description",
			"image": "blue-band.jpg",
			"price": 79,
			"category": "Fitness",
			"quantity": 2,
			"inventoryStatus": "LOWSTOCK",
			"rating": 3
		},
		{
			"id": "1003",
			"code": "244wgerg2",
			"name": "Blue T-Shirt",
			"description": "Product Description",
			"image": "blue-t-shirt.jpg",
			"price": 29,
			"category": "Clothing",
			"quantity": 25,
			"inventoryStatus": "INSTOCK",
			"rating": 5
		},
		{
			"id": "1004",
			"code": "h456wer53",
			"name": "Bracelet",
			"description": "Product Description",
			"image": "bracelet.jpg",
			"price": 15,
			"category": "Accessories",
			"quantity": 73,
			"inventoryStatus": "INSTOCK",
			"rating": 4
		},
		{
			"id": "1005",
			"code": "av2231fwg",
			"name": "Brown Purse",
			"description": "Product Description",
			"image": "brown-purse.jpg",
			"price": 120,
			"category": "Accessories",
			"quantity": 0,
			"inventoryStatus": "OUTOFSTOCK",
			"rating": 4
		},
		{
			"id": "1006",
			"code": "bib36pfvm",
			"name": "Chakra Bracelet",
			"description": "Product Description",
			"image": "chakra-bracelet.jpg",
			"price": 32,
			"category": "Accessories",
			"quantity": 5,
			"inventoryStatus": "LOWSTOCK",
			"rating": 3
		},
		{
			"id": "1007",
			"code": "mbvjkgip5",
			"name": "Galaxy Earrings",
			"description": "Product Description",
			"image": "galaxy-earrings.jpg",
			"price": 34,
			"category": "Accessories",
			"quantity": 23,
			"inventoryStatus": "INSTOCK",
			"rating": 5
		},
		{
			"id": "1008",
			"code": "vbb124btr",
			"name": "Game Controller",
			"description": "Product Description",
			"image": "game-controller.jpg",
			"price": 99,
			"category": "Electronics",
			"quantity": 2,
			"inventoryStatus": "LOWSTOCK",
			"rating": 4
		},
		{
			"id": "1009",
			"code": "cm230f032",
			"name": "Gaming Set",
			"description": "Product Description",
			"image": "gaming-set.jpg",
			"price": 299,
			"category": "Electronics",
			"quantity": 63,
			"inventoryStatus": "INSTOCK",
			"rating": 3
		},
		{
			"id": "1010",
			"code": "plb34234v",
			"name": "Gold Phone Case",
			"description": "Product Description",
			"image": "gold-phone-case.jpg",
			"price": 24,
			"category": "Accessories",
			"quantity": 0,
			"inventoryStatus": "OUTOFSTOCK",
			"rating": 4
		},
		{
			"id": "1011",
			"code": "4920nnc2d",
			"name": "Green Earbuds",
			"description": "Product Description",
			"image": "green-earbuds.jpg",
			"price": 89,
			"category": "Electronics",
			"quantity": 23,
			"inventoryStatus": "INSTOCK",
			"rating": 4
		},
		{
			"id": "1012",
			"code": "250vm23cc",
			"name": "Green T-Shirt",
			"description": "Product Description",
			"image": "green-t-shirt.jpg",
			"price": 49,
			"category": "Clothing",
			"quantity": 74,
			"inventoryStatus": "INSTOCK",
			"rating": 5
		},
		{
			"id": "1013",
			"code": "fldsmn31b",
			"name": "Grey T-Shirt",
			"description": "Product Description",
			"image": "grey-t-shirt.jpg",
			"price": 48,
			"category": "Clothing",
			"quantity": 0,
			"inventoryStatus": "OUTOFSTOCK",
			"rating": 3
		},
		{
			"id": "1014",
			"code": "waas1x2as",
			"name": "Headphones",
			"description": "Product Description",
			"image": "headphones.jpg",
			"price": 175,
			"category": "Electronics",
			"quantity": 8,
			"inventoryStatus": "LOWSTOCK",
			"rating": 5
		},
		{
			"id": "1015",
			"code": "vb34btbg5",
			"name": "Light Green T-Shirt",
			"description": "Product Description",
			"image": "light-green-t-shirt.jpg",
			"price": 49,
			"category": "Clothing",
			"quantity": 34,
			"inventoryStatus": "INSTOCK",
			"rating": 4
		},
		{
			"id": "1016",
			"code": "k8l6j58jl",
			"name": "Lime Band",
			"description": "Product Description",
			"image": "lime-band.jpg",
			"price": 79,
			"category": "Fitness",
			"quantity": 12,
			"inventoryStatus": "INSTOCK",
			"rating": 3
		},
		{
			"id": "1017",
			"code": "v435nn85n",
			"name": "Mini Speakers",
			"description": "Product Description",
			"image": "mini-speakers.jpg",
			"price": 85,
			"category": "Clothing",
			"quantity": 42,
			"inventoryStatus": "INSTOCK",
			"rating": 4
		},
		{
			"id": "1018",
			"code": "09zx9c0zc",
			"name": "Painted Phone Case",
			"description": "Product Description",
			"image": "painted-phone-case.jpg",
			"price": 56,
			"category": "Accessories",
			"quantity": 41,
			"inventoryStatus": "INSTOCK",
			"rating": 5
		},
		{
			"id": "1019",
			"code": "mnb5mb2m5",
			"name": "Pink Band",
			"description": "Product Description",
			"image": "pink-band.jpg",
			"price": 79,
			"category": "Fitness",
			"quantity": 63,
			"inventoryStatus": "INSTOCK",
			"rating": 4
		},
		{
			"id": "1020",
			"code": "r23fwf2w3",
			"name": "Pink Purse",
			"description": "Product Description",
			"image": "pink-purse.jpg",
			"price": 110,
			"category": "Accessories",
			"quantity": 0,
			"inventoryStatus": "OUTOFSTOCK",
			"rating": 4
		},
		{
			"id": "1021",
			"code": "pxpzczo23",
			"name": "Purple Band",
			"description": "Product Description",
			"image": "purple-band.jpg",
			"price": 79,
			"category": "Fitness",
			"quantity": 6,
			"inventoryStatus": "LOWSTOCK",
			"rating": 3
		},
		{
			"id": "1022",
			"code": "2c42cb5cb",
			"name": "Purple Gemstone Necklace",
			"description": "Product Description",
			"image": "purple-gemstone-necklace.jpg",
			"price": 45,
			"category": "Accessories",
			"quantity": 62,
			"inventoryStatus": "INSTOCK",
			"rating": 4
		},
		{
			"id": "1023",
			"code": "5k43kkk23",
			"name": "Purple T-Shirt",
			"description": "Product Description",
			"image": "purple-t-shirt.jpg",
			"price": 49,
			"category": "Clothing",
			"quantity": 2,
			"inventoryStatus": "LOWSTOCK",
			"rating": 5
		},
		{
			"id": "1024",
			"code": "lm2tny2k4",
			"name": "Shoes",
			"description": "Product Description",
			"image": "shoes.jpg",
			"price": 64,
			"category": "Clothing",
			"quantity": 0,
			"inventoryStatus": "INSTOCK",
			"rating": 4
		},
		{
			"id": "1025",
			"code": "nbm5mv45n",
			"name": "Sneakers",
			"description": "Product Description",
			"image": "sneakers.jpg",
			"price": 78,
			"category": "Clothing",
			"quantity": 52,
			"inventoryStatus": "INSTOCK",
			"rating": 4
		},
		{
			"id": "1026",
			"code": "zx23zc42c",
			"name": "Teal T-Shirt",
			"description": "Product Description",
			"image": "teal-t-shirt.jpg",
			"price": 49,
			"category": "Clothing",
			"quantity": 3,
			"inventoryStatus": "LOWSTOCK",
			"rating": 3
		},
		{
			"id": "1027",
			"code": "acvx872gc",
			"name": "Yellow Earbuds",
			"description": "Product Description",
			"image": "yellow-earbuds.jpg",
			"price": 89,
			"category": "Electronics",
			"quantity": 35,
			"inventoryStatus": "INSTOCK",
			"rating": 3
		},
		{
			"id": "1028",
			"code": "tx125ck42",
			"name": "Yoga Mat",
			"description": "Product Description",
			"image": "yoga-mat.jpg",
			"price": 20,
			"category": "Fitness",
			"quantity": 15,
			"inventoryStatus": "INSTOCK",
			"rating": 5
		},
		{
			"id": "1029",
			"code": "gwuby345v",
			"name": "Yoga Set",
			"description": "Product Description",
			"image": "yoga-set.jpg",
			"price": 20,
			"category": "Fitness",
			"quantity": 25,
			"inventoryStatus": "INSTOCK",
			"rating": 8
		}
	]
};

var imgs={
    "data":[
        {
            "previewImageSrc": "assets/showcase/images/galleria/galleria1.jpg",
            "thumbnailImageSrc": "assets/showcase/images/galleria/galleria1s.jpg",
            "alt": "Description for Image 1",
            "title": "Title 1"
        },
        {
            "previewImageSrc": "assets/showcase/images/galleria/galleria2.jpg",
            "thumbnailImageSrc": "assets/showcase/images/galleria/galleria2s.jpg",
            "alt": "Description for Image 2",
            "title": "Title 2"
        },
        {
            "previewImageSrc": "assets/showcase/images/galleria/galleria3.jpg",
            "thumbnailImageSrc": "assets/showcase/images/galleria/galleria3s.jpg",
            "alt": "Description for Image 3",
            "title": "Title 3"
        },
        {
            "previewImageSrc": "assets/showcase/images/galleria/galleria4.jpg",
            "thumbnailImageSrc": "assets/showcase/images/galleria/galleria4s.jpg",
            "alt": "Description for Image 4",
            "title": "Title 4"
        },
        {
            "previewImageSrc": "assets/showcase/images/galleria/galleria5.jpg",
            "thumbnailImageSrc": "assets/showcase/images/galleria/galleria5s.jpg",
            "alt": "Description for Image 5",
            "title": "Title 5"
        },
        {
            "previewImageSrc": "assets/showcase/images/galleria/galleria6.jpg",
            "thumbnailImageSrc": "assets/showcase/images/galleria/galleria6s.jpg",
            "alt": "Description for Image 6",
            "title": "Title 6"
        },
        {
            "previewImageSrc": "assets/showcase/images/galleria/galleria7.jpg",
            "thumbnailImageSrc": "assets/showcase/images/galleria/galleria7s.jpg",
            "alt": "Description for Image 7",
            "title": "Title 7"
        },
        {
            "previewImageSrc": "assets/showcase/images/galleria/galleria8.jpg",
            "thumbnailImageSrc": "assets/showcase/images/galleria/galleria8s.jpg",
            "alt": "Description for Image 8",
            "title": "Title 8"
        },
        {
            "previewImageSrc": "assets/showcase/images/galleria/galleria9.jpg",
            "thumbnailImageSrc": "assets/showcase/images/galleria/galleria9s.jpg",
            "alt": "Description for Image 9",
            "title": "Title 9"
        },
        {
            "previewImageSrc": "assets/showcase/images/galleria/galleria10.jpg",
            "thumbnailImageSrc": "assets/showcase/images/galleria/galleria10s.jpg",
            "alt": "Description for Image 10",
            "title": "Title 10"
        },
        {
            "previewImageSrc": "assets/showcase/images/galleria/galleria11.jpg",
            "thumbnailImageSrc": "assets/showcase/images/galleria/galleria11s.jpg",
            "alt": "Description for Image 11",
            "title": "Title 11"
        },
        {
            "previewImageSrc": "assets/showcase/images/galleria/galleria12.jpg",
            "thumbnailImageSrc": "assets/showcase/images/galleria/galleria12s.jpg",
            "alt": "Description for Image 12",
            "title": "Title 12"
        },
        {
            "previewImageSrc": "assets/showcase/images/galleria/galleria13.jpg",
            "thumbnailImageSrc": "assets/showcase/images/galleria/galleria13s.jpg",
            "alt": "Description for Image 13",
            "title": "Title 13"
        },
        {
            "previewImageSrc": "assets/showcase/images/galleria/galleria14.jpg",
            "thumbnailImageSrc": "assets/showcase/images/galleria/galleria14s.jpg",
            "alt": "Description for Image 14",
            "title": "Title 14"
        },
        {
            "previewImageSrc": "assets/showcase/images/galleria/galleria15.jpg",
            "thumbnailImageSrc": "assets/showcase/images/galleria/galleria15s.jpg",
            "alt": "Description for Image 15",
            "title": "Title 15"
        }
    ]
}
;

@Injectable()
export class  ChefService {

    status: string[] = ['OUTOFSTOCK', 'INSTOCK', 'LOWSTOCK'];

    productNames: string[] = [
        "Bamboo Watch", 
        "Black Watch", 
        "Blue Band", 
        "Blue T-Shirt", 
        "Bracelet", 
        "Brown Purse", 
        "Chakra Bracelet",
        "Galaxy Earrings",
        "Game Controller",
        "Gaming Set",
        "Gold Phone Case",
        "Green Earbuds",
        "Green T-Shirt",
        "Grey T-Shirt",
        "Headphones",
        "Light Green T-Shirt",
        "Lime Band",
        "Mini Speakers",
        "Painted Phone Case",
        "Pink Band",
        "Pink Purse",
        "Purple Band",
        "Purple Gemstone Necklace",
        "Purple T-Shirt",
        "Shoes",
        "Sneakers",
        "Teal T-Shirt",
        "Yellow Earbuds",
        "Yoga Mat",
        "Yoga Set",
    ];

    constructor(private http: HttpClient) { }

    getProductsSmall() {
        return this.http.get<any>('assets/products-small.json')
        .toPromise()
        .then(res => <Chef[]>res.data)
        .then(data => { return data; });
    }

    getChefs() {
        return chefs.data;
        // .toPromise()
        // .then(res => <Chef[]>res.data)
        // .then(data => { return data; });
	}
	getChefImages(id:string){
		return imgs.data;
	}

    getProductsWithOrdersSmall() {
        return this.http.get<any>('assets/products-orders-small.json')
        .toPromise()
        .then(res => <Chef[]>res.data)
        .then(data => { return data; });
    }

    generatePrduct(): Chef {
        const product: Chef =  {
            id: this.generateId(),
            name: this.generateName(),
            description: "Product Description",
            price: this.generatePrice(),
            quantity: this.generateQuantity(),
            category: "Product Category",
            inventoryStatus: this.generateStatus(),
            rating: this.generateRating()
        };

        product.image = product.name.toLocaleLowerCase().split(/[ ,]+/).join('-')+".jpg";;
        return product;
    }

    generateId() {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        
        for (var i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        
        return text;
    }

    generateName() {
        return this.productNames[Math.floor(Math.random() * Math.floor(30))];
    }

    generatePrice() {
        return Math.floor(Math.random() * Math.floor(299)+1);
    }

    generateQuantity() {
        return Math.floor(Math.random() * Math.floor(75)+1);
    }

    generateStatus() {
        return this.status[Math.floor(Math.random() * Math.floor(3))];
    }

    generateRating() {
        return Math.floor(Math.random() * Math.floor(5)+1);
    }
}