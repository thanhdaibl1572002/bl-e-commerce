'use client'
import { Dispatch, FC, ReactElement, ReactNode, createContext, useContext, useReducer } from 'react'
import { IProductProps } from '@/components/pages/store/shop/Product'

const sampleShopProducts: Array<IProductProps> = [
    {
        imageSrc: '/images/product-1.png',
        discountPercentage: 20,
        brand: 'Apple',
        name: '2022 Apple iMac with Retina 5K Display',
        rating: 5,
        ratingCount: 100,
        currentPrice: 19900000,
        originalPrice: 21900000,
        features: [
            '27-inch (diagonal) Retina 5K display',
            'AMD Radeon Pro 5300 graphics'
        ]
    },
    {
        imageSrc: '/images/product-2.png',
        discountPercentage: 15,
        brand: 'Samsung',
        name: 'Samsung Galaxy S22 Ultra',
        rating: 4.5,
        ratingCount: 80,
        currentPrice: 29990000,
        originalPrice: 34990000,
        features: [
            '6.8-inch Dynamic AMOLED 2X display',
            'Exynos 2200 chipset'
        ]
    },
    {
        imageSrc: '/images/product-3.png',
        discountPercentage: 10,
        brand: 'Sony',
        name: 'Sony WH-1000XM4 Wireless Headphones',
        rating: 4.8,
        ratingCount: 120,
        currentPrice: 4990000,
        originalPrice: 5490000,
        features: [
            'Industry-leading noise cancellation',
            '30-hour battery life'
        ]
    },
    {
        imageSrc: '/images/product-1.png',
        discountPercentage: 20,
        brand: 'Apple',
        name: '2022 Apple iMac with Retina 5K Display',
        rating: 5,
        ratingCount: 100,
        currentPrice: 19900000,
        originalPrice: 21900000,
        features: [
            '27-inch (diagonal) Retina 5K display',
            'AMD Radeon Pro 5300 graphics'
        ]
    },
    {
        imageSrc: '/images/product-2.png',
        discountPercentage: 15,
        brand: 'Samsung',
        name: 'Samsung Galaxy S22 Ultra',
        rating: 4,
        ratingCount: 80,
        currentPrice: 29990000,
        originalPrice: 34990000,
        features: [
            '6.8-inch Dynamic AMOLED 2X display',
            'Exynos 2200 chipset'
        ]
    },
    {
        imageSrc: '/images/product-3.png',
        discountPercentage: 10,
        brand: 'Sony',
        name: 'Sony WH-1000XM4 Wireless Headphones',
        rating: 3,
        ratingCount: 120,
        currentPrice: 4990000,
        originalPrice: 5490000,
        features: [
            'Industry-leading noise cancellation',
            '30-hour battery life'
        ]
    },
    {
        imageSrc: '/images/product-1.png',
        discountPercentage: 20,
        brand: 'Apple',
        name: '2022 Apple iMac with Retina 5K Display',
        rating: 1,
        ratingCount: 100,
        currentPrice: 19900000,
        originalPrice: 21900000,
        features: [
            '27-inch (diagonal) Retina 5K display',
            'AMD Radeon Pro 5300 graphics'
        ]
    },
    {
        imageSrc: '/images/product-2.png',
        discountPercentage: 15,
        brand: 'Samsung',
        name: 'Samsung Galaxy S22 Ultra',
        rating: 2,
        ratingCount: 80,
        currentPrice: 29990000,
        originalPrice: 34990000,
        features: [
            '6.8-inch Dynamic AMOLED 2X display',
            'Exynos 2200 chipset'
        ]
    },
    {
        imageSrc: '/images/product-3.png',
        discountPercentage: 10,
        brand: 'Sony',
        name: 'Sony WH-1000XM4 Wireless Headphones',
        rating: 2.5,
        ratingCount: 120,
        currentPrice: 4990000,
        originalPrice: 5490000,
        features: [
            'Industry-leading noise cancellation',
            '30-hour battery life'
        ]
    },
    {
        imageSrc: '/images/product-1.png',
        discountPercentage: 20,
        brand: 'Apple',
        name: '2022 Apple iMac with Retina 5K Display',
        rating: 5,
        ratingCount: 100,
        currentPrice: 19900000,
        originalPrice: 21900000,
        features: [
            '27-inch (diagonal) Retina 5K display',
            'AMD Radeon Pro 5300 graphics'
        ]
    },
    {
        imageSrc: '/images/product-1.png',
        discountPercentage: 20,
        brand: 'Apple',
        name: '2022 Apple iMac with Retina 5K Display',
        rating: 3.2,
        ratingCount: 100,
        currentPrice: 19900000,
        originalPrice: 21900000,
        features: [
            '27-inch (diagonal) Retina 5K display',
            'AMD Radeon Pro 5300 graphics'
        ]
    },
    {
        imageSrc: '/images/product-2.png',
        discountPercentage: 15,
        brand: 'Samsung',
        name: 'Samsung Galaxy S22 Ultra',
        rating: 4,
        ratingCount: 80,
        currentPrice: 29990000,
        originalPrice: 34990000,
        features: [
            '6.8-inch Dynamic AMOLED 2X display',
            'Exynos 2200 chipset'
        ]
    },
]

interface IProductState {
    productView: 'grid' | 'list'
    products: Array<IProductProps>
}

interface IProductAction {
    type: 'TOOL/VIEW' | 'TOOL/RESET' | 'TOOL/SORT' | 'FILTER/APPLY' | 'FILTER/RESET' | 'LOADMORE'
    payload?: any
}

interface IProductContext {
    productState: IProductState
    productDispatch: Dispatch<IProductAction>
}

const ProductContext = createContext<IProductContext | undefined>(undefined)

const productInitialState: IProductState = {
    productView: 'grid',
    products: sampleShopProducts
}

const productReducer = (productState: IProductState, productAction: IProductAction): IProductState => {
    switch (productAction.type) {
        case 'TOOL/VIEW':
            return { ...productState, productView: productAction.payload }
        case 'TOOL/RESET':
            console.log('Reset Tool')
            return productState
        case 'TOOL/SORT':
            console.log(productAction.payload)
            return productState
        case 'FILTER/APPLY':
            console.log(productAction.payload)
            return productState
        case 'FILTER/RESET':
            console.log('Reset Filter')
            return productState
        case 'LOADMORE':
            console.log('Load More')
            return productState
    }
}

interface IProductProvider {
    children: ReactNode | ReactElement
}

export const ProductProvider: FC<IProductProvider> = ({ children }) => {
    const [productState, productDispatch] = useReducer(productReducer, productInitialState)
    return <ProductContext.Provider value={{ productState, productDispatch }}>{children}</ProductContext.Provider>
}

export const useProductContext = (): IProductContext => {
    const context = useContext(ProductContext)
    if (!context)
        throw new Error('useContext must be used within a ProductProvider')
    return context
}