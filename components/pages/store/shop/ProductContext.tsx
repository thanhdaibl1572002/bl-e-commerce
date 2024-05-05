'use client'
import { Dispatch, FC, ReactElement, ReactNode, createContext, useContext, useReducer } from 'react'
import { IProductProps } from '@/components/pages/store/shop/Product'
import { phoneData } from '@/components/pages/store/shop/data/products'

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
    products: phoneData
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