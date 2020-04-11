## An Inventory API

### Project Config

To install dependencies
```JavaScript
    npm install
```
In a .env file, add your mongodb url
```JavaScript
    MONGOURI = 'XXXXXX'
    PORT= 'XXXX'
```
### Project start
```JavaScript
    npm start
```
### Get all categories

```JavaScript
    GET '/api/category/all'
```
Sample Response
```JavaScript
    {
        success: true,
        message: 'Categories retrieved successfully',
        categories: {
            {
                categoryId: 'XXXXXX',
                name: 'Soft drinks',
                description: 'All beverages with the exception of alcoholic or hot beverages.',
                url: 'softdrinks.url',
                items: ['item1Id','item2Id']
            },
            {
                categoryId: 'YYYYYYY',
                name: 'meat',
                description: 'All animal flesh products',
                url: 'meat.url',
                items: ['item1Id','item2Id']
            }
        }
    }
```

### GET one category

```JavaScript
    GET '/api/category/get/:categoryId'
```
Sample Response
```JavaScript
    {
        success: true,
        message: 'Category retrieved successfully',
        category: {
            categoryId: 'XXXXXX',
            name: 'Soft drinks',
            description: 'All beverages with the exception of alcoholic or hot beverages.',
            url: 'softdrinks.url',
            items: ['item1Id','item2Id']
        }
    }
```

### CREATE a category

```JavaScript
    POST '/api/category/create'
```
Payload
```JavaScript
{
    name: 'Soft drinks',
    description: 'All beverages with the exception of alcoholic or hot beverages.',
    url: 'softdrinks.url'
}

```
Sample Response
```JavaScript
    {
        success: true,
        message: 'Categories created successfully',
        category: {
            categoryId: 'XXXXXX'
            name: 'Soft drinks',
            description: 'All beverages with the exception of alcoholic or hot beverages.',
            url: 'softdrinks.url',
            items: []
        }
    }
```

### Update a category

```JavaScript
    PUT '/api/category/update/:categoryId'
```
Payload
```JavaScript
{
    description: 'All carbonated drinks',
}

```
Sample Response
```JavaScript
    {
        success: true,
        message: 'Category updated successfully',
        category: {
            categoryId: 'XXXXXX'
            name: 'Soft drinks',
            description: 'All carbonated drinks',
            url: 'softdrinks.url',
            items: ['item1Id','item2Id']
        }
    }
```

### Delete a category
```JavaScript
    PUT '/api/category/delete/categoryId'
```
Sample Response

```JavaScript
    {
        success: true,
        message: 'Category deleted successfully'
    }
```
### Get all items

```JavaScript
    GET '/api/item/all'
```
Sample Response
```JavaScript
    {
        success: true,
        message: 'Items retrieved successfully',
        categories: {
            {
                "_id": "5e921ecca09fc63066185a7d",
                "name": "coke",
                "description": "A 500ml coke drink",
                "size": "500ml",
                "price": 50,
                "categoryName": "Soft drinks",
                "no_in_stock": 21,
                "url": "coke.url"
            },
            {   
                "_id": "5e921ecca09fc63066185a7d",
                "name": "Chicken strips",
                "description": "meat",
                "size": "1kg",
                "price": 1000,
                "categoryName": "meat",
                "no_in_stock": 30,
                "url": "chicken.url",
            }
        }
    }
```

### GET one item

```JavaScript
    GET '/api/item/get/:itemId'
```
Sample Response
```JavaScript
    {
        success: true,
        message: 'Item retrieved successfully',
        item: {
                "_id": "5e921ecca09fc63066185a7d",
                "name": "coke",
                "description": "A 500ml coke drink",
                "size": "500ml",
                "price": 50,
                "categoryName": "Soft drinks",
                "no_in_stock": 21,
                "url": "coke.url"
            }
    }
```

### CREATE an item

```JavaScript
    POST '/api/category/create/item'
```
Payload
```JavaScript
{
    name: 'coke',
    size: '500ml',
    price: '50',
    description: 'A 500ml coke drink',
    url: 'coke.url'
}

```
Sample Response
```JavaScript
    {
        success: true,
        message: 'Item created successfully',
        item: {
            
                "_id": "5e921ecca09fc63066185a7d",
                "name": "coke",
                "description": "A 500ml coke drink",
                "size": "500ml",
                "price": 50,
                "categoryName": "Soft drinks",
                "no_in_stock": 21,
                "url": "coke.url"
            }
    }
```

### Update an item

```JavaScript
    PUT '/api/item/update/:itemId'
```
Payload
```JavaScript
{
    description: 'A 500ml can of coke',
}

```
Sample Response
```JavaScript
    {
        success: true,
        message: 'Category updated successfully',
        category: {
                "_id": "5e921ecca09fc63066185a7d",
                "name": "coke",
                "description": "A 500ml can of coke",
                "size": "500ml",
                "price": 50,
                "categoryName": "Soft drinks",
                "no_in_stock": 21,
                "url": "coke.url"
            }
    }
```

### Delete a category
```JavaScript
    PUT '/api/category/delete/categoryId'
```
Sample Response

```JavaScript
    {
        success: true,
        message: 'Item deleted successfully'
    }
```
