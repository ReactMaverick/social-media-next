# Social Media (NextJS)

## Getting Started

First, install dependencies:

```bash
npm i
```

Then, start the development server:

```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Routes

Page Routes
* app/page.js (root route '/')
* app/xxx/page.js (route '/xxx')
* app/xxx/xxx/page.js (route /xxx/xxx)

API Routes
* api/1.0/route.js (root api route '/api/')
* api/1.0/xxx/route.js (api route '/api/xxx')

## Utilities

utils/ (Add additional utility files (auth, validation, db connection here))

## Components

components/componentName/componentName.js

## Models (Schema)

Define Schemas and Models inside models/someModel.js

```js
// Import the Mongoose library, which is an ODM (Object-Document Mapper) for MongoDB
import mongoose from 'mongoose';

// Define the schema for the 'User' collection in MongoDB
const someSchema = new mongoose.Schema({
    // Define a fields 
    someProperty: { type: String, required: true },
});

// Create a Mongoose model named 'User' based on the defined schema
const Some = mongoose.models.Some || mongoose.model('Some', someSchema);

// Export the 'Some' model so that it can be used in other parts of the application
export default Some;
```