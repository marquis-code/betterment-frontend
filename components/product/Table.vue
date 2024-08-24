<template>
    <main>
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead class="ltr:text-left rtl:text-right">
                    <tr>
                        <th class="whitespace-nowrap text-left px-4 py-2 font-medium text-gray-900">Name</th>
                        <th class="whitespace-nowrap text-left px-4 py-2 font-medium text-gray-900">Description</th>
                        <th class="whitespace-nowrap text-left px-4 py-2 font-medium text-gray-900">Price</th>
                        <th class="whitespace-nowrap text-left px-4 py-2 font-medium text-gray-900">Created At</th>
                        <th class="whitespace-nowrap text-left px-4 py-2 font-medium text-gray-900">Actions</th>
                    </tr>
                </thead>

                <tbody class="divide-y divide-gray-200">
                    <tr v-for="product in filteredProducts" :key="product.id" class="odd:bg-gray-50">
                        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            <div class="flex items-center">
                                <div class="h-11 w-11 flex-shrink-0">
                                    <CoreImageZoom v-if="product.imageURL" class="h-10 w-10" :src="product.imageURL" />
                                </div>
                                <div class="ml-4">
                                    <div class="font-medium text-gray-900">
                                        {{ product.name || "Nil" }}
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">{{ product.description.slice(0, 30) + "..." || "Nil" }}</td>
                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">{{ formatPrice(product.price) || "Nil" }}</td>
                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                            {{
                                moment.utc(product.createdAt).format("MMMM Do YYYY") ||
                                "Nil"
                            }}
                        </td>
                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                            <div class="flex items-center justify-center gap-x-4">
                                <a @click.prevent="handleEditProduct(product)" href="#"
                                    class="text-indigo-600 hover:text-indigo-900">Edit</a>
                                <a @click.prevent="deleteProduct(product._id)" href="#"
                                    class="text-red-600 hover:text-red-900">Delete</a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
</template>

<script setup lang="ts">
import moment from "moment";
import { useDeleteProduct } from "@/composables/products/delete";
const { deleteProduct, loading: deleting } = useDeleteProduct();
defineProps({
    filteredProducts: {
        type: Array,
        default: () => []
    }
})

const formatPrice = (price: any) => {
    if (price == null) return "Nil";
    return new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
    }).format(price);
};

const emit = defineEmits<{
    (event: 'edit', data: any): void
}>()

const handleEditProduct = (product: any) => {
    emit('edit', product)
};
</script>
