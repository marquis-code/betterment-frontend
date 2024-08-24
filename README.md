Frontend Documentation

The Frontend of the application was hosted on vercel.com 
Here is the url of the frontend application (https://learnly-app-edu-tech-frontend.vercel.app/)

Overview
The frontend of the application is built using Nuxt 3 with the Composition API and TypeScript. It provides a user-friendly interface for managing products and user authentication.


Features
Product Listing: Displays products with details such as name, description, price, and image.
Add Product Form: Allows authenticated users to add new products.
Search Bar: Filters products by name.
User Authentication: Login and register forms for user authentication.

Responsive Design: Ensures compatibility across devices.
Technologies
Nuxt 3
TypeScript
Vuex
Tailwind CSS
Axios

Project Structure
frontend/
├── apiFactory/
│   ├── auth.ts
│   ├── product.ts
│   └── axios.config.ts
├── composables/
│   ├── auth/
│   │   ├── login.ts
│   │   └── register.ts
│   └── products/
│       ├── create.ts
│       ├── delete.ts
│       ├── fetch.ts
│       ├── fetchAll.ts
│       └── update.ts
├── pages/
│   ├── index.vue
│   ├── login.vue
│   ├── register.vue
│   └── product.vue
├── store/
│   ├── index.ts
│   └── user.ts
    ___ product.ts
├── layouts/
├── middleware/
└── plugins/
    └── toast.js
API Factories
auth.ts
Handles authentication-related API calls such as register and login.

typescript
import { axiosInstance } from './axios.config';

export const authApiFactory = {
  register(data: any) {
    return axiosInstance.post('/auth/signup', data);
  },
  login(data: any) {
    return axiosInstance.post('/auth/login', data);
  }
};

product.ts
Handles product-related API calls such as fetching, creating, updating, and deleting products.

typescript
import { axiosInstance } from './axios.config';

export const productApiFactory = {
  fetchProducts() {
    return axiosInstance.get(`/product`);
  },
  createProduct(payload: any) {
    return axiosInstance.post(`/product/create`, payload);
  },
  fetchProductById(id: string | number) {
    return axiosInstance.get(`/product/${id}`);
  },
  updateProduct(payload: any, id: string | number) {
    return axiosInstance.patch(`/product/${id}`, payload);
  },
  deleteProduct(id: string | number) {
    return axiosInstance.delete(`/product/${id}`);
  },
  fetchAllProducts() {
    return axiosInstance.get(`/product/all-products`);
  },
};

Composables
Auth Composables: Manage user authentication logic, including login and registration.
Product Composables: Manage product operations such as creating, updating, deleting, and fetching products.

Store
State management is handled using Vuex, which manages user and product states across the application.

Plugins
Includes plugins such as Toast for user notifications.

Styling
The application uses Tailwind CSS for responsive and modern design elements.

How to Run
Install dependencies: yarn install
yarn eun dev
